<template>
  <!-- ============================================= -->
  <!-- Sezione Timeline - Storia Gruppo CAVIRO -->
  <!-- Racconta il percorso di sostenibilità dal 1963 -->
  <!-- Brand compliant con colori e tipografia -->
  <!-- ============================================= -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          Il Nostro Percorso
        </h2>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto font-body">
          60 anni di storia, innovazione e impegno per la sostenibilità
        </p>
      </div>
      
      <!-- Timeline verticale -->
      <div class="relative">
        <!-- Linea verticale centrale con colori brand -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-light hidden md:block"></div>
        
        <!-- Eventi della timeline -->
        <div class="space-y-12">
          <div 
            v-for="(event, index) in timelineEvents" 
            :key="index"
            class="relative flex flex-col md:flex-row items-center"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Card evento -->
            <div 
              class="w-full md:w-5/12 bg-white rounded-xl shadow-lg p-6 border-2 border-light hover:border-primary transition-all duration-300 transform hover:scale-105"
              :class="index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'"
            >
              <!-- Anno con font Merriweather -->
              <div class="flex items-center mb-3">
                <span class="text-2xl font-heading font-bold text-primary mr-3">{{ event.year }}</span>
                <div class="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              
              <!-- Titolo -->
              <h3 class="text-xl font-heading font-bold text-secondary mb-2">
                {{ event.title }}
              </h3>
              
              <!-- Descrizione con font Lato -->
              <p class="text-text-secondary font-body mb-4 leading-relaxed">
                {{ event.description }}
              </p>
              
              <!-- Risultati chiave -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(achievement, i) in event.achievements" 
                  :key="i"
                  class="inline-flex items-center gap-1 bg-light text-primary text-sm font-body font-semibold px-3 py-1 rounded-full"
                >
                  <CheckCircleIcon class="w-4 h-4 flex-shrink-0" />
                  <span>{{ achievement }}</span>
                </span>
              </div>
            </div>
            
            <!-- Punto centrale sulla linea -->
            <div class="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
              <div class="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>
            
            <!-- Spazio vuoto per bilanciare il layout -->
            <div class="w-full md:w-5/12 hidden md:block"></div>
          </div>
        </div>
      </div>
      
      <!-- Call to action -->
      <div class="text-center mt-16">
        <a 
          href="#report"
          class="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-body font-bold text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <ChartBarIcon class="w-6 h-6" />
          <span>Scopri i Bilanci di Sostenibilità</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircleIcon, ChartBarIcon } from '@heroicons/vue/24/solid'

// ============================================= //
// Dati reattivi per la timeline CAVIRO       //
// Eventi chiave nella storia della cooperativa //
// ============================================= //

const timelineEvents = ref([
  {
    year: 2024,
    title: 'Leadership nell\'Economia Circolare',
    description: 'CAVIRO si conferma leader europeo nell\'economia circolare applicata al settore vitivinicolo, con il 100% dei sottoprodotti valorizzati e trasformati in nuove risorse.',
    achievements: [
      '260k t CO₂ evitate',
      'Carbon Footprint',
      'Innovazione 4.0'
    ]
  },
  {
    year: 2020,
    title: 'Zero Waste e Certificazione Equalitas',
    description: 'Raggiunto l\'obiettivo zero sprechi con la completa valorizzazione di tutti i sottoprodotti. Ottenimento della certificazione Equalitas per la sostenibilità.',
    achievements: [
      '100% Economia Circolare',
      'Equalitas Certified',
      'Zero Sprechi'
    ]
  },
  {
    year: 2015,
    title: 'Bioraffineria e Bioetanolo',
    description: 'Inaugurazione della bioraffineria di Faenza per la produzione di bioetanolo di seconda generazione dalle vinacce, primo esempio in Italia di economia circolare nel vino.',
    achievements: [
      'Bioraffineria attiva',
      '20k t bioetanolo/anno',
      'Energia rinnovabile'
    ]
  },
  {
    year: 2010,
    title: 'Espansione e Sostenibilità',
    description: 'Ampliamento della rete cooperativa con focus sulla sostenibilità ambientale e sociale. Primo Bilancio di Sostenibilità pubblicato.',
    achievements: [
      'Primo Bilancio',
      'ISO 14001',
      'Crescita sostenibile'
    ]
  },
  {
    year: 2000,
    title: 'Tavernello: Il Vino più Venduto',
    description: 'Il brand Tavernello diventa il vino più venduto al mondo, simbolo di qualità accessibile e made in Italy. Consolidamento della leadership di mercato.',
    achievements: [
      'Leader mondiale',
      'Brand iconico',
      'Export globale'
    ]
  },
  {
    year: 1990,
    title: 'Modernizzazione e Qualità',
    description: 'Investimenti in tecnologia e qualità. Adozione di sistemi di gestione avanzati per garantire standard elevati in tutti i processi produttivi.',
    achievements: [
      'ISO 9001',
      'Innovazione',
      'Qualità certificata'
    ]
  },
  {
    year: 1963,
    title: 'Fondazione Gruppo CAVIRO',
    description: 'Nasce a Faenza la Cooperativa Agricola Vitivinicola dell\'Imolese e della Romagna Orientale, con la missione di valorizzare il lavoro dei viticoltori locali.',
    achievements: [
      'Nascita cooperativa',
      'Valori fondanti',
      'Territorio'
    ]
  }
])
</script>

<style scoped>
/* ============================================= */
/* Stili TimelineSection - Brand CAVIRO */
/* Animazioni per apparizione eventi */
/* ============================================= */

/* Animazione per l'apparizione degli eventi */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Applica animazioni alternate */
.space-y-12 > div:nth-child(odd) {
  animation: fadeInLeft 0.6s ease-out;
}

.space-y-12 > div:nth-child(even) {
  animation: fadeInRight 0.6s ease-out;
}

/* Hover effect per le card */
.hover\:scale-105:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(139, 21, 56, 0.15), 0 10px 10px -5px rgba(139, 21, 56, 0.08);
}
</style>
