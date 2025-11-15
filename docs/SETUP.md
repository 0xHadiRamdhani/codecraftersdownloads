# 🚀 Setup dan Konfigurasi Proyek CodeCrafters

Panduan lengkap untuk setup, konfigurasi, dan deployment proyek CodeCrafters.

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
git clone https://github.com/HadiOnZero/CodeCraftersNewVersion.git

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

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🎨 Tailwind CSS Configuration

### Custom Theme Configuration
File [`postcss.config.mjs`](postcss.config.mjs) menggunakan Tailwind CSS v4:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### Custom Styles
File [`src/app/globals.css`](src/app/globals.css) berisi:
- Custom scrollbar styling
- Animation utilities
- Gradient text utilities
- Dark mode support

```css
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

/* Animation utilities */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
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

### Development Best Practices
1. **Hot Reload**: Next.js akan auto-reload saat file berubah
2. **Type Checking**: TypeScript akan mengecek types secara real-time
3. **Linting**: ESLint akan mengecek code quality
4. **Error Overlay**: Error akan muncul di browser dengan detail

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

## 🧪 Testing Setup

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

## 📦 Build dan Optimization

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

## 🚀 Deployment Options

### 1. Firebase Hosting (Recommended)
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

### Firebase Configuration [`firebase.json`](firebase.json):
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 2. Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy ke Vercel
vercel

# Atau gunakan GitHub integration
```

### 3. Netlify Deployment
```bash
# Build untuk static export
npm run build
npm run export

# Deploy ke Netlify
# Atau drag-and-drop folder 'out' ke Netlify
```

## 🔍 Debugging dan Troubleshooting

### Common Issues

#### Issue: Module not found
```bash
# Solusi: Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: TypeScript errors
```bash
# Solusi: Cek tsconfig.json dan pastikan types terinstall
npm install --save-dev @types/node @types/react @types/react-dom
```

#### Issue: Build failed
```bash
# Solusi: Cek ESLint errors
npm run lint

# Cek TypeScript errors
npx tsc --noEmit
```

#### Issue: Canvas effect not working
```bash
# Solusi: Cek browser support untuk Canvas API
# Pastikan tidak ada ad blocker yang memblokir
```

### Debug Mode
```bash
# Jalankan dengan debug mode
DEBUG=* npm run dev

# Atau gunakan Next.js debug mode
NODE_OPTIONS='--inspect' npm run dev
```

## 📊 Performance Monitoring

### Lighthouse CI
```bash
# Install Lighthouse CI
npm install --save-dev @lhci/cli

# Run Lighthouse tests
npm run lighthouse
```

### Web Vitals
```javascript
// Di dalam app/layout.tsx atau app/page.tsx
import { useReportWebVitals } from 'next/web-vitals'

export function useWebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
}
```

## 🔒 Security Best Practices

### Environment Variables
- Jangan commit `.env.local` ke Git
- Gunakan `.env.example` untuk template
- Validasi semua environment variables

### Dependencies Security
```bash
# Cek security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Content Security Policy
Tambahkan CSP headers di [`next.config.ts`](next.config.ts):
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'"
          }
        ]
      }
    ]
  }
}
```

## 📈 Analytics dan Monitoring

### Google Analytics
```javascript
// Di app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Error Tracking (Sentry)
```bash
# Install Sentry
npm install --save-dev @sentry/nextjs

# Setup Sentry
npx @sentry/wizard -i nextjs
```

## 🔄 CI/CD Pipeline

### GitHub Actions
Buat file `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
```

## 📞 Support dan Kontak

### Developer Support
- **Email**: hadsxdev@gmail.com
- **GitHub Issues**: [Report bugs atau request features](https://github.com/HadiOnZero/CodeCraftersNewVersion/issues)
- **Discussions**: [Tanya jawab dan diskusi](https://github.com/HadiOnZero/CodeCraftersNewVersion/discussions)

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Catatan**: Dokumentasi ini akan diupdate secara berkala. Pastikan untuk cek versi terbaru di GitHub repository.