import { FullBranch } from '../data/branchesData';
import { ActivePage } from '../types';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export const PAGE_SEO_MAP: Record<ActivePage, SeoConfig> = {
  beranda: {
    title: 'Dana Cepat BPKB Adira - Pinjaman Jaminan BPKB Motor & Mobil Resmi AXI',
    description: 'Solusi pencairan dana tunai cepat jaminan BPKB Motor (min. 2017), Mobil (min. 2010), Truk & Pickup. Hotline WhatsApp resmi 0852-8815-7752 di 515 cabang se-Indonesia.',
    canonicalUrl: 'https://danacepatbpkb.id/',
    keywords: 'dana cepat bpkb, gadai bpkb motor, gadai bpkb mobil, pinjaman bpkb adira, mitra axi adira, dana tunai bpkb',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' }
    ]
  },
  'dana-tunai': {
    title: 'Pinjaman Dana Tunai Jaminan BPKB Motor & Mobil - Plafon Hingga 90% Taksiran',
    description: 'Ajukan pinjaman dana tunai jaminan BPKB Motor & Mobil dengan suku bunga kompetitif, proses persetujuan cepat 1 hari, dan kendaraan tetap Anda gunakan.',
    canonicalUrl: 'https://danacepatbpkb.id/#dana-tunai',
    keywords: 'pinjaman dana tunai, gadai bpkb mobil, gadai bpkb motor, pencairan cepat bpkb, syarat gadai bpkb adira',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
      { name: 'Dana Tunai BPKB', url: 'https://danacepatbpkb.id/#dana-tunai' }
    ]
  },
  'take-over': {
    title: 'Take Over BPKB Mobil & Motor Resmi - Pindah Kredit Leasing Bunga Lebih Ringan',
    description: 'Layanan take over kredit BPKB dari leasing atau bank lain. Dapatkan pelunasan sisa pokok kredit, cicilan lebih ringan, dan tambahan dana segar.',
    canonicalUrl: 'https://danacepatbpkb.id/#take-over',
    keywords: 'take over bpkb, take over kredit mobil, take over bpkb motor, pindah leasing adira, dana tambahan take over',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
      { name: 'Take Over BPKB', url: 'https://danacepatbpkb.id/#take-over' }
    ]
  },
  topup: {
    title: 'Top Up Pinjaman BPKB Adira - Tambah Plafon Kredit Angsuran Lancar',
    description: 'Nikmati fasilitas top up dana pinjaman bagi nasabah aktif dengan riwayat angsuran lancar. Tanpa survei ulang yang rumit, dana langsung cair ke rekening.',
    canonicalUrl: 'https://danacepatbpkb.id/#topup',
    keywords: 'top up pinjaman bpkb, tambah dana pinjaman adira, topup kredit bpkb, pinjaman nasabah adira',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
      { name: 'Top Up Pinjaman', url: 'https://danacepatbpkb.id/#topup' }
    ]
  },
  cabang: {
    title: '515 Lokasi Kantor Cabang Adira Finance Terdekat - Seluruh Wilayah Indonesia',
    description: 'Temukan alamat, nomor telepon, jam operasional, dan kontak WhatsApp resmi 515 kantor cabang Mitra AXI Adira Finance di kota dan kabupaten seluruh Indonesia.',
    canonicalUrl: 'https://danacepatbpkb.id/#cabang',
    keywords: 'kantor cabang adira finance, alamat adira terdekat, nomor telepon adira, cabang adira jakarta surabaya bandung medan',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
      { name: 'Peta & Lokasi Cabang', url: 'https://danacepatbpkb.id/#cabang' }
    ]
  },
  artikel: {
    title: 'Artikel & Panduan Finansial Gadai BPKB - Tips Cerdas Keuangan & Kredit Aman',
    description: 'Kumpulan tips, panduan hukum, syarat administrasi, dan simulasi kredit gadai BPKB motor, mobil, dan take over resmi dari pakar kemitraan AXI.',
    canonicalUrl: 'https://danacepatbpkb.id/#artikel',
    keywords: 'tips gadai bpkb, syarat gadai bpkb, simulasi pinjaman bpkb, panduan kredit mobil, artikel keuangan adira',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
      { name: 'Artikel & Panduan', url: 'https://danacepatbpkb.id/#artikel' }
    ]
  },
  'tentang-kami': {
    title: 'Tentang Kami - Kemitraan Resmi AXI Adira Dinamika Multi Finance Tbk',
    description: 'Profil resmi kemitraan Agen AXI Adira Finance terpercaya. Layanan terdaftar dan diawasi oleh OJK, berkomitmen memberikan solusi finansial transparan dan cepat.',
    canonicalUrl: 'https://danacepatbpkb.id/#tentang-kami',
    keywords: 'tentang axi adira, mitra resmi adira finance, agen adira bpkb terpercaya, legalitas ojk adira',
    breadcrumbs: [
      { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
      { name: 'Tentang Kami', url: 'https://danacepatbpkb.id/#tentang-kami' }
    ]
  }
};

