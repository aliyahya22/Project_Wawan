import React from 'react';
import { ActivePage } from '../types';
import { Menu, MessageCircle } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import { AdiraLogo } from './AdiraLogo';

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
    { id: 'topup', label: 'Topup Pinjaman' },
    { id: 'cabang', label: 'Cabang' },
    { id: 'artikel', label: 'Artikel' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand title & Official Adira Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label="Buka menu navigasi"
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors focus:outline-none"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            {/* Authentic Adira Finance Logo Badge */}
            <AdiraLogo size="sm" variant="badge" className="transition-transform group-hover:scale-102" />
            <div className="hidden sm:block">
              <span className="text-xs font-semibold text-stone-800 tracking-tight block">
                Pencairan Dana BPKB
              </span>
              <span className="text-[10px] text-stone-500 font-medium block">
                Mitra Resmi AXI
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Minimalist Navigation Links (Single-line, Zero-pill) */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wide font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive
                    ? 'text-stone-900 font-bold'
                    : 'text-stone-600 hover:text-stone-900'
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

        {/* Zone 3: Clean Actions (WhatsApp CTA + Primary Button) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Pengajuan Cepat')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Chat WhatsApp Resmi"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Chat WA</span>
          </button>

          <button
            type="button"
            onClick={onOpenApplication}
            className="px-4 py-2 text-xs font-semibold text-stone-950 bg-[#FFCC00] hover:bg-[#F5C400] active:bg-[#E6B800] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Ajukan BPKB
          </button>
        </div>

      </div>
    </header>
  );
};
