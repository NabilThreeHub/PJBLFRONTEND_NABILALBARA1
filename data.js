/* data.js — data awal wisata */
const initialData = [
  {
    id: 1,
    name: "Pantai Pink (Tangsi)",
    category: "Pantai",
    location: "Desa Sekaroh, Jerowaru, Lombok Timur, NTB",
    description: "Pantai berpasir merah muda akibat koral merah, pemandangan memukau.",
    image: "assets/PANTAI/Pantai-Pink-Lombok.png"
  },
  {
    id: 2,
    name: "Pantai Kuta Mandalika",
    category: "Pantai",
    location: "Desa Kuta, Pujut, Lombok Tengah, NTB",
    description: "Pantai pasir putih, kawasan Mandalika.",
    image: "assets/PANTAI/Pantai-Kuta-Lombok.jpg"
  },
  {
    id: 3,
    name: "Pantai Tanjung Aan",
    category: "Pantai",
    location: "Desa Kuta, Pujut, Lombok Tengah, NTB",
    description: "Pasir halus seperti merica dan air jernih.",
    image: "assets/PANTAI/BIRUNYA_TANJUNG_AAN.jpg"
  },
  {
    id: 4,
    name: "Gunung Rinjani",
    category: "Gunung",
    location: "Taman Nasional Gunung Rinjani, Lombok",
    description: "Gunung ikonik dengan Danau Segara Anak.",
    image: "assets/GUNUNG DAN PERBUKITAN/summit-mount-rinjani.jpg"
  },
  {
    id: 5,
    name: "Bukit Merese",
    category: "Gunung",
    location: "Desa Kuta, Pujut, Lombok Tengah",
    description: "Bukit landai dengan view sunset spektakuler.",
    image: "assets/GUNUNG DAN PERBUKITAN/bukit-merese-profile1645770975.png"
  },
  {
    id: 6,
    name: "Bukit Pergasingan",
    category: "Gunung",
    location: "Sembalun, Lombok Timur",
    description: "Spot trekking ringan, cocok untuk sunrise.",
    image: "assets/GUNUNG DAN PERBUKITAN/IMG20140907061148.jpg"
  },
  {
    id: 7,
    name: "Tiu Kelep",
    category: "Air Terjun",
    location: "Senaru, Lombok Utara",
    description: "Air terjun bertingkat, suasana hutan yang segar.",
    image: "assets/AIR TERJUN/Senaru_Waterfall_of_Tiu_Kelep.jpg"
  },
  {
    id: 8,
    name: "Sendang Gile",
    category: "Air Terjun",
    location: "Senaru, Lombok Utara",
    description: "Air terjun dekat pintu Rinjani, mudah diakses.",
    image: "assets/AIR TERJUN/sendang-gile-waterfall.jpg"
  },
  {
    id: 9,
    name: "Benang Stokel & Kelambu",
    category: "Air Terjun",
    location: "Aik Berik, Lombok Tengah",
    description: "Dua air terjun dalam satu kawasan.",
    image: "assets/AIR TERJUN/lombok-island-is-not.jpg"
  },
  {
    id: 10,
    name: "Desa Sade",
    category: "Budaya",
    location: "Rembitan, Pujut, Lombok Tengah",
    description: "Desa adat Sasak, tenun songket dan rumah tradisional.",
    image: "assets/WISATA BUDAYA/Desa-Wisata-Sade-di-Lombok-6.jpg"
  },
  {
    id: 11,
    name: "Desa Banyumulek",
    category: "Budaya",
    location: "Kediri, Lombok Barat",
    description: "Pusat kerajinan gerabah.",
    image: "assets/WISATA BUDAYA/desa-Banyumulek.jpg"
  },
  {
    id: 12,
    name: "Desa Ende",
    category: "Budaya",
    location: "Rambitan, Pujut",
    description: "Desa tradisional Sasak.",
    image: "assets/WISATA BUDAYA/sasak-village_sade.png"
  },
  {
    id: 13,
    name: "Masjid Bayan Beleq",
    category: "Sejarah",
    location: "Bayan, Lombok Utara",
    description: "Masjid tertua, nilai sejarah tinggi.",
    image: "assets/WISATA RELIGI/Bayan_Beleq_Mosque,_Lombok,_Indonesia.jpg"
  },
  {
    id: 14,
    name: "Makam Selaparang",
    category: "Sejarah",
    location: "Selaparang, Lombok Timur",
    description: "Kompleks makam bersejarah.",
    image: "assets/WISATA RELIGI/Makam+Selaparang.jpg"
  }
];

/* Simpan hanya sekali ke localStorage */
if (!localStorage.getItem('wisataData')) {
  localStorage.setItem('wisataData', JSON.stringify(initialData));
}
