import React, { useState, useEffect } from 'react';
import { FullBranch, ALL_515_BRANCHES } from '../data/branchesData';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Car, 
  Calendar, 
  FileText, 
  Share2, 
  ChevronRight,
  PhoneCall,
  Info
} from 'lucide-react';
import { AdiraLogo } from './AdiraLogo';
import { openWhatsAppBranch } from '../utils/whatsapp';
import { updateBranchSeo } from '../utils/seo';

interface CabangDetailViewProps {
  branch: FullBranch;
  onBack: () => void;
  onSelectBranch: (branch: FullBranch) => void;
}

export const CabangDetailView: React.FC<CabangDetailViewProps> = ({
  branch,
  onBack,
  onSelectBranch
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    updateBranchSeo(branch);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [branch]);

  const handleCopyAddress = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(`${branch.name}, ${branch.address}, ${branch.city}, ${branch.province}`);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const handleShare = () => {
    if (navigator?.clipboard) {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Nearby branches in the same province or region (excluding current)
  const nearbyBranches = ALL_515_BRANCHES
    .filter(b => b.id !== branch.id && (b.province === branch.province || b.region === branch.region))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 animate-in fade-in duration-300">
      
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 border border-stone-200 text-xs font-bold transition-colors cursor-pointer shadow-2xs group w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Peta & Daftar Cabang</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-stone-500 overflow-x-auto whitespace-nowrap">
          <span>Beranda</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <button 
            type="button" 
            onClick={onBack}
            className="hover:text-stone-900 font-medium cursor-pointer"
          >
            Kantor Cabang
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="font-semibold text-stone-900 truncate max-w-[200px] sm:max-w-xs">
            {branch.city}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="text-amber-700 font-bold truncate max-w-[150px]">
            {branch.shortName}
          </span>
        </div>
      </div>

      {/* Main Header Hero Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-100/50 via-amber-50/20 to-transparent rounded-bl-full pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-stone-900 bg-[#FFCC00] px-3 py-1 rounded-lg">
                {branch.region}
              </span>
              <span className="text-xs text-stone-700 bg-stone-100 px-3 py-1 rounded-lg font-semibold border border-stone-200">
                {branch.province}
              </span>
              <span className="text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg font-bold border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Mitra AXI Adira Resmi Terdaftar OJK
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
              {branch.name}
            </h1>

            <div className="flex items-start sm:items-center gap-2 text-sm text-stone-600">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-relaxed">{branch.address}, {branch.city}, {branch.province}</span>
            </div>
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 min-w-[240px]">
            <button
              type="button"
              onClick={() => openWhatsAppBranch(branch.name, branch.city, '6285288157752')}
              className="w-full py-3.5 px-5 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950/20" />
              <span>Chat WhatsApp Cabang</span>
            </button>

            <a
              href="tel:085288157752"
              className="w-full py-3 px-5 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all text-center"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700" />
              <span>Hotline 0852-8815-7752</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Petunjuk Rute</span>
              </a>

              <button
                type="button"
                onClick={handleShare}
                className="py-2.5 px-3 bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                title="Salin tautan cabang ini"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Tersalin' : 'Bagikan'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout: Left Column (Description, Services, Vehicle Criteria, Process) & Right Column (Location, Map, Hours, Contacts) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Section 1: Comprehensive Description */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-950">
                  Deskripsi Lengkap Kantor Cabang {branch.shortName}
                </h2>
                <p className="text-xs text-stone-500">
                  Profil resmi, fungsi operasional, dan cakupan layanan pembiayaan
                </p>
              </div>
            </div>

            <div className="prose prose-stone text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4">
              <p>
                <strong>{branch.name}</strong> merupakan salah satu sentra layanan pembiayaan dan operasional resmi kemitraan <strong>AXI Adira Finance</strong> yang melayani nasabah di wilayah <strong>{branch.city}</strong>, Provinsi <strong>{branch.province}</strong>, dan sekitarnya. Kantor cabang ini hadir untuk memberikan solusi pembiayaan dana tunai cepat, aman, dan transparan melalui jaminan BPKB kendaraan bermotor dengan standar pengawasan langsung dari <strong>Otoritas Jasa Keuangan (OJK)</strong>.
              </p>

              <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-2">
                <div className="font-bold text-stone-950 text-xs sm:text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Komitmen Layanan di {branch.name}:</span>
                </div>
                <ul className="text-xs space-y-1.5 text-stone-800 list-disc list-inside">
                  <li><strong>Taksasi Tertinggi:</strong> Plafon pinjaman hingga 85% dari nilai pasar kendaraan Anda saat ini.</li>
                  <li><strong>Bunga Ringan & Kompetitif:</strong> Perhitungan angsuran flat/efektif bersahabat mulai dari 0,8% - 1,2% per bulan.</li>
                  <li><strong>Tenor Fleksibel:</strong> Jangka waktu angsuran mulai dari 12, 24, 36, 48, hingga 60 bulan sesuai kemampuan finansial.</li>
                  <li><strong>Kendaraan Tetap Digunakan:</strong> Anda hanya menjaminkan BPKB asli, sementara unit kendaraan fisik tetap dapat Anda pakai sehari-hari untuk operasional dan usaha.</li>
                </ul>
              </div>

              <p>
                Di cabang <strong>{branch.shortName}</strong>, seluruh proses administrasi dan verifikasi berkas dirancang tanpa birokrasi rumit. Didukung oleh tim surveyor lapangan berpengalaman, kami menyediakan fasilitas <strong>layanan jemput berkas (home visit) bebas biaya transportasi</strong> langsung ke domisili tempat tinggal atau tempat usaha Anda di seluruh penjuru {branch.city}. Tim surveyor kami juga siap melakukan gesek nomor rangka dan nomor mesin kendaraan di tempat secara gratis tanpa pungutan liar.
              </p>

              <p>
                Seluruh dokumen BPKB asli nasabah yang telah diserahterimakan akan disimpan dalam ruang khazanah brankas (safe vault) berstandar keamanan perbankan tinggi yang terlindung asuransi dan memiliki legalitas resmi. Ketika pelunasan dilakukan, BPKB dapat diambil kembali dengan cepat tanpa proses tertunda.
              </p>
            </div>

            {/* Service Area Highlights */}
            <div className="pt-3 border-t border-stone-100">
              <div className="flex items-start gap-2.5 text-xs text-stone-600 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
                <Building2 className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block mb-0.5">Cakupan Wilayah Layanan:</span>
                  <span>Melayani seluruh kecamatan, kelurahan, dan kawasan bisnis/residensial di {branch.city} dan kawasan penyangga sekitarnya di {branch.province}.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Kriteria Tahun Kendaraan */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-950">
                    Kriteria Kendaraan yang Diterima di Cabang Ini
                  </h3>
                  <p className="text-xs text-stone-500">
                    Standar penerimaan tahun kendaraan resmi OJK
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                Syarat Resmi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-4 rounded-2xl border border-stone-200 bg-[#FAF9F6] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">BPKB Motor</span>
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    Minimal 2017
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Honda, Yamaha, Suzuki, Kawasaki, Vespa (Semua tipe matic, bebek, dan sport).
                </p>
                <div className="text-[11px] text-stone-500 pt-1">
                  Tenor s.d 36 bulan · Plafon hingga Rp 35 Juta
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-[#FAF9F6] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">BPKB Mobil</span>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Minimal 2010
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Toyota, Daihatsu, Honda, Mitsubishi, Suzuki, Nissan, Hyundai, Wuling, dll.
                </p>
                <div className="text-[11px] text-stone-500 pt-1">
                  Tenor s.d 60 bulan · Plafon hingga Rp 500 Juta+
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-[#FAF9F6] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">BPKB Truk</span>
                  <span className="text-xs font-extrabold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                    Minimal 2019
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Mitsubishi Canter / Fuso, Hino Dutro / Ranger, Isuzu Giga / Elf.
                </p>
                <div className="text-[11px] text-stone-500 pt-1">
                  Tenor s.d 48 bulan · Plafon usaha ekspedisi & niaga
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-[#FAF9F6] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">BPKB Pickup</span>
                  <span className="text-xs font-extrabold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
                    Minimal 2019
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Daihatsu Gran Max, Suzuki Carry, Mitsubishi L300, Isuzu Traga.
                </p>
                <div className="text-[11px] text-stone-500 pt-1">
                  Tenor s.d 48 bulan · Plafon niaga & perdagangan
                </div>
              </div>

            </div>

            {/* Note on Taxes and Plate */}
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 border border-stone-200/70 flex items-center gap-2">
              <Info className="w-4 h-4 text-stone-400 shrink-0" />
              <span>
                Pajak kendaraan mati/telat atau plat daerah lain di luar {branch.city}? Kami siap membantu proses perpanjangan pajak dan balik nama langsung dipotong dari dana pencairan.
              </span>
            </div>
          </div>

          {/* Section 3: Layanan Unggulan & Alur Pengajuan */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-950">
                  Alur 4 Langkah Pengajuan di Cabang Ini
                </h3>
                <p className="text-xs text-stone-500">
                  Proses cepat, mudah, dan transparan
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-7 h-7 rounded-full bg-[#FFCC00] text-stone-950 font-black text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-stone-900">Konsultasi WhatsApp</div>
                  <div className="text-xs text-stone-600 leading-relaxed">
                    Kirim foto STNK & BPKB untuk mendapatkan estimasi nilai taksasi dan tabel angsuran bulanan.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-7 h-7 rounded-full bg-[#FFCC00] text-stone-950 font-black text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-stone-900">Cek Fisik & Berkas Gratis</div>
                  <div className="text-xs text-stone-600 leading-relaxed">
                    Surveyor cabang datang ke lokasi Anda untuk gesek nomor rangka dan validasi kelengkapan data.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-7 h-7 rounded-full bg-[#FFCC00] text-stone-950 font-black text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-stone-900">Persetujuan & Tanda Terima</div>
                  <div className="text-xs text-stone-600 leading-relaxed">
                    Penerbitan kontrak kredit resmi dan penyerahan BPKB dengan tanda terima bermaterai sah.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-stone-900">Pencairan Dana Langsung</div>
                  <div className="text-xs text-stone-600 leading-relaxed">
                    Dana tunai langsung ditransfer utuh ke rekening bank pemohon pada hari yang sama.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (5 cols: Address card, Google Maps Embed, Operating Hours, Contact Info, Nearby Branches) */}
        <div className="lg:col-span-5 space-y-6">

          {/* Location & Map Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-stone-950">Lokasi & Navigasi Peta</h3>
              </div>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="text-[11px] font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                title="Salin Alamat Lengkap"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAddress ? 'Tersalin' : 'Salin Alamat'}</span>
              </button>
            </div>

            <div className="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80 leading-relaxed">
              <strong className="block text-stone-950 mb-1">{branch.name}</strong>
              <p>{branch.address}</p>
              <p className="text-stone-500 mt-1">{branch.city}, {branch.province} - Wilayah {branch.region}</p>
            </div>

            {/* Embedded Google Maps View for this exact branch */}
            <div className="w-full h-56 rounded-2xl overflow-hidden border border-stone-200 relative shadow-inner">
              <iframe
                title={`Peta Lokasi ${branch.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}&hl=id&z=15&output=embed`}
              />
            </div>

            {/* Direct Google Maps External links */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ' ' + branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Petunjuk Rute</span>
              </a>
            </div>
          </div>

          {/* Operational Hours & Hotline Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="text-sm font-bold text-stone-950 pb-2 border-b border-stone-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-500" />
              <span>Jam Operasional & Kontak Cabang</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-500 font-medium">Jam Pelayanan Kantor:</span>
                <span className="font-bold text-stone-900">{branch.hours}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-500 font-medium">Konsultasi WA 24 Jam:</span>
                <span className="font-bold text-emerald-800">Senin - Minggu Aktif</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-stone-500 font-medium">Nomor Hotline Resmi:</span>
                <a href="tel:085288157752" className="font-extrabold text-stone-950 hover:underline">
                  0852-8815-7752
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-2xl border border-amber-200 space-y-2">
              <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Pengajuan Dana Cepat di Cabang Ini</span>
              </div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Ingin simulasi angsuran atau mengatur jadwal surveyor datang ke rumah? Hubungi langsung customer service AXI resmi kami sekarang.
              </p>
              <button
                type="button"
                onClick={() => openWhatsAppBranch(branch.name, branch.city, '6285288157752')}
                className="w-full py-2.5 px-4 bg-[#FFCC00] hover:bg-[#F5C400] text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Konsultasi Gratis via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Nearby Branches in the same Province/Region */}
          {nearbyBranches.length > 0 && (
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-stone-500" />
                  <h3 className="text-sm font-bold text-stone-950">
                    Cabang Lain di {branch.province}
                  </h3>
                </div>
                <span className="text-[10px] text-stone-400">Pilihan Terdekat</span>
              </div>

              <div className="space-y-2.5">
                {nearbyBranches.map((nb) => (
                  <button
                    key={nb.id}
                    type="button"
                    onClick={() => onSelectBranch(nb)}
                    className="w-full text-left p-3 rounded-2xl bg-stone-50 hover:bg-amber-50/70 border border-stone-200/70 hover:border-amber-300 transition-all flex items-start justify-between gap-3 cursor-pointer group"
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="text-xs font-bold text-stone-900 group-hover:text-amber-950 truncate">
                        {nb.name}
                      </div>
                      <div className="text-[11px] text-stone-500 truncate">
                        {nb.city} · {nb.address}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Bottom Back Button Banner */}
      <div className="p-6 bg-white rounded-3xl border border-stone-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AdiraLogo size="sm" variant="badge" />
          <div>
            <div className="text-xs font-bold text-stone-900">
              Butuh mencari lokasi kantor cabang di kota atau provinsi lain?
            </div>
            <div className="text-[11px] text-stone-500">
              Tersedia 515 kantor cabang kemitraan resmi AXI Adira di seluruh 38 provinsi Indonesia.
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="py-2.5 px-5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Peta & Daftar 515 Cabang</span>
        </button>
      </div>

    </div>
  );
};
