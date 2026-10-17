import React from 'react';
import { ActivePage } from '../types';
import { 
  X, 
  Home, 
  Banknote, 
  Repeat, 
  TrendingUp, 
  MapPin, 
  BookOpen, 
  Users, 
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { DISPLAY_PHONE } from '../data/mockData';
import { AdiraLogo } from './AdiraLogo';

interface SidebarProps {
  isOpen: boolean;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onClose: () => void;
  onOpenApplication: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activePage,
  onNavigate,
  onClose,
  onOpenApplication,
}) => {
  if (!isOpen) return null;

  const navItems: { id: ActivePage; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'beranda',
      label: 'Beranda',
      icon: <Home className="w-4 h-4" />,
      desc: 'Formulir dan ikhtisar pengajuan BPKB'
    },
    {
      id: 'dana-tunai',
      label: 'Pinjaman Dana Tunai',
      icon: <Banknote className="w-4 h-4" />,
      desc: 'Gadai BPKB Motor, Mobil, Truk, Pickup'
    },
    {
      id: 'take-over',
      label: 'Take Over BPKB',
      icon: <Repeat className="w-4 h-4" />,
      desc: 'Pindah pembiayaan dan dana lebihan'
    },
    {
      id: 'topup',
      label: 'Topup Pinjaman',
      icon: <TrendingUp className="w-4 h-4" />,
      desc: 'Penambahan limit untuk nasabah aktif'
    },
    {
      id: 'cabang',
      label: 'Cabang (Store Locator)',
      icon: <MapPin className="w-4 h-4" />,
      desc: 'Daftar dan peta cabang se-Indonesia'
    },
    {
      id: 'artikel',
      label: 'Artikel & Panduan',
      icon: <BookOpen className="w-4 h-4" />,
      desc: 'Panduan syarat dan tips finansial'
    },
    {
      id: 'tentang-kami',
      label: 'Tentang Kami',
      icon: <Users className="w-4 h-4" />,
      desc: 'Profil resmi kemitraan AXI Adira'
    }
  ];

  const handleItemClick = (page: ActivePage) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel - Minimalist Warm Pastel Aesthetic */}
      <aside className="relative flex flex-col w-full max-w-xs bg-[#FAF9F6] h-full shadow-xl z-10 border-r border-stone-200">
        
        {/* Header with Adira Logo */}
        <div className="flex items-center justify-between p-4 border-b border-stone-200/80 bg-white">
          <div className="flex items-center gap-2">
            <AdiraLogo size="sm" variant="badge" />
            <div className="text-[11px] font-semibold text-stone-600">
              Mitra AXI
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-2 text-[11px] font-semibold tracking-wider text-stone-400 uppercase">
            Menu Navigasi
          </div>

          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-amber-100/60 text-stone-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100/70'
                }`}
              >
                <div className={`mt-0.5 ${isActive ? 'text-amber-800' : 'text-stone-400'}`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs ${isActive ? 'font-bold text-stone-900' : 'font-medium text-stone-800'}`}>
                    {item.label}
                  </div>
                  <div className="text-[11px] text-stone-500 truncate">
                    {item.desc}
                  </div>
                </div>
              </button>
            );
          })}

          <div className="pt-4 mt-2 border-t border-stone-200/70 px-3">
            <div className="text-[11px] font-semibold tracking-wider text-stone-400 uppercase mb-2">
              Kriteria Minimal Kendaraan
            </div>
            <div className="text-xs text-stone-600 space-y-1.5 bg-stone-100/70 p-2.5 rounded-xl border border-stone-200/60">
              <div className="flex justify-between">
                <span>Motor:</span>
                <span className="font-semibold text-stone-900">Mulai 2016</span>
              </div>
              <div className="flex justify-between">
                <span>Mobil:</span>
                <span className="font-semibold text-stone-900">Mulai 2010</span>
              </div>
              <div className="flex justify-between">
                <span>Truk:</span>
                <span className="font-semibold text-stone-900">Mulai 2018</span>
              </div>
              <div className="flex justify-between">
                <span>Pickup:</span>
                <span className="font-semibold text-stone-900">Mulai 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-stone-200/80 bg-white space-y-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenApplication();
            }}
            className="w-full py-2.5 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors shadow-xs text-center"
          >
            Formulir Pengajuan BPKB
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              openWhatsAppGeneral('Konsultasi dari Menu Sidebar');
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-semibold text-xs rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Chat WhatsApp Resmi</span>
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
            <PhoneCall className="w-3.5 h-3.5 text-stone-400" />
            <span>Hotline: {DISPLAY_PHONE}</span>
          </div>
        </div>

      </aside>
    </div>
  );
};
