<template>
  <!-- Componente principale dell'applicazione -->
  <!-- Accessibilità AAA: Struttura semantica completa -->
  <div class="min-h-screen bg-gray-50">
    <!-- Skip Link per navigazione da tastiera - Accessibilità AAA -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2"
      aria-label="Salta al contenuto principale"
    >
      Salta al contenuto principale
    </a>
    
    <!-- Header della pagina (fisso in alto) -->
    <Header />
    
    <!-- Contenuto principale -->
    <!-- Accessibilità: landmark main con id per skip link -->
    <main id="main-content" class="pt-0" role="main" aria-label="Contenuto principale">
      <!-- Hero Section - Prima sezione visibile -->
      <HeroSection />
      
      <!-- Sezione "Chi siamo" -->
      <IntroSection />
      
      <!-- Sezione "Statistiche" - Risultati chiave -->
      <StatisticsSection />
      
      <!-- Sezione "Timeline" - Percorso di sostenibilità -->
      <TimelineSection />
      
      <!-- Sezione "Report di sostenibilità" -->
      <ReportSection />
      
      <!-- Sezione "Contatti" -->
      <ContactSection />
    </main>
    
    <!-- Footer della pagina -->
    <Footer />
    
    <!-- Live Region per annunci screen reader -->
    <div 
      id="announcements" 
      role="status" 
      aria-live="polite" 
      aria-atomic="true" 
      class="sr-only"
    ></div>
  </div>
</template>

<script setup>
// Importazione dei componenti
// Ogni componente rappresenta una sezione della pagina
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import IntroSection from './components/IntroSection.vue'
import StatisticsSection from './components/StatisticsSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ReportSection from './components/ReportSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

// Con la Composition API di Vue 3, non abbiamo bisogno di dichiarare
// esplicitamente i componenti - l'import è sufficiente per renderli disponibili
// nel template
</script>

<style scoped>
/* Gli stili sono gestiti principalmente da Tailwind CSS */
/* Accessibilità AAA: Stili per screen reader e navigazione */

/* Assicurati che il main abbia lo scroll smooth */
main {
  scroll-behavior: smooth;
}

/* Stile per le sezioni con padding per l'header fisso - Responsive */
section {
  scroll-margin-top: 80px; /* Altezza approssimativa dell'header */
}

@media (max-width: 768px) {
  section {
    scroll-margin-top: 100px; /* Più spazio su mobile */
  }
}

/* Screen reader only class per accessibilità */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>
