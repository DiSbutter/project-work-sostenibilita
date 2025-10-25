<template>
  <!-- Sezione "Chi siamo" -->
  <section id="chi-siamo" class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Titolo della sezione -->
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Chi Siamo
      </h2>
      
      <!-- Testo descrittivo -->
      <div class="prose prose-lg mx-auto text-gray-600 leading-relaxed">
        <p class="mb-4">
          <strong>AgriBio Sostenibile</strong> è un'azienda agricola a conduzione familiare 
          situata nelle colline toscane, specializzata nella produzione biologica di olio 
          d'oliva extravergine e vino di qualità superiore.
        </p>
        
        <p class="mb-4">
          Da tre generazioni la nostra famiglia coltiva queste terre con passione e rispetto, 
          adottando pratiche agricole sostenibili che preservano la biodiversità e la fertilità 
          del suolo per le generazioni future.
        </p>
        
        <p class="mb-4">
          Il nostro impegno per la sostenibilità va oltre la semplice certificazione biologica: 
          utilizziamo energia rinnovabile, riduciamo gli sprechi d'acqua attraverso sistemi di 
          irrigazione intelligenti e promuoviamo l'economia circolare riutilizzando tutti i 
          sottoprodotti della lavorazione.
        </p>
        
        <p class="mb-4">
          Ogni anno pubblichiamo il nostro <strong>Report di Sostenibilità</strong> per 
          condividere in modo trasparente i nostri progressi, le sfide affrontate e gli 
          obiettivi futuri. Crediamo che la trasparenza sia fondamentale per costruire 
          fiducia con i nostri clienti, partner e la comunità locale.
        </p>
      </div>
      
      <!-- Valori chiave -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="text-center p-6 bg-green-50 rounded-lg">
          <div class="text-4xl mb-3">🌱</div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">Sostenibilità</h3>
          <p class="text-sm text-gray-600">
            Pratiche agricole che rispettano l'ambiente
          </p>
        </div>
        
        <div class="text-center p-6 bg-green-50 rounded-lg">
          <div class="text-4xl mb-3">🤝</div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">Comunità</h3>
          <p class="text-sm text-gray-600">
            Supporto all'economia e alle tradizioni locali
          </p>
        </div>
        
        <div class="text-center p-6 bg-green-50 rounded-lg">
          <div class="text-4xl mb-3">✨</div>
          <h3 class="font-semibold text-lg text-gray-800 mb-2">Qualità</h3>
          <p class="text-sm text-gray-600">
            Prodotti eccellenti dal campo alla tavola
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Questo componente è puramente presentazionale
// Non ha bisogno di logica reattiva al momento
</script>

<style scoped>
/* Stili personalizzati per la sezione prose */
.prose p {
  text-align: justify;
}
</style>
