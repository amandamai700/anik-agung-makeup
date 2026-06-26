import { Service, PortfolioItem, Testimonial, BlogPost, Package } from '../types';

export const services: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding Makeup',
    description: 'Tampil memukau di hari pernikahan Anda dengan riasan mewah, tahan lama, dan sempurna. Kami menggunakan produk premium terbaik untuk memastikan Anda bersinar sepanjang hari.',
    price: 1500000,
    duration: '3-4 jam',
    image: 'foto-category/wedding/wedding3.png',
    category: 'Wedding',
    includes: [
      'Konsultasi makeup 1 jam sebelumnya',
      'Riasan wajah full coverage premium',
      'Eyelash natural/dramatic',
      'Setting spray tahan 12 jam',
      'Touch up kit gratis',
      'Dokumentasi behind the scene'
    ],
    faq: [
      { q: 'Berapa lama proses pengerjaan wedding makeup?', a: 'Proses wedding makeup membutuhkan waktu 3-4 jam untuk hasil yang maksimal dan sempurna.' },
      { q: 'Apakah makeup tahan seharian?', a: 'Ya, kami menggunakan produk premium tahan lama hingga 12 jam dengan setting spray khusus.' },
      { q: 'Apakah tersedia layanan home service?', a: 'Ya, kami menyediakan layanan home service ke seluruh wilayah Jakarta dan sekitarnya.' }
    ]
  },
  {
    id: 'engagement',
    title: 'Engagement Makeup',
    description: 'Rayakan momen lamaran dengan riasan elegan dan romantis yang memancarkan kebahagiaan dan kecantikan alami Anda.',
    price: 800000,
    duration: '2-3 jam',
    image: 'foto-category/engagement/engagement2.png',
    category: 'Engagement',
    includes: [
      'Riasan wajah full coverage',
      'Natural or glam look sesuai request',
      'Eyelash premium',
      'Setting spray',
      'Touch up kit'
    ],
    faq: [
      { q: 'Bisa request gaya makeup tertentu?', a: 'Tentu! Kami selalu konsultasi terlebih dahulu untuk memahami keinginan klien.' },
      { q: 'Apakah bisa didampingi saat acara?', a: 'Tersedia paket with assistance untuk touch-up selama acara berlangsung.' }
    ]
  },
  {
    id: 'graduation',
    title: 'Graduation Makeup',
    description: 'Abadikan momen wisuda Anda dengan riasan segar, cantik, dan photogenic. Tampil percaya diri di hari keberhasilan Anda.',
    price: 450000,
    duration: '1.5-2 jam',
    image: 'foto-category/graduation/graduation2.png',
    category: 'Graduation',
    includes: [
      'Riasan wajah natural/glam',
      'Eyelash natural',
      'Setting spray',
      'Hairdo sederhana (opsional)',
      'Konsultasi singkat'
    ],
    faq: [
      { q: 'Apakah bisa makeup dan hairdo sekaligus?', a: 'Ya, tersedia paket kombinasi makeup + hairdo dengan harga spesial.' },
      { q: 'Maksimal berapa jam sebelum acara?', a: 'Sebaiknya 2-3 jam sebelum acara untuk hasil terbaik.' }
    ]
  },
  {
    id: 'photoshoot',
    title: 'Photoshoot Makeup',
    description: 'Riasan khusus untuk photoshoot yang dirancang untuk tampil sempurna di depan kamera dengan berbagai konsep dan tema.',
    price: 600000,
    duration: '2-3 jam',
    image: 'foto-category/photoshoot/photoshoot1.png',
    category: 'Photoshoot',
    includes: [
      'Makeup camera-ready',
      'Multiple look (tambah biaya)',
      'Eyelash premium',
      'Contouring & highlighting',
      'Setting spray',
      'Koordinasi dengan fotografer'
    ],
    faq: [
      { q: 'Apa bedanya makeup photoshoot dengan biasa?', a: 'Makeup photoshoot dirancang khusus untuk tampak sempurna di kamera dengan teknik contouring yang lebih intens.' },
      { q: 'Bisa berapa look dalam satu sesi?', a: 'Standar 1 look, tambahan look dikenakan biaya Rp 250.000/look.' }
    ]
  },
  {
    id: 'hairdo',
    title: 'Hairdo & Styling',
    description: 'Penataan rambut profesional untuk melengkapi penampilan Anda. Dari gaya simple elegan hingga updo mewah yang tahan lama.',
    price: 350000,
    duration: '1-2 jam',
    image: 'foto-category/hairdo/hairdo1.png',
    category: 'Hairdo',
    includes: [
      'Konsultasi gaya rambut',
      'Cuci blow (opsional)',
      'Penataan rambut sesuai keinginan',
      'Hairspray tahan lama',
      'Aksesori rambut dasar'
    ],
    faq: [
      { q: 'Tersedia untuk rambut panjang dan pendek?', a: 'Ya, kami melayani semua panjang rambut. Penyesuaian harga untuk rambut sangat panjang.' },
      { q: 'Apakah bisa kombinasi dengan makeup?', a: 'Ya, ada diskon spesial untuk paket makeup + hairdo.' }
    ]
  },
  {
    id: 'homeservice',
    title: 'Home Service',
    description: 'Layanan makeup profesional langsung ke rumah atau venue Anda. Kami datang dengan peralatan lengkap dan profesional.',
    price: 200000,
    duration: 'Sesuai layanan',
    image: 'foto-category/homeservice/homeservice1.png',
    category: 'Home Service',
    includes: [
      'Layanan ke seluruh Jakarta & sekitarnya',
      'Peralatan lengkap dibawa',
      'Tidak ada tambahan biaya setup',
      'Tepat waktu dan profesional'
    ],
    faq: [
      { q: 'Area mana saja yang dilayani?', a: 'Kami melayani Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Area lain mohon konfirmasi terlebih dahulu.' },
      { q: 'Bagaimana perhitungan biaya transport?', a: 'Biaya transport mulai dari Rp 50.000 - Rp 200.000 tergantung jarak.' }
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Bridal Elegance', category: 'Wedding', image: 'foto-category/wedding/wedding1.png', alt: 'Bridal wedding makeup elegant' },
  { id: '2', title: 'Natural Bridal', category: 'Wedding', image: 'foto-category/wedding/wedding2.png', alt: 'Natural bridal makeup portrait' },
  { id: '3', title: 'Classic Wedding', category: 'Wedding', image: 'foto-category/wedding/wedding3.png', alt: 'Classic wedding bridal look' },
  { id: '4', title: 'Glam Studio', category: 'Photoshoot', image: 'foto-category/photoshoot/photoshoot1.png', alt: 'Glamour photoshoot makeup' },
  { id: '5', title: 'Studio Glam', category: 'Photoshoot', image: 'foto-category/photoshoot/photoshoot1.png', alt: 'Studio professional makeup photoshoot' },
  { id: '6', title: 'Wisuda Cantik', category: 'Graduation', image: 'foto-category/graduation/graduation1.png', alt: 'Graduation makeup beautiful' },
  { id: '7', title: 'Wisuda Elegance', category: 'Graduation', image: 'foto-category/graduation/graduation2.png', alt: 'Elegant graduation makeup' },
  { id: '8', title: 'Engagement Glow', category: 'Engagement', image: 'foto-category/engagement/engagement1.png', alt: 'Engagement makeup glow' },
  { id: '9', title: 'Bridal Tiara', category: 'Wedding', image: 'foto-category/wedding/wedding4.png', alt: 'Bridal tiara wedding makeup' },
  { id: '10', title: 'Hairdo Elegant', category: 'Hairdo', image: 'foto-category/hairdo/hairdo1.png', alt: 'Elegant hairdo styling' },
  { id: '11', title: 'Professional Look', category: 'Photoshoot', image: 'foto-category/photoshoot/photoshoot1.png', alt: 'Professional photoshoot makeup' },
  { id: '12', title: 'Bridal Ready', category: 'Wedding', image: 'foto-category/wedding/wedding5.png', alt: 'Bridal getting ready makeup' },
  { id: '13', title: 'Engagement Sweet', category: 'Engagement', image: 'foto-category/engagement/engagement2.png', alt: 'Sweet engagement makeup' },
  { id: '14', title: 'Wisuda Fresh', category: 'Graduation', image: 'foto-category/graduation/graduation1.png', alt: 'Fresh graduation makeup' },
  { id: '15', title: 'Studio Artistry', category: 'Photoshoot', image: 'foto-category/photoshoot/photoshoot1.png', alt: 'Artistic studio photoshoot makeup' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sari Dewi',
    rating: 5,
    review: 'Makeup-nya luar biasa! Tahan seharian penuh dari pagi hingga malam tanpa touch-up. Aurelia sangat profesional dan memahami keinginan saya. Sangat rekomendasikan untuk wedding makeup!',
    avatar: 'https://images.pexels.com/photos/9899414/pexels-photo-9899414.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Wedding Makeup',
    date: 'Maret 2025'
  },
  {
    id: '2',
    name: 'Putri Maharani',
    rating: 5,
    review: 'Hasil riasan wisuda saya amazing! Terlihat natural tapi tetap glowy dan cantik di foto. MUA-nya ramah dan sabar banget. Pasti akan booking lagi!',
    avatar: 'https://images.pexels.com/photos/13749115/pexels-photo-13749115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Graduation Makeup',
    date: 'Februari 2025'
  },
  {
    id: '3',
    name: 'Nadya Pratiwi',
    rating: 5,
    review: 'Sungguh puas dengan hasilnya! Makeup engagement saya persis seperti referensi yang saya berikan. Aurelia sangat detail dan perfeksionis. Worth every penny!',
    avatar: 'https://images.pexels.com/photos/30355872/pexels-photo-30355872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Engagement Makeup',
    date: 'Januari 2025'
  },
  {
    id: '4',
    name: 'Rizka Amalia',
    rating: 5,
    review: 'Pelayanan home service-nya sangat memuaskan. Datang tepat waktu, peralatan lengkap, dan hasilnya luar biasa cantik. Sangat recommended!',
    avatar: 'https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Home Service - Wedding',
    date: 'April 2025'
  },
  {
    id: '5',
    name: 'Tiara Wulandari',
    rating: 5,
    review: 'Photoshoot makeup saya hasilnya perfect banget! Terlihat flawless di kamera. Teknik makeuup-nya sangat profesional dan sesuai dengan konsep tema yang saya minta.',
    avatar: 'https://images.pexels.com/photos/5150274/pexels-photo-5150274.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Photoshoot Makeup',
    date: 'Maret 2025'
  },
  {
    id: '6',
    name: 'Cynthia Larasati',
    rating: 5,
    review: 'Hairdo-nya bagus banget dan tahan lama dari pagi sampai malam! Aurelia sangat kreatif dan bisa memadu-padankan gaya rambut dengan makeup. Terima kasih Aurelia Beauty!',
    avatar: 'https://images.pexels.com/photos/15524744/pexels-photo-15524744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    service: 'Hairdo & Makeup',
    date: 'Mei 2025'
  }
];

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic Beauty',
    price: 450000,
    description: 'Paket sempurna untuk acara kasual, wisuda, atau photoshoot sederhana.',
    features: [
      'Makeup natural/glam pilihan',
      'Eyelash natural',
      'Setting spray',
      'Durasi 1.5-2 jam',
      'Konsultasi singkat',
      'Touch-up kit kecil'
    ],
    popular: false
  },
  {
    id: 'elegant',
    name: 'Elegant Queen',
    price: 850000,
    originalPrice: 1000000,
    description: 'Paket terbaik untuk engagement, photoshoot profesional, dan acara spesial.',
    features: [
      'Full coverage makeup premium',
      'Eyelash premium natural/dramatic',
      'Setting spray tahan 12 jam',
      'Hairdo sederhana',
      'Durasi 2-3 jam',
      'Konsultasi mendalam',
      'Touch-up kit lengkap',
      'Dokumentasi behind the scene'
    ],
    popular: true,
    badge: 'Terpopuler'
  },
  {
    id: 'bridal',
    name: 'Bridal Luxe',
    price: 1800000,
    originalPrice: 2200000,
    description: 'Paket mewah untuk hari pernikahan Anda yang paling berkesan seumur hidup.',
    features: [
      'Makeup wedding full premium',
      'Eyelash premium mewah',
      'Setting spray tahan 16 jam',
      'Hairdo bridal mewah',
      'Durasi 3-4 jam',
      'Trial makeup sebelumnya',
      'Assistance seharian (touch-up)',
      'Touch-up kit deluxe',
      'Dokumentasi lengkap',
      'Free konsultasi tak terbatas',
      'Home service (Jakarta)'
    ],
    popular: false,
    badge: 'Premium'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tips Makeup Wedding Tahan Lama Sepanjang Hari',
    excerpt: 'Hari pernikahan adalah momen paling istimewa. Pastikan makeup Anda tahan dari pagi hingga malam dengan tips profesional ini.',
    content: '',
    category: 'Wedding Tips',
    image: 'https://images.pexels.com/photos/19898027/pexels-photo-19898027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    author: 'Aurelia Beauty',
    date: '15 Mei 2025',
    readTime: '5 min',
    tags: ['wedding', 'tips', 'makeup']
  },
  {
    id: '2',
    title: 'Skincare Routine Sebelum Event Besar: Panduan Lengkap',
    excerpt: 'Kulit yang sehat adalah fondasi makeup yang sempurna. Pelajari rutinitas skincare yang tepat sebelum acara besar Anda.',
    content: '',
    category: 'Skincare',
    image: 'https://images.pexels.com/photos/4938508/pexels-photo-4938508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    author: 'Aurelia Beauty',
    date: '10 Mei 2025',
    readTime: '7 min',
    tags: ['skincare', 'tips', 'beauty']
  },
  {
    id: '3',
    title: 'Trend Makeup 2025: Dari Runway ke Kehidupan Sehari-hari',
    excerpt: 'Apa saja tren makeup terpanas di 2025? Dari glass skin hingga bold lip, kami merangkum semua untuk Anda.',
    content: '',
    category: 'Beauty Trend',
    image: 'https://images.pexels.com/photos/4938514/pexels-photo-4938514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    author: 'Aurelia Beauty',
    date: '5 Mei 2025',
    readTime: '6 min',
    tags: ['trend', '2025', 'makeup']
  },
  {
    id: '4',
    title: 'Cara Memilih MUA yang Tepat untuk Hari Pernikahan',
    excerpt: 'Memilih makeup artist untuk hari pernikahan bukan hal yang mudah. Berikut panduan lengkap untuk membantu keputusan Anda.',
    content: '',
    category: 'Wedding Tips',
    image: 'https://images.pexels.com/photos/1327353/pexels-photo-1327353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    author: 'Aurelia Beauty',
    date: '1 Mei 2025',
    readTime: '8 min',
    tags: ['wedding', 'MUA', 'tips']
  },
  {
    id: '5',
    title: 'Makeup Wisuda: Tampil Cantik dan Photogenic',
    excerpt: 'Wisuda adalah momen kebanggaan. Pelajari tips makeup graduation yang akan membuat Anda tampil memukau di semua foto.',
    content: '',
    category: 'Tips Makeup',
    image: 'https://images.pexels.com/photos/13749115/pexels-photo-13749115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    author: 'Aurelia Beauty',
    date: '25 April 2025',
    readTime: '5 min',
    tags: ['wisuda', 'graduation', 'tips']
  },
  {
    id: '6',
    title: 'Glass Skin: Rahasia Kulit Bercahaya Ala Korea',
    excerpt: 'Glass skin adalah tren kulit yang mempesona dari Korea. Pelajari cara mencapainya dengan produk yang tepat.',
    content: '',
    category: 'Skincare',
    image: 'https://images.pexels.com/photos/7670767/pexels-photo-7670767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    author: 'Aurelia Beauty',
    date: '20 April 2025',
    readTime: '6 min',
    tags: ['glass skin', 'korea', 'skincare']
  }
];

