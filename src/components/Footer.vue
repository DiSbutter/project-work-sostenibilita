<template>
  <!-- ============================================= -->
  <!-- Footer - Gruppo CAVIRO -->
  <!-- Footer completo con navigazione e info legali -->
  <!-- Brand compliant: colori P 7645C (grigio antracite) -->
  <!-- ============================================= -->
  <footer class="bg-gradient-to-b from-secondary to-neutral-900 text-white py-12 relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute inset-0 pattern-bg-footer"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Contenuto principale del footer -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Colonna 1: Informazioni Gruppo CAVIRO -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="h-10 w-10 bg-primary rounded-lg flex items-center justify-center border-2 border-accent">
              <span class="text-xl font-heading font-bold">C</span>
            </div>
            <h3 class="font-heading font-bold text-xl">Gruppo CAVIRO</h3>
          </div>
          <p class="text-sm text-neutral-300 leading-relaxed mb-4 font-body">
            La più grande cooperativa vitivinicola italiana, leader nell'economia 
            circolare e nella sostenibilità dal 1963.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/gruppocaviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors" aria-label="Facebook" title="Facebook CAVIRO">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/gruppocaviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors" aria-label="Instagram" title="Instagram CAVIRO">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://it.linkedin.com/company/gruppocaviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors" aria-label="LinkedIn" title="LinkedIn CAVIRO">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://vimeo.com/caviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors" aria-label="Vimeo" title="Vimeo CAVIRO">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Colonna 2: Link utili -->
        <div>
          <h3 class="font-heading font-bold text-lg mb-4 text-primary">Navigazione</h3>
          <ul class="space-y-3 text-sm font-body">
            <li>
              <a href="#home" class="text-neutral-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#chi-siamo" class="text-neutral-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Il Gruppo</span>
              </a>
            </li>
            <li>
              <a href="#statistiche" class="text-neutral-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Sostenibilità</span>
              </a>
            </li>
            <li>
              <a href="#report" class="text-neutral-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Bilanci</span>
              </a>
            </li>
            <li>
              <a href="#contatti" class="text-neutral-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Contatti</span>
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Colonna 3: Temi e valori -->
        <div>
          <h3 class="font-heading font-bold text-lg mb-4 text-primary">I Nostri Valori</h3>
          <ul class="space-y-3 text-sm font-body">
            <li class="text-neutral-300 flex items-center space-x-2">
              <ArrowPathIcon class="w-5 h-5 flex-shrink-0" />
              <span>Economia Circolare</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <UserGroupIcon class="w-5 h-5 flex-shrink-0" />
              <span>Cooperazione</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <SparklesIcon class="w-5 h-5 flex-shrink-0" />
              <span>Sostenibilità</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <BeakerIcon class="w-5 h-5 flex-shrink-0" />
              <span>Innovazione</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <TrophyIcon class="w-5 h-5 flex-shrink-0" />
              <span>Qualità</span>
            </li>
          </ul>
        </div>
        
        <!-- Colonna 4: Contatti -->
        <div>
          <h3 class="font-heading font-bold text-lg mb-4 text-primary">Contatti</h3>
          <ul class="space-y-3 text-sm text-neutral-300 font-body">
            <li class="flex items-start space-x-2">
              <BuildingOfficeIcon class="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Via Convertite 12<br>48018 Faenza (RA)</span>
            </li>
            <li class="flex items-center space-x-2">
              <PhoneIcon class="w-5 h-5 flex-shrink-0" />
              <span>+39 0546 642111</span>
            </li>
            <li class="flex items-center space-x-2">
              <EnvelopeIcon class="w-5 h-5 flex-shrink-0" />
              <span>info@gruppocaviro.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <GlobeAltIcon class="w-5 h-5 flex-shrink-0" />
              <a href="https://www.gruppocaviro.com" target="_blank" rel="noopener" class="hover:text-primary transition-colors">
                www.gruppocaviro.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Divisore -->
      <div class="border-t border-neutral-700 pt-8">
        <!-- Copyright e link legali -->
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 font-body">
          <p class="mb-4 md:mb-0">
            © {{ currentYear }} Gruppo CAVIRO. Tutti i diritti riservati. | P.IVA 01025950397
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://www.gruppocaviro.com/privacy" target="_blank" rel="noopener" class="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span class="text-neutral-600">|</span>
            <a href="https://www.gruppocaviro.com/cookie-policy" target="_blank" rel="noopener" class="hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <span class="text-neutral-600">|</span>
            <a href="https://www.gruppocaviro.com/termini" target="_blank" rel="noopener" class="hover:text-primary transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
        
        <!-- Messaggio finale -->
        <div class="mt-8 text-center">
          <p class="text-sm text-neutral-400 font-body flex items-center justify-center gap-2">
            <SparklesIcon class="w-4 h-4" />
            <span>Costruiamo insieme un futuro sostenibile attraverso l'economia circolare</span>
            <GlobeAltIcon class="w-4 h-4" />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ArrowPathIcon,
  UserGroupIcon,
  BeakerIcon,
  TrophyIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/vue/24/solid'

// ============================================= //
// Footer - Logica componente                 //
// Anno corrente per copyright dinamico       //
// ============================================= //

// Anno corrente per il copyright (si aggiorna automaticamente)
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
/* ============================================= */
/* Stili Footer - Brand CAVIRO */
/* Pattern di sfondo e animazioni link */
/* ============================================= */

/* Pattern di sfondo per footer */
.pattern-bg-footer {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* Animazione per i link del footer */
a {
  transition: color 0.2s ease, transform 0.2s ease;
}

a:hover {
  transform: translateX(2px);
}

/* Effetto hover per le icone social */
a[aria-label]:hover {
  transform: scale(1.2) rotate(5deg);
}
</style>
