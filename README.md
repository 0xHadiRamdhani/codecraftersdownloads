# 🔐 CodeCrafters - Aplikasi Keamanan Siber

> **"Security is not a product, but a process"** - Bruce Schneier

CodeCrafters adalah aplikasi keamanan siber profesional yang dirancang untuk developer, penetration tester, dan security enthusiast. Dengan antarmuka bertema matrix/hacker yang ikonik, aplikasi ini menyediakan berbagai alat penting untuk testing keamanan dan proteksi aplikasi web.

## 🚀 Fitur Utama

### 🔐 **Firebase Authentication System**
- Login dan registrasi pengguna yang aman
- Integrasi dengan Firebase Authentication
- Manajemen sesi yang handal

### 🛡️ **SQL Injection Checker**
- Pemeriksaan kerentanan SQL Injection
- Analisis keamanan database
- Rekomendasi perbaikan keamanan

### 🌐 **XSS Detector**
- Deteksi kerentanan Cross-Site Scripting
- Analisis keamanan aplikasi web
- Proteksi terhadap serangan XSS

### 🔍 **Mirror Tools**
- Alat untuk mirror website secara massal
- Fitur advanced crawling
- Analisis struktur website

### 📊 **SMB Enumeration**
- Enumerasi SMB dengan Nmap
- Analisis keamanan jaringan
- Deteksi layanan jaringan

### 🎯 **Digital Identity Investigation**
- Alat investigasi identitas digital
- Forensik digital
- Analisis jejak digital

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15.5.4 dengan React 19.1.0
- **Styling**: Tailwind CSS v4
- **Bahasa**: TypeScript
- **Animasi**: Custom hooks dengan Intersection Observer
- **Deployment**: Firebase Hosting
- **Linting**: ESLint 9

## 📋 Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- Node.js (versi 18 atau lebih baru)
- npm, yarn, pnpm, atau bun
- Git

## 🚀 Instalasi dan Penggunaan

### 1. Clone Repository
```bash
git clone https://github.com/HadiOnZero/CodeCraftersNewVersion.git
cd CodeCraftersNewVersion
```

### 2. Instalasi Dependensi
```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
```

### 3. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

### 4. Buka Aplikasi
Buka browser dan akses [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## 📁 Struktur Proyek

```
codecrafters/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Halaman utama (landing page)
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Komponen React
│   │   ├── AnimatedSection.tsx    # Komponen animasi scroll
│   │   ├── MatrixEffect.tsx       # Efek matrix background
│   │   ├── MobileMenu.tsx         # Menu mobile
│   │   └── SmoothScrollLink.tsx   # Link dengan smooth scroll
│   └── hooks/                 # Custom React hooks
│       └── useIntersectionObserver.ts
├── public/                    # Aset statis
├── .firebase/                # Konfigurasi Firebase
├── firebase.json             # Firebase hosting config
└── package.json              # Dependensi proyek
```

## 🎨 Desain dan Tema

Aplikasi ini mengusung tema **Matrix/Hacker** dengan karakteristik:
- **Warna Utama**: Hijau neon (#00ff00) dengan background hitam
- **Font**: Monospace untuk kesan hacker autentik
- **Efek Visual**: Matrix rain effect, animated grid lines
- **Animasi**: Smooth scroll, fade animations, hover effects
- **Ikon**: SVG icons dengan tema keamanan siber

## 📱 Download Aplikasi

CodeCrafters tersedia untuk berbagai platform:

### 📱 iOS
- **Format**: IPA
- **Download**: [CodeCrafters-iOS.ipa](https://github.com/HadiOnZero/CodeCraftersNewVersion/releases/download/v1.0.0/CodeCrafters-iOS.ipa)
- **Kompatibilitas**: iPhone dan iPad

### 🤖 Android
- **Format**: APK
- **Download**: [CodeCrafters-Android.apk](https://github.com/HadiOnZero/CodeCraftersNewVersion/releases/download/v1.0.0/CodeCrafters-Android.apk)
- **Kompatibilitas**: Semua perangkat Android

### 💻 Versi Lainnya
Untuk versi lainnya, kunjungi [GitHub Releases](https://github.com/HadiOnZero/CodeCraftersNewVersion/releases)

## 🔧 Skrip yang Tersedia

- **`npm run dev`** - Jalankan development server dengan Turbopack
- **`npm run build`** - Build aplikasi untuk production
- **`npm run start`** - Jalankan production server
- **`npm run lint`** - Jalankan ESLint untuk code linting

## 🌐 Deployment

### Firebase Hosting
Proyek ini dikonfigurasi untuk deployment di Firebase Hosting:

```bash
npm run build
firebase deploy
```

### Vercel
Alternatif deployment dengan Vercel:

```bash
vercel
```

## 🤝 Kontribusi

Kami menyambut kontribusi dari komunitas! Untuk berkontribusi:

1. Fork repository ini
2. Buat branch fitur Anda (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📞 Kontak

- **Email**: hadsxdev@gmail.com
- **Lokasi**: Subang, Indonesia
- **GitHub**: [HadiOnZero](https://github.com/HadiOnZero)

## 👥 Tim Pengembang

- **Programmer**: Hadi Ramdhani
- **Designer**: Hadi Ramdhani  
- **DevOps**: Akmal Alhafiz

## 📄 Lisensi

Proyek ini adalah open source dan tersedia di bawah [MIT License](LICENSE).

## ⚠️ Disclaimer

CodeCrafters adalah alat untuk testing keamanan dan edukasi. Gunakan secara bertanggung jawab dan hanya pada sistem yang Anda miliki atau memiliki izin untuk diuji. Kami tidak bertanggung jawab atas penyalahgunaan aplikasi ini.

## 🌟 Star & Support

Jika Anda menyukai proyek ini, berikan ⭐ di GitHub dan bagikan kepada komunitas!

---

**[© 2024 CodeCrafters Security Team](https://github.com/HadiOnZero/CodeCraftersNewVersion)** | **[Open Source Project](https://github.com/HadiOnZero/CodeCraftersNewVersion)**
