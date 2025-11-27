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
            <a href="https://www.facebook.com/gruppocaviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors text-2xl" aria-label="Facebook" title="Facebook CAVIRO">
              📘
            </a>
            <a href="https://www.instagram.com/gruppocaviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors text-2xl" aria-label="Instagram" title="Instagram CAVIRO">
              📷
            </a>
            <a href="https://www.linkedin.com/company/gruppo-caviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors text-2xl" aria-label="LinkedIn" title="LinkedIn CAVIRO">
              💼
            </a>
            <a href="https://www.youtube.com/@gruppocaviro" target="_blank" rel="noopener" class="text-neutral-400 hover:text-primary transition-colors text-2xl" aria-label="YouTube" title="YouTube CAVIRO">
              📺
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
              <span>♻️</span>
              <span>Economia Circolare</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <span>🤝</span>
              <span>Cooperazione</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <span>🌱</span>
              <span>Sostenibilità</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <span>🔬</span>
              <span>Innovazione</span>
            </li>
            <li class="text-neutral-300 flex items-center space-x-2">
              <span>🏆</span>
              <span>Qualità</span>
            </li>
          </ul>
        </div>
        
        <!-- Colonna 4: Contatti -->
        <div>
          <h3 class="font-heading font-bold text-lg mb-4 text-primary">Contatti</h3>
          <ul class="space-y-3 text-sm text-neutral-300 font-body">
            <li class="flex items-start space-x-2">
              <span>🏢</span>
              <span>Via Convertite 12<br>48018 Faenza (RA)</span>
            </li>
            <li class="flex items-center space-x-2">
              <span>📞</span>
              <span>+39 0546 642111</span>
            </li>
            <li class="flex items-center space-x-2">
              <span>✉️</span>
              <span>info@gruppocaviro.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <span>🌐</span>
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
          <p class="text-sm text-neutral-400 font-body">
            🍇 Costruiamo insieme un futuro sostenibile attraverso l'economia circolare 🌍
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

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
