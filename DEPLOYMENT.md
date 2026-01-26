# Panduan Deployment Portfolio Website

Dokumentasi lengkap untuk deploy portfolio website Anda ke production.

## Opsi Deployment (Recommended Order)

### 1. Vercel (PALING DIREKOMENDASIKAN)
**Kelebihan:** Gratis, cepat setup, auto deploy, custom domain support

#### Langkah:
1. Daftar di https://vercel.com
2. Click "New Project"
3. Import repository GitHub Anda
4. Settings:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./
5. Click "Deploy"
6. Setup custom domain (optional):
   - Go to Settings > Domains
   - Add your domain
   - Update DNS records sesuai instruksi

**Cost:** Free dengan fitur lengkap

---

### 2. GitHub Pages
**Kelebihan:** Sangat mudah, terintegrasi dengan GitHub

#### Langkah:
1. Push code ke GitHub repository
2. Go ke Settings > Pages
3. Source:
   - Select: Deploy from a branch
   - Branch: main (atau master)
   - Folder: / (root)
4. Click Save
5. Website akan live di: `https://username.github.io/portfolio`

Untuk custom domain:
1. Di DNS provider Anda (Cloudflare, Namecheap, dll), add CNAME record:
   - Name: www
   - Value: username.github.io
2. Di GitHub Pages settings, tambahkan custom domain

**Cost:** Gratis

**Note:** URL akan `https://username.github.io/repository-name` kecuali pakai custom domain

---

### 3. Netlify
**Kelebihan:** User-friendly, preview deployment, form handling

#### Langkah:
1. Daftar di https://netlify.com
2. Click "Add new site" > "Import an existing project"
3. Connect GitHub account
4. Select repository
5. Settings:
   - Base directory: (leave empty)
   - Build command: (leave empty)
   - Publish directory: /
6. Click "Deploy"
7. Setup custom domain:
   - Go to Site settings > Domain settings > Add custom domain

**Cost:** Free untuk static sites

---

### 4. Shared Hosting (GoDaddy, Hosting.com, dll)
**Kelebihan:** Full control, unlimited storage (biasanya)

#### Langkah:
1. Upload files via FTP/SFTP:
   ```
   Host: ftp.yourdomain.com
   Username: cPanel username
   Password: cPanel password
   Port: 21 (FTP) atau 22 (SFTP)
   ```

2. Upload structure:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── css/
   │   │   └── styles.css
   │   └── js/
   │       └── main.js
   ```

3. Website akan live di: https://yourdomain.com

**Cost:** Biasanya Rp 50,000 - 200,000/tahun (domain) + hosting

---

## Persiapan Sebelum Deploy

### 1. Optimasi Files
```bash
# Minimize CSS (optional, gunakan online tools)
# Original: assets/css/styles.css

# Minimize JavaScript (optional, gunakan online tools)
# Original: assets/js/main.js
```

### 2. Update Meta Tags
Edit `index.html`:
```html
<meta name="description" content="Portfolio saya yang menampilkan project dan skill">
<meta name="keywords" content="web developer, portfolio, HTML, CSS, JavaScript">
<meta property="og:title" content="Portfolio - Web Developer">
<meta property="og:description" content="Lihat project dan skill saya">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

### 3. Setup Favicon
1. Download atau buat favicon Anda (.ico atau .png)
2. Letakkan di root folder
3. Add ke `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### 4. Enable SSL/TLS
- Vercel: Otomatis
- GitHub Pages: Otomatis
- Netlify: Otomatis
- Shared Hosting: Request ke provider atau setup Let's Encrypt

### 5. Setup Email untuk Contact Form
Karena ini static site, ada beberapa opsi:

#### Opsi A: EmailJS (Recommended)
1. Daftar di https://www.emailjs.com
2. Create email service
3. Dapatkan Service ID, Template ID, Public Key
4. Update `main.js`:
```javascript
// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_email: 'your.email@example.com'
        }
    ).then(() => {
        showAlert('Pesan berhasil dikirim!', 'success');
        contactForm.reset();
    }).catch(error => {
        showAlert('Gagal mengirim pesan. Coba lagi!', 'error');
    });
});
```

#### Opsi B: Formspree
1. Daftar di https://formspree.io
2. Buat form baru
3. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Kirim</button>
</form>
```

#### Opsi C: FormSubmit
1. Tidak perlu daftar
2. Update form:
```html
<form action="https://formsubmit.co/your.email@example.com" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Kirim</button>
</form>
```

---

## Post-Deployment Checklist

- [ ] Test website di semua browser
- [ ] Test responsive design di mobile, tablet, desktop
- [ ] Test semua links (navigasi, social media, project links)
- [ ] Test contact form
- [ ] Check Google Lighthouse score (target: 90+)
- [ ] Submit sitemap ke Google Search Console
- [ ] Setup Google Analytics (optional)
- [ ] Test loading speed di berbagai lokasi
- [ ] Backup files secara berkala
- [ ] Monitor uptime dan performance

---

## Setup Google Analytics (Optional)

1. Daftar di https://analytics.google.com
2. Create property untuk domain Anda
3. Dapatkan Measurement ID (format: G-XXXXXXXXXX)
4. Add ke `index.html` sebelum `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Troubleshooting Deployment

### CSS/JS tidak loading
**Solusi:**
- Cek path file (case-sensitive!)
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console untuk error (F12)

### 404 Error
**Solusi:**
- Verifikasi struktur folder
- Cek filename spelling
- Jika menggunakan custom domain, wait 24-48 jam untuk DNS propagation

### Slow Performance
**Solusi:**
- Optimize images (compress sebelum upload)
- Enable gzip compression
- Use CDN untuk assets
- Minimize CSS dan JS

### Contact Form Tidak Berfungsi
**Solusi:**
- Cek EmailJS credentials
- Verify email di FormSubmit/Formspree
- Cek browser console untuk error

---

## Domain Registration

Jika belum punya domain:

### Recommended Providers:
1. **Namecheap** - Murah, support bagus
2. **Cloudflare** - Free SSL, fast, good analytics
3. **Google Domains** - Simple, terintegrasi
4. **IDWebHost** (untuk .id) - Local, support bahasa Indonesia

### Harga Estimasi:
- .com: $10-15/tahun
- .id: Rp 100,000-200,000/tahun
- SSL: Gratis (Let's Encrypt/included di semua provider)

---

## Maintenance Tips

### Regular Backups
```bash
# Jika pakai Git
git push origin main
# Automatic backup di GitHub
```

### Update Content
1. Update project terbaru
2. Refresh social media links
3. Update skills sesuai perkembangan
4. Review dan perbaiki typos

### Monitor Performance
- Check Google Lighthouse monthly
- Monitor uptime dengan tools gratis
- Review Google Analytics untuk traffic patterns

### Security
- Keep Email credentials aman
- Use environment variables jika ada backend
- Regular security audits
- Update packages jika menggunakan npm

---

## Dukungan & Resources

**Jika mengalami masalah:**
- Check documentation sesuai platform deploy
- Search Stack Overflow
- Baca GitHub Issues di related projects
- Contact support provider hosting

**Useful Links:**
- Vercel Docs: https://vercel.com/docs
- GitHub Pages: https://pages.github.com
- Netlify Docs: https://docs.netlify.com
- MDN Web Docs: https://developer.mozilla.org

---

**Happy Deployment! 🚀**

Jika ada pertanyaan atau butuh bantuan, jangan ragu untuk mencari resources online atau hubungi community developer lokal.
