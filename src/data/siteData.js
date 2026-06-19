import {
  Heart,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  Gem,
  Handshake,
  Clock,
  ClipboardCheck,
} from "lucide-react";

/* ============================================================
   SITE-WIDE DATA — Single source of truth for all copy/content
   ============================================================ */

export const brand = {
  name: "KANARA",
  tagline: "Where Your Story Becomes a Timeless Celebration", // Tagline tetap Inggris untuk kesan premium
  shortStatement:
    "Kanara Wedding Organizer membantu pasangan mewujudkan pengalaman pernikahan yang tenang, elegan, dan bermakna — dari konsultasi awal hingga akhir perayaan.",
  email: "hello@kanarawedding.com",
  whatsapp: "+6282249321965",
  whatsappDisplay: "0822-4932-1965",
  instagram: "@kanarawedding",
  instagramUrl: "https://instagram.com/kanarawedding",
  whatsappMessage: "Halo Kanara Wedding! Saya tertarik untuk mendiskusikan rencana pernikahan saya dan ingin menjadwalkan konsultasi. Boleh mohon info lebih lanjut mengenai layanan yang tersedia? Terima kasih.",
  copyright: `© ${new Date().getFullYear()} Kanara Wedding. All rights reserved.`,
};

export const navLinks = [
  { label: "Home", href: "home" },
  { label: "Tentang Kami", href: "about" },
  { label: "Layanan", href: "services" },
  { label: "Proses", href: "process" },
  { label: "Paket", href: "packages" },
  { label: "Galeri", href: "gallery" },
  { label: "FAQ", href: "faq" },
];

export const hero = {
  label: "Wedding Organizer & Event Planning",
  headline: "Pengalaman Pernikahan yang Tenang dan Elegan, Dirancang dari Cerita Anda",
  subheadline:
    "To see is to understand the human story",
  ctaPrimary: "Jadwalkan Konsultasi",
  ctaSecondary: "Lihat Layanan",
};

export const values = [
  {
    icon: Heart,
    title: "Perencanaan Terkonsep",
    description:
      "Setiap pernikahan berawal dari sebuah cerita. Kami mendengar, memahami, dan membantu merangkai perayaan Anda sejak percakapan pertama.",
  },
  {
    icon: Sparkles,
    title: "Koordinasi Elegan",
    description:
      "Dari keselarasan vendor hingga koordinasi keluarga, setiap elemen dikelola secara mulus dengan perhatian penuh pada detail.",
  },
  {
    icon: ShieldCheck,
    title: "Eksekusi Berorientasi Detail",
    description:
      "Di hari spesial Anda, setiap momen mengalir natural — karena setiap detail telah direncanakan dan dipersiapkan secara matang.",
  },
  {
    icon: Gem,
    title: "Pengalaman Pernikahan yang Tenang",
    description:
      "Kami menciptakan suasana tenang agar Anda bisa benar-benar menikmati momen perayaan, bebas dari stres dan kekhawatiran teknis.",
  },
];

export const about = {
  headline: "Partner Anda dalam Mewujudkan Perayaan yang Bermakna",
  paragraphs: [
    "Kanara adalah creative agency yang berfokus pada strategic perspective, human-centered design, dan meaningful storytelling.",
    "Kami tidak hanya membuat visual atau konten. Kami membantu brand menemukan cara pandang yang tepat untuk menyampaikan pesan mereka secara lebih kuat, relevan, dan berkesan.",
    "Nama Kanara terinspirasi dari kata Sanskerta: Kāna (mata) + Nara (manusia) yang secara simbolik menggambarkan cara manusia melihat dunia"
  ],
  highlights: [
    "Pendekatan personal untuk setiap pasangan",
    "Koordinasi yang tenang dan terstruktur",
    "Perencanaan pernikahan yang mendetail",
    "Pernikahan Anda adalah sebuah cerita, bukan sekadar acara",
  ],
};

