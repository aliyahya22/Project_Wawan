import React, { useState, useEffect } from 'react';
import { ActivePage, VehicleType } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BerandaView } from './components/BerandaView';
import { DanaTunaiView } from './components/DanaTunaiView';
import { TakeOverView } from './components/TakeOverView';
import { TopupView } from './components/TopupView';
import { CabangView } from './components/CabangView';
import { ArtikelView } from './components/ArtikelView';
import { TentangKamiView } from './components/TentangKamiView';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { CmsProvider, useCms } from './context/CmsContext';
import { CmsDashboardView } from './components/cms/CmsDashboardView';
import { CmsLoginView } from './components/cms/CmsLoginView';

function MainAppContent() {
  const { isCmsView, isAuthenticated, openCms } = useCms();
  const [activePage, setActivePage] = useState<ActivePage>('beranda');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'syarat' | 'privasi' | null>(null);

  // Hidden discrete keyboard shortcut to access CMS portal: Ctrl + Shift + A (or Cmd + Shift + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        openCms();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openCms]);

  // If user navigated to hidden CMS view (via #cms, ?cms, or shortcut)
  if (isCmsView) {
    if (!isAuthenticated) {
      return <CmsLoginView />;
    }
    return <CmsDashboardView />;
  }

  // Scroll to top on page change
  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigates directly to the single application form on Beranda
  const handleOpenApplication = (_vehicleType?: VehicleType, _serviceType?: 'Dana Tunai' | 'Take Over' | 'Top Up') => {
    setActivePage('beranda');
    setTimeout(() => {
      const el = document.getElementById('formulir-pengajuan-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B] flex flex-col selection:bg-amber-100 selection:text-stone-900">
      
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenApplication={() => handleOpenApplication()}
        onToggleSidebar={() => setIsSidebarOpen(true)}
      />

      {/* Sidebar navigation drawer */}
      <Sidebar
        isOpen={isSidebarOpen}
        activePage={activePage}
        onNavigate={handleNavigate}
        onClose={() => setIsSidebarOpen(false)}
        onOpenApplication={() => handleOpenApplication()}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activePage === 'beranda' && (
          <BerandaView
            onNavigate={handleNavigate}
            onOpenApplication={(vt) => handleOpenApplication(vt, 'Dana Tunai')}
          />
        )}

        {activePage === 'dana-tunai' && (
          <DanaTunaiView
            onOpenApplication={(vt) => handleOpenApplication(vt, 'Dana Tunai')}
          />
        )}

        {activePage === 'take-over' && (
          <TakeOverView
            onOpenApplication={() => handleOpenApplication('mobil', 'Take Over')}
          />
        )}

        {activePage === 'topup' && (
          <TopupView
            onOpenApplication={() => handleOpenApplication('mobil', 'Top Up')}
          />
        )}

        {activePage === 'cabang' && (
          <CabangView />
        )}

        {activePage === 'artikel' && (
          <ArtikelView />
        )}

        {activePage === 'tentang-kami' && (
          <TentangKamiView />
        )}
      </main>

      {/* Footer with hidden discrete access button */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating WhatsApp CTA Button */}
      <WhatsAppFloatingButton />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

export default function App() {
  return (
    <CmsProvider>
      <MainAppContent />
    </CmsProvider>
  );
}
