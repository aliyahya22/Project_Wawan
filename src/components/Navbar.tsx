import React from 'react';
import { ActivePage } from '../types';
import { Menu, MessageCircle, Phone } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Zone 1: Brand title & Official Adira Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label="Buka menu navigasi"
            className="xl:hidden p-1.5 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors focus:outline-none shrink-0"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <button
            type="button"
            onClick={() => onNavigate('beranda')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group shrink-0"
          >
            {/* Authentic Adira Finance Logo Badge (responsive size) */}
            <div className="sm:hidden">
              <AdiraLogo size="sm" variant="badge" />
            </div>
            <div className="hidden sm:block">
              <AdiraLogo size="md" variant="badge" className="transition-transform group-hover:scale-102" />
            </div>
            <div className="hidden lg:block">
              <span className="text-xs font-semibold text-stone-800 tracking-tight block">
                Pencairan Dana BPKB
              </span>
              <span className="text-[10px] text-stone-500 font-medium block">
                Mitra Resmi AXI
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Minimalist Navigation Links (Single-line, Zero-pill, Cleanly spaced on XL screens) */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-xs tracking-wide font-medium text-stone-600">
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

        {/* Zone 3: Clean Actions (Direct Phone + WhatsApp + Primary Button) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Direct Phone / Hotline on 2XL screens */}
          <a
            href="tel:085288157752"
            className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200/90 rounded-lg transition-colors whitespace-nowrap"
            title="Hubungi Hotline Langsung"
          >
            <Phone className="w-3.5 h-3.5 text-stone-700" />
            <span className="font-mono">0852-8815-7752</span>
          </a>

          {/* Direct WhatsApp CTA with number */}
          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Pengajuan Cepat')}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Chat WhatsApp Resmi: 0852-8815-7752"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="font-bold text-[11px] text-emerald-900">Chat WA</span>
          </button>

          <button
            type="button"
            onClick={onOpenApplication}
            className="px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold text-stone-950 bg-[#FFCC00] hover:bg-[#F5C400] active:bg-[#E6B800] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            Ajukan BPKB
          </button>
        </div>

      </div>
    </header>
  );
};
