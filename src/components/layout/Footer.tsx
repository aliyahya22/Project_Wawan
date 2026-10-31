import React from 'react';
import { ActivePage } from '../../types';
import { useCms } from '../../context/CmsContext';
import { Clock, ShieldCheck, UserCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { openWhatsAppGeneral } from '../../utils/whatsapp';
import { AdiraLogo } from '../common/AdiraLogo';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenLegal: (type: 'syarat' | 'privasi') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
}) => {
  const { openCms } = useCms();

  return (
    <footer className="bg-white border-t border-stone-200/80 text-stone-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Kolom 1: Profil Brand, Logo Adira & Informasi Agen Resmi AXI */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AdiraLogo size="sm" variant="badge" />
              <div>
                <span className="text-sm font-bold text-stone-900 tracking-tight block">
                  Dana Cepat BPKB
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Layanan pencairan dana tunai cepat jaminan BPKB kendaraan bermotor (Motor min. 2017, Mobil min. 2010, Truk min. 2019, Pickup min. 2019). Resmi, aman, transparan, dan terpercaya di seluruh Indonesia.
            </p>

            {/* Informasi Agen Resmi AXI (Sesuai Revisi Klien) */}
            <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-2 text-xs max-w-sm">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-xs border-b border-stone-200/60 pb-1.5">
                <UserCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Informasi Agen Resmi AXI</span>
              </div>
              <div className="space-y-0.5">
                <div className="text-[13px] font-extrabold text-stone-900">
                  NURHASANAH
                </div>
                <div className="text-stone-600 font-mono text-[11px] font-semibold">
                  ID AXI: 014324000286
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-stone-200/50">
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <button
                  type="button"
                  onClick={() => openWhatsAppGeneral()}
                  className="font-bold text-emerald-800 hover:underline cursor-pointer"
                >
                  WhatsApp Resmi: 0852-8815-7752
                </button>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Senin - Sabtu: 08.30 - 17.00 WIB (Layanan WA 24 Jam)</span>
            </div>
          </div>

          {/* Kolom Produk */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
              Produk Pembiayaan
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('dana-tunai')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Pinjaman Dana (Gadai BPKB Multiguna)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('dana-tunai')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Pinjaman Dana Tunai (Motor, Mobil, Truk, Pickup)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('take-over')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Take Over BPKB (Pindah Cicilan & Cashback)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('topup')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Topup Pinjaman (Nasabah Berjalan Lancar)
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom Lainnya */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
              Lainnya
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('syarat')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Syarat & Ketentuan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privasi')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Kebijakan Privasi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tentang-kami')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Tentang Kami</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cabang')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Jaringan Kantor Cabang
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('artikel')}
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Artikel & Panduan Finansial
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Copyright Row with Hidden Discreet Access */}
        <div className="mt-12 pt-6 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="flex items-center gap-1.5 flex-wrap">
            <span>© {new Date().getFullYear()} Dana Cepat BPKB. Agen Resmi AXI NURHASANAH (ID: 014324000286).</span>
          </p>

          <div className="flex items-center gap-2 text-[11px] text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Berizin & Diawasi OJK Melalui Lembaga Pembiayaan Terkait</span>
            
            {/* Discreet Hidden Link to CMS */}
            <button
              type="button"
              onClick={openCms}
              title="Portal Administrasi Internal"
              className="text-stone-300 hover:text-stone-600 transition-colors p-1 rounded cursor-pointer"
            >
              ·
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
