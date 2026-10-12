# Product Requirements Document (PRD)
## Website Corporate — PT Hokiindo Raya

**Versi:** 1.1  
**Tanggal:** 21 September 2026  
**Status:** Draft  
**Pemilik Produk:** PT Hokiindo Raya  
**Industri:** Distribusi Peralatan Listrik

---

## 1. Ringkasan Eksekutif

PT Hokiindo Raya adalah perusahaan distributor peralatan listrik yang melayani segmen B2B — mulai dari kontraktor, panel maker, hingga perusahaan besar dan end user industri. Website corporate ini dibangun sebagai representasi digital yang profesional dan kredibel, berfungsi untuk membangun kepercayaan dan memperlihatkan kapabilitas perusahaan — bukan sebagai platform penjualan langsung.

---

## 2. Informasi Perusahaan

| Atribut | Detail |
|---|---|
| **Nama Perusahaan** | PT Hokiindo Raya |
| **Alamat** | Roseville SOHO & Suite, Jl. Sunburst CBD, Jl. Kapten Soebijanto Djojohadikusumo No.8 Lot I, Lengkong Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten 15321 |
| **Telepon** | (+62) 81 1108 6180 |
| **Email** | info@hokiindo.co.id |

---

## 3. Tujuan & Sasaran

### 3.1 Tujuan Utama
- Membangun kehadiran digital yang profesional dan kredibel sebagai distributor peralatan listrik terpercaya.
- Menampilkan produk-produk kelistrikan yang didistribusikan serta rekam jejak proyek yang telah dikerjakan.
- Mempermudah kontraktor, panel maker, dan perusahaan mencari informasi dan menghubungi tim Hokiindo.

### 3.2 Sasaran Keberhasilan
- Website dapat diakses dengan baik di semua perangkat (desktop, tablet, mobile).
- Waktu muat halaman di bawah 3 detik pada koneksi standar.
- Visitor dari segmen industri dapat menemukan informasi produk dan kontak dengan mudah.
- Tone komunikasi terasa profesional dan setara — berbicara kepada sesama pelaku industri.

---

## 4. Target Audiens

| Segmen | Karakteristik |
|---|---|
| **Kontraktor** | Kontraktor mekanikal-elektrikal (ME) yang membutuhkan pasokan material dan peralatan listrik untuk proyek |
| **Panel Maker** | Produsen panel listrik yang memerlukan komponen-komponen elektrikal berkualitas dari distributor resmi |
| **End User** | Perusahaan manufaktur, properti, atau industri yang mengoperasikan instalasi listrik dan membutuhkan pengadaan langsung |
| **Perusahaan Besar** | Korporasi dengan kebutuhan pengadaan (procurement) skala besar yang mencari mitra distribusi terpercaya |
| **Decision Maker** | Manajer teknik, kepala pengadaan, atau direktur operasional yang melakukan riset sebelum memutuskan vendor |

---

## 5. Ruang Lingkup

### 5.1 Halaman yang Dibangun

#### 5.1.1 Home
**Tujuan:** Memberikan kesan pertama yang kuat dan mengarahkan pengunjung ke bagian yang relevan.

**Konten:**
- Hero section — tagline singkat dan deskripsi satu baris tentang perusahaan, disertai CTA ringan (misal: *"Lihat Produk Kami"* atau *"Hubungi Kami"*)
- Pengenalan singkat perusahaan (3–4 kalimat)
- Highlight produk/layanan utama (ikon + judul + deskripsi singkat)
- Cuplikan portofolio unggulan (3–4 proyek terpilih)
- Seksi kontak singkat atau ajakan untuk menghubungi tim

**Catatan UX:** Tidak ada elemen yang terasa "hard sell". Semua CTA bersifat informatif, bukan transaksional.

---

#### 5.1.2 About
**Tujuan:** Membangun kepercayaan dengan menampilkan identitas, nilai, dan rekam jejak perusahaan.

**Konten:**
- Profil perusahaan — sejarah singkat dan misi perusahaan
- Visi & Misi
- Nilai-nilai perusahaan (opsional: dalam bentuk ikon/poin singkat)
- Informasi kemitraan strategis (jika relevan, misal: kemitraan dengan Siemens)
- Alamat, telepon, dan email perusahaan

---

#### 5.1.3 Produk
**Tujuan:** Menampilkan rangkaian produk kelistrikan yang didistribusikan secara jelas dan terstruktur berdasarkan kategori.

**Konten:**
- Grid atau daftar kategori produk (misal: Circuit Breaker, Switchgear, Kabel & Aksesori, Panel & Komponen, dll.)
- Setiap produk/kategori menampilkan: nama, gambar/ikon, merek/brand, dan deskripsi teknis singkat (2–3 kalimat)
- Badge atau informasi brand principal yang direpresentasikan (misal: Siemens, dll.)
- Tombol atau tautan *"Hubungi Kami untuk Spesifikasi"* — tidak menampilkan harga
- Filter atau navigasi kategori jika jumlah produk lebih dari 8

