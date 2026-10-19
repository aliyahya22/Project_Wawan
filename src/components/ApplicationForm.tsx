import React, { useState, useMemo } from 'react';
import { ApplicationFormData } from '../types';
import { 
  User, 
  MessageCircle, 
  Car, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { openWhatsAppApplication } from '../utils/whatsapp';

import { useCms } from '../context/CmsContext';

interface ApplicationFormProps {
  initialCollateral?: string;
  onSuccess?: () => void;
  isEmbedded?: boolean;
  showTitle?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  initialCollateral = '',
  onSuccess,
  isEmbedded = false,
  showTitle = true,
}) => {
  const { addSubmission, settings, vehicleCriteria } = useCms();

  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    whatsappNumber: '',
    collateralType: initialCollateral || '',
    vehicleYear: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Available collateral options dynamically linked to CMS vehicle criteria
  const collateralOptions = [
    { 
      value: 'BPKB Motor', 
      label: `BPKB Motor (Minimal Tahun ${vehicleCriteria.motor?.minYear || 2017})`, 
      minYear: vehicleCriteria.motor?.minYear || 2017,
      type: 'Motor'
    },
    { 
      value: 'BPKB Mobil', 
      label: `BPKB Mobil (Minimal Tahun ${vehicleCriteria.mobil?.minYear || 2010})`, 
      minYear: vehicleCriteria.mobil?.minYear || 2010,
      type: 'Mobil'
    },
    { 
      value: 'BPKB Truk', 
      label: `BPKB Truk (Minimal Tahun ${vehicleCriteria.truck?.minYear || 2019})`, 
      minYear: vehicleCriteria.truck?.minYear || 2019,
      type: 'Truk'
    },
    { 
      value: 'BPKB Pickup', 
      label: `BPKB Pickup (Minimal Tahun ${vehicleCriteria.pickup?.minYear || 2019})`, 
      minYear: vehicleCriteria.pickup?.minYear || 2019,
      type: 'Pickup'
    },
  ];

  // Selected collateral helper
  const selectedCollateral = collateralOptions.find((c) => c.value === formData.collateralType);

  // Year options list dynamically tailored to selected collateral type
  const currentYear = new Date().getFullYear();
  const yearOptions = useMemo(() => {
    const min = selectedCollateral ? selectedCollateral.minYear : 2010;
    const list: string[] = [];
    for (let y = currentYear; y >= min; y--) {
      list.push(y.toString());
    }
    // Also add option for older years with disclaimer
    if (min > 2010) {
      for (let y = min - 1; y >= 2010; y--) {
        list.push(`${y} (Perlu Review Khusus)`);
      }
    }
    return list;
  }, [selectedCollateral, currentYear]);

  // Validation check for vehicle year according to collateral type
  const parsedSelectedYear = parseInt(formData.vehicleYear);
  const isBelowCriteria =
    selectedCollateral &&
    formData.vehicleYear &&
    !isNaN(parsedSelectedYear) &&
    parsedSelectedYear < selectedCollateral.minYear;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsappNumber.trim()) return;

    // Automatically record submission in client-side CMS
    addSubmission(formData);

    // Forward to WhatsApp with configured recipient number
    openWhatsAppApplication(formData, settings.whatsappNumber);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      whatsappNumber: '',
      collateralType: initialCollateral || '',
      vehicleYear: '',
      address: '',
    });
  };

  if (submitted) {
    return (
      <div className="p-8 text-center space-y-5 bg-white rounded-2xl border border-stone-200/90 shadow-xs">
        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto text-amber-800 border border-amber-200">
          <CheckCircle2 className="w-8 h-8 text-amber-600" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-stone-900">
            Formulir Terkirim ke WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
            Permohonan pengajuan atas nama <strong>{formData.fullName}</strong> dengan jaminan <strong>{formData.collateralType} ({formData.vehicleYear})</strong> telah diteruskan ke WhatsApp konsultan resmi kami.
          </p>
        </div>

        <div className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200/80 max-w-sm mx-auto text-left text-xs space-y-1.5 text-stone-700">
          <div className="flex justify-between">
            <span className="text-stone-500">Nama:</span>
            <span className="font-bold text-stone-900">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">WhatsApp:</span>
            <span className="font-semibold text-stone-900">{formData.whatsappNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Jaminan:</span>
            <span className="font-semibold text-stone-900">{formData.collateralType} ({formData.vehicleYear})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Domisili:</span>
            <span className="font-medium text-stone-900">{formData.address}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            type="button"
            onClick={() => openWhatsAppApplication(formData)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-stone-950" />
            <span>Kirim Ulang ke WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl transition-colors w-full sm:w-auto"
          >
            Isi Pengajuan Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-xl mx-auto ${isEmbedded ? '' : ''}`}>
      {/* Header matching user uploaded image */}
      {showTitle && (
        <div className="mb-6 space-y-1.5 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Ajukan Sekarang
          </h2>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Isi data singkat di bawah ini, tim kami akan segera menghubungi via WhatsApp.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* 1. Nama Lengkap */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-sm font-bold text-stone-900">
            <User className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Nama Lengkap</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contoh: Budi Santoso"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-white border border-stone-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-stone-900 placeholder:text-stone-400 shadow-2xs transition-all"
          />
        </div>

        {/* 2. Nomor WhatsApp */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-sm font-bold text-stone-900">
            <MessageCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Nomor WhatsApp</span>
          </label>
          <input
            type="tel"
            required
            placeholder="Contoh: 08123456789"
            value={formData.whatsappNumber}
            onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-white border border-stone-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-stone-900 placeholder:text-stone-400 shadow-2xs transition-all"
          />
        </div>

        {/* Kriteria Tahun Resmi Badges */}
        <div className="p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 space-y-1.5">
          <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center justify-between">
            <span>Standar Minimal Tahun Kendaraan:</span>
            <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Mitra AXI</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
            <div className="bg-white p-2 rounded-xl border border-stone-200/70 text-center">
              <span className="text-stone-500 block text-[10px]">Motor</span>
              <span className="font-bold text-stone-900">Mulai 2017</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-stone-200/70 text-center">
              <span className="text-stone-500 block text-[10px]">Mobil</span>
              <span className="font-bold text-stone-900">Mulai 2010</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-stone-200/70 text-center">
              <span className="text-stone-500 block text-[10px]">Truk</span>
              <span className="font-bold text-stone-900">Mulai 2019</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-stone-200/70 text-center">
              <span className="text-stone-500 block text-[10px]">Pickup</span>
              <span className="font-bold text-stone-900">Mulai 2019</span>
            </div>
          </div>
        </div>

        {/* 3. Row Jaminan & Tahun Kendaraan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Jaminan */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-stone-900">
              <Car className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Jaminan BPKB</span>
            </label>
            <div className="relative">
              <select
                required
                value={formData.collateralType}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    collateralType: val,
                    vehicleYear: '', // reset selected year on collateral change
                  }));
                }}
                className="w-full px-4 py-3 text-sm bg-white border border-stone-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-stone-900 appearance-none shadow-2xs cursor-pointer transition-all"
              >
                <option value="" disabled className="text-stone-400">
                  Pilih Jenis Jaminan
                </option>
                {collateralOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tahun Kendaraan */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-sm font-bold text-stone-900">
              <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Tahun Kendaraan</span>
            </label>
            <div className="relative">
              <select
                required
                value={formData.vehicleYear}
                onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-white border border-stone-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-stone-900 appearance-none shadow-2xs cursor-pointer transition-all"
              >
                <option value="" disabled className="text-stone-400">
                  {selectedCollateral ? `Pilih Tahun (${selectedCollateral.type})` : 'Pilih Jaminan Terlebih Dahulu'}
                </option>
                {yearOptions.map((year) => (
                  <option key={year} value={year.split(' ')[0]}>
                    Tahun {year}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Optional gentle criteria hint */}
        {isBelowCriteria && selectedCollateral && (
          <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-stone-800 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <span className="font-semibold">Perhatian:</span> Standar minimal resmi {selectedCollateral.value} adalah <strong>tahun {selectedCollateral.minYear}</strong>. Unit kendaraan Anda di bawah standar tahun tetap dapat kami konsultasikan untuk pengecekan kondisi mesin & kelayakan fisik khusus.
            </div>
          </div>
        )}

        {/* 4. Alamat Domisili */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-sm font-bold text-stone-900">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Alamat Domisili</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contoh: Kec. Lengkong, Kota Bandung"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-white border border-stone-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-stone-900 placeholder:text-stone-400 shadow-2xs transition-all"
          />
        </div>

        {/* 5. Tombol Kirim Pengajuan with WhatsApp icon */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-base text-stone-950 bg-[#FFCC00] hover:bg-[#F5C400] active:bg-[#E6B800] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kirim Pengajuan</span>
            <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
          </button>
        </div>
      </form>
    </div>
  );
};
