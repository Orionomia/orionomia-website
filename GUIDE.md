# 📘 Przewodnik po projekcie Orionomia

## 🎯 Opis projektu

Kompletna strona internetowa **Orionomia** zbudowana w **Astro**, gotowa do wdrożenia na **Cloudflare Pages**. Projekt zawiera pełną treść, responsywny design, optymalizację SEO oraz wszystkie grafiki SVG.

---

## 📦 Zawartość projektu

### Główne pliki konfiguracyjne

```
orionomia-astro/
├── astro.config.mjs       # Konfiguracja Astro
├── package.json           # Zależności projektu
├── tsconfig.json          # Konfiguracja TypeScript
├── wrangler.toml          # Konfiguracja Cloudflare Pages
├── .gitignore             # Ignorowane pliki Git
├── README.md              # Dokumentacja projektu
└── DEPLOYMENT.md          # Instrukcje wdrożenia
```

### Struktura źródłowa (src/)

```
src/
├── layouts/
│   └── Layout.astro       # Główny layout z meta tagami i stylami
│
├── components/
│   ├── Navigation.astro   # Menu nawigacyjne
│   ├── Hero.astro         # Sekcja hero z CTA
│   ├── Card.astro         # Karty ORIONUM (CORE, ENGINE, SIGNAL)
│   └── Footer.astro       # Stopka strony
│
└── pages/
    └── index.astro        # Strona główna
```

### Pliki publiczne (public/)

```
public/
├── logo.svg               # Logo kwadratowe (340x340px)
├── logo_orionomia.svg     # Logo pełne z nazwą (4075x827px)
├── hero-illustration.svg  # Animowana grafika hero
├── robots.txt             # Konfiguracja robotów
└── favicon.ico            # Ikona strony (do uzupełnienia)
```

---

## 🚀 Szybki start

### 1. Instalacja

```bash
cd orionomia-astro
npm install
```

### 2. Uruchomienie lokalnie

```bash
npm run dev
```

Strona dostępna na: http://localhost:4321

### 3. Build produkcyjny

```bash
npm run build
```

Pliki trafiają do folderu `dist/`

### 4. Podgląd buildu

```bash
npm run preview
```

---

## 🎨 Customizacja

### Zmiana treści

**Plik:** `src/pages/index.astro`

```astro
<Card 
  symbol="◆"
  category="INFRASTRUKTURA"
  title="ORIONUM::CORE"
  subtitle="Bezpieczne archiwum"
  description="Twój opis..."
  buttonText="Sprawdź CORE"
  buttonLink="/infrastruktura"
/>
```

### Zmiana stylów

**Plik:** `src/layouts/Layout.astro`

Sekcja `<style is:global>` zawiera wszystkie style CSS. Kluczowe zmienne:

```css
/* Kolory */
#0A192F  /* Granatowy (tło, tekst) */
#66D9D9  /* Turkusowy (akcenty) */
#F5F5F0  /* Kremowy (tło strony) */

/* Czcionki */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Zmiana meta tagów SEO

**Plik:** `src/layouts/Layout.astro`

```astro
<Layout 
  title="Twój tytuł" 
  description="Twój opis"
  keywords="Twoje słowa kluczowe"
>
```

### Dodanie nowej strony

1. Utwórz plik w `src/pages/`, np. `o-nas.astro`
2. Użyj layoutu:

```astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="O nas - Orionomia">
  <Navigation />
  <main class="container">
    <h1>O nas</h1>
    <!-- Treść -->
  </main>
  <Footer />
