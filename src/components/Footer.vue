<template>
  <!-- Footer del sito migliorato -->
  <!-- Questo footer fornisce informazioni utili e link di navigazione -->
  <footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute inset-0 pattern-bg-footer"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Contenuto principale del footer -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Colonna 1: Informazioni azienda -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
              <span class="text-xl">🌱</span>
            </div>
            <h3 class="font-bold text-xl">AgriBio Sostenibile</h3>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed mb-4">
            Un'azienda agricola biologica impegnata nella sostenibilità 
            ambientale e nella produzione di qualità dal 1975.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary transition-colors text-2xl" aria-label="Facebook" title="Facebook">
              📘
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors text-2xl" aria-label="Instagram" title="Instagram">
              📷
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors text-2xl" aria-label="LinkedIn" title="LinkedIn">
              💼
            </a>
            <a href="#" class="text-gray-400 hover:text-primary transition-colors text-2xl" aria-label="Twitter" title="Twitter">
              🐦
            </a>
          </div>
        </div>
        
        <!-- Colonna 2: Link utili -->
        <div>
          <h3 class="font-bold text-lg mb-4 text-primary">Navigazione</h3>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="#home" class="text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#chi-siamo" class="text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Chi Siamo</span>
              </a>
            </li>
            <li>
              <a href="#statistiche" class="text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Risultati</span>
              </a>
            </li>
            <li>
              <a href="#report" class="text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Report di Sostenibilità</span>
              </a>
            </li>
            <li>
              <a href="#contatti" class="text-gray-300 hover:text-primary transition-colors flex items-center space-x-2">
                <span>→</span>
                <span>Contatti</span>
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Colonna 3: Certificazioni -->
        <div>
          <h3 class="font-bold text-lg mb-4 text-primary">Certificazioni</h3>
          <ul class="space-y-3 text-sm">
            <li class="text-gray-300 flex items-center space-x-2">
              <span>🌿</span>
              <span>Certificazione Biologica EU</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-2">
              <span>🌍</span>
              <span>Carbon Neutral Certified</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-2">
              <span>✨</span>
              <span>ISO 14001:2015</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-2">
              <span>🏆</span>
              <span>SQNPI - Qualità Sostenibile</span>
            </li>
          </ul>
        </div>
        
        <!-- Colonna 4: Contatti -->
        <div>
          <h3 class="font-bold text-lg mb-4 text-primary">Contatti</h3>
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-start space-x-2">
              <span>📍</span>
              <span>Via delle Colline 123<br>50100 Firenze, Italia</span>
            </li>
            <li class="flex items-center space-x-2">
              <span>📞</span>
              <span>+39 055 1234567</span>
            </li>
            <li class="flex items-center space-x-2">
              <span>✉️</span>
              <span>info@agribio.it</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Divisore -->
      <div class="border-t border-gray-700 pt-8">
        <!-- Copyright e link legali -->
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p class="mb-4 md:mb-0">
            © {{ currentYear }} AgriBio Sostenibile. Tutti i diritti riservati.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <a href="#" class="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span class="text-gray-600">|</span>
            <a href="#" class="hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <span class="text-gray-600">|</span>
            <a href="#" class="hover:text-primary transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
        
        <!-- Messaggio finale -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-400">
            🌱 Costruiamo insieme un futuro più sostenibile 🌱
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Anno corrente per il copyright (si aggiorna automaticamente)
// Questo valore si aggiorna ogni anno senza bisogno di modifiche manuali
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
/* Pattern di sfondo per footer */
.pattern-bg-footer {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* Stili gestiti principalmente da Tailwind */
/* Footer responsive e accessibile */

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
