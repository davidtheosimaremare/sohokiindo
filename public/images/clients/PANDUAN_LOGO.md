# Panduan Ukuran & Template Logo Klien (PT Hokiindo Raya)

Sistem website Hokiindo telah dilengkapi dengan **Automatic Aspect-Ratio Normalizer**. 
Artinya, sistem CSS akan secara otomatis menyesuaikan ukuran logo (baik logo memanjang, bujur sangkar, maupun vertikal) agar tetap proporsional dan tidak merusak tampilan.

---

## 🎯 Rekomendasi Format & Ukuran Terbaik

Jika Anda atau tim desainer ingin membuat logo yang paling optimal:

| Parameter | Rekomendasi Ideal |
| :--- | :--- |
| **Format File** | `.png` (Transparan tanpa background) atau `.svg` (vektor) |
| **Ukuran Kanvas** | **240 × 80 px** (atau **480 × 160 px** untuk layar Retina) |
| **Warna Logo** | Warna asli atau monokrom (sistem otomatis membuat efek abu-abu elegan saat diam dan berwarna saat kursor diarahkan) |
| **Padding/Margin** | Beri ruang kosong sekitar 10-15px di sekeliling logo agar tidak terlalu mepet ke tepi |

---

## 📐 Penyesuaian Berdasarkan Bentuk Logo:

1. **Logo Memanjang / Horizontal (Landscape)**:
   - Contoh: Waskita, Sinarmas Land, Wijaya Karya.
   - Posisikan di tengah (*center*), maksimalkan lebarnya hingga ~180px - 200px dengan tinggi ~40px - 50px.

2. **Logo Kotak / Persegi (Square 1:1)**:
   - Contoh: Lambang BUMN, Icon Perusahaan, Badge.
   - Posisikan di tengah kanvas, buat tinggi sekitar ~45px - 55px (jangan penuhi lebar kanvas 240px agar tidak terlihat terlalu raksasa dibanding logo memanjang).

3. **Logo Vertikal / Tinggi (Portrait)**:
   - Posisikan di tengah kanvas, batasi tinggi maksimum ~50px.

---

## 🚀 Cara Mendaftarkan Logo Baru:
1. Simpan gambar di folder ini: `/public/images/clients/nama-file.png`
2. Buka file `/data/clients.json`
3. Tambahkan baris baru:
   ```json
   {
     "id": "nama-klien",
     "name": "PT Nama Perusahaan",
     "logo": "/images/clients/nama-file.png"
   }
   ```
Website akan langsung menampilkan logo Anda secara otomatis!
