Menambahkan sertifikat statis

- Taruh file PDF sertifikat resmi di `public/certificates/<id>.pdf`.
- Atau: unggah langsung dari halaman sertifikat (pemilik) menggunakan tombol **Upload PDF**.
- Gunakan slug `id` yang sama seperti di `lib/certificates.ts` (mis. `ccnav7.pdf`).
- Jika file PDF tidak ada, UI akan menampilkan opsi "Generate PDF" yang membuat PDF di browser dari tampilan sertifikat.

API upload (development):

- Endpoint: `POST /api/upload-cert?id=<id>`
- Body: raw PDF (`Content-Type: application/pdf`)
- Batas ukuran: 10MB
- Proteksi (opsional): set environment variable `UPLOAD_SECRET` untuk mengaktifkan token check. Kirim header `x-upload-token: <secret>` pada request atau masukkan secret lewat UI upload.
- Contoh curl (mengunggah file dan menyertakan token):

  curl -X POST "http://localhost:3000/api/upload-cert?id=ccnav7" \
   -H "content-type: application/pdf" \
   -H "x-upload-token: $UPLOAD_SECRET" \
   --data-binary @./public/certificates/ccnav7.pdf

- Catatan: di produksi simpan file di cloud storage (S3/GCS) dan lindungi endpoint upload dengan autentikasi/otorisasi.

Rekomendasi produksi:

- Simpan PDF final (signed) di `public/certificates/` atau simpan pada storage yang bisa di-download.
- Untuk membuat PDF statis secara otomatis, Anda bisa menggunakan skrip headless (Puppeteer/Playwright) yang merender `https://your-site/certificate/<id>` dan menyimpannya sebagai PDF ke folder `public/certificates/`.
