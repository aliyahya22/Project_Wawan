import { ApplicationFormData } from '../types';

export const OFFICIAL_WHATSAPP = '6285288157752';
export const DISPLAY_PHONE = '0852-8815-7752';

export const WHATSAPP_BASE_TEMPLATE = `*Pengajuan Gadai BPKB*
Nama :
Alamat Lengkap :
Merk/Tipe Kendaraan :
Tahun Kendaraan :`;

export function getActiveWhatsAppNumber(): string {
  return OFFICIAL_WHATSAPP;
}

export function buildWhatsAppTemplate(data?: Partial<ApplicationFormData>): string {
  if (!data || (!data.fullName && !data.address && !data.vehicleTypeDetail && !data.vehicleYear)) {
    return WHATSAPP_BASE_TEMPLATE;
  }
  return `*Pengajuan Gadai BPKB*
Nama : ${data.fullName || ''}
Alamat Lengkap : ${data.address || ''}
Merk/Tipe Kendaraan : ${data.vehicleTypeDetail || data.collateralType || ''}
Tahun Kendaraan : ${data.vehicleYear || ''}`;
}

export function openWhatsAppGeneral(_topic?: string, _customNumber?: string): void {
  const number = OFFICIAL_WHATSAPP;
  const message = WHATSAPP_BASE_TEMPLATE;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppApplication(data: ApplicationFormData, _customNumber?: string): void {
  const number = OFFICIAL_WHATSAPP;
  const message = buildWhatsAppTemplate(data);
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppBranch(_branchName?: string, _city?: string, _customNumber?: string): void {
  const number = OFFICIAL_WHATSAPP;
  const message = WHATSAPP_BASE_TEMPLATE;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
