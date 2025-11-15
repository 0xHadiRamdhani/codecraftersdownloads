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
git clone https://github.com/0xHadiRamdhani/CodeCraftersNewVersion.git
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

---

# 📚 Dokumentasi Teknis Lengkap

## 🎨 Komponen React

### [`AnimatedSection`](src/components/AnimatedSection.tsx)

Komponen wrapper yang menyediakan animasi scroll-based menggunakan Intersection Observer API.

#### Props
```typescript
interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';
    delay?: number;
    duration?: number;
    className?: string;
}
```

#### Penggunaan
```tsx
<AnimatedSection animation="fade-up" duration={800} delay={200}>
    <h1>Konten Anda</h1>
</AnimatedSection>
```

#### Animasi yang Tersedia
- **`fade-up`**: Fade in dari bawah ke atas
- **`fade-down`**: Fade in dari atas ke bawah  
- **`fade-left`**: Fade in dari kiri ke kanan
- **`fade-right`**: Fade in dari kanan ke kiri
- **`scale`**: Zoom in dari 90% ke 100%
- **`rotate`**: Rotate dari 12deg ke 0deg

---

### [`MatrixEffect`](src/components/MatrixEffect.tsx)

Komponen yang menghasilkan efek matrix rain animation menggunakan HTML5 Canvas.

#### Fitur
- Animasi karakter hijau yang jatuh seperti film Matrix
- Responsive terhadap ukuran layar
- Performance optimized dengan requestAnimationFrame
- Karakter acak dari alfabet dan simbol

#### Implementasi Teknis
- Menggunakan [`useRef`](src/components/MatrixEffect.tsx:6) untuk mengakses canvas
- [`useEffect`](src/components/MatrixEffect.tsx:8) untuk setup dan cleanup animation loop
- Event listener untuk window resize
- Cleanup function untuk menghapus interval dan event listener

#### Karakter yang Digunakan
```javascript
const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
```

---

### [`MobileMenu`](src/components/MobileMenu.tsx)

Komponen menu mobile dengan hamburger button dan overlay navigation.

#### State Management
```typescript
const [isOpen, setIsOpen] = useState(false);
```

#### Fitur
- **Hamburger Button**: Animasi icon berubah dari hamburger ke close (X)
- **Overlay Menu**: Full screen overlay dengan backdrop blur
- **Scroll Lock**: Mencegah body scroll saat menu terbuka
- **Smooth Scroll**: Integrasi dengan [`SmoothScrollLink`](src/components/SmoothScrollLink.tsx)

#### A11y Features
- [`aria-label`](src/components/MobileMenu.tsx:34) untuk button
- Focus management yang tepat
- Keyboard navigation support

---

### [`SmoothScrollLink`](src/components/SmoothScrollLink.tsx)

Komponen link yang mendukung smooth scrolling untuk anchor links dan navigation.

#### Props
```typescript
interface SmoothScrollLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
```

#### Fitur
- **Smooth Scrolling**: Untuk anchor links (`#section`)
- **External Links**: Buka link eksternal di tab baru
- **Next.js Navigation**: Untuk internal links non-anchor
- **Custom Callback**: Support onClick handler tambahan

---

## 🪝 Custom Hooks

### [`useIntersectionObserver`](src/hooks/useIntersectionObserver.ts)

Custom hook untuk mendeteksi kapan elemen masuk ke viewport.

#### Parameter
```typescript
interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}
```

#### Return Value
```typescript
return [ref, isIntersecting] as const;
// ref: React.RefObject<HTMLElement>
// isIntersecting: boolean
```

#### Penggunaan
```tsx
const [ref, isIntersecting] = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
});

return (
    <div ref={ref}>
        {isIntersecting ? 'Visible!' : 'Not visible'}
    </div>
);
```

---

# 🚀 Setup dan Konfigurasi

## 📋 Prasyarat Sistem

### Minimum Requirements
- **Node.js**: v18.0.0 atau lebih baru
- **npm**: v8.0.0 atau lebih baru (atau alternatif: yarn, pnpm, bun)
- **Git**: v2.20.0 atau lebih baru
- **Storage**: Minimal 500MB free space

### Recommended Setup
```bash
# Cek versi Node.js
node --version  # v18.0.0+

# Cek versi npm  
npm --version   # v8.0.0+

# Cek versi Git
git --version   # v2.20.0+
```

## 🛠️ Instalasi dan Setup

### 1. Clone Repository
```bash
# Clone dari GitHub
git clone https://github.com/0xHadiRamdhani/CodeCraftersNewVersion.git

# Masuk ke directory proyek
cd CodeCraftersNewVersion
```

### 2. Install Dependencies
```bash
# Gunakan npm (recommended)
npm install

# Alternatif: yarn
yarn install

# Alternatif: pnpm
pnpm install

# Alternatif: bun
bun install
```

### 3. Development Environment Setup
```bash
# Jalankan development server
npm run dev

# Server akan berjalan di http://localhost:3000
```

