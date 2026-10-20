import React from 'react';
import { ActivePage } from '../../types';
import { useCms } from '../../context/CmsContext';
import { MapPin, Phone, Clock, MessageCircle, Lock } from 'lucide-react';
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
  const { settings, openCms } = useCms();

  return (
    <footer className="bg-white border-t border-stone-200/80 text-stone-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Kolom 1: Profil Brand & Logo Adira */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AdiraLogo size="sm" variant="badge" />
              <div>
                <span className="text-sm font-bold text-stone-900 tracking-tight block">
                  Dana Cepat BPKB
                </span>
                <span className="text-xs text-stone-500 font-medium block">
                  Kemitraan Resmi AXI Adira Finance
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Layanan pencairan dana tunai cepat jaminan BPKB kendaraan bermotor (Motor min. 2017, Mobil min. 2010, Truk min. 2019, Pickup min. 2019). Resmi, aman, transparan, dan terpercaya.
            </p>

            {/* Alamat Kantor dari CMS Settings */}
            <div className="space-y-2 text-xs pt-2">
              <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
                Alamat Kantor
              </div>
              <div className="flex items-start gap-2 text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>{settings.headquartersAddress}</span>
              </div>
              <div className="flex items-start gap-2 text-stone-600">
                <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>{settings.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <button
                  type="button"
                  onClick={() => openWhatsAppGeneral('Footer Kontak')}
                  className="font-bold text-emerald-800 hover:underline transition-colors text-left cursor-pointer"
                >
                  WhatsApp: {settings.displayPhone || '0852-8815-7752'}
                </button>
              </div>
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
                  className="hover:text-stone-950 transition-colors text-left cursor-pointer"
                >
                  Tentang Kami (Profil AXI)
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

            <div className="pt-4">
              <button
                type="button"
                onClick={() => openWhatsAppGeneral('Hubungi Customer Service', settings.whatsappNumber)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border border-emerald-300 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Layanan WA Resmi</span>
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory & Copyright Row with Hidden Discreet Access */}
        <div className="mt-12 pt-6 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Dana Cepat BPKB · Kemitraan Resmi AXI Adira Finance. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-stone-400">
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
