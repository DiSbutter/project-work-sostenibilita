# Report di Sostenibilità - AgriBio Sostenibile

## Panoramica del Progetto
Questa è un'applicazione Vue 3 che presenta il report di sostenibilità per un'azienda agricola del settore primario. L'applicazione è completamente statica e non richiede un backend.

## Scopo
Fornire una piattaforma web per mostrare:
- Informazioni sull'azienda (Chi Siamo)
- Report di sostenibilità annuali scaricabili
- Form di contatto per i visitatori
- Certificazioni e impegni ambientali

## Stato Attuale
✅ **Completato** - Tutte le funzionalità richieste sono state implementate:
- Header con logo e navigazione
- Sezione "Chi Siamo" con descrizione aziendale
- Sezione "Report" con card per gli anni 2024, 2023, 2022
- Form di contatto funzionante (solo frontend)
- Footer con link legali e certificazioni

## Modifiche Recenti (25 Ottobre 2025)
- Configurazione iniziale progetto Vue 3 + Vite
- Implementazione di tutti i componenti richiesti
- Configurazione TailwindCSS per styling responsive
- Setup workflow per Replit (porta 5000)
- Configurazione deployment per produzione

## Architettura del Progetto

### Struttura delle Directory
```
project-work-sostenibilita/
├── src/
│   ├── components/
│   │   ├── Header.vue           # Header con logo e navigazione
│   │   ├── IntroSection.vue     # Sezione "Chi Siamo"
│   │   ├── ReportSection.vue    # Sezione report con card scaricabili
│   │   ├── ContactSection.vue   # Form di contatto
│   │   └── Footer.vue           # Footer con link e certificazioni
│   ├── App.vue                  # Componente principale
│   ├── main.js                  # Entry point dell'applicazione
│   └── style.css                # Stili globali Tailwind
├── public/
│   ├── assets/
│   │   └── logo.svg            # Logo aziendale
│   └── reports/                # Directory per PDF report
├── index.html                  # Template HTML principale
├── vite.config.js              # Configurazione Vite
├── tailwind.config.js          # Configurazione TailwindCSS
└── package.json                # Dipendenze del progetto
```

### Tecnologie Utilizzate
- **Vue 3** (Composition API) - Framework frontend
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS utility-first
- **HTML5/CSS3** - Markup e styling semantico

### Componenti Principali

#### 1. Header.vue
- Logo aziendale (SVG)
- Titolo e sottotitolo
- Menu di navigazione (desktop)
- Gestione errori per immagini mancanti

#### 2. IntroSection.vue
- Testo descrittivo "Chi Siamo"
- Card valori aziendali (Sostenibilità, Comunità, Qualità)
- Layout responsive

#### 3. ReportSection.vue
- Array reattivo di report annuali
- Card con titolo, descrizione, highlights
- Pulsanti download PDF (con alert demo)
- Gestione dinamica con v-for

#### 4. ContactSection.vue
- Form con v-model (nome, email, messaggio)
- Validazione HTML5
- Messaggio di conferma dopo invio
- Informazioni di contatto alternative
- Accessibilità completa

#### 5. Footer.vue
- Informazioni aziendali
- Link utili e legali
- Certificazioni
- Copyright dinamico (anno corrente)
- Link social media

## Caratteristiche Tecniche

### Accessibilità
- Alto contrasto per testi
- Label associate ai form input
- Focus visibile su elementi interattivi
- Attributi ARIA quando necessario
- Navigazione da tastiera

### Responsive Design
- Grid system di Tailwind
- Breakpoint per mobile/tablet/desktop
- Layout flessibile
- Menu collassabile (preparato per future espansioni)

### Configurazione Replit
- Porta: 5000
- Host: 0.0.0.0 (richiesto per Replit)
- HMR configurato per porta 443
- Deployment: autoscale con preview Vite

## Come Funziona

### Sviluppo
Il server di sviluppo Vite è configurato per:
- Ascolto su 0.0.0.0:5000
- Hot Module Replacement (HMR)
- Ricaricamento automatico

### Build di Produzione
```bash
npm run build
```
Genera file ottimizzati in `dist/`

### Deploy
Configurato per deployment autoscale:
- Build: `npm run build`
- Run: `vite preview` su porta 5000

## Note per gli Studenti

### Commenti nel Codice
Tutti i componenti includono commenti esplicativi in italiano che spiegano:
- Cosa fa ogni sezione
- Come funziona la Composition API
- Uso di direttive Vue (v-for, v-model, @submit.prevent)
- Gestione dello stato reattivo con ref()

### Dati Demo
- I report sono placeholder (PDF non esistono realmente)
- Il form non invia dati a un backend
- Le informazioni aziendali sono fittizie
- Il logo è un SVG placeholder

## Prossimi Passi Potenziali
1. Aggiungere backend per form di contatto
2. Implementare upload effettivo PDF
3. Aggiungere animazioni alle transizioni
4. Internazionalizzazione (i18n)
5. Sistema CMS per gestire i report
6. Analytics e tracking
7. SEO optimization

## Preferenze Utente
- Lingua: Italiano
- Framework: Vue 3 con Composition API
- Stile: TailwindCSS utility classes
- Commenti: In italiano per scopi didattici