## ⚙️ Konfigurasi Environment

### Environment Variables
Buat file `.env.local` di root directory:

```env
# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=CodeCrafters

# Firebase Configuration (jika menggunakan Firebase)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### TypeScript Configuration
File [`tsconfig.json`](tsconfig.json) sudah dikonfigurasi dengan:
- Strict mode enabled
- Modern ES modules
- Path mapping untuk imports
- Next.js specific configurations

### Tailwind CSS Configuration
File [`postcss.config.mjs`](postcss.config.mjs) menggunakan Tailwind CSS v4:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

## 🔧 Development Workflow

### Available Scripts
```bash
# Development server dengan Turbopack
npm run dev

# Build untuk production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### File Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page utama
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AnimatedSection.tsx
│   ├── MatrixEffect.tsx
│   ├── MobileMenu.tsx
│   └── SmoothScrollLink.tsx
└── hooks/                 # Custom React hooks
    └── useIntersectionObserver.ts
```

---

# 🧪 Testing dan Debugging

## Testing Setup

### Unit Testing (Optional)
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

### E2E Testing (Optional)
```bash
# Install Playwright untuk E2E testing
npm install --save-dev @playwright/test

# Run E2E tests
npm run test:e2e
```

## Build dan Optimization

### Production Build
```bash
# Build aplikasi
npm run build

# Build akan menghasilkan:
# - .next/ directory
# - Optimized bundles
# - Static assets
# - Server-side rendering ready
```

### Build Analysis
```bash
# Analisis bundle size
npm run build:analyze

# Cek performance metrics
npm run lighthouse
```

---

# 🚀 Deployment Options

## 1. Firebase Hosting (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login ke Firebase
firebase login

# Init Firebase project
firebase init hosting

# Build dan deploy
npm run build
firebase deploy
```

## 2. Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy ke Vercel
vercel

# Atau gunakan GitHub integration
```

## 3. Netlify Deployment
```bash
# Build untuk static export
npm run build
npm run export

# Deploy ke Netlify
# Atau drag-and-drop folder 'out' ke Netlify
```

---

# 🔍 Debugging dan Troubleshooting

## Common Issues

### Issue: Module not found
```bash
# Solusi: Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
```bash
# Solusi: Cek tsconfig.json dan pastikan types terinstall
npm install --save-dev @types/node @types/react @types/react-dom
```

### Issue: Build failed
```bash
# Solusi: Cek ESLint errors
npm run lint

# Cek TypeScript errors
npx tsc --noEmit
```

### Issue: Canvas effect not working
```bash
# Solusi: Cek browser support untuk Canvas API
# Pastikan tidak ada ad blocker yang memblokir
```

---

# 🤝 Panduan Kontribusi

## Code of Conduct

### Our Pledge
Kami berkomitmen untuk menciptakan lingkungan yang ramah dan inklusif untuk semua kontributor, terlepas dari latar belakang, pengalaman, atau identitas.

### Our Standards
- Gunakan bahasa yang ramah dan inklusif
- Hormati berbagai sudut pandang dan pengalaman
- Terima konstruktif kritik dengan sopan
- Fokus pada apa yang terbaik untuk komunitas
- Tunjukkan empati terhadap anggota komunitas lainnya

## Development Workflow

### Fork dan Clone Repository
```bash
# 1. Fork repository di GitHub
# Klik tombol "Fork" di https://github.com/0xHadiRamdhani/CodeCraftersNewVersion

# 2. Clone fork Anda
git clone https://github.com/YOUR_USERNAME/CodeCraftersNewVersion.git
cd CodeCraftersNewVersion

# 3. Tambahkan upstream remote
git remote add upstream https://github.com/0xHadiRamdhani/CodeCraftersNewVersion.git

# 4. Verifikasi remote
git remote -v
```

### Branch Naming Convention
- `feature/nama-fitur` - Untuk fitur baru
- `fix/nama-bug` - Untuk bug fixes
- `docs/nama-dokumentasi` - Untuk dokumentasi
- `refactor/nama-refactor` - Untuk refactoring
- `test/nama-test` - Untuk testing

### Commit Messages
Gunakan format commit message yang jelas dan deskriptif:
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Perubahan dokumentasi
- `style`: Perubahan styling (CSS, format)
- `refactor`: Refactoring code
- `test`: Menambah/mengubah tests
- `chore`: Maintenance tasks

## Coding Standards

### TypeScript Guidelines
```typescript
// ✅ Use explicit types
interface UserProps {
    id: number;
    name: string;
    email?: string; // optional
}

// ✅ Use const assertions
const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
} as const;

// ✅ Use enums untuk constants
enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}
```

### React Component Guidelines
```tsx
// ✅ Use functional components dengan TypeScript
interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary' 
}) => {
    return (
        <button 
            onClick={onClick}
            className={`btn btn-${variant}`}
        >
            {children}
        </button>
    );
};

// ✅ Use custom hooks untuk logic reuse
export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    // ... logic
    return { user, login, logout };
};
```