export const faqs = [
  {
    q: 'Bagaimana cara melakukan booking?',
    a: 'Anda bisa booking melalui website ini dengan mengisi form booking, atau langsung menghubungi kami via WhatsApp di 0812-3456-7890. Konfirmasi akan dikirim dalam 1x24 jam.'
  },
  {
    q: 'Berapa jauh sebelumnya saya harus booking?',
    a: 'Untuk wedding dan event besar, disarankan booking minimal 3-6 bulan sebelumnya. Untuk acara biasa, minimal 2-4 minggu sebelumnya.'
  },
  {
    q: 'Apakah ada biaya trial makeup?',
    a: 'Trial makeup tersedia dengan biaya Rp 300.000 (khusus paket Bridal Luxe gratis trial). Trial sangat direkomendasikan untuk wedding agar hasilnya sesuai keinginan.'
  },
  {
    q: 'Produk apa yang digunakan?',
    a: 'Kami menggunakan produk makeup premium dari brand internasional terkemuka seperti Charlotte Tilbury, NARS, Huda Beauty, MAC, dan produk lokal premium berkualitas tinggi.'
  },
  {
    q: 'Bagaimana kebijakan pembatalan booking?',
    a: 'Pembatalan hingga 7 hari sebelum acara dapat refund 50%. Pembatalan kurang dari 7 hari tidak dapat direfund. Reschedule dapat dilakukan dengan konfirmasi minimal 3 hari sebelumnya.'
  },
  {
    q: 'Apakah tersedia untuk acara di luar Jakarta?',
    a: 'Ya, kami melayani berbagai kota di Indonesia. Untuk acara di luar Jabodetabek, biaya perjalanan dan akomodasi akan disesuaikan.'
  },
  {
    q: 'Berapa lama waktu makeup berlangsung?',
    a: 'Tergantung layanan: Wedding 3-4 jam, Engagement 2-3 jam, Wisuda 1.5-2 jam, Photoshoot 2-3 jam, Hairdo 1-2 jam.'
  },
  {
    q: 'Apakah ada diskon untuk group booking?',
    a: 'Ya! Tersedia diskon khusus untuk pemesanan group (5+ orang) seperti bridesmaids, keluarga, atau grup wisuda. Hubungi kami untuk penawaran spesial.'
  }
];

export const stats = [
  { value: 250, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '+', label: 'Wedding Makeup' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '★', label: 'Customer Rating' }
];
