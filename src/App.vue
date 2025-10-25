<template>
  <!-- Componente principale dell'applicazione -->
  <!-- Questo componente funge da contenitore per tutte le sezioni della pagina -->
  <div class="min-h-screen bg-gray-50">
    <!-- Header della pagina -->
    <Header />
    
    <!-- Contenuto principale -->
    <main>
      <!-- Sezione "Chi siamo" -->
      <IntroSection />
      
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
import IntroSection from './components/IntroSection.vue'
import ReportSection from './components/ReportSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

// Con la Composition API non abbiamo bisogno di dichiarare
// esplicitamente i componenti - l'import è sufficiente
</script>

<style scoped>
/* Gli stili sono gestiti principalmente da Tailwind CSS */
/* Questo componente usa solo classi utility di Tailwind */
</style>