export const services = [
  {
    icon: CalendarCheck,
    title: "Wedding Planning",
    description:
      "Dukungan menyeluruh sejak awal — pengembangan konsep, penyusunan timeline, koordinasi vendor, dan panduan budget yang disesuaikan dengan visi Anda.",
    cta: "Diskusikan Layanan Ini",
  },
  {
    icon: ClipboardCheck,
    title: "Wedding Organizer",
    description:
      "Koordinasi teknis menjelang dan saat hari H — manajemen rundown, koordinasi keluarga, penanganan vendor, dan alur acara yang teratur.",
    cta: "Diskusikan Layanan Ini",
  },
  {
    icon: Heart,
    title: "Intimate Wedding",
    description:
      "Untuk perayaan yang lebih personal, simpel, hangat, dan elegan — dirancang untuk menciptakan momen bermakna dalam suasana yang intim.",
    cta: "Diskusikan Layanan Ini",
  },
  {
    icon: Gem,
    title: "Engagement & Lamaran",
    description:
      "Koordinasi acara lamaran, engagement, atau perayaan pre-wedding yang disusun secara cantik sebagai awal perjalanan Anda bersama.",
    cta: "Diskusikan Layanan Ini",
  },
  {
    icon: Handshake,
    title: "Vendor Coordination",
    description:
      "Sudah memiliki vendor pilihan? Kami menyediakan koordinasi profesional untuk memastikan setiap partner sejalan, berkomunikasi dengan baik, dan tepat waktu.",
    cta: "Diskusikan Layanan Ini",
  },
  {
    icon: Clock,
    title: "Wedding Day Management",
    description:
      "Memastikan hari pernikahan Anda berjalan tepat waktu, sesuai rencana, dan minim stres — sehingga Anda bisa menikmati setiap momen berharga.",
    cta: "Diskusikan Layanan Ini",
  },
];

export const process = [
  {
    step: "01",
    title: "Konsultasi",
    description:
      "Kami mulai dengan memahami cerita, kebutuhan, tanggal, venue, jumlah tamu, dan ekspektasi Anda terhadap perayaan.",
  },
  {
    step: "02",
    title: "Konsep & Perencanaan",
    description:
      "Bersama-sama, kami menyusun konsep, timeline, checklist, kebutuhan vendor, dan semua hal yang diperlukan untuk pernikahan Anda.",
  },
  {
    step: "03",
    title: "Koordinasi",
    description:
      "Kami menghubungkan setiap detail — keluarga, vendor, rundown, technical meeting, dan persiapan akhir diselaraskan dengan saksama.",
  },
  {
    step: "04",
    title: "Hari Pernikahan",
    description:
      "Mengelola alur acara keseluruhan, memastikan vendor siap, keluarga terkoordinasi, dan setiap momen berjalan dengan tenang.",
  },

];

