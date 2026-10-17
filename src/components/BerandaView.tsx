import React from 'react';
import { ActivePage, VehicleType } from '../types';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  ChevronRight, 
  BadgePercent, 
  Lock, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  FileCheck2,
  PhoneCall
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { ApplicationForm } from './ApplicationForm';

interface BerandaViewProps {
  onNavigate: (page: ActivePage) => void;
  onOpenApplication: (vehicleType?: VehicleType) => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({
  onNavigate,
  onOpenApplication,
}) => {
  const scrollToForm = () => {
    const el = document.getElementById('formulir-pengajuan-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenApplication();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* BENTO ROW 1: HERO OVERVIEW & EMBEDDED APPLICATION FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Hero Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#FAF9F6] border border-stone-200/80 px-3.5 py-1.5 rounded-xl">
              <AdiraLogo size="sm" variant="badge" />
              <span className="text-xs font-semibold text-stone-700">
                Kemitraan Resmi AXI · Terdaftar & Diawasi OJK
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Pencairan Dana Cepat Jaminan BPKB Kendaraan
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              Solusi pembiayaan multiguna beragunan BPKB Motor, Mobil, Truk, dan Pickup bersama mitra resmi AXI Adira. Proses transparan, bunga kompetitif, dan kendaraan tetap aman Anda gunakan.
            </p>

            {/* Criteria chips inside Bento */}
            <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 space-y-2">
              <div className="text-[11px] font-bold tracking-wider text-stone-500 uppercase">
                Ketentuan Minimal Tahun Kendaraan:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 block text-[11px]">Motor</span>
                  <span className="font-bold text-stone-900">Mulai 2016</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 block text-[11px]">Mobil</span>
                  <span className="font-bold text-stone-900">Mulai 2010</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 block text-[11px]">Truk</span>
                  <span className="font-bold text-stone-900">Mulai 2018</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200/60">
                  <span className="text-stone-500 block text-[11px]">Pickup</span>
                  <span className="font-bold text-stone-900">Mulai 2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Isi Form Pengajuan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Pertanyaan Gadai BPKB')}
              className="px-5 py-3.5 bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Konsultasi via WhatsApp</span>
            </button>
          </div>

          {/* Subtext */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-stone-500 border-t border-stone-100">
            <span>Resmi Mitra AXI</span>
            <span aria-hidden="true">·</span>
            <span>Diawasi OJK</span>
            <span aria-hidden="true">·</span>
            <span>515 Jaringan Cabang Nasional</span>
          </div>
        </div>

        {/* Bento Application Form Card (5 Cols) - Exact 5-field format requested */}
        <div id="formulir-pengajuan-section" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-center">
          <ApplicationForm isEmbedded={true} showTitle={true} />
        </div>

      </div>

      {/* BENTO ROW 2: 4 KEUNGGULAN UTAMA (4 COLS EACH) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Proses Cepat 1 Hari Kerja
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Verifikasi berkas secara online. Begitu fisik kendaraan divalidasi, dana langsung cair ke rekening tabungan Anda.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center">
            <BadgePercent className="w-5 h-5 text-stone-900" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Suku Bunga Ringan & Tetap
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Mulai dari 0.75% per bulan dengan angsuran flat tanpa potongan biaya siluman di tengah masa kontrak pinjaman.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
            <Lock className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            BPKB 100% Aman di Vault
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            BPKB asli tersimpan aman di vault berstandar perbankan institusi resmi berizin OJK dan langsung diserahkan saat lunas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-stone-900" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            515 Cabang Seluruh Indonesia
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Didukung sentra operasional di 38 provinsi dengan layanan jemput berkas gratis langsung ke tempat tinggal Anda.
          </p>
        </div>

      </div>

      {/* BENTO ROW 3: 3 PRODUK PEMBIAYAAN UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Pinjaman Dana Tunai */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                01. Solusi Multiguna
              </span>
              <span className="text-[10px] font-semibold bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md border border-amber-200">
                Paling Diminati
              </span>
            </div>
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">
              Pinjaman Dana Tunai
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pencairan dana langsung dengan jaminan BPKB Motor (min. 2016), Mobil (min. 2010), Truk (min. 2018), atau Pickup (min. 2021). Plafon hingga 85% taksasi unit.
            </p>
            <div className="pt-1 text-xs text-stone-500 space-y-1">
              <div>- Tenor fleksibel hingga 60 bulan</div>
              <div>- Kendaraan tetap dapat Anda operasikan</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('dana-tunai')}
            className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
          >
            <span>Lihat Ketentuan Plafon</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: Take Over BPKB */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                02. Refinancing
              </span>
              <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-md border border-emerald-200">
                Bunga Bersahabat
              </span>
            </div>
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">
              Take Over BPKB
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pindahkan pembiayaan kendaraan dari leasing atau bank lain ke AXI Adira. Dapatkan angsuran bulanan lebih ringan, tenor baru, dan tambahan sisa uang tunai (cashback).
            </p>
            <div className="pt-1 text-xs text-stone-500 space-y-1">
              <div>- Kami bantu pelunasan di tempat lama</div>
              <div>- Dapatkan sisa uang tunai lebihan</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('take-over')}
            className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
          >
            <span>Alur Take Over</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 3: Topup Pinjaman */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                03. Debitur Berjalan
              </span>
              <span className="text-[10px] font-semibold bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md border border-stone-200">
                Cair &lt; 24 Jam
              </span>
            </div>
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">
              Topup Pinjaman
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Fasilitas penambahan limit pinjaman bagi nasabah aktif dengan catatan cicilan tertib. Tanpa perlu tarik berkas baru atau survei rumah dari awal.
            </p>
            <div className="pt-1 text-xs text-stone-500 space-y-1">
              <div>- Pencairan selisih nilai taksasi terbaru</div>
              <div>- Dokumen sudah tersimpan rapi di vault</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('topup')}
            className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
          >
            <span>Pelajari Top Up</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* BENTO ROW 4: ALUR 4 LANGKAH & PERSYARATAN BERKAS (7 COLS & 5 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Alur (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-5">
          <div>
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
              Prosedur Resmi
            </span>
            <h3 className="text-lg font-bold text-stone-900 tracking-tight mt-0.5">
              4 Langkah Mudah Pencairan BPKB
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Dari pengisian data singkat hingga transfer dana utuh ke rekening bank Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1.5">
              <div className="w-6 h-6 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h4 className="text-xs font-bold text-stone-900">Kirim Data Formulir</h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Kirim data kendaraan lewat formulir website atau WhatsApp untuk taksasi harga pasar awal.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1.5">
              <div className="w-6 h-6 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h4 className="text-xs font-bold text-stone-900">Cek Fisik & Jemput Berkas</h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Surveyor resmi datang ke lokasi Anda (gratis) untuk gesek nomor rangka dan mesin.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-1.5">
              <div className="w-6 h-6 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h4 className="text-xs font-bold text-stone-900">Persetujuan Kontrak</h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Penjelasan jadwal angsuran dan penyerahan tanda terima BPKB resmi berstempel lembaga berizin OJK.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                4
              </div>
              <h4 className="text-xs font-bold text-emerald-950">Dana Cair ke Rekening</h4>
              <p className="text-[11px] text-emerald-900 leading-relaxed">
                Pencairan dana langsung ditransfer utuh ke rekening bank atas nama Anda pada hari yang sama.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Dokumen Persyaratan (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                Kelengkapan Berkas
              </span>
              <h3 className="text-lg font-bold text-stone-900 tracking-tight mt-0.5">
                Persyaratan Dokumen Pengajuan
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block">KTP & Kartu Keluarga (KK)</span>
                <span className="text-[11px] text-stone-600">Pemohon dan pasangan jika sudah menikah.</span>
              </div>
              <div className="p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block">STNK & BPKB Asli</span>
                <span className="text-[11px] text-stone-600">Beserta faktur pembelian asli. Pajak mati bisa dibantu.</span>
              </div>
              <div className="p-2.5 bg-[#FAF9F6] rounded-xl border border-stone-200/80">
                <span className="font-bold text-stone-900 block">Bukti Penghasilan / Tempat Tinggal</span>
                <span className="text-[11px] text-stone-600">Slip gaji/mutasi rekening dan bukti PBB/rekening listrik.</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('dana-tunai')}
            className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Rincian Persyaratan Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* BENTO ROW 5: CALL TO ACTION BANNER (BENTO FULL WIDTH) */}
      <div className="bg-[#18181B] text-white rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-left">
          <div className="flex items-center gap-2">
            <AdiraLogo size="sm" variant="badge" />
            <span className="text-xs font-semibold text-amber-300">Layanan Siaga WhatsApp</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Butuh Pencairan Dana Mendesak?
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Staf mitra resmi AXI Adira siap memberikan taksasi estimasi nilai pencairan unit kendaraan Anda langsung melalui WhatsApp 7 hari seminggu.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Konsultasi Mendesak')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
            <span>Chat WhatsApp Langsung</span>
          </button>
          
          <button
            type="button"
            onClick={scrollToForm}
            className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl transition-colors border border-white/20 cursor-pointer"
          >
            Isi Form Pengajuan
          </button>
        </div>
      </div>

    </div>
  );
};
