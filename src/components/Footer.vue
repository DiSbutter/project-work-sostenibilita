<template>
  <!-- Footer del sito -->
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Contenuto principale del footer -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <!-- Colonna 1: Informazioni azienda -->
        <div>
          <h3 class="font-semibold text-lg mb-3">AgriBio Sostenibile</h3>
          <p class="text-sm text-gray-300 leading-relaxed">
            Un'azienda agricola biologica impegnata nella sostenibilità 
            ambientale e nella produzione di qualità dal 1975.
          </p>
        </div>
        
        <!-- Colonna 2: Link utili -->
        <div>
          <h3 class="font-semibold text-lg mb-3">Link Utili</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#chi-siamo" class="text-gray-300 hover:text-white transition-colors">
                Chi Siamo
              </a>
            </li>
            <li>
              <a href="#report" class="text-gray-300 hover:text-white transition-colors">
                Report di Sostenibilità
              </a>
            </li>
            <li>
              <a href="#contatti" class="text-gray-300 hover:text-white transition-colors">
                Contatti
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Colonna 3: Certificazioni -->
        <div>
          <h3 class="font-semibold text-lg mb-3">Certificazioni</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>🌿 Certificazione Biologica EU</li>
            <li>🌍 Carbon Neutral Certified</li>
            <li>✨ ISO 14001:2015</li>
            <li>🏆 SQNPI - Qualità Sostenibile</li>
          </ul>
        </div>
      </div>
      
      <!-- Divisore -->
      <div class="border-t border-gray-700 pt-6">
        <!-- Copyright e link legali -->
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {{ currentYear }} AgriBio Sostenibile. Tutti i diritti riservati.
          </p>
          
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" class="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <span>|</span>
            <a href="#" class="hover:text-white transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
        
        <!-- Social media (opzionale) -->
        <div class="flex justify-center space-x-6 mt-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="Facebook">
            📘
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="Instagram">
            📷
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="LinkedIn">
            💼
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Anno corrente per il copyright (si aggiorna automaticamente)
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
/* Stili gestiti principalmente da Tailwind */
/* Footer responsive e accessibile */
</style>
