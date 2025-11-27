<template>
  <!-- ============================================= -->
  <!-- Header principale - Gruppo CAVIRO -->
  <!-- Brand compliant: Colori P 7645C e P 209C, Font Merriweather -->
  <!-- Sticky header con transizioni smooth per ottima UX -->
  <!-- ============================================= -->
  <header 
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-lg text-neutral-700' : 'bg-secondary/95 backdrop-blur-sm text-white'"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo e titolo brand CAVIRO (cliccabile per tornare alla home) -->
        <a href="#home" class="flex items-center space-x-4 hover:opacity-90 transition-opacity">
          <!-- Logo CAVIRO con iniziali -->
          <div class="h-12 w-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-md border-2 border-primary">
            <span class="text-xl font-heading font-bold text-primary">C</span>
          </div>
          <!-- Titolo e claim brand -->
          <div>
            <h1 class="text-xl md:text-2xl font-heading font-bold transition-colors" :class="isScrolled ? 'text-primary' : 'text-white'">
              Gruppo CAVIRO
            </h1>
            <p class="text-xs md:text-sm font-body transition-colors" :class="isScrolled ? 'text-text-secondary' : 'text-neutral-100'">
              Economia Circolare & Sostenibilità
            </p>
          </div>
        </a>
        
        <!-- Menu di navigazione desktop - Brand compliant -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8 font-body">
            <li>
              <a 
                href="#home" 
                class="font-semibold hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
                :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#chi-siamo" 
                class="font-semibold hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
                :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
              >
                Il Gruppo
              </a>
            </li>
            <li>
              <a 
                href="#statistiche" 
                class="font-semibold hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
                :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
              >
                Sostenibilità
              </a>
            </li>
            <li>
              <a 
                href="#report" 
                class="font-semibold hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
                :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
              >
                Bilanci
              </a>
            </li>
            <li>
              <a 
                href="#contatti" 
                class="font-semibold hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
                :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
              >
                Contatti
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- Menu mobile button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'"
          aria-label="Menu di navigazione"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Menu mobile - Responsive e accessibile -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t pt-4 animate-slide-up font-body"
        :class="isScrolled ? 'border-neutral-200' : 'border-white/20'"
      >
        <ul class="space-y-3">
          <li>
            <a 
              href="#home" 
              @click="closeMobileMenu"
              class="block py-2 font-semibold transition-colors"
              :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#chi-siamo" 
              @click="closeMobileMenu"
              class="block py-2 font-semibold transition-colors"
              :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
            >
              Il Gruppo
            </a>
          </li>
          <li>
            <a 
              href="#statistiche" 
              @click="closeMobileMenu"
              class="block py-2 font-semibold transition-colors"
              :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
            >
              Sostenibilità
            </a>
          </li>
          <li>
            <a 
              href="#report" 
              @click="closeMobileMenu"
              class="block py-2 font-semibold transition-colors"
              :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
            >
              Bilanci
            </a>
          </li>
          <li>
            <a 
              href="#contatti" 
              @click="closeMobileMenu"
              class="block py-2 font-semibold transition-colors"
              :class="isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'"
            >
              Contatti
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Stato per tracciare lo scroll e cambiare lo stile dell'header
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const header = ref(null)

// Funzione per gestire lo scroll
const handleScroll = () => {
  // Cambia lo stile dell'header quando si scrolla oltre 100px
  isScrolled.value = window.scrollY > 100
}

// Funzione per aprire/chiudere il menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Funzione per chiudere il menu mobile
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Aggiungi event listener per lo scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Controlla lo stato iniziale
})

// Rimuovi event listener quando il componente viene smontato
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Animazione per il menu mobile */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideDown 0.3s ease-out;
}

/* Transizione smooth per i cambi di stile dell'header */
header {
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}
</style>
