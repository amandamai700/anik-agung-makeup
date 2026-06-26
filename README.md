# Aurelia Beauty - Professional Make Up Artist Website

Website resmi untuk Aurelia Beauty, layanan professional make up artist untuk wedding, wisuda, engagement, photoshoot, dan hairdo.

## 🌟 Fitur Utama

- **Home Page** - Landing page dengan hero section, statistics, dan testimonial
- **About Page** - Profil perusahaan dan tim profesional
- **Services** - Daftar layanan lengkap dengan detail harga dan paket
- **Portfolio** - Galeri karya makeup dan styling
- **Gallery** - Koleksi foto hasil karya dengan filter kategori
- **Packages** - Paket bundle makeup dengan diskon khusus
- **Testimonials** - Ulasan dari klien yang puas
- **Blog** - Tips kecantikan dan panduan makeup
- **Booking** - Form pemesanan online terintegrasi WhatsApp
- **Contact** - Halaman kontak dan lokasi
- **FAQ** - Pertanyaan yang sering diajukan
- **Admin Dashboard** - Panel administrasi untuk mengelola konten

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 7.3.2
- **Styling**: Tailwind CSS 4.1.17
- **Animation**: Framer Motion 12.40.0
- **Routing**: React Router DOM 7.18.0
- **Icons**: React Icons 5.6.0
- **Date Picker**: React DatePicker 9.1.0
- **Lightbox**: Yet Another React Lightbox 3.32.0
- **Carousel**: Swiper 12.2.0
- **Toast Notifications**: React Hot Toast 2.6.0
- **Language**: TypeScript 5.9.3

## 📋 Persyaratan

- Node.js v18 atau lebih tinggi
- npm v9 atau lebih tinggi

## 🚀 Quick Start

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### 3. Build untuk Production
```bash
npm run build
```

Output akan tersimpan di folder `dist/`

### 4. Preview Build
```bash
npm run preview
```

## 📁 Struktur Folder

```
luxury-mua-website/
├── src/
│   ├── components/         # Komponen reusable (Navbar, Footer)
│   ├── pages/             # Halaman-halaman aplikasi
│   ├── data/              # Data dan dummy content
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions (animations, cn)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── dist/                  # Build output
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Mengubah Warna Brand

Edit file `index.html` dan file `.tsx` untuk mengubah warna-warna berikut:
- Primary Color: `#D4AF37` (Gold)
- Secondary Color: `#D9A5B3` (Rose)
- Accent Color: `#F9D6E5` (Light Pink)

### Mengubah Data

Edit file `src/data/index.ts` untuk mengubah:
- Daftar layanan (services)
- Portfolio items
- Testimonial
- Blog posts
- Packages

### Mengubah Kontak

Edit file `src/pages/Contact.tsx` dan `src/components/Navbar.tsx` untuk mengubah:
- Nomor WhatsApp
- Email
- Social media links
- Jam operasional

## 🔐 Admin Panel

### Akses Admin
- URL: `/admin`
- Username: `admin`
- Password: `aurelia2025`

**Catatan**: Ganti kredensial ini sebelum deploy ke production!

### Features
- Dashboard dengan statistik
- Kelola booking
- Kelola layanan dan harga
- Kelola portfolio
- Kelola testimoni
- Kelola blog
- Pengaturan umum

## 📱 Integrasi WhatsApp

Website ini menggunakan WhatsApp Business API untuk:
- Penerimaan booking langsung ke WhatsApp
- Form contact yang terintegrasi dengan WhatsApp
- Link WhatsApp di berbagai halaman

Untuk mengubah nomor WhatsApp, edit nomor di:
- `src/pages/Contact.tsx`
- `src/pages/Booking.tsx`
- `src/components/Navbar.tsx`

## 🌐 SEO Optimization

Website sudah dioptimalkan untuk SEO:
- Meta tags lengkap di `index.html`
- Open Graph support
- Twitter Card support
- JSON-LD schema markup
- Semantic HTML structure
- Performance optimization

## 📊 Analytics (Opsional)

Untuk menambahkan Google Analytics:
1. Buat Google Analytics account
2. Tambahkan script di `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🚢 Deployment

### Deploy ke Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify

1. Push ke GitHub
2. Connect repository di Netlify
3. Build command: `npm run build`
4. Publish directory: `dist/`

### Deploy ke Server Sendiri

1. Build project: `npm run build`
2. Upload folder `dist/` ke server
3. Configure web server untuk serve `index.html` untuk semua routes

## 🔧 Environment Variables

Buat file `.env` berdasarkan `.env.example`:

```bash
cp .env.example .env
```

Edit file `.env` sesuai kebutuhan.

## 📝 License

© 2025 Aurelia Beauty. All rights reserved.

## 📧 Support

Untuk pertanyaan atau issue teknis, hubungi tim development.

---

**Terakhir diupdate**: 2025-06-22