</Layout>
```

3. Zaktualizuj linki w `Navigation.astro`

---

## 🎯 Główne funkcjonalności

### ✅ Responsywność

- **Desktop**: Pełny layout z sticky cards
- **Tablet (≤900px)**: Zredukowana opacity grafiki hero
- **Mobile (≤768px)**: Menu hamburger, full-screen overlay, karty jeden pod drugim

### ✅ Nawigacja mobilna

- Hamburger menu (≡)
- Full-screen overlay z animacją slide-in
- Automatyczne zamykanie po kliknięciu linku
- Blokada scrollowania body gdy menu otwarte

### ✅ SEO

- Canonical URLs
- Open Graph tags
- Twitter Cards
- Structured data ready
- robots.txt z sitemap
- Semantic HTML5

### ✅ Accessibility

- ARIA labels
- Keyboard navigation
- Focus-visible states
- Alt texts na obrazach
- Semantic landmarks (nav, main, footer)

### ✅ Performance

- Static site generation
- Optimized SVG
- Inlined critical CSS
- No JavaScript overhead (tylko toggle menu)
- CDN delivery (Cloudflare)

---

## 🔧 Struktura komponentów

### Navigation.astro
- Sticky navigation bar
- Logo link (powrót do home)
- 6 linków menu: O NAS, ORIONUM, INFRASTRUKTURA, PLATFORMA, INTEGRACJA, KONTAKT
- Hamburger toggle dla mobile

### Hero.astro
- H1 z tytułem ORIONUM
- Mission statement
- Badges ze standardami (OJS 3.4+, JATS XML, DOI/Crossref, etc.)
- CTA button "Poznaj ORIONUM"
- Animowana grafika SVG w tle

### Card.astro (wielokrotnego użytku)
- Symbol (◆, ◆◆, ◆◆◆)
- Kategoria (INFRASTRUKTURA, PLATFORMA, INTEGRACJA)
- Tytuł (ORIONUM::CORE, ENGINE, SIGNAL)
- Podtytuł i opis
- CTA button

### Footer.astro
- Logo małe
- Copyright z dynamicznym rokiem
- Tagline
- Email link
- Cookies info

---

## 📊 SEO Checklist

- [x] Meta description
- [x] Meta keywords
- [x] Title tags
- [x] Canonical URLs
- [x] Open Graph
- [x] Twitter Cards
- [x] robots.txt
- [x] Sitemap (auto-generowana przez Astro)
- [x] Semantic HTML
- [x] Alt texts
- [x] HTTPS (przez Cloudflare)
- [x] Mobile-friendly
- [x] Fast load times

---

## 🌐 Wdrożenie

### Opcja 1: GitHub + Cloudflare Pages (ZALECANE)

1. Push do GitHub
2. Connect w Cloudflare Pages
3. Auto-deploy przy każdym push

**Szczegóły w:** `DEPLOYMENT.md`

### Opcja 2: Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name=orionomia
```

### Opcja 3: Ręczne przesłanie

Build lokalnie, upload folder `dist/` przez dashboard

---

## 📁 Ważne ścieżki

```
/ (index)           → Strona główna
/logo.svg           → Logo kwadratowe
/logo_orionomia.svg → Logo z nazwą
/hero-illustration.svg → Grafika hero
/robots.txt         → SEO config
/sitemap-index.xml  → Auto-generowana
```

---

## 🔄 Workflow

1. **Rozwój lokalny**: `npm run dev`
2. **Wprowadzanie zmian**: Edycja plików .astro
3. **Testowanie**: Sprawdzenie w przeglądarce
4. **Build**: `npm run build`
5. **Preview**: `npm run preview`
6. **Commit**: `git add . && git commit -m "Message"`
7. **Deploy**: `git push` (auto-deploy) lub `wrangler pages deploy`

---

## ⚙️ Konfiguracja zaawansowana

### Dodanie Google Analytics

W `src/layouts/Layout.astro` dodaj przed `</head>`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Dodanie formularza kontaktowego

Zalecane: Formspree, Netlify Forms, lub Web3Forms

```astro
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" placeholder="Email">
  <textarea name="message" placeholder="Wiadomość"></textarea>
  <button type="submit">Wyślij</button>
</form>
```

### Integracja z CMS

Astro wspiera:
- Markdown/MDX (lokalnie)
- Contentful
- Sanity
- Strapi
- WordPress (headless)

---

## 🐛 Debugging

### Problem: Strona nie ładuje się lokalnie

```bash
# Sprawdź port
lsof -i :4321

# Restart dev server
npm run dev -- --port 3000
```

### Problem: Style nie działają

- Upewnij się że `<style is:global>` jest w Layout.astro
- Sprawdź czy Layout jest importowany w pages

### Problem: Komponenty nie renderują się

- Sprawdź importy w `index.astro`
- Zweryfikuj props w komponentach

---

## 📝 TODO dla przyszłych wersji

- [ ] Dodać strony: O NAS, INFRASTRUKTURA, PLATFORMA, INTEGRACJA, KONTAKT
- [ ] Zaimplementować formularz kontaktowy
- [ ] Dodać blog/aktualności
- [ ] Integracja z Google Analytics
- [ ] Dodać animacje scroll (AOS, Intersection Observer)
- [ ] Optymalizacja obrazów (webp, responsive images)
- [ ] Dark mode toggle
- [ ] Wielojęzyczność (i18n)
- [ ] Sitemap XML z wszystkimi podstronami

---

## 📞 Support

**Email:** orionomia@gmail.com
**Website:** https://orionomia.pl

**Framework:** [Astro Docs](https://docs.astro.build)
**Hosting:** [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

---

## 📄 Licencja

Copyright © 2026 Orionomia
Digital infrastructure for scholarly publishing

---

**Projekt gotowy do wdrożenia! 🚀**
