import { VehicleRequirement, Branch, Article } from '../types';

export const OFFICIAL_WHATSAPP = '6281289008899';
export const DISPLAY_PHONE = '0812-8900-8899';
export const OFFICE_ADDRESS = {
  headquarters: 'Gedung Menara AXI Lantai 5, Jl. Jend. Sudirman Kav. 52-53, Senayan, Kebayoran Baru, Jakarta Selatan 12190',
  operationalOffice: 'Sentra Pembiayaan Otomotif BPKB Mitra AXI, Ruko Mega Boulevard Blok C1 No. 8, Harapan Indah, Bekasi Barat 17131',
  workingHours: 'Senin - Sabtu: 08.30 - 17.00 WIB (Layanan WhatsApp 24 Jam)',
  email: 'layanan@danacepatbpkb.id'
};

export const VEHICLE_CRITERIA: Record<string, VehicleRequirement> = {
  motor: {
    type: 'motor',
    title: 'Gadai BPKB Motor',
    minYear: 2016,
    maxTenorMonths: 36,
    maxPlafondMillion: 50,
    interestRatePerMonth: 0.99,
    popularModels: ['Honda Vario, Beat, PCX, ADV', 'Yamaha NMAX, Aerox, Scoopy', 'Kawasaki Ninja, KLX', 'Vespa Primavera, Sprint'],
    description: 'Pencairan dana cepat untuk kendaraan roda dua segala merk Jepang dan Italia mulai tahun 2016 ke atas.'
  },
  mobil: {
    type: 'mobil',
    title: 'Gadai BPKB Mobil',
    minYear: 2010,
    maxTenorMonths: 60,
    maxPlafondMillion: 1500,
    interestRatePerMonth: 0.75,
    popularModels: ['Toyota Avanza, Innova, Fortuner', 'Honda Brio, HR-V, CR-V', 'Mitsubishi Pajero, Xpander', 'Daihatsu Xenia, Terios', 'Suzuki Ertiga, Baleno'],
    description: 'Solusi dana besar berjangka panjang untuk mobil penumpang (Sedan, MPV, SUV) minimal keluaran tahun 2010.'
  },
  truck: {
    type: 'truck',
    title: 'Gadai BPKB Truk',
    minYear: 2018,
    maxTenorMonths: 48,
    maxPlafondMillion: 800,
    interestRatePerMonth: 0.85,
    popularModels: ['Mitsubishi Colt Diesel (Canter), Fuso', 'Hino Dutro, Ranger', 'Isuzu Elf (NMR, GIGA)'],
    description: 'Dukungan likuiditas modal kerja dan ekspansi logistik armada truk roda 4 hingga roda 6 mulai tahun 2018.'
  },
  pickup: {
    type: 'pickup',
    title: 'Gadai BPKB Pickup',
    minYear: 2021,
    maxTenorMonths: 48,
    maxPlafondMillion: 150,
    interestRatePerMonth: 0.82,
    popularModels: ['Suzuki New Carry Pick Up', 'Daihatsu Gran Max PU', 'Mitsubishi L300 Euro 4', 'Isuzu Traga'],
    description: 'Pencairan modal usaha harian khusus armada niaga ringan pickup produktif dengan usia unit segar (minimal 2021).'
  }
};

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'br-1',
    name: 'Cabang Jakarta Selatan - Fatmawati',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    address: 'Jl. RS. Fatmawati Raya No. 45B, Cilandak, Jakarta Selatan',
    phone: '021-75912340',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.2954, lng: 106.7963 }
  },
  {
    id: 'br-2',
    name: 'Cabang Jakarta Timur - Rawamangun',
    city: 'Jakarta Timur',
    province: 'DKI Jakarta',
    address: 'Jl. Pemuda No. 72, Rawamangun, Pulo Gadung, Jakarta Timur',
    phone: '021-47863211',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.1952, lng: 106.8837 }
  },
  {
    id: 'br-3',
    name: 'Cabang Jakarta Barat - Puri Kencana',
    city: 'Jakarta Barat',
    province: 'DKI Jakarta',
    address: 'Komp. Rukan Puri Niaga II Blok J1 No. 3, Kembangan, Jakarta Barat',
    phone: '021-58301122',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.1873, lng: 106.7495 }
  },
  {
    id: 'br-4',
    name: 'Cabang Bekasi - Juanda',
    city: 'Bekasi',
    province: 'Jawa Barat',
    address: 'Jl. Ir. H. Juanda No. 182, Margahayu, Bekasi Timur, Kota Bekasi',
    phone: '021-88349012',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.2415, lng: 106.9924 }
  },
  {
    id: 'br-5',
    name: 'Cabang Tangerang - BSD Serpong',
    city: 'Tangerang Selatan',
    province: 'Banten',
    address: 'Ruko Tol Boulevard Blok B No. 12, Jl. Pahlawan Seribu, BSD City, Tangsel',
    phone: '021-5378899',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.3015, lng: 106.6698 }
  },
  {
    id: 'br-6',
    name: 'Cabang Bandung - Soekarno Hatta',
    city: 'Bandung',
    province: 'Jawa Barat',
    address: 'Jl. Soekarno-Hatta No. 471, Batununggal, Bandung',
    phone: '022-7319988',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.9427, lng: 107.6321 }
  },
  {
    id: 'br-7',
    name: 'Cabang Semarang - Simpang Lima',
    city: 'Semarang',
    province: 'Jawa Tengah',
    address: 'Jl. Pandanaran No. 88, Mugassari, Semarang Selatan',
    phone: '024-8412300',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -6.9897, lng: 110.4208 }
  },
  {
    id: 'br-8',
    name: 'Cabang Surabaya - Mayjen Sungkono',
    city: 'Surabaya',
    province: 'Jawa Timur',
    address: 'Jl. Mayjen Sungkono No. 102, Dukuh Pakis, Surabaya',
    phone: '031-5674321',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: -7.2912, lng: 112.7156 }
  },
  {
    id: 'br-9',
    name: 'Cabang Medan - Gatot Subroto',
    city: 'Medan',
    province: 'Sumatera Utara',
    address: 'Jl. Gatot Subroto KM 4.5 No. 120, Sei Sikambing D, Medan',
    phone: '061-4521098',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    coordinates: { lat: 3.5852, lng: 98.6504 }
  },
  {
    id: 'br-10',
    name: 'Cabang Makassar - Pettarani',
    city: 'Makassar',
    province: 'Sulawesi Selatan',
    address: 'Jl. A. P. Pettarani No. 56, Tamamaung, Panakkukang, Makassar',
    phone: '0411-456789',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WITA',
    coordinates: { lat: -5.1486, lng: 119.4328 }
  },
  {
    id: 'br-11',
    name: 'Cabang Denpasar - Sunset Road',
    city: 'Denpasar / Badung',
    province: 'Bali',
    address: 'Jl. Sunset Road No. 88X, Kuta, Badung, Bali',
    phone: '0361-765432',
    whatsapp: '6281289008899',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WITA',
    coordinates: { lat: -8.7052, lng: 115.1822 }
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Panduan Lengkap Syarat & Alur Gadai BPKB Agar Disetujui 1 Hari Kerja',
    category: 'Syarat & Proses',
    summary: 'Ketahui tips menyiapkan berkas seperti STNK, KTP, dan kelayakan tahun kendaraan agar dana pinjaman langsung cair ke rekening tanpa hambatan.',
    date: '12 Oktober 2026',
    readTime: '4 menit baca',
    content: [
      'Gadai BPKB kendaraan merupakan salah satu instrumen pinjaman dana tunai paling efisien ketika membutuhkan likuiditas cepat dengan nominal yang fleksibel.',
      'Kriteria tahun kendaraan adalah filter pertama yang wajib diperhatikan: Motor minimal keluaran 2016, Mobil minimal 2010, Truk minimal 2018, dan Pickup minimal 2021. Kendaraan di bawah tahun tersebut memerlukan peninjauan khusus kondisi fisik mesin.',
      'Kelengkapan berkas identitas (KTP pemohon & pasangan, Kartu Keluarga) serta bukti kepemilikan (STNK aktif, BPKB asli, dan faktur pembelian) menjamin validasi data selesai kurang dari 2 jam.',
      'Setelah survei fisik nomor rangka dan nomor mesin, perjanjian kredit ditandatangani dan dana langsung ditransfer utuh ke rekening bank Anda tanpa potongan liar.'
    ]
  },
  {
    id: 'art-2',
    title: 'Mengenal Take Over BPKB: Cara Pindah Pembiayaan dan Dapat Dana Tambahan',
    category: 'Take Over',
    summary: 'Masih punya cicilan di tempat lain tapi butuh dana segar atau ingin angsuran lebih enteng? Pahami alur pelunasan sisa pokok kredit lama Anda.',
    date: '28 September 2026',
    readTime: '5 menit baca',
    content: [
      'Take Over BPKB adalah mekanisme pembiayaan ulang (refinancing) di mana sisa pinjaman kendaraan Anda di leasing atau bank lama dilunasi oleh pihak pembiayaan baru, kemudian BPKB diambil dan diterbitkan kontrak baru.',
      'Keuntungan utama take over adalah Anda bisa mendapatkan sisa pencairan dana tunai (cashback) jika nilai taksasi kendaraan saat ini masih lebih tinggi daripada sisa utang pokok di tempat lama.',
      'Selain dana segar, Anda berkesempatan memperoleh suku bunga yang lebih rendah dan jangka waktu (tenor) cicilan yang dapat diatur ulang agar sesuai dengan kapasitas arus kas bulanan Anda saat ini.',
      'Tim kami membantu pengurusan administrasi penarikan BPKB di leasing lama, sehingga Anda tidak perlu repot mengantri atau mengurus surat kuasa rumit.'
    ]
  },
  {
    id: 'art-3',
    title: 'Top Up Pinjaman BPKB: Solusi Tambahan Modal untuk Nasabah Aktif',
    category: 'Edukasi Finansial',
    summary: 'Pelajari rumus perhitungan sisa pokok hutang dan batas maksimal plafon baru yang bisa Anda cairkan kembali saat pinjaman berjalan lancar.',
    date: '15 September 2026',
    readTime: '3 menit baca',
    content: [
      'Bagi nasabah yang telah menjalani pembayaran angsuran minimal 6 hingga 12 bulan dengan catatan historis pembayaran tepat waktu, fasilitas Top Up Pinjaman menawarkan kemudahan ekstra tanpa perlu survei ulang yang melelahkan.',
      'Perhitungan Top Up didasarkan pada selisih antara nilai taksasi kendaraan terkini dengan sisa pokok hutang pinjaman sebelumnya.',
      'Contoh: Nilai taksasi mobil saat ini memungkinkan plafon Rp 150.000.000, sedangkan sisa pokok pinjaman berjalan tinggal Rp 50.000.000. Maka nasabah dapat mencairkan dana bersih hingga Rp 100.000.000.',
      'Proses pencairan top up umumnya berlangsung lebih kilat (kurang dari 24 jam) karena berkas legalitas BPKB sudah tersimpan aman di sistem.'
    ]
  },
  {
    id: 'art-4',
    title: 'Perbedaan Suku Bunga Flat dan Efektif pada Pinjaman Jaminan BPKB',
    category: 'Edukasi Finansial',
    summary: 'Jangan salah hitung! Pahami cara membaca penawaran bunga angsuran agar Anda dapat merencanakan keuangan keluarga atau modal bisnis dengan bijak.',
    date: '02 September 2026',
    readTime: '4 menit baca',
    content: [
      'Dalam transaksi pembiayaan multiguna, terdapat dua metode perhitungan bunga yang lazim digunakan: Flat (bunga tetap) dan Efektif / Anuitas.',
      'Bunga flat menghitung porsi bunga berdasarkan total pinjaman awal dari bulan pertama hingga lunas, menghasilkan nilai cicilan yang sama persis setiap bulan.',
      'Bunga efektif menghitung porsi bunga berdasarkan sisa pokok hutang setiap bulannya, sehingga porsi pembayaran bunga mengecil seiring berjalannya waktu.',
      'Melalui transparansi simulasi resmi AXI Adira, nasabah selalu menerima tabel angsuran detail sebelum persetujuan kontrak, bebas dari biaya tersembunyi.'
    ]
  }
];

