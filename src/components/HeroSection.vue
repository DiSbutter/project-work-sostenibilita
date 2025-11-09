<template>
  <!-- Hero Section - Prima sezione visibile del sito -->
  <!-- Questa sezione serve a catturare l'attenzione del visitatore con un messaggio forte e visivamente attraente -->
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 pattern-bg-hero"></div>
    </div>
    
    <!-- Contenuto principale -->
    <div class="relative z-10 container mx-auto px-4 text-center text-white pt-20 pb-20">
      <!-- Animazione fade-in per il contenuto -->
      <div class="animate-fade-in">
        <!-- Titolo principale -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sostenibilità
          <span class="block text-light mt-2">che cresce con te</span>
        </h1>
        
        <!-- Sottotitolo -->
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-50 leading-relaxed">
          Scopri il nostro impegno per un'agricoltura sostenibile, 
          trasparente e rispettosa dell'ambiente. 
          Ogni report racconta la nostra storia di innovazione e responsabilità.
        </p>
        
        <!-- Call-to-action buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#report"
            class="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📊 Esplora i Report
          </a>
          <a 
            href="#chi-siamo"
            class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            🌱 Scopri di più
          </a>
        </div>
        
        <!-- Statistiche rapide (tre card floating) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-slide-up hover:bg-white/20 transition-all duration-300">
            <div class="text-4xl font-bold mb-2">100%</div>
            <div class="text-green-100">Energia Rinnovabile</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-slide-up hover:bg-white/20 transition-all duration-300" style="animation-delay: 0.1s">
            <div class="text-4xl font-bold mb-2">25%</div>
            <div class="text-green-100">Riduzione Consumo Idrico</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-slide-up hover:bg-white/20 transition-all duration-300" style="animation-delay: 0.2s">
            <div class="text-4xl font-bold mb-2">0</div>
            <div class="text-green-100">Rifiuti in Discarica</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#chi-siamo" class="text-white text-4xl hover:text-light transition-colors">
        ↓
      </a>
    </div>
    
    <!-- Wave divider decorativo -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// Questo componente è puramente presentazionale
// Non richiede logica reattiva al momento
// Le animazioni sono gestite tramite classi CSS di Tailwind
</script>

<style scoped>
/* Pattern di sfondo per hero section */
.pattern-bg-hero {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* Animazioni personalizzate per il hero */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 1s ease-out;
}

/* Effetto glassmorphism per le card statistiche */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>

