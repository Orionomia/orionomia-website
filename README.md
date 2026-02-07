# Orionomia - Strona internetowa

Strona internetowa Orionomii zbudowana w **Astro** dla platformy **Cloudflare Pages**.

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js 18+ lub nowszy
- npm lub pnpm

### Instalacja zależności

```bash
npm install
```

### Uruchomienie lokalnego serwera deweloperskiego

```bash
npm run dev
```

Strona będzie dostępna pod adresem: `http://localhost:4321`

### Build dla produkcji

```bash
npm run build
```

Pliki produkcyjne zostaną wygenerowane w folderze `dist/`

### Podgląd buildu produkcyjnego

```bash
npm run preview
```

## 📁 Struktura projektu

```
/
├── public/
│   ├── logo.svg
│   ├── logo_orionomia.svg
│   ├── hero-illustration.svg
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Card.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

## 🌐 Wdrożenie na Cloudflare Pages

### Automatyczne wdrożenie przez GitHub

1. Połącz repozytorium GitHub z Cloudflare Pages
2. Ustaw konfigurację:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18 lub nowszy

### Ręczne wdrożenie

```bash
# Build projektu
npm run build

# Wgraj zawartość folderu dist/ do Cloudflare Pages
```

## 🎨 Technologie

- **Astro** - framework do budowy statycznych stron
- **TypeScript** - typowanie
- **CSS** - stylizacja (inline w Layout.astro)
- **Cloudflare Pages** - hosting

## 📝 Funkcjonalności

- ✅ Responsywny design (desktop, tablet, mobile)
- ✅ Menu mobilne z animacją
- ✅ SEO-friendly (meta tags, Open Graph, Twitter Cards)
- ✅ Dostępność (ARIA labels, keyboard navigation)
- ✅ Optymalizacja wydajności
- ✅ Animowane grafiki SVG
- ✅ robots.txt

## 🔧 Customizacja

### Zmiana treści
Edytuj plik `src/pages/index.astro`

### Zmiana stylów
Edytuj sekcję `<style is:global>` w `src/layouts/Layout.astro`

### Zmiana komponentów
Edytuj pliki w folderze `src/components/`

## 📞 Kontakt

**Orionomia**
- Email: orionomia@gmail.com
- Website: https://orionomia.pl

---

**Digital infrastructure for scholarly publishing**
