# 🤝 Panduan Kontribusi CodeCrafters

Terima kasih atas minat Anda untuk berkontribusi pada proyek CodeCrafters! Panduan ini akan membantu Anda memulai dan memastikan kontribusi Anda sesuai dengan standar proyek.

## 📋 Daftar Isi
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Issue Reporting](#issue-reporting)
- [Community](#community)

## 🎯 Code of Conduct

### Our Pledge
Kami berkomitmen untuk menciptakan lingkungan yang ramah dan inklusif untuk semua kontributor, terlepas dari latar belakang, pengalaman, atau identitas.

### Our Standards
- Gunakan bahasa yang ramah dan inklusif
- Hormati berbagai sudut pandang dan pengalaman
- Terima konstruktif kritik dengan sopan
- Fokus pada apa yang terbaik untuk komunitas
- Tunjukkan empati terhadap anggota komunitas lainnya

## 🚀 Getting Started

### Prerequisites
Sebelum memulai, pastikan Anda memiliki:
- Node.js v18.0.0 atau lebih baru
- Git terinstall
- Code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, dan Next.js

### Fork dan Clone Repository
```bash
# 1. Fork repository di GitHub
# Klik tombol "Fork" di https://github.com/HadiOnZero/CodeCraftersNewVersion

# 2. Clone fork Anda
git clone https://github.com/YOUR_USERNAME/CodeCraftersNewVersion.git
cd CodeCraftersNewVersion

# 3. Tambahkan upstream remote
git remote add upstream https://github.com/HadiOnZero/CodeCraftersNewVersion.git

# 4. Verifikasi remote
git remote -v
```

### Setup Development Environment
```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Server akan berjalan di http://localhost:3000
```

## 🔄 Development Workflow

### 1. Sync dengan Main Branch
```bash
# Pastikan Anda di main branch
git checkout main

# Pull latest changes dari upstream
git pull upstream main

# Push ke fork Anda
git push origin main
```

### 2. Buat Feature Branch
```bash
# Buat branch baru untuk fitur Anda
git checkout -b feature/nama-fitur-anda

# Atau untuk bug fixes
git checkout -b fix/nama-bug
```

### Branch Naming Convention
- `feature/nama-fitur` - Untuk fitur baru
- `fix/nama-bug` - Untuk bug fixes
- `docs/nama-dokumentasi` - Untuk dokumentasi
- `refactor/nama-refactor` - Untuk refactoring
- `test/nama-test` - Untuk testing

### 3. Development Guidelines

#### Commit Messages
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

**Contoh:**
```
feat(components): add loading spinner component

- Implement loading spinner with customizable colors
- Add accessibility features
- Include unit tests

Closes #123
```

#### Code Style
```typescript
// ✅ Good
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
};

// ❌ Bad
const handleClick = (e) => {
    setIsLoading(true)
}
```

## 📋 Pull Request Process

### Before Submitting PR
1. **Test Your Changes**
```bash
# Jalankan tests
npm test

# Cek TypeScript errors
npm run type-check

# Cek linting
npm run lint

# Build untuk production
npm run build
```

2. **Update Documentation**
- Update README.md jika diperlukan
- Tambahkan komentar untuk complex logic
- Update CHANGELOG.md untuk perubahan signifikan

3. **Screenshots/Videos**
Untuk perubahan UI, sertakan:
- Screenshots sebelum dan sesudah
- Video demo untuk animasi komplex
- Mobile dan desktop views

### PR Template
```markdown
## Description
Deskripsi singkat tentang perubahan Anda.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Screenshots
[Add screenshots here]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

### PR Review Process
1. **Auto Checks**: GitHub Actions akan menjalankan automated tests
2. **Code Review**: Maintainer akan review code Anda
3. **Feedback**: Address feedback dari reviewer
4. **Merge**: PR akan di-merge setelah approved

## 🎨 Coding Standards

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

### File Organization
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   └── index.ts
├── hooks/
│   ├── useAuth.ts
│   └── index.ts
├── utils/
│   ├── helpers.ts
│   └── constants.ts
```

## 🧪 Testing Guidelines

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

### Integration Testing
```typescript
// ✅ Test user flows
describe('Authentication Flow', () => {
    it('should login user successfully', async () => {
        render(<App />);
        
        // Navigate to login
        fireEvent.click(screen.getByText('Login'));
        
        // Fill form
        fireEvent.change(screen.getByLabelText('Email'), {
            target: { value: 'user@example.com' }
        });
        
        // Submit
        fireEvent.click(screen.getByText('Submit'));
        
        // Verify
        await waitFor(() => {
            expect(screen.getByText('Welcome')).toBeInTheDocument();
        });
    });
});
```

### Testing Best Practices
1. **Test Behavior, Not Implementation**: Test what component does, not how
2. **Use Testing Library**: Prefer `@testing-library/react` over Enzyme
3. **Mock External Dependencies**: Mock API calls dan external services
4. **Test Edge Cases**: Test error states dan boundary conditions
5. **Coverage**: Aim untuk >80% code coverage

## 📚 Documentation

### Code Documentation
```typescript
/**
 * AnimatedSection component provides scroll-based animations
 * @param {AnimatedSectionProps} props - Component props
 * @param {ReactNode} props.children - Content to be animated
 * @param {string} props.animation - Animation type (fade-up, fade-left, etc.)
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.duration - Animation duration in milliseconds
 * @returns {JSX.Element} Animated section component
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
}) => {
    // Implementation
};
```

### README Updates
Saat menambah fitur baru, update README.md dengan:
- Deskripsi fitur
- Cara penggunaan
- Screenshots jika diperlukan
- Breaking changes jika ada

### API Documentation
Untuk API endpoints atau utility functions:
```typescript
/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid, false otherwise
 * @example
 * isValidEmail('user@example.com') // returns true
 * isValidEmail('invalid-email') // returns false
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
```

## 🐛 Issue Reporting

### Bug Reports
Gunakan template berikut untuk bug reports:

```markdown
**Bug Description**
Deskripsi jelas tentang bug yang Anda temukan.

**Steps to Reproduce**
1. Step pertama
2. Step kedua
3. Step ketiga

**Expected Behavior**
Apa yang seharusnya terjadi.

**Actual Behavior**
Apa yang sebenarnya terjadi.

**Screenshots**
Jika berlaku, tambahkan screenshots.

**Environment**
- OS: [e.g., Windows 10, macOS 12]
- Browser: [e.g., Chrome 96, Firefox 95]
- Version: [e.g., 1.2.3]

**Additional Context**
Informasi tambahan yang relevan.
```

### Feature Requests
```markdown
**Feature Description**
Deskripsi jelas tentang fitur yang Anda inginkan.

**Use Case**
Kapan dan bagaimana fitur ini akan digunakan?

**Proposed Solution**
Solusi yang Anda usulkan.

**Alternatives**
Alternatif yang Anda pertimbangkan.

**Additional Context**
Screenshots, references, atau informasi tambahan.
```

## 👥 Community

### Communication Channels
- **GitHub Issues**: Untuk bugs dan feature requests
- **GitHub Discussions**: Untuk diskusi umum dan Q&A
- **Email**: hadsxdev@gmail.com untuk pertanyaan pribadi

### Code Review Guidelines
Saat mereview PR dari kontributor lain:

#### What to Look For
- **Functionality**: Apakah code berfungsi seperti yang diharapkan?
- **Code Quality**: Apakah code clean dan maintainable?
- **Performance**: Apakah ada potensi performance issues?
- **Security**: Apakah ada security vulnerabilities?
- **Accessibility**: Apakah accessible untuk semua users?
- **Testing**: Apakah ada adequate test coverage?

#### Review Comments
```markdown
✅ **Great implementation!** The animation looks smooth.

🔧 **Suggestion**: Consider using `useMemo` untuk optimize performance.

❌ **Issue**: This will break on mobile devices. Please test responsive design.

📚 **Documentation**: Please add JSDoc comments untuk function ini.
```

### Recognition
Kontributor akan diakui di:
- README.md file
- GitHub contributors page
- Release notes untuk significant contributions

## 🏆 Recognition Levels

### First-time Contributors
- Welcome message dan guidance
- Detailed code review dengan penjelasan
- Help dengan setup dan workflow

### Regular Contributors
- Direct merge access untuk minor changes
- Invited sebagai collaborator
- Input pada roadmap dan planning

### Core Contributors
- Admin access ke repository
- Decision-making power
- Representasi di documentation

## 📈 Project Roadmap

### Current Focus
- [ ] Performance optimization
- [ ] Mobile experience improvement
- [ ] Accessibility enhancements
- [ ] Testing coverage increase

### Future Plans
- [ ] Multi-language support
- [ ] Advanced animation features
- [ ] Plugin system
- [ ] Mobile app version

## 🎉 Getting Help

### Stuck dengan sesuatu?
1. Cek documentation di [`docs/`](docs/) folder
2. Cek existing issues di GitHub
3. Tanya di GitHub Discussions
4. Email ke hadsxdev@gmail.com

### Quick Questions?
- Gunakan GitHub Discussions untuk quick questions
- Tag dengan `question` label
- Response time: usually within 24 hours

---

**Terima kasih telah berkontribusi!** 🚀

Setiap kontribusi, tidak peduli seberapa kecil, sangat berarti bagi kami. Kami berharap Anda menikmati berkontribusi pada CodeCrafters sebanyak kami menikmati membangunnya!

**Happy coding!** 💻✨