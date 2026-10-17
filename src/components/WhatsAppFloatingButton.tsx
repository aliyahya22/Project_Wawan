import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="mb-2 p-3.5 bg-white border border-stone-200/90 rounded-2xl shadow-lg max-w-xs text-xs text-stone-700 relative animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-stone-100">
            <span className="font-bold text-stone-900">Layanan Siaga WhatsApp</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-stone-400 hover:text-stone-700 p-0.5"
              aria-label="Tutup info"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-stone-600 mb-2 leading-relaxed">
            Konsultasikan simulasi angsuran, syarat, atau cek taksasi kendaraan Anda langsung bersama tim kami.
          </p>
          <button
            type="button"
            onClick={() => openWhatsAppGeneral('Pertanyaan Cepat')}
            className="flex items-center justify-center gap-1 text-emerald-800 font-semibold hover:underline w-full text-right"
          >
            <span>Mulai Chat Sekarang</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp FAB - Minimalist & Clean */}
      <button
        type="button"
        onClick={() => openWhatsAppGeneral('Konsultasi BPKB')}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat WhatsApp Resmi"
        className="group flex items-center gap-2 px-4 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-600"
      >
        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
          <MessageCircle className="w-3.5 h-3.5" />
        </div>
        <span className="hidden sm:inline font-semibold text-xs whitespace-nowrap">
          Chat WhatsApp
        </span>
      </button>
    </div>
  );
};
