import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { AdiraLogo } from '../AdiraLogo';
import { Lock, ArrowRight, ShieldCheck, ArrowLeft, KeyRound, AlertCircle } from 'lucide-react';

export const CmsLoginView: React.FC = () => {
  const { login, closeCms, settings } = useCms();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(pin);
    if (!success) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col items-center justify-center p-4 sm:p-6">
      
      {/* Back button */}
      <div className="w-full max-w-md mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={closeCms}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors py-2 px-3 rounded-xl hover:bg-stone-200/60 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Website Utama</span>
        </button>
        <span className="text-[11px] text-stone-400 font-mono">Discreet Access</span>
      </div>

      {/* Main Bento Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="flex justify-center">
            <AdiraLogo size="sm" variant="badge" />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
              Portal Administrasi CMS
            </h1>
            <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
              Area khusus pengelola situs. Akses tersimpan secara lokal di browser Anda tanpa ketergantungan server backend.
            </p>
          </div>
        </div>

        {/* PIN Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5 text-left">
            <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700">
              <KeyRound className="w-3.5 h-3.5 text-amber-600" />
              <span>Masukkan Kode PIN / Password Admin</span>
            </label>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                placeholder="Masukkan PIN Anda..."
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  if (error) setError(false);
                }}
                className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900 transition-all font-mono"
              />
              <Lock className="w-4 h-4 text-stone-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-[11px] text-stone-400">
              PIN bawaan standar awal: <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-700 font-mono">admin123</code> (dapat diubah di dalam).
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>PIN / Password salah. Silakan coba lagi.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-stone-950 bg-[#FFCC00] hover:bg-[#F5C400] active:bg-[#E6B800] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Buka Panel CMS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Security Reassurance Bento note */}
        <div className="p-3.5 bg-[#FAF9F6] rounded-2xl border border-stone-200/80 text-[11px] text-stone-600 space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-stone-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Keamanan Client-Side (Tanpa Backend)</span>
          </div>
          <p className="text-stone-500 leading-relaxed">
            Data pengajuan, pengaturan nomor WhatsApp, dan artikel disimpan aman di memori penyimpanan lokal browser (*localStorage*) perangkat Anda.
          </p>
        </div>

      </div>

      <div className="mt-6 text-center text-xs text-stone-400">
        Mitra Resmi AXI Adira Finance · Sistem CMS Internal
      </div>
    </div>
  );
};
