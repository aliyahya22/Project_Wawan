import React from 'react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { 
  ArrowRight, 
  MessageCircle, 
  TrendingDown, 
  Banknote,
  CheckCircle2,
  ShieldCheck,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { ApplicationForm } from './ApplicationForm';

interface TakeOverViewProps {
  onOpenApplication: (service?: 'Take Over') => void;
}

export const TakeOverView: React.FC<TakeOverViewProps> = ({ onOpenApplication }) => {
  const scrollToForm = () => {
    const el = document.getElementById('takeover-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenApplication('Take Over');
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
                Refinancing & Pengalihan Kredit Resmi
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Take Over BPKB: Pindah Cicilan, Bunga Ringan & Dapat Uang Tunai
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
              Pengalihan fasilitas pembiayaan kendaraan yang masih berjalan di leasing, bank, atau koperasi lain ke mitra resmi AXI Adira. Dapatkan angsuran lebih terjangkau, jangka waktu diperpanjang, serta sisa dana pencairan tambahan langsung ke rekening Anda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="flex items-start gap-2.5 bg-[#FAF9F6] p-3.5 rounded-2xl border border-stone-200/80">
                <TrendingDown className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-stone-900">Bunga Lebih Bersahabat</span>
                  <span className="text-stone-600 text-[11px]">Turunkan beban angsuran bulanan dari tempat pembiayaan lama.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-[#FAF9F6] p-3.5 rounded-2xl border border-stone-200/80">
                <Banknote className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-stone-900">Dana Cair Tambahan</span>
                  <span className="text-stone-600 text-[11px]">Cairkan sisa nilai kendaraan untuk modal usaha atau kebutuhan mendesak.</span>
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
              <span>Ajukan Take Over Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Take Over BPKB Kendaraan')}
              className="px-5 py-3.5 bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Konsultasi Take Over via WA</span>
            </button>
          </div>
        </div>

        {/* Bento Form Card (5 Cols) */}
        <div id="takeover-form-section" className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-center">
          <ApplicationForm
            isEmbedded={true}
            initialCollateral="BPKB Mobil"
            showTitle={true}
          />
        </div>

      </div>

      {/* BENTO ROW 2: ALUR 4 TAHAP PROSES TAKE OVER BPKB */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
            Transparansi Alur Pelunasan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-0.5">
            Cara & Alur Proses Take Over BPKB
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Tahapan pemindahan pembiayaan kendaraan secara aman dan sah di mata hukum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h3 className="text-xs font-bold text-stone-900">Cek Total Pelunasan Dini</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nasabah meminta rincian surat pelunasan dipercepat (outstanding principal) dari leasing/bank yang saat ini memegang BPKB.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h3 className="text-xs font-bold text-stone-900">Analisa & Persetujuan Kredit</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              AXI Adira memverifikasi data kendaraan dan kapasitas penghasilan untuk menyetujui plafon baru dan nilai sisa uang yang bisa dicairkan.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h3 className="text-xs font-bold text-stone-900">Pelunasan & Pengambilan BPKB</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tim perwakilan resmi kami mendampingi pelunasan utang ke leasing lama dan mengambil dokumen fisik BPKB asli secara tertib.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-emerald-300 bg-emerald-50/70 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
              4
            </div>
            <h3 className="text-xs font-bold text-emerald-950">Pencairan Dana Lebih</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Selisih dana bersih langsung ditransfer ke rekening pribadi nasabah pada hari yang sama setelah berkas BPKB rampung diverifikasi.
            </p>
          </div>
        </div>
      </div>

      {/* BENTO ROW 3: AUDIT CICILAN & KONSULTASI GRATIS BENTO */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
            <BadgeCheck className="w-4 h-4 text-amber-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Konsultasi Audit Cicilan Gratis
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Kirimkan rincian angsuran lama Anda ke staf kami untuk dihitung apakah take over akan menghemat pengeluaran bulanan Anda.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-stone-900" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Didampingi Staf Resmi
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Anda tidak perlu repot mengurus administrasi ke leasing lama seorang diri; konsultan kami siap mengawal prosesnya hingga tuntas.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
            <FileText className="w-4 h-4 text-emerald-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Transparansi Pelunasan
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Semua angka pelunasan, sisa dana lebihan, dan jadwal angsuran baru dicatat secara transparan tanpa ada pungutan tak resmi.
          </p>
        </div>
      </div>

    </div>
  );
};