export const packages = [
  {
    title: "Essential Elegance",
    description:
      "Layanan dasar untuk memastikan kelancaran acara Anda dengan koordinasi yang esensial.",
    features: [
      { title: "Crew 4 Orang", description: "Terdiri dari 1 Project Officer, 1 Bride Assistant, dan 2 Field Coordinator." },
      { title: "1x Meeting Vendor dan Keluarga", description: "Koordinasi teknis menyeluruh sebelum hari H bersama seluruh vendor dan perwakilan keluarga." },
      { title: "Free Balon", description: "Pelepasan balon helium saat prosesi (10-15 pcs)." },
      { title: "Free Convety", description: "Confetti popper untuk momen selebrasi (2 pcs)." },
      { title: "Buku Tamu", description: "2 buah buku tamu eksklusif dengan desain elegan." },
      { title: "Free Alat Bantaian", description: "Peminjaman set alat bantaian/saweran lengkap." },
    ],
    price: "Rp 2.699.000",
    cta: "Pilih Paket",
    highlighted: false,
  },
  {
    title: "Timeless Signature",
    description:
      "Paket komprehensif dengan perencanaan mendetail dan kelengkapan tradisi eksklusif.",
    features: [
      { title: "Crew 6 Orang", description: "Terdiri dari 1 Project Officer, 1 Bride Assistant, 1 Groom Assistant, 1 Family Assistant, dan 2 Field Coordinator." },
      { title: "2x Konsultasi Wedding", description: "Sesi diskusi mendalam untuk menyusun konsep acara, budgeting, hingga pembuatan rundown." },
      { title: "1x Meeting Vendor dan Keluarga", description: "Rapat koordinasi akhir bersama vendor dan perwakilan keluarga untuk menyelaraskan teknis hari H." },
      { title: "Spreadsheets Planner", description: "Akses eksklusif ke dokumen kerja (Guest List, Budget Tracker, Rundown) yang terstruktur." },
      { title: "Free Balon", description: "Pelepasan balon helium saat prosesi (10-15 pcs)." },
      { title: "Free Convety", description: "Confetti popper untuk momen selebrasi (2 pcs)." },
      { title: "Buku Tamu", description: "2 buah buku tamu eksklusif dengan desain elegan." },
      { title: "Free Alat Bantaian", description: "Peminjaman set alat bantaian/saweran lengkap." },
      { title: "Free Bakakak dan Nasi Punar", description: "Disediakan khusus untuk kebutuhan prosesi adat Sunda (Huap Lingkung / Pabetot Bakakak)." },
      { title: "Welcome Sign", description: "Papan sambutan tamu eksklusif di area masuk." },
    ],
    price: "Rp 4.399.000",
    cta: "Pilih Paket",
    highlighted: true,
  },
  {
    title: "Classic Harmony",
    description:
      "Pilihan menengah dengan tambahan konsultasi dan dekorasi sambutan untuk tamu.",
    features: [
      { title: "Crew 5 Orang", description: "Terdiri dari 1 Project Officer, 1 Bride Assistant, 1 Groom Assistant, dan 2 Field Coordinator." },
      { title: "1x Konsultasi Wedding", description: "Sesi diskusi untuk menyusun garis besar acara dan membantu pembuatan rundown." },
      { title: "1x Meeting Vendor dan Keluarga", description: "Rapat koordinasi teknis bersama vendor terkait sebelum hari H." },
      { title: "Free Balon", description: "Pelepasan balon helium saat prosesi (10-15 pcs)." },
      { title: "Free Convety", description: "Confetti popper untuk momen selebrasi (2 pcs)." },
      { title: "Buku Tamu", description: "2 buah buku tamu eksklusif dengan desain elegan." },
      { title: "Free Alat Bantaian", description: "Peminjaman set alat bantaian/saweran lengkap." },
      { title: "Welcome Sign", description: "Papan sambutan tamu eksklusif di area masuk." },
    ],
    price: "Rp 3.399.000",
    cta: "Pilih Paket",
    highlighted: false,
  },
];

export const packagesNote =
  "Harga final bergantung pada skala acara, lokasi, timeline, kebutuhan vendor, dan cakupan koordinasi.";

export const gallery = [
  {
    title: "Resepsi Elegan",
    category: "Referensi Mood",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Seremoni Intim",
    category: "Arahan Visual",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Styling Detail",
    category: "Referensi Mood",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dekorasi Meja Romantis",
    category: "Arahan Visual",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Koordinasi Tenang",
    category: "Referensi Mood",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Momen Golden Hour",
    category: "Arahan Visual",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
  },
];