**Catatan:** Deskripsi produk ditulis dengan pendekatan teknis yang tepat sasaran untuk audiens kontraktor dan panel maker. Tidak ada harga yang ditampilkan.

---

#### 5.1.4 Portfolio
**Tujuan:** Membuktikan kapabilitas perusahaan melalui proyek-proyek yang telah diselesaikan.

**Konten:**
- Grid galeri proyek (gambar + nama proyek + lokasi/klien + tahun)
- Filter kategori proyek (opsional)
- Halaman atau modal detail proyek (opsional): deskripsi singkat, scope pekerjaan, hasil

**Catatan:** Fokus pada visual dan fakta proyek. Tidak perlu narasi panjang per proyek.

---

### 5.2 Elemen Global (Semua Halaman)

| Elemen | Spesifikasi |
|---|---|
| **Header / Navbar** | Logo Hokiindo, navigasi menu (Home, About, Produk, Portfolio), info kontak singkat atau tombol *"Hubungi Kami"* |
| **Footer** | Alamat lengkap, nomor telepon, email, tautan navigasi, copyright |
| **Favicon** | Menggunakan ikon/logo Hokiindo |
| **Meta SEO** | Title tag, meta description, og:image per halaman |

---

## 6. Desain & Branding

### 6.1 Palet Warna

| Peran | Warna | Kode HEX | Keterangan |
|---|---|---|---|
| **Primer (Latar)** | Putih | `#FFFFFF` | Dominan — memberikan kesan bersih dan modern |
| **Aksen Utama** | Merah Hokiindo | `#FF0800` | Tombol, garis aksen, highlight, elemen penting |
| **Aksen Sekunder** | Navy Siemens | `#003056` | Heading, navbar, footer, elemen penekanan |
| **Teks Utama** | Abu Gelap | `#1A1A1A` | Body text — keterbacaan optimal |
| **Teks Sekunder** | Abu Medium | `#6B7280` | Caption, label, informasi pendukung |
| **Background Sekunder** | Off-White | `#F9FAFB` | Section alternatif, tetap terasa ringan |

> [!NOTE]
> Warna merah `#FF0800` dan navy `#003056` telah dikonfirmasi sebagai warna brand Hokiindo dan Siemens. Pastikan rasio kontras antara teks dan latar memenuhi standar WCAG AA (minimal 4.5:1 untuk teks normal).

### 6.2 Tipografi

| Elemen | Spesifikasi |
|---|---|
| **Heading** | Font modern sans-serif (misal: Inter, Montserrat, atau Geist) — tebal, bersih |
| **Body** | Font readable sans-serif yang sama atau pasangannya |
| **Ukuran Dasar** | 16px body, dengan skala tipografi yang harmonis |
| **Line Spacing** | 1.5–1.7x untuk keterbacaan optimal |

### 6.3 Prinsip Desain

- **Clean & Minimalis** — Whitespace dimanfaatkan secara maksimal; tidak ada elemen yang berdesak-desakan.
- **Responsif** — Tampilan optimal di semua ukuran layar (Mobile First).
- **Konsisten** — Komponen UI yang seragam di seluruh halaman.
- **Profesional, Bukan Promosi** — Visual berbicara melalui kualitas, bukan melalui klaim.
- **Fast-loading** — Optimasi gambar dan aset; tidak ada animasi yang membebani performa.

---

## 7. Tone of Voice & Konten

| Aspek | Panduan |
|---|---|
| **Bahasa** | Bahasa Indonesia formal dan teknis — terasa setara berbicara kepada profesional industri, bukan kepada konsumen umum |
| **Panjang Teks** | Singkat dan padat — setiap paragraf maksimal 3–4 kalimat; audiens industri menghargai efisiensi informasi |
| **Gaya Penulisan** | Informatif dan berbasis fakta — spesifikasi, kapabilitas, dan rekam jejak lebih berbicara daripada klaim |
| **Terminologi** | Gunakan istilah teknis kelistrikan yang umum dikenal (misal: MCB, MCCB, switchgear, panel distribusi) secara natural |
| **CTA** | Ringan dan tidak memaksa: *"Hubungi Kami"*, *"Lihat Spesifikasi"*, *"Lihat Proyek"*, *"Konsultasi Kebutuhan"* |
| **Judul Section** | Jelas, deskriptif, dan to the point; hindari kalimat yang terkesan promosi atau hype |

---

## 8. Persyaratan Teknis

### 8.1 Platform & Stack (Dikonfirmasi)

