export type VehicleType = 'motor' | 'mobil' | 'truck' | 'pickup';

export interface VehicleRequirement {
  type: VehicleType;
  title: string;
  minYear: number;
  maxTenorMonths: number;
  maxPlafondMillion: number;
  interestRatePerMonth: number;
  popularModels: string[];
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Article {
  id: string;
  title: string;
  category: 'Tips & Panduan' | 'Take Over' | 'Syarat & Proses' | 'Edukasi Finansial';
  summary: string;
  content: string[];
  date: string;
  readTime: string;
}

export type ActivePage = 
  | 'beranda'
  | 'dana-tunai'
  | 'take-over'
  | 'topup'
  | 'cabang'
  | 'artikel'
  | 'tentang-kami';

export interface ApplicationFormData {
  fullName: string;
  whatsappNumber: string;
  collateralType: string;
  vehicleYear: string;
  address: string;
}

export type SubmissionStatus = 'Baru' | 'Dihubungi' | 'Survei' | 'Cair' | 'Batal';

export interface LeadSubmission {
  id: string;
  fullName: string;
  whatsappNumber: string;
  collateralType: string;
  vehicleYear: string;
  address: string;
  status: SubmissionStatus;
  createdAt: string;
  notes?: string;
}

export interface CmsSettings {
  whatsappNumber: string;
  displayPhone: string;
  headquartersAddress: string;
  operationalAddress: string;
  workingHours: string;
  email: string;
  adminPin: string;
  githubToken?: string;
  githubRepo?: string;
  githubFilePath?: string;
}
