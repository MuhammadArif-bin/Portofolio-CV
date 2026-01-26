# Quick Start Guide - Portfolio Website

Panduan cepat untuk memulai menggunakan portfolio website Anda.

## 🚀 5 Menit Setup

### Step 1: Buka Website
```
Buka file index.html di browser favorit Anda
atau jalankan local server:
python -m http.server 8000
```

### Step 2: Edit Informasi Pribadi
Di dalam `index.html`, cari dan ganti:

```html
<!-- Hero Section -->
<h1 class="hero-title">Halo, Saya <span class="highlight">Developer</span></h1>
<!-- Ganti dengan nama Anda -->

<!-- About Section -->
<p>Saya adalah mahasiswa Informatika dengan passion besar dalam web development...</p>
<!-- Update dengan deskripsi Anda -->

<!-- Contact Info -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<!-- Ganti dengan email Anda -->
<a href="tel:+62812345678">+62 812 345 678</a>
<!-- Ganti dengan nomor Anda -->
```

### Step 3: Tambah Project Anda
Di section `#projects`, duplicate project card dan update:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-icon-name"></i>  <!-- Ganti icon -->
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>  <!-- Nama project -->
        <p class="project-description">...</p>  <!-- Deskripsi -->
        <div class="project-tags">
            <span class="tag">Tech1</span>  <!-- Tech yang digunakan -->
            <span class="tag">Tech2</span>
        </div>
        <div class="project-links">
            <a href="YOUR_PROJECT_LINK">Preview</a>  <!-- Link project -->
            <a href="YOUR_GITHUB_LINK">Code</a>      <!-- Link GitHub -->
        </div>
    </div>
</div>
```

### Step 4: Update Skills
Di section `#skills`, update skill tags sesuai keahlian Anda:

```html
<span class="skill-tag">Skill Anda</span>
```

### Step 5: Social Media Links
Di section `#contact`, update social media links:

```html
<a href="https://github.com/your-username" title="GitHub">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/your-profile" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
<!-- Update semua link social media Anda -->
```

## 🎨 Mengubah Warna (30 Detik)

Edit di `assets/css/styles.css`, bagian `:root`:

```css
:root {
    --primary: #0f172a;        /* Warna background utama */
    --highlight: #3b82f6;      /* Warna highlight (blue) */
    --success: #10b981;        /* Warna accent (green) */
    --text-primary: #f1f5f9;   /* Warna text */
}
```

**Color Suggestions:**
- Modern Blue: `#3b82f6` (saat ini)
- Purple Vibes: `#8b5cf6`
- Green Fresh: `#06b6d4`
- Red Energetic: `#ef4444`
- Orange Bold: `#f97316`

## 📱 Test Responsive Design

1. **Desktop:** Buka di browser normal
2. **Mobile:** Tekan `F12` > toggle device toolbar
3. **Tablet:** Resize browser window ke 768px
4. **Real Device:** Buka di smartphone

## 🔗 Important Links

| Kebutuhan | Link |
|-----------|------|
| Icons | https://fontawesome.com/search |
| Colors | https://coolors.co |
| Deploy (Vercel) | https://vercel.com |
| Deploy (GitHub Pages) | https://pages.github.com |
| Domain | https://namecheap.com |
| Email Form | https://formspree.io |

## ✨ Common Customizations

### 1. Mengubah Icon Hero
```html
<!-- Current -->
<i class="fas fa-code"></i>

<!-- Ganti dengan salah satu ini -->
<i class="fas fa-laptop-code"></i>
<i class="fas fa-terminal"></i>
<i class="fas fa-graduation-cap"></i>
<i class="fas fa-rocket"></i>
```

### 2. Menambah Section Baru
Copy structure ini:
```html
<section id="section-name" class="section-name">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Judul Section</h2>
            <div class="title-underline"></div>
        </div>
        <!-- Content Anda di sini -->
    </div>
</section>
```

Tambahkan CSS di `styles.css`:
```css
.section-name {
    padding: 5rem 0;
}
```

Update navigation di `index.html`:
```html
<li><a href="#section-name" class="nav-link">Menu</a></li>
```

### 3. Mengubah Font
Di `assets/css/styles.css`:
```css
body {
    font-family: 'Font Baru', Arial, sans-serif;
}
```

### 4. Menghapus Section
1. Hapus HTML section di `index.html`
2. Hapus menu item di navbar
3. (Optional) Hapus CSS di `styles.css`

## 🐛 Troubleshooting Cepat

| Problem | Solusi |
|---------|--------|
| Styling tidak tampil | Clear cache (Ctrl+Shift+Delete) |
| Menu tidak muncul di mobile | Resize browser ke < 768px |
| Form tidak berfungsi | Setup email service (Formspree/EmailJS) |
| Gambar tidak muncul | Check path di `assets/images/` |
| JavaScript error | Buka DevTools (F12) lihat console |

## 📦 File Penting untuk Edit

**WAJIB EDIT:**
- ✅ `index.html` - Informasi pribadi Anda

**DISARANKAN EDIT:**
- ✅ `assets/css/styles.css` - Warna & styling
- ✅ Social media links di contact section

**OPSIONAL:**
- `assets/js/main.js` - Behavior & animasi
- `.gitignore` - Konfigurasi Git

## 🎯 Checklist Sebelum Deploy

```
□ Buka index.html di browser
□ Cek semua text (ganti nama dummy)
□ Cek semua links (project, social media)
□ Test responsive di mobile
□ Test form (jika ada)
□ Check warna (sesuai preferensi)
□ Optimize images
□ Upload ke GitHub
□ Setup deployment (Vercel/GitHub Pages)
```

## 🚀 Deploy dalam 5 Menit

### Vercel (RECOMMENDED)
```
1. Push ke GitHub
2. Buka vercel.com
3. Connect GitHub
4. Select repository
5. Click Deploy
6. SELESAI! Website live
```

### GitHub Pages
```
1. Push ke GitHub
2. Settings > Pages
3. Select: Deploy from branch
4. Branch: main, Folder: /
5. Save
6. SELESAI! Website live di github.com/username/portfolio
```

## 📞 Need Help?

- Baca `README.md` untuk dokumentasi lengkap
- Lihat `DEPLOYMENT.md` untuk panduan deploy
- Cek `PROJECT_STRUCTURE.md` untuk struktur file
- Google search (Anda tidak sendirian!)

## 💡 Pro Tips

1. **Backup Regularly**
   ```bash
   git push origin main  # Backup ke GitHub
   ```

2. **Test Berkali-kali**
   - Desktop, tablet, mobile
   - Different browsers (Chrome, Firefox, Safari)
   - Real devices jika mungkin

3. **Update Rutin**
   - Tambah project baru
   - Update skills
   - Refresh social media links

4. **Monitor Performance**
   - Open Chrome DevTools (F12)
   - Lighthouse > Generate report
   - Target score: 90+

5. **Get Feedback**
   - Share dengan teman
   - Minta feedback
   - Improve berdasarkan feedback

## 📈 Next Steps

1. ✅ Customize website
2. ✅ Test semua fitur
3. ✅ Deploy ke production
4. ✅ Monitor performance
5. ✅ Update content regularly
6. ✅ Apply untuk magang! 🎉

---

**Good Luck!** 🚀

Semoga portfolio Anda membantu mendapatkan magang impian!

Jika ada pertanyaan, jangan takut untuk explore dan experiment. Happy coding!