export function updatePageSeo(title: string, description: string, canonicalUrl?: string, breadcrumbs?: { name: string; url: string }[]) {
  if (typeof document === 'undefined') return;

  // Title
  document.title = title;

  // Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }

  // OpenGraph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description);
  }

  // Twitter
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) {
    twTitle.setAttribute('content', title);
  }

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) {
    twDesc.setAttribute('content', description);
  }

  // Canonical
  if (canonicalUrl) {
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);
  }

  // Breadcrumbs Schema.org update
  if (breadcrumbs && breadcrumbs.length > 0) {
    let scriptTag = document.getElementById('dynamic-breadcrumb-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-breadcrumb-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };

    scriptTag.textContent = JSON.stringify(breadcrumbLd);
  }
}

export function updateRouteSeo(page: ActivePage) {
  const config = PAGE_SEO_MAP[page] || PAGE_SEO_MAP.beranda;
  updatePageSeo(config.title, config.description, config.canonicalUrl, config.breadcrumbs);

  // Sync hash state for crawler / bookmarking if on root pages (except beranda default)
  if (typeof window !== 'undefined') {
    const targetHash = page === 'beranda' ? '' : `#${page}`;
    if (window.location.hash !== targetHash && !window.location.hash.startsWith('#cabang/')) {
      window.history.replaceState(null, '', targetHash || window.location.pathname);
    }
  }
}

export function updateBranchSeo(branch: FullBranch) {
  const title = `Kantor Cabang ${branch.name} (${branch.city}) · Dana Cepat BPKB Adira`;
  const description = `Alamat kantor cabang ${branch.name} di ${branch.city}, ${branch.province}. Layanan gadai BPKB motor, mobil, truk, dan pickup resmi Mitra AXI Adira Finance. Jam buka: ${branch.hours}. Hubungi WhatsApp: ${branch.whatsapp}.`;
  
  const slug = branch.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const branchUrl = `https://danacepatbpkb.id/#cabang/${branch.city.toLowerCase()}/${slug}`;
  
  const breadcrumbs = [
    { name: 'Beranda', url: 'https://danacepatbpkb.id/' },
    { name: 'Peta & Lokasi Cabang', url: 'https://danacepatbpkb.id/#cabang' },
    { name: `${branch.city}`, url: `https://danacepatbpkb.id/#cabang/${branch.city.toLowerCase()}` },
    { name: branch.name, url: branchUrl }
  ];

  updatePageSeo(title, description, branchUrl, breadcrumbs);

  // Inject Branch LocalBusiness Schema.org into head
  if (typeof document !== 'undefined') {
    let branchSchema = document.getElementById('branch-local-schema') as HTMLScriptElement | null;
    if (!branchSchema) {
      branchSchema = document.createElement('script');
      branchSchema.id = 'branch-local-schema';
      branchSchema.type = 'application/ld+json';
      document.head.appendChild(branchSchema);
    }

    const branchLd = {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      name: branch.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: branch.address,
        addressLocality: branch.city,
        addressRegion: branch.province,
        addressCountry: 'ID'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: branch.coordinates.lat,
        longitude: branch.coordinates.lng
      },
      telephone: branch.phone,
      openingHours: branch.hours,
      url: branchUrl
    };

    branchSchema.textContent = JSON.stringify(branchLd);
  }

  // Update hash for deep linking and local SEO
  if (typeof window !== 'undefined') {
    window.history.replaceState(null, '', `#cabang/${branch.city.toLowerCase()}/${slug}`);
  }
}
