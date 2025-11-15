# 📡 API Documentation - CodeCrafters

Dokumentasi ini menjelaskan API eksternal, utility functions, dan interfaces yang digunakan dalam proyek CodeCrafters.

## 🎯 Overview

CodeCrafters menggunakan beberapa API dan utility functions untuk berbagai fitur keamanan siber. Dokumentasi ini mencakup:

- Component Interfaces
- Custom Hook APIs
- Utility Functions
- External Service Integrations
- Type Definitions

## 🧩 Component Interfaces

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

**Usage Example:**
```tsx
<AnimatedSection 
    animation="fade-up" 
    delay={200} 
    duration={800}
    className="custom-class"
>
    <h1>Your Content</h1>
</AnimatedSection>
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

**Usage Example:**
```tsx
<SmoothScrollLink 
    href="#features" 
    className="nav-link"
    onClick={() => console.log('Link clicked')}
>
    Features
</SmoothScrollLink>
```

## 🪝 Custom Hook APIs

### useIntersectionObserver Hook
```typescript
interface UseIntersectionObserverOptions {
    threshold?: number;      // Default: 0.1
    rootMargin?: string;     // Default: '0px'
    triggerOnce?: boolean;   // Default: true
}

function useIntersectionObserver(
    options?: UseIntersectionObserverOptions
): [React.RefObject<HTMLElement>, boolean]
```

**Return Value:**
- `[ref, isIntersecting]` - Tuple dengan ref dan visibility state
- `ref` - React ref untuk attach ke element
- `isIntersecting` - Boolean yang menunjukkan apakah element visible

**Usage Example:**
```tsx
const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '50px',
    triggerOnce: false
});

return (
    <div ref={ref}>
        {isIntersecting ? 'Visible!' : 'Not visible'}
    </div>
);
```

## ⚙️ Utility Functions

### Animation Utilities
```typescript
// Get animation class based on type and state
function getAnimationClass(
    animation: string, 
    isIntersecting: boolean,
    duration: number
): string

// Calculate transition delay
function calculateTransitionDelay(delay: number): string

// Check if animation is supported
function isAnimationSupported(): boolean
```

### Matrix Effect Utilities
```typescript
// Generate random matrix characters
function generateMatrixCharacters(): string[]

// Calculate canvas dimensions
function calculateCanvasDimensions(): { width: number; height: number }

// Optimize animation frame rate
function optimizeFrameRate(fps: number): number
```

### Navigation Utilities
```typescript
// Check if link is external
function isExternalLink(href: string): boolean

// Check if link is anchor
function isAnchorLink(href: string): boolean

// Smooth scroll to element
function smoothScrollToElement(elementId: string): void

// Get element position
function getElementPosition(element: HTMLElement): { top: number; left: number }
```

## 🔗 External Service APIs

### Firebase Integration (Planned)
```typescript
interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

interface AuthService {
    login(email: string, password: string): Promise<User>;
    register(email: string, password: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): User | null;
}

interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
}
```

### Security Tools API (Planned)
```typescript
interface SecurityScanResult {
    vulnerability: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    recommendation: string;
    affectedUrls: string[];
}

interface SQLInjectionChecker {
    scan(url: string): Promise<SecurityScanResult[]>;
    validateInput(input: string): boolean;
}

interface XSSDetector {
    scan(url: string): Promise<SecurityScanResult[]>;
    sanitizeInput(input: string): string;
}

interface SMBEnumerator {
    scan(target: string): Promise<NetworkService[]>;
    getServiceDetails(service: NetworkService): Promise<ServiceDetails>;
}
```

## 📱 Type Definitions

### Core Types
```typescript
// Animation types
type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';

// Navigation types
type LinkType = 'internal' | 'external' | 'anchor';

// Component variant types
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type AlertType = 'info' | 'warning' | 'error' | 'success';

