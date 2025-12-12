# SantriCraft: Logic Quest 🕌🎮

![SantriCraft Banner](https://placehold.co/1200x400/16a34a/ffffff?text=SantriCraft:+Logic+Quest&font=roboto)

**SantriCraft: Logic Quest** adalah sebuah game edukasi berbasis web yang menggabungkan konsep *Computational Thinking* (Logika Algoritma) dengan materi Pendidikan Agama Islam (PAI). Game ini dirancang dengan gaya visual *Pixel Art* ala Minecraft untuk menarik minat anak-anak belajar Wudu, Salat, dan Sejarah Islam.

> **Status:** Beta Version 1.0  
> **Built with:** [Google AI Studio](https://aistudio.google.com/)

---

## 🌟 Fitur Utama

1.  **Belajar Algoritma**: Menyusun urutan blok logika (Sequence) untuk menyelesaikan ibadah (misal: Urutan Wudu).
2.  **Materi Islam Komprehensif**:
    *   **Fiqh:** Wudu, Tayammum, Salat, Adzan.
    *   **Tauhid:** Rukun Islam, Rukun Iman, Sifat Allah.
    *   **Sejarah:** Kisah Nabi, Khulafaur Rasyidin.
3.  **Visual Pixel Art**: Menggunakan aset CSS murni (tanpa gambar berat) untuk nuansa retro/voxel.
4.  **Audio Synthesizer**: BGM dan SFX dihasilkan secara *real-time* oleh browser (Web Audio API), membuat game sangat ringan.
5.  **Interaktif**: Animasi karakter dinamis yang bereaksi terhadap jawaban benar/salah.

---

## 🛠️ Tech Stack & AI Tools

Project ini dibangun dengan teknologi modern yang ringan, dikembangkan dengan bantuan Artificial Intelligence.

### Core Technology
*   **Framework:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Utility-first)
*   **Icons:** Google Material Icons
*   **Font:** VT323 (Google Fonts)

### 🤖 AI Development Environment
Pengembangan kode ini dilakukan 100% menggunakan **Google AI Studio** dengan model **Gemini 2.0 Flash**.

*   **Platform:** [Google AI Studio](https://aistudio.google.com/)
*   **Model:** Gemini 2.0 Flash / Pro
*   **Peran AI:** Bertindak sebagai *Senior Frontend Engineer* yang menangani struktur folder, logika game, dan desain UI.

---

## 📚 Panduan & Struktur Prompt (AI Prompt Engineering)

Bagian ini adalah dokumentasi bagaimana game ini dibuat menggunakan AI. Anda dapat menggunakan struktur prompt di bawah ini sebagai panduan untuk membuat aplikasi serupa di Google AI Studio.

### Fase 1: Inisialisasi & Peran (Roleplay)
Tujuannya adalah menetapkan konteks agar AI menghasilkan kode yang bersih dan modular.

**Prompt:**
```text
Act as a world-class senior frontend engineer. I want to build a web-based educational game called "SantriCraft". 

Requirements:
1. Tech Stack: React, Tailwind CSS, Vanilla JS structure (ES Modules).
2. Structure: Do not use 'create-react-app'. Treat the current directory as root. Use a modular folder structure (components, data, utils).
3. Goal: Level 1 is about "Wudu Algorithm". Users drag/click blocks to order them correctly.
4. Output: Provide the full content of index.html, main.js (or App.tsx), and data files.
```

### Fase 2: Visual & Styling (The Vibe)
Tujuannya mengubah tampilan standar menjadi gaya Minecraft/Pixel.

**Prompt:**
```text
Change the UI design to have a "Minecraft/Voxel" vibe. 

Specific Design Choices:
1. Font: Import 'VT323' from Google Fonts.
2. Buttons: Make them look like 3D blocks (use border-bottom-4, clear outlines).
3. Colors: Use Earth tones (Green, Brown, Blue sky).
4. Animations: When the character is happy, make it jump using CSS keyframes. 
5. Scrollbar: Create a custom CSS scrollbar that looks like a stone block.
```

### Fase 3: Logika Game & Data
Tujuannya memperluas konten game agar tidak hanya satu level.

**Prompt:**
```text
I need to expand the game content. Please create a new file `data/gameData.ts`.

Requirements:
1. Create a database constant that contains multiple categories: 'Fiqh', 'Tauhid', 'Sejarah'.
2. Each category should have at least 5 levels.
3. Add a 'distractor' block mechanism (wrong blocks that shouldn't be selected).
4. Update the validation logic in `App.tsx` to handle these new data structures.
```

### Fase 4: Fitur Lanjutan (Audio & Utilitas)
Tujuannya menambahkan fitur kompleks tanpa menambah ukuran file (tanpa mp3).

**Prompt:**
```text
Create a `utils/audio.ts` file. 

Requirements:
1. Do not use external MP3 files. Use the Web Audio API to create a synthesizer.
2. Create a function `startBGM()` that plays a simple retro/8-bit loop melody.
3. Create `playSound(type)` for 'click', 'success', and 'error' effects.
4. Add a Mute button in the Header component to toggle this audio.
```

### Fase 5: Polesan Akhir (Refinement)
Tujuannya memperbaiki UX dan bug.

**Prompt:**
```text
Refine the UX. 
1. Add a "Help" and "Info" button in the navbar that opens a Modal.
2. Ensure the footer grass animation is always at the bottom but doesn't cover content.
3. Add a "Quiz" mode that picks 5 random questions from a bank of 100 questions.
```

---

## 📂 Arsitektur Project

```text
santricraft/
├── index.html              # Entry point & Global CSS
├── index.tsx               # React Root Mounting
├── App.tsx                 # Main Logic Controller
├── types.ts                # TypeScript Interfaces
│
├── components/             # UI Components (Atomic Design)
│   ├── Header.tsx          # Navbar & Navigation
│   ├── MainMenu.tsx        # Category Selection
│   ├── GameScene.tsx       # Character & Environment Visualization
│   ├── Workspace.tsx       # Logic Block Area
│   ├── BlockItem.tsx       # Draggable/Clickable Block
│   ├── Character.tsx       # SVG Character Component
│   ├── QuizView.tsx        # Quiz Mode Component
│   └── CalendarView.tsx    # Hijri Calendar Component
│
├── data/                   # Static Data
│   ├── gameData.ts         # Levels & Block Definitions
│   └── quizData.ts         # Question Bank (100 Items)
│
└── utils/                  # Utilities
    └── audio.ts            # Web Audio API Synthesizer
```

## 🚀 Cara Menjalankan (Local & Deploy)

### Local Development
1.  Pastikan Node.js terinstall.
2.  Clone repository ini.
3.  Jalankan perintah (jika menggunakan Vite/Simple Server):
    ```bash
    npx serve
    ```
    Atau buka `index.html` menggunakan Live Server di VS Code.

### Deploy ke Vercel
1.  Push kode ke GitHub.
2.  Import project di Dashboard Vercel.
3.  Set *Framework Preset* ke **Vite** atau **Other**.
4.  Deploy!

---

## 📄 Lisensi

**MIT License** - Bebas digunakan dan dimodifikasi untuk tujuan pendidikan.

*Dibuat dengan ❤️ dan 🤖 oleh WASEP (Mahasiswa UIN SSC).*
