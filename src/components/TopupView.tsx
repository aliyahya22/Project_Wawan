import React from 'react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { 
  ArrowRight, 
  MessageCircle, 
  Clock,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  FolderLock
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { ApplicationForm } from './ApplicationForm';

interface TopupViewProps {
  onOpenApplication: (service?: 'Top Up') => void;
}

export const TopupView: React.FC<TopupViewProps> = ({ onOpenApplication }) => {
  const scrollToForm = () => {
    const el = document.getElementById('topup-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenApplication('Top Up');
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
                Fasilitas Eksklusif Debitur Berjalan
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Top Up Pinjaman BPKB: Tambah Dana Tanpa Survei Ulang
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              Penambahan limit atau plafon pembiayaan bagi Anda yang saat ini sudah menjadi nasabah aktif dengan riwayat angsuran tertib (minimal berjalan 6 bulan). Dokumen BPKB Anda sudah tersimpan aman di sistem kami, sehingga pencairan dana tambahan dapat diproses instan tanpa survei ulang.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 space-y-1">
                <Clock className="w-4 h-4 text-stone-800" />
                <span className="font-bold text-stone-900 block">Cair &lt; 24 Jam</span>
                <span className="text-stone-500 text-[11px] block">Persetujuan instan riwayat tertib.</span>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 space-y-1">
                <FolderLock className="w-4 h-4 text-stone-800" />
                <span className="font-bold text-stone-900 block">Tanpa Tarik Berkas</span>
                <span className="text-stone-500 text-[11px] block">BPKB sudah tersimpan di vault.</span>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 space-y-1">
                <TrendingUp className="w-4 h-4 text-stone-800" />
                <span className="font-bold text-stone-900 block">Plafon Mengikuti Taksasi</span>
                <span className="text-stone-500 text-[11px] block">Suntikan modal segar maksimal.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ajukan Top Up Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Top Up Pinjaman BPKB Nasabah Aktif')}
              className="px-5 py-3.5 bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Cek Kelayakan Top Up via WA</span>
            </button>
          </div>
        </div>

        {/* Bento Form Card (5 Cols) */}
        <div id="topup-form-section" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-center">
          <ApplicationForm
            isEmbedded={true}
            initialCollateral="BPKB Mobil"
            showTitle={true}
          />
        </div>

      </div>

      {/* BENTO ROW 2: TATA CARA PROSES TOP UP BENTO */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Langkah Cepat
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            3 Langkah Mudah Top Up Pinjaman
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Tahapan sederhana bagi nasabah eksisting untuk mendapatkan suntikan dana baru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h3 className="text-xs font-bold text-stone-900">Pemberitahuan Nomor Kontrak</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sebutkan nomor kontrak pinjaman berjalan atau nomor polisi kendaraan kepada staf kami melalui WhatsApp atau formulir website.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h3 className="text-xs font-bold text-stone-900">Hitung Sisa Pokok & Nilai Baru</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sistem menghitung sisa angsuran berjalan dan menawarkan penyesuaian plafon maksimal yang dapat langsung disetujui.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-emerald-300 bg-emerald-50/70 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h3 className="text-xs font-bold text-emerald-950">Pencairan Dana Ditransfer</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Setelah kesepakatan tenor baru ditandatangani, sisa dana bersih langsung dikirimkan utuh ke rekening tabungan bank Anda.
            </p>
          </div>
        </div>
      </div>

      {/* BENTO ROW 3: KEUNGGULAN KHUSUS DEBITUR BERJALAN BENTO */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Persetujuan Prioritas Kilat
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Data Anda telah tercatat dalam sistem whitelist internal, sehingga tidak memerlukan verifikasi dari nol.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-stone-900" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Keamanan Dokumen Terjamin
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            BPKB fisik tetap tersimpan di lemari besi pengarsipan resmi tanpa ada risiko perpindahan tangan.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Pilihan Tenor Diperpanjang
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Sesuaikan kembali beban cicilan bulanan agar tetap seimbang dengan arus kas keuangan keluarga atau bisnis Anda.
          </p>
        </div>
      </div>

    </div>
  );
};
