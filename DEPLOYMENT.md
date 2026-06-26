# 📦 Panduan Deployment

Dokumen ini menjelaskan cara deploy website Aurelia Beauty ke production.

## 📋 Checklist Pre-Deployment

- [ ] Update nomor WhatsApp di semua file
- [ ] Ganti admin password di `src/pages/Admin.tsx`
- [ ] Update informasi kontak di `src/pages/Contact.tsx`
- [ ] Update social media links
- [ ] Verify semua links berfungsi dengan baik
- [ ] Test booking form
- [ ] Test admin login
- [ ] Review SEO meta tags
- [ ] Test responsive design di mobile
- [ ] Setup email notifications (jika diperlukan)
- [ ] Create backup database (jika ada)

## 🚀 Option 1: Deploy ke Vercel (Recommended)

### Keuntungan
- Free untuk website statis
- Fast CDN distribution
- Automatic SSL certificate
- Easy rollback

### Langkah-langkah

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Konfigurasi (First time only)**
   - Project name: `aurelia-beauty`
   - Root directory: `.` (root)
   - Build command: `npm run build`
   - Output directory: `dist`

5. **Setup environment variables di Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add semua variables dari `.env`

6. **Deploy ke production**
   ```bash
   vercel --prod
   ```

## 🚀 Option 2: Deploy ke Netlify

### Keuntungan
- Sangat mudah untuk React apps
- Built-in form handling
- Good performance

### Langkah-langkah

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect ke Netlify**
   - Go ke https://netlify.com
   - Click "New site from Git"
   - Select repository
   - Choose branch: `main`

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add environment variables**
   - Go to Site Settings → Build & Deploy → Environment
   - Add variables dari `.env`

5. **Deploy**
   - Automatic deployment on push ke main branch

## 🚀 Option 3: Deploy ke Server Sendiri

### Persyaratan
- Hosting dengan Node.js support (optional, karena ini static site)
- SSH access ke server

### Langkah-langkah

1. **Build project locally**
   ```bash
   npm run build
   ```

2. **Upload ke server**
   ```bash
   scp -r dist/* user@yourserver.com:/var/www/aurelia-beauty/
   ```

3. **Configure Nginx/Apache**

   **Nginx configuration:**
   ```nginx
   server {
       listen 80;
       server_name aureliabeauty.com www.aureliabeauty.com;
       
       root /var/www/aurelia-beauty;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Caching
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

   **Apache configuration (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Setup SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot certonly --nginx -d aureliabeauty.com -d www.aureliabeauty.com
   ```

5. **Setup redirect dari HTTP ke HTTPS**

## 🔐 Security Checklist

- [ ] Enable HTTPS/SSL certificate
- [ ] Remove debug information
- [ ] Change default admin credentials
- [ ] Setup rate limiting untuk booking form
- [ ] Enable CORS jika ada API integration
- [ ] Setup backup system
- [ ] Monitor website uptime
- [ ] Enable security headers

### Security Headers untuk Nginx
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

## 📊 Post-Deployment Testing

1. **Functionality Testing**
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Responsive design di mobile/tablet/desktop
   - [ ] Forms dapat disubmit (Contact, Booking)
   - [ ] WhatsApp integration berfungsi
   - [ ] Gallery images load with lightbox

2. **Performance Testing**
   - [ ] Page load time < 3s
   - [ ] Check dengan Google PageSpeed Insights
   - [ ] Check Core Web Vitals

3. **SEO Testing**
   - [ ] Check meta tags dengan browser inspector
   - [ ] Test social media preview (Open Graph)
   - [ ] Submit ke Google Search Console
   - [ ] Submit ke Bing Webmaster Tools

4. **Browser Compatibility**
   - [ ] Test di Chrome
   - [ ] Test di Firefox
   - [ ] Test di Safari
   - [ ] Test di Edge

## 📈 Monitoring & Maintenance

### Setup Monitoring
- Use Uptime Robot (free) untuk monitor availability
- Setup Google Analytics
- Setup error tracking (Sentry, LogRocket, dll)

### Regular Maintenance
- Update dependencies regularly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor website performance
- Backup website files regularly
- Update content regularly

## 🔄 Deployment Workflow

```
Development → Testing → Staging → Production
     ↓
  Local Dev
  npm run dev
     ↓
  Build Test
  npm run build
  npm run preview
     ↓
  Push to Git
  git push origin develop
     ↓
  Deploy to Staging
  (Preview environment)
     ↓
  QA Testing
     ↓
  Deploy to Production
  (Main site)
     ↓
  Monitor & Support
```

## 🆘 Troubleshooting

### Website shows 404 on refresh
**Problem**: React Router routes tidak berfungsi
**Solution**: Configure web server untuk serve `index.html` sebagai default

### Styles tidak load
**Problem**: CSS path tidak benar
**Solution**: Periksa base URL di `vite.config.ts`

### Images tidak tampil
**Problem**: Image paths salah atau CORS issue
**Solution**: Gunakan absolute URLs dari CDN atau periksa image paths

### Form tidak terkirim ke WhatsApp
**Problem**: WhatsApp number salah atau format URL tidak benar
**Solution**: Verify nomor WhatsApp dan test di browser console

## 📞 Support

Jika ada masalah saat deployment, hubungi team development atau lihat dokumentasi:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/deployment.html

---

**Version**: 1.0
**Last Updated**: 2025-06-22
