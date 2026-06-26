# 🚀 Quick Start Guide

Panduan cepat untuk memulai development atau deployment website Aurelia Beauty.

## ⚡ Start Development Server

```bash
# Navigate ke project folder
cd luxury-mua-website

# Install dependencies (jika belum)
npm install

# Jalankan development server
npm run dev
```

Server akan berjalan di: `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Build optimized production version
npm run build

# Preview production build
npm run preview
```

Output akan tersimpan di folder `dist/`

## 📝 Konfigurasi Penting

### 1. Update WhatsApp Number
Edit nomor WhatsApp di file-file berikut:
- `src/pages/Contact.tsx` - Line 19
- `src/pages/Booking.tsx` - Line 140
- `src/components/Navbar.tsx` - Line 82
- `.env.example` - Line 1

### 2. Update Admin Credentials
Edit di `src/pages/Admin.tsx` - Line 3:
```typescript
const ADMIN_USER = { username: 'admin', password: 'YOUR_NEW_PASSWORD' };
```

### 3. Setup Environment Variables
```bash
# Copy template
cp .env.example .env

# Edit sesuai kebutuhan
nano .env  # atau gunakan editor favorit
```

### 4. Update Social Media Links
Edit di `src/pages/Contact.tsx` - Line 15-18:
```typescript
const socialLinks = [
  { ..., href: 'https://wa.me/YOUR_NUMBER', ... },
  { ..., href: 'https://instagram.com/YOUR_HANDLE', ... },
  // ... dan seterusnya
];
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      → Navigation bar
│   └── Footer.tsx      → Footer section
├── pages/
│   ├── Home.tsx        → Homepage
│   ├── About.tsx       → Tentang kami
│   ├── Services.tsx    → Layanan
│   ├── Portfolio.tsx   → Portfolio
│   ├── Gallery.tsx     → Galeri foto
│   ├── Packages.tsx    → Paket harga
│   ├── Testimonials.tsx → Testimoni
│   ├── Blog.tsx        → Blog
│   ├── BlogPost.tsx    → Detail blog
│   ├── Booking.tsx     → Form booking
│   ├── Contact.tsx     → Kontak & lokasi
│   ├── FAQ.tsx         → FAQ
│   └── Admin.tsx       → Admin dashboard
├── data/
│   └── index.ts        → Data content (services, testimonials, blog, etc)
├── types/
│   └── index.ts        → TypeScript interfaces
├── utils/
│   ├── animations.ts   → Framer Motion animations
│   └── cn.ts          → Utility untuk class names
├── App.tsx            → Main router component
├── main.tsx           → Entry point
└── index.css          → Global styles
```

## 🛠️ Common Tasks

### Menambah Service Baru
Edit `src/data/index.ts`:
```typescript
export const services: Service[] = [
  {
    id: 'new-service',
    title: 'New Service',
    description: 'Description',
    price: 1000000,
    duration: '2 jam',
    image: 'image-url',
    category: 'Category',
    includes: ['Item 1', 'Item 2'],
    faq: [{ q: 'Question?', a: 'Answer' }]
  },
  // ... services lainnya
];
```

### Menambah Testimonial
Edit `src/data/index.ts`:
```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'new-testimonial',
    name: 'Customer Name',
    service: 'Service Name',
    content: 'Testimonial content...',
    rating: 5,
    image: 'photo-url'
  },
  // ... testimonial lainnya
];
```

### Menambah Blog Post
Edit `src/data/index.ts`:
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'new-post',
    title: 'Blog Title',
    excerpt: 'Short description',
    content: 'Full blog content...',
    category: 'Blog Category',
    date: 'June 22, 2025',
    image: 'image-url',
    author: 'Author Name'
  },
  // ... blog posts lainnya
];
```

### Mengubah Warna Brand
Edit `src/index.css` dan komponen `.tsx`:
- Gold: `#D4AF37` → Ganti dengan warna baru
- Rose: `#D9A5B3` → Ganti dengan warna baru
- Pink: `#F9D6E5` → Ganti dengan warna baru
- Dark: `#2B2B2B` → Ganti dengan warna baru

## 🧪 Testing

### Test Responsive Design
```bash
npm run dev
# Buka http://localhost:5173
# Press F12 untuk DevTools
# Test di mobile, tablet, desktop views
```

### Test Form
1. Klik "Book Now" atau kunjungi `/booking`
2. Isi form dengan data test
3. Verify bahwa pesan terkirim ke WhatsApp

### Test Admin
1. Kunjungi `/admin`
2. Login dengan:
   - Username: `admin`
   - Password: `aurelia2025` (atau custom password)
3. Test dashboard dan navigation

## 📱 Responsive Breakpoints

Project menggunakan Tailwind CSS breakpoints:
- Mobile: `max-w-screen-xs` (< 640px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)
- XL: `2xl:` (1536px+)

## 🔍 Useful Links

- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **React Router**: https://reactrouter.com

## 🐛 Troubleshooting

### Port 5173 sudah digunakan
```bash
npm run dev -- --port 3000
# atau gunakan port lain
```

### Dependencies error
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles tidak load
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check console untuk error

### Form tidak terkirim ke WhatsApp
- Verify nomor WhatsApp sudah benar
- Check format URL encoding
- Test di browser console

## 📞 Support & Resources

Jika ada pertanyaan atau issue:
1. Check README.md untuk informasi lebih lengkap
2. Check DEPLOYMENT.md untuk deployment guide
3. Cek dokumentasi framework yang digunakan
4. Hubungi team development

---

**Happy coding! 🎨**
