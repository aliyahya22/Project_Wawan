import React, { useState, useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import { ALL_515_BRANCHES, FullBranch } from '../data/branchesData';
import { openWhatsAppBranch } from '../utils/whatsapp';
import { 
  MapPin, 
  Search, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Compass, 
  RotateCw,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  ExternalLink,
  Layers,
  PhoneCall,
  FileText,
  X,
  Copy,
  Check
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { updateBranchSeo } from '../utils/seo';
import { CabangDetailView } from './CabangDetailView';

export const CabangView: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<FullBranch>(ALL_515_BRANCHES[0]);
  const [activeBranchPage, setActiveBranchPage] = useState<FullBranch | null>(null);
  const [mapProvider, setMapProvider] = useState<'osm' | 'google'>('osm');

  useEffect(() => {
    if (selectedBranch && !activeBranchPage) {
      updateBranchSeo(selectedBranch);
    }
  }, [selectedBranch, activeBranchPage]);

  // Deep linking and global Leaflet popup handler for dedicated branch pages
  useEffect(() => {
    const checkUrl = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      const cabangQuery = params.get('cabang');

      if (cabangQuery) {
        const found = ALL_515_BRANCHES.find(b => b.id.toLowerCase() === cabangQuery.toLowerCase());
        if (found) {
          setActiveBranchPage(found);
          setSelectedBranch(found);
          return;
        }
      }

      if (hash) {
        const match = hash.match(/cabang[/-](br-\d+)/i) || hash.match(/(br-\d+)/i);
        if (match && match[1]) {
          const found = ALL_515_BRANCHES.find(b => b.id.toLowerCase() === match[1].toLowerCase());
          if (found) {
            setActiveBranchPage(found);
            setSelectedBranch(found);
            return;
          }
        }
      }
    };

    checkUrl();
    window.addEventListener('hashchange', checkUrl);
    window.addEventListener('popstate', checkUrl);

    // Provide global function for HTML popup inside Leaflet map
    (window as any).openBranchDetailPage = (branchId: string) => {
      const found = ALL_515_BRANCHES.find(b => b.id === branchId);
      if (found) {
        setActiveBranchPage(found);
        setSelectedBranch(found);
        try {
          window.history.pushState(null, '', `#cabang-${found.id}`);
        } catch (_) {}
      }
    };

    return () => {
      window.removeEventListener('hashchange', checkUrl);
      window.removeEventListener('popstate', checkUrl);
      delete (window as any).openBranchDetailPage;
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua');
  const [selectedProvince, setSelectedProvince] = useState<string>('Semua');

  // Leaflet map refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const markersMapRef = useRef<Map<string, L.Marker>>(new Map());

  // Distinct regions and provinces
  const regions = [
    'Semua',
    'Jawa',
    'Sumatera',
    'Kalimantan',
    'Sulawesi',
    'Bali & Nusa Tenggara',
    'Maluku & Papua',
  ];

  const provinces = useMemo(() => {
    let source = ALL_515_BRANCHES;
    if (selectedRegion !== 'Semua') {
      source = source.filter((b) => b.region === selectedRegion);
    }
    return ['Semua', ...Array.from(new Set(source.map((b) => b.province)))];
  }, [selectedRegion]);

  // Filtered branches
  const filteredBranches = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return ALL_515_BRANCHES.filter((b) => {
      const matchRegion = selectedRegion === 'Semua' || b.region === selectedRegion;
      const matchProvince = selectedProvince === 'Semua' || b.province === selectedProvince;
      const matchQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q) ||
        b.province.toLowerCase().includes(q);

      return matchRegion && matchProvince && matchQuery;
    });
  }, [searchQuery, selectedRegion, selectedProvince]);

  // Initialize Leaflet Map with OpenStreetMap Standard
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if ((mapContainerRef.current as any)._leaflet_id) {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      } else {
        (mapContainerRef.current as any)._leaflet_id = null;
      }
    }

    try {
      const map = L.map(mapContainerRef.current, {
        center: [-2.5489, 118.0149],
        zoom: 5,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const markersLayer = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
      markersLayerRef.current = markersLayer;

      const timers = [
        setTimeout(() => map.invalidateSize(), 100),
        setTimeout(() => map.invalidateSize(), 300),
        setTimeout(() => map.invalidateSize(), 600),
        setTimeout(() => map.invalidateSize(), 1200),
      ];

      const resizeObserver = new ResizeObserver(() => {
        map.invalidateSize();
      });
      resizeObserver.observe(mapContainerRef.current);

      return () => {
        timers.forEach((t) => clearTimeout(t));
        resizeObserver.disconnect();
        map.remove();
        mapInstanceRef.current = null;
      };
    } catch (err) {
      console.error('Error initializing Leaflet map:', err);
    }
  }, []);

  const createAdiraIcon = (isSelected: boolean) => {
    return L.divIcon({
      className: 'custom-adira-marker',
      html: `
        <div style="
          width: ${isSelected ? '32px' : '22px'};
          height: ${isSelected ? '32px' : '22px'};
          background: ${isSelected ? '#18181B' : '#FFCC00'};
          color: ${isSelected ? '#FFCC00' : '#18181B'};
          border: 2px solid ${isSelected ? '#FFCC00' : '#FFFFFF'};
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        ">
          <div style="
            transform: rotate(45deg);
            width: ${isSelected ? '10px' : '7px'};
            height: ${isSelected ? '10px' : '7px'};
            background: ${isSelected ? '#FFCC00' : '#18181B'};
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [isSelected ? 32 : 22, isSelected ? 32 : 22],
      iconAnchor: [isSelected ? 16 : 11, isSelected ? 32 : 22],
      popupAnchor: [0, isSelected ? -30 : -20],
    });
  };

  // 1. Build markers when filteredBranches changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();
    markersMapRef.current.clear();

    filteredBranches.forEach((branch) => {
      const isSelected = selectedBranch?.id === branch.id;
      const marker = L.marker([branch.coordinates.lat, branch.coordinates.lng], {
        icon: createAdiraIcon(isSelected),
      });

      const popupContent = `
        <div style="font-family: 'Inter', system-ui, sans-serif; padding: 10px 12px; min-width: 220px; max-width: 260px; color: #18181B;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 9px; font-weight: 800; color: #18181B; background: #FFCC00; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">
              Mitra AXI Resmi
            </span>
            <span style="font-size: 10px; color: #71717A; font-weight: 600;">${branch.city}</span>
          </div>

          <div style="font-size: 13px; font-weight: 800; color: #18181B; margin: 3px 0 2px 0; line-height: 1.3;">
            ${branch.name}
          </div>

          <div style="font-size: 11px; color: #52525B; line-height: 1.35; margin-bottom: 4px;">
            📍 ${branch.address}
          </div>

          <div style="font-size: 10px; color: #71717A; margin-bottom: 7px;">
            🕒 ${branch.hours}
          </div>

          <button 
            type="button"
            onclick="window.openBranchDetailPage && window.openBranchDetailPage('${branch.id}')"
            style="
              width: 100%;
              background: #FFCC00;
              color: #18181B;
              font-size: 11.5px;
              font-weight: 800;
              padding: 7px 10px;
              border-radius: 8px;
              border: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 5px;
              margin-bottom: 6px;
              box-shadow: 0 1px 2px rgba(0,0,0,0.08);
            "
          >
            Lihat Detail Cabang →
          </button>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
            <a href="https://wa.me/6285288157752?text=${encodeURIComponent(
              `Halo Admin ${branch.name} (${branch.city}), saya ingin menanyakan info dana BPKB di cabang ini. Terima kasih.`
            )}" target="_blank" rel="noopener noreferrer" style="
              background: #F4F4F5;
              color: #18181B;
              font-size: 10.5px;
              font-weight: 700;
              padding: 5px 6px;
              border-radius: 6px;
              text-decoration: none;
              text-align: center;
              display: block;
              border: 1px solid #E4E4E7;
            ">
              💬 Chat WA
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}" target="_blank" rel="noopener noreferrer" style="
              background: #18181B;
              color: #FFFFFF;
              font-size: 10.5px;
              font-weight: 700;
              padding: 5px 6px;
              border-radius: 6px;
              text-decoration: none;
              text-align: center;
              display: block;
            ">
              🧭 Rute Maps
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 280,
        minWidth: 220,
        autoPan: true,
        autoPanPadding: [15, 15],
      });

      marker.on('click', () => {
        setSelectedBranch(branch);
        if (map) {
          map.panTo([branch.coordinates.lat, branch.coordinates.lng], {
            animate: true,
            duration: 0.4,
          });
        }
      });

      marker.addTo(markersLayer);
      markersMapRef.current.set(branch.id, marker);
    });
  }, [filteredBranches]);

  // 2. Synchronize selected marker icon without clearing entire layers
  const prevSelectedBranchIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!selectedBranch) return;

    const markersMap = markersMapRef.current;
    
    // Reset previous selected marker icon
    if (prevSelectedBranchIdRef.current && prevSelectedBranchIdRef.current !== selectedBranch.id) {
      const prevMarker = markersMap.get(prevSelectedBranchIdRef.current);
      if (prevMarker) {
        prevMarker.setIcon(createAdiraIcon(false));
      }
    }

    // Set new selected marker icon
    const currentMarker = markersMap.get(selectedBranch.id);
    if (currentMarker) {
      currentMarker.setIcon(createAdiraIcon(true));
      currentMarker.openPopup();
    }

    prevSelectedBranchIdRef.current = selectedBranch.id;
  }, [selectedBranch]);

  // Handle select branch & fly map
  const handleSelectBranch = (branch: FullBranch) => {
    setSelectedBranch(branch);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([branch.coordinates.lat, branch.coordinates.lng], 14, {
        duration: 1,
      });
      const marker = markersMapRef.current.get(branch.id);
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 500);
      }
    }
  };

  // Reset map view to full Indonesia
  const handleResetMapView = () => {
    const map = mapInstanceRef.current;
    if (map) {
      map.invalidateSize();
      map.flyTo([-2.5489, 118.0149], 5, { duration: 1 });
    }
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSelectedProvince('Semua');

    const map = mapInstanceRef.current;
    if (!map) return;
    map.invalidateSize();

    if (region === 'Jawa') map.flyTo([-7.3, 110.0], 7, { duration: 1 });
    else if (region === 'Sumatera') map.flyTo([0.5, 101.5], 6, { duration: 1 });
    else if (region === 'Kalimantan') map.flyTo([-1.0, 114.0], 6, { duration: 1 });
    else if (region === 'Sulawesi') map.flyTo([-2.5, 121.0], 6, { duration: 1 });
    else if (region === 'Bali & Nusa Tenggara') map.flyTo([-8.6, 118.0], 7, { duration: 1 });
    else if (region === 'Maluku & Papua') map.flyTo([-3.5, 134.0], 6, { duration: 1 });
    else handleResetMapView();
  };

  const handleRefreshMap = () => {
    const map = mapInstanceRef.current;
    if (map) {
      map.invalidateSize();
    }
  };

  // If a branch is selected to view its dedicated full page
  if (activeBranchPage) {
    return (
      <CabangDetailView
        branch={activeBranchPage}
        onBack={() => {
          setActiveBranchPage(null);
          try {
            window.history.pushState(null, '', '#cabang');
          } catch (_) {}
        }}
        onSelectBranch={(b) => {
          setActiveBranchPage(b);
          setSelectedBranch(b);
          try {
            window.history.pushState(null, '', `#cabang-${b.id}`);
          } catch (_) {}
        }}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-5">
      
      {/* BENTO ROW 1: HEADER & STATS HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Item 1: Overview Card (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <AdiraLogo size="sm" variant="badge" />
              <span className="text-xs font-semibold text-stone-600 tracking-tight">
                Jaringan Kemitraan Resmi AXI Adira Finance
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight text-balance">
              Peta Lokasi & Detail 515 Cabang di Seluruh Indonesia
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              Cek titik lokasi peta, jam operasional, alamat kantor cabang, dan rute navigasi Google Maps untuk pencairan BPKB Motor (min. 2017), Mobil (min. 2010), Truk (min. 2019), dan Pickup (min. 2019).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-600 border-t border-stone-100">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>515 Cabang Aktif di 38 Provinsi</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-stone-900 shrink-0" />
              <span>Terdaftar & Diawasi OJK</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-emerald-700 font-bold">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Hotline & WA: 0852-8815-7752</span>
            </div>
          </div>
        </div>

        {/* Bento Item 2: Quick Highlights Stat Card (4 Cols) */}
        <div className="lg:col-span-4 bg-[#18181B] text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Cakupan Nasional
            </span>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>

          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white block">
              515
            </span>
            <span className="text-sm font-semibold text-stone-200 block">
              Kantor Cabang Aktif Terdata
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Tersedia peta interaktif OpenStreetMap nasional dan tampilan detail Google Maps untuk setiap kantor cabang.
            </p>
          </div>

          <div className="bg-stone-900/90 rounded-2xl p-3 border border-stone-800 text-xs text-stone-300 flex items-center justify-between">
            <span className="text-stone-400">Mode Peta:</span>
            <span className="font-semibold text-amber-300">OSM + Google Maps</span>
          </div>
        </div>

      </div>

      {/* BENTO ROW 2: SEARCH & FILTER TOOLBAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
          
          {/* Search box */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Cari nama cabang, kota, jalan, atau provinsi (mis: Surabaya, Fatmawati, Medan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-900 placeholder:text-stone-400 transition-all"
            />
          </div>

          {/* Province selector */}
          <div className="md:col-span-4">
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full py-3 px-4 text-xs sm:text-sm bg-[#FAF9F6] border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white text-stone-800 transition-all cursor-pointer"
            >
              <option value="Semua">Semua Provinsi ({provinces.length - 1} Provinsi)</option>
              {provinces.filter((p) => p !== 'Semua').map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>

          {/* Map reset and refresh actions */}
          <div className="md:col-span-2 flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetMapView}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold rounded-2xl transition-colors cursor-pointer"
              title="Reset Tampilan Peta Seluruh Indonesia"
            >
              <Compass className="w-4 h-4 text-stone-600" />
              <span>Nasional</span>
            </button>

            <button
              type="button"
              onClick={handleRefreshMap}
              className="p-3 bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-stone-700 rounded-2xl transition-colors cursor-pointer"
              title="Segarkan Ukuran Ubin Peta"
            >
              <RotateCw className="w-4 h-4 text-stone-600" />
            </button>
          </div>

        </div>

        {/* Region filter chips */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">
              Wilayah:
            </span>
            {regions.map((reg) => {
              const isSelected = selectedRegion === reg;
              const count = reg === 'Semua' 
                ? ALL_515_BRANCHES.length 
                : ALL_515_BRANCHES.filter((b) => b.region === reg).length;

              return (
                <button
                  key={reg}
                  type="button"
                  onClick={() => handleRegionChange(reg)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200/80 hover:bg-stone-100'
                  }`}
                >
                  <span>{reg}</span>
                  <span className={`ml-1 text-[11px] font-mono ${isSelected ? 'text-amber-300' : 'text-stone-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-stone-500 shrink-0 font-medium hidden sm:block">
            Menampilkan <strong>{filteredBranches.length}</strong> dari <strong>515</strong> cabang
          </div>
        </div>

      </div>

      {/* BENTO ROW 3: MAP VIEW (7 COLS) & BRANCH SPOTLIGHT + DIRECTORY (5 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Item 3: Main Map Container with OpenStreetMap & Google Maps detail switcher (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden flex flex-col">
          
          {/* Top Bar for Map: Provider Switcher (OSM vs Google Maps) */}
          <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 border-b border-stone-100 bg-[#FAF9F6] flex flex-row items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="font-bold text-stone-800 truncate text-[11px] sm:text-xs">
                {mapProvider === 'osm' ? 'Peta Cabang Nasional' : `Google Maps: ${selectedBranch.shortName}`}
              </span>
            </div>

            {/* View Switcher: OSM vs Google Maps Direct */}
            <div className="flex items-center gap-1 bg-stone-200/80 p-1 rounded-xl shrink-0">
              <button
                type="button"
                onClick={() => setMapProvider('osm')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer ${
                  mapProvider === 'osm'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Peta Nasional
              </button>
              <button
                type="button"
                onClick={() => setMapProvider('google')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer ${
                  mapProvider === 'google'
                    ? 'bg-[#18181B] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Google Maps
              </button>
            </div>
          </div>

          {/* Real Map Container */}
          <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] bg-stone-100 flex-1 overflow-hidden">
            
            {/* 1. Leaflet OSM Map */}
            <div 
              ref={mapContainerRef} 
              style={{ 
                minHeight: '460px', 
                height: '100%', 
                width: '100%',
                display: mapProvider === 'osm' ? 'block' : 'none' 
              }}
              className="w-full h-full z-10" 
            />

            {/* 2. Embedded Direct Google Maps View for Selected Branch */}
            {mapProvider === 'google' && selectedBranch && (
              <iframe
                title={`Google Maps - ${selectedBranch.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  selectedBranch.name + ' ' + selectedBranch.address
                )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="w-full h-full border-0 z-10"
                allowFullScreen
                loading="lazy"
              />
            )}

            {/* Floating Live Badge */}
            <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 bg-white/95 backdrop-blur-xs px-2.5 sm:px-3 py-1.5 rounded-xl border border-stone-200/90 shadow-xs text-[10px] sm:text-[11px] text-stone-800 font-medium flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{filteredBranches.length} Titik Cabang</span>
            </div>
          </div>

          {/* Bottom Bar Info */}
          <div className="p-3 sm:p-3.5 bg-white border-t border-stone-100 text-[11px] text-stone-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
            <span>
              {mapProvider === 'osm' 
                ? 'Klik pin oranye di peta untuk melihat ringkasan cabang dan rute navigasi.'
                : 'Peta detail Google Maps aktif untuk cabang ini.'}
            </span>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  selectedBranch.name + ' ' + selectedBranch.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={handleResetMapView}
                className="text-stone-900 font-semibold hover:underline cursor-pointer"
              >
                Reset Posisi
              </button>
            </div>
          </div>
        </div>

        {/* Bento Item 4: Right Column - Daftar 515 Kantor Cabang */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden flex flex-col h-[520px] sm:h-[600px] lg:h-auto">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-100 bg-[#FAF9F6] space-y-2.5 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight">
                  Daftar Kantor Cabang
                </h3>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-stone-700 bg-white px-2.5 py-1 rounded-lg border border-stone-200/80 shadow-2xs">
                {filteredBranches.length} Cabang Terdata
              </span>
            </div>

            {/* Selected Branch Indicator Banner with Direct Full Page CTA */}
            {selectedBranch && (
              <div className="p-2.5 sm:p-3 bg-amber-50/90 border border-amber-200/90 rounded-2xl flex items-center justify-between gap-2 text-xs">
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                    Cabang Terpilih di Peta:
                  </div>
                  <div className="font-extrabold text-stone-950 truncate text-xs sm:text-[13px]">
                    {selectedBranch.name}
                  </div>
                  <div className="text-[10px] text-stone-500 truncate">
                    {selectedBranch.city}, {selectedBranch.province}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveBranchPage(selectedBranch)}
                  className="px-3 py-1.5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-extrabold text-xs rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Lihat Detail →</span>
                </button>
              </div>
            )}
          </div>

          {/* Scrollable Branch List */}
          <div className="divide-y divide-stone-100 flex-1 overflow-y-auto p-2 sm:p-3 space-y-1">
            {filteredBranches.length === 0 ? (
              <div className="py-12 text-center text-stone-500 text-xs space-y-2">
                <p>Tidak ada cabang yang cocok dengan pencarian Anda.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRegion('Semua');
                    setSelectedProvince('Semua');
                  }}
                  className="text-stone-900 font-bold underline cursor-pointer"
                >
                  Reset Pencarian
                </button>
              </div>
            ) : (
              filteredBranches.map((branch) => {
                const isSelected = selectedBranch?.id === branch.id;
                return (
                  <div
                    key={branch.id}
                    onClick={() => handleSelectBranch(branch)}
                    className={`w-full text-left p-3 rounded-2xl transition-all flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50/90 border border-amber-300 shadow-xs'
                        : 'hover:bg-stone-50 border border-transparent'
                    }`}
                  >
                    <div className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-stone-900 text-amber-300' : 'bg-stone-100 text-stone-600'}`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <h4 className={`text-xs sm:text-[13px] font-bold truncate ${isSelected ? 'text-stone-950' : 'text-stone-900'}`}>
                          {branch.name}
                        </h4>
                        <span className="text-[10px] text-stone-500 shrink-0 font-semibold bg-stone-100 px-2 py-0.5 rounded-md">
                          {branch.city}
                        </span>
                      </div>

                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {branch.address}
                      </p>

                      <div className="flex items-center justify-between pt-1 text-[11px]">
                        <span className="text-[10px] text-stone-400">
                          🕒 {branch.hours}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveBranchPage(branch);
                              try {
                                window.history.pushState(null, '', `#cabang-${branch.id}`);
                              } catch (_) {}
                            }}
                            className="text-stone-950 font-extrabold bg-[#FFCC00] hover:bg-[#F5C400] px-2.5 py-1 rounded-lg text-[10.5px] shadow-2xs transition-colors cursor-pointer flex items-center gap-1"
                          >
                            <span>Lihat Detail</span>
                            <span className="text-stone-700">→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Info */}
          <div className="p-3 bg-[#FAF9F6] border-t border-stone-100 text-[11px] text-stone-500 text-center shrink-0">
            Menampilkan <strong>{filteredBranches.length}</strong> kantor cabang. Klik cabang untuk memusatkan peta.
          </div>

        </div>

      </div>

      {/* BENTO ROW 4: 3 COMPLEMENTARY BENEFIT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
            <Truck className="w-4 h-4 text-amber-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Layanan Jemput Berkas Gratis
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Surveyor resmi kami dapat langsung mengunjungi rumah atau kantor Anda di area 515 cabang untuk cek fisik kendaraan tanpa dipungut biaya.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-stone-100 text-stone-900 border border-stone-200 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-stone-900" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Tanda Terima Dokumen Legal
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Penyerahan BPKB asli disertai berita acara resmi berstempel lembaga pembiayaan terdaftar OJK dan disimpan di ruang arsip perbankan.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-2.5">
          <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-emerald-700" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-tight">
            Pencairan Langsung 1 Hari
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Setelah data dan fisik nomor rangka/mesin divalidasi, dana ditransfer utuh langsung ke rekening tabungan bank atas nama pemohon.
          </p>
        </div>

      </div>

    </div>
  );
};
