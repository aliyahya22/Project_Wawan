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
  Sparkles
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { updateBranchSeo } from '../utils/seo';

export const CabangView: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<FullBranch>(ALL_515_BRANCHES[0]);

  useEffect(() => {
    if (selectedBranch) {
      updateBranchSeo(selectedBranch);
    }
  }, [selectedBranch]);

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

  // Initialize Leaflet Map with ONLY OpenStreetMap (OSM) Standard
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Safety: If container already has a leaflet instance, clear it
    if ((mapContainerRef.current as any)._leaflet_id) {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      } else {
        (mapContainerRef.current as any)._leaflet_id = null;
      }
    }

    try {
      // Create Leaflet Map centered on Indonesian Archipelago
      const map = L.map(mapContainerRef.current, {
        center: [-2.5489, 118.0149],
        zoom: 5,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: true,
        attributionControl: true,
      });

      // Pure OpenStreetMap (OSM) Standard Tile Layer - 100% Free, NO API KEY
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const markersLayer = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
      markersLayerRef.current = markersLayer;

      // Force size invalidation in multiple intervals so OSM tiles render immediately
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

  // Update Markers when filteredBranches or selection changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();
    markersMapRef.current.clear();

    // Create custom Adira Pin Icons
    const createAdiraIcon = (isSelected: boolean) => {
      return L.divIcon({
        className: 'custom-adira-marker',
        html: `
          <div style="
            width: ${isSelected ? '28px' : '20px'};
            height: ${isSelected ? '28px' : '20px'};
            background: ${isSelected ? '#18181B' : '#FFCC00'};
            color: ${isSelected ? '#FFCC00' : '#18181B'};
            border: 2px solid ${isSelected ? '#FFCC00' : '#FFFFFF'};
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 2px 6px rgba(0,0,0,0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
          ">
            <div style="
              transform: rotate(45deg);
              width: ${isSelected ? '8px' : '6px'};
              height: ${isSelected ? '8px' : '6px'};
              background: ${isSelected ? '#FFCC00' : '#18181B'};
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [isSelected ? 28 : 20, isSelected ? 28 : 20],
        iconAnchor: [isSelected ? 14 : 10, isSelected ? 28 : 20],
        popupAnchor: [0, isSelected ? -26 : -18],
      });
    };

    filteredBranches.forEach((branch) => {
      const isSelected = selectedBranch?.id === branch.id;
      const marker = L.marker([branch.coordinates.lat, branch.coordinates.lng], {
        icon: createAdiraIcon(isSelected),
        title: branch.name,
      });

      const popupContent = `
        <div style="font-family: 'Inter', sans-serif; padding: 4px; max-width: 240px;">
          <div style="font-size: 10px; font-weight: 700; color: #71717A; text-transform: uppercase;">
            ${branch.province}
          </div>
          <div style="font-size: 13px; font-weight: 800; color: #18181B; margin: 2px 0 4px 0;">
            ${branch.name}
          </div>
          <div style="font-size: 11px; color: #52525B; line-height: 1.4; margin-bottom: 8px;">
            ${branch.address}
          </div>
          <div style="font-size: 10px; color: #71717A; margin-bottom: 8px;">
            Telp: ${branch.phone}
          </div>
          <a href="https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(
            `Halo Admin ${branch.name}, saya ingin konsultasi pengajuan BPKB.`
          )}" target="_blank" rel="noopener noreferrer" style="
            display: inline-block;
            background: #18181B;
            color: #FFCC00;
            font-size: 11px;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 8px;
            text-decoration: none;
            width: 100%;
            text-align: center;
          ">
            Chat WhatsApp
          </a>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        setSelectedBranch(branch);
      });

      marker.addTo(markersLayer);
      markersMapRef.current.set(branch.id, marker);
    });
  }, [filteredBranches, selectedBranch]);

  // Handle select branch & fly map
  const handleSelectBranch = (branch: FullBranch) => {
    setSelectedBranch(branch);
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([branch.coordinates.lat, branch.coordinates.lng], 14, {
        duration: 1.2,
      });
      const marker = markersMapRef.current.get(branch.id);
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 600);
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

  // Region click handler (adjusts view bounds)
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
              Peta Lokasi 515 Cabang & Sentra Layanan di Seluruh Indonesia
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              Temukan kantor cabang operasional mitra AXI terdekat untuk verifikasi dan pencairan dana tunai jaminan BPKB Motor (min. 2016), Mobil (min. 2010), Truk (min. 2018), dan Pickup (min. 2021). Didukung layanan jemput berkas gratis ke alamat Anda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-600 border-t border-stone-100">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>38 Provinsi Terjangkau</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-stone-900 shrink-0" />
              <span>Terdaftar & Diawasi OJK</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Layanan Buka Senin - Sabtu</span>
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
              Kantor Cabang Aktif
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Dari Sabang sampai Merauke, siap melayani cek fisik kendaraan dan tanda terima legal.
            </p>
          </div>

          <div className="bg-stone-900/90 rounded-2xl p-3.5 border border-stone-800 text-xs text-stone-300 flex items-center justify-between">
            <span className="text-stone-400">Teknologi Peta:</span>
            <span className="font-semibold text-amber-300">OpenStreetMap Standard</span>
          </div>
        </div>

      </div>

      {/* BENTO ROW 2: SEARCH & FILTER TOOLBAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs space-y-4">
        
        {/* Search input + Province dropdown + Reset button */}
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

        {/* Region filter chips (minimalist modern) */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
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

      {/* BENTO ROW 3: MAP (7 COLS) & BRANCH SPOTLIGHT + DIRECTORY (5 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Bento Item 3: Main OpenStreetMap Standard Leaflet Map (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden flex flex-col">
          
          {/* Top Bar for Map */}
          <div className="px-5 py-3.5 border-b border-stone-100 bg-[#FAF9F6] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-700 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>OpenStreetMap Standard (OSM)</span>
            </div>
            <div className="text-[11px] text-stone-500">
              100% Bebas Biaya · Tanpa API Key
            </div>
          </div>

          {/* Real Leaflet Map Container */}
          <div className="relative w-full h-[480px] sm:h-[540px] bg-stone-100 flex-1">
            <div 
              ref={mapContainerRef} 
              style={{ minHeight: '480px', height: '100%', width: '100%' }}
              className="w-full h-full z-10" 
            />

            {/* Floating Live Badge */}
            <div className="absolute top-3.5 right-3.5 z-20 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-stone-200/90 shadow-xs text-[11px] text-stone-800 font-medium flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{filteredBranches.length} Titik Pin Tersebar</span>
            </div>
          </div>

          {/* Bottom Bar Info */}
          <div className="p-3.5 bg-white border-t border-stone-100 text-[11px] text-stone-500 flex items-center justify-between">
            <span>Gunakan tombol zoom (+ / -) atau geser peta untuk menelusuri lokasi.</span>
            <button
              type="button"
              onClick={handleResetMapView}
              className="text-stone-900 font-semibold hover:underline"
            >
              Reset Posisi
            </button>
          </div>
        </div>

        {/* Bento Item 4: Right Column (Selected Branch Spotlight & Scrollable Directory) (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          {/* Bento Subcard 4A: Selected Branch Spotlight */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                    Cabang Terpilih
                  </span>
                  <span className="text-[10px] bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md font-semibold border border-amber-200">
                    {selectedBranch.region}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                  {selectedBranch.name}
                </h3>
                <p className="text-xs text-stone-500">{selectedBranch.province}</p>
              </div>

              <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold shrink-0">
                Operasional Aktif
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{selectedBranch.address}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-stone-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{selectedBranch.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>Telp: {selectedBranch.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => openWhatsAppBranch(selectedBranch.name, selectedBranch.city)}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
                <span>Chat WhatsApp</span>
              </button>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Rute</span>
              </a>
            </div>
          </div>

          {/* Bento Subcard 4B: Scrollable Directory List */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-stone-500" />
                <span className="text-xs font-bold text-stone-900">
                  Daftar Cabang ({filteredBranches.length})
                </span>
              </div>
              <span className="text-[11px] text-stone-400">
                Klik untuk lihat di peta
              </span>
            </div>

            {/* List */}
            <div className="divide-y divide-stone-100 max-h-[300px] overflow-y-auto pr-1">
              {filteredBranches.length === 0 ? (
                <div className="py-8 text-center text-stone-500 text-xs space-y-2">
                  <p>Tidak ada cabang yang cocok dengan kata kunci Anda.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedRegion('Semua');
                      setSelectedProvince('Semua');
                    }}
                    className="text-stone-900 font-semibold underline"
                  >
                    Reset Pencarian
                  </button>
                </div>
              ) : (
                filteredBranches.slice(0, 100).map((branch) => {
                  const isSelected = selectedBranch?.id === branch.id;
                  return (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => handleSelectBranch(branch)}
                      className={`w-full text-left p-3 my-1 rounded-xl transition-all flex items-start gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50/80 border border-amber-300'
                          : 'hover:bg-stone-50 border border-transparent'
                      }`}
                    >
                      <div className={`mt-0.5 p-1 rounded-md shrink-0 ${isSelected ? 'bg-stone-900 text-amber-300' : 'bg-stone-100 text-stone-600'}`}>
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5">
                          <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-stone-950' : 'text-stone-900'}`}>
                            {branch.name}
                          </h4>
                          <span className="text-[10px] text-stone-500 shrink-0 font-medium">
                            {branch.city}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 truncate mt-0.5">
                          {branch.address}
                        </p>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            <div className="pt-3 border-t border-stone-100 text-[10px] text-stone-400 text-center">
              Menampilkan {Math.min(filteredBranches.length, 100)} entri teratas.
            </div>
          </div>

        </div>

      </div>

      {/* BENTO ROW 4: 3 COMPLEMENTARY MODERN BENEFIT CARDS */}
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
