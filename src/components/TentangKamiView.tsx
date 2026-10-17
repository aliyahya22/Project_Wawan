import React from 'react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { 
  MessageCircle,
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  Building2, 
  Clock, 
  HeartHandshake,
  Check,
  Truck,
  ArrowRight
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';

export const TentangKamiView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* BENTO ROW 1: PROFIL AXI & HIGHLIGHT STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Overview Card (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FAF9F6] border border-stone-200/80 px-3 py-1.5 rounded-xl">
              <AdiraLogo size="sm" variant="badge" />
              <span className="text-xs font-semibold text-stone-600">
                Kemitraan Resmi PT Adira Dinamika Multi Finance Tbk
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Profil AXI Adira & Komitmen Layanan Terpercaya
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              <strong>AXI (Agen Xpress Inovatif)</strong> adalah komunitas agen dan mitra bisnis resmi dari PT Adira Dinamika Multi Finance Tbk, institusi pembiayaan terkemuka di Indonesia yang telah berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK).
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              Kami hadir sebagai jembatan kemudahan bagi masyarakat dan pelaku usaha yang memerlukan fasilitas dana tunai cepat, aman, dan tanpa potongan liar dengan jaminan BPKB kendaraan bermotor. BPKB Anda tersimpan di vault berstandar perbankan nasional.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Pertanyaan Profil & Layanan AXI')}
              className="px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
              <span>Hubungi Konsultan Mitra AXI</span>
            </button>
          </div>
        </div>

        {/* Bento Photo & Consultant Card (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden flex flex-col justify-between">
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
            <img
              src="/src/assets/images/adira_axi_consultant_1792156568463.jpg"
              alt="Konsultan profesional AXI melayani nasabah dengan ramah"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-5 space-y-1 bg-white">
            <span className="text-xs font-bold text-stone-900 block">Konsultan Berdedikasi</span>
            <span className="text-[11px] text-stone-500 leading-relaxed block">
              Mendampingi setiap langkah pengajuan dan pencairan secara ramah, transparan, dan profesional.
            </span>
          </div>
        </div>

      </div>

      {/* BENTO ROW 2: 3 REKAM JEJAK STATISTIK BENTO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2">
          <div className="text-3xl font-extrabold text-stone-900 font-mono tracking-tight">15.000+</div>
          <h3 className="text-xs font-bold text-stone-900">Pengajuan Berhasil Dicairkan</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Membantu ribuan pemilik kendaraan Motor, Mobil, Truk, dan Pickup menyelesaikan kebutuhan finansial modal kerja atau darurat.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2">
          <div className="text-3xl font-extrabold text-stone-900 font-mono tracking-tight">98.4%</div>
          <h3 className="text-xs font-bold text-stone-900">Tingkat Kepuasan Nasabah</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Pelayanan ramah, penjelasan tabel angsuran yang terbuka tanpa biaya tersembunyi, dan proses jemput berkas tanpa biaya tambahan.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2">
          <div className="text-3xl font-extrabold text-stone-900 font-mono tracking-tight">515</div>
          <h3 className="text-xs font-bold text-stone-900">Titik Cabang di 38 Provinsi</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Didukung jaringan operasional nasional dari Sabang sampai Merauke yang siap memberikan layanan prima.
          </p>
        </div>
      </div>

      {/* BENTO ROW 3: 4 LAYANAN YANG KAMI TAWARKAN BENTO */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Portofolio Pembiayaan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            Layanan yang Kami Tawarkan
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Solusi keuangan komprehensif beragunan kendaraan untuk berbagai latar belakang kebutuhan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-2">
            <h3 className="text-xs font-bold text-stone-900">1. Pinjaman Dana Tunai</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pencairan dana langsung dengan jaminan BPKB Motor (min. 2016), Mobil (min. 2010), Truk (min. 2018), atau Pickup (min. 2021).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-2">
            <h3 className="text-xs font-bold text-stone-900">2. Take Over BPKB</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pengalihan pinjaman berjalan dari leasing/bank lain ke AXI Adira untuk mendapatkan cicilan lebih ringan dan sisa dana tambahan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-2">
            <h3 className="text-xs font-bold text-stone-900">3. Top Up Pinjaman</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Penambahan limit bagi nasabah berjalan lancar minimal 6 bulan tanpa survei fisik ulang dari awal.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <h3 className="text-xs font-bold text-emerald-950">4. Layanan Jemput Berkas</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Surveyor resmi datang ke rumah atau kantor Anda untuk verifikasi fisik kendaraan tanpa dikenakan biaya survei.
            </p>
          </div>
        </div>
      </div>

      {/* BENTO ROW 4: KOMITMEN KEAMANAN & OJK (BENTO FULL WIDTH) */}
      <div className="bg-[#18181B] text-white rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-semibold text-amber-300">Standar Kepatuhan OJK</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Konsultasikan Kebutuhan Dana BPKB Anda
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Staf konsultan resmi AXI Adira siap memberikan penjelasan simulasi, pengecekan kelayakan unit, dan pendampingan berkas secara gratis.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Konsultasi Tentang Kami')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
            <span>Chat WhatsApp Tim AXI</span>
          </button>
        </div>
      </div>

    </div>
  );
};
