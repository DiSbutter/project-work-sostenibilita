<template>
  <!-- Header principale del sito -->
  <header class="bg-primary text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <!-- Logo e titolo -->
        <div class="flex items-center space-x-4">
          <!-- Logo dell'azienda (placeholder) -->
          <img 
            src="/assets/logo.png" 
            alt="Logo Azienda" 
            class="h-16 w-16 object-contain bg-white rounded-full p-2"
            @error="handleImageError"
          />
          <!-- Titolo e sottotitolo -->
          <div>
            <h1 class="text-2xl md:text-3xl font-bold">
              AgriBio Sostenibile
            </h1>
            <p class="text-sm md:text-base text-green-100">
              Coltivare il futuro, rispettare la terra
            </p>
          </div>
        </div>
        
        <!-- Menu di navigazione (opzionale per future espansioni) -->
        <nav class="hidden md:block">
          <ul class="flex space-x-6">
            <li>
              <a href="#chi-siamo" class="hover:text-green-200 transition-colors">
                Chi Siamo
              </a>
            </li>
            <li>
              <a href="#report" class="hover:text-green-200 transition-colors">
                Report
              </a>
            </li>
            <li>
              <a href="#contatti" class="hover:text-green-200 transition-colors">
                Contatti
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Gestione errore immagine logo
// Se l'immagine non viene trovata, sostituiamo con un placeholder SVG
const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Crect width="64" height="64" fill="%232E7D32"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="white"%3EAB%3C/text%3E%3C/svg%3E'
}
</script>

<style scoped>
/* Stili aggiuntivi se necessari */
/* La maggior parte degli stili è gestita da Tailwind */
</style>
