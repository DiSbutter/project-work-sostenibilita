# 🎨 Linee Guida Brand - Gruppo CAVIRO

## Documento di Riferimento per Sviluppatori e Designer

**Versione**: 1.0  
**Data**: Novembre 2025  
**Progetto**: Sito Istituzionale Gruppo CAVIRO  

---

## 📖 Indice

1. [Introduzione](#introduzione)
2. [Palette Colori](#palette-colori)
3. [Tipografia](#tipografia)
4. [Componenti UI](#componenti-ui)
5. [Spaziature e Layout](#spaziature-e-layout)
6. [Iconografia](#iconografia)
7. [Animazioni](#animazioni)
8. [Esempi di Codice](#esempi-di-codice)

---

## 🎯 Introduzione

Il Gruppo CAVIRO è la più grande cooperativa vitivinicola italiana, leader nell'economia circolare. L'identità visiva del brand deve riflettere:

- **Tradizione**: 60 anni di storia (dal 1963)
- **Innovazione**: Pionieri dell'economia circolare
- **Eleganza**: Settore vitivinicolo premium
- **Sostenibilità**: Impegno concreto per l'ambiente

---

## 🎨 Palette Colori

### Colori Primari

#### Bordeaux (Primary)
- **HEX**: `#8B1538`
- **RGB**: `rgb(139, 21, 56)`
- **Pantone**: P 209C
- **Uso**: CTA principali, titoli importanti, hover effects
- **Classe Tailwind**: `bg-primary`, `text-primary`, `border-primary`

```html
<button class="bg-primary text-white">Pulsante Primario</button>
<h1 class="text-primary">Titolo Bordeaux</h1>
```

#### Grigio Antracite (Secondary)
- **HEX**: `#2B2B2B`
- **RGB**: `rgb(43, 43, 43)`
- **Pantone**: P 7645C
- **Uso**: Titoli, testi importanti, sfondi scuri
- **Classe Tailwind**: `bg-secondary`, `text-secondary`, `border-secondary`

```html
<header class="bg-secondary text-white">Header</header>
<h2 class="text-secondary">Titolo Grigio Antracite</h2>
```

### Colori Secondari

#### Accent (Bordeaux Chiaro)
- **HEX**: `#AB4660`
- **RGB**: `rgb(171, 70, 96)`
- **Variante**: P 209C al 65%
- **Uso**: Hover states, highlight, gradienti
- **Classe Tailwind**: `bg-accent`, `text-accent`, `hover:bg-accent`

#### Light (Rosa Tenue)
- **HEX**: `#D9A8B5`
- **RGB**: `rgb(217, 168, 181)`
- **Variante**: P 209C al 30%
- **Uso**: Sfondi chiari, card, decorazioni
- **Classe Tailwind**: `bg-light`, `border-light`

### Colori Neutri

#### Text Secondary (Grigio Testo)
- **HEX**: `#666666`
- **RGB**: `rgb(102, 102, 102)`
- **Variante**: Nero 40%
- **Uso**: Testi secondari, descrizioni
- **Classe Tailwind**: `text-text-secondary`

#### Scala Grigi Neutri
```css
neutral-50:  #F8F8F8  /* Sfondi chiarissimi */
neutral-100: #E8E8E8  /* Sfondi chiari */
neutral-200: #D1D1D1  /* Bordi */
neutral-300: #B4B4B4  /* Divisori */
neutral-400: #666666  /* Testo secondario */
neutral-500: #4A4A4A  /* Testo terziario */
neutral-600: #2B2B2B  /* Secondary */
neutral-700: #1A1A1A  /* Sfondi scuri */
neutral-800: #0D0D0D  /* Footer scuro */
neutral-900: #000000  /* Nero puro */
```

### Regole di Contrasto

**✅ Combinazioni approvate**:
- Testo primary (#8B1538) su sfondo bianco (#FFFFFF)
- Testo bianco (#FFFFFF) su sfondo primary (#8B1538)
- Testo secondary (#2B2B2B) su sfondo bianco (#FFFFFF)
- Testo bianco (#FFFFFF) su sfondo secondary (#2B2B2B)

**❌ Evitare**:
- Testo primary su sfondo light (basso contrasto)
- Testo accent su sfondo primary (scarsa leggibilità)

---

## 🔤 Tipografia

### Font Families

#### Merriweather (Titoli)
- **Tipo**: Serif
- **Uso**: H1, H2, H3, H4, H5, H6
- **Pesi disponibili**: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- **Classe Tailwind**: `font-heading`
- **Google Fonts**: `family=Merriweather:wght@300;400;700;900`

```html
<h1 class="font-heading font-bold text-5xl">
  Gruppo CAVIRO
</h1>
```

#### Lato (Corpo)
- **Tipo**: Sans-serif
- **Uso**: Paragrafi, liste, form, menu, footer
- **Pesi disponibili**: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- **Classe Tailwind**: `font-body`
- **Google Fonts**: `family=Lato:wght@300;400;700;900`

```html
<p class="font-body text-base">
  Testo corpo con Lato
</p>
```

### Gerarchia Tipografica

```html
<!-- Desktop -->
<h1 class="font-heading text-7xl font-bold">H1 - Hero Titles</h1>
<h2 class="font-heading text-5xl font-bold">H2 - Section Titles</h2>
<h3 class="font-heading text-3xl font-bold">H3 - Subsection Titles</h3>
<h4 class="font-heading text-2xl font-bold">H4 - Card Titles</h4>
<p class="font-body text-base">Corpo testo (16px)</p>
<p class="font-body text-sm">Testo piccolo (14px)</p>
<p class="font-body text-xs">Testo molto piccolo (12px)</p>

<!-- Mobile (con classi responsive) -->
<h1 class="font-heading text-4xl md:text-7xl font-bold">
  Responsive H1
</h1>
```

### Line Height

- **Titoli**: `leading-tight` (1.25)
- **Sottotitoli**: `leading-snug` (1.375)
- **Corpo**: `leading-relaxed` (1.625)
- **Descrizioni**: `leading-loose` (2)

```html
<h1 class="font-heading leading-tight">Titolo Compatto</h1>
<p class="font-body leading-relaxed">Paragrafo leggibile</p>
```

---

## 🧱 Componenti UI

### Pulsanti (Buttons)

#### Pulsante Primario
```html
<button class="
  bg-gradient-to-r from-primary to-accent 
  hover:from-accent hover:to-primary 
  text-white font-body font-bold 
  py-4 px-8 rounded-lg 
  transition-all duration-300 
  transform hover:scale-105 
  shadow-lg hover:shadow-xl
">
  Pulsante Primario
</button>
```

#### Pulsante Secondario (Outline)
```html
<button class="
  bg-transparent border-2 border-white 
  text-white font-body font-bold 
  py-4 px-8 rounded-lg 
  hover:bg-white hover:text-secondary 
  transition-all duration-300 
  transform hover:scale-105
">
  Pulsante Secondario
</button>
```

#### Pulsante Terziario (Link-style)
```html
<a href="#" class="
  text-primary font-body font-bold 
  hover:underline hover:text-accent 
  transition-colors duration-200
">
  Link Testuale
</a>
```

### Card

#### Card Standard
```html
<div class="
  bg-white rounded-2xl shadow-lg 
  p-8 border-2 border-light 
  hover:border-primary hover:shadow-2xl 
  transition-all duration-300 
  transform hover:-translate-y-2
">
  <h3 class="font-heading text-xl font-bold text-secondary mb-3">
    Titolo Card
  </h3>
  <p class="font-body text-text-secondary">
    Contenuto della card
  </p>
</div>
```

#### Card con Gradiente
```html
<div class="
  bg-gradient-to-br from-primary to-accent 
  rounded-2xl p-8 text-white shadow-2xl
">
  <h3 class="font-heading text-2xl font-bold mb-4">
    Titolo Bianco
  </h3>
  <p class="font-body text-neutral-50">
    Contenuto su gradiente
  </p>
</div>
```

### Form Inputs

```html
<div>
  <label class="
    block text-sm font-body font-bold 
    text-secondary mb-2
  ">
    Nome Campo *
  </label>
  <input 
    type="text" 
    class="
      w-full px-4 py-3 
      border-2 border-neutral-300 
      rounded-lg 
      focus:ring-2 focus:ring-primary 
      focus:border-primary 
      transition-all 
      hover:border-accent 
      font-body
    "
    placeholder="Inserisci valore"
  />
</div>
```

---

## 📏 Spaziature e Layout

### Container
```html
<div class="container mx-auto px-4 max-w-6xl">
  <!-- Contenuto centrato con max-width -->
</div>
```

### Sezioni (Sections)
```html
<section class="py-20 bg-white">
  <div class="container mx-auto px-4 max-w-6xl">
    <!-- Contenuto sezione -->
  </div>
</section>
```

### Grid Layouts

#### 3 Colonne Responsive
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div>Colonna 1</div>
  <div>Colonna 2</div>
  <div>Colonna 3</div>
</div>
```

#### 2 Colonne Side-by-Side
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>Contenuto Sinistra</div>
  <div>Contenuto Destra</div>
</div>
```

### Scala Spaziature Standard

- **Gap**: `gap-4` (1rem), `gap-6` (1.5rem), `gap-8` (2rem), `gap-12` (3rem)
- **Padding**: `p-4`, `p-6`, `p-8`, `py-20` (sezioni)
- **Margin**: `mb-4`, `mb-6`, `mb-8`, `mb-16` (tra elementi)

---

## 🎭 Iconografia

### Emoji vs SVG

**Emoji utilizzate** (temporanee, da sostituire con SVG):
- 🍇 Vigneto / Uva
- ♻️ Economia Circolare
- 🤝 Cooperazione
- 🔬 Innovazione
- 🏢 Sede / Azienda
- 📊 Report / Statistiche
- 📞 Telefono
- ✉️ Email
- 🌍 Sostenibilità / Globale

**Raccomandazione**: Sostituire con icon set SVG coerente (es. Heroicons, Feather Icons)

---

## 🎬 Animazioni

### Transizioni Standard

```css
/* Transizione rapida (200ms) */
.transition-colors { transition: color 0.2s ease; }

/* Transizione media (300ms) */
.transition-all { transition: all 0.3s ease; }

/* Transizione lenta (600ms) */
.transition-all duration-600 { transition: all 0.6s ease; }
```

### Animazioni Custom

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 1s ease-out;
}
```

#### Hover Scale
```html
<div class="transform hover:scale-105 transition-transform duration-300">
  Elemento scalabile
</div>
```

#### Hover Translate Up
```html
<div class="transform hover:-translate-y-2 transition-transform duration-300">
  Elemento che si solleva
</div>
```

---

## 💻 Esempi di Codice

### Titolo Sezione Standard
```html
<div class="text-center mb-16">
  <h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
    Titolo della Sezione
  </h2>
  <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
  <p class="text-xl text-text-secondary max-w-2xl mx-auto font-body">
    Sottotitolo o descrizione breve
  </p>
</div>
```

### Card Statistica
```html
<div class="
  bg-white rounded-2xl p-8 
  shadow-lg hover:shadow-2xl 
  transition-all duration-300 
  transform hover:-translate-y-2 
  border-l-4 border-primary
">
  <div class="text-5xl mb-4 text-primary">📊</div>
  <div class="text-4xl font-heading font-bold text-secondary mb-2">
    260k
  </div>
  <div class="text-text-secondary font-body font-medium">
    Tonnellate CO₂ Evitate
  </div>
</div>
```

### Hero Call-to-Action
```html
<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a 
    href="#report"
    class="
      bg-primary text-white 
      px-8 py-4 rounded-lg 
      font-body font-bold text-lg 
      hover:bg-accent 
      transition-all duration-300 
      transform hover:scale-105 
      shadow-lg hover:shadow-xl
    "
  >
    📊 Scarica il Bilancio
  </a>
  <a 
    href="#chi-siamo"
    class="
      bg-transparent border-2 border-white text-white 
      px-8 py-4 rounded-lg 
      font-body font-bold text-lg 
      hover:bg-white hover:text-secondary 
      transition-all duration-300 
      transform hover:scale-105
    "
  >
    🏭 Scopri di più
  </a>
</div>
```

---

## ✅ Checklist Implementazione

**Per ogni nuovo componente, verificare**:

- [ ] Usa colori brand (primary, secondary, accent, light)
- [ ] Usa font corretti (Merriweather titoli, Lato corpo)
- [ ] Responsive su mobile/tablet/desktop
- [ ] Transizioni smooth su hover/focus
- [ ] Contrasto colori WCAG AA
- [ ] Spaziature consistenti con scala Tailwind
- [ ] Border radius standard (rounded-lg, rounded-2xl)
- [ ] Shadow coerenti (shadow-lg, shadow-xl, shadow-2xl)
- [ ] Commenti esplicativi nel codice

---

## 📞 Supporto

Per dubbi sull'implementazione delle linee guida brand:
- **Documentazione completa**: `CHANGELOG.md`
- **Esempi live**: Componenti esistenti in `src/components/`
- **Config Tailwind**: `tailwind.config.js`

---

**Gruppo CAVIRO - Brand Guidelines v1.0**  
*Novembre 2025*

