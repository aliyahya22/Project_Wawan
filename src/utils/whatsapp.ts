import { OFFICIAL_WHATSAPP } from '../data/mockData';
import { ApplicationFormData } from '../types';

export function getActiveWhatsAppNumber(): string {
  try {
    // Purge all legacy and stale storage keys so revised number 0852-8815-7752 is always active
    const legacyKeys = [
      'adira_cms_settings_v1', 
      'adira_cms_settings_v2', 
      'adira_cms_settings_v3', 
      'adira_cms_settings_v4',
      'adira_cms_settings_v5',
      'adira_cms_settings_v6',
    ];
    legacyKeys.forEach((key) => {
      try {
        localStorage.removeItem(key);
      } catch {
        // ignore
      }
    });

    const saved = localStorage.getItem('adira_cms_settings_v7');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.whatsappNumber && typeof parsed.whatsappNumber === 'string') {
        const clean = parsed.whatsappNumber.replace(/[^0-9]/g, '');
        if (clean === OFFICIAL_WHATSAPP || clean === '085288157752') {
          return OFFICIAL_WHATSAPP;
        }
      }
    }
  } catch {
    // fallback
  }
  return OFFICIAL_WHATSAPP;
}

export function openWhatsAppGeneral(topic = 'Konsultasi Gadai BPKB', customNumber?: string): void {
  const number = customNumber ? customNumber.replace(/[^0-9]/g, '') : getActiveWhatsAppNumber();
  const message = `Halo Admin Dana Cepat BPKB (Mitra AXI), saya ingin berkonsultasi mengenai ${topic}. Boleh dibantu informasi persyaratan dan estimasi taksasi nilai pencairannya? Terima kasih.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppApplication(data: ApplicationFormData, customNumber?: string): void {
  const number = customNumber ? customNumber.replace(/[^0-9]/g, '') : getActiveWhatsAppNumber();
  const message = `*FORMULIR PENGAJUAN PINJAMAN BPKB*
----------------------------------------
*Nama Lengkap:* ${data.fullName}
*Nomor WhatsApp:* ${data.whatsappNumber}
*Jaminan:* ${data.collateralType}
*Tahun Kendaraan:* ${data.vehicleYear}
*Alamat Domisili:* ${data.address}

Halo Tim Admin Dana Cepat BPKB (Mitra Resmi AXI Adira), saya telah mengisi formulir pengajuan di atas. Mohon bantuannya untuk informasi taksasi nilai pencairan dan persyaratannya. Terima kasih.`;

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppBranch(branchName: string, city: string, customNumber?: string): void {
  const number = customNumber ? customNumber.replace(/[^0-9]/g, '') : getActiveWhatsAppNumber();
  const message = `Halo Admin ${branchName} (${city}), saya ingin mengajukan pencairan dana tunai jaminan BPKB di kantor cabang ini. Mohon informasi taksasi dan jadwal cek fisik unit. Terima kasih.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