export const PROFILE_REQUIREMENTS = [
  {
    category: 'Karyawan (Swasta / BUMN / PNS)',
    description: 'Untuk pegawai tetap atau kontrak yang memiliki penghasilan rutin bulanan.',
    documents: [
      'KTP Asli Pemohon & Pasangan (jika menikah)',
      'Kartu Keluarga (KK)',
      'Bukti Tempat Tinggal (PBB / Rekening Listrik / Air)',
      'Slip Gaji 3 Bulan Terakhir atau Surat Keterangan Penghasilan',
      'Rekening Koran / Tabungan 3 Bulan Terakhir',
      'STNK Asli & BPKB Asli beserta Faktur Kendaraan'
    ]
  },
  {
    category: 'Wiraswasta / Pelaku Usaha (UMKM & Bisnis)',
    description: 'Untuk pemilik usaha dagang, jasa, manufaktur, atau online shop yang membutuhkan modal kerja.',
    documents: [
      'KTP Asli Pemohon & Pasangan',
      'Kartu Keluarga (KK)',
      'Surat Keterangan Usaha (SKU) dari Kelurahan atau NIB / SIUP',
      'Rekening Koran Mutasi Usaha 3-6 Bulan Terakhir',
      'Bukti Kepemilikan Tempat Tinggal / Usaha (PBB / Sertifikat)',
      'STNK Asli & BPKB Asli Kendaraan'
    ]
  },
  {
    category: 'Profesional (Dokter, Notaris, Konsultan, dsb)',
    description: 'Untuk tenaga ahli dan praktisi mandiri dengan izin praktik resmi.',
    documents: [
      'KTP Asli & Kartu Keluarga (KK)',
      'Surat Izin Praktik (SIP) yang masih berlaku',
      'Rekening Koran 3 Bulan Terakhir',
      'NPWP Pribadi',
      'STNK Asli & BPKB Asli Kendaraan'
    ]
  }
];
