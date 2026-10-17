import React from 'react';
import { VehicleType } from '../types';
import { X } from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { ApplicationForm } from './ApplicationForm';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicleType?: VehicleType;
  initialServiceType?: 'Dana Tunai' | 'Take Over' | 'Top Up';
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialVehicleType = 'mobil',
}) => {
  if (!isOpen) return null;

  const collateralDefault =
    initialVehicleType === 'motor'
      ? 'BPKB Motor'
      : initialVehicleType === 'truck'
      ? 'BPKB Truk'
      : initialVehicleType === 'pickup'
      ? 'BPKB Pickup'
      : 'BPKB Mobil';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog container - Minimalist Pastel Style */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[92vh] overflow-y-auto z-10 border border-stone-200">
        
        {/* Header with Adira Logo */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-stone-200/80 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <AdiraLogo size="sm" variant="badge" />
            <div>
              <h2 className="text-sm font-bold text-stone-900">
                Formulir Pengajuan Resmi
              </h2>
              <p className="text-[11px] text-stone-500">
                Mitra AXI Adira Finance
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <ApplicationForm
            initialCollateral={collateralDefault}
            showTitle={true}
          />
        </div>

      </div>
    </div>
  );
};
