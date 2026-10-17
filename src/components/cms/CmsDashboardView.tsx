import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { 
  LeadSubmission, 
  SubmissionStatus, 
  Article, 
  VehicleType 
} from '../../types';
import { AdiraLogo } from '../AdiraLogo';
import { 
  Inbox, 
  Settings, 
  Sliders, 
  FileText, 
  Download, 
  Upload, 
  LogOut, 
  ExternalLink, 
  Search, 
  Phone, 
  MessageCircle, 
  Trash2, 
  Plus, 
  Edit3, 
  Check, 
  X, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  Database,
  KeyRound,
  MapPin,
  Calendar,
  Building2,
  Lock,
  ArrowRight
} from 'lucide-react';

type CmsTab = 'leads' | 'settings' | 'criteria' | 'articles' | 'backup';

export const CmsDashboardView: React.FC = () => {
  const {
    settings,
    submissions,
    articles,
    vehicleCriteria,
    closeCms,
    logout,
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
  } = useCms();

  const handleSyncGitHubClick = async () => {
    updateSettings(settingsForm);
    const res = await syncToGitHub();
    if (res.success) {
      triggerToast(res.message);
    } else {
      alert(res.message);
    }
  };

  const [activeTab, setActiveTab] = useState<CmsTab>('leads');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Helper toast
  const triggerToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // 1. Leads filter state
  const [leadsSearch, setLeadsSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('Semua');

  const filteredSubmissions = submissions.filter((sub) => {
    const matchStatus = statusFilter === 'Semua' || sub.status === statusFilter;
    const matchQuery =
      !leadsSearch ||
      sub.fullName.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      sub.whatsappNumber.includes(leadsSearch) ||
      sub.address.toLowerCase().includes(leadsSearch.toLowerCase()) ||
      sub.collateralType.toLowerCase().includes(leadsSearch.toLowerCase());
    return matchStatus && matchQuery;
  });

  // Export leads to CSV
  const handleExportCsv = () => {
    const headers = ['ID', 'Nama Lengkap', 'Nomor WhatsApp', 'Jaminan', 'Tahun', 'Alamat', 'Status', 'Tanggal Masuk', 'Catatan'];
    const rows = submissions.map((s) => [
      s.id,
      `"${s.fullName.replace(/"/g, '""')}"`,
      `"${s.whatsappNumber}"`,
      `"${s.collateralType}"`,
      `"${s.vehicleYear}"`,
      `"${s.address.replace(/"/g, '""')}"`,
      `"${s.status}"`,
      `"${new Date(s.createdAt).toLocaleString('id-ID')}"`,
      `"${(s.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `leads-pengajuan-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    triggerToast('Data pengajuan berhasil diexport ke file CSV');
  };

  // 2. Settings form state
  const [settingsForm, setSettingsForm] = useState({ ...settings });

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    triggerToast('Pengaturan kontak dan WhatsApp berhasil disimpan');
  };

  // 3. Criteria form state
  const [editingCriteriaType, setEditingCriteriaType] = useState<string>('motor');
  const [criteriaForm, setCriteriaForm] = useState({ ...vehicleCriteria });

  const handleSaveCriteria = (type: string) => {
    updateVehicleCriteria(type, criteriaForm[type]);
    triggerToast(`Kriteria pembiayaan ${type.toUpperCase()} berhasil diperbarui`);
  };

  // 4. Articles form state
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [articleForm, setArticleForm] = useState({
    title: '',
    category: 'Tips & Panduan' as Article['category'],
    summary: '',
    readTime: '3 menit',
    content: '',
  });

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    const contentParagraphs = articleForm.content
      .split('\n')
      .map((p) => p.trim())
      .filter(Boolean);

    if (editingArticle) {
      updateArticle({
        ...editingArticle,
        title: articleForm.title,
        category: articleForm.category,
        summary: articleForm.summary,
        readTime: articleForm.readTime,
        content: contentParagraphs,
      });
      triggerToast('Artikel berhasil diperbarui');
    } else {
      addArticle({
        title: articleForm.title,
        category: articleForm.category,
        summary: articleForm.summary,
        readTime: articleForm.readTime,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        content: contentParagraphs,
      });
      triggerToast('Artikel baru berhasil diterbitkan');
    }

    setIsAddingArticle(false);
    setEditingArticle(null);
    setArticleForm({
      title: '',
      category: 'Tips & Panduan',
      summary: '',
      readTime: '3 menit',
      content: '',
    });
  };

  const handleOpenEditArticle = (art: Article) => {
    setEditingArticle(art);
    setArticleForm({
      title: art.title,
      category: art.category,
      summary: art.summary,
      readTime: art.readTime,
      content: art.content.join('\n\n'),
    });
    setIsAddingArticle(true);
  };

  // 5. Backup import file state
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importBackup(content);
      if (success) {
        triggerToast('Database CMS berhasil dipulihkan dari file JSON');
      } else {
        alert('Gagal memuat file backup. Format JSON tidak valid.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] pb-16">
      
      {/* Toast notification */}
      {successToast && (
        <div className="fixed top-5 right-5 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-lg border border-stone-800 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{successToast}</span>
        </div>
      )}

      {/* TOP HEADER BAR (BENTO STYLE) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <AdiraLogo size="sm" variant="badge" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-stone-900 tracking-tight">
                  Panel CMS Website
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold">
                  Client-Side
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden sm:block">
                Penyimpanan lokal tanpa backend server
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closeCms}
              className="inline-flex items-center gap-1.5 py-2 px-3 sm:px-4 bg-[#FAF9F6] hover:bg-stone-100 text-stone-800 font-semibold text-xs rounded-xl border border-stone-200 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-stone-600" />
              <span>Lihat Website</span>
            </button>

            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 py-2 px-3 bg-red-50 hover:bg-red-100 text-red-800 font-semibold text-xs rounded-xl border border-red-200 transition-colors cursor-pointer"
              title="Keluar dari Panel CMS"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* BENTO STATS & OVERVIEW ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-3xl border border-stone-200/90 shadow-2xs space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Total Pengajuan
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-stone-900 font-mono">
                {submissions.length}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                {submissions.filter((s) => s.status === 'Baru').length} Baru
              </span>
            </div>
            <span className="text-[11px] text-stone-500 block pt-1">
              Data formulir masuk dari pengunjung
            </span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-stone-200/90 shadow-2xs space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Nomor WhatsApp Aktif
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-bold text-stone-900 font-mono truncate">
                {settings.whatsappNumber}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            </div>
            <span className="text-[11px] text-stone-500 block pt-1 truncate">
              {settings.displayPhone}
            </span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-stone-200/90 shadow-2xs space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Artikel Panduan
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-stone-900 font-mono">
                {articles.length}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-stone-800">
                Live
              </span>
            </div>
            <span className="text-[11px] text-stone-500 block pt-1">
              Konten edukasi & tips nasabah
            </span>
          </div>

          <div className="bg-[#18181B] text-white p-5 rounded-3xl border border-stone-800 shadow-2xs space-y-1 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                Status Penyimpanan
              </span>
              <span className="text-base font-bold text-white block mt-0.5">
                LocalStorage Browser
              </span>
            </div>
            <div className="text-[11px] text-stone-400 flex items-center justify-between">
              <span>Bebas Biaya Hosting Server</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

        </div>

        {/* BENTO NAVIGATION TABS */}
        <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {[
            { id: 'leads', label: 'Pengajuan Masuk', icon: <Inbox className="w-4 h-4" />, count: submissions.length },
            { id: 'settings', label: 'Pengaturan Kontak & WA', icon: <Settings className="w-4 h-4" /> },
            { id: 'criteria', label: 'Kriteria & Suku Bunga', icon: <Sliders className="w-4 h-4" /> },
            { id: 'articles', label: 'Kelola Artikel', icon: <FileText className="w-4 h-4" />, count: articles.length },
            { id: 'backup', label: 'Cadangkan & Pulihkan', icon: <Database className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id as CmsTab);
                  setIsAddingArticle(false);
                  setEditingArticle(null);
                }}
                className={`flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    isActive ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: PENGAJUAN MASUK (LEADS) */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden space-y-4 p-5 sm:p-7">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Cari nama pemohon, kota, jaminan..."
                    value={leadsSearch}
                    onChange={(e) => setLeadsSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="py-2 px-3 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-800 cursor-pointer"
                >
                  <option value="Semua">Semua Status</option>
                  <option value="Baru">Status: Baru</option>
                  <option value="Dihubungi">Status: Dihubungi</option>
                  <option value="Survei">Status: Survei</option>
                  <option value="Cair">Status: Cair</option>
                  <option value="Batal">Status: Batal</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Submissions List / Table */}
            {filteredSubmissions.length === 0 ? (
              <div className="py-12 text-center text-stone-500 text-xs space-y-2">
                <Inbox className="w-8 h-8 text-stone-300 mx-auto" />
                <p>Belum ada data pengajuan yang sesuai dengan filter.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredSubmissions.map((lead) => {
                  const whatsappClean = lead.whatsappNumber.replace(/[^0-9]/g, '');
                  const formattedWa = whatsappClean.startsWith('0')
                    ? `62${whatsappClean.slice(1)}`
                    : whatsappClean;

                  return (
                    <div
                      key={lead.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:bg-stone-50"
                    >
                      {/* Left: Applicant details */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-stone-900 truncate">
                            {lead.fullName}
                          </h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                            lead.status === 'Baru'
                              ? 'bg-amber-100 text-amber-950 border-amber-300'
                              : lead.status === 'Dihubungi'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : lead.status === 'Survei'
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : lead.status === 'Cair'
                              ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                              : 'bg-stone-200 text-stone-700 border-stone-300'
                          }`}>
                            {lead.status}
                          </span>
                          <span className="text-[10px] text-stone-400">
                            {new Date(lead.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-600">
                          <div>
                            <span className="text-stone-400 block text-[10px]">Jaminan & Tahun:</span>
                            <span className="font-semibold text-stone-800">{lead.collateralType} ({lead.vehicleYear})</span>
                          </div>
                          <div>
                            <span className="text-stone-400 block text-[10px]">Kontak WhatsApp:</span>
                            <span className="font-semibold text-stone-800">{lead.whatsappNumber}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 block text-[10px]">Domisili:</span>
                            <span className="font-semibold text-stone-800 truncate block">{lead.address}</span>
                          </div>
                        </div>

                        {lead.notes && (
                          <div className="text-[11px] text-stone-500 bg-white p-2 rounded-lg border border-stone-200/70 mt-1">
                            <strong>Catatan:</strong> {lead.notes}
                          </div>
                        )}
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0">
                        {/* Status selector dropdown */}
                        <select
                          value={lead.status}
                          onChange={(e) => updateSubmissionStatus(lead.id, e.target.value as SubmissionStatus)}
                          className="py-1.5 px-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-800 cursor-pointer"
                        >
                          {(['Baru', 'Dihubungi', 'Survei', 'Cair', 'Batal'] as SubmissionStatus[]).map((st) => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>

                        {/* Direct WhatsApp button */}
                        <a
                          href={`https://wa.me/${formattedWa}?text=${encodeURIComponent(
                            `Halo Bapak/Ibu ${lead.fullName}, perkenalkan saya dari tim admin resmi Dana Cepat BPKB (Mitra AXI Adira). Menindaklanjuti formulir pengajuan Anda untuk ${lead.collateralType} (${lead.vehicleYear}), apakah dokumen STNK dan KTP Anda siap untuk kami bantu estimasi taksasi nilai cairnya? Terima kasih.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-2xs transition-colors"
                          title="Hubungi Nasabah via WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat WA</span>
                        </a>

                        {/* Delete button */}
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Hapus pengajuan atas nama ${lead.fullName}?`)) {
                              deleteSubmission(lead.id);
                              triggerToast('Data pengajuan dihapus');
                            }
                          }}
                          className="p-1.5 text-stone-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                          title="Hapus data"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: PENGATURAN KONTAK & WHATSAPP */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                Pengaturan Kontak Resmi & WhatsApp
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Nomor WhatsApp dan informasi di sini akan langsung aktif di seluruh tombol CTA website.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700">
                    Nomor WhatsApp Penerima Pengajuan (Format: 628...)
                  </label>
                  <input
                    type="text"
                    required
                    value={settingsForm.whatsappNumber}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value.replace(/[^0-9]/g, '') })}
                    placeholder="Contoh: 6281289008899"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900 font-mono"
                  />
                  <span className="text-[10px] text-stone-400 block">
                    Gunakan awalan 62 tanpa spasi atau strip.
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700">
                    Nomor Telepon Tampilan di Teks
                  </label>
                  <input
                    type="text"
                    required
                    value={settingsForm.displayPhone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, displayPhone: e.target.value })}
                    placeholder="Contoh: 0812-8900-8899"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700">
                  Alamat Kantor Operasional
                </label>
                <input
                  type="text"
                  required
                  value={settingsForm.operationalAddress}
                  onChange={(e) => setSettingsForm({ ...settingsForm, operationalAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700">
                  Alamat Kantor Pusat
                </label>
                <input
                  type="text"
                  required
                  value={settingsForm.headquartersAddress}
                  onChange={(e) => setSettingsForm({ ...settingsForm, headquartersAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700">
                    Jam Layanan Operasional
                  </label>
                  <input
                    type="text"
                    required
                    value={settingsForm.workingHours}
                    onChange={(e) => setSettingsForm({ ...settingsForm, workingHours: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700">
                    Alamat Email Resmi
                  </label>
                  <input
                    type="email"
                    required
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900"
                  />
                </div>
              </div>

              {/* Change Admin PIN */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                  <span>PIN Akses Portal CMS (Discreet Password)</span>
                </label>
                <input
                  type="text"
                  required
                  value={settingsForm.adminPin}
                  onChange={(e) => setSettingsForm({ ...settingsForm, adminPin: e.target.value })}
                  placeholder="PIN login admin..."
                  className="w-full sm:w-64 px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900 font-mono"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Simpan Perubahan Kontak
                </button>
              </div>
            </form>

            {/* GitHub Headless CMS Sync Section */}
            <div className="pt-8 border-t border-stone-200/90 space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold text-stone-900 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600" />
                  <span>Mode Headless CMS (Sinkronisasi Permanen via GitHub)</span>
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Agar perubahan Anda permanen untuk semua pengunjung di seluruh dunia tanpa server backend, hubungkan dengan repository GitHub Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700">GitHub Personal Access Token (PAT)</label>
                  <input
                    type="password"
                    value={settingsForm.githubToken || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, githubToken: e.target.value })}
                    placeholder="ghp_xxxxxxxxxxxx"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700">Repository (Format: owner/repo)</label>
                  <input
                    type="text"
                    value={settingsForm.githubRepo || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, githubRepo: e.target.value })}
                    placeholder="contoh: budi/website-bpkb"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700">Path File JSON di Repository</label>
                <input
                  type="text"
                  value={settingsForm.githubFilePath || ''}
                  onChange={(e) => setSettingsForm({ ...settingsForm, githubFilePath: e.target.value })}
                  placeholder="public/cms-data.json"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 font-mono"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSyncGitHubClick}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Sinkronkan ke GitHub Sekarang</span>
                </button>
                <span className="text-[11px] text-stone-400">
                  Perubahan akan langsung ter-commit secara otomatis ke GitHub.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: KRITERIA KENDARAAN & PLAFON */}
        {activeTab === 'criteria' && (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                Ketentuan Minimal Tahun & Batas Plafon Kendaraan
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Ubah kriteria minimal tahun dan bunga per bulan untuk setiap jenis unit agunan.
              </p>
            </div>

            {/* Sub-selector for vehicle type */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(['motor', 'mobil', 'truck', 'pickup'] as VehicleType[]).map((type) => {
                const isSelected = editingCriteriaType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEditingCriteriaType(type)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-400 bg-amber-50/80 text-stone-900 shadow-xs font-bold'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <span className="capitalize text-xs block">{type}</span>
                    <span className="text-[11px] text-stone-500 font-normal">
                      Min. {criteriaForm[type]?.minYear}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Criteria Edit Form */}
            {criteriaForm[editingCriteriaType] && (
              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-4 max-w-2xl">
                <h3 className="text-sm font-bold text-stone-900 capitalize">
                  Edit Parameter: {criteriaForm[editingCriteriaType].title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">
                      Minimal Tahun Kendaraan
                    </label>
                    <input
                      type="number"
                      min="2000"
                      max={new Date().getFullYear()}
                      value={criteriaForm[editingCriteriaType].minYear}
                      onChange={(e) =>
                        setCriteriaForm({
                          ...criteriaForm,
                          [editingCriteriaType]: {
                            ...criteriaForm[editingCriteriaType],
                            minYear: parseInt(e.target.value) || 2015,
                          },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">
                      Suku Bunga Mulai (% / Bulan)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={criteriaForm[editingCriteriaType].interestRatePerMonth}
                      onChange={(e) =>
                        setCriteriaForm({
                          ...criteriaForm,
                          [editingCriteriaType]: {
                            ...criteriaForm[editingCriteriaType],
                            interestRatePerMonth: parseFloat(e.target.value) || 0.75,
                          },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">
                      Maksimal Plafon (Juta Rupiah)
                    </label>
                    <input
                      type="number"
                      value={criteriaForm[editingCriteriaType].maxPlafondMillion}
                      onChange={(e) =>
                        setCriteriaForm({
                          ...criteriaForm,
                          [editingCriteriaType]: {
                            ...criteriaForm[editingCriteriaType],
                            maxPlafondMillion: parseInt(e.target.value) || 100,
                          },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">
                      Maksimal Tenor (Bulan)
                    </label>
                    <input
                      type="number"
                      value={criteriaForm[editingCriteriaType].maxTenorMonths}
                      onChange={(e) =>
                        setCriteriaForm({
                          ...criteriaForm,
                          [editingCriteriaType]: {
                            ...criteriaForm[editingCriteriaType],
                            maxTenorMonths: parseInt(e.target.value) || 36,
                          },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">
                    Keterangan Singkat
                  </label>
                  <textarea
                    rows={2}
                    value={criteriaForm[editingCriteriaType].description}
                    onChange={(e) =>
                      setCriteriaForm({
                        ...criteriaForm,
                        [editingCriteriaType]: {
                          ...criteriaForm[editingCriteriaType],
                          description: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleSaveCriteria(editingCriteriaType)}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Simpan Kriteria {editingCriteriaType.toUpperCase()}
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: KELOLA ARTIKEL */}
        {activeTab === 'articles' && (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                  Manajemen Artikel & Edukasi
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Publikasikan artikel panduan baru atau edit konten artikel yang sudah ada.
                </p>
              </div>

              {!isAddingArticle && (
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingArticle(true);
                    setEditingArticle(null);
                    setArticleForm({
                      title: '',
                      category: 'Tips & Panduan',
                      summary: '',
                      readTime: '3 menit',
                      content: '',
                    });
                  }}
                  className="inline-flex items-center gap-1.5 py-2.5 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Artikel Baru</span>
                </button>
              )}
            </div>

            {/* Add / Edit Article Form */}
            {isAddingArticle ? (
              <form onSubmit={handleSaveArticle} className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">
                    {editingArticle ? 'Edit Artikel' : 'Tulis Artikel Baru'}
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingArticle(false);
                      setEditingArticle(null);
                    }}
                    className="text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Judul Artikel</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Tips Agar Pengajuan BPKB Motor Langsung Disetujui"
                    value={articleForm.title}
                    onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Kategori</label>
                    <select
                      value={articleForm.category}
                      onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value as any })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl"
                    >
                      <option value="Tips & Panduan">Tips & Panduan</option>
                      <option value="Syarat & Proses">Syarat & Proses</option>
                      <option value="Take Over">Take Over</option>
                      <option value="Edukasi Finansial">Edukasi Finansial</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-700">Estimasi Waktu Baca</label>
                    <input
                      type="text"
                      placeholder="Contoh: 3 menit"
                      value={articleForm.readTime}
                      onChange={(e) => setArticleForm({ ...articleForm, readTime: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Ringkasan Singkat (Summary)</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Penjelasan ringkas artikel untuk ditampilkan di kartu artikel..."
                    value={articleForm.summary}
                    onChange={(e) => setArticleForm({ ...articleForm, summary: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Isi Konten Artikel (Pisahkan Paragraf dengan Enter)</label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Tuliskan isi artikel lengkap di sini..."
                    value={articleForm.content}
                    onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-xl font-sans"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    {editingArticle ? 'Simpan Pembaruan' : 'Terbitkan Artikel'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingArticle(false);
                      setEditingArticle(null);
                    }}
                    className="px-4 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-xl transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                </div>
              </form>
            ) : (
              /* Articles list */
              <div className="divide-y divide-stone-100 border border-stone-200/80 rounded-2xl overflow-hidden">
                {articles.map((art) => (
                  <div key={art.id} className="p-4 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                          {art.category}
                        </span>
                        <span className="text-[10px] text-stone-400">{art.date}</span>
                      </div>
                      <h4 className="text-xs font-bold text-stone-900 truncate">{art.title}</h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">{art.summary}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleOpenEditArticle(art)}
                        className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-200/80 transition-colors cursor-pointer"
                        title="Edit artikel"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Hapus artikel "${art.title}"?`)) {
                            deleteArticle(art.id);
                            triggerToast('Artikel berhasil dihapus');
                          }
                        }}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Hapus artikel"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: CADANGKAN & PULIHKAN (BACKUP & RESTORE) */}
        {activeTab === 'backup' && (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                Cadangkan & Pulihkan Database CMS
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Karena sistem ini berjalan tanpa backend server, seluruh data berada di browser Anda. Selalu unduh file backup JSON secara berkala untuk pengamanan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Export Card */}
              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900">Unduh Backup Data JSON</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Menyimpan seluruh riwayat pengajuan masuk, pengaturan nomor kontak, artikel, dan kriteria kendaraan ke dalam satu file berkas JSON.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={exportBackup}
                  className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Backup JSON</span>
                </button>
              </div>

              {/* Import Card */}
              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
                    <Upload className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900">Pulihkan dari File Backup</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Unggah file backup JSON yang sebelumnya telah Anda unduh untuk mengembalikan seluruh pengaturan situs dan database pengajuan.
                  </p>
                </div>

                <label className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Pilih File Backup JSON</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportFile}
                    className="hidden"
                  />
                </label>
              </div>

            </div>

            {/* Reset to Factory Defaults */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-500">
                <span className="font-semibold text-stone-700 block">Kembalikan ke Setelan Awal (Reset Default):</span>
                <span>Menghapus cache lokal dan mengembalikan data bawaan aplikasi.</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Yakin ingin mereset seluruh data CMS ke pengaturan bawaan awal? Tindakan ini tidak dapat dibatalkan.')) {
                    resetToDefaults();
                    triggerToast('Sistem telah direset ke setelan awal pabrik.');
                  }
                }}
                className="py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-800 border border-red-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Reset ke Default Pabrik
              </button>
            </div>

          </div>
        )}

      </main>

    </div>
  );
};