// Matrix effect types
type MatrixCharacter = string;
type MatrixColumn = {
    x: number;
    y: number;
    characters: MatrixCharacter[];
    speed: number;
};
```

### Security Types
```typescript
// Vulnerability types
type VulnerabilityType = 'sql-injection' | 'xss' | 'csrf' | 'directory-traversal';
type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';

// Scan result types
type ScanStatus = 'pending' | 'running' | 'completed' | 'failed';
type ScanResult = {
    id: string;
    target: string;
    status: ScanStatus;
    vulnerabilities: Vulnerability[];
    scanTime: number;
    timestamp: Date;
};

// Network types
type NetworkService = {
    port: number;
    protocol: string;
    service: string;
    version?: string;
    state: 'open' | 'closed' | 'filtered';
};
```

## 🎨 Theme and Styling API

### Color Palette
```typescript
interface ColorPalette {
    primary: string;        // #00ff00 (Matrix green)
    secondary: string;      // #00cc00
    accent: string;         // #66ff66
    background: string;     // #000000
    surface: string;        // #0a0a0a
    text: string;           // #ffffff
    textSecondary: string;  // #cccccc
    error: string;          // #ff4444
    warning: string;        // #ffaa00
    success: string;        // #44ff44
}

interface Typography {
    fontFamily: {
        mono: string;       // 'Courier New', monospace
        sans: string;       // System sans-serif
    };
    fontSize: {
        xs: string;         // '0.75rem'
        sm: string;         // '0.875rem'
        base: string;       // '1rem'
        lg: string;         // '1.125rem'
        xl: string;         // '1.25rem'
        '2xl': string;      // '1.5rem'
        '3xl': string;      // '1.875rem'
        '4xl': string;      // '2.25rem'
    };
}
```

### Breakpoint System
```typescript
interface Breakpoints {
    sm: string;     // '640px'
    md: string;     // '768px'  
    lg: string;     // '1024px'
    xl: string;     // '1280px'
    '2xl': string;  // '1536px'
}

interface ResponsiveDesign {
    mobile: string;     // < 768px
    tablet: string;     // 768px - 1024px
    desktop: string;    // > 1024px
}
```

## ⚡ Performance APIs

### Optimization Interfaces
```typescript
interface PerformanceMetrics {
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
}

interface OptimizationConfig {
    lazyLoad: boolean;
    prefetch: boolean;
    preload: boolean;
    compress: boolean;
    cache: boolean;
}

interface ImageOptimization {
    format: 'webp' | 'avif' | 'jpeg' | 'png';
    quality: number;
    size: { width: number; height: number };
    lazy: boolean;
}
```

### Caching Strategy
```typescript
interface CacheConfig {
    strategy: 'network-first' | 'cache-first' | 'stale-while-revalidate';
    maxAge: number;         // seconds
    maxEntries: number;     // maximum cache entries
    patterns: string[];     // URL patterns to cache
}

interface ServiceWorkerConfig {
    enabled: boolean;
    scope: string;
    cache: CacheConfig;
    offline: boolean;
}
```

## 🔧 Development APIs

### Build Configuration
```typescript
interface BuildConfig {
    target: 'development' | 'production' | 'test';
    optimization: boolean;
    sourceMap: boolean;
    minification: boolean;
    compression: 'gzip' | 'brotli' | 'none';
}

interface NextConfig {
    reactStrictMode: boolean;
    swcMinify: boolean;
    images: {
        domains: string[];
        formats: string[];
    };
    experimental: {
        appDir: boolean;
        turbo: boolean;
    };
}
```

### Development Tools
```typescript
interface DevTools {
    hotReload: boolean;
    fastRefresh: boolean;
    errorOverlay: boolean;
    bundleAnalyzer: boolean;
    lighthouse: boolean;
}

