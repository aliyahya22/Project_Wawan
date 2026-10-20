import React, { useState } from 'react';
import { VehicleType } from '../../types';
import { VEHICLE_CRITERIA, PROFILE_REQUIREMENTS } from '../../data/mockData';
import { openWhatsAppGeneral } from '../../utils/whatsapp';
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
  Layers, 
  Lock, 
  FileCheck2, 
  Banknote 
} from 'lucide-react';
import { AdiraLogo } from '../common/AdiraLogo';

interface DanaTunaiViewProps {
  onOpenApplication: (vehicleType?: VehicleType) => void;
}

export const DanaTunaiView: React.FC<DanaTunaiViewProps> = ({ onOpenApplication }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('mobil');
  const [activeProfileTab, setActiveProfileTab] = useState<number>(0);

  const criteria = VEHICLE_CRITERIA[selectedVehicle];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* BENTO ROW 1: HEADER & KEUNGGULAN (FORM DIARAHKAN KE BERANDA) */}
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
                Ketentuan Minimal Tahun Kendaraan:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-700">
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Motor</span>
                  <span className="font-bold text-stone-900">Min. 2017</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Mobil</span>
                  <span className="font-bold text-stone-900">Min. 2010</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Truk</span>
                  <span className="font-bold text-stone-900">Min. 2019</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-stone-200/60">
                  <span className="text-stone-400 block text-[10px]">Pickup</span>
                  <span className="font-bold text-stone-900">Min. 2019</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenApplication(selectedVehicle)}
              className="px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ajukan Dana Tunai (Kirim Formulir)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Pinjaman Dana Tunai BPKB')}
              className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp: 0852-8815-7752</span>
            </button>
          </div>
        </div>

        {/* Bento Card: Keunggulan Pembiayaan BPKB (5 Cols - Pengganti Form) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Keunggulan Gadai BPKB AXI Adira</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Jaminan keamanan dan transparansi penuh untuk perlindungan aset BPKB kendaraan Anda.
            </p>
          </div>

          <div className="space-y-3 text-xs text-stone-700">
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <Banknote className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Plafon Tinggi s/d 85%</span>
                <span className="text-stone-500 text-[11px]">Nilai pencairan optimal sesuai taksasi pasar terkini unit kendaraan Anda.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <Lock className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">BPKB Aman di Vault Resmi</span>
                <span className="text-stone-500 text-[11px]">BPKB asli Anda tersimpan di brankas berstandar perbankan dan diasuransikan.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <FileCheck2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Tanpa Biaya Tersembunyi</span>
                <span className="text-stone-500 text-[11px]">Biaya administrasi transparan dan layanan jemput berkas gratis ke lokasi.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <Car className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Kendaraan Bebas Dipakai</span>
                <span className="text-stone-500 text-[11px]">Hanya buku BPKB yang diagunkan, kendaraan tetap aktif mendukung mobilitas Anda.</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenApplication(selectedVehicle)}
            className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kirim Formulir Pengajuan di Beranda</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* BENTO ROW 2: SPESIFIKASI KENDARAAN (INTERACTIVE SELECTOR CARD) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Plafon & Ketentuan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            Plafon & Suku Bunga Berdasarkan Tipe Kendaraan
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Pilih kategori armada di bawah ini untuk melihat rincian batas tahun, suku bunga, dan batas tenor resmi.
          </p>
        </div>

        {/* Bento Category Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'motor', label: 'BPKB Motor', sub: 'Mulai 2017', icon: <Bike className="w-4 h-4" /> },
            { id: 'mobil', label: 'BPKB Mobil', sub: 'Mulai 2010', icon: <Car className="w-4 h-4" /> },
            { id: 'truck', label: 'BPKB Truk', sub: 'Mulai 2019', icon: <Truck className="w-4 h-4" /> },
            { id: 'pickup', label: 'BPKB Pickup', sub: 'Mulai 2019', icon: <Car className="w-4 h-4" /> },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
              Maksimal Plafon
            </span>
            <div className="text-lg font-extrabold text-stone-900">
              s/d Rp {criteria.maxPlafondMillion} Juta
            </div>
            <span className="text-[11px] text-stone-500">Tergantung taksasi pasar & kondisi unit</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
              Estimasi Suku Bunga
            </span>
            <div className="text-lg font-extrabold text-stone-900">
              Mulai {criteria.interestRatePerMonth}% /bulan
            </div>
            <span className="text-[11px] text-stone-500">Bunga kompetitif & transparan</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
              Tenor Fleksibel
            </span>
            <div className="text-lg font-extrabold text-stone-900">
              Hingga {criteria.maxTenorMonths} Bulan
            </div>
            <span className="text-[11px] text-stone-500">Bebas pilih masa angsuran</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
              Syarat Usia Unit
            </span>
            <div className="text-lg font-extrabold text-stone-900">
              Minimal Tahun {criteria.minYear}
            </div>
            <span className="text-[11px] text-stone-500">Plat hitam, kuning, atau niaga</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <strong>Model / Merk Populer:</strong> {criteria.popularModels.join(', ')}
          </div>
          <button
            type="button"
            onClick={() => onOpenApplication(selectedVehicle)}
            className="text-stone-900 font-bold hover:underline shrink-0 cursor-pointer"
          >
            Kirim Formulir Pengajuan &rarr;
          </button>
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
              Dana langsung ditransfer utuh ke rekening bank pribadi Anda tanpa potongan liar pada hari yang sama.
            </p>
          </div>
        </div>
      </div>

      {/* BENTO ROW 4: PERSYARATAN BERKAS BERDASARKAN PROFIL NASABAH */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Dokumen Persyaratan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            Dokumen Persyaratan Berdasarkan Profil Anda
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Pilih kategori profesi Anda untuk melihat rincian dokumen yang dibutuhkan.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-stone-100 pb-3">
          {PROFILE_REQUIREMENTS.map((item, idx) => (
            <button
              key={item.category}
              type="button"
              onClick={() => setActiveProfileTab(idx)}
              className={`py-2 px-4 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeProfileTab === idx
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-[#FAF9F6] text-stone-600 hover:bg-stone-100'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Documents Checklist Bento */}
        <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-stone-700" />
            <h3 className="text-xs font-bold text-stone-900">
              Dokumen Wajib: {PROFILE_REQUIREMENTS[activeProfileTab].category}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROFILE_REQUIREMENTS[activeProfileTab].documents.map((doc, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-stone-200/60 text-xs text-stone-700"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-500 border-t border-stone-200/60">
            <span>Berkas kurang lengkap? Konsultasikan bersama tim kami untuk solusi asistensi dokumen.</span>
            <button
              type="button"
              onClick={() => openWhatsAppGeneral(`Bantuan Berkas ${PROFILE_REQUIREMENTS[activeProfileTab].category}`)}
              className="text-emerald-700 font-bold hover:underline shrink-0 cursor-pointer"
            >
              Tanya Asistensi via WhatsApp &rarr;
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
