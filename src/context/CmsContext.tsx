import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  LeadSubmission, 
  SubmissionStatus, 
  CmsSettings, 
  Article, 
  VehicleRequirement, 
  ApplicationFormData 
} from '../types';
import { 
  OFFICIAL_WHATSAPP, 
  DISPLAY_PHONE, 
  OFFICE_ADDRESS, 
  VEHICLE_CRITERIA, 
  ARTICLES_DATA 
} from '../data/mockData';

const DEFAULT_SETTINGS: CmsSettings = {
  whatsappNumber: OFFICIAL_WHATSAPP,
  displayPhone: DISPLAY_PHONE,
  headquartersAddress: OFFICE_ADDRESS.headquarters,
  operationalAddress: OFFICE_ADDRESS.operationalOffice,
  workingHours: OFFICE_ADDRESS.workingHours,
  email: OFFICE_ADDRESS.email,
  adminPin: 'admin123',
  githubToken: '',
  githubRepo: '',
  githubFilePath: 'public/cms-data.json',
};

const SAMPLE_SUBMISSIONS: LeadSubmission[] = [
  {
    id: 'lead-1',
    fullName: 'Budi Santoso',
    whatsappNumber: '081289871122',
    collateralType: 'BPKB Mobil',
    vehicleYear: '2021',
    address: 'Kec. Lengkong, Kota Bandung',
    status: 'Baru',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    notes: 'Unit Toyota Avanza Veloz, butuh cair 80jt.',
  },
  {
    id: 'lead-2',
    fullName: 'Rina Wijaya',
    whatsappNumber: '081399887766',
    collateralType: 'BPKB Motor',
    vehicleYear: '2022',
    address: 'Kec. Tebet, Jakarta Selatan',
    status: 'Dihubungi',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    notes: 'Honda PCX 160, berkas KTP dan STNK sudah siap.',
  },
  {
    id: 'lead-3',
    fullName: 'Hendra Saputra',
    whatsappNumber: '085277889900',
    collateralType: 'BPKB Truk',
    vehicleYear: '2020',
    address: 'Kec. Rungkut, Kota Surabaya',
    status: 'Survei',
    createdAt: new Date(Date.now() - 3600000 * 36).toISOString(),
    notes: 'Colt Diesel Canter ekspedisi logistik, taksasi 150jt.',
  },
];

