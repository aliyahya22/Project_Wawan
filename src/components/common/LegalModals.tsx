import React from 'react';
import { X } from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';

interface LegalModalProps {
  type: 'syarat' | 'privasi' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto z-10 border border-stone-200">
        <div className="sticky top-0 bg-white border-b border-stone-200/80 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <AdiraLogo size="sm" variant="badge" />
            <h3 className="text-sm font-bold text-stone-900">
              {type === 'syarat' ? 'Syarat & Ketentuan Layanan' : 'Kebijakan Privasi & Keamanan Data'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs text-stone-700 leading-relaxed space-y-4">
          {type === 'syarat' ? (
            <>
              <p>
                Selamat datang di platform informasi pembiayaan Dana Cepat BPKB (Mitra Resmi AXI Adira). Dengan mengakses website ini dan mengajukan permohonan pembiayaan, Anda menyetujui ketentuan berikut:
              </p>
              <div>
                <strong className="text-stone-900 block mb-1">1. Kelayakan Kendaraan & Dokumen</strong>
                <p>
                  Pengajuan pinjaman hanya diproses untuk unit kendaraan yang memenuhi kriteria tahun standar: Motor minimal tahun 2017, Mobil minimal tahun 2010, Truk minimal tahun 2019, dan Pickup minimal tahun 2019. Dokumen BPKB dan STNK wajib asli dan bukan hasil tindak pidana kejahatan.
                </p>
              </div>
              <div>
                <strong className="text-stone-900 block mb-1">2. Validasi & Survei Fisik</strong>
                <p>
                  Semua permohonan kredit wajib melalui proses verifikasi nomor rangka dan nomor mesin fisik oleh surveyor resmi. Persetujuan nilai plafon final sepenuhnya menjadi kewenangan lembaga pembiayaan berdasarkan kondisi fisik kendaraan dan kapasitas penghasilan pemohon.
                </p>
              </div>
              <div>
                <strong className="text-stone-900 block mb-1">3. Biaya Administrasi & Transparansi</strong>
                <p>
                  Tidak ada biaya survei di muka. Segala bentuk biaya administrasi dan asuransi kendaraan akan tertera secara transparan pada rincian perjanjian kredit sebelum pencairan dana dilakukan.
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                Kami sangat menghargai privasi dan kerahasiaan informasi data pribadi setiap nasabah dan pengunjung website:
              </p>
              <div>
                <strong className="text-stone-900 block mb-1">1. Pengumpulan Data</strong>
                <p>
                  Data yang dikumpulkan melalui formulir simulasi, aplikasi online, maupun percakapan WhatsApp (seperti Nama Lengkap, Nomor Kontak, Domisili, dan Data Kendaraan) hanya digunakan semata-mata untuk verifikasi kelayakan pembiayaan dan menghubungi Anda mengenai proses kredit.
                </p>
              </div>
              <div>
                <strong className="text-stone-900 block mb-1">2. Perlindungan Informasi</strong>
                <p>
                  Data pribadi Anda tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak ketiga yang tidak terafiliasi tanpa persetujuan Anda, sesuai dengan ketentuan perundang-undangan perlindungan data pribadi dan regulasi Otoritas Jasa Keuangan (OJK).
                </p>
              </div>
              <div>
                <strong className="text-stone-900 block mb-1">3. Keamanan Dokumen Fisik</strong>
                <p>
                  Dokumen fisik BPKB yang Anda jaminkan disimpan dalam lemari besi khazanah (vault) resmi dengan standar perbankan berkeamanan tinggi dan asuransi dokumen.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-100 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white font-medium text-xs rounded-xl hover:bg-stone-800 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
