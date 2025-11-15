# 📚 Dokumentasi Komponen React

Dokumentasi ini menjelaskan semua komponen React yang digunakan dalam proyek CodeCrafters.

## 🎨 Komponen Animasi

### [`AnimatedSection`](src/components/AnimatedSection.tsx)

Komponen wrapper yang menyediakan animasi scroll-based menggunakan Intersection Observer API.

#### Props
```typescript
interface AnimatedSectionProps {
    children: ReactNode;           // Konten yang akan dianimasikan
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';
    delay?: number;               // Delay animasi dalam milidetik (default: 0)
    duration?: number;            // Durasi animasi dalam milidetik (default: 600)
    className?: string;           // Kelas CSS tambahan
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

## 📱 Komponen Navigasi

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

#### Efek Side Effect
```typescript
useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
}, [isOpen]);
```

---

### [`SmoothScrollLink`](src/components/SmoothScrollLink.tsx)

Komponen link yang mendukung smooth scrolling untuk anchor links dan navigation.

#### Props
```typescript
interface SmoothScrollLinkProps {
    href: string;                    // Target link (anchor atau external)
    children: React.ReactNode;       // Konten link
    className?: string;              // Kelas CSS tambahan
    onClick?: () => void;            // Callback tambahan
}
```

#### Fitur
- **Smooth Scrolling**: Untuk anchor links (`#section`)
- **External Links**: Buka link eksternal di tab baru
- **Next.js Navigation**: Untuk internal links non-anchor
- **Custom Callback**: Support onClick handler tambahan

#### Logic Flow
1. Cek apakah link eksternal (starts with 'http')
2. Cek apakah anchor link (starts with '#')
3. Gunakan [`router.push()`](src/components/SmoothScrollLink.tsx:41) untuk internal links
4. Gunakan [`scrollIntoView()`](src/components/SmoothScrollLink.tsx:34) untuk smooth scroll

---

## 🪝 Custom Hooks

### [`useIntersectionObserver`](src/hooks/useIntersectionObserver.ts)

Custom hook untuk mendeteksi kapan elemen masuk ke viewport.

#### Parameter
```typescript
interface UseIntersectionObserverOptions {
    threshold?: number;      // Persentase visibility (default: 0.1)
    rootMargin?: string;     // Margin dari viewport (default: '0px')
    triggerOnce?: boolean;   // Hanya trigger sekali (default: true)
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

#### Implementasi
- Menggunakan native [`IntersectionObserver`](src/hooks/useIntersectionObserver.ts:18) API
- Auto cleanup observer saat component unmount
- Support untuk threshold dan rootMargin customization
- TypeScript support dengan proper typing

---

## 🎯 Best Practices dan Tips

### Performance Optimization
1. **Animation Performance**: Gunakan `transform` dan `opacity` untuk animasi smooth
2. **Canvas Optimization**: Matrix effect menggunakan efficient drawing techniques
3. **Intersection Observer**: Lazy load animations untuk improve performance
4. **Event Cleanup**: Selalu cleanup event listeners dan intervals

### Accessibility
1. **Semantic HTML**: Gunakan elemen semantic yang tepat
2. **ARIA Labels**: Tambahkan aria-label untuk interactive elements
3. **Keyboard Navigation**: Support keyboard navigation di mobile menu
4. **Focus Management**: Proper focus handling di interactive components

### Responsive Design
1. **Mobile First**: Semua komponen diuji di mobile terlebih dahulu
2. **Breakpoint Strategy**: Gunakan Tailwind breakpoints (sm, md, lg, xl)
3. **Touch Friendly**: Pastikan touch targets cukup besar (minimum 44px)
4. **Viewport Units**: Gunakan vw/vh untuk full-screen effects

### Error Handling
1. **Null Checks**: Selalu cek null untuk refs dan DOM elements
2. **Type Safety**: Gunakan TypeScript untuk type safety
3. **Fallback Behavior**: Sedikan fallback untuk browser yang tidak support
4. **Cleanup**: Proper cleanup untuk prevent memory leaks

---

## 🔧 Integrasi dan Testing

### Testing Strategy
```bash
# Unit tests untuk hooks
npm test src/hooks/useIntersectionObserver.test.ts

# Component testing
npm test src/components/AnimatedSection.test.tsx

# Integration testing
npm test src/app/page.test.tsx
```

### Debugging Tips
1. **Intersection Observer**: Gunakan browser dev tools untuk debug visibility
2. **Canvas Issues**: Cek canvas context dan dimensions
3. **Animation Performance**: Gunakan Chrome DevTools Performance tab
4. **Mobile Testing**: Test di berbagai device dan screen sizes

### Common Issues dan Solusi

| Issue | Solusi |
|-------|--------|
| Animasi tidak smooth | Cek CSS transform support, gunakan hardware acceleration |
| Matrix effect lag | Kurangi font size atau increase interval time |
| Mobile menu tidak close | Pastikan onClick handler dipanggil dengan benar |
| Smooth scroll tidak work | Cek target element existence dan ID correctness |

---

## 📋 Checklist Development

### Sebelum Deploy
- [ ] Semua animasi work smoothly di berbagai device
- [ ] Mobile menu tested di iOS dan Android
- [ ] Canvas effect tidak cause performance issues
- [ ] All links work correctly (internal dan external)
- [ ] Accessibility audit passed
- [ ] Lighthouse performance score > 90

### Code Quality
- [ ] TypeScript types defined properly
- [ ] Props interfaces documented
- [ ] Error handling implemented
- [ ] Cleanup functions added
- [ ] Comments added untuk complex logic
- [ ] Follow React best practices

--- 

**Catatan**: Dokumentasi ini akan diupdate secara berkala. Untuk pertanyaan atau kontribusi, silakan buka issue di GitHub repository.