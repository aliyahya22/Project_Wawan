import React from 'react';
import { ActivePage } from '../../types';
import { Menu, MessageCircle } from 'lucide-react';
import { openWhatsAppGeneral } from '../../utils/whatsapp';
import { AdiraLogo } from '../common/AdiraLogo';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenApplication: () => void;
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenApplication,
  onToggleSidebar,
}) => {
  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'dana-tunai', label: 'Dana Tunai' },
    { id: 'take-over', label: 'Take Over' },
    { id: 'topup', label: 'Top Up' },
    { id: 'cabang', label: 'Cabang' },
    { id: 'artikel', label: 'Artikel' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Primary Top Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-15 sm:h-18 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Zone 1: Brand title & Official Adira Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label="Buka menu navigasi"
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none shrink-0 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none group shrink-0 cursor-pointer"
          >
            {/* Authentic Adira Finance Logo Badge */}
            <div className="sm:hidden">
              <AdiraLogo size="sm" variant="badge" />
            </div>
            <div className="hidden sm:block">
              <AdiraLogo size="md" variant="badge" className="transition-transform group-hover:scale-102" />
            </div>
            <div className="hidden 2xl:block">
              <span className="text-xs font-semibold text-stone-800 tracking-tight block">
                Pencairan Dana BPKB
              </span>
              <span className="text-[10px] text-stone-500 font-medium block">
                Mitra Resmi AXI
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Desktop Navigation Links (Airy, spacious, not mepet) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 2xl:gap-8 text-xs font-semibold text-stone-600">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1.5 relative cursor-pointer ${
                  isActive
                    ? 'text-stone-950 font-bold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFCC00] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Clean Actions (Only Ajukan BPKB on HP, Hubungi Kami visible on Desktop) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* WhatsApp CTA with 'Hubungi Kami' text (hidden on HP / mobile, only on desktop) */}
          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Pengajuan Cepat Navbar')}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-2xs hover:shadow-xs"
            title="Hubungi Kami via WhatsApp: 0852-8815-7752"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="font-bold">Hubungi Kami</span>
          </button>

          {/* Primary Action Button (Ajukan BPKB - Clean, prominent on both HP and desktop) */}
          <button
            type="button"
            onClick={onOpenApplication}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-stone-950 bg-[#FFCC00] hover:bg-[#F5C400] active:bg-[#E6B800] rounded-xl transition-all whitespace-nowrap shrink-0 shadow-xs hover:shadow-sm cursor-pointer"
          >
            Ajukan BPKB
          </button>
        </div>

      </div>

      {/* Mobile Horizontal Overflow Navigation (Swipeable touch navigation bar for HP) */}
      <div className="lg:hidden border-t border-stone-200/60 bg-[#FAF9F6] overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center gap-2 px-3 py-2 min-w-max">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#FFCC00] text-stone-950 font-extrabold shadow-2xs'
                    : 'text-stone-700 hover:text-stone-950 bg-white border border-stone-200/80 font-medium active:bg-stone-100'
                }`}
              >
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
