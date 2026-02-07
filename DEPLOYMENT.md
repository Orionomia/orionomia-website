# 🚀 Instrukcja wdrożenia na Cloudflare Pages

## Metoda 1: Automatyczne wdrożenie przez GitHub (ZALECANE)

### Krok 1: Przygotowanie repozytorium GitHub

1. Utwórz nowe repozytorium na GitHub
2. Zacommituj projekt:

```bash
git init
git add .
git commit -m "Initial commit - Orionomia website"
git branch -M main
git remote add origin https://github.com/TWOJA_NAZWA/orionomia.git
git push -u origin main
```

### Krok 2: Połączenie z Cloudflare Pages

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do sekcji **Workers & Pages**
3. Kliknij **Create application** → **Pages** → **Connect to Git**
4. Autoryzuj GitHub i wybierz repozytorium `orionomia`

### Krok 3: Konfiguracja buildu

Ustaw następujące parametry:

- **Project name**: `orionomia`
- **Production branch**: `main`
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`

#### Environment variables:
- **NODE_VERSION**: `18` lub `20`

### Krok 4: Deploy

1. Kliknij **Save and Deploy**
2. Cloudflare automatycznie zbuduje i wdroży stronę
3. Po zakończeniu otrzymasz URL: `https://orionomia.pages.dev`

### Krok 5: Konfiguracja domeny własnej

1. W Cloudflare Pages przejdź do **Custom domains**
2. Kliknij **Set up a custom domain**
3. Wprowadź: `orionomia.pl`
4. Cloudflare automatycznie skonfiguruje DNS
5. Potwierdź konfigurację

**Rekordy DNS (jeśli konfigurujesz ręcznie):**
```
Type: CNAME
Name: @
Content: orionomia.pages.dev
Proxy: Enabled (pomarańczowa chmurka)
```

---

## Metoda 2: Ręczne wdrożenie przez Wrangler CLI

### Instalacja Wrangler

```bash
npm install -g wrangler
```

### Logowanie do Cloudflare

```bash
wrangler login
```

### Build i deployment

```bash
# Build projektu
npm run build

# Deploy na Cloudflare Pages
npx wrangler pages deploy dist --project-name=orionomia
```

---

## Metoda 3: Bezpośrednie przesłanie plików

### Krok 1: Build lokalny

```bash
npm run build
```

### Krok 2: Ręczne przesłanie

1. Przejdź do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. Przeciągnij folder `dist/` lub wybierz pliki
4. Kliknij **Deploy site**

---

## 🔄 Automatyczne aktualizacje

Po skonfigurowaniu przez GitHub:

1. Wprowadź zmiany w kodzie
2. Commit i push:
```bash
git add .
git commit -m "Update content"
git push
```
3. Cloudflare automatycznie przebuduje i wdroży stronę

---

## ⚙️ Zaawansowana konfiguracja

### Przekierowania i nagłówki

Wszystkie przekierowania i nagłówki HTTP są skonfigurowane w pliku `wrangler.toml`:

```toml
[[redirects]]
from = "/index.php"
to = "/"
status = 301

[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "SAMEORIGIN"
X-Content-Type-Options = "nosniff"
```

### Konfiguracja cache

Pliki statyczne (SVG, CSS, JS) są automatycznie cache'owane na 1 rok:

```toml
[[headers]]
for = "/*.svg"
[headers.values]
Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🌐 Konfiguracja DNS dla orionomia.pl

### Jeśli domena jest w Cloudflare:

1. DNS zostanie automatycznie skonfigurowany podczas dodawania custom domain
2. Upewnij się, że proxy (🟠) jest włączone

### Jeśli domena jest u innego rejestratora:

Dodaj następujące rekordy DNS:

```
Type: CNAME
Name: @
Content: orionomia.pages.dev
TTL: Auto

Type: CNAME
Name: www
Content: orionomia.pages.dev
TTL: Auto
```

Następnie zmień nameservery domeny na Cloudflare:
```
dns1.cloudflare.com
dns2.cloudflare.com
```

---

## 📊 Monitoring i statystyki

Po wdrożeniu możesz monitorować:

1. **Analytics**: Traffic, requests, bandwidth
2. **Deployment history**: Wszystkie wdrożenia
3. **Preview deployments**: Dla pull requestów
4. **Error logs**: W razie problemów

Dostępne w: `Cloudflare Dashboard → Workers & Pages → orionomia`

---

## 🔒 SSL/TLS

Cloudflare automatycznie:
- Generuje certyfikat SSL
- Wymusza HTTPS
- Włącza HTTP/2 i HTTP/3

Konfiguracja SSL: `SSL/TLS → Overview → Full (strict)`

---

## ✅ Checklist przed publikacją

- [ ] Zweryfikowano działanie na localhost (`npm run dev`)
- [ ] Wykonano build produkcyjny (`npm run build`)
- [ ] Sprawdzono responsive design (mobile, tablet, desktop)
- [ ] Zweryfikowano wszystkie linki
- [ ] Zaktualizowano meta tagi SEO
- [ ] Dodano favicon.ico
- [ ] Skonfigurowano robots.txt
- [ ] Ustawiono custom domain
- [ ] Włączono SSL
- [ ] Przetestowano wydajność (PageSpeed Insights)

---

## 🆘 Rozwiązywanie problemów

### Problem: Build fails na Cloudflare

**Rozwiązanie:**
```bash
# Sprawdź lokalnie
npm run build

# Jeśli działa lokalnie, sprawdź Node.js version w Cloudflare:
# Environment variables → NODE_VERSION → 18
```

### Problem: Strona nie ładuje się

**Rozwiązanie:**
1. Sprawdź deployment logs w Cloudflare
2. Zweryfikuj build output directory: `dist`
3. Sprawdź czy wszystkie pliki są w `dist/`

### Problem: Custom domain nie działa

**Rozwiązanie:**
1. Sprawdź DNS propagation: https://dnschecker.org
2. Poczekaj 24-48h na propagację DNS
3. Upewnij się, że nameservery są ustawione na Cloudflare

---

## 📞 Support

W razie problemów:
- Cloudflare Discord: https://discord.cloudflare.com
- Cloudflare Community: https://community.cloudflare.com
- Astro Discord: https://astro.build/chat

---

**Powodzenia z wdrożeniem! 🚀**