| Aspek | Keputusan | Keterangan |
|---|---|---|
| **Framework** | Next.js (App Router) | SSG built-in, SEO-friendly, performa tinggi |
| **Styling** | Tailwind CSS | Desain clean, konsisten, dan responsif |
| **Data Layer** | JSON files (tanpa database) | Konten disimpan sebagai file `.json` di VPS, dibaca saat build time |
| **Gambar** | Format WebP via `next/image` | Lazy loading & optimasi otomatis oleh Next.js |
| **Process Manager** | PM2 | Menjaga Next.js tetap berjalan di VPS |
| **Hosting** | VPS milik klien | Deploy mandiri, SSL wajib diaktifkan (Nginx + Certbot) |
| **SSL** | Wajib — HTTPS | Via Let's Encrypt / Certbot |

> [!NOTE]
> Tidak menggunakan database maupun CMS eksternal. Semua data konten (produk, portofolio, info perusahaan) disimpan dalam file JSON statis di server.

### 8.2 Struktur Data (JSON)

```
/data
  ├── company.json      ← info perusahaan, kontak, alamat
  ├── products.json     ← daftar kategori & produk
  └── portfolio.json    ← daftar proyek: nama, klien, tahun, foto
```

Setiap halaman membaca file JSON yang relevan **saat build time** — tidak ada request ke database atau API eksternal saat halaman dibuka oleh pengunjung.

### 8.3 Render Strategy & Dampak SEO

| Strategi | Nilai |
|---|---|
| **Metode Render** | Static Site Generation (SSG) |
| **Output** | HTML penuh di-render saat `npm run build` |
| **SEO** | ✅ Tidak ada dampak negatif — Google crawler membaca HTML langsung tanpa eksekusi JS |
| **Core Web Vitals** | ✅ LCP sangat cepat karena halaman sudah berupa HTML statis |
| **Meta Tags** | Di-set per halaman via `generateMetadata()` di Next.js App Router |
| **Sitemap** | Di-generate otomatis dari data JSON saat build |

### 8.4 Alur Update Konten

Karena tidak ada CMS, pembaruan konten dilakukan langsung di file JSON:

```
Edit file .json di VPS  →  npm run build  →  pm2 restart
```

> [!IMPORTANT]
> Pembaruan konten memerlukan akses ke VPS dan menjalankan ulang build. Jika frekuensi update konten tinggi di masa mendatang, pertimbangkan untuk menambahkan skrip otomasi atau CMS ringan (flat-file).

### 8.5 Performa

- **Core Web Vitals:** LCP < 2.5 detik, CLS < 0.1, INP rendah
- **Skor Lighthouse:** Minimal 85 untuk Performance, Accessibility, dan SEO
- **Mobile-first:** Desain dirancang dari ukuran layar terkecil terlebih dahulu

### 8.6 Browser Support

- Chrome, Firefox, Safari, Edge (versi 2 tahun terakhir)
- iOS Safari dan Chrome Android


---

## 9. Aset yang Dibutuhkan dari Klien

Berikut adalah daftar aset yang perlu disiapkan oleh PT Hokiindo Raya sebelum pengembangan dimulai:

- [ ] Logo perusahaan dalam format SVG atau PNG transparan (resolusi tinggi)
- [ ] Brand guideline (warna HEX resmi Hokiindo, font perusahaan jika ada)
- [ ] Foto kantor, tim, atau fasilitas (opsional, untuk mendukung halaman About)
- [ ] Daftar produk: nama, gambar/foto, dan deskripsi singkat
- [ ] Daftar proyek portofolio: nama proyek, lokasi, klien, tahun, dan foto
- [ ] Teks profil perusahaan: sejarah, visi, misi, nilai
- [ ] Informasi kemitraan yang boleh dicantumkan (misal: logo partner)
- [ ] Preferensi domain (jika belum ada)

---

## 10. Batasan & Asumsi

**Batasan:**
- Website ini hanya mencakup 4 halaman utama sesuai ruang lingkup yang disepakati.
- Tidak termasuk fitur e-commerce, sistem login, atau integrasi pembayaran.
- Tidak termasuk fitur multi-bahasa (hanya Bahasa Indonesia untuk versi pertama).

**Asumsi:**
- Konten teks seluruh halaman akan disediakan oleh klien atau ditulis ulang bersama berdasarkan arahan klien.
- Domain dan hosting akan diurus secara terpisah oleh klien atau dikoordinasikan dengan tim pengembang.
- Revisi desain dibatasi maksimal 2 putaran per halaman setelah persetujuan mockup awal.

---

## 11. Milestone & Timeline (Estimasi)