export const faq = [
  {
    question: "Kapan waktu terbaik untuk menghubungi wedding organizer?",
    answer:
      "Idealnya, 6 hingga 12 bulan sebelum tanggal pernikahan Anda. Namun, kami juga dapat menyesuaikan untuk waktu persiapan yang lebih singkat bergantung pada skala acara dan ketersediaan.",
  },
  {
    question: "Apakah Kanara bisa membantu dari awal perencanaan?",
    answer:
      "Tentu saja. Layanan Wedding Planning kami mencakup segalanya, mulai dari penyusunan konsep awal dan pemilihan vendor hingga manajemen timeline dan panduan budget.",
  },
  {
    question: "Apakah bisa booking Kanara hanya untuk koordinasi hari H?",
    answer:
      "Bisa. Paket Essential Coordination kami dirancang khusus untuk pasangan yang sudah merencanakan semuanya, tetapi membutuhkan koordinasi profesional pada hari H.",
  },
  {
    question: "Apakah Kanara melayani intimate wedding?",
    answer:
      "Ya, kami sangat menyukai perayaan intim. Paket Intimate Celebration kami dibuat khusus untuk acara yang lebih kecil, personal, dan sangat bermakna.",
  },
  {
    question: "Apakah harga paket bisa disesuaikan?",
    answer:
      "Setiap pernikahan itu unik, sehingga harga kami disesuaikan dengan kebutuhan, skala, dan ruang lingkup spesifik acara Anda. Hubungi kami untuk penawaran yang dipersonalisasi.",
  },
  {
    question: "Apakah Kanara membantu koordinasi vendor?",
    answer:
      "Ya. Baik Anda sudah memiliki vendor sendiri atau membutuhkan rekomendasi dari kami, kami akan mengelola semua komunikasi, penyelarasan, dan logistik vendor.",
  },
  {
    question: "Apa saja yang perlu disiapkan sebelum konsultasi?",
    answer:
      "Memiliki perkiraan tanggal, pilihan venue atau kota, estimasi jumlah tamu, serta gambaran umum tentang suasana pernikahan impian Anda akan sangat membantu kami dalam memberikan solusi terbaik.",
  },
  {
    question: "Bagaimana proses booking konsultasi di Kanara?",
    answer:
      "Cukup isi form Wedding Inquiry kami atau hubungi kami melalui WhatsApp atau email. Kami akan menjadwalkan konsultasi pada waktu yang paling nyaman bagi Anda.",
  },
];

export const ctaSection = {
  headline:
    "Kami percaya karya terbaik lahir dari kolaborasi, kepercayaan, dan pemahaman mendalam antara tim dan klien",
  subheadline:
    "Ceritakan kisah Anda, tanggal yang dipilih, dan suasana impian Anda. Kami akan membantu merangkai perayaan dengan perencanaan matang dan koordinasi yang mulus.",
  ctaPrimary: "Jadwalkan Konsultasi",
  ctaSecondary: "Mulai Wedding Inquiry",
};

export const contactForm = {
  headline: "Wedding Inquiry",
  subheadline:
    "Bagikan cerita dan detail pernikahan Anda. Kami akan menghubungi Anda untuk menjadwalkan konsultasi personal.",
  successTitle: "Inquiry Diterima",
  successMessage:
    "Terima kasih telah berbagi cerita dengan kami. Inquiry Anda telah siap — silakan lanjutkan melalui WhatsApp atau email untuk mengatur jadwal konsultasi.",
  serviceOptions: [
    "Wedding Planning",
    "Wedding Organizer",
    "Intimate Wedding",
    "Engagement / Lamaran",
    "Vendor Coordination",
    "Wedding Day Management",
    "Custom / Lainnya",
  ],
  budgetOptions: [
    "Di bawah 30 juta",
    "30 – 50 juta",
    "50 – 100 juta",
    "100 – 200 juta",
    "Di atas 200 juta",
    "Fleksibel / Belum Menentukan",
  ],
};

export const footer = {
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "Tentang Kami", href: "about" },
        { label: "Layanan", href: "services" },
        { label: "Paket", href: "packages" },
        { label: "Kontak", href: "contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Wedding Planning", href: "services" },
        { label: "Wedding Organizer", href: "services" },
        { label: "Intimate Wedding", href: "services" },
        { label: "Vendor Coordination", href: "services" },
      ],
    },
  ],
};
