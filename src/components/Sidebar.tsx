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

  const navItems: { id: ActivePage; label: string; icon: React.ReactNode }[] = [
    {
      id: 'beranda',
      label: 'Beranda',
      icon: <Home className="w-4 h-4" />
    },
    {
      id: 'dana-tunai',
      label: 'Dana Tunai',
      icon: <Banknote className="w-4 h-4" />
    },
    {
      id: 'take-over',
      label: 'Take Over',
      icon: <Repeat className="w-4 h-4" />
    },
    {
      id: 'topup',
      label: 'Top Up',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      id: 'cabang',
      label: 'Cabang (515 Titik)',
      icon: <MapPin className="w-4 h-4" />
    },
    {
      id: 'artikel',
      label: 'Artikel',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'tentang-kami',
      label: 'Tentang Kami',
      icon: <Users className="w-4 h-4" />
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
      <aside className="relative flex flex-col w-full max-w-[280px] sm:max-w-xs bg-[#FAF9F6] h-full shadow-2xl z-10 border-r border-stone-200">
        
        {/* Header with Adira Logo */}
        <div className="flex items-center justify-between p-3.5 border-b border-stone-200/80 bg-white">
          <div className="flex items-center gap-2">
            <AdiraLogo size="sm" variant="badge" />
            <div className="text-[11px] font-semibold text-stone-600">
              Mitra Resmi AXI
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
        <div className="flex-1 overflow-y-auto p-3 space-y-1 pb-6">
          <div className="px-2 py-1.5 text-[10px] font-bold tracking-wider text-stone-400 uppercase">
            Menu Navigasi
          </div>

          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-amber-100/70 text-stone-950 font-bold shadow-2xs'
                    : 'text-stone-700 hover:bg-stone-100/70 font-medium'
                }`}
              >
                <div className={`shrink-0 ${isActive ? 'text-amber-800' : 'text-stone-400'}`}>
                  {item.icon}
                </div>
                <span className="text-xs truncate flex-1">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Compact criteria badges */}
          <div className="pt-3 mt-2 border-t border-stone-200/70 px-1">
            <div className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mb-1.5">
              Kriteria Minimal Kendaraan
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[10px] bg-stone-100/70 p-2 rounded-xl border border-stone-200/60">
              <div className="flex justify-between bg-white px-2 py-1 rounded">
                <span className="text-stone-500">Motor:</span>
                <span className="font-bold text-stone-900">2017+</span>
              </div>
              <div className="flex justify-between bg-white px-2 py-1 rounded">
                <span className="text-stone-500">Mobil:</span>
                <span className="font-bold text-stone-900">2010+</span>
              </div>
              <div className="flex justify-between bg-white px-2 py-1 rounded">
                <span className="text-stone-500">Truk:</span>
                <span className="font-bold text-stone-900">2019+</span>
              </div>
              <div className="flex justify-between bg-white px-2 py-1 rounded">
                <span className="text-stone-500">Pickup:</span>
                <span className="font-bold text-stone-900">2019+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-3 border-t border-stone-200/80 bg-white space-y-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenApplication();
            }}
            className="w-full py-2.5 px-3 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors shadow-xs text-center cursor-pointer"
          >
            Formulir Pengajuan BPKB
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              openWhatsAppGeneral('Konsultasi dari Menu Sidebar');
            }}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Chat WhatsApp 0852-8815-7752</span>
          </button>
        </div>

      </aside>
    </div>
  );
};
