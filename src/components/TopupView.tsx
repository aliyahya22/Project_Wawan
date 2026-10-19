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
  FolderLock,
  Sparkles,
  FileCheck2
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';

interface TopupViewProps {
  onOpenApplication: (service?: 'Top Up') => void;
}

export const TopupView: React.FC<TopupViewProps> = ({ onOpenApplication }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* BENTO ROW 1: HEADER & KEUNTUNGAN TOP UP (FORM DIARAHKAN KE BERANDA) */}
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
              onClick={() => onOpenApplication('Top Up')}
              className="px-6 py-3.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ajukan Top Up (Kirim Formulir)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppGeneral('Top Up Pinjaman BPKB Nasabah Aktif')}
              className="px-5 py-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp: 0852-8815-7752</span>
            </button>
          </div>
        </div>

        {/* Bento Card: Keistimewaan Top Up (5 Cols - Pengganti Form) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Prioritas Nasabah Setia AXI</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Dapatkan perlakuan jalur cepat (*fast-track approval*) untuk nasabah dengan riwayat bayar tepat waktu.
            </p>
          </div>

          <div className="space-y-3 text-xs text-stone-700">
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Jalur Ekspres Tanpa Cek Ulang</span>
                <span className="text-stone-500 text-[11px]">Bagi nasabah aktif lancar, proses disetujui tanpa survei rumah kembali.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Sisa Angsuran Diperbarui</span>
                <span className="text-stone-500 text-[11px]">Sisa pokok lama dilunasi dan digantikan kontrak baru dengan dana cair ekstra.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
              <ShieldCheck className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">BPKB Tetap Aman di Vault</span>
                <span className="text-stone-500 text-[11px]">Tidak perlu repot serah terima dokumen fisik baru karena BPKB telah tersimpan rapi.</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenApplication('Top Up')}
            className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kirim Formulir Pengajuan di Beranda</span>
            <ArrowRight className="w-4 h-4" />
          </button>
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h3 className="text-xs font-bold text-stone-900">Validasi Nomor Kontrak</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Cukup sebutkan nomor kontrak aktif atau nomor KTP Anda ke staf konsultan kami untuk verifikasi riwayat angsuran.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-stone-200/80 bg-[#FAF9F6] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h3 className="text-xs font-bold text-stone-900">Perhitungan Sisa Pokok & Nilai Baru</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sistem meninjau sisa angsuran berjalan dan menawarkan penyesuaian plafon maksimal yang dapat langsung disetujui.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-emerald-300 bg-emerald-50/70 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h3 className="text-xs font-bold text-emerald-950">Pencairan Dana Tambahan</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Setelah konfirmasi adendum kontrak baru, dana tambahan langsung cair ke rekening bank Anda dalam hitungan jam.
            </p>
          </div>
        </div>
      </div>

      {/* BENTO ROW 3: SYARAT KELAYAKAN TOP UP BENTO */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Angsuran Min. 6 Bulan</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Fasilitas top up berlaku bagi pembiayaan aktif yang telah berjalan minimal 6 kali pembayaran cicilan secara tertib.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Catatan Pembayaran Bagus</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Riwayat pembayaran tanpa tunggakan kronis menjamin persetujuan plafon baru langsung disetujui tanpa kendala.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Kondisi Kendaraan Terawat</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Pajak STNK aktif dan kendaraan dalam kondisi laik jalan mendukung taksasi nilai cair maksimal.
          </p>
        </div>
      </div>

    </div>
  );
};
