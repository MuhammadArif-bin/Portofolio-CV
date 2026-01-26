# Portfolio Website - HTML5, CSS3, JavaScript

Website portfolio single page yang modern, responsif, dan profesional untuk mahasiswa informatika yang mencari magang sebagai web developer.

## Fitur Utama

✨ **Navigasi Responsif**
- Navigation bar fixed dengan smooth scrolling
- Mobile menu toggle untuk perangkat kecil
- Active link indicator

🎨 **Desain Modern**
- Dark theme dengan aksen biru dan hijau
- Color system yang konsisten
- Typography yang clean dan professional
- Gradient backgrounds dan smooth animations

📱 **Fully Responsive**
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)
- Optimized untuk semua ukuran layar

🚀 **Performa Tinggi**
- Vanilla JavaScript (tanpa framework)
- CSS3 animations dan transitions
- Lazy loading support
- Optimized untuk SEO

## Struktur Folder

```
portfolio/
├── index.html                 # File HTML utama
├── assets/
│   ├── css/
│   │   └── styles.css        # Stylesheet utama
│   └── js/
│       └── main.js           # Script JavaScript
├── README.md                  # Dokumentasi (file ini)
```

## Instalasi & Penggunaan

### Cara 1: Langsung buka file
1. Download atau clone repository ini
2. Buka file `index.html` di browser favorit Anda
3. Selesai! Website siap digunakan

### Cara 2: Gunakan Local Server (Recommended)
```bash
# Jika menggunakan Python 3
python -m http.server 8000

# Atau jika menggunakan Node.js
npx http-server

# Kemudian buka di browser: http://localhost:8000
```

## Cara Customize

### 1. Informasi Pribadi
Edit file `index.html`:
- Ganti "Nama Anda" dengan nama Anda
- Update email: `your.email@example.com`
- Update nomor telepon: `+62812345678`
- Update username GitHub dan social media

### 2. Tentang Saya (About Section)
Ganti teks di section `#about` dengan deskripsi Anda sendiri

### 3. Skills & Teknologi
Update list skill di section `#skills`:
```html
<span class="skill-tag">Skill Anda</span>
```

### 4. Project Portfolio
Edit project cards di section `#projects`:
- Ganti judul project
- Update deskripsi
- Tambah/hapus project sesuai kebutuhan
- Update link preview dan GitHub

Contoh:
```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Nama Project</h3>
        <p class="project-description">Deskripsi project Anda</p>
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
        </div>
        <div class="project-links">
            <a href="link-preview" class="project-link" target="_blank">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="link-github" class="project-link" target="_blank">
                <i class="fas fa-code"></i> Code
            </a>
        </div>
    </div>
</div>
```

### 5. Pengalaman & Edukasi
Update timeline di section `#experience`:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="timeline-title">Judul Pengalaman</h3>
        <p class="timeline-company">Perusahaan | Tahun</p>
        <p class="timeline-description">Deskripsi pengalaman Anda</p>
    </div>
</div>
```

### 6. Social Media Links
Update link social media di section `#contact`:
```html
<a href="https://github.com/your-profile" title="GitHub" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github"></i>
</a>
```

### 7. Mengubah Warna (Color Scheme)
Edit file `assets/css/styles.css`, bagian `:root`:
```css
:root {
    --primary: #0f172a;           /* Warna background utama */
    --secondary: #1a2844;         /* Warna background secondary */
    --accent: #1e3a5f;            /* Warna accent */
    --highlight: #3b82f6;         /* Warna highlight utama (biru) */
    --success: #10b981;           /* Warna accent kedua (hijau) */
    --text-primary: #f1f5f9;      /* Warna text utama */
    --text-secondary: #cbd5e1;    /* Warna text secondary */
    --border: #334155;            /* Warna border */
}
```

## Fitur JavaScript

### 1. Smooth Scrolling
- Navigasi otomatis scroll dengan smooth
- Active link indicator berdasarkan scroll position

### 2. Mobile Menu Toggle
- Menu responsif untuk mobile
- Auto-close saat klik link
- Keyboard support (ESC untuk close)

### 3. Form Validation
- Validasi email format
- Required field validation
- Success message alert

### 4. Intersection Observer
- Smooth animation saat scroll
- Lazy load ready

### 5. Parallax Effect
- Subtle background movement

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Tips Optimasi

### 1. SEO
- Update meta description
- Tambahkan keyword relevan
- Gunakan semantic HTML

### 2. Performa
- Compress images sebelum upload
- Minimize CSS dan JavaScript
- Use CDN untuk font awesome

### 3. Accessibility
- Alt text untuk semua images
- Proper heading hierarchy
- Keyboard navigation

## Icon Library

Website menggunakan Font Awesome 6.4.0 untuk icons. 
Cari icon di: https://fontawesome.com/search

Contoh penggunaan:
```html
<i class="fas fa-code"></i>           <!-- Solid icon -->
<i class="fab fa-github"></i>         <!-- Brand icon -->
<i class="far fa-star"></i>           <!-- Regular icon -->
```

## Deploy ke Production

### 1. GitHub Pages
1. Push repository ke GitHub
2. Settings > Pages
3. Select main branch
4. Save
5. Website live di `https://username.github.io/portfolio`

### 2. Vercel (Recommended)
1. Connect repository ke Vercel
2. Deployment otomatis
3. Free SSL certificate
4. Custom domain support

### 3. Netlify
1. Connect repository
2. Build command: (leave empty untuk static site)
3. Publish directory: (leave empty atau set `.`)
4. Deploy!

## Troubleshooting

### Menu mobile tidak muncul
- Periksa resolusi layar (< 768px)
- Clear browser cache
- Cek console untuk error

### Styling tidak tampil
- Verifikasi path CSS: `assets/css/styles.css`
- Cek apakah file tersebut di folder yang benar
- Clear browser cache

### JavaScript tidak berfungsi
- Verifikasi path JS: `assets/js/main.js`
- Buka browser console untuk cek error
- Pastikan file tersimpan dengan benar

## Lisensi

Free to use untuk project pribadi. Silahkan customize sesuai kebutuhan!

## Support & Feedback

Jika ada pertanyaan atau feedback, silahkan hubungi atau buat issue.

## Checklist Sebelum Deploy

- [ ] Update semua informasi pribadi
- [ ] Ganti semua project dummy dengan project asli
- [ ] Update social media links
- [ ] Cek responsive design di berbagai device
- [ ] Test form validation
- [ ] Optimasi images
- [ ] Setup domain custom (optional)
- [ ] Setup email forwarding untuk contact form
- [ ] Audit performance dengan Google Lighthouse
- [ ] Test di berbagai browser

## Resources Berguna

- **Icons**: https://fontawesome.com
- **Colors**: https://coolors.co
- **Fonts**: https://fonts.google.com
- **Performance**: https://web.dev/lighthouse
- **SEO**: https://search.google.com/search-console
- **HTML5**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

Happy coding! Semoga portfolio Anda berhasil dan mendapatkan magang impian! 🚀
