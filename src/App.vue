<template>
  <!-- Componente principale dell'applicazione -->
  <!-- Questo componente funge da contenitore per tutte le sezioni della pagina -->
  <div class="min-h-screen bg-gray-50">
    <!-- Header della pagina (fisso in alto) -->
    <Header />
    
    <!-- Contenuto principale -->
    <!-- Padding top per compensare l'header fisso -->
    <main class="pt-0">
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
/* Questo componente usa solo classi utility di Tailwind */

/* Assicurati che il main abbia lo scroll smooth */
main {
  scroll-behavior: smooth;
}

/* Stile per le sezioni con padding per l'header fisso */
section {
  scroll-margin-top: 80px; /* Altezza approssimativa dell'header */
}
</style>
