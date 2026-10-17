import React, { useState } from 'react';
import { VehicleType } from '../types';
import { VEHICLE_CRITERIA, PROFILE_REQUIREMENTS } from '../data/mockData';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { 
  Car, 
  Bike, 
  Truck, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { ApplicationForm } from './ApplicationForm';

interface DanaTunaiViewProps {
  onOpenApplication: (vehicleType?: VehicleType) => void;
}

export const DanaTunaiView: React.FC<DanaTunaiViewProps> = ({ onOpenApplication }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('mobil');
  const [activeProfileTab, setActiveProfileTab] = useState<number>(0);

  const criteria = VEHICLE_CRITERIA[selectedVehicle];

  const collateralTypeString =
    selectedVehicle === 'motor'
      ? 'BPKB Motor'
      : selectedVehicle === 'truck'
      ? 'BPKB Truk'
      : selectedVehicle === 'pickup'
      ? 'BPKB Pickup'
      : 'BPKB Mobil';

  const scrollToForm = () => {
    const el = document.getElementById('dana-tunai-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenApplication(selectedVehicle);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* BENTO ROW 1: HEADER & DIRECT APPLICATION FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Overview Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FAF9F6] border border-stone-200/80 px-3 py-1.5 rounded-xl">
              <AdiraLogo size="sm" variant="badge" />
              <span className="text-xs font-semibold text-stone-600">
                Layanan Pembiayaan Multiguna Resmi
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Pinjaman Dana Tunai Gadai BPKB Motor, Mobil, Truk & Pickup
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              Fasilitas pinjaman dana tunai beragunan buku BPKB fisik asli untuk kebutuhan modal kerja, renovasi, pendidikan, atau likuiditas darurat. Kendaraan tetap berada di tangan Anda dan bebas dipergunakan untuk operasional harian.
            </p>

            <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 space-y-2">
              <div className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                Ketentuan Minimal Tahun:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-700">
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Motor</span>
                  <span className="font-bold text-stone-900">Min. 2016</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Mobil</span>
                  <span className="font-bold text-stone-900">Min. 2010</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Truk</span>
                  <span className="font-bold text-stone-900">Min. 2018</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Pickup</span>
                  <span className="font-bold text-stone-900">Min. 2021</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ajukan Dana Tunai Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Pinjaman Dana Tunai BPKB')}
              className="px-5 py-3.5 bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Konsultasi WA Cepat</span>
            </button>
          </div>
        </div>

        {/* Bento Form Card (5 Cols) */}
        <div id="dana-tunai-form-section" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-center">
          <ApplicationForm
            isEmbedded={true}
            initialCollateral={collateralTypeString}
            showTitle={true}
          />
        </div>

      </div>

      {/* BENTO ROW 2: SPESIFIKASI KENDARAAN (INTERACTIVE SELECTOR CARD) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Plafon & Ketentuan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            Plafon & Bunga Berdasarkan Tipe Kendaraan
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Pilih kategori armada di bawah ini untuk melihat rincian batas tahun, suku bunga, dan batas tenor resmi.
          </p>
        </div>

        {/* Bento Category Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'motor', label: 'BPKB Motor', sub: 'Mulai 2016', icon: <Bike className="w-4 h-4" /> },
            { id: 'mobil', label: 'BPKB Mobil', sub: 'Mulai 2010', icon: <Car className="w-4 h-4" /> },
            { id: 'truck', label: 'BPKB Truk', sub: 'Mulai 2018', icon: <Truck className="w-4 h-4" /> },
            { id: 'pickup', label: 'BPKB Pickup', sub: 'Mulai 2021', icon: <Car className="w-4 h-4" /> },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedVehicle(item.id as VehicleType)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedVehicle === item.id
                  ? 'border-amber-400 bg-amber-50/70 text-stone-900 shadow-xs'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-xs">{item.label}</span>
                {item.icon}
              </div>
              <div className="text-[11px] text-stone-500">{item.sub}</div>
            </button>
          ))}
        </div>

        {/* Selected Category Details Bento */}
        <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-stone-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-stone-500 block">Kriteria Minimal Tahun:</span>
            <span className="text-base font-bold text-stone-900 block">Tahun {criteria.minYear} ke Atas</span>
            <p className="text-xs text-stone-600 leading-relaxed">{criteria.description}</p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-stone-500 block">Maksimal Plafon Pencairan:</span>
            <span className="text-base font-bold text-stone-900 font-mono block">
              Hingga Rp {criteria.maxPlafondMillion}.000.000
            </span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Suku bunga mulai <strong>{criteria.interestRatePerMonth}% / bulan</strong> dengan pilihan tenor fleksibel hingga <strong>{criteria.maxTenorMonths} bulan</strong>.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-stone-500 block">Merk & Model Populer:</span>
            <div className="text-xs text-stone-700 space-y-1">
              {criteria.popularModels.map((m, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BENTO ROW 3: ALUR 4 TAHAP PROSES GADAI BPKB */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Transparansi Alur
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            Proses Gadai BPKB Langkah Demi Langkah
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Alur dari konsultasi awal hingga dana masuk ke rekening Anda secara resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h3 className="text-xs font-bold text-stone-900">Pra-Pengecekan Online</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Kirimkan foto STNK & detail unit kendaraan. Tim kami menghitung estimasi taksasi nilai pencairan dalam hitungan menit.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h3 className="text-xs font-bold text-stone-900">Jemput Berkas & Cek Fisik</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Surveyor resmi datang ke alamat Anda untuk verifikasi dokumen dan gesek nomor rangka serta nomor mesin tanpa biaya.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h3 className="text-xs font-bold text-stone-900">Persetujuan & Tanda Tangan</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Penandatanganan kontrak kredit resmi dan penyerahan BPKB asli dengan tanda terima legal berstempel resmi.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-emerald-300 bg-emerald-50/70 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
              4
            </div>
            <h3 className="text-xs font-bold text-emerald-950">Pencairan Dana Langsung</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Dana ditransfer utuh langsung ke nomor rekening tabungan Anda, proses pencairan rata-rata selesai dalam 1 hari kerja.
            </p>
          </div>
        </div>
      </div>

      {/* BENTO ROW 4: DOKUMEN PERSYARATAN PROFILE BENTO */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
              Kelayakan Dokumen
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
              Dokumen Persyaratan Pengajuan Berdasarkan Profesi
            </h2>
          </div>

          {/* Profile Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF9F6] rounded-xl border border-stone-200/80">
            {PROFILE_REQUIREMENTS.map((prof, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveProfileTab(idx)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeProfileTab === idx
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {prof.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Profile Detail Box */}
        <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-stone-200/80 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-stone-900">
              {PROFILE_REQUIREMENTS[activeProfileTab].category}
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              {PROFILE_REQUIREMENTS[activeProfileTab].description}
            </p>
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block mb-2.5">
              Daftar Dokumen yang Diperlukan:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-700">
              {PROFILE_REQUIREMENTS[activeProfileTab].documents.map((doc, dIdx) => (
                <div key={dIdx} className="bg-white p-3 rounded-xl border border-stone-200/70 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