interface DebugConfig {
    level: 'error' | 'warn' | 'info' | 'debug';
    enabled: boolean;
    colors: boolean;
    timestamp: boolean;
}
```

## 📊 Analytics and Monitoring APIs

### Web Vitals
```typescript
interface WebVitals {
    cls: number;    // Cumulative Layout Shift
    fid: number;    // First Input Delay
    lcp: number;    // Largest Contentful Paint
    fcp: number;    // First Contentful Paint
    ttfb: number;   // Time to First Byte
}

interface AnalyticsConfig {
    enabled: boolean;
    trackingId: string;
    debug: boolean;
    anonymize: boolean;
}
```

### Error Tracking
```typescript
interface ErrorTracking {
    enabled: boolean;
    dsn: string;
    environment: string;
    release: string;
    tags: Record<string, string>;
}

interface ErrorReport {
    message: string;
    stack?: string;
    level: 'error' | 'warning' | 'info';
    context: Record<string, any>;
    timestamp: Date;
}
```

## 🔒 Security APIs

### Content Security Policy
```typescript
interface CSPConfig {
    defaultSrc: string[];
    scriptSrc: string[];
    styleSrc: string[];
    imgSrc: string[];
    connectSrc: string[];
    fontSrc: string[];
    objectSrc: string[];
    mediaSrc: string[];
    frameSrc: string[];
}

interface SecurityHeaders {
    'X-Frame-Options': string;
    'X-Content-Type-Options': string;
    'X-XSS-Protection': string;
    'Referrer-Policy': string;
    'Content-Security-Policy': string;
}
```

### Input Validation
```typescript
interface ValidationRules {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => boolean;
}

interface SanitizationConfig {
    html: boolean;
    sql: boolean;
    xss: boolean;
    nosql: boolean;
}
```

## 🚀 Deployment APIs

### Environment Configuration
```typescript
interface EnvironmentConfig {
    development: Config;
    staging: Config;
    production: Config;
}

interface Config {
    apiUrl: string;
    cdnUrl: string;
    analyticsId: string;
    errorTrackingDsn: string;
    features: {
        [feature: string]: boolean;
    };
}
```

### Build Optimization
```typescript
interface Optimization {
    images: boolean;
    fonts: boolean;
    scripts: boolean;
    styles: boolean;
    html: boolean;
}

interface DeploymentConfig {
    target: 'firebase' | 'vercel' | 'netlify' | 'aws';
    optimization: Optimization;
    caching: CacheConfig;
    compression: boolean;
}
```

## 📞 Support dan Usage

### Getting Started
```typescript
// Import components
import { AnimatedSection, SmoothScrollLink } from '@/components';
import { useIntersectionObserver } from '@/hooks';

// Use in your application
const MyComponent = () => {
    const [ref, isVisible] = useIntersectionObserver();
    
    return (
        <AnimatedSection animation="fade-up">
            <div ref={ref}>
                {isVisible && <SmoothScrollLink href="#target">Scroll to target</SmoothScrollLink>}
            </div>
        </AnimatedSection>
    );
};
```

### Best Practices
1. **Type Safety**: Selalu gunakan TypeScript interfaces
2. **Performance**: Gunakan lazy loading untuk components besar
3. **Accessibility**: Pastikan semua components accessible
4. **Testing**: Tulis unit tests untuk utility functions
5. **Documentation**: Update docs saat menambah APIs baru

### Common Patterns
```typescript
// Custom hook dengan proper typing
const useCustomHook = (options: CustomOptions): [RefObject<HTMLElement>, boolean] => {
    // Implementation
    return [ref, state];
};

// Component dengan compound pattern
const Component = {
    Root: ComponentRoot,
    Item: ComponentItem,
    Label: ComponentLabel,
};

// Utility function dengan overloads
function processData(data: string): string;
function processData(data: number): number;
function processData(data: any): any {
    // Implementation
}
```

---

**Catatan**: API ini akan terus dikembangkan. Untuk update terbaru, cek GitHub repository atau buka issue untuk request fitur baru.