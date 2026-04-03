# Gruppo CAVIRO - Economia Circolare & Sostenibilità

**Sito Istituzionale Corporate**  
**Versione**: 2.0 (Refactoring Brand Completo)  
**Data**: Novembre 2025  

---

## Descrizione Progetto

Sito web istituzionale del **Gruppo CAVIRO**, la più grande cooperativa vitivinicola italiana (35.000 viticoltori soci), leader nell'**economia circolare** applicata al settore vitivinicolo.

Il sito presenta:
- Storia e valori del Gruppo CAVIRO
- Risultati di sostenibilità e economia circolare
- Timeline storica dal 1963 ad oggi
- Bilanci di Sostenibilità scaricabili
- Form di contatto e informazioni

### Obiettivi del Sito

1. **Comunicare** l'impegno per la sostenibilità e l'economia circolare
2. **Trasparenza**: Bilanci di sostenibilità pubblici e scaricabili
3. **Educare** stakeholder su modello cooperativo e valorizzazione territorio
4. **Engagement**: Form contatti per partner, clienti, comunità

---

## Stack Tecnologico

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **CSS Framework**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Linguaggio**: JavaScript (ES6+)
- **Package Manager**: npm

### Dipendenze Principali

```json
{
  "vue": "^3.4.21",
  "tailwindcss": "^3.4.1",
  "vite": "^5.1.4",
  "@vitejs/plugin-vue": "^5.0.4"
}
```

---

##  Installazione e Utilizzo

### Prerequisiti

- **Node.js**: v18+ (consigliato v20 LTS)
- **npm**: v9+

### Installazione

```bash
# Clone repository
git clone https://github.com/gruppo-caviro/sostenibilita-website.git
cd sostenibilita-website

# Installa dipendenze
npm install
```

### Comandi Disponibili

```bash
#  Server di sviluppo (con hot-reload)
npm run dev
# Apri browser su http://localhost:5000

#  Build per produzione
npm run build
# Output in cartella dist/

#  Preview build produzione
npm run preview
```

### Struttura Directory

```
project-work-sostenibilita/
├── public/              # Assets statici (logo, PDF, immagini)
│   ├── assets/
│   │   └── logo.svg
│   └── reports/         # (da creare) PDF bilanci sostenibilità
├── src/
│   ├── components/      # Componenti Vue
│   │   ├── Header.vue
│   │   ├── HeroSection.vue
│   │   ├── IntroSection.vue
│   │   ├── StatisticsSection.vue
│   │   ├── TimelineSection.vue
│   │   ├── ReportSection.vue
│   │   ├── ContactSection.vue
│   │   └── Footer.vue
│   ├── App.vue          # Componente root
│   ├── main.js          # Entry point
│   └── style.css        # Stili globali + Tailwind
├── index.html           # HTML principale
├── tailwind.config.js   # Config Tailwind (colori brand, font)
├── vite.config.js       # Config Vite
├── package.json
├── CHANGELOG.md         # Changelog completo refactoring
├── BRAND_GUIDELINES.md  # Linee guida brand CAVIRO
└── README.md            # Questo file
```

---

##  Brand Identity

### Palette Colori

Il sito utilizza i colori ufficiali del brand CAVIRO (Pantone):

| Nome | HEX | Pantone | Uso |
|------|-----|---------|-----|
| **Primary** (Bordeaux) | `#8B1538` | P 209C | CTA, titoli, hover |
| **Secondary** (Grigio Antracite) | `#2B2B2B` | P 7645C | Titoli, header, footer |
| **Accent** (Bordeaux Chiaro) | `#AB4660` | P 209C 65% | Highlight, gradienti |
| **Light** (Rosa Tenue) | `#D9A8B5` | P 209C 30% | Sfondi, decorazioni |
| **Text Secondary** | `#666666` | Nero 40% | Testi secondari |

### Tipografia

- **Titoli (H1-H6)**: [Merriweather](https://fonts.google.com/specimen/Merriweather) (serif, elegante)
- **Corpo testo**: [Lato](https://fonts.google.com/specimen/Lato) (sans-serif, leggibile)

Font caricati da Google Fonts con preconnect per performance ottimale.

---

##  Componenti Principali

### 1. Header
- Logo CAVIRO
- Menu navigazione (responsive: hamburger mobile)
- Sticky scroll con cambio colore

### 2. Hero Section
- Titolo principale "Gruppo CAVIRO - Economia Circolare & Sostenibilità"
- CTA primari: "Scarica Bilancio" + "Scopri di più"
- Statistiche rapide (100% Economia Circolare, 35k+ Viticoltori, 60+ Anni)

### 3. Intro Section (Chi Siamo)
- Storia Gruppo CAVIRO (dal 1963)
- Dati chiave (35.000 soci, 13 regioni, 36.000 ettari)
- Valori: Economia Circolare, Cooperazione, Innovazione

### 4. Statistics Section
- 4 statistiche principali con progress bars
- Impatto ambientale (CO₂ evitate, bioetanolo, energia)
- Certificazioni (ISO 14001, ISO 9001, Equalitas, Carbon Footprint)

### 5. Timeline Section
- Percorso storico 1963-2024
- Layout alternato desktop, verticale mobile
- Eventi chiave con achievements

### 6. Report Section
- Card download Bilanci di Sostenibilità (2021, 2022, 2023)
- Pulsanti download PDF (path: `/public/reports/`)
- Info pagine e dimensione file

### 7. Contact Section
- Form contatto (nome, email, azienda, messaggio)
- Informazioni sede: Via Convertite 12, Faenza (RA)
- Tel: +39 0546 642111
- Email: info@gruppocaviro.com

### 8. Footer
- 4 colonne: Info, Navigazione, Valori, Contatti
- Social links (Facebook, Instagram, LinkedIn, YouTube)
- Copyright e link legali (Privacy, Cookie, Termini)

---

##  Responsive Design

Il sito è **mobile-first** con breakpoints Tailwind:

- **Mobile**: `< 768px` (default)
- **Tablet**: `md:` (`≥ 768px`)
- **Desktop**: `lg:` (`≥ 1024px`)
- **Large Desktop**: `xl:` (`≥ 1280px`)

### Test Consigliati

- iPhone SE (375px)
- iPhone 12/13 Pro (390px)
- iPad (768px)
- Desktop HD (1920px)

---

##  Accessibilità (A11Y)

-  HTML semantico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
-  ARIA labels su elementi interattivi
-  Contrasto colori WCAG AA compliant
-  Focus states visibili (ring-primary)
-  Smooth scroll per anchor links
-  Form labels associati correttamente
-  Alt text su immagini (da completare con immagini reali)

---

##  SEO

### Meta Tags Implementati

```html
<meta name="description" content="Gruppo CAVIRO - Leader nell'economia circolare...">
<meta name="keywords" content="CAVIRO, sostenibilità, economia circolare, vino...">
<!-- Open Graph -->
<meta property="og:title" content="Gruppo CAVIRO - Economia Circolare & Sostenibilità">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

### Raccomandazioni Future

- [ ] Generare `sitemap.xml`
- [ ] Configurare `robots.txt`
- [ ] Implementare structured data (JSON-LD)
- [ ] Ottimizzare immagini (WebP, lazy loading)
- [ ] Configurare Google Analytics / Matomo

---

##  Deploy

### Build Produzione

```bash
npm run build
```

Output in `dist/` pronto per deploy su:

- **Netlify**: Drop `dist/` folder o `netlify deploy`
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push `dist/` su branch `gh-pages`
- **Server tradizionale**: Upload `dist/` via FTP/SFTP

### Variabili d'Ambiente (Future)

Se necessario, creare `.env` per:
```env
VITE_API_ENDPOINT=https://api.gruppocaviro.com
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

---

##  Asset da Aggiungere

### Immagini Mancanti

Per completare il sito, aggiungere in `/public/assets/`:

1. **Logo CAVIRO ufficiale**: `logo-caviro.svg` (sostituire placeholder "C")
2. **Hero background**: `hero-vigneto.jpg` (vigneto/cantina, 1920x1080)
3. **Intro section**: `cooperativa-faenza.jpg` (sede o viticoltori)
4. **Favicon**: `favicon.ico` e `favicon-32x32.png`

### PDF Report

Caricare in `/public/reports/`:
- `caviro-bilancio-sostenibilita-2023.pdf`
- `caviro-bilancio-sostenibilita-2022.pdf`
- `caviro-bilancio-sostenibilita-2021.pdf`

---

##  Testing

### Test Manuali

- [ ] Navigazione menu funziona (anchor scroll smooth)
- [ ] Form contatti invia dati (verificare console log)
- [ ] Download PDF report (verificare path)
- [ ] Responsive su mobile/tablet/desktop
- [ ] Hover states su card e pulsanti
- [ ] Animazioni fluide (no jank)

### Performance

Obiettivo **Lighthouse score** (da verificare post-deploy):
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

##  Documentazione Aggiuntiva

- **CHANGELOG.md**: Changelog completo del refactoring brand
- **BRAND_GUIDELINES.md**: Linee guida dettagliate colori, font, componenti
- **Tailwind Config**: `tailwind.config.js` (colori custom, font)

---

##  Contribuire

### Setup Sviluppo

```bash
# Fork + clone repo
git clone https://github.com/tuo-username/sostenibilita-website.git

# Crea branch feature
git checkout -b feature/nome-feature

# Sviluppa seguendo brand guidelines (vedi BRAND_GUIDELINES.md)

# Test locale
npm run dev

# Commit con messaggi descrittivi
git commit -m "feat: aggiunta sezione prodotti sostenibili"

# Push e crea Pull Request
git push origin feature/nome-feature
```

### Convenzioni Commit

Seguiamo [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nuova funzionalità
fix: correzione bug
docs: modifiche documentazione
style: formattazione codice (no cambio logica)
refactor: refactoring codice
test: aggiunta test
chore: task manutenzione (build, config)
```

---

##  Supporto e Contatti

### Team Tecnico

- **Email**: sviluppo@gruppocaviro.com
- **Issue Tracker**: GitHub Issues

### Gruppo CAVIRO

- **Sito ufficiale**: [www.gruppocaviro.com](https://www.gruppocaviro.com)
- **Email**: info@gruppocaviro.com
- **Tel**: +39 0546 642111
- **Sede**: Via Convertite 12, 48018 Faenza (RA), Italia

---

##  Licenza

© 2025 Gruppo CAVIRO. Tutti i diritti riservati.  
P.IVA 01025950397

**Uso del codice**: Proprietario. Non redistribuire senza autorizzazione.  
**Uso contenuti**: I contenuti (testi, immagini, loghi) sono di proprietà esclusiva del Gruppo CAVIRO.

---

##  Credits

- **Design & Development**: Team CAVIRO Digital
- **Brand Manual**: Ufficio Marketing CAVIRO
- **Framework**: Vue.js, Vite, Tailwind CSS
- **Font**: Google Fonts (Merriweather, Lato)

---

##  Changelog

### v2.0 (Novembre 2025) - Refactoring Brand Completo

 Applicati colori brand Pantone P 7645C e P 209C  
 Integrati font Merriweather e Lato  
 Contenuti autentici Gruppo CAVIRO  
 Timeline storica 1963-2024  
 Statistiche reali sostenibilità  
 Responsive design ottimizzato  
 Accessibilità WCAG AA  
 SEO meta tags completi  

Vedi [CHANGELOG.md](./CHANGELOG.md) per dettagli completi.

---

** Costruiamo insieme un futuro sostenibile attraverso l'economia circolare **

*Gruppo CAVIRO - Dal 1963 con passione*