| Fase | Aktivitas | Durasi Estimasi |
|---|---|---|
| **Fase 1** | Pengumpulan aset & konten dari klien | 1 minggu |
| **Fase 2** | Desain UI (wireframe → mockup) | 1–2 minggu |
| **Fase 3** | Persetujuan desain oleh klien | 3–5 hari kerja |
| **Fase 4** | Pengembangan (coding) | 2–3 minggu |
| **Fase 5** | Review, QA & revisi | 1 minggu |
| **Fase 6** | Launch & serah terima | 2–3 hari |
| **Total Estimasi** | | **6–8 minggu** |

> [!IMPORTANT]
> Timeline ini sangat bergantung pada kecepatan pengiriman aset dan konten dari pihak PT Hokiindo Raya. Keterlambatan pengiriman aset dapat memundurkan jadwal secara keseluruhan.

---

## 12. Kriteria Penerimaan (Definition of Done)

Website dinyatakan selesai dan siap diserahterimakan apabila:

- [ ] Seluruh 4 halaman sudah selesai dikembangkan dan sesuai dengan mockup yang disetujui
- [ ] Website responsif di perangkat mobile (360px), tablet (768px), dan desktop (1280px+)
- [ ] Semua tautan dan tombol berfungsi dengan benar
- [ ] Formulir kontak (jika ada) berfungsi dan email terkirim ke info@hokiindo.co.id
- [ ] Skor Lighthouse minimal 85 untuk Performance & SEO
- [ ] SSL aktif dan website dapat diakses via HTTPS
- [ ] Meta SEO dasar (title, description) sudah terpasang di setiap halaman
- [ ] Klien telah melakukan review akhir dan memberikan persetujuan tertulis

---

## 13. Batasan untuk AI — Content & Code Generation

> [!CAUTION]
> Bagian ini wajib dibaca dan dipatuhi oleh AI tools (LLM, Copilot, dsb.) yang digunakan dalam proses pembuatan konten atau kode website ini.

### 13.1 Larangan Keras (Jangan Dilakukan)

- **Jangan mengarang fakta perusahaan.** Jangan menulis sejarah, tahun berdiri, jumlah karyawan, omzet, atau pencapaian perusahaan yang tidak ada di dokumen ini atau tidak disediakan secara eksplisit oleh klien.
- **Jangan menambahkan produk atau merek** yang tidak disebutkan secara eksplisit oleh klien. Jangan berasumsi Hokiindo mendistribusikan merek tertentu hanya karena lazim di industri kelistrikan.
- **Jangan membuat kutipan atau testimoni fiktif.** Tidak boleh ada kalimat seperti *"Klien kami puas…"* atau kutipan dari pihak ketiga yang tidak dikonfirmasi.
- **Jangan menulis klaim superlatif tanpa dasar.** Hindari frasa seperti: *"terpercaya sejak…"*, *"terbaik di Indonesia"*, *"ratusan proyek"*, *"pengalaman lebih dari X tahun"* — kecuali datanya disediakan oleh klien.
- **Jangan menambahkan section atau halaman di luar ruang lingkup.** Hanya ada 4 halaman: Home, About, Produk, Portfolio. Jangan tambahkan Blog, FAQ, Karir, atau halaman lain tanpa persetujuan.
- **Jangan mengisi placeholder dengan teks generik.** Jika konten belum tersedia, gunakan placeholder eksplisit seperti `[ISI DARI KLIEN]` atau `[FOTO DARI KLIEN]` — bukan teks lorem ipsum atau karangan sendiri.
- **Jangan menambahkan fitur yang tidak ada di PRD.** Tidak ada live chat, chatbot, form pemesanan, keranjang belanja, atau fitur interaktif kompleks lainnya kecuali diminta.

### 13.2 Yang Boleh Dilakukan

- Menyusun ulang kalimat dari konten yang **sudah disediakan** oleh klien agar lebih ringkas dan sesuai tone of voice.
- Menyarankan struktur atau urutan konten — namun tandai sebagai *saran*, bukan keputusan final.
- Menggunakan terminologi teknis kelistrikan yang umum (MCB, MCCB, switchgear, panel distribusi) **hanya dalam konteks deskripsi yang sudah ada**.
- Menulis microcopy (label tombol, placeholder input, pesan error) yang bersifat netral dan umum.

### 13.3 Protokol Jika Data Tidak Tersedia

Jika sebuah konten diminta namun datanya belum ada, AI harus:

1. **Menandai dengan jelas** bagian yang kosong menggunakan tag: `[DIBUTUHKAN: deskripsi data yang diperlukan]`
2. **Tidak mengisi sendiri** dengan asumsi atau generalisasi.
3. **Menginformasikan** bahwa data tersebut perlu dikonfirmasi oleh PT Hokiindo Raya sebelum dipublikasikan.

---

*Dokumen ini merupakan acuan awal yang bersifat hidup dan dapat diperbarui seiring berjalannya diskusi antara PT Hokiindo Raya dan tim pengembang.*
