// Total 515 Nationwide Branches across all 38 provinces in Indonesia
export interface FullBranch {
  id: string;
  name: string;
  shortName: string;
  city: string;
  province: string;
  region: 'Jawa' | 'Sumatera' | 'Kalimantan' | 'Sulawesi' | 'Bali & Nusa Tenggara' | 'Maluku & Papua';
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const ALL_515_BRANCHES: FullBranch[] = [
  {
    "id": "br-1",
    "name": "Adira AXI Cabang Jakarta Selatan - Fatmawati",
    "shortName": "Jakarta Selatan (Fatmawati)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 21, Fatmawati, Jakarta Selatan",
    "phone": "021-290916",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2615,
      "lng": 106.8256
    }
  },
  {
    "id": "br-2",
    "name": "Adira AXI Cabang Jakarta Selatan - Pondok Indah",
    "shortName": "Jakarta Selatan (Pondok Indah)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 32, Pondok Indah, Jakarta Selatan",
    "phone": "021-883136",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.24653,
      "lng": 106.81019
    }
  },
  {
    "id": "br-3",
    "name": "Adira AXI Cabang Jakarta Selatan - Blok M",
    "shortName": "Jakarta Selatan (Blok M)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 43, Blok M, Jakarta Selatan",
    "phone": "021-906832",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.25381,
      "lng": 106.80315
    }
  },
  {
    "id": "br-4",
    "name": "Adira AXI Cabang Jakarta Selatan - Tebet",
    "shortName": "Jakarta Selatan (Tebet)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 54, Tebet, Jakarta Selatan",
    "phone": "021-454789",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.26423,
      "lng": 106.82912
    }
  },
  {
    "id": "br-5",
    "name": "Adira AXI Cabang Jakarta Selatan - Mampang",
    "shortName": "Jakarta Selatan (Mampang)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 65, Mampang, Jakarta Selatan",
    "phone": "021-596562",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.25285,
      "lng": 106.83173
    }
  },
  {
    "id": "br-6",
    "name": "Adira AXI Cabang Jakarta Selatan - Pasar Minggu",
    "shortName": "Jakarta Selatan (Pasar Minggu)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 76, Pasar Minggu, Jakarta Selatan",
    "phone": "021-185797",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.23524,
      "lng": 106.81193
    }
  },
  {
    "id": "br-7",
    "name": "Adira AXI Cabang Jakarta Selatan - Cilandak",
    "shortName": "Jakarta Selatan (Cilandak)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 87, Cilandak, Jakarta Selatan",
    "phone": "021-778438",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.23855,
      "lng": 106.82569
    }
  },
  {
    "id": "br-8",
    "name": "Adira AXI Cabang Jakarta Selatan - Jagakarsa",
    "shortName": "Jakarta Selatan (Jagakarsa)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 98, Jagakarsa, Jakarta Selatan",
    "phone": "021-130795",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.25106,
      "lng": 106.84659
    }
  },
  {
    "id": "br-9",
    "name": "Adira AXI Cabang Jakarta Selatan - Kebayoran",
    "shortName": "Jakarta Selatan (Kebayoran)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 109, Kebayoran, Jakarta Selatan",
    "phone": "021-832279",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.24394,
      "lng": 106.8307
    }
  },
  {
    "id": "br-10",
    "name": "Adira AXI Cabang Jakarta Selatan - Pancoran",
    "shortName": "Jakarta Selatan (Pancoran)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 120, Pancoran, Jakarta Selatan",
    "phone": "021-698429",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.22485,
      "lng": 106.82438
    }
  },
  {
    "id": "br-11",
    "name": "Adira AXI Cabang Jakarta Selatan - Pesanggrahan",
    "shortName": "Jakarta Selatan (Pesanggrahan)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 131, Pesanggrahan, Jakarta Selatan",
    "phone": "021-158703",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2237,
      "lng": 106.8505
    }
  },
  {
    "id": "br-12",
    "name": "Adira AXI Cabang Jakarta Selatan - Kemang",
    "shortName": "Jakarta Selatan (Kemang)",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 142, Kemang, Jakarta Selatan",
    "phone": "021-294916",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.23704,
      "lng": 106.85232
    }
  },
  {
    "id": "br-13",
    "name": "Adira AXI Cabang Jakarta Timur - Rawamangun",
    "shortName": "Jakarta Timur (Rawamangun)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 153, Rawamangun, Jakarta Timur",
    "phone": "021-393073",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.225,
      "lng": 106.9154
    }
  },
  {
    "id": "br-14",
    "name": "Adira AXI Cabang Jakarta Timur - Duren Sawit",
    "shortName": "Jakarta Timur (Duren Sawit)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 14, Duren Sawit, Jakarta Timur",
    "phone": "021-982683",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21003,
      "lng": 106.89999
    }
  },
  {
    "id": "br-15",
    "name": "Adira AXI Cabang Jakarta Timur - Cakung",
    "shortName": "Jakarta Timur (Cakung)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 25, Cakung, Jakarta Timur",
    "phone": "021-742502",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21731,
      "lng": 106.89295
    }
  },
  {
    "id": "br-16",
    "name": "Adira AXI Cabang Jakarta Timur - Jatinegara",
    "shortName": "Jakarta Timur (Jatinegara)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 36, Jatinegara, Jakarta Timur",
    "phone": "021-783122",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.22773,
      "lng": 106.91892
    }
  },
  {
    "id": "br-17",
    "name": "Adira AXI Cabang Jakarta Timur - Kramat Jati",
    "shortName": "Jakarta Timur (Kramat Jati)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 47, Kramat Jati, Jakarta Timur",
    "phone": "021-256784",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21635,
      "lng": 106.92153
    }
  },
  {
    "id": "br-18",
    "name": "Adira AXI Cabang Jakarta Timur - Pasar Rebo",
    "shortName": "Jakarta Timur (Pasar Rebo)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 58, Pasar Rebo, Jakarta Timur",
    "phone": "021-155819",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19874,
      "lng": 106.90173
    }
  },
  {
    "id": "br-19",
    "name": "Adira AXI Cabang Jakarta Timur - Ciracas",
    "shortName": "Jakarta Timur (Ciracas)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 69, Ciracas, Jakarta Timur",
    "phone": "021-758041",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.20205,
      "lng": 106.91549
    }
  },
  {
    "id": "br-20",
    "name": "Adira AXI Cabang Jakarta Timur - Cipayung",
    "shortName": "Jakarta Timur (Cipayung)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 80, Cipayung, Jakarta Timur",
    "phone": "021-658367",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21456,
      "lng": 106.93639
    }
  },
  {
    "id": "br-21",
    "name": "Adira AXI Cabang Jakarta Timur - Pulo Gadung",
    "shortName": "Jakarta Timur (Pulo Gadung)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 91, Pulo Gadung, Jakarta Timur",
    "phone": "021-500260",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.20744,
      "lng": 106.9205
    }
  },
  {
    "id": "br-22",
    "name": "Adira AXI Cabang Jakarta Timur - Matraman",
    "shortName": "Jakarta Timur (Matraman)",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 102, Matraman, Jakarta Timur",
    "phone": "021-880400",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18835,
      "lng": 106.91418
    }
  },
  {
    "id": "br-23",
    "name": "Adira AXI Cabang Jakarta Barat - Puri Kencana",
    "shortName": "Jakarta Barat (Puri Kencana)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 113, Puri Kencana, Jakarta Barat",
    "phone": "021-532250",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1683,
      "lng": 106.7738
    }
  },
  {
    "id": "br-24",
    "name": "Adira AXI Cabang Jakarta Barat - Kebon Jeruk",
    "shortName": "Jakarta Barat (Kebon Jeruk)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 124, Kebon Jeruk, Jakarta Barat",
    "phone": "021-907399",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15333,
      "lng": 106.75839
    }
  },
  {
    "id": "br-25",
    "name": "Adira AXI Cabang Jakarta Barat - Cengkareng",
    "shortName": "Jakarta Barat (Cengkareng)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 135, Cengkareng, Jakarta Barat",
    "phone": "021-761768",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16061,
      "lng": 106.75135
    }
  },
  {
    "id": "br-26",
    "name": "Adira AXI Cabang Jakarta Barat - Grogol",
    "shortName": "Jakarta Barat (Grogol)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 146, Grogol, Jakarta Barat",
    "phone": "021-167828",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17103,
      "lng": 106.77732
    }
  },
  {
    "id": "br-27",
    "name": "Adira AXI Cabang Jakarta Barat - Taman Sari",
    "shortName": "Jakarta Barat (Taman Sari)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 157, Taman Sari, Jakarta Barat",
    "phone": "021-997270",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15965,
      "lng": 106.77993
    }
  },
  {
    "id": "br-28",
    "name": "Adira AXI Cabang Jakarta Barat - Tambora",
    "shortName": "Jakarta Barat (Tambora)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 18, Tambora, Jakarta Barat",
    "phone": "021-204938",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.14204,
      "lng": 106.76013
    }
  },
  {
    "id": "br-29",
    "name": "Adira AXI Cabang Jakarta Barat - Kalideres",
    "shortName": "Jakarta Barat (Kalideres)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 29, Kalideres, Jakarta Barat",
    "phone": "021-750354",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.14535,
      "lng": 106.77389
    }
  },
  {
    "id": "br-30",
    "name": "Adira AXI Cabang Jakarta Barat - Palmerah",
    "shortName": "Jakarta Barat (Palmerah)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 40, Palmerah, Jakarta Barat",
    "phone": "021-435975",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15786,
      "lng": 106.79479
    }
  },
  {
    "id": "br-31",
    "name": "Adira AXI Cabang Jakarta Barat - Daan Mogot",
    "shortName": "Jakarta Barat (Daan Mogot)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 51, Daan Mogot, Jakarta Barat",
    "phone": "021-493465",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15074,
      "lng": 106.7789
    }
  },
  {
    "id": "br-32",
    "name": "Adira AXI Cabang Jakarta Barat - Kedoya",
    "shortName": "Jakarta Barat (Kedoya)",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 62, Kedoya, Jakarta Barat",
    "phone": "021-545001",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.13165,
      "lng": 106.77258
    }
  },
  {
    "id": "br-33",
    "name": "Adira AXI Cabang Jakarta Pusat - Senen",
    "shortName": "Jakarta Pusat (Senen)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 73, Senen, Jakarta Pusat",
    "phone": "021-673761",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1805,
      "lng": 106.8434
    }
  },
  {
    "id": "br-34",
    "name": "Adira AXI Cabang Jakarta Pusat - Tanah Abang",
    "shortName": "Jakarta Pusat (Tanah Abang)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 84, Tanah Abang, Jakarta Pusat",
    "phone": "021-740069",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16553,
      "lng": 106.82799
    }
  },
  {
    "id": "br-35",
    "name": "Adira AXI Cabang Jakarta Pusat - Kemayoran",
    "shortName": "Jakarta Pusat (Kemayoran)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 95, Kemayoran, Jakarta Pusat",
    "phone": "021-969226",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17281,
      "lng": 106.82095
    }
  },
  {
    "id": "br-36",
    "name": "Adira AXI Cabang Jakarta Pusat - Cempaka Putih",
    "shortName": "Jakarta Pusat (Cempaka Putih)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 106, Cempaka Putih, Jakarta Pusat",
    "phone": "021-564426",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18323,
      "lng": 106.84692
    }
  },
  {
    "id": "br-37",
    "name": "Adira AXI Cabang Jakarta Pusat - Menteng",
    "shortName": "Jakarta Pusat (Menteng)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 117, Menteng, Jakarta Pusat",
    "phone": "021-870148",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17185,
      "lng": 106.84953
    }
  },
  {
    "id": "br-38",
    "name": "Adira AXI Cabang Jakarta Pusat - Johar Baru",
    "shortName": "Jakarta Pusat (Johar Baru)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 128, Johar Baru, Jakarta Pusat",
    "phone": "021-254123",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15424,
      "lng": 106.82973
    }
  },
  {
    "id": "br-39",
    "name": "Adira AXI Cabang Jakarta Pusat - Sawah Besar",
    "shortName": "Jakarta Pusat (Sawah Besar)",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 139, Sawah Besar, Jakarta Pusat",
    "phone": "021-901948",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15755,
      "lng": 106.84349
    }
  },
  {
    "id": "br-40",
    "name": "Adira AXI Cabang Jakarta Utara - Kelapa Gading",
    "shortName": "Jakarta Utara (Kelapa Gading)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 150, Kelapa Gading, Jakarta Utara",
    "phone": "021-734718",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1384,
      "lng": 106.879
    }
  },
  {
    "id": "br-41",
    "name": "Adira AXI Cabang Jakarta Utara - Sunter",
    "shortName": "Jakarta Utara (Sunter)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 11, Sunter, Jakarta Utara",
    "phone": "021-792773",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.12343,
      "lng": 106.86359
    }
  },
  {
    "id": "br-42",
    "name": "Adira AXI Cabang Jakarta Utara - Pluit",
    "shortName": "Jakarta Utara (Pluit)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 22, Pluit, Jakarta Utara",
    "phone": "021-982273",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.13071,
      "lng": 106.85655
    }
  },
  {
    "id": "br-43",
    "name": "Adira AXI Cabang Jakarta Utara - Tanjung Priok",
    "shortName": "Jakarta Utara (Tanjung Priok)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 33, Tanjung Priok, Jakarta Utara",
    "phone": "021-997081",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.14113,
      "lng": 106.88252
    }
  },
  {
    "id": "br-44",
    "name": "Adira AXI Cabang Jakarta Utara - Koja",
    "shortName": "Jakarta Utara (Koja)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 44, Koja, Jakarta Utara",
    "phone": "021-780592",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.12975,
      "lng": 106.88513
    }
  },
  {
    "id": "br-45",
    "name": "Adira AXI Cabang Jakarta Utara - Cilincing",
    "shortName": "Jakarta Utara (Cilincing)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 55, Cilincing, Jakarta Utara",
    "phone": "021-139538",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.11214,
      "lng": 106.86533
    }
  },
  {
    "id": "br-46",
    "name": "Adira AXI Cabang Jakarta Utara - Pademangan",
    "shortName": "Jakarta Utara (Pademangan)",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 66, Pademangan, Jakarta Utara",
    "phone": "021-773172",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.11545,
      "lng": 106.87909
    }
  },
  {
    "id": "br-47",
    "name": "Adira AXI Cabang Tangerang - Cimone",
    "shortName": "Tangerang (Cimone)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 77, Cimone, Tangerang",
    "phone": "021-105260",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1783,
      "lng": 106.6469
    }
  },
  {
    "id": "br-48",
    "name": "Adira AXI Cabang Tangerang - Cipondoh",
    "shortName": "Tangerang (Cipondoh)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 88, Cipondoh, Tangerang",
    "phone": "021-435653",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16333,
      "lng": 106.63149
    }
  },
  {
    "id": "br-49",
    "name": "Adira AXI Cabang Tangerang - Ciledug",
    "shortName": "Tangerang (Ciledug)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 99, Ciledug, Tangerang",
    "phone": "021-268358",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17061,
      "lng": 106.62445
    }
  },
  {
    "id": "br-50",
    "name": "Adira AXI Cabang Tangerang - Karawaci",
    "shortName": "Tangerang (Karawaci)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 110, Karawaci, Tangerang",
    "phone": "021-741045",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18103,
      "lng": 106.65042
    }
  },
  {
    "id": "br-51",
    "name": "Adira AXI Cabang Tangerang - Batuceper",
    "shortName": "Tangerang (Batuceper)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 121, Batuceper, Tangerang",
    "phone": "021-796064",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16965,
      "lng": 106.65303
    }
  },
  {
    "id": "br-52",
    "name": "Adira AXI Cabang Tangerang - Jatiuwung",
    "shortName": "Tangerang (Jatiuwung)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 132, Jatiuwung, Tangerang",
    "phone": "021-773121",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15204,
      "lng": 106.63323
    }
  },
  {
    "id": "br-53",
    "name": "Adira AXI Cabang Tangerang - Periuk",
    "shortName": "Tangerang (Periuk)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Veteran No. 143, Periuk, Tangerang",
    "phone": "021-344224",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15535,
      "lng": 106.64699
    }
  },
  {
    "id": "br-54",
    "name": "Adira AXI Cabang Tangerang - Pinang",
    "shortName": "Tangerang (Pinang)",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 154, Pinang, Tangerang",
    "phone": "021-180858",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16786,
      "lng": 106.66789
    }
  },
  {
    "id": "br-55",
    "name": "Adira AXI Cabang Tangerang Selatan - BSD Serpong",
    "shortName": "Tangerang Selatan (BSD Serpong)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 15, BSD Serpong, Tangerang Selatan",
    "phone": "021-680726",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2888,
      "lng": 106.7329
    }
  },
  {
    "id": "br-56",
    "name": "Adira AXI Cabang Tangerang Selatan - Bintaro",
    "shortName": "Tangerang Selatan (Bintaro)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 26, Bintaro, Tangerang Selatan",
    "phone": "021-851490",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.27383,
      "lng": 106.71749
    }
  },
  {
    "id": "br-57",
    "name": "Adira AXI Cabang Tangerang Selatan - Pamulang",
    "shortName": "Tangerang Selatan (Pamulang)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 37, Pamulang, Tangerang Selatan",
    "phone": "021-659464",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.28111,
      "lng": 106.71045
    }
  },
  {
    "id": "br-58",
    "name": "Adira AXI Cabang Tangerang Selatan - Ciputat",
    "shortName": "Tangerang Selatan (Ciputat)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 48, Ciputat, Tangerang Selatan",
    "phone": "021-396986",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.29153,
      "lng": 106.73642
    }
  },
  {
    "id": "br-59",
    "name": "Adira AXI Cabang Tangerang Selatan - Pondok Aren",
    "shortName": "Tangerang Selatan (Pondok Aren)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 59, Pondok Aren, Tangerang Selatan",
    "phone": "021-414261",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.28015,
      "lng": 106.73903
    }
  },
  {
    "id": "br-60",
    "name": "Adira AXI Cabang Tangerang Selatan - Setu",
    "shortName": "Tangerang Selatan (Setu)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 70, Setu, Tangerang Selatan",
    "phone": "021-203587",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.26254,
      "lng": 106.71923
    }
  },
  {
    "id": "br-61",
    "name": "Adira AXI Cabang Tangerang Selatan - Serpong Utara",
    "shortName": "Tangerang Selatan (Serpong Utara)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 81, Serpong Utara, Tangerang Selatan",
    "phone": "021-765334",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.26585,
      "lng": 106.73299
    }
  },
  {
    "id": "br-62",
    "name": "Adira AXI Cabang Tangerang Selatan - Cirendeu",
    "shortName": "Tangerang Selatan (Cirendeu)",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 92, Cirendeu, Tangerang Selatan",
    "phone": "021-390184",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.27836,
      "lng": 106.75389
    }
  },
  {
    "id": "br-63",
    "name": "Adira AXI Cabang Kabupaten Tangerang - Cikupa",
    "shortName": "Kabupaten Tangerang (Cikupa)",
    "city": "Kabupaten Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 103, Cikupa, Kabupaten Tangerang",
    "phone": "021-771288",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1956,
      "lng": 106.5033
    }
  },
  {
    "id": "br-64",
    "name": "Adira AXI Cabang Kabupaten Tangerang - Balaraja",
    "shortName": "Kabupaten Tangerang (Balaraja)",
    "city": "Kabupaten Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 114, Balaraja, Kabupaten Tangerang",
    "phone": "021-693005",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18063,
      "lng": 106.48789
    }
  },
  {
    "id": "br-65",
    "name": "Adira AXI Cabang Kabupaten Tangerang - Curug",
    "shortName": "Kabupaten Tangerang (Curug)",
    "city": "Kabupaten Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 125, Curug, Kabupaten Tangerang",
    "phone": "021-493314",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18791,
      "lng": 106.48085
    }
  },
  {
    "id": "br-66",
    "name": "Adira AXI Cabang Kabupaten Tangerang - Pasar Kemis",
    "shortName": "Kabupaten Tangerang (Pasar Kemis)",
    "city": "Kabupaten Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 136, Pasar Kemis, Kabupaten Tangerang",
    "phone": "021-784945",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19833,
      "lng": 106.50682
    }
  },
  {
    "id": "br-67",
    "name": "Adira AXI Cabang Kabupaten Tangerang - Tigaraksa",
    "shortName": "Kabupaten Tangerang (Tigaraksa)",
    "city": "Kabupaten Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 147, Tigaraksa, Kabupaten Tangerang",
    "phone": "021-431573",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18695,
      "lng": 106.50943
    }
  },
  {
    "id": "br-68",
    "name": "Adira AXI Cabang Kabupaten Tangerang - Teluknaga",
    "shortName": "Kabupaten Tangerang (Teluknaga)",
    "city": "Kabupaten Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 158, Teluknaga, Kabupaten Tangerang",
    "phone": "021-596502",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16934,
      "lng": 106.48963
    }
  },
  {
    "id": "br-69",
    "name": "Adira AXI Cabang Serang - Serang Kota",
    "shortName": "Serang (Serang Kota)",
    "city": "Serang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Veteran No. 19, Serang Kota, Serang",
    "phone": "021-459856",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.12,
      "lng": 106.1653
    }
  },
  {
    "id": "br-70",
    "name": "Adira AXI Cabang Serang - Cipocok",
    "shortName": "Serang (Cipocok)",
    "city": "Serang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 30, Cipocok, Serang",
    "phone": "021-494644",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.10503,
      "lng": 106.14989
    }
  },
  {
    "id": "br-71",
    "name": "Adira AXI Cabang Serang - Kasemen",
    "shortName": "Serang (Kasemen)",
    "city": "Serang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 41, Kasemen, Serang",
    "phone": "021-997147",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.11231,
      "lng": 106.14285
    }
  },
  {
    "id": "br-72",
    "name": "Adira AXI Cabang Serang - Ciruas",
    "shortName": "Serang (Ciruas)",
    "city": "Serang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 52, Ciruas, Serang",
    "phone": "021-718007",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.12273,
      "lng": 106.16882
    }
  },
  {
    "id": "br-73",
    "name": "Adira AXI Cabang Cilegon - Cilegon Kota",
    "shortName": "Cilegon (Cilegon Kota)",
    "city": "Cilegon",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 63, Cilegon Kota, Cilegon",
    "phone": "021-962315",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.0174,
      "lng": 106.0688
    }
  },
  {
    "id": "br-74",
    "name": "Adira AXI Cabang Cilegon - Ciwandan",
    "shortName": "Cilegon (Ciwandan)",
    "city": "Cilegon",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 74, Ciwandan, Cilegon",
    "phone": "021-854180",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.00243,
      "lng": 106.05339
    }
  },
  {
    "id": "br-75",
    "name": "Adira AXI Cabang Cilegon - Pulomerak",
    "shortName": "Cilegon (Pulomerak)",
    "city": "Cilegon",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 85, Pulomerak, Cilegon",
    "phone": "021-414750",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.00971,
      "lng": 106.04635
    }
  },
  {
    "id": "br-76",
    "name": "Adira AXI Cabang Pandeglang - Pandeglang Kota",
    "shortName": "Pandeglang (Pandeglang Kota)",
    "city": "Pandeglang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 96, Pandeglang Kota, Pandeglang",
    "phone": "021-105668",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.3084,
      "lng": 106.1215
    }
  },
  {
    "id": "br-77",
    "name": "Adira AXI Cabang Pandeglang - Labuan",
    "shortName": "Pandeglang (Labuan)",
    "city": "Pandeglang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 107, Labuan, Pandeglang",
    "phone": "021-279516",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.29343,
      "lng": 106.10609
    }
  },
  {
    "id": "br-78",
    "name": "Adira AXI Cabang Lebak - Rangkasbitung",
    "shortName": "Lebak (Rangkasbitung)",
    "city": "Lebak",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 118, Rangkasbitung, Lebak",
    "phone": "021-343300",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.5387,
      "lng": 106.2633
    }
  },
  {
    "id": "br-79",
    "name": "Adira AXI Cabang Lebak - Malingping",
    "shortName": "Lebak (Malingping)",
    "city": "Lebak",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 129, Malingping, Lebak",
    "phone": "021-566973",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.52373,
      "lng": 106.24789
    }
  },
  {
    "id": "br-80",
    "name": "Adira AXI Cabang Kota Bandung - Soekarno Hatta",
    "shortName": "Kota Bandung (Soekarno Hatta)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 140, Soekarno Hatta, Kota Bandung",
    "phone": "021-712089",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9175,
      "lng": 107.6341
    }
  },
  {
    "id": "br-81",
    "name": "Adira AXI Cabang Kota Bandung - Dago",
    "shortName": "Kota Bandung (Dago)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 151, Dago, Kota Bandung",
    "phone": "021-480765",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.90253,
      "lng": 107.61869
    }
  },
  {
    "id": "br-82",
    "name": "Adira AXI Cabang Kota Bandung - Buah Batu",
    "shortName": "Kota Bandung (Buah Batu)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 12, Buah Batu, Kota Bandung",
    "phone": "021-126965",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.90981,
      "lng": 107.61165
    }
  },
  {
    "id": "br-83",
    "name": "Adira AXI Cabang Kota Bandung - Kopo",
    "shortName": "Kota Bandung (Kopo)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 23, Kopo, Kota Bandung",
    "phone": "021-831396",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.92023,
      "lng": 107.63762
    }
  },
  {
    "id": "br-84",
    "name": "Adira AXI Cabang Kota Bandung - Setiabudi",
    "shortName": "Kota Bandung (Setiabudi)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 34, Setiabudi, Kota Bandung",
    "phone": "021-247624",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.90885,
      "lng": 107.64023
    }
  },
  {
    "id": "br-85",
    "name": "Adira AXI Cabang Kota Bandung - Antapani",
    "shortName": "Kota Bandung (Antapani)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Veteran No. 45, Antapani, Kota Bandung",
    "phone": "021-654746",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.89124,
      "lng": 107.62043
    }
  },
  {
    "id": "br-86",
    "name": "Adira AXI Cabang Kota Bandung - Ujungberung",
    "shortName": "Kota Bandung (Ujungberung)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 56, Ujungberung, Kota Bandung",
    "phone": "021-695593",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.89455,
      "lng": 107.63419
    }
  },
  {
    "id": "br-87",
    "name": "Adira AXI Cabang Kota Bandung - Cicendo",
    "shortName": "Kota Bandung (Cicendo)",
    "city": "Kota Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 67, Cicendo, Kota Bandung",
    "phone": "021-366993",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.90706,
      "lng": 107.65509
    }
  },
  {
    "id": "br-88",
    "name": "Adira AXI Cabang Kabupaten Bandung - Soreang",
    "shortName": "Kabupaten Bandung (Soreang)",
    "city": "Kabupaten Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 78, Soreang, Kabupaten Bandung",
    "phone": "021-982216",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.0253,
      "lng": 107.5348
    }
  },
  {
    "id": "br-89",
    "name": "Adira AXI Cabang Kabupaten Bandung - Banjaran",
    "shortName": "Kabupaten Bandung (Banjaran)",
    "city": "Kabupaten Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 89, Banjaran, Kabupaten Bandung",
    "phone": "021-745419",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.01033,
      "lng": 107.51939
    }
  },
  {
    "id": "br-90",
    "name": "Adira AXI Cabang Kabupaten Bandung - Majalaya",
    "shortName": "Kabupaten Bandung (Majalaya)",
    "city": "Kabupaten Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 100, Majalaya, Kabupaten Bandung",
    "phone": "021-796122",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.01761,
      "lng": 107.51235
    }
  },
  {
    "id": "br-91",
    "name": "Adira AXI Cabang Kabupaten Bandung - Cileunyi",
    "shortName": "Kabupaten Bandung (Cileunyi)",
    "city": "Kabupaten Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 111, Cileunyi, Kabupaten Bandung",
    "phone": "021-299742",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.02803,
      "lng": 107.53832
    }
  },
  {
    "id": "br-92",
    "name": "Adira AXI Cabang Kabupaten Bandung - Baleendah",
    "shortName": "Kabupaten Bandung (Baleendah)",
    "city": "Kabupaten Bandung",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 122, Baleendah, Kabupaten Bandung",
    "phone": "021-332600",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.01665,
      "lng": 107.54093
    }
  },
  {
    "id": "br-93",
    "name": "Adira AXI Cabang Bandung Barat - Padalarang",
    "shortName": "Bandung Barat (Padalarang)",
    "city": "Bandung Barat",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 133, Padalarang, Bandung Barat",
    "phone": "021-314111",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8439,
      "lng": 107.5179
    }
  },
  {
    "id": "br-94",
    "name": "Adira AXI Cabang Bandung Barat - Lembang",
    "shortName": "Bandung Barat (Lembang)",
    "city": "Bandung Barat",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 144, Lembang, Bandung Barat",
    "phone": "021-580979",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.82893,
      "lng": 107.50249
    }
  },
  {
    "id": "br-95",
    "name": "Adira AXI Cabang Bandung Barat - Batujajar",
    "shortName": "Bandung Barat (Batujajar)",
    "city": "Bandung Barat",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 155, Batujajar, Bandung Barat",
    "phone": "021-396384",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.83621,
      "lng": 107.49545
    }
  },
  {
    "id": "br-96",
    "name": "Adira AXI Cabang Kota Cimahi - Cimahi Tengah",
    "shortName": "Kota Cimahi (Cimahi Tengah)",
    "city": "Kota Cimahi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 16, Cimahi Tengah, Kota Cimahi",
    "phone": "021-261159",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8723,
      "lng": 107.5572
    }
  },
  {
    "id": "br-97",
    "name": "Adira AXI Cabang Kota Cimahi - Leuwigajah",
    "shortName": "Kota Cimahi (Leuwigajah)",
    "city": "Kota Cimahi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 27, Leuwigajah, Kota Cimahi",
    "phone": "021-913349",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.85733,
      "lng": 107.54179
    }
  },
  {
    "id": "br-98",
    "name": "Adira AXI Cabang Kota Bekasi - Bekasi Barat",
    "shortName": "Kota Bekasi (Bekasi Barat)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 38, Bekasi Barat, Kota Bekasi",
    "phone": "021-450827",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2383,
      "lng": 106.9906
    }
  },
  {
    "id": "br-99",
    "name": "Adira AXI Cabang Kota Bekasi - Bekasi Timur",
    "shortName": "Kota Bekasi (Bekasi Timur)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 49, Bekasi Timur, Kota Bekasi",
    "phone": "021-218946",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.22333,
      "lng": 106.97519
    }
  },
  {
    "id": "br-100",
    "name": "Adira AXI Cabang Kota Bekasi - Harapan Indah",
    "shortName": "Kota Bekasi (Harapan Indah)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 60, Harapan Indah, Kota Bekasi",
    "phone": "021-126753",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.23061,
      "lng": 106.96815
    }
  },
  {
    "id": "br-101",
    "name": "Adira AXI Cabang Kota Bekasi - Pondok Gede",
    "shortName": "Kota Bekasi (Pondok Gede)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Veteran No. 71, Pondok Gede, Kota Bekasi",
    "phone": "021-518867",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.24103,
      "lng": 106.99412
    }
  },
  {
    "id": "br-102",
    "name": "Adira AXI Cabang Kota Bekasi - Jatiasih",
    "shortName": "Kota Bekasi (Jatiasih)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 82, Jatiasih, Kota Bekasi",
    "phone": "021-743764",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.22965,
      "lng": 106.99673
    }
  },
  {
    "id": "br-103",
    "name": "Adira AXI Cabang Kota Bekasi - Rawalumbu",
    "shortName": "Kota Bekasi (Rawalumbu)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 93, Rawalumbu, Kota Bekasi",
    "phone": "021-113908",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21204,
      "lng": 106.97693
    }
  },
  {
    "id": "br-104",
    "name": "Adira AXI Cabang Kota Bekasi - Mustika Jaya",
    "shortName": "Kota Bekasi (Mustika Jaya)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 104, Mustika Jaya, Kota Bekasi",
    "phone": "021-749858",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21535,
      "lng": 106.99069
    }
  },
  {
    "id": "br-105",
    "name": "Adira AXI Cabang Kota Bekasi - Medan Satria",
    "shortName": "Kota Bekasi (Medan Satria)",
    "city": "Kota Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 115, Medan Satria, Kota Bekasi",
    "phone": "021-617494",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.22786,
      "lng": 107.01159
    }
  },
  {
    "id": "br-106",
    "name": "Adira AXI Cabang Kabupaten Bekasi - Cikarang Barat",
    "shortName": "Kabupaten Bekasi (Cikarang Barat)",
    "city": "Kabupaten Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 126, Cikarang Barat, Kabupaten Bekasi",
    "phone": "021-667624",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.3644,
      "lng": 107.1875
    }
  },
  {
    "id": "br-107",
    "name": "Adira AXI Cabang Kabupaten Bekasi - Cikarang Pusat",
    "shortName": "Kabupaten Bekasi (Cikarang Pusat)",
    "city": "Kabupaten Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 137, Cikarang Pusat, Kabupaten Bekasi",
    "phone": "021-935397",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.34943,
      "lng": 107.17209
    }
  },
  {
    "id": "br-108",
    "name": "Adira AXI Cabang Kabupaten Bekasi - Tambun Selatan",
    "shortName": "Kabupaten Bekasi (Tambun Selatan)",
    "city": "Kabupaten Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 148, Tambun Selatan, Kabupaten Bekasi",
    "phone": "021-246733",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.35671,
      "lng": 107.16505
    }
  },
  {
    "id": "br-109",
    "name": "Adira AXI Cabang Kabupaten Bekasi - Cibitung",
    "shortName": "Kabupaten Bekasi (Cibitung)",
    "city": "Kabupaten Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 159, Cibitung, Kabupaten Bekasi",
    "phone": "021-363845",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.36713,
      "lng": 107.19102
    }
  },
  {
    "id": "br-110",
    "name": "Adira AXI Cabang Kabupaten Bekasi - Setu",
    "shortName": "Kabupaten Bekasi (Setu)",
    "city": "Kabupaten Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 20, Setu, Kabupaten Bekasi",
    "phone": "021-386854",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.35575,
      "lng": 107.19363
    }
  },
  {
    "id": "br-111",
    "name": "Adira AXI Cabang Kabupaten Bekasi - Sukatani",
    "shortName": "Kabupaten Bekasi (Sukatani)",
    "city": "Kabupaten Bekasi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 31, Sukatani, Kabupaten Bekasi",
    "phone": "021-714400",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.33814,
      "lng": 107.17383
    }
  },
  {
    "id": "br-112",
    "name": "Adira AXI Cabang Kota Bogor - Pajajaran",
    "shortName": "Kota Bogor (Pajajaran)",
    "city": "Kota Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 42, Pajajaran, Kota Bogor",
    "phone": "021-941674",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.5971,
      "lng": 106.821
    }
  },
  {
    "id": "br-113",
    "name": "Adira AXI Cabang Kota Bogor - Bogor Barat",
    "shortName": "Kota Bogor (Bogor Barat)",
    "city": "Kota Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 53, Bogor Barat, Kota Bogor",
    "phone": "021-302231",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.58213,
      "lng": 106.80559
    }
  },
  {
    "id": "br-114",
    "name": "Adira AXI Cabang Kota Bogor - Tajur",
    "shortName": "Kota Bogor (Tajur)",
    "city": "Kota Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 64, Tajur, Kota Bogor",
    "phone": "021-612041",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.58941,
      "lng": 106.79855
    }
  },
  {
    "id": "br-115",
    "name": "Adira AXI Cabang Kota Bogor - Semplak",
    "shortName": "Kota Bogor (Semplak)",
    "city": "Kota Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 75, Semplak, Kota Bogor",
    "phone": "021-722353",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.59983,
      "lng": 106.82452
    }
  },
  {
    "id": "br-116",
    "name": "Adira AXI Cabang Kota Bogor - Tanah Sareal",
    "shortName": "Kota Bogor (Tanah Sareal)",
    "city": "Kota Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 86, Tanah Sareal, Kota Bogor",
    "phone": "021-342590",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.58845,
      "lng": 106.82713
    }
  },
  {
    "id": "br-117",
    "name": "Adira AXI Cabang Kabupaten Bogor - Cibinong",
    "shortName": "Kabupaten Bogor (Cibinong)",
    "city": "Kabupaten Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Veteran No. 97, Cibinong, Kabupaten Bogor",
    "phone": "021-282289",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.4817,
      "lng": 106.8683
    }
  },
  {
    "id": "br-118",
    "name": "Adira AXI Cabang Kabupaten Bogor - Cileungsi",
    "shortName": "Kabupaten Bogor (Cileungsi)",
    "city": "Kabupaten Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 108, Cileungsi, Kabupaten Bogor",
    "phone": "021-187699",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.46673,
      "lng": 106.85289
    }
  },
  {
    "id": "br-119",
    "name": "Adira AXI Cabang Kabupaten Bogor - Gunung Putri",
    "shortName": "Kabupaten Bogor (Gunung Putri)",
    "city": "Kabupaten Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 119, Gunung Putri, Kabupaten Bogor",
    "phone": "021-481996",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.47401,
      "lng": 106.84585
    }
  },
  {
    "id": "br-120",
    "name": "Adira AXI Cabang Kabupaten Bogor - Parung",
    "shortName": "Kabupaten Bogor (Parung)",
    "city": "Kabupaten Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 130, Parung, Kabupaten Bogor",
    "phone": "021-308683",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.48443,
      "lng": 106.87182
    }
  },
  {
    "id": "br-121",
    "name": "Adira AXI Cabang Kabupaten Bogor - Leuwiliang",
    "shortName": "Kabupaten Bogor (Leuwiliang)",
    "city": "Kabupaten Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 141, Leuwiliang, Kabupaten Bogor",
    "phone": "021-731999",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.47305,
      "lng": 106.87443
    }
  },
  {
    "id": "br-122",
    "name": "Adira AXI Cabang Kabupaten Bogor - Citeureup",
    "shortName": "Kabupaten Bogor (Citeureup)",
    "city": "Kabupaten Bogor",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 152, Citeureup, Kabupaten Bogor",
    "phone": "021-101993",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.45544,
      "lng": 106.85463
    }
  },
  {
    "id": "br-123",
    "name": "Adira AXI Cabang Kota Depok - Margonda",
    "shortName": "Kota Depok (Margonda)",
    "city": "Kota Depok",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 13, Margonda, Kota Depok",
    "phone": "021-150663",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.4025,
      "lng": 106.8092
    }
  },
  {
    "id": "br-124",
    "name": "Adira AXI Cabang Kota Depok - Cinere",
    "shortName": "Kota Depok (Cinere)",
    "city": "Kota Depok",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 24, Cinere, Kota Depok",
    "phone": "021-645566",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.38753,
      "lng": 106.79379
    }
  },
  {
    "id": "br-125",
    "name": "Adira AXI Cabang Kota Depok - Sawangan",
    "shortName": "Kota Depok (Sawangan)",
    "city": "Kota Depok",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 35, Sawangan, Kota Depok",
    "phone": "021-259581",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.39481,
      "lng": 106.78675
    }
  },
  {
    "id": "br-126",
    "name": "Adira AXI Cabang Kota Depok - Cimanggis",
    "shortName": "Kota Depok (Cimanggis)",
    "city": "Kota Depok",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 46, Cimanggis, Kota Depok",
    "phone": "021-943104",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.40523,
      "lng": 106.81272
    }
  },
  {
    "id": "br-127",
    "name": "Adira AXI Cabang Kota Depok - Sukmajaya",
    "shortName": "Kota Depok (Sukmajaya)",
    "city": "Kota Depok",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 57, Sukmajaya, Kota Depok",
    "phone": "021-928596",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.39385,
      "lng": 106.81533
    }
  },
  {
    "id": "br-128",
    "name": "Adira AXI Cabang Kota Depok - Tapos",
    "shortName": "Kota Depok (Tapos)",
    "city": "Kota Depok",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 68, Tapos, Kota Depok",
    "phone": "021-145791",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.37624,
      "lng": 106.79553
    }
  },
  {
    "id": "br-129",
    "name": "Adira AXI Cabang Karawang - Karawang Barat",
    "shortName": "Karawang (Karawang Barat)",
    "city": "Karawang",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 79, Karawang Barat, Karawang",
    "phone": "021-239100",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.3042,
      "lng": 107.3225
    }
  },
  {
    "id": "br-130",
    "name": "Adira AXI Cabang Karawang - Klari",
    "shortName": "Karawang (Klari)",
    "city": "Karawang",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 90, Klari, Karawang",
    "phone": "021-407490",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.28923,
      "lng": 107.30709
    }
  },
  {
    "id": "br-131",
    "name": "Adira AXI Cabang Karawang - Cikampek",
    "shortName": "Karawang (Cikampek)",
    "city": "Karawang",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 101, Cikampek, Karawang",
    "phone": "021-859678",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.29651,
      "lng": 107.30005
    }
  },
  {
    "id": "br-132",
    "name": "Adira AXI Cabang Karawang - Rengasdengklok",
    "shortName": "Karawang (Rengasdengklok)",
    "city": "Karawang",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 112, Rengasdengklok, Karawang",
    "phone": "021-146000",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.30693,
      "lng": 107.32602
    }
  },
  {
    "id": "br-133",
    "name": "Adira AXI Cabang Purwakarta - Purwakarta Kota",
    "shortName": "Purwakarta (Purwakarta Kota)",
    "city": "Purwakarta",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Veteran No. 123, Purwakarta Kota, Purwakarta",
    "phone": "021-817080",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.5569,
      "lng": 107.4583
    }
  },
  {
    "id": "br-134",
    "name": "Adira AXI Cabang Purwakarta - Sadang",
    "shortName": "Purwakarta (Sadang)",
    "city": "Purwakarta",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 134, Sadang, Purwakarta",
    "phone": "021-243239",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.54193,
      "lng": 107.44289
    }
  },
  {
    "id": "br-135",
    "name": "Adira AXI Cabang Subang - Subang Kota",
    "shortName": "Subang (Subang Kota)",
    "city": "Subang",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 145, Subang Kota, Subang",
    "phone": "021-851110",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.5716,
      "lng": 107.7737
    }
  },
  {
    "id": "br-136",
    "name": "Adira AXI Cabang Subang - Pamanukan",
    "shortName": "Subang (Pamanukan)",
    "city": "Subang",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 156, Pamanukan, Subang",
    "phone": "021-975440",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.55663,
      "lng": 107.75829
    }
  },
  {
    "id": "br-137",
    "name": "Adira AXI Cabang Sukabumi - Sukabumi Kota",
    "shortName": "Sukabumi (Sukabumi Kota)",
    "city": "Sukabumi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 17, Sukabumi Kota, Sukabumi",
    "phone": "021-505698",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9277,
      "lng": 106.945
    }
  },
  {
    "id": "br-138",
    "name": "Adira AXI Cabang Sukabumi - Cibadak",
    "shortName": "Sukabumi (Cibadak)",
    "city": "Sukabumi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 28, Cibadak, Sukabumi",
    "phone": "021-689581",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.91273,
      "lng": 106.92959
    }
  },
  {
    "id": "br-139",
    "name": "Adira AXI Cabang Sukabumi - Pelabuhan Ratu",
    "shortName": "Sukabumi (Pelabuhan Ratu)",
    "city": "Sukabumi",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 39, Pelabuhan Ratu, Sukabumi",
    "phone": "021-114957",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.92001,
      "lng": 106.92255
    }
  },
  {
    "id": "br-140",
    "name": "Adira AXI Cabang Cianjur - Cianjur Kota",
    "shortName": "Cianjur (Cianjur Kota)",
    "city": "Cianjur",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 50, Cianjur Kota, Cianjur",
    "phone": "021-770642",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8222,
      "lng": 107.1544
    }
  },
  {
    "id": "br-141",
    "name": "Adira AXI Cabang Cianjur - Cipanas",
    "shortName": "Cianjur (Cipanas)",
    "city": "Cianjur",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 61, Cipanas, Cianjur",
    "phone": "021-320146",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.80723,
      "lng": 107.13899
    }
  },
  {
    "id": "br-142",
    "name": "Adira AXI Cabang Cirebon - Cirebon Kartini",
    "shortName": "Cirebon (Cirebon Kartini)",
    "city": "Cirebon",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 72, Cirebon Kartini, Cirebon",
    "phone": "021-107246",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.732,
      "lng": 108.5673
    }
  },
  {
    "id": "br-143",
    "name": "Adira AXI Cabang Cirebon - Plered",
    "shortName": "Cirebon (Plered)",
    "city": "Cirebon",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 83, Plered, Cirebon",
    "phone": "021-700313",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.71703,
      "lng": 108.55189
    }
  },
  {
    "id": "br-144",
    "name": "Adira AXI Cabang Cirebon - Sumber",
    "shortName": "Cirebon (Sumber)",
    "city": "Cirebon",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 94, Sumber, Cirebon",
    "phone": "021-235645",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.72431,
      "lng": 108.54485
    }
  },
  {
    "id": "br-145",
    "name": "Adira AXI Cabang Cirebon - Harjamukti",
    "shortName": "Cirebon (Harjamukti)",
    "city": "Cirebon",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 105, Harjamukti, Cirebon",
    "phone": "021-779427",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.73473,
      "lng": 108.57082
    }
  },
  {
    "id": "br-146",
    "name": "Adira AXI Cabang Indramayu - Indramayu Kota",
    "shortName": "Indramayu (Indramayu Kota)",
    "city": "Indramayu",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 116, Indramayu Kota, Indramayu",
    "phone": "021-854391",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.3264,
      "lng": 108.335
    }
  },
  {
    "id": "br-147",
    "name": "Adira AXI Cabang Indramayu - Jatibarang",
    "shortName": "Indramayu (Jatibarang)",
    "city": "Indramayu",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 127, Jatibarang, Indramayu",
    "phone": "021-485519",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.31143,
      "lng": 108.31959
    }
  },
  {
    "id": "br-148",
    "name": "Adira AXI Cabang Majalengka - Majalengka Kota",
    "shortName": "Majalengka (Majalengka Kota)",
    "city": "Majalengka",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 138, Majalengka Kota, Majalengka",
    "phone": "021-507916",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8361,
      "lng": 108.2428
    }
  },
  {
    "id": "br-149",
    "name": "Adira AXI Cabang Majalengka - Jatiwangi",
    "shortName": "Majalengka (Jatiwangi)",
    "city": "Majalengka",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Veteran No. 149, Jatiwangi, Majalengka",
    "phone": "021-546073",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.82113,
      "lng": 108.22739
    }
  },
  {
    "id": "br-150",
    "name": "Adira AXI Cabang Kuningan - Kuningan Kota",
    "shortName": "Kuningan (Kuningan Kota)",
    "city": "Kuningan",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 10, Kuningan Kota, Kuningan",
    "phone": "021-747531",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9764,
      "lng": 108.4981
    }
  },
  {
    "id": "br-151",
    "name": "Adira AXI Cabang Kuningan - Cilimus",
    "shortName": "Kuningan (Cilimus)",
    "city": "Kuningan",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 21, Cilimus, Kuningan",
    "phone": "021-215017",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.96143,
      "lng": 108.48269
    }
  },
  {
    "id": "br-152",
    "name": "Adira AXI Cabang Tasikmalaya - Tasikmalaya Kota",
    "shortName": "Tasikmalaya (Tasikmalaya Kota)",
    "city": "Tasikmalaya",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 32, Tasikmalaya Kota, Tasikmalaya",
    "phone": "021-818282",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3274,
      "lng": 108.2357
    }
  },
  {
    "id": "br-153",
    "name": "Adira AXI Cabang Tasikmalaya - Singaparna",
    "shortName": "Tasikmalaya (Singaparna)",
    "city": "Tasikmalaya",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 43, Singaparna, Tasikmalaya",
    "phone": "021-779368",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.31243,
      "lng": 108.22029
    }
  },
  {
    "id": "br-154",
    "name": "Adira AXI Cabang Tasikmalaya - Cihideung",
    "shortName": "Tasikmalaya (Cihideung)",
    "city": "Tasikmalaya",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 54, Cihideung, Tasikmalaya",
    "phone": "021-199700",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.31971,
      "lng": 108.21325
    }
  },
  {
    "id": "br-155",
    "name": "Adira AXI Cabang Garut - Garut Kota",
    "shortName": "Garut (Garut Kota)",
    "city": "Garut",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 65, Garut Kota, Garut",
    "phone": "021-493106",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.2278,
      "lng": 107.9236
    }
  },
  {
    "id": "br-156",
    "name": "Adira AXI Cabang Garut - Tarogong",
    "shortName": "Garut (Tarogong)",
    "city": "Garut",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 76, Tarogong, Garut",
    "phone": "021-574075",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.21283,
      "lng": 107.90819
    }
  },
  {
    "id": "br-157",
    "name": "Adira AXI Cabang Ciamis - Ciamis Kota",
    "shortName": "Ciamis (Ciamis Kota)",
    "city": "Ciamis",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 87, Ciamis Kota, Ciamis",
    "phone": "021-462723",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3267,
      "lng": 108.3683
    }
  },
  {
    "id": "br-158",
    "name": "Adira AXI Cabang Ciamis - Kawali",
    "shortName": "Ciamis (Kawali)",
    "city": "Ciamis",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 98, Kawali, Ciamis",
    "phone": "021-230396",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.31173,
      "lng": 108.35289
    }
  },
  {
    "id": "br-159",
    "name": "Adira AXI Cabang Banjar - Banjar Patroman",
    "shortName": "Banjar (Banjar Patroman)",
    "city": "Banjar",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 109, Banjar Patroman, Banjar",
    "phone": "021-589138",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3697,
      "lng": 108.5486
    }
  },
  {
    "id": "br-160",
    "name": "Adira AXI Cabang Pangandaran - Pangandaran",
    "shortName": "Pangandaran (Pangandaran)",
    "city": "Pangandaran",
    "province": "Jawa Barat",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 120, Pangandaran, Pangandaran",
    "phone": "021-608279",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7011,
      "lng": 108.5097
    }
  },
  {
    "id": "br-161",
    "name": "Adira AXI Cabang Semarang - Pandanaran",
    "shortName": "Semarang (Pandanaran)",
    "city": "Semarang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 131, Pandanaran, Semarang",
    "phone": "021-908376",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9667,
      "lng": 110.4317
    }
  },
  {
    "id": "br-162",
    "name": "Adira AXI Cabang Semarang - Majapahit",
    "shortName": "Semarang (Majapahit)",
    "city": "Semarang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 142, Majapahit, Semarang",
    "phone": "021-642223",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.95173,
      "lng": 110.41629
    }
  },
  {
    "id": "br-163",
    "name": "Adira AXI Cabang Semarang - Ngaliyan",
    "shortName": "Semarang (Ngaliyan)",
    "city": "Semarang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 153, Ngaliyan, Semarang",
    "phone": "021-797383",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.95901,
      "lng": 110.40925
    }
  },
  {
    "id": "br-164",
    "name": "Adira AXI Cabang Semarang - Banyumanik",
    "shortName": "Semarang (Banyumanik)",
    "city": "Semarang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 14, Banyumanik, Semarang",
    "phone": "021-906537",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.96943,
      "lng": 110.43522
    }
  },
  {
    "id": "br-165",
    "name": "Adira AXI Cabang Semarang - Pedurungan",
    "shortName": "Semarang (Pedurungan)",
    "city": "Semarang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Veteran No. 25, Pedurungan, Semarang",
    "phone": "021-815163",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.95805,
      "lng": 110.43783
    }
  },
  {
    "id": "br-166",
    "name": "Adira AXI Cabang Semarang - Krapyak",
    "shortName": "Semarang (Krapyak)",
    "city": "Semarang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 36, Krapyak, Semarang",
    "phone": "021-485520",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.94044,
      "lng": 110.41803
    }
  },
  {
    "id": "br-167",
    "name": "Adira AXI Cabang Surakarta (Solo) - Slamet Riyadi",
    "shortName": "Surakarta (Solo) (Slamet Riyadi)",
    "city": "Surakarta (Solo)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 47, Slamet Riyadi, Surakarta (Solo)",
    "phone": "021-528815",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.5755,
      "lng": 110.8393
    }
  },
  {
    "id": "br-168",
    "name": "Adira AXI Cabang Surakarta (Solo) - Jebres",
    "shortName": "Surakarta (Solo) (Jebres)",
    "city": "Surakarta (Solo)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 58, Jebres, Surakarta (Solo)",
    "phone": "021-533866",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.56053,
      "lng": 110.82389
    }
  },
  {
    "id": "br-169",
    "name": "Adira AXI Cabang Surakarta (Solo) - Banjarsari",
    "shortName": "Surakarta (Solo) (Banjarsari)",
    "city": "Surakarta (Solo)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 69, Banjarsari, Surakarta (Solo)",
    "phone": "021-590861",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.56781,
      "lng": 110.81685
    }
  },
  {
    "id": "br-170",
    "name": "Adira AXI Cabang Surakarta (Solo) - Laweyan",
    "shortName": "Surakarta (Solo) (Laweyan)",
    "city": "Surakarta (Solo)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 80, Laweyan, Surakarta (Solo)",
    "phone": "021-673873",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.57823,
      "lng": 110.84282
    }
  },
  {
    "id": "br-171",
    "name": "Adira AXI Cabang Surakarta (Solo) - Pasar Kliwon",
    "shortName": "Surakarta (Solo) (Pasar Kliwon)",
    "city": "Surakarta (Solo)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 91, Pasar Kliwon, Surakarta (Solo)",
    "phone": "021-174412",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.56685,
      "lng": 110.84543
    }
  },
  {
    "id": "br-172",
    "name": "Adira AXI Cabang Magelang - Magelang Kota",
    "shortName": "Magelang (Magelang Kota)",
    "city": "Magelang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 102, Magelang Kota, Magelang",
    "phone": "021-248474",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.4706,
      "lng": 110.2328
    }
  },
  {
    "id": "br-173",
    "name": "Adira AXI Cabang Magelang - Mertoyudan",
    "shortName": "Magelang (Mertoyudan)",
    "city": "Magelang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 113, Mertoyudan, Magelang",
    "phone": "021-809295",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.45563,
      "lng": 110.21739
    }
  },
  {
    "id": "br-174",
    "name": "Adira AXI Cabang Magelang - Muntilan",
    "shortName": "Magelang (Muntilan)",
    "city": "Magelang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 124, Muntilan, Magelang",
    "phone": "021-695832",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.46291,
      "lng": 110.21035
    }
  },
  {
    "id": "br-175",
    "name": "Adira AXI Cabang Salatiga - Salatiga Kota",
    "shortName": "Salatiga (Salatiga Kota)",
    "city": "Salatiga",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 135, Salatiga Kota, Salatiga",
    "phone": "021-911759",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3305,
      "lng": 110.5234
    }
  },
  {
    "id": "br-176",
    "name": "Adira AXI Cabang Salatiga - Tingkir",
    "shortName": "Salatiga (Tingkir)",
    "city": "Salatiga",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 146, Tingkir, Salatiga",
    "phone": "021-853811",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.31553,
      "lng": 110.50799
    }
  },
  {
    "id": "br-177",
    "name": "Adira AXI Cabang Pekalongan - Pekalongan Barat",
    "shortName": "Pekalongan (Pekalongan Barat)",
    "city": "Pekalongan",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 157, Pekalongan Barat, Pekalongan",
    "phone": "021-508550",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8886,
      "lng": 109.6903
    }
  },
  {
    "id": "br-178",
    "name": "Adira AXI Cabang Pekalongan - Kedungwuni",
    "shortName": "Pekalongan (Kedungwuni)",
    "city": "Pekalongan",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 18, Kedungwuni, Pekalongan",
    "phone": "021-779297",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.87363,
      "lng": 109.67489
    }
  },
  {
    "id": "br-179",
    "name": "Adira AXI Cabang Tegal - Tegal Kota",
    "shortName": "Tegal (Tegal Kota)",
    "city": "Tegal",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 29, Tegal Kota, Tegal",
    "phone": "021-940983",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8694,
      "lng": 109.1552
    }
  },
  {
    "id": "br-180",
    "name": "Adira AXI Cabang Tegal - Slawi",
    "shortName": "Tegal (Slawi)",
    "city": "Tegal",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 40, Slawi, Tegal",
    "phone": "021-249350",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.85443,
      "lng": 109.13979
    }
  },
  {
    "id": "br-181",
    "name": "Adira AXI Cabang Tegal - Adiwerna",
    "shortName": "Tegal (Adiwerna)",
    "city": "Tegal",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Veteran No. 51, Adiwerna, Tegal",
    "phone": "021-615212",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.86171,
      "lng": 109.13275
    }
  },
  {
    "id": "br-182",
    "name": "Adira AXI Cabang Kudus - Kudus Kota",
    "shortName": "Kudus (Kudus Kota)",
    "city": "Kudus",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 62, Kudus Kota, Kudus",
    "phone": "021-722603",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8048,
      "lng": 110.8555
    }
  },
  {
    "id": "br-183",
    "name": "Adira AXI Cabang Kudus - Jati",
    "shortName": "Kudus (Jati)",
    "city": "Kudus",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 73, Jati, Kudus",
    "phone": "021-351724",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.78983,
      "lng": 110.84009
    }
  },
  {
    "id": "br-184",
    "name": "Adira AXI Cabang Pati - Pati Kota",
    "shortName": "Pati (Pati Kota)",
    "city": "Pati",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 84, Pati Kota, Pati",
    "phone": "021-816941",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.7561,
      "lng": 111.0528
    }
  },
  {
    "id": "br-185",
    "name": "Adira AXI Cabang Pati - Juwana",
    "shortName": "Pati (Juwana)",
    "city": "Pati",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 95, Juwana, Pati",
    "phone": "021-689092",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.74113,
      "lng": 111.03739
    }
  },
  {
    "id": "br-186",
    "name": "Adira AXI Cabang Jepara - Jepara Kota",
    "shortName": "Jepara (Jepara Kota)",
    "city": "Jepara",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 106, Jepara Kota, Jepara",
    "phone": "021-334890",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.5925,
      "lng": 110.6939
    }
  },
  {
    "id": "br-187",
    "name": "Adira AXI Cabang Jepara - Tahunan",
    "shortName": "Jepara (Tahunan)",
    "city": "Jepara",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 117, Tahunan, Jepara",
    "phone": "021-749940",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.57753,
      "lng": 110.67849
    }
  },
  {
    "id": "br-188",
    "name": "Adira AXI Cabang Banyumas (Purwokerto) - Purwokerto Timur",
    "shortName": "Banyumas (Purwokerto) (Purwokerto Timur)",
    "city": "Banyumas (Purwokerto)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 128, Purwokerto Timur, Banyumas (Purwokerto)",
    "phone": "021-523031",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.4243,
      "lng": 109.2452
    }
  },
  {
    "id": "br-189",
    "name": "Adira AXI Cabang Banyumas (Purwokerto) - Purwokerto Barat",
    "shortName": "Banyumas (Purwokerto) (Purwokerto Barat)",
    "city": "Banyumas (Purwokerto)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 139, Purwokerto Barat, Banyumas (Purwokerto)",
    "phone": "021-897443",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.40933,
      "lng": 109.22979
    }
  },
  {
    "id": "br-190",
    "name": "Adira AXI Cabang Banyumas (Purwokerto) - Sokaraja",
    "shortName": "Banyumas (Purwokerto) (Sokaraja)",
    "city": "Banyumas (Purwokerto)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 150, Sokaraja, Banyumas (Purwokerto)",
    "phone": "021-671790",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.41661,
      "lng": 109.22275
    }
  },
  {
    "id": "br-191",
    "name": "Adira AXI Cabang Banyumas (Purwokerto) - Ajibarang",
    "shortName": "Banyumas (Purwokerto) (Ajibarang)",
    "city": "Banyumas (Purwokerto)",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 11, Ajibarang, Banyumas (Purwokerto)",
    "phone": "021-675222",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.42703,
      "lng": 109.24872
    }
  },
  {
    "id": "br-192",
    "name": "Adira AXI Cabang Cilacap - Cilacap Kota",
    "shortName": "Cilacap (Cilacap Kota)",
    "city": "Cilacap",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 22, Cilacap Kota, Cilacap",
    "phone": "021-358054",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7028,
      "lng": 109.0292
    }
  },
  {
    "id": "br-193",
    "name": "Adira AXI Cabang Cilacap - Majenang",
    "shortName": "Cilacap (Majenang)",
    "city": "Cilacap",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 33, Majenang, Cilacap",
    "phone": "021-576631",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.68783,
      "lng": 109.01379
    }
  },
  {
    "id": "br-194",
    "name": "Adira AXI Cabang Cilacap - Kroya",
    "shortName": "Cilacap (Kroya)",
    "city": "Cilacap",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 44, Kroya, Cilacap",
    "phone": "021-552404",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.69511,
      "lng": 109.00675
    }
  },
  {
    "id": "br-195",
    "name": "Adira AXI Cabang Kebumen - Kebumen Kota",
    "shortName": "Kebumen (Kebumen Kota)",
    "city": "Kebumen",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 55, Kebumen Kota, Kebumen",
    "phone": "021-926569",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.6706,
      "lng": 109.6736
    }
  },
  {
    "id": "br-196",
    "name": "Adira AXI Cabang Kebumen - Gombong",
    "shortName": "Kebumen (Gombong)",
    "city": "Kebumen",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 66, Gombong, Kebumen",
    "phone": "021-303160",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.65563,
      "lng": 109.65819
    }
  },
  {
    "id": "br-197",
    "name": "Adira AXI Cabang Purworejo - Purworejo Kota",
    "shortName": "Purworejo (Purworejo Kota)",
    "city": "Purworejo",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Veteran No. 77, Purworejo Kota, Purworejo",
    "phone": "021-390819",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.715,
      "lng": 110.0239
    }
  },
  {
    "id": "br-198",
    "name": "Adira AXI Cabang Purworejo - Kutoarjo",
    "shortName": "Purworejo (Kutoarjo)",
    "city": "Purworejo",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 88, Kutoarjo, Purworejo",
    "phone": "021-130642",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.70003,
      "lng": 110.00849
    }
  },
  {
    "id": "br-199",
    "name": "Adira AXI Cabang Klaten - Klaten Kota",
    "shortName": "Klaten (Klaten Kota)",
    "city": "Klaten",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 99, Klaten Kota, Klaten",
    "phone": "021-695444",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7058,
      "lng": 110.6217
    }
  },
  {
    "id": "br-200",
    "name": "Adira AXI Cabang Klaten - Delanggu",
    "shortName": "Klaten (Delanggu)",
    "city": "Klaten",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 110, Delanggu, Klaten",
    "phone": "021-531209",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.69083,
      "lng": 110.60629
    }
  },
  {
    "id": "br-201",
    "name": "Adira AXI Cabang Sukoharjo - Sukoharjo Kota",
    "shortName": "Sukoharjo (Sukoharjo Kota)",
    "city": "Sukoharjo",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 121, Sukoharjo Kota, Sukoharjo",
    "phone": "021-412795",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.6833,
      "lng": 110.8483
    }
  },
  {
    "id": "br-202",
    "name": "Adira AXI Cabang Sukoharjo - Kartasura",
    "shortName": "Sukoharjo (Kartasura)",
    "city": "Sukoharjo",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 132, Kartasura, Sukoharjo",
    "phone": "021-290310",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.66833,
      "lng": 110.83289
    }
  },
  {
    "id": "br-203",
    "name": "Adira AXI Cabang Boyolali - Boyolali Kota",
    "shortName": "Boyolali (Boyolali Kota)",
    "city": "Boyolali",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 143, Boyolali Kota, Boyolali",
    "phone": "021-399518",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.5333,
      "lng": 110.615
    }
  },
  {
    "id": "br-204",
    "name": "Adira AXI Cabang Sragen - Sragen Kota",
    "shortName": "Sragen (Sragen Kota)",
    "city": "Sragen",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 154, Sragen Kota, Sragen",
    "phone": "021-222182",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.4286,
      "lng": 111.0372
    }
  },
  {
    "id": "br-205",
    "name": "Adira AXI Cabang Karanganyar - Karanganyar Kota",
    "shortName": "Karanganyar (Karanganyar Kota)",
    "city": "Karanganyar",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 15, Karanganyar Kota, Karanganyar",
    "phone": "021-914055",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.5969,
      "lng": 110.9664
    }
  },
  {
    "id": "br-206",
    "name": "Adira AXI Cabang Karanganyar - Palur",
    "shortName": "Karanganyar (Palur)",
    "city": "Karanganyar",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 26, Palur, Karanganyar",
    "phone": "021-240240",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.58193,
      "lng": 110.95099
    }
  },
  {
    "id": "br-207",
    "name": "Adira AXI Cabang Wonogiri - Wonogiri Kota",
    "shortName": "Wonogiri (Wonogiri Kota)",
    "city": "Wonogiri",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 37, Wonogiri Kota, Wonogiri",
    "phone": "021-487316",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.8139,
      "lng": 110.9406
    }
  },
  {
    "id": "br-208",
    "name": "Adira AXI Cabang Blora - Blora Kota",
    "shortName": "Blora (Blora Kota)",
    "city": "Blora",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 48, Blora Kota, Blora",
    "phone": "021-892845",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9697,
      "lng": 111.4339
    }
  },
  {
    "id": "br-209",
    "name": "Adira AXI Cabang Blora - Cepu",
    "shortName": "Blora (Cepu)",
    "city": "Blora",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 59, Cepu, Blora",
    "phone": "021-170633",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.95473,
      "lng": 111.41849
    }
  },
  {
    "id": "br-210",
    "name": "Adira AXI Cabang Rembang - Rembang Kota",
    "shortName": "Rembang (Rembang Kota)",
    "city": "Rembang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 70, Rembang Kota, Rembang",
    "phone": "021-975372",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.7117,
      "lng": 111.3564
    }
  },
  {
    "id": "br-211",
    "name": "Adira AXI Cabang Brebes - Brebes Kota",
    "shortName": "Brebes (Brebes Kota)",
    "city": "Brebes",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 81, Brebes Kota, Brebes",
    "phone": "021-888156",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8703,
      "lng": 109.0583
    }
  },
  {
    "id": "br-212",
    "name": "Adira AXI Cabang Brebes - Bumiayu",
    "shortName": "Brebes (Bumiayu)",
    "city": "Brebes",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 92, Bumiayu, Brebes",
    "phone": "021-373555",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.85533,
      "lng": 109.04289
    }
  },
  {
    "id": "br-213",
    "name": "Adira AXI Cabang Pemalang - Pemalang Kota",
    "shortName": "Pemalang (Pemalang Kota)",
    "city": "Pemalang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Veteran No. 103, Pemalang Kota, Pemalang",
    "phone": "021-633310",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8925,
      "lng": 109.395
    }
  },
  {
    "id": "br-214",
    "name": "Adira AXI Cabang Batang - Batang Kota",
    "shortName": "Batang (Batang Kota)",
    "city": "Batang",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 114, Batang Kota, Batang",
    "phone": "021-248921",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9089,
      "lng": 109.7464
    }
  },
  {
    "id": "br-215",
    "name": "Adira AXI Cabang Kendal - Kendal Kota",
    "shortName": "Kendal (Kendal Kota)",
    "city": "Kendal",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 125, Kendal Kota, Kendal",
    "phone": "021-966520",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.9242,
      "lng": 110.2189
    }
  },
  {
    "id": "br-216",
    "name": "Adira AXI Cabang Kendal - Weleri",
    "shortName": "Kendal (Weleri)",
    "city": "Kendal",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 136, Weleri, Kendal",
    "phone": "021-256100",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.90923,
      "lng": 110.20349
    }
  },
  {
    "id": "br-217",
    "name": "Adira AXI Cabang Demak - Demak Kota",
    "shortName": "Demak (Demak Kota)",
    "city": "Demak",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 147, Demak Kota, Demak",
    "phone": "021-892120",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8944,
      "lng": 110.6539
    }
  },
  {
    "id": "br-218",
    "name": "Adira AXI Cabang Grobogan - Purwodadi",
    "shortName": "Grobogan (Purwodadi)",
    "city": "Grobogan",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 158, Purwodadi, Grobogan",
    "phone": "021-366281",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.0911,
      "lng": 110.9317
    }
  },
  {
    "id": "br-219",
    "name": "Adira AXI Cabang Temanggung - Temanggung Kota",
    "shortName": "Temanggung (Temanggung Kota)",
    "city": "Temanggung",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 19, Temanggung Kota, Temanggung",
    "phone": "021-227249",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3167,
      "lng": 110.1817
    }
  },
  {
    "id": "br-220",
    "name": "Adira AXI Cabang Wonosobo - Wonosobo Kota",
    "shortName": "Wonosobo (Wonosobo Kota)",
    "city": "Wonosobo",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 30, Wonosobo Kota, Wonosobo",
    "phone": "021-304403",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3614,
      "lng": 109.915
    }
  },
  {
    "id": "br-221",
    "name": "Adira AXI Cabang Purbalingga - Purbalingga Kota",
    "shortName": "Purbalingga (Purbalingga Kota)",
    "city": "Purbalingga",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 41, Purbalingga Kota, Purbalingga",
    "phone": "021-638109",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3889,
      "lng": 109.3789
    }
  },
  {
    "id": "br-222",
    "name": "Adira AXI Cabang Banjarnegara - Banjarnegara Kota",
    "shortName": "Banjarnegara (Banjarnegara Kota)",
    "city": "Banjarnegara",
    "province": "Jawa Tengah",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 52, Banjarnegara Kota, Banjarnegara",
    "phone": "021-330740",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.3978,
      "lng": 109.7122
    }
  },
  {
    "id": "br-223",
    "name": "Adira AXI Cabang Kota Yogyakarta - Malioboro",
    "shortName": "Kota Yogyakarta (Malioboro)",
    "city": "Kota Yogyakarta",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 63, Malioboro, Kota Yogyakarta",
    "phone": "021-866729",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7956,
      "lng": 110.3845
    }
  },
  {
    "id": "br-224",
    "name": "Adira AXI Cabang Kota Yogyakarta - Kotabaru",
    "shortName": "Kota Yogyakarta (Kotabaru)",
    "city": "Kota Yogyakarta",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 74, Kotabaru, Kota Yogyakarta",
    "phone": "021-994633",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.78063,
      "lng": 110.36909
    }
  },
  {
    "id": "br-225",
    "name": "Adira AXI Cabang Kota Yogyakarta - Umbulharjo",
    "shortName": "Kota Yogyakarta (Umbulharjo)",
    "city": "Kota Yogyakarta",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 85, Umbulharjo, Kota Yogyakarta",
    "phone": "021-432834",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.78791,
      "lng": 110.36205
    }
  },
  {
    "id": "br-226",
    "name": "Adira AXI Cabang Kota Yogyakarta - Mantrijeron",
    "shortName": "Kota Yogyakarta (Mantrijeron)",
    "city": "Kota Yogyakarta",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 96, Mantrijeron, Kota Yogyakarta",
    "phone": "021-126396",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.79833,
      "lng": 110.38802
    }
  },
  {
    "id": "br-227",
    "name": "Adira AXI Cabang Sleman - Jalan Magelang",
    "shortName": "Sleman (Jalan Magelang)",
    "city": "Sleman",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 107, Jalan Magelang, Sleman",
    "phone": "021-639620",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7167,
      "lng": 110.3706
    }
  },
  {
    "id": "br-228",
    "name": "Adira AXI Cabang Sleman - Gejayan",
    "shortName": "Sleman (Gejayan)",
    "city": "Sleman",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 118, Gejayan, Sleman",
    "phone": "021-602332",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.70173,
      "lng": 110.35519
    }
  },
  {
    "id": "br-229",
    "name": "Adira AXI Cabang Sleman - Godean",
    "shortName": "Sleman (Godean)",
    "city": "Sleman",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 129, Godean, Sleman",
    "phone": "021-245432",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.70901,
      "lng": 110.34815
    }
  },
  {
    "id": "br-230",
    "name": "Adira AXI Cabang Sleman - Depok Sleman",
    "shortName": "Sleman (Depok Sleman)",
    "city": "Sleman",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 140, Depok Sleman, Sleman",
    "phone": "021-839740",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.71943,
      "lng": 110.37412
    }
  },
  {
    "id": "br-231",
    "name": "Adira AXI Cabang Bantul - Bantul Kota",
    "shortName": "Bantul (Bantul Kota)",
    "city": "Bantul",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 151, Bantul Kota, Bantul",
    "phone": "021-850486",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.8894,
      "lng": 110.3442
    }
  },
  {
    "id": "br-232",
    "name": "Adira AXI Cabang Bantul - Sewon",
    "shortName": "Bantul (Sewon)",
    "city": "Bantul",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 12, Sewon, Bantul",
    "phone": "021-326965",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.87443,
      "lng": 110.32879
    }
  },
  {
    "id": "br-233",
    "name": "Adira AXI Cabang Bantul - Kasihan",
    "shortName": "Bantul (Kasihan)",
    "city": "Bantul",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 23, Kasihan, Bantul",
    "phone": "021-646490",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.88171,
      "lng": 110.32175
    }
  },
  {
    "id": "br-234",
    "name": "Adira AXI Cabang Kulon Progo - Wates",
    "shortName": "Kulon Progo (Wates)",
    "city": "Kulon Progo",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 34, Wates, Kulon Progo",
    "phone": "021-896446",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.8258,
      "lng": 110.1733
    }
  },
  {
    "id": "br-235",
    "name": "Adira AXI Cabang Kulon Progo - Sentolo",
    "shortName": "Kulon Progo (Sentolo)",
    "city": "Kulon Progo",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 45, Sentolo, Kulon Progo",
    "phone": "021-388844",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.81083,
      "lng": 110.15789
    }
  },
  {
    "id": "br-236",
    "name": "Adira AXI Cabang Gunungkidul - Wonosari",
    "shortName": "Gunungkidul (Wonosari)",
    "city": "Gunungkidul",
    "province": "DI Yogyakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 56, Wonosari, Gunungkidul",
    "phone": "021-840719",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.9656,
      "lng": 110.6183
    }
  },
  {
    "id": "br-237",
    "name": "Adira AXI Cabang Kota Surabaya - Mayjen Sungkono",
    "shortName": "Kota Surabaya (Mayjen Sungkono)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 67, Mayjen Sungkono, Kota Surabaya",
    "phone": "021-427387",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.2575,
      "lng": 112.7671
    }
  },
  {
    "id": "br-238",
    "name": "Adira AXI Cabang Kota Surabaya - Gubeng",
    "shortName": "Kota Surabaya (Gubeng)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 78, Gubeng, Kota Surabaya",
    "phone": "021-760230",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.24253,
      "lng": 112.75169
    }
  },
  {
    "id": "br-239",
    "name": "Adira AXI Cabang Kota Surabaya - Wiyung",
    "shortName": "Kota Surabaya (Wiyung)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 89, Wiyung, Kota Surabaya",
    "phone": "021-868464",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.24981,
      "lng": 112.74465
    }
  },
  {
    "id": "br-240",
    "name": "Adira AXI Cabang Kota Surabaya - Rungkut",
    "shortName": "Kota Surabaya (Rungkut)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 100, Rungkut, Kota Surabaya",
    "phone": "021-631780",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.26023,
      "lng": 112.77062
    }
  },
  {
    "id": "br-241",
    "name": "Adira AXI Cabang Kota Surabaya - Kenjeran",
    "shortName": "Kota Surabaya (Kenjeran)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 111, Kenjeran, Kota Surabaya",
    "phone": "021-198267",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.24885,
      "lng": 112.77323
    }
  },
  {
    "id": "br-242",
    "name": "Adira AXI Cabang Kota Surabaya - Tandes",
    "shortName": "Kota Surabaya (Tandes)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 122, Tandes, Kota Surabaya",
    "phone": "021-204876",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.23124,
      "lng": 112.75343
    }
  },
  {
    "id": "br-243",
    "name": "Adira AXI Cabang Kota Surabaya - Kertajaya",
    "shortName": "Kota Surabaya (Kertajaya)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 133, Kertajaya, Kota Surabaya",
    "phone": "021-962356",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.23455,
      "lng": 112.76719
    }
  },
  {
    "id": "br-244",
    "name": "Adira AXI Cabang Kota Surabaya - Ngagel",
    "shortName": "Kota Surabaya (Ngagel)",
    "city": "Kota Surabaya",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 144, Ngagel, Kota Surabaya",
    "phone": "021-219547",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.24706,
      "lng": 112.78809
    }
  },
  {
    "id": "br-245",
    "name": "Adira AXI Cabang Sidoarjo - Sidoarjo Kota",
    "shortName": "Sidoarjo (Sidoarjo Kota)",
    "city": "Sidoarjo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Veteran No. 155, Sidoarjo Kota, Sidoarjo",
    "phone": "021-751021",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.4478,
      "lng": 112.7333
    }
  },
  {
    "id": "br-246",
    "name": "Adira AXI Cabang Sidoarjo - Waru",
    "shortName": "Sidoarjo (Waru)",
    "city": "Sidoarjo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 16, Waru, Sidoarjo",
    "phone": "021-443271",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.43283,
      "lng": 112.71789
    }
  },
  {
    "id": "br-247",
    "name": "Adira AXI Cabang Sidoarjo - Krian",
    "shortName": "Sidoarjo (Krian)",
    "city": "Sidoarjo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 27, Krian, Sidoarjo",
    "phone": "021-738693",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.44011,
      "lng": 112.71085
    }
  },
  {
    "id": "br-248",
    "name": "Adira AXI Cabang Sidoarjo - Taman",
    "shortName": "Sidoarjo (Taman)",
    "city": "Sidoarjo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 38, Taman, Sidoarjo",
    "phone": "021-490555",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.45053,
      "lng": 112.73682
    }
  },
  {
    "id": "br-249",
    "name": "Adira AXI Cabang Sidoarjo - Candi",
    "shortName": "Sidoarjo (Candi)",
    "city": "Sidoarjo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 49, Candi, Sidoarjo",
    "phone": "021-283125",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.43915,
      "lng": 112.73943
    }
  },
  {
    "id": "br-250",
    "name": "Adira AXI Cabang Gresik - Gresik Kota",
    "shortName": "Gresik (Gresik Kota)",
    "city": "Gresik",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 60, Gresik Kota, Gresik",
    "phone": "021-336330",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.1564,
      "lng": 112.6706
    }
  },
  {
    "id": "br-251",
    "name": "Adira AXI Cabang Gresik - Kebomas",
    "shortName": "Gresik (Kebomas)",
    "city": "Gresik",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 71, Kebomas, Gresik",
    "phone": "021-953523",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.14143,
      "lng": 112.65519
    }
  },
  {
    "id": "br-252",
    "name": "Adira AXI Cabang Gresik - Driyorejo",
    "shortName": "Gresik (Driyorejo)",
    "city": "Gresik",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 82, Driyorejo, Gresik",
    "phone": "021-261041",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.14871,
      "lng": 112.64815
    }
  },
  {
    "id": "br-253",
    "name": "Adira AXI Cabang Kota Malang - Sutoyo Malang",
    "shortName": "Kota Malang (Sutoyo Malang)",
    "city": "Kota Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 93, Sutoyo Malang, Kota Malang",
    "phone": "021-141655",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.9797,
      "lng": 112.6454
    }
  },
  {
    "id": "br-254",
    "name": "Adira AXI Cabang Kota Malang - Klojen",
    "shortName": "Kota Malang (Klojen)",
    "city": "Kota Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 104, Klojen, Kota Malang",
    "phone": "021-456116",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.96473,
      "lng": 112.62999
    }
  },
  {
    "id": "br-255",
    "name": "Adira AXI Cabang Kota Malang - Blimbing",
    "shortName": "Kota Malang (Blimbing)",
    "city": "Kota Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 115, Blimbing, Kota Malang",
    "phone": "021-875583",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.97201,
      "lng": 112.62295
    }
  },
  {
    "id": "br-256",
    "name": "Adira AXI Cabang Kota Malang - Sukun",
    "shortName": "Kota Malang (Sukun)",
    "city": "Kota Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 126, Sukun, Kota Malang",
    "phone": "021-310025",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.98243,
      "lng": 112.64892
    }
  },
  {
    "id": "br-257",
    "name": "Adira AXI Cabang Kota Malang - Lowokwaru",
    "shortName": "Kota Malang (Lowokwaru)",
    "city": "Kota Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 137, Lowokwaru, Kota Malang",
    "phone": "021-148968",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.97105,
      "lng": 112.65153
    }
  },
  {
    "id": "br-258",
    "name": "Adira AXI Cabang Kabupaten Malang - Kepanjen",
    "shortName": "Kabupaten Malang (Kepanjen)",
    "city": "Kabupaten Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 148, Kepanjen, Kabupaten Malang",
    "phone": "021-756818",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.1306,
      "lng": 112.5864
    }
  },
  {
    "id": "br-259",
    "name": "Adira AXI Cabang Kabupaten Malang - Singosari",
    "shortName": "Kabupaten Malang (Singosari)",
    "city": "Kabupaten Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 159, Singosari, Kabupaten Malang",
    "phone": "021-789873",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.11563,
      "lng": 112.57099
    }
  },
  {
    "id": "br-260",
    "name": "Adira AXI Cabang Kabupaten Malang - Turen",
    "shortName": "Kabupaten Malang (Turen)",
    "city": "Kabupaten Malang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 20, Turen, Kabupaten Malang",
    "phone": "021-355424",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.12291,
      "lng": 112.56395
    }
  },
  {
    "id": "br-261",
    "name": "Adira AXI Cabang Kota Batu - Batu Kota",
    "shortName": "Kota Batu (Batu Kota)",
    "city": "Kota Batu",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Veteran No. 31, Batu Kota, Kota Batu",
    "phone": "021-179801",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.8711,
      "lng": 112.5422
    }
  },
  {
    "id": "br-262",
    "name": "Adira AXI Cabang Kota Kediri - Daha Kediri",
    "shortName": "Kota Kediri (Daha Kediri)",
    "city": "Kota Kediri",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 42, Daha Kediri, Kota Kediri",
    "phone": "021-845710",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.8167,
      "lng": 112.0317
    }
  },
  {
    "id": "br-263",
    "name": "Adira AXI Cabang Kota Kediri - Mojoroto",
    "shortName": "Kota Kediri (Mojoroto)",
    "city": "Kota Kediri",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 53, Mojoroto, Kota Kediri",
    "phone": "021-728085",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.80173,
      "lng": 112.01629
    }
  },
  {
    "id": "br-264",
    "name": "Adira AXI Cabang Kabupaten Kediri - Pare",
    "shortName": "Kabupaten Kediri (Pare)",
    "city": "Kabupaten Kediri",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 64, Pare, Kabupaten Kediri",
    "phone": "021-891455",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.75,
      "lng": 112.1817
    }
  },
  {
    "id": "br-265",
    "name": "Adira AXI Cabang Kabupaten Kediri - Ngadiluwih",
    "shortName": "Kabupaten Kediri (Ngadiluwih)",
    "city": "Kabupaten Kediri",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 75, Ngadiluwih, Kabupaten Kediri",
    "phone": "021-264501",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.73503,
      "lng": 112.16629
    }
  },
  {
    "id": "br-266",
    "name": "Adira AXI Cabang Kota Madiun - Madiun Pahlawan",
    "shortName": "Kota Madiun (Madiun Pahlawan)",
    "city": "Kota Madiun",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 86, Madiun Pahlawan, Kota Madiun",
    "phone": "021-868015",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.6298,
      "lng": 111.5389
    }
  },
  {
    "id": "br-267",
    "name": "Adira AXI Cabang Kota Madiun - Kartoharjo",
    "shortName": "Kota Madiun (Kartoharjo)",
    "city": "Kota Madiun",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 97, Kartoharjo, Kota Madiun",
    "phone": "021-296080",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.61483,
      "lng": 111.52349
    }
  },
  {
    "id": "br-268",
    "name": "Adira AXI Cabang Kabupaten Madiun - Caruban",
    "shortName": "Kabupaten Madiun (Caruban)",
    "city": "Kabupaten Madiun",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 108, Caruban, Kabupaten Madiun",
    "phone": "021-965032",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.55,
      "lng": 111.665
    }
  },
  {
    "id": "br-269",
    "name": "Adira AXI Cabang Jember - Jember Kota",
    "shortName": "Jember (Jember Kota)",
    "city": "Jember",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 119, Jember Kota, Jember",
    "phone": "021-408483",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.1724,
      "lng": 113.7145
    }
  },
  {
    "id": "br-270",
    "name": "Adira AXI Cabang Jember - Kaliwates",
    "shortName": "Jember (Kaliwates)",
    "city": "Jember",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 130, Kaliwates, Jember",
    "phone": "021-297804",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.15743,
      "lng": 113.69909
    }
  },
  {
    "id": "br-271",
    "name": "Adira AXI Cabang Jember - Tanggul",
    "shortName": "Jember (Tanggul)",
    "city": "Jember",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 141, Tanggul, Jember",
    "phone": "021-614147",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.16471,
      "lng": 113.69205
    }
  },
  {
    "id": "br-272",
    "name": "Adira AXI Cabang Banyuwangi - Banyuwangi Kota",
    "shortName": "Banyuwangi (Banyuwangi Kota)",
    "city": "Banyuwangi",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 152, Banyuwangi Kota, Banyuwangi",
    "phone": "021-854152",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.2192,
      "lng": 114.3842
    }
  },
  {
    "id": "br-273",
    "name": "Adira AXI Cabang Banyuwangi - Genteng",
    "shortName": "Banyuwangi (Genteng)",
    "city": "Banyuwangi",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 13, Genteng, Banyuwangi",
    "phone": "021-621350",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.20423,
      "lng": 114.36879
    }
  },
  {
    "id": "br-274",
    "name": "Adira AXI Cabang Banyuwangi - Rogojampi",
    "shortName": "Banyuwangi (Rogojampi)",
    "city": "Banyuwangi",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 24, Rogojampi, Banyuwangi",
    "phone": "021-109933",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.21151,
      "lng": 114.36175
    }
  },
  {
    "id": "br-275",
    "name": "Adira AXI Cabang Mojokerto - Mojokerto Gajah Mada",
    "shortName": "Mojokerto (Mojokerto Gajah Mada)",
    "city": "Mojokerto",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 35, Mojokerto Gajah Mada, Mojokerto",
    "phone": "021-455997",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.4722,
      "lng": 112.4489
    }
  },
  {
    "id": "br-276",
    "name": "Adira AXI Cabang Mojokerto - Mojosari",
    "shortName": "Mojokerto (Mojosari)",
    "city": "Mojokerto",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 46, Mojosari, Mojokerto",
    "phone": "021-805403",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.45723,
      "lng": 112.43349
    }
  },
  {
    "id": "br-277",
    "name": "Adira AXI Cabang Pasuruan - Pasuruan Kota",
    "shortName": "Pasuruan (Pasuruan Kota)",
    "city": "Pasuruan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Veteran No. 57, Pasuruan Kota, Pasuruan",
    "phone": "021-655796",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.6469,
      "lng": 112.9228
    }
  },
  {
    "id": "br-278",
    "name": "Adira AXI Cabang Pasuruan - Bangil",
    "shortName": "Pasuruan (Bangil)",
    "city": "Pasuruan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 68, Bangil, Pasuruan",
    "phone": "021-699145",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.63193,
      "lng": 112.90739
    }
  },
  {
    "id": "br-279",
    "name": "Adira AXI Cabang Pasuruan - Pandaan",
    "shortName": "Pasuruan (Pandaan)",
    "city": "Pasuruan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 79, Pandaan, Pasuruan",
    "phone": "021-381407",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.63921,
      "lng": 112.90035
    }
  },
  {
    "id": "br-280",
    "name": "Adira AXI Cabang Probolinggo - Probolinggo Kota",
    "shortName": "Probolinggo (Probolinggo Kota)",
    "city": "Probolinggo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 90, Probolinggo Kota, Probolinggo",
    "phone": "021-544500",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7544,
      "lng": 113.2308
    }
  },
  {
    "id": "br-281",
    "name": "Adira AXI Cabang Probolinggo - Kraksaan",
    "shortName": "Probolinggo (Kraksaan)",
    "city": "Probolinggo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 101, Kraksaan, Probolinggo",
    "phone": "021-251873",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.73943,
      "lng": 113.21539
    }
  },
  {
    "id": "br-282",
    "name": "Adira AXI Cabang Blitar - Blitar Merdeka",
    "shortName": "Blitar (Blitar Merdeka)",
    "city": "Blitar",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 112, Blitar Merdeka, Blitar",
    "phone": "021-996517",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.0983,
      "lng": 112.1831
    }
  },
  {
    "id": "br-283",
    "name": "Adira AXI Cabang Blitar - Wlingi",
    "shortName": "Blitar (Wlingi)",
    "city": "Blitar",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 123, Wlingi, Blitar",
    "phone": "021-391563",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.08333,
      "lng": 112.16769
    }
  },
  {
    "id": "br-284",
    "name": "Adira AXI Cabang Tulungagung - Tulungagung Kota",
    "shortName": "Tulungagung (Tulungagung Kota)",
    "city": "Tulungagung",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 134, Tulungagung Kota, Tulungagung",
    "phone": "021-245422",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.0667,
      "lng": 111.915
    }
  },
  {
    "id": "br-285",
    "name": "Adira AXI Cabang Tulungagung - Ngunut",
    "shortName": "Tulungagung (Ngunut)",
    "city": "Tulungagung",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 145, Ngunut, Tulungagung",
    "phone": "021-959610",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.05173,
      "lng": 111.89959
    }
  },
  {
    "id": "br-286",
    "name": "Adira AXI Cabang Trenggalek - Trenggalek Kota",
    "shortName": "Trenggalek (Trenggalek Kota)",
    "city": "Trenggalek",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 156, Trenggalek Kota, Trenggalek",
    "phone": "021-961316",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.05,
      "lng": 111.7317
    }
  },
  {
    "id": "br-287",
    "name": "Adira AXI Cabang Ponorogo - Ponorogo Kota",
    "shortName": "Ponorogo (Ponorogo Kota)",
    "city": "Ponorogo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 17, Ponorogo Kota, Ponorogo",
    "phone": "021-360556",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.8667,
      "lng": 111.4817
    }
  },
  {
    "id": "br-288",
    "name": "Adira AXI Cabang Magetan - Magetan Kota",
    "shortName": "Magetan (Magetan Kota)",
    "city": "Magetan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 28, Magetan Kota, Magetan",
    "phone": "021-326639",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.65,
      "lng": 111.3483
    }
  },
  {
    "id": "br-289",
    "name": "Adira AXI Cabang Ngawi - Ngawi Kota",
    "shortName": "Ngawi (Ngawi Kota)",
    "city": "Ngawi",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 39, Ngawi Kota, Ngawi",
    "phone": "021-917004",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.4042,
      "lng": 111.4606
    }
  },
  {
    "id": "br-290",
    "name": "Adira AXI Cabang Bojonegoro - Bojonegoro Kota",
    "shortName": "Bojonegoro (Bojonegoro Kota)",
    "city": "Bojonegoro",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 50, Bojonegoro Kota, Bojonegoro",
    "phone": "021-238732",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.15,
      "lng": 111.8983
    }
  },
  {
    "id": "br-291",
    "name": "Adira AXI Cabang Tuban - Tuban Basuki Rahmat",
    "shortName": "Tuban (Tuban Basuki Rahmat)",
    "city": "Tuban",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 61, Tuban Basuki Rahmat, Tuban",
    "phone": "021-162849",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.8978,
      "lng": 112.0797
    }
  },
  {
    "id": "br-292",
    "name": "Adira AXI Cabang Lamongan - Lamongan Kota",
    "shortName": "Lamongan (Lamongan Kota)",
    "city": "Lamongan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 72, Lamongan Kota, Lamongan",
    "phone": "021-785029",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.1197,
      "lng": 112.4303
    }
  },
  {
    "id": "br-293",
    "name": "Adira AXI Cabang Lamongan - Babat",
    "shortName": "Lamongan (Babat)",
    "city": "Lamongan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Veteran No. 83, Babat, Lamongan",
    "phone": "021-613955",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.10473,
      "lng": 112.41489
    }
  },
  {
    "id": "br-294",
    "name": "Adira AXI Cabang Jombang - Jombang Wahid Hasyim",
    "shortName": "Jombang (Jombang Wahid Hasyim)",
    "city": "Jombang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 94, Jombang Wahid Hasyim, Jombang",
    "phone": "021-378868",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.5461,
      "lng": 112.2481
    }
  },
  {
    "id": "br-295",
    "name": "Adira AXI Cabang Nganjuk - Nganjuk Kota",
    "shortName": "Nganjuk (Nganjuk Kota)",
    "city": "Nganjuk",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 105, Nganjuk Kota, Nganjuk",
    "phone": "021-680360",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.6044,
      "lng": 111.9189
    }
  },
  {
    "id": "br-296",
    "name": "Adira AXI Cabang Nganjuk - Kertosono",
    "shortName": "Nganjuk (Kertosono)",
    "city": "Nganjuk",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 116, Kertosono, Nganjuk",
    "phone": "021-825846",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.58943,
      "lng": 111.90349
    }
  },
  {
    "id": "br-297",
    "name": "Adira AXI Cabang Lumajang - Lumajang Kota",
    "shortName": "Lumajang (Lumajang Kota)",
    "city": "Lumajang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 127, Lumajang Kota, Lumajang",
    "phone": "021-444813",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.1333,
      "lng": 113.2317
    }
  },
  {
    "id": "br-298",
    "name": "Adira AXI Cabang Bondowoso - Bondowoso Kota",
    "shortName": "Bondowoso (Bondowoso Kota)",
    "city": "Bondowoso",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 138, Bondowoso Kota, Bondowoso",
    "phone": "021-338150",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.9139,
      "lng": 113.8364
    }
  },
  {
    "id": "br-299",
    "name": "Adira AXI Cabang Situbondo - Situbondo Kota",
    "shortName": "Situbondo (Situbondo Kota)",
    "city": "Situbondo",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 149, Situbondo Kota, Situbondo",
    "phone": "021-767320",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.7064,
      "lng": 114.0206
    }
  },
  {
    "id": "br-300",
    "name": "Adira AXI Cabang Bangkalan - Bangkalan Kota",
    "shortName": "Bangkalan (Bangkalan Kota)",
    "city": "Bangkalan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 10, Bangkalan Kota, Bangkalan",
    "phone": "021-355824",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.0306,
      "lng": 112.7633
    }
  },
  {
    "id": "br-301",
    "name": "Adira AXI Cabang Sampang - Sampang Kota",
    "shortName": "Sampang (Sampang Kota)",
    "city": "Sampang",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 21, Sampang Kota, Sampang",
    "phone": "021-680268",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.1878,
      "lng": 113.2544
    }
  },
  {
    "id": "br-302",
    "name": "Adira AXI Cabang Pamekasan - Pamekasan Kota",
    "shortName": "Pamekasan (Pamekasan Kota)",
    "city": "Pamekasan",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 32, Pamekasan Kota, Pamekasan",
    "phone": "021-931849",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.16,
      "lng": 113.4906
    }
  },
  {
    "id": "br-303",
    "name": "Adira AXI Cabang Sumenep - Sumenep Trunojoyo",
    "shortName": "Sumenep (Sumenep Trunojoyo)",
    "city": "Sumenep",
    "province": "Jawa Timur",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 43, Sumenep Trunojoyo, Sumenep",
    "phone": "021-683379",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -7.0167,
      "lng": 113.8817
    }
  },
  {
    "id": "br-304",
    "name": "Adira AXI Cabang Banda Aceh - Kuta Alam",
    "shortName": "Banda Aceh (Kuta Alam)",
    "city": "Banda Aceh",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Jend. Sudirman No. 54, Kuta Alam, Banda Aceh",
    "phone": "021-481200",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 5.5483,
      "lng": 95.3388
    }
  },
  {
    "id": "br-305",
    "name": "Adira AXI Cabang Banda Aceh - Baiturrahman",
    "shortName": "Banda Aceh (Baiturrahman)",
    "city": "Banda Aceh",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Ahmad Yani No. 65, Baiturrahman, Banda Aceh",
    "phone": "021-960381",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 5.56327,
      "lng": 95.32339
    }
  },
  {
    "id": "br-306",
    "name": "Adira AXI Cabang Banda Aceh - Ulee Kareng",
    "shortName": "Banda Aceh (Ulee Kareng)",
    "city": "Banda Aceh",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Gatot Subroto No. 76, Ulee Kareng, Banda Aceh",
    "phone": "021-930318",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 5.55599,
      "lng": 95.31635
    }
  },
  {
    "id": "br-307",
    "name": "Adira AXI Cabang Lhokseumawe - Banda Sakti",
    "shortName": "Lhokseumawe (Banda Sakti)",
    "city": "Lhokseumawe",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Diponegoro No. 87, Banda Sakti, Lhokseumawe",
    "phone": "021-755841",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 5.18,
      "lng": 97.155
    }
  },
  {
    "id": "br-308",
    "name": "Adira AXI Cabang Lhokseumawe - Muara Dua",
    "shortName": "Lhokseumawe (Muara Dua)",
    "city": "Lhokseumawe",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Gajah Mada No. 98, Muara Dua, Lhokseumawe",
    "phone": "021-893930",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 5.19497,
      "lng": 97.13959
    }
  },
  {
    "id": "br-309",
    "name": "Adira AXI Cabang Langsa - Langsa Kota",
    "shortName": "Langsa (Langsa Kota)",
    "city": "Langsa",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Veteran No. 109, Langsa Kota, Langsa",
    "phone": "021-988443",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 4.4719,
      "lng": 97.9833
    }
  },
  {
    "id": "br-310",
    "name": "Adira AXI Cabang Meulaboh - Johan Pahlawan",
    "shortName": "Meulaboh (Johan Pahlawan)",
    "city": "Meulaboh",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Pahlawan No. 120, Johan Pahlawan, Meulaboh",
    "phone": "021-519948",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 4.1439,
      "lng": 96.1414
    }
  },
  {
    "id": "br-311",
    "name": "Adira AXI Cabang Bireuen - Kota Juang",
    "shortName": "Bireuen (Kota Juang)",
    "city": "Bireuen",
    "province": "Aceh",
    "region": "Sumatera",
    "address": "Jl. Hayam Wuruk No. 131, Kota Juang, Bireuen",
    "phone": "021-670743",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 5.2033,
      "lng": 96.7161
    }
  },
  {
    "id": "br-312",
    "name": "Adira AXI Cabang Medan - Gatot Subroto",
    "shortName": "Medan (Gatot Subroto)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Pemuda No. 142, Gatot Subroto, Medan",
    "phone": "021-335859",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.5952,
      "lng": 98.6872
    }
  },
  {
    "id": "br-313",
    "name": "Adira AXI Cabang Medan - Katamso",
    "shortName": "Medan (Katamso)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Basuki Rahmat No. 153, Katamso, Medan",
    "phone": "021-639349",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.61017,
      "lng": 98.67179
    }
  },
  {
    "id": "br-314",
    "name": "Adira AXI Cabang Medan - Amplas",
    "shortName": "Medan (Amplas)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Teuku Umar No. 14, Amplas, Medan",
    "phone": "021-793324",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.60289,
      "lng": 98.66475
    }
  },
  {
    "id": "br-315",
    "name": "Adira AXI Cabang Medan - Helvetia",
    "shortName": "Medan (Helvetia)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Merdeka No. 25, Helvetia, Medan",
    "phone": "021-225030",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.59247,
      "lng": 98.69072
    }
  },
  {
    "id": "br-316",
    "name": "Adira AXI Cabang Medan - Marelan",
    "shortName": "Medan (Marelan)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Hasanuddin No. 36, Marelan, Medan",
    "phone": "021-736648",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.60385,
      "lng": 98.69333
    }
  },
  {
    "id": "br-317",
    "name": "Adira AXI Cabang Medan - Tembung",
    "shortName": "Medan (Tembung)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Pattimura No. 47, Tembung, Medan",
    "phone": "021-144236",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.62146,
      "lng": 98.67353
    }
  },
  {
    "id": "br-318",
    "name": "Adira AXI Cabang Medan - Padang Bulan",
    "shortName": "Medan (Padang Bulan)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. RA Kartini No. 58, Padang Bulan, Medan",
    "phone": "021-611335",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.61815,
      "lng": 98.68729
    }
  },
  {
    "id": "br-319",
    "name": "Adira AXI Cabang Medan - Medan Denai",
    "shortName": "Medan (Medan Denai)",
    "city": "Medan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. MT Haryono No. 69, Medan Denai, Medan",
    "phone": "021-442817",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.60564,
      "lng": 98.70819
    }
  },
  {
    "id": "br-320",
    "name": "Adira AXI Cabang Deli Serdang - Lubuk Pakam",
    "shortName": "Deli Serdang (Lubuk Pakam)",
    "city": "Deli Serdang",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Jend. Sudirman No. 80, Lubuk Pakam, Deli Serdang",
    "phone": "021-967194",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.5592,
      "lng": 98.8933
    }
  },
  {
    "id": "br-321",
    "name": "Adira AXI Cabang Deli Serdang - Tanjung Morawa",
    "shortName": "Deli Serdang (Tanjung Morawa)",
    "city": "Deli Serdang",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Ahmad Yani No. 91, Tanjung Morawa, Deli Serdang",
    "phone": "021-985464",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.57417,
      "lng": 98.87789
    }
  },
  {
    "id": "br-322",
    "name": "Adira AXI Cabang Deli Serdang - Sunggal",
    "shortName": "Deli Serdang (Sunggal)",
    "city": "Deli Serdang",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Gatot Subroto No. 102, Sunggal, Deli Serdang",
    "phone": "021-448919",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.56689,
      "lng": 98.87085
    }
  },
  {
    "id": "br-323",
    "name": "Adira AXI Cabang Binjai - Binjai Kota",
    "shortName": "Binjai (Binjai Kota)",
    "city": "Binjai",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Diponegoro No. 113, Binjai Kota, Binjai",
    "phone": "021-602466",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.5986,
      "lng": 98.5003
    }
  },
  {
    "id": "br-324",
    "name": "Adira AXI Cabang Binjai - Binjai Barat",
    "shortName": "Binjai (Binjai Barat)",
    "city": "Binjai",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Gajah Mada No. 124, Binjai Barat, Binjai",
    "phone": "021-320841",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.61357,
      "lng": 98.48489
    }
  },
  {
    "id": "br-325",
    "name": "Adira AXI Cabang Pematangsiantar - Siantar Barat",
    "shortName": "Pematangsiantar (Siantar Barat)",
    "city": "Pematangsiantar",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Veteran No. 135, Siantar Barat, Pematangsiantar",
    "phone": "021-355804",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 2.9592,
      "lng": 99.0833
    }
  },
  {
    "id": "br-326",
    "name": "Adira AXI Cabang Pematangsiantar - Siantar Timur",
    "shortName": "Pematangsiantar (Siantar Timur)",
    "city": "Pematangsiantar",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Pahlawan No. 146, Siantar Timur, Pematangsiantar",
    "phone": "021-980199",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 2.97417,
      "lng": 99.06789
    }
  },
  {
    "id": "br-327",
    "name": "Adira AXI Cabang Tebing Tinggi - Tebing Tinggi Kota",
    "shortName": "Tebing Tinggi (Tebing Tinggi Kota)",
    "city": "Tebing Tinggi",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Hayam Wuruk No. 157, Tebing Tinggi Kota, Tebing Tinggi",
    "phone": "021-317322",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.3283,
      "lng": 99.1775
    }
  },
  {
    "id": "br-328",
    "name": "Adira AXI Cabang Kisaran - Kisaran Barat",
    "shortName": "Kisaran (Kisaran Barat)",
    "city": "Kisaran",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Pemuda No. 18, Kisaran Barat, Kisaran",
    "phone": "021-419091",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 2.9833,
      "lng": 99.6317
    }
  },
  {
    "id": "br-329",
    "name": "Adira AXI Cabang Rantau Prapat - Rantau Utara",
    "shortName": "Rantau Prapat (Rantau Utara)",
    "city": "Rantau Prapat",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Basuki Rahmat No. 29, Rantau Utara, Rantau Prapat",
    "phone": "021-617387",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 2.0967,
      "lng": 99.8422
    }
  },
  {
    "id": "br-330",
    "name": "Adira AXI Cabang Padang Sidempuan - Padang Sidempuan Utara",
    "shortName": "Padang Sidempuan (Padang Sidempuan Utara)",
    "city": "Padang Sidempuan",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Teuku Umar No. 40, Padang Sidempuan Utara, Padang Sidempuan",
    "phone": "021-826090",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.3739,
      "lng": 99.2864
    }
  },
  {
    "id": "br-331",
    "name": "Adira AXI Cabang Kabanjahe - Kabanjahe",
    "shortName": "Kabanjahe (Kabanjahe)",
    "city": "Kabanjahe",
    "province": "Sumatera Utara",
    "region": "Sumatera",
    "address": "Jl. Merdeka No. 51, Kabanjahe, Kabanjahe",
    "phone": "021-114276",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.1783,
      "lng": 98.5097
    }
  },
  {
    "id": "br-332",
    "name": "Adira AXI Cabang Padang - Sudirman Padang",
    "shortName": "Padang (Sudirman Padang)",
    "city": "Padang",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. Hasanuddin No. 62, Sudirman Padang, Padang",
    "phone": "021-926400",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.9471,
      "lng": 100.4322
    }
  },
  {
    "id": "br-333",
    "name": "Adira AXI Cabang Padang - Khatib Sulaiman",
    "shortName": "Padang (Khatib Sulaiman)",
    "city": "Padang",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. Pattimura No. 73, Khatib Sulaiman, Padang",
    "phone": "021-938583",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.93213,
      "lng": 100.41679
    }
  },
  {
    "id": "br-334",
    "name": "Adira AXI Cabang Padang - Lubuk Begalung",
    "shortName": "Padang (Lubuk Begalung)",
    "city": "Padang",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. RA Kartini No. 84, Lubuk Begalung, Padang",
    "phone": "021-445250",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.93941,
      "lng": 100.40975
    }
  },
  {
    "id": "br-335",
    "name": "Adira AXI Cabang Padang - Kuranji",
    "shortName": "Padang (Kuranji)",
    "city": "Padang",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. MT Haryono No. 95, Kuranji, Padang",
    "phone": "021-639619",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.94983,
      "lng": 100.43572
    }
  },
  {
    "id": "br-336",
    "name": "Adira AXI Cabang Bukittinggi - Guguk Panjang",
    "shortName": "Bukittinggi (Guguk Panjang)",
    "city": "Bukittinggi",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. Jend. Sudirman No. 106, Guguk Panjang, Bukittinggi",
    "phone": "021-579378",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.3056,
      "lng": 100.3842
    }
  },
  {
    "id": "br-337",
    "name": "Adira AXI Cabang Payakumbuh - Payakumbuh Barat",
    "shortName": "Payakumbuh (Payakumbuh Barat)",
    "city": "Payakumbuh",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. Ahmad Yani No. 117, Payakumbuh Barat, Payakumbuh",
    "phone": "021-707537",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.2247,
      "lng": 100.6458
    }
  },
  {
    "id": "br-338",
    "name": "Adira AXI Cabang Solok - Lubuk Sikarah",
    "shortName": "Solok (Lubuk Sikarah)",
    "city": "Solok",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. Gatot Subroto No. 128, Lubuk Sikarah, Solok",
    "phone": "021-530698",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.7986,
      "lng": 100.6733
    }
  },
  {
    "id": "br-339",
    "name": "Adira AXI Cabang Pariaman - Pariaman Tengah",
    "shortName": "Pariaman (Pariaman Tengah)",
    "city": "Pariaman",
    "province": "Sumatera Barat",
    "region": "Sumatera",
    "address": "Jl. Diponegoro No. 139, Pariaman Tengah, Pariaman",
    "phone": "021-317686",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.6264,
      "lng": 100.1356
    }
  },
  {
    "id": "br-340",
    "name": "Adira AXI Cabang Pekanbaru - Tuanku Tambusai",
    "shortName": "Pekanbaru (Tuanku Tambusai)",
    "city": "Pekanbaru",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Gajah Mada No. 150, Tuanku Tambusai, Pekanbaru",
    "phone": "021-974332",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.5071,
      "lng": 101.4628
    }
  },
  {
    "id": "br-341",
    "name": "Adira AXI Cabang Pekanbaru - Sudirman Pekanbaru",
    "shortName": "Pekanbaru (Sudirman Pekanbaru)",
    "city": "Pekanbaru",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Veteran No. 11, Sudirman Pekanbaru, Pekanbaru",
    "phone": "021-182897",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.52207,
      "lng": 101.44739
    }
  },
  {
    "id": "br-342",
    "name": "Adira AXI Cabang Pekanbaru - Panam",
    "shortName": "Pekanbaru (Panam)",
    "city": "Pekanbaru",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Pahlawan No. 22, Panam, Pekanbaru",
    "phone": "021-111012",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.51479,
      "lng": 101.44035
    }
  },
  {
    "id": "br-343",
    "name": "Adira AXI Cabang Pekanbaru - Rumbai",
    "shortName": "Pekanbaru (Rumbai)",
    "city": "Pekanbaru",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Hayam Wuruk No. 33, Rumbai, Pekanbaru",
    "phone": "021-482107",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.50437,
      "lng": 101.46632
    }
  },
  {
    "id": "br-344",
    "name": "Adira AXI Cabang Pekanbaru - Bukit Raya",
    "shortName": "Pekanbaru (Bukit Raya)",
    "city": "Pekanbaru",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Pemuda No. 44, Bukit Raya, Pekanbaru",
    "phone": "021-800245",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.51575,
      "lng": 101.46893
    }
  },
  {
    "id": "br-345",
    "name": "Adira AXI Cabang Dumai - Dumai Kota",
    "shortName": "Dumai (Dumai Kota)",
    "city": "Dumai",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Basuki Rahmat No. 55, Dumai Kota, Dumai",
    "phone": "021-307718",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.6667,
      "lng": 101.465
    }
  },
  {
    "id": "br-346",
    "name": "Adira AXI Cabang Dumai - Dumai Timur",
    "shortName": "Dumai (Dumai Timur)",
    "city": "Dumai",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Teuku Umar No. 66, Dumai Timur, Dumai",
    "phone": "021-860119",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.68167,
      "lng": 101.44959
    }
  },
  {
    "id": "br-347",
    "name": "Adira AXI Cabang Duri - Mandau",
    "shortName": "Duri (Mandau)",
    "city": "Duri",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Merdeka No. 77, Mandau, Duri",
    "phone": "021-170085",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.25,
      "lng": 101.2317
    }
  },
  {
    "id": "br-348",
    "name": "Adira AXI Cabang Bangkinang - Bangkinang Kota",
    "shortName": "Bangkinang (Bangkinang Kota)",
    "city": "Bangkinang",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Hasanuddin No. 88, Bangkinang Kota, Bangkinang",
    "phone": "021-821327",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.3364,
      "lng": 101.0425
    }
  },
  {
    "id": "br-349",
    "name": "Adira AXI Cabang Pangkalan Kerinci - Pangkalan Kerinci",
    "shortName": "Pangkalan Kerinci (Pangkalan Kerinci)",
    "city": "Pangkalan Kerinci",
    "province": "Riau",
    "region": "Sumatera",
    "address": "Jl. Pattimura No. 99, Pangkalan Kerinci, Pangkalan Kerinci",
    "phone": "021-770961",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.4,
      "lng": 101.865
    }
  },
  {
    "id": "br-350",
    "name": "Adira AXI Cabang Batam - Nagoya Batam",
    "shortName": "Batam (Nagoya Batam)",
    "city": "Batam",
    "province": "Kepulauan Riau",
    "region": "Sumatera",
    "address": "Jl. RA Kartini No. 110, Nagoya Batam, Batam",
    "phone": "021-226085",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.0456,
      "lng": 104.0455
    }
  },
  {
    "id": "br-351",
    "name": "Adira AXI Cabang Batam - Batam Center",
    "shortName": "Batam (Batam Center)",
    "city": "Batam",
    "province": "Kepulauan Riau",
    "region": "Sumatera",
    "address": "Jl. MT Haryono No. 121, Batam Center, Batam",
    "phone": "021-423496",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.06057,
      "lng": 104.03009
    }
  },
  {
    "id": "br-352",
    "name": "Adira AXI Cabang Batam - Batu Aji",
    "shortName": "Batam (Batu Aji)",
    "city": "Batam",
    "province": "Kepulauan Riau",
    "region": "Sumatera",
    "address": "Jl. Jend. Sudirman No. 132, Batu Aji, Batam",
    "phone": "021-754412",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.05329,
      "lng": 104.02305
    }
  },
  {
    "id": "br-353",
    "name": "Adira AXI Cabang Batam - Bengkong",
    "shortName": "Batam (Bengkong)",
    "city": "Batam",
    "province": "Kepulauan Riau",
    "region": "Sumatera",
    "address": "Jl. Ahmad Yani No. 143, Bengkong, Batam",
    "phone": "021-757244",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.04287,
      "lng": 104.04902
    }
  },
  {
    "id": "br-354",
    "name": "Adira AXI Cabang Tanjung Pinang - Tanjung Pinang Barat",
    "shortName": "Tanjung Pinang (Tanjung Pinang Barat)",
    "city": "Tanjung Pinang",
    "province": "Kepulauan Riau",
    "region": "Sumatera",
    "address": "Jl. Gatot Subroto No. 154, Tanjung Pinang Barat, Tanjung Pinang",
    "phone": "021-210924",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.9167,
      "lng": 104.465
    }
  },
  {
    "id": "br-355",
    "name": "Adira AXI Cabang Kota Jambi - Sipin Jambi",
    "shortName": "Kota Jambi (Sipin Jambi)",
    "city": "Kota Jambi",
    "province": "Jambi",
    "region": "Sumatera",
    "address": "Jl. Diponegoro No. 15, Sipin Jambi, Kota Jambi",
    "phone": "021-352028",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.61,
      "lng": 103.625
    }
  },
  {
    "id": "br-356",
    "name": "Adira AXI Cabang Kota Jambi - Telanaipura",
    "shortName": "Kota Jambi (Telanaipura)",
    "city": "Kota Jambi",
    "province": "Jambi",
    "region": "Sumatera",
    "address": "Jl. Gajah Mada No. 26, Telanaipura, Kota Jambi",
    "phone": "021-813879",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.59503,
      "lng": 103.60959
    }
  },
  {
    "id": "br-357",
    "name": "Adira AXI Cabang Kota Jambi - Jelutung",
    "shortName": "Kota Jambi (Jelutung)",
    "city": "Kota Jambi",
    "province": "Jambi",
    "region": "Sumatera",
    "address": "Jl. Veteran No. 37, Jelutung, Kota Jambi",
    "phone": "021-771956",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.60231,
      "lng": 103.60255
    }
  },
  {
    "id": "br-358",
    "name": "Adira AXI Cabang Muara Bungo - Bungo Barat",
    "shortName": "Muara Bungo (Bungo Barat)",
    "city": "Muara Bungo",
    "province": "Jambi",
    "region": "Sumatera",
    "address": "Jl. Pahlawan No. 48, Bungo Barat, Muara Bungo",
    "phone": "021-629309",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.5,
      "lng": 102.1317
    }
  },
  {
    "id": "br-359",
    "name": "Adira AXI Cabang Palembang - Kolonel Atmo",
    "shortName": "Palembang (Kolonel Atmo)",
    "city": "Palembang",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Hayam Wuruk No. 59, Kolonel Atmo, Palembang",
    "phone": "021-865852",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.9761,
      "lng": 104.7904
    }
  },
  {
    "id": "br-360",
    "name": "Adira AXI Cabang Palembang - R. Sukamto",
    "shortName": "Palembang (R. Sukamto)",
    "city": "Palembang",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Pemuda No. 70, R. Sukamto, Palembang",
    "phone": "021-314519",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.96113,
      "lng": 104.77499
    }
  },
  {
    "id": "br-361",
    "name": "Adira AXI Cabang Palembang - Plaju",
    "shortName": "Palembang (Plaju)",
    "city": "Palembang",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Basuki Rahmat No. 81, Plaju, Palembang",
    "phone": "021-528805",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.96841,
      "lng": 104.76795
    }
  },
  {
    "id": "br-362",
    "name": "Adira AXI Cabang Palembang - Sukarami",
    "shortName": "Palembang (Sukarami)",
    "city": "Palembang",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Teuku Umar No. 92, Sukarami, Palembang",
    "phone": "021-997649",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.97883,
      "lng": 104.79392
    }
  },
  {
    "id": "br-363",
    "name": "Adira AXI Cabang Palembang - Ilir Barat",
    "shortName": "Palembang (Ilir Barat)",
    "city": "Palembang",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Merdeka No. 103, Ilir Barat, Palembang",
    "phone": "021-945409",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.96745,
      "lng": 104.79653
    }
  },
  {
    "id": "br-364",
    "name": "Adira AXI Cabang Prabumulih - Prabumulih Timur",
    "shortName": "Prabumulih (Prabumulih Timur)",
    "city": "Prabumulih",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Hasanuddin No. 114, Prabumulih Timur, Prabumulih",
    "phone": "021-565350",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.4333,
      "lng": 104.2483
    }
  },
  {
    "id": "br-365",
    "name": "Adira AXI Cabang Lubuklinggau - Lubuklinggau Timur",
    "shortName": "Lubuklinggau (Lubuklinggau Timur)",
    "city": "Lubuklinggau",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. Pattimura No. 125, Lubuklinggau Timur, Lubuklinggau",
    "phone": "021-147110",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.2958,
      "lng": 102.8767
    }
  },
  {
    "id": "br-366",
    "name": "Adira AXI Cabang Baturaja - Baturaja Timur",
    "shortName": "Baturaja (Baturaja Timur)",
    "city": "Baturaja",
    "province": "Sumatera Selatan",
    "region": "Sumatera",
    "address": "Jl. RA Kartini No. 136, Baturaja Timur, Baturaja",
    "phone": "021-146026",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -4.1333,
      "lng": 104.1817
    }
  },
  {
    "id": "br-367",
    "name": "Adira AXI Cabang Pangkal Pinang - Rangkui",
    "shortName": "Pangkal Pinang (Rangkui)",
    "city": "Pangkal Pinang",
    "province": "Bangka Belitung",
    "region": "Sumatera",
    "address": "Jl. MT Haryono No. 147, Rangkui, Pangkal Pinang",
    "phone": "021-298281",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.1333,
      "lng": 106.1317
    }
  },
  {
    "id": "br-368",
    "name": "Adira AXI Cabang Pangkal Pinang - Taman Sari",
    "shortName": "Pangkal Pinang (Taman Sari)",
    "city": "Pangkal Pinang",
    "province": "Bangka Belitung",
    "region": "Sumatera",
    "address": "Jl. Jend. Sudirman No. 158, Taman Sari, Pangkal Pinang",
    "phone": "021-463508",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.11833,
      "lng": 106.11629
    }
  },
  {
    "id": "br-369",
    "name": "Adira AXI Cabang Tanjung Pandan - Tanjung Pandan",
    "shortName": "Tanjung Pandan (Tanjung Pandan)",
    "city": "Tanjung Pandan",
    "province": "Bangka Belitung",
    "region": "Sumatera",
    "address": "Jl. Ahmad Yani No. 19, Tanjung Pandan, Tanjung Pandan",
    "phone": "021-657323",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.7333,
      "lng": 107.6483
    }
  },
  {
    "id": "br-370",
    "name": "Adira AXI Cabang Kota Bengkulu - Ratu Samban",
    "shortName": "Kota Bengkulu (Ratu Samban)",
    "city": "Kota Bengkulu",
    "province": "Bengkulu",
    "region": "Sumatera",
    "address": "Jl. Gatot Subroto No. 30, Ratu Samban, Kota Bengkulu",
    "phone": "021-732406",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.8,
      "lng": 102.2817
    }
  },
  {
    "id": "br-371",
    "name": "Adira AXI Cabang Kota Bengkulu - Gading Cempaka",
    "shortName": "Kota Bengkulu (Gading Cempaka)",
    "city": "Kota Bengkulu",
    "province": "Bengkulu",
    "region": "Sumatera",
    "address": "Jl. Diponegoro No. 41, Gading Cempaka, Kota Bengkulu",
    "phone": "021-762591",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.78503,
      "lng": 102.26629
    }
  },
  {
    "id": "br-372",
    "name": "Adira AXI Cabang Bandar Lampung - Raden Intan",
    "shortName": "Bandar Lampung (Raden Intan)",
    "city": "Bandar Lampung",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Gajah Mada No. 52, Raden Intan, Bandar Lampung",
    "phone": "021-197760",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.4292,
      "lng": 105.2761
    }
  },
  {
    "id": "br-373",
    "name": "Adira AXI Cabang Bandar Lampung - Antasari",
    "shortName": "Bandar Lampung (Antasari)",
    "city": "Bandar Lampung",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Veteran No. 63, Antasari, Bandar Lampung",
    "phone": "021-942038",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.41423,
      "lng": 105.26069
    }
  },
  {
    "id": "br-374",
    "name": "Adira AXI Cabang Bandar Lampung - Kedaton",
    "shortName": "Bandar Lampung (Kedaton)",
    "city": "Bandar Lampung",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Pahlawan No. 74, Kedaton, Bandar Lampung",
    "phone": "021-146010",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.42151,
      "lng": 105.25365
    }
  },
  {
    "id": "br-375",
    "name": "Adira AXI Cabang Bandar Lampung - Teluk Betung",
    "shortName": "Bandar Lampung (Teluk Betung)",
    "city": "Bandar Lampung",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Hayam Wuruk No. 85, Teluk Betung, Bandar Lampung",
    "phone": "021-569557",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.43193,
      "lng": 105.27962
    }
  },
  {
    "id": "br-376",
    "name": "Adira AXI Cabang Bandar Lampung - Way Halim",
    "shortName": "Bandar Lampung (Way Halim)",
    "city": "Bandar Lampung",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Pemuda No. 96, Way Halim, Bandar Lampung",
    "phone": "021-583123",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.42055,
      "lng": 105.28223
    }
  },
  {
    "id": "br-377",
    "name": "Adira AXI Cabang Metro - Metro Pusat",
    "shortName": "Metro (Metro Pusat)",
    "city": "Metro",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Basuki Rahmat No. 107, Metro Pusat, Metro",
    "phone": "021-361976",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.1133,
      "lng": 105.3217
    }
  },
  {
    "id": "br-378",
    "name": "Adira AXI Cabang Bandar Jaya - Terbanggi Besar",
    "shortName": "Bandar Jaya (Terbanggi Besar)",
    "city": "Bandar Jaya",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Teuku Umar No. 118, Terbanggi Besar, Bandar Jaya",
    "phone": "021-217163",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -4.9167,
      "lng": 105.2317
    }
  },
  {
    "id": "br-379",
    "name": "Adira AXI Cabang Pringsewu - Pringsewu",
    "shortName": "Pringsewu (Pringsewu)",
    "city": "Pringsewu",
    "province": "Lampung",
    "region": "Sumatera",
    "address": "Jl. Merdeka No. 129, Pringsewu, Pringsewu",
    "phone": "021-842914",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.3589,
      "lng": 104.9903
    }
  },
  {
    "id": "br-380",
    "name": "Adira AXI Cabang Pontianak - Gajah Mada Pontianak",
    "shortName": "Pontianak (Gajah Mada Pontianak)",
    "city": "Pontianak",
    "province": "Kalimantan Barat",
    "region": "Kalimantan",
    "address": "Jl. Hasanuddin No. 140, Gajah Mada Pontianak, Pontianak",
    "phone": "021-333333",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.0263,
      "lng": 109.3575
    }
  },
  {
    "id": "br-381",
    "name": "Adira AXI Cabang Pontianak - Ayani Pontianak",
    "shortName": "Pontianak (Ayani Pontianak)",
    "city": "Pontianak",
    "province": "Kalimantan Barat",
    "region": "Kalimantan",
    "address": "Jl. Pattimura No. 151, Ayani Pontianak, Pontianak",
    "phone": "021-555222",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.01133,
      "lng": 109.34209
    }
  },
  {
    "id": "br-382",
    "name": "Adira AXI Cabang Pontianak - Pontianak Barat",
    "shortName": "Pontianak (Pontianak Barat)",
    "city": "Pontianak",
    "province": "Kalimantan Barat",
    "region": "Kalimantan",
    "address": "Jl. RA Kartini No. 12, Pontianak Barat, Pontianak",
    "phone": "021-182840",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.01861,
      "lng": 109.33505
    }
  },
  {
    "id": "br-383",
    "name": "Adira AXI Cabang Singkawang - Singkawang Barat",
    "shortName": "Singkawang (Singkawang Barat)",
    "city": "Singkawang",
    "province": "Kalimantan Barat",
    "region": "Kalimantan",
    "address": "Jl. MT Haryono No. 23, Singkawang Barat, Singkawang",
    "phone": "021-799699",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.9083,
      "lng": 108.9983
    }
  },
  {
    "id": "br-384",
    "name": "Adira AXI Cabang Ketapang - Delta Pawan",
    "shortName": "Ketapang (Delta Pawan)",
    "city": "Ketapang",
    "province": "Kalimantan Barat",
    "region": "Kalimantan",
    "address": "Jl. Jend. Sudirman No. 34, Delta Pawan, Ketapang",
    "phone": "021-902445",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.85,
      "lng": 109.9817
    }
  },
  {
    "id": "br-385",
    "name": "Adira AXI Cabang Palangka Raya - Tjilik Riwut",
    "shortName": "Palangka Raya (Tjilik Riwut)",
    "city": "Palangka Raya",
    "province": "Kalimantan Tengah",
    "region": "Kalimantan",
    "address": "Jl. Ahmad Yani No. 45, Tjilik Riwut, Palangka Raya",
    "phone": "021-655292",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.2075,
      "lng": 113.9311
    }
  },
  {
    "id": "br-386",
    "name": "Adira AXI Cabang Palangka Raya - Pahandut",
    "shortName": "Palangka Raya (Pahandut)",
    "city": "Palangka Raya",
    "province": "Kalimantan Tengah",
    "region": "Kalimantan",
    "address": "Jl. Gatot Subroto No. 56, Pahandut, Palangka Raya",
    "phone": "021-808192",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.19253,
      "lng": 113.91569
    }
  },
  {
    "id": "br-387",
    "name": "Adira AXI Cabang Sampit - Mentawa Baru Ketapang",
    "shortName": "Sampit (Mentawa Baru Ketapang)",
    "city": "Sampit",
    "province": "Kalimantan Tengah",
    "region": "Kalimantan",
    "address": "Jl. Diponegoro No. 67, Mentawa Baru Ketapang, Sampit",
    "phone": "021-925918",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.5333,
      "lng": 112.965
    }
  },
  {
    "id": "br-388",
    "name": "Adira AXI Cabang Pangkalan Bun - Arut Selatan",
    "shortName": "Pangkalan Bun (Arut Selatan)",
    "city": "Pangkalan Bun",
    "province": "Kalimantan Tengah",
    "region": "Kalimantan",
    "address": "Jl. Gajah Mada No. 78, Arut Selatan, Pangkalan Bun",
    "phone": "021-557212",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.6833,
      "lng": 111.6317
    }
  },
  {
    "id": "br-389",
    "name": "Adira AXI Cabang Banjarmasin - Ahmad Yani Banjarmasin",
    "shortName": "Banjarmasin (Ahmad Yani Banjarmasin)",
    "city": "Banjarmasin",
    "province": "Kalimantan Selatan",
    "region": "Kalimantan",
    "address": "Jl. Veteran No. 89, Ahmad Yani Banjarmasin, Banjarmasin",
    "phone": "021-999431",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.3194,
      "lng": 114.6058
    }
  },
  {
    "id": "br-390",
    "name": "Adira AXI Cabang Banjarmasin - Banjarmasin Barat",
    "shortName": "Banjarmasin (Banjarmasin Barat)",
    "city": "Banjarmasin",
    "province": "Kalimantan Selatan",
    "region": "Kalimantan",
    "address": "Jl. Pahlawan No. 100, Banjarmasin Barat, Banjarmasin",
    "phone": "021-282059",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.30443,
      "lng": 114.59039
    }
  },
  {
    "id": "br-391",
    "name": "Adira AXI Cabang Banjarmasin - Banjarmasin Utara",
    "shortName": "Banjarmasin (Banjarmasin Utara)",
    "city": "Banjarmasin",
    "province": "Kalimantan Selatan",
    "region": "Kalimantan",
    "address": "Jl. Hayam Wuruk No. 111, Banjarmasin Utara, Banjarmasin",
    "phone": "021-791000",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.31171,
      "lng": 114.58335
    }
  },
  {
    "id": "br-392",
    "name": "Adira AXI Cabang Banjarbaru - Banjarbaru Kota",
    "shortName": "Banjarbaru (Banjarbaru Kota)",
    "city": "Banjarbaru",
    "province": "Kalimantan Selatan",
    "region": "Kalimantan",
    "address": "Jl. Pemuda No. 122, Banjarbaru Kota, Banjarbaru",
    "phone": "021-981558",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.44,
      "lng": 114.845
    }
  },
  {
    "id": "br-393",
    "name": "Adira AXI Cabang Samarinda - Juanda Samarinda",
    "shortName": "Samarinda (Juanda Samarinda)",
    "city": "Samarinda",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. Basuki Rahmat No. 133, Juanda Samarinda, Samarinda",
    "phone": "021-971323",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.5022,
      "lng": 117.1686
    }
  },
  {
    "id": "br-394",
    "name": "Adira AXI Cabang Samarinda - Antasari Samarinda",
    "shortName": "Samarinda (Antasari Samarinda)",
    "city": "Samarinda",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. Teuku Umar No. 144, Antasari Samarinda, Samarinda",
    "phone": "021-765057",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.48723,
      "lng": 117.15319
    }
  },
  {
    "id": "br-395",
    "name": "Adira AXI Cabang Samarinda - Samarinda Seberang",
    "shortName": "Samarinda (Samarinda Seberang)",
    "city": "Samarinda",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. Merdeka No. 155, Samarinda Seberang, Samarinda",
    "phone": "021-887074",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.49451,
      "lng": 117.14615
    }
  },
  {
    "id": "br-396",
    "name": "Adira AXI Cabang Balikpapan - Sudirman Balikpapan",
    "shortName": "Balikpapan (Sudirman Balikpapan)",
    "city": "Balikpapan",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. Hasanuddin No. 16, Sudirman Balikpapan, Balikpapan",
    "phone": "021-281597",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.2654,
      "lng": 116.8462
    }
  },
  {
    "id": "br-397",
    "name": "Adira AXI Cabang Balikpapan - MT Haryono Balikpapan",
    "shortName": "Balikpapan (MT Haryono Balikpapan)",
    "city": "Balikpapan",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. Pattimura No. 27, MT Haryono Balikpapan, Balikpapan",
    "phone": "021-446240",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.25043,
      "lng": 116.83079
    }
  },
  {
    "id": "br-398",
    "name": "Adira AXI Cabang Balikpapan - Balikpapan Barat",
    "shortName": "Balikpapan (Balikpapan Barat)",
    "city": "Balikpapan",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. RA Kartini No. 38, Balikpapan Barat, Balikpapan",
    "phone": "021-496193",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -1.25771,
      "lng": 116.82375
    }
  },
  {
    "id": "br-399",
    "name": "Adira AXI Cabang Bontang - Bontang Barat",
    "shortName": "Bontang (Bontang Barat)",
    "city": "Bontang",
    "province": "Kalimantan Timur",
    "region": "Kalimantan",
    "address": "Jl. MT Haryono No. 49, Bontang Barat, Bontang",
    "phone": "021-755261",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.1333,
      "lng": 117.515
    }
  },
  {
    "id": "br-400",
    "name": "Adira AXI Cabang Tarakan - Tarakan Barat",
    "shortName": "Tarakan (Tarakan Barat)",
    "city": "Tarakan",
    "province": "Kalimantan Utara",
    "region": "Kalimantan",
    "address": "Jl. Jend. Sudirman No. 60, Tarakan Barat, Tarakan",
    "phone": "021-869848",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 3.3,
      "lng": 117.6483
    }
  },
  {
    "id": "br-401",
    "name": "Adira AXI Cabang Tanjung Selor - Tanjung Selor",
    "shortName": "Tanjung Selor (Tanjung Selor)",
    "city": "Tanjung Selor",
    "province": "Kalimantan Utara",
    "region": "Kalimantan",
    "address": "Jl. Ahmad Yani No. 71, Tanjung Selor, Tanjung Selor",
    "phone": "021-728924",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 2.85,
      "lng": 117.3817
    }
  },
  {
    "id": "br-402",
    "name": "Adira AXI Cabang Makassar - Pettarani Makassar",
    "shortName": "Makassar (Pettarani Makassar)",
    "city": "Makassar",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Gatot Subroto No. 82, Pettarani Makassar, Makassar",
    "phone": "021-359905",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.1477,
      "lng": 119.4477
    }
  },
  {
    "id": "br-403",
    "name": "Adira AXI Cabang Makassar - Urip Sumoharjo",
    "shortName": "Makassar (Urip Sumoharjo)",
    "city": "Makassar",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Diponegoro No. 93, Urip Sumoharjo, Makassar",
    "phone": "021-529511",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.13273,
      "lng": 119.43229
    }
  },
  {
    "id": "br-404",
    "name": "Adira AXI Cabang Makassar - Panakkukang",
    "shortName": "Makassar (Panakkukang)",
    "city": "Makassar",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Gajah Mada No. 104, Panakkukang, Makassar",
    "phone": "021-943622",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.14001,
      "lng": 119.42525
    }
  },
  {
    "id": "br-405",
    "name": "Adira AXI Cabang Makassar - BTP Tamalanrea",
    "shortName": "Makassar (BTP Tamalanrea)",
    "city": "Makassar",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Veteran No. 115, BTP Tamalanrea, Makassar",
    "phone": "021-384343",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.15043,
      "lng": 119.45122
    }
  },
  {
    "id": "br-406",
    "name": "Adira AXI Cabang Makassar - Daya",
    "shortName": "Makassar (Daya)",
    "city": "Makassar",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Pahlawan No. 126, Daya, Makassar",
    "phone": "021-300226",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.13905,
      "lng": 119.45383
    }
  },
  {
    "id": "br-407",
    "name": "Adira AXI Cabang Makassar - Alauddin",
    "shortName": "Makassar (Alauddin)",
    "city": "Makassar",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Hayam Wuruk No. 137, Alauddin, Makassar",
    "phone": "021-314213",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.12144,
      "lng": 119.43403
    }
  },
  {
    "id": "br-408",
    "name": "Adira AXI Cabang Gowa - Somba Opu",
    "shortName": "Gowa (Somba Opu)",
    "city": "Gowa",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Pemuda No. 148, Somba Opu, Gowa",
    "phone": "021-724467",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.2,
      "lng": 119.465
    }
  },
  {
    "id": "br-409",
    "name": "Adira AXI Cabang Maros - Turikale",
    "shortName": "Maros (Turikale)",
    "city": "Maros",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Basuki Rahmat No. 159, Turikale, Maros",
    "phone": "021-640217",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5,
      "lng": 119.5817
    }
  },
  {
    "id": "br-410",
    "name": "Adira AXI Cabang Parepare - Ujung",
    "shortName": "Parepare (Ujung)",
    "city": "Parepare",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Teuku Umar No. 20, Ujung, Parepare",
    "phone": "021-901684",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -4.0133,
      "lng": 119.6422
    }
  },
  {
    "id": "br-411",
    "name": "Adira AXI Cabang Parepare - Soreang",
    "shortName": "Parepare (Soreang)",
    "city": "Parepare",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Merdeka No. 31, Soreang, Parepare",
    "phone": "021-123291",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.99833,
      "lng": 119.62679
    }
  },
  {
    "id": "br-412",
    "name": "Adira AXI Cabang Palopo - Wara",
    "shortName": "Palopo (Wara)",
    "city": "Palopo",
    "province": "Sulawesi Selatan",
    "region": "Sulawesi",
    "address": "Jl. Hasanuddin No. 42, Wara, Palopo",
    "phone": "021-459643",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.9944,
      "lng": 120.2119
    }
  },
  {
    "id": "br-413",
    "name": "Adira AXI Cabang Manado - Sam Ratulangi Manado",
    "shortName": "Manado (Sam Ratulangi Manado)",
    "city": "Manado",
    "province": "Sulawesi Utara",
    "region": "Sulawesi",
    "address": "Jl. Pattimura No. 53, Sam Ratulangi Manado, Manado",
    "phone": "021-415045",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.4748,
      "lng": 124.8578
    }
  },
  {
    "id": "br-414",
    "name": "Adira AXI Cabang Manado - Paal Dua",
    "shortName": "Manado (Paal Dua)",
    "city": "Manado",
    "province": "Sulawesi Utara",
    "region": "Sulawesi",
    "address": "Jl. RA Kartini No. 64, Paal Dua, Manado",
    "phone": "021-167640",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.48977,
      "lng": 124.84239
    }
  },
  {
    "id": "br-415",
    "name": "Adira AXI Cabang Manado - Malalayang",
    "shortName": "Manado (Malalayang)",
    "city": "Manado",
    "province": "Sulawesi Utara",
    "region": "Sulawesi",
    "address": "Jl. MT Haryono No. 75, Malalayang, Manado",
    "phone": "021-139624",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.48249,
      "lng": 124.83535
    }
  },
  {
    "id": "br-416",
    "name": "Adira AXI Cabang Bitung - Madidir",
    "shortName": "Bitung (Madidir)",
    "city": "Bitung",
    "province": "Sulawesi Utara",
    "region": "Sulawesi",
    "address": "Jl. Jend. Sudirman No. 86, Madidir, Bitung",
    "phone": "021-133274",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 1.4404,
      "lng": 125.2039
    }
  },
  {
    "id": "br-417",
    "name": "Adira AXI Cabang Kotamobagu - Kotamobagu Barat",
    "shortName": "Kotamobagu (Kotamobagu Barat)",
    "city": "Kotamobagu",
    "province": "Sulawesi Utara",
    "region": "Sulawesi",
    "address": "Jl. Ahmad Yani No. 97, Kotamobagu Barat, Kotamobagu",
    "phone": "021-476331",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.7303,
      "lng": 124.3289
    }
  },
  {
    "id": "br-418",
    "name": "Adira AXI Cabang Palu - Palu Timur",
    "shortName": "Palu (Palu Timur)",
    "city": "Palu",
    "province": "Sulawesi Tengah",
    "region": "Sulawesi",
    "address": "Jl. Gatot Subroto No. 108, Palu Timur, Palu",
    "phone": "021-613093",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.9003,
      "lng": 119.893
    }
  },
  {
    "id": "br-419",
    "name": "Adira AXI Cabang Palu - Palu Barat",
    "shortName": "Palu (Palu Barat)",
    "city": "Palu",
    "province": "Sulawesi Tengah",
    "region": "Sulawesi",
    "address": "Jl. Diponegoro No. 119, Palu Barat, Palu",
    "phone": "021-908811",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.88533,
      "lng": 119.87759
    }
  },
  {
    "id": "br-420",
    "name": "Adira AXI Cabang Luwuk - Luwuk Kota",
    "shortName": "Luwuk (Luwuk Kota)",
    "city": "Luwuk",
    "province": "Sulawesi Tengah",
    "region": "Sulawesi",
    "address": "Jl. Gajah Mada No. 130, Luwuk Kota, Luwuk",
    "phone": "021-993137",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.95,
      "lng": 122.7983
    }
  },
  {
    "id": "br-421",
    "name": "Adira AXI Cabang Kendari - Ahmad Yani Kendari",
    "shortName": "Kendari (Ahmad Yani Kendari)",
    "city": "Kendari",
    "province": "Sulawesi Tenggara",
    "region": "Sulawesi",
    "address": "Jl. Veteran No. 141, Ahmad Yani Kendari, Kendari",
    "phone": "021-235314",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.9985,
      "lng": 122.5276
    }
  },
  {
    "id": "br-422",
    "name": "Adira AXI Cabang Kendari - Kadia",
    "shortName": "Kendari (Kadia)",
    "city": "Kendari",
    "province": "Sulawesi Tenggara",
    "region": "Sulawesi",
    "address": "Jl. Pahlawan No. 152, Kadia, Kendari",
    "phone": "021-121685",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.98353,
      "lng": 122.51219
    }
  },
  {
    "id": "br-423",
    "name": "Adira AXI Cabang Baubau - Wolio",
    "shortName": "Baubau (Wolio)",
    "city": "Baubau",
    "province": "Sulawesi Tenggara",
    "region": "Sulawesi",
    "address": "Jl. Hayam Wuruk No. 13, Wolio, Baubau",
    "phone": "021-746826",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -5.4667,
      "lng": 122.615
    }
  },
  {
    "id": "br-424",
    "name": "Adira AXI Cabang Kota Gorontalo - Kota Selatan",
    "shortName": "Kota Gorontalo (Kota Selatan)",
    "city": "Kota Gorontalo",
    "province": "Gorontalo",
    "region": "Sulawesi",
    "address": "Jl. Pemuda No. 24, Kota Selatan, Kota Gorontalo",
    "phone": "021-681552",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.5406,
      "lng": 123.0744
    }
  },
  {
    "id": "br-425",
    "name": "Adira AXI Cabang Mamuju - Mamuju Kota",
    "shortName": "Mamuju (Mamuju Kota)",
    "city": "Mamuju",
    "province": "Sulawesi Barat",
    "region": "Sulawesi",
    "address": "Jl. Basuki Rahmat No. 35, Mamuju Kota, Mamuju",
    "phone": "021-600934",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.6748,
      "lng": 118.9044
    }
  },
  {
    "id": "br-426",
    "name": "Adira AXI Cabang Denpasar - Sunset Road Kuta",
    "shortName": "Denpasar (Sunset Road Kuta)",
    "city": "Denpasar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Teuku Umar No. 46, Sunset Road Kuta, Denpasar",
    "phone": "021-699304",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.6705,
      "lng": 115.2276
    }
  },
  {
    "id": "br-427",
    "name": "Adira AXI Cabang Denpasar - Gatot Subroto Denpasar",
    "shortName": "Denpasar (Gatot Subroto Denpasar)",
    "city": "Denpasar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Merdeka No. 57, Gatot Subroto Denpasar, Denpasar",
    "phone": "021-951233",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.65553,
      "lng": 115.21219
    }
  },
  {
    "id": "br-428",
    "name": "Adira AXI Cabang Denpasar - Teuku Umar Denpasar",
    "shortName": "Denpasar (Teuku Umar Denpasar)",
    "city": "Denpasar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Hasanuddin No. 68, Teuku Umar Denpasar, Denpasar",
    "phone": "021-725515",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.66281,
      "lng": 115.20515
    }
  },
  {
    "id": "br-429",
    "name": "Adira AXI Cabang Denpasar - Sanur",
    "shortName": "Denpasar (Sanur)",
    "city": "Denpasar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Pattimura No. 79, Sanur, Denpasar",
    "phone": "021-325300",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.67323,
      "lng": 115.23112
    }
  },
  {
    "id": "br-430",
    "name": "Adira AXI Cabang Denpasar - Renon",
    "shortName": "Denpasar (Renon)",
    "city": "Denpasar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. RA Kartini No. 90, Renon, Denpasar",
    "phone": "021-477496",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.66185,
      "lng": 115.23373
    }
  },
  {
    "id": "br-431",
    "name": "Adira AXI Cabang Badung - Jimbaran",
    "shortName": "Badung (Jimbaran)",
    "city": "Badung",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. MT Haryono No. 101, Jimbaran, Badung",
    "phone": "021-427058",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.5833,
      "lng": 115.1983
    }
  },
  {
    "id": "br-432",
    "name": "Adira AXI Cabang Badung - Canggu",
    "shortName": "Badung (Canggu)",
    "city": "Badung",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Jend. Sudirman No. 112, Canggu, Badung",
    "phone": "021-719167",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.56833,
      "lng": 115.18289
    }
  },
  {
    "id": "br-433",
    "name": "Adira AXI Cabang Gianyar - Gianyar Kota",
    "shortName": "Gianyar (Gianyar Kota)",
    "city": "Gianyar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Ahmad Yani No. 123, Gianyar Kota, Gianyar",
    "phone": "021-785658",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.5333,
      "lng": 115.3483
    }
  },
  {
    "id": "br-434",
    "name": "Adira AXI Cabang Gianyar - Ubud",
    "shortName": "Gianyar (Ubud)",
    "city": "Gianyar",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Gatot Subroto No. 134, Ubud, Gianyar",
    "phone": "021-494077",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.51833,
      "lng": 115.33289
    }
  },
  {
    "id": "br-435",
    "name": "Adira AXI Cabang Tabanan - Tabanan Kota",
    "shortName": "Tabanan (Tabanan Kota)",
    "city": "Tabanan",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Diponegoro No. 145, Tabanan Kota, Tabanan",
    "phone": "021-955310",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.5381,
      "lng": 115.1397
    }
  },
  {
    "id": "br-436",
    "name": "Adira AXI Cabang Buleleng - Singaraja Kota",
    "shortName": "Buleleng (Singaraja Kota)",
    "city": "Buleleng",
    "province": "Bali",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Gajah Mada No. 156, Singaraja Kota, Buleleng",
    "phone": "021-984309",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.1128,
      "lng": 115.1031
    }
  },
  {
    "id": "br-437",
    "name": "Adira AXI Cabang Mataram - Cakranegara",
    "shortName": "Mataram (Cakranegara)",
    "city": "Mataram",
    "province": "Nusa Tenggara Barat",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Veteran No. 17, Cakranegara, Mataram",
    "phone": "021-549230",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.5833,
      "lng": 116.1317
    }
  },
  {
    "id": "br-438",
    "name": "Adira AXI Cabang Mataram - Pejanggik",
    "shortName": "Mataram (Pejanggik)",
    "city": "Mataram",
    "province": "Nusa Tenggara Barat",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Pahlawan No. 28, Pejanggik, Mataram",
    "phone": "021-654223",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.56833,
      "lng": 116.11629
    }
  },
  {
    "id": "br-439",
    "name": "Adira AXI Cabang Mataram - Ampenan",
    "shortName": "Mataram (Ampenan)",
    "city": "Mataram",
    "province": "Nusa Tenggara Barat",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Hayam Wuruk No. 39, Ampenan, Mataram",
    "phone": "021-697116",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.57561,
      "lng": 116.10925
    }
  },
  {
    "id": "br-440",
    "name": "Adira AXI Cabang Sumbawa Besar - Sumbawa Kota",
    "shortName": "Sumbawa Besar (Sumbawa Kota)",
    "city": "Sumbawa Besar",
    "province": "Nusa Tenggara Barat",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Pemuda No. 50, Sumbawa Kota, Sumbawa Besar",
    "phone": "021-352781",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.5,
      "lng": 117.4483
    }
  },
  {
    "id": "br-441",
    "name": "Adira AXI Cabang Bima - Rasanae",
    "shortName": "Bima (Rasanae)",
    "city": "Bima",
    "province": "Nusa Tenggara Barat",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Basuki Rahmat No. 61, Rasanae, Bima",
    "phone": "021-715208",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.46,
      "lng": 118.745
    }
  },
  {
    "id": "br-442",
    "name": "Adira AXI Cabang Kupang - Oebobo",
    "shortName": "Kupang (Oebobo)",
    "city": "Kupang",
    "province": "Nusa Tenggara Timur",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Teuku Umar No. 72, Oebobo, Kupang",
    "phone": "021-770267",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -10.1772,
      "lng": 123.622
    }
  },
  {
    "id": "br-443",
    "name": "Adira AXI Cabang Kupang - Kelapa Lima",
    "shortName": "Kupang (Kelapa Lima)",
    "city": "Kupang",
    "province": "Nusa Tenggara Timur",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Merdeka No. 83, Kelapa Lima, Kupang",
    "phone": "021-421565",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -10.16223,
      "lng": 123.60659
    }
  },
  {
    "id": "br-444",
    "name": "Adira AXI Cabang Labuan Bajo - Komodo",
    "shortName": "Labuan Bajo (Komodo)",
    "city": "Labuan Bajo",
    "province": "Nusa Tenggara Timur",
    "region": "Bali & Nusa Tenggara",
    "address": "Jl. Hasanuddin No. 94, Komodo, Labuan Bajo",
    "phone": "021-725687",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.4964,
      "lng": 119.9028
    }
  },
  {
    "id": "br-445",
    "name": "Adira AXI Cabang Ambon - Sirimau",
    "shortName": "Ambon (Sirimau)",
    "city": "Ambon",
    "province": "Maluku",
    "region": "Maluku & Papua",
    "address": "Jl. Pattimura No. 105, Sirimau, Ambon",
    "phone": "021-572005",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.6954,
      "lng": 128.1964
    }
  },
  {
    "id": "br-446",
    "name": "Adira AXI Cabang Ambon - Nusaniwe",
    "shortName": "Ambon (Nusaniwe)",
    "city": "Ambon",
    "province": "Maluku",
    "region": "Maluku & Papua",
    "address": "Jl. RA Kartini No. 116, Nusaniwe, Ambon",
    "phone": "021-963963",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -3.68043,
      "lng": 128.18099
    }
  },
  {
    "id": "br-447",
    "name": "Adira AXI Cabang Ternate - Ternate Tengah",
    "shortName": "Ternate (Ternate Tengah)",
    "city": "Ternate",
    "province": "Maluku Utara",
    "region": "Maluku & Papua",
    "address": "Jl. MT Haryono No. 127, Ternate Tengah, Ternate",
    "phone": "021-886237",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": 0.7833,
      "lng": 127.3817
    }
  },
  {
    "id": "br-448",
    "name": "Adira AXI Cabang Jayapura - Abepura",
    "shortName": "Jayapura (Abepura)",
    "city": "Jayapura",
    "province": "Papua",
    "region": "Maluku & Papua",
    "address": "Jl. Jend. Sudirman No. 138, Abepura, Jayapura",
    "phone": "021-108116",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.5337,
      "lng": 140.7331
    }
  },
  {
    "id": "br-449",
    "name": "Adira AXI Cabang Jayapura - Jayapura Selatan",
    "shortName": "Jayapura (Jayapura Selatan)",
    "city": "Jayapura",
    "province": "Papua",
    "region": "Maluku & Papua",
    "address": "Jl. Ahmad Yani No. 149, Jayapura Selatan, Jayapura",
    "phone": "021-774914",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.51873,
      "lng": 140.71769
    }
  },
  {
    "id": "br-450",
    "name": "Adira AXI Cabang Jayapura - Sentani",
    "shortName": "Jayapura (Sentani)",
    "city": "Jayapura",
    "province": "Papua",
    "region": "Maluku & Papua",
    "address": "Jl. Gatot Subroto No. 10, Sentani, Jayapura",
    "phone": "021-674174",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -2.52601,
      "lng": 140.71065
    }
  },
  {
    "id": "br-451",
    "name": "Adira AXI Cabang Sorong - Sorong Barat",
    "shortName": "Sorong (Sorong Barat)",
    "city": "Sorong",
    "province": "Papua Barat Daya",
    "region": "Maluku & Papua",
    "address": "Jl. Diponegoro No. 21, Sorong Barat, Sorong",
    "phone": "021-562307",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.8762,
      "lng": 131.2708
    }
  },
  {
    "id": "br-452",
    "name": "Adira AXI Cabang Sorong - Sorong Timur",
    "shortName": "Sorong (Sorong Timur)",
    "city": "Sorong",
    "province": "Papua Barat Daya",
    "region": "Maluku & Papua",
    "address": "Jl. Gajah Mada No. 32, Sorong Timur, Sorong",
    "phone": "021-921676",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.86123,
      "lng": 131.25539
    }
  },
  {
    "id": "br-453",
    "name": "Adira AXI Cabang Manokwari - Manokwari Barat",
    "shortName": "Manokwari (Manokwari Barat)",
    "city": "Manokwari",
    "province": "Papua Barat",
    "region": "Maluku & Papua",
    "address": "Jl. Veteran No. 43, Manokwari Barat, Manokwari",
    "phone": "021-925373",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -0.8615,
      "lng": 134.077
    }
  },
  {
    "id": "br-454",
    "name": "Adira AXI Cabang Timika - Mimika Baru",
    "shortName": "Timika (Mimika Baru)",
    "city": "Timika",
    "province": "Papua Tengah",
    "region": "Maluku & Papua",
    "address": "Jl. Pahlawan No. 54, Mimika Baru, Timika",
    "phone": "021-838202",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -4.5469,
      "lng": 136.8989
    }
  },
  {
    "id": "br-455",
    "name": "Adira AXI Cabang Timika - Kuala Kencana",
    "shortName": "Timika (Kuala Kencana)",
    "city": "Timika",
    "province": "Papua Tengah",
    "region": "Maluku & Papua",
    "address": "Jl. Hayam Wuruk No. 65, Kuala Kencana, Timika",
    "phone": "021-945684",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -4.53193,
      "lng": 136.88349
    }
  },
  {
    "id": "br-456",
    "name": "Adira AXI Cabang Merauke - Merauke Kota",
    "shortName": "Merauke (Merauke Kota)",
    "city": "Merauke",
    "province": "Papua Selatan",
    "region": "Maluku & Papua",
    "address": "Jl. Pemuda No. 76, Merauke Kota, Merauke",
    "phone": "021-846462",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -8.4932,
      "lng": 140.4164
    }
  },
  {
    "id": "br-457",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 154, Sentra Layanan Jakarta Selatan",
    "phone": "021-547938",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.24286,
      "lng": 106.8159
    }
  },
  {
    "id": "br-458",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 161, Sentra Layanan Jakarta Selatan",
    "phone": "021-950547",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.27137,
      "lng": 106.78646
    }
  },
  {
    "id": "br-459",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 168, Sentra Layanan Jakarta Selatan",
    "phone": "021-985026",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.23935,
      "lng": 106.82819
    }
  },
  {
    "id": "br-460",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 175, Sentra Layanan Jakarta Selatan",
    "phone": "021-729222",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.25866,
      "lng": 106.83666
    }
  },
  {
    "id": "br-461",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 182, Sentra Layanan Jakarta Selatan",
    "phone": "021-900788",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.27474,
      "lng": 106.80181
    }
  },
  {
    "id": "br-462",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 189, Sentra Layanan Jakarta Selatan",
    "phone": "021-881342",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21165,
      "lng": 106.82373
    }
  },
  {
    "id": "br-463",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 16, Sentra Layanan Jakarta Selatan",
    "phone": "021-168352",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2481,
      "lng": 106.84797
    }
  },
  {
    "id": "br-464",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 23, Sentra Layanan Jakarta Selatan",
    "phone": "021-696468",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.26192,
      "lng": 106.82038
    }
  },
  {
    "id": "br-465",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 30, Sentra Layanan Jakarta Selatan",
    "phone": "021-193484",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21991,
      "lng": 106.82537
    }
  },
  {
    "id": "br-466",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 37, Sentra Layanan Jakarta Selatan",
    "phone": "021-903630",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.24601,
      "lng": 106.85404
    }
  },
  {
    "id": "br-467",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 44, Sentra Layanan Jakarta Selatan",
    "phone": "021-931894",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21954,
      "lng": 106.83666
    }
  },
  {
    "id": "br-468",
    "name": "Adira AXI Sentra Layanan Jakarta Selatan Unit 1",
    "shortName": "Jakarta Selatan Unit 1",
    "city": "Jakarta Selatan",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 51, Sentra Layanan Jakarta Selatan",
    "phone": "021-298920",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.22143,
      "lng": 106.83161
    }
  },
  {
    "id": "br-469",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 58, Sentra Layanan Jakarta Timur",
    "phone": "021-688904",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.24996,
      "lng": 106.94263
    }
  },
  {
    "id": "br-470",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 65, Sentra Layanan Jakarta Timur",
    "phone": "021-562461",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19238,
      "lng": 106.90309
    }
  },
  {
    "id": "br-471",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 72, Sentra Layanan Jakarta Timur",
    "phone": "021-221922",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.21587,
      "lng": 106.86371
    }
  },
  {
    "id": "br-472",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 79, Sentra Layanan Jakarta Timur",
    "phone": "021-697510",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2473,
      "lng": 106.93472
    }
  },
  {
    "id": "br-473",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 86, Sentra Layanan Jakarta Timur",
    "phone": "021-551004",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19171,
      "lng": 106.94055
    }
  },
  {
    "id": "br-474",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 93, Sentra Layanan Jakarta Timur",
    "phone": "021-422816",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.212,
      "lng": 106.87363
    }
  },
  {
    "id": "br-475",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 100, Sentra Layanan Jakarta Timur",
    "phone": "021-493991",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.20901,
      "lng": 106.91464
    }
  },
  {
    "id": "br-476",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 107, Sentra Layanan Jakarta Timur",
    "phone": "021-797208",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19202,
      "lng": 106.96504
    }
  },
  {
    "id": "br-477",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 114, Sentra Layanan Jakarta Timur",
    "phone": "021-803977",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.23052,
      "lng": 106.90282
    }
  },
  {
    "id": "br-478",
    "name": "Adira AXI Sentra Layanan Jakarta Timur Unit 1",
    "shortName": "Jakarta Timur Unit 1",
    "city": "Jakarta Timur",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 121, Sentra Layanan Jakarta Timur",
    "phone": "021-554414",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18014,
      "lng": 106.89696
    }
  },
  {
    "id": "br-479",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 128, Sentra Layanan Jakarta Barat",
    "phone": "021-103937",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15616,
      "lng": 106.80261
    }
  },
  {
    "id": "br-480",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 135, Sentra Layanan Jakarta Barat",
    "phone": "021-175583",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17772,
      "lng": 106.75698
    }
  },
  {
    "id": "br-481",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 142, Sentra Layanan Jakarta Barat",
    "phone": "021-299001",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.14026,
      "lng": 106.72345
    }
  },
  {
    "id": "br-482",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 149, Sentra Layanan Jakarta Barat",
    "phone": "021-444981",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17377,
      "lng": 106.79677
    }
  },
  {
    "id": "br-483",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 156, Sentra Layanan Jakarta Barat",
    "phone": "021-144677",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17636,
      "lng": 106.79526
    }
  },
  {
    "id": "br-484",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 163, Sentra Layanan Jakarta Barat",
    "phone": "021-814998",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.11704,
      "lng": 106.73077
    }
  },
  {
    "id": "br-485",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 170, Sentra Layanan Jakarta Barat",
    "phone": "021-212491",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16196,
      "lng": 106.77754
    }
  },
  {
    "id": "br-486",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 177, Sentra Layanan Jakarta Barat",
    "phone": "021-648074",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16073,
      "lng": 106.82179
    }
  },
  {
    "id": "br-487",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 184, Sentra Layanan Jakarta Barat",
    "phone": "021-769108",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.13031,
      "lng": 106.75779
    }
  },
  {
    "id": "br-488",
    "name": "Adira AXI Sentra Layanan Jakarta Barat Unit 1",
    "shortName": "Jakarta Barat Unit 1",
    "city": "Jakarta Barat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 191, Sentra Layanan Jakarta Barat",
    "phone": "021-286834",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15601,
      "lng": 106.75923
    }
  },
  {
    "id": "br-489",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 18, Sentra Layanan Jakarta Pusat",
    "phone": "021-193999",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16848,
      "lng": 106.87314
    }
  },
  {
    "id": "br-490",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 25, Sentra Layanan Jakarta Pusat",
    "phone": "021-914303",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1572,
      "lng": 106.82211
    }
  },
  {
    "id": "br-491",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 32, Sentra Layanan Jakarta Pusat",
    "phone": "021-766227",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19594,
      "lng": 106.79501
    }
  },
  {
    "id": "br-492",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 39, Sentra Layanan Jakarta Pusat",
    "phone": "021-230202",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16074,
      "lng": 106.86957
    }
  },
  {
    "id": "br-493",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 46, Sentra Layanan Jakarta Pusat",
    "phone": "021-664612",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17869,
      "lng": 106.86082
    }
  },
  {
    "id": "br-494",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 53, Sentra Layanan Jakarta Pusat",
    "phone": "021-428182",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16762,
      "lng": 106.79978
    }
  },
  {
    "id": "br-495",
    "name": "Adira AXI Sentra Layanan Jakarta Pusat Unit 1",
    "shortName": "Jakarta Pusat Unit 1",
    "city": "Jakarta Pusat",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 60, Sentra Layanan Jakarta Pusat",
    "phone": "021-602121",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.13289,
      "lng": 106.85157
    }
  },
  {
    "id": "br-496",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 67, Sentra Layanan Jakarta Utara",
    "phone": "021-700269",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15789,
      "lng": 106.90373
    }
  },
  {
    "id": "br-497",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 74, Sentra Layanan Jakarta Utara",
    "phone": "021-132873",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.12213,
      "lng": 106.83952
    }
  },
  {
    "id": "br-498",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Veteran No. 81, Sentra Layanan Jakarta Utara",
    "phone": "021-738820",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.11296,
      "lng": 106.84738
    }
  },
  {
    "id": "br-499",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 88, Sentra Layanan Jakarta Utara",
    "phone": "021-825355",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.16608,
      "lng": 106.91251
    }
  },
  {
    "id": "br-500",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Hayam Wuruk No. 95, Sentra Layanan Jakarta Utara",
    "phone": "021-948698",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.11424,
      "lng": 106.87491
    }
  },
  {
    "id": "br-501",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Pemuda No. 102, Sentra Layanan Jakarta Utara",
    "phone": "021-440375",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.10785,
      "lng": 106.84195
    }
  },
  {
    "id": "br-502",
    "name": "Adira AXI Sentra Layanan Jakarta Utara Unit 1",
    "shortName": "Jakarta Utara Unit 1",
    "city": "Jakarta Utara",
    "province": "DKI Jakarta",
    "region": "Jawa",
    "address": "Jl. Basuki Rahmat No. 109, Sentra Layanan Jakarta Utara",
    "phone": "021-772966",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.13668,
      "lng": 106.90443
    }
  },
  {
    "id": "br-503",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Teuku Umar No. 116, Sentra Layanan Tangerang",
    "phone": "021-124100",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15431,
      "lng": 106.6539
    }
  },
  {
    "id": "br-504",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Merdeka No. 123, Sentra Layanan Tangerang",
    "phone": "021-886619",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.17407,
      "lng": 106.60162
    }
  },
  {
    "id": "br-505",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Hasanuddin No. 130, Sentra Layanan Tangerang",
    "phone": "021-849123",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.18028,
      "lng": 106.63677
    }
  },
  {
    "id": "br-506",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pattimura No. 137, Sentra Layanan Tangerang",
    "phone": "021-481457",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.15739,
      "lng": 106.67233
    }
  },
  {
    "id": "br-507",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. RA Kartini No. 144, Sentra Layanan Tangerang",
    "phone": "021-530081",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19147,
      "lng": 106.62655
    }
  },
  {
    "id": "br-508",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. MT Haryono No. 151, Sentra Layanan Tangerang",
    "phone": "021-843952",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.1466,
      "lng": 106.62845
    }
  },
  {
    "id": "br-509",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Jend. Sudirman No. 158, Sentra Layanan Tangerang",
    "phone": "021-583046",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.14078,
      "lng": 106.67656
    }
  },
  {
    "id": "br-510",
    "name": "Adira AXI Sentra Layanan Tangerang Unit 1",
    "shortName": "Tangerang Unit 1",
    "city": "Tangerang",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Ahmad Yani No. 165, Sentra Layanan Tangerang",
    "phone": "021-863889",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.19272,
      "lng": 106.65355
    }
  },
  {
    "id": "br-511",
    "name": "Adira AXI Sentra Layanan Tangerang Selatan Unit 1",
    "shortName": "Tangerang Selatan Unit 1",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Gatot Subroto No. 172, Sentra Layanan Tangerang Selatan",
    "phone": "021-948077",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.27025,
      "lng": 106.7126
    }
  },
  {
    "id": "br-512",
    "name": "Adira AXI Sentra Layanan Tangerang Selatan Unit 1",
    "shortName": "Tangerang Selatan Unit 1",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Diponegoro No. 179, Sentra Layanan Tangerang Selatan",
    "phone": "021-412675",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2737,
      "lng": 106.74495
    }
  },
  {
    "id": "br-513",
    "name": "Adira AXI Sentra Layanan Tangerang Selatan Unit 1",
    "shortName": "Tangerang Selatan Unit 1",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Gajah Mada No. 186, Sentra Layanan Tangerang Selatan",
    "phone": "021-477894",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.29984,
      "lng": 106.713
    }
  },
  {
    "id": "br-514",
    "name": "Adira AXI Sentra Layanan Tangerang Selatan Unit 1",
    "shortName": "Tangerang Selatan Unit 1",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Veteran No. 193, Sentra Layanan Tangerang Selatan",
    "phone": "021-405267",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2667,
      "lng": 106.70731
    }
  },
  {
    "id": "br-515",
    "name": "Adira AXI Sentra Layanan Tangerang Selatan Unit 1",
    "shortName": "Tangerang Selatan Unit 1",
    "city": "Tangerang Selatan",
    "province": "Banten",
    "region": "Jawa",
    "address": "Jl. Pahlawan No. 20, Sentra Layanan Tangerang Selatan",
    "phone": "021-762902",
    "whatsapp": "6281289008899",
    "hours": "Senin - Sabtu: 08.30 - 17.00 WIB",
    "coordinates": {
      "lat": -6.2945,
      "lng": 106.75531
    }
  }
];