interface CmsContextType {
  settings: CmsSettings;
  submissions: LeadSubmission[];
  articles: Article[];
  vehicleCriteria: Record<string, VehicleRequirement>;
  isCmsView: boolean;
  isAuthenticated: boolean;
  openCms: () => void;
  closeCms: () => void;
  login: (pin: string) => boolean;
  logout: () => void;
  addSubmission: (formData: ApplicationFormData) => void;
  updateSubmissionStatus: (id: string, status: SubmissionStatus, notes?: string) => void;
  deleteSubmission: (id: string) => void;
  updateSettings: (newSettings: Partial<CmsSettings>) => void;
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  updateVehicleCriteria: (type: string, updated: Partial<VehicleRequirement>) => void;
  exportBackup: () => void;
  importBackup: (jsonString: string) => boolean;
  resetToDefaults: () => void;
  syncToGitHub: () => Promise<{ success: boolean; message: string }>;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SETTINGS: 'adira_cms_settings_v2',
  SUBMISSIONS: 'adira_cms_submissions_v2',
  ARTICLES: 'adira_cms_articles_v2',
  CRITERIA: 'adira_cms_criteria_v2',
  AUTH: 'adira_cms_auth_session_v2',
};

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Settings state
  const [settings, setSettings] = useState<CmsSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // 2. Submissions state
  const [submissions, setSubmissions] = useState<LeadSubmission[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
      return saved ? JSON.parse(saved) : SAMPLE_SUBMISSIONS;
    } catch {
      return SAMPLE_SUBMISSIONS;
    }
  });

  // 3. Articles state
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      return saved ? JSON.parse(saved) : ARTICLES_DATA;
    } catch {
      return ARTICLES_DATA;
    }
  });

  // 4. Vehicle Criteria state
  const [vehicleCriteria, setVehicleCriteria] = useState<Record<string, VehicleRequirement>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CRITERIA);
      return saved ? JSON.parse(saved) : VEHICLE_CRITERIA;
    } catch {
      return VEHICLE_CRITERIA;
    }
  });

  // 5. Auth and Navigation state
  const [isCmsView, setIsCmsView] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Detect hidden CMS link on initial mount & URL changes
  useEffect(() => {
    const checkUrlForCms = () => {
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        search.includes('cms') || 
        search.includes('admin') || 
        hash.includes('cms') || 
        hash.includes('admin')
      ) {
        setIsCmsView(true);
      }
    };

    checkUrlForCms();
    window.addEventListener('popstate', checkUrlForCms);
    return () => window.removeEventListener('popstate', checkUrlForCms);
  }, []);

  // Sync to localStorage as temporary cache, plus GitHub sync if token provided
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(submissions));
  }, [submissions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CRITERIA, JSON.stringify(vehicleCriteria));
  }, [vehicleCriteria]);

  // GitHub Sync Function (Headless CMS mode)
  const syncToGitHub = async (): Promise<{ success: boolean; message: string }> => {
    if (!settings.githubToken || !settings.githubRepo || !settings.githubFilePath) {
      return { success: false, message: 'Konfigurasi GitHub belum lengkap (Token, Repo, dan Path file wajib diisi).' };
    }

    try {
      const [owner, repo] = settings.githubRepo.split('/');
      const filePath = settings.githubFilePath;
      const token = settings.githubToken;

      if (!owner || !repo) {
        return { success: false, message: 'Format Repository salah (gunakan format: owner/nama-repo).' };
      }

      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
      
      let sha: string | undefined = undefined;
      const getRes = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
        },
      });
      if (getRes.ok) {
        const fileData = await getRes.json();
        sha = fileData.sha;
      }

      const payloadData = {
        updatedAt: new Date().toISOString(),
        settings,
        submissions,
        articles,
        vehicleCriteria,
      };

      const contentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(payloadData, null, 2))));

      const putRes = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `CMS Headless Sync Update: ${new Date().toLocaleString('id-ID')}`,
          content: contentBase64,
          sha: sha,
        }),
      });

      if (putRes.ok) {
        return { success: true, message: 'Berhasil sinkronisasi permanen ke GitHub untuk semua pengunjung!' };
      } else {
        const errJson = await putRes.json();
        return { success: false, message: errJson.message || 'Gagal commit ke GitHub. Periksa kembali Token Anda.' };
      }
    } catch (err: any) {
      return { success: false, message: err.message || 'Terjadi kesalahan jaringan saat sinkronisasi GitHub.' };
    }
  };

  // Auth methods
  const login = (pin: string): boolean => {
    if (pin.trim() === settings.adminPin.trim()) {
      setIsAuthenticated(true);
      sessionStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  const openCms = () => {
    setIsCmsView(true);
    window.history.pushState(null, '', '#cms-portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCms = () => {
    setIsCmsView(false);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submission methods
  const addSubmission = (formData: ApplicationFormData) => {
    const newSubmission: LeadSubmission = {
      id: `lead-${Date.now()}`,
      fullName: formData.fullName,
      whatsappNumber: formData.whatsappNumber,
      collateralType: formData.collateralType,
      vehicleYear: formData.vehicleYear,
      address: formData.address,
      status: 'Baru',
      createdAt: new Date().toISOString(),
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
  };

  const updateSubmissionStatus = (id: string, status: SubmissionStatus, notes?: string) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === id
          ? { ...sub, status, notes: notes !== undefined ? notes : sub.notes }
          : sub
      )
    );
  };

  const deleteSubmission = (id: string) => {
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
  };

  // Settings methods
  const updateSettings = (newSettings: Partial<CmsSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  // Articles methods
  const addArticle = (artData: Omit<Article, 'id'>) => {
    const newArticle: Article = {
      ...artData,
      id: `art-${Date.now()}`,
    };
    setArticles((prev) => [newArticle, ...prev]);
  };

  const updateArticle = (updated: Article) => {
    setArticles((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  // Vehicle criteria methods
  const updateVehicleCriteria = (type: string, updated: Partial<VehicleRequirement>) => {
    setVehicleCriteria((prev) => ({
      ...prev,
      [type]: { ...prev[type], ...updated },
    }));
  };

  // Backup & Excel / JSON Export
  const exportBackup = () => {
    const backupData = {
      exportedAt: new Date().toISOString(),
      settings,
      submissions,
      articles,
      vehicleCriteria,
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-cms-danacepat-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importBackup = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.settings) setSettings(parsed.settings);
      if (Array.isArray(parsed.submissions)) setSubmissions(parsed.submissions);
      if (Array.isArray(parsed.articles)) setArticles(parsed.articles);
      if (parsed.vehicleCriteria) setVehicleCriteria(parsed.vehicleCriteria);
      return true;
    } catch (err) {
      console.error('Failed to parse backup JSON:', err);
      return false;
    }
  };

  const resetToDefaults = () => {
    setSettings(DEFAULT_SETTINGS);
    setSubmissions(SAMPLE_SUBMISSIONS);
    setArticles(ARTICLES_DATA);
    setVehicleCriteria(VEHICLE_CRITERIA);
    localStorage.clear();
  };

  return (
    <CmsContext.Provider
      value={{
        settings,
        submissions,
        articles,
        vehicleCriteria,
        isCmsView,
        isAuthenticated,
        openCms,
        closeCms,
        login,
        logout,
        addSubmission,
        updateSubmissionStatus,
        deleteSubmission,
        updateSettings,
        addArticle,
        updateArticle,
        deleteArticle,
        updateVehicleCriteria,
        exportBackup,
        importBackup,
        resetToDefaults,
        syncToGitHub,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = (): CmsContextType => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
