<template>
  <!-- Sezione "Chi siamo" con design migliorato -->
  <!-- Questa sezione presenta l'azienda in modo coinvolgente e professionale -->
  <section id="chi-siamo" class="py-20 bg-white relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-light rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>
    
    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Chi Siamo
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <!-- Contenuto principale con layout a due colonne -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Testo descrittivo -->
        <div class="prose prose-lg text-gray-600 leading-relaxed animate-slide-in-left">
          <p class="mb-6 text-lg">
            <strong class="text-primary text-xl">AgriBio Sostenibile</strong> è un'azienda agricola a conduzione familiare 
            situata nelle colline toscane, specializzata nella produzione biologica di olio 
            d'oliva extravergine e vino di qualità superiore.
          </p>
          
          <p class="mb-6">
            Da tre generazioni la nostra famiglia coltiva queste terre con passione e rispetto, 
            adottando pratiche agricole sostenibili che preservano la biodiversità e la fertilità 
            del suolo per le generazioni future.
          </p>
          
          <p class="mb-6">
            Il nostro impegno per la sostenibilità va oltre la semplice certificazione biologica: 
            utilizziamo energia rinnovabile, riduciamo gli sprechi d'acqua attraverso sistemi di 
            irrigazione intelligenti e promuoviamo l'economia circolare riutilizzando tutti i 
            sottoprodotti della lavorazione.
          </p>
          
          <p class="mb-6">
            Ogni anno pubblichiamo il nostro <strong class="text-primary">Report di Sostenibilità</strong> per 
            condividere in modo trasparente i nostri progressi, le sfide affrontate e gli 
            obiettivi futuri. Crediamo che la trasparenza sia fondamentale per costruire 
            fiducia con i nostri clienti, partner e la comunità locale.
          </p>
        </div>
        
        <!-- Immagine o card illustrativa -->
        <div class="animate-slide-in-right">
          <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-2xl text-white transform hover:scale-105 transition-transform duration-300">
            <div class="text-center">
              <div class="text-6xl mb-6 animate-float">🌾</div>
              <h3 class="text-2xl font-bold mb-4">La Nostra Missione</h3>
              <p class="text-green-50 leading-relaxed mb-6">
                Produrre alimenti di alta qualità rispettando l'ambiente, 
                preservando le risorse naturali e valorizzando il territorio 
                per le generazioni future.
              </p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div class="text-3xl font-bold">50+</div>
                  <div class="text-sm text-green-100">Anni di Esperienza</div>
                </div>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div class="text-3xl font-bold">3</div>
                  <div class="text-sm text-green-100">Generazioni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Valori chiave migliorati -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="text-center p-8 bg-gradient-to-br from-green-50 to-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-primary">
          <div class="text-5xl mb-4 animate-pulse-slow">🌱</div>
          <h3 class="font-bold text-xl text-gray-800 mb-3">Sostenibilità</h3>
          <p class="text-gray-600 leading-relaxed">
            Pratiche agricole che rispettano l'ambiente e preservano 
            le risorse per il futuro
          </p>
        </div>
        
        <div class="text-center p-8 bg-gradient-to-br from-green-50 to-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-primary">
          <div class="text-5xl mb-4 animate-pulse-slow" style="animation-delay: 0.2s">🤝</div>
          <h3 class="font-bold text-xl text-gray-800 mb-3">Comunità</h3>
          <p class="text-gray-600 leading-relaxed">
            Supporto all'economia locale e valorizzazione delle 
            tradizioni del territorio
          </p>
        </div>
        
        <div class="text-center p-8 bg-gradient-to-br from-green-50 to-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-primary">
          <div class="text-5xl mb-4 animate-pulse-slow" style="animation-delay: 0.4s">✨</div>
          <h3 class="font-bold text-xl text-gray-800 mb-3">Qualità</h3>
          <p class="text-gray-600 leading-relaxed">
            Prodotti eccellenti dal campo alla tavola, frutto di 
            passione e competenza
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Questo componente è puramente presentazionale
// Le animazioni sono gestite tramite classi CSS di Tailwind
</script>

<style scoped>
/* Stili personalizzati per la sezione prose */
.prose p {
  text-align: justify;
}

/* Animazioni personalizzate */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}
</style>
