# SantriCraft: Logic Quest 🕌🎮

**SantriCraft: Logic Quest** adalah sebuah game edukasi berbasis web yang menggabungkan konsep *Computational Thinking* (Logika Algoritma) dengan materi Pendidikan Agama Islam (PAI). Game ini dirancang dengan gaya visual *Pixel Art* ala Minecraft untuk menarik minat anak-anak.

## 🌟 Ide & Tema

*   **Tema:** Islamic Education x Voxel/Pixel Art.
*   **Konsep Utama:** Mengajarkan urutan (sequence) ibadah seperti Wudu, Salat, dan Sejarah Islam menggunakan mekanisme *drag-and-drop* atau *click-to-order* layaknya menyusun blok logika pemrograman.
*   **Target Audiens:** Anak-anak (SD/MI) atau pemula yang ingin belajar dasar Islam dengan cara interaktif.

## 🛠️ Tech Stack & Tools

Project ini dibangun menggunakan teknologi web modern yang ringan dan cepat:

*   **Core:** React 19 (via CDN/ESM for quick prototyping).
*   **Styling:** Tailwind CSS (Utility-first CSS framework).
*   **Language:** TypeScript (untuk tipe data yang aman dan struktur kode yang jelas).
*   **Icons:** Google Material Icons.
*   **Font:** VT323 (Google Fonts) untuk nuansa retro pixel.
*   **Assets:** CSS-based animations (tanpa gambar eksternal berat).
*   **Audio:** Web Audio API (Synthesizer internal, tidak perlu file mp3 eksternal).

## 📂 Arsitektur Project

Struktur folder dirancang modular agar mudah dikembangkan (Scalable):

```text
santricraft/
├── index.html              # Entry point aplikasi & konfigurasi Head
├── index.tsx               # Mounting React root
├── App.tsx                 # Komponen Utama & Routing Logic (State Management)
├── types.ts                # Definisi Type TypeScript (Interface Global)
├── README.md               # Dokumentasi Proyek
│
├── components/             # Komponen UI Reusable
│   ├── Header.tsx          # Navigasi atas (Logo, Volume, Level)
│   ├── MainMenu.tsx        # Halaman pemilihan kategori
│   ├── GameScene.tsx       # Visualisasi karakter & animasi hasil
│   ├── Workspace.tsx       # Area kerja penyusunan blok (Logic Area)
│   ├── BlockItem.tsx       # Komponen individual blok
│   └── Character.tsx       # Karakter SVG dinamis
│
├── data/                   # Database Statis
│   └── gameData.ts         # Berisi data Level, Kategori, dan Blok
│
└── utils/                  # Fungsi Utilitas
    └── audio.ts            # Simple Audio Synthesizer (BGM & SFX)
```

## 📝 Dokumentasi Prompt (AI Generation)

Website ini dibuat dengan bantuan AI menggunakan teknik *Iterative Prompting*. Berikut adalah ringkasan alur prompt yang digunakan:

1.  **Inisialisasi & Konsep:**
    > "Buatkan purwarupa game edukasi bernama 'SantriCraft' dengan gaya visual Minecraft/Pixel. Gunakan React, Tailwind, dan TypeScript. Fokus pada Level 1: Algoritma Wudu. Struktur folder harus modular."

2.  **Refinement UI (Minecraft Vibe):**
    > "Ubah tampilan agar lebih mirip game voxel. Tambahkan font 'VT323', efek tombol 3D (border-bottom tebal), dan animasi karakter sederhana menggunakan CSS shapes (tanpa image eksternal)."

3.  **Penambahan Fitur (Audio & Logika):**
    > "Tambahkan fitur BGM dan SFX menggunakan Web Audio API (synthesizer) agar tidak perlu aset file suara. Buat logika validasi urutan blok yang benar untuk Wudu."

4.  **Ekspansi Konten:**
    > "Tambahkan kategori baru: Tauhid dan Sejarah. Buat masing-masing 5 level. Tambahkan blok-blok baru seperti Rukun Islam, Nama Nabi, dan Sifat Allah."

5.  **Polesan Akhir (UX):**
    > "Perbaiki navigasi. Hilangkan tombol kembali yang mengambang, ganti dengan modal konfirmasi saat user ingin keluar game. Ganti icon emoji dengan Material Icons agar lebih profesional."

## 🚀 Cara Deploy (Vercel)

Aplikasi ini sangat mudah di-deploy ke Vercel karena berbasis React standar.

1.  **Push ke GitHub:**
    *   Buat repository baru di GitHub.
    *   Push semua file project ini ke repository tersebut.

2.  **Vercel Dashboard:**
    *   Buka [Vercel](https://vercel.com).
    *   Klik **"Add New..."** -> **"Project"**.
    *   Import repository GitHub yang baru dibuat.

3.  **Konfigurasi Build (Penting!):**
    *   Karena project ini menggunakan struktur *no-bundler* (ESM via CDN di `index.html`), Anda bisa menggunakan pengaturan default "Vite" atau "Create React App" biasanya sudah cukup pintar mendeteksi, namun jika menggunakan cara manual:
    *   *Build Command:* `npm run build` (Pastikan ada `package.json` dan `vite` terinstall jika ingin build production optimized).
    *   *Alternatif (Static):* Jika dijalankan sebagai file statis murni, pastikan Vercel melayani `index.html` sebagai entry point.

4.  **Klik Deploy:** Tunggu beberapa detik, dan website Anda online!

## 📄 Lisensi (MIT License)

Copyright (c) 2024 SantriCraft Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
