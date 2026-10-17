import { OFFICIAL_WHATSAPP } from '../data/mockData';
import { ApplicationFormData } from '../types';

export function getActiveWhatsAppNumber(): string {
  try {
    const saved = localStorage.getItem('adira_cms_settings_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.whatsappNumber && parsed.whatsappNumber.trim()) {
        return parsed.whatsappNumber.trim();
      }
    }
  } catch {
    // fallback
  }
  return OFFICIAL_WHATSAPP;
}

export function openWhatsAppGeneral(topic = 'Konsultasi Gadai BPKB', customNumber?: string): void {
  const number = customNumber || getActiveWhatsAppNumber();
  const message = `Halo Admin Dana Cepat BPKB (Mitra AXI), saya ingin berkonsultasi mengenai ${topic}. Boleh dibantu informasi persyaratan dan simulasi angsurannya? Terima kasih.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openWhatsAppApplication(data: ApplicationFormData, customNumber?: string): void {
  const number = customNumber || getActiveWhatsAppNumber();
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
  const number = customNumber || getActiveWhatsAppNumber();
  const message = `Halo Admin Cabang ${branchName} (${city}), saya ingin mengajukan pencairan BPKB kendaraan di cabang terdekat Anda. Apakah bisa dibantu proses atau jadwal janji temu? Terima kasih.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