### CSS/Styling Guidelines
```css
/* ✅ Use Tailwind classes */
<div className="flex items-center justify-between p-4 bg-gray-100">

/* ✅ Use CSS modules untuk component-specific styles */
/* Button.module.css */
.button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
}

/* ✅ Use BEM methodology untuk custom CSS */
/* Block__Element--Modifier */
.card__header--active {
    background-color: blue;
}
```

## Testing Guidelines

### Unit Testing
```typescript
// ✅ Test component behavior
describe('Button Component', () => {
    it('should call onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>Click me</Button>);
        
        fireEvent.click(screen.getByText('Click me'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});

// ✅ Test custom hooks
describe('useAuth Hook', () => {
    it('should return user data when authenticated', () => {
        const { result } = renderHook(() => useAuth());
        expect(result.current.user).toBeDefined();
    });
});
```

### Testing Best Practices
1. **Test Behavior, Not Implementation**: Test what component does, not how
2. **Use Testing Library**: Prefer `@testing-library/react` over Enzyme
3. **Mock External Dependencies**: Mock API calls dan external services
4. **Test Edge Cases**: Test error states dan boundary conditions
5. **Coverage**: Aim untuk >80% code coverage

---

# 📡 API Documentation

## Component Interfaces

### AnimatedSection Props
```typescript
interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';
    delay?: number;
    duration?: number;
    className?: string;
}
```

### SmoothScrollLink Props
```typescript
interface SmoothScrollLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
```

## Custom Hook APIs

### useIntersectionObserver Hook
```typescript
interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

function useIntersectionObserver(
    options?: UseIntersectionObserverOptions
): [React.RefObject<HTMLElement>, boolean]
```

## Type Definitions

### Core Types
```typescript
// Animation types
type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';

// Navigation types
type LinkType = 'internal' | 'external' | 'anchor';

// Component variant types
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type AlertType = 'info' | 'warning' | 'error' | 'success';
```

### Security Types (Planned)
```typescript
// Vulnerability types
type VulnerabilityType = 'sql-injection' | 'xss' | 'csrf' | 'directory-traversal';
type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';
```

---

# 📱 Download Aplikasi

CodeCrafters tersedia untuk berbagai platform:

### 📱 iOS
- **Format**: IPA
- **Download**: [CodeCrafters-iOS.ipa](https://github.com/0xHadiRamdhani/CodeCraftersNewVersion/releases/download/v1.0.0/CodeCrafters-iOS.ipa)
- **Kompatibilitas**: iPhone dan iPad

### 🤖 Android
- **Format**: APK
- **Download**: [CodeCrafters-Android.apk](https://github.com/0xHadiRamdhani/CodeCraftersNewVersion/releases/download/v1.0.0/CodeCrafters-Android.apk)
- **Kompatibilitas**: Semua perangkat Android

### 💻 Versi Lainnya
Untuk versi lainnya, kunjungi [GitHub Releases](https://github.com/0xHadiRamdhani/CodeCraftersNewVersion/releases)

---

# 🔧 Skrip yang Tersedia

- **`npm run dev`** - Jalankan development server dengan Turbopack
- **`npm run build`** - Build aplikasi untuk production
- **`npm run start`** - Jalankan production server
- **`npm run lint`** - Jalankan ESLint untuk code linting

---

# 🌐 Deployment

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

---

# 🤝 Kontribusi

Kami menyambut kontribusi dari komunitas! Untuk detail lengkap, ikuti panduan di bagian **Coding Standards** dan **Testing Guidelines** di atas.

1. Fork repository ini
2. Buat branch fitur Anda (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

---

# 📞 Kontak

- **Email**: hadsxdev@gmail.com
- **Lokasi**: Subang, Indonesia
- **GitHub**: [0xHadiRamdhani](https://github.com/0xHadiRamdhani)

## 👥 Tim Pengembang

- **Programmer**: Hadi Ramdhani
- **Designer**: Hadi Ramdhani  
- **DevOps**: Akmal Alhafiz

---

# 📄 Lisensi

Proyek ini adalah open source dan tersedia di bawah [MIT License](LICENSE).

## ⚠️ Disclaimer

CodeCrafters adalah alat untuk testing keamanan dan edukasi. Gunakan secara bertanggung jawab dan hanya pada sistem yang Anda miliki atau memiliki izin untuk diuji. Kami tidak bertanggung jawab atas penyalahgunaan aplikasi ini.

---

# 🌟 Star & Support

Jika Anda menyukai proyek ini, berikan ⭐ di GitHub dan bagikan kepada komunitas!

---

**[© 2024 CodeCrafters Security Team](https://github.com/0xHadiRamdhani/CodeCraftersNewVersion)** | **[Open Source Project](https://github.com/0xHadiRamdhani/CodeCraftersNewVersion)**