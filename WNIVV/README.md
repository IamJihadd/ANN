# 🎀 Website Anniversary 1 Tahun

Website romantis untuk anniversary kamu & pacar. Dibuat dengan HTML + CSS + JavaScript murni — **tidak perlu install apa pun**.

## 👀 Cara Membuka

Cukup klik dua kali file `index.html` — otomatis terbuka di browser.

---

## ✏️ CARA EDIT ISI WEBSITE

### 1. Nama, tanggal & teks — edit `js/config.js`

Buka file [js/config.js](js/config.js) dengan Notepad (klik kanan → Open with → Notepad). Bagian paling penting:

```js
namaKamu: "Nama Kamu",              // ← ganti dengan namamu
namaDia: "Nama Sayang",             // ← ganti dengan nama pacarmu

tanggalJadian: "2025-09-29T00:00:00",  // ← tanggal jadian kalian
                                        //   format: TAHUN-BULAN-TANGGAL
                                        //   contoh jadian 5 Januari 2025 → "2025-01-05T00:00:00"

tanggalAnnivTeks: "29 September 2026", // ← tanggal yang tampil di layar
```

Simpan (Ctrl+S), lalu refresh browser — selesai!

### 2. Cerita timeline & surat cinta — juga di `js/config.js`

- **Timeline**: tiap momen punya `tanggal`, `judul`, `cerita`. Ganti teksnya dengan kisah kalian. Boleh tambah momen baru dengan menyalin blok `{ ... },` lalu mengubah isinya.
- **Surat cinta**: tulis di antara tanda backtick ` \`...\` `. Enter boleh dipakai, tampil apa adanya di website.
- Jangan lupa ganti `tandaTangan` dengan namamu.

### 3. Foto kenangan — taruh file di folder `assets/photos/`

Siapkan 6 foto (bisa lebih/kurang, sesuaikan daftar `galeri` di config), lalu beri nama:

```
foto-1.jpg
foto-2.jpg
foto-3.jpg
foto-4.jpg
foto-5.jpg
foto-6.jpg
```

Taruh di folder `assets/photos/`. Placeholder "♥ Ganti fotoku" otomatis terganti foto kamu — **tanpa mengubah kode sama sekali**.

> Format lain juga bisa: kalau pakai `.png`, ubah sedikit di `js/main.js` pada baris `src='assets/photos/foto-" + n + ".jpg'` → ganti `.jpg` jadi `.png`.

### 4. Musik latar — taruh 1 file musik

Beri nama `music.mp3` dan taruh di folder `assets/`. Tombol musik bulat di pojok kanan bawah otomatis aktif. (Kalau tidak ada file musiknya, tombol diam-diam disembunyikan — aman.)

> Tips: potong bagian lagu favorit kalian jadi MP3 supaya lebih personal.

---

## 🌐 CARA BAGIKAN KE PACARMU

### Cara 1: Vercel (gratis, ±5 menit, tanpa install apa pun)

1. Buka [vercel.com](https://vercel.com) → **Sign Up** (boleh pakai GitHub, Google, atau email)
2. Setelah masuk dashboard, klik **"Add New…" → "Project"**
3. Di kotak "Drag and drop your project files", **drag & drop seluruh folder** website ini
4. Klik **Deploy** — tunggu ±30 detik
5. Selesai! Kamu dapat link seperti `anniversary-xxx.vercel.app` — kirim ke dia 💝

> Kalau mau ganti teks/foto setelah online: edit file di komputermu, lalu ulangi langkah 3 (drop ulang). Vercel membuat versi baru otomatis.

### Cara 2: Vercel lewat GitHub (sekali setting, update otomatis)

1. Upload folder ini ke repositori GitHub baru (bisa lewat web: github.com → New repository → upload files)
2. Di [vercel.com](https://vercel.com) → **"Add New…" → "Project"** → pilih repositorinya → **Import**
3. Biarkan semua setting default → **Deploy**
4. Setiap kali kamu edit file lalu push ke GitHub, website otomatis ikut terupdate

### Cara 3: Netlify (paling cepat, tanpa akun yang ribet)

1. Buka [netlify.com/drop](https://app.netlify.com/drop)
2. Drag & drop **seluruh folder** project ini ke halaman itu
3. Dapat link — kirim link itu ke dia 💝

---

## 📁 Struktur File

```
├── index.html          ← halaman utama (jarang perlu diubah)
├── css/style.css       ← warna & gaya (kalau mau ganti warna tema)
├── js/config.js        ← ★ SEMUA TEKS DI SINI (nama, tanggal, cerita, surat)
├── js/main.js          ← logika otomatis (tidak perlu diubah)
├── assets/
│   ├── photos/         ← taruh foto-1.jpg … foto-6.jpg di sini
│   └── music.mp3       ← taruh musik di sini (opsional)
└── README.md           ← panduan ini
```

## 🎨 Ganti Warna Tema (bonus)

Warna diatur di bagian atas `css/style.css`:

```css
--rose: #fb6f92;        /* warna utama (hati, aksen) */
--rose-dark: #e15b7d;   /* warna judul */
```

Mau tema ungu? Ganti `--rose: #a78bfa` dan `--rose-dark: #7c3aed`. Eksperimenlah! 💜

---

Selamat anniversary! Semoga hubungan kalian langgeng sampai kapan pun. 🥂♥
