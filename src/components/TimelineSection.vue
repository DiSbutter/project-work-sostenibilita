<template>
  <!-- Sezione Timeline - Mostra il percorso di sostenibilità nel tempo -->
  <!-- Questa sezione racconta la storia dell'impegno dell'azienda attraverso una timeline visiva -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Il Nostro Percorso
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Un viaggio verso la sostenibilità, passo dopo passo
        </p>
      </div>
      
      <!-- Timeline verticale -->
      <div class="relative">
        <!-- Linea verticale centrale -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
        
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
              class="w-full md:w-5/12 bg-white rounded-xl shadow-lg p-6 border-2 border-green-100 hover:border-primary transition-all duration-300 transform hover:scale-105"
              :class="index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'"
            >
              <!-- Anno -->
              <div class="flex items-center mb-3">
                <span class="text-2xl font-bold text-primary mr-3">{{ event.year }}</span>
                <div class="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              
              <!-- Titolo -->
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                {{ event.title }}
              </h3>
              
              <!-- Descrizione -->
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ event.description }}
              </p>
              
              <!-- Risultati chiave -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(achievement, i) in event.achievements" 
                  :key="i"
                  class="inline-block bg-green-50 text-primary text-sm font-semibold px-3 py-1 rounded-full"
                >
                  ✓ {{ achievement }}
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
          class="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          📊 Scopri i Report Completi
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Dati reattivi per la timeline
// Questi eventi raccontano il percorso di sostenibilità dell'azienda
const timelineEvents = ref([
  {
    year: 2024,
    title: 'Innovazione e Tecnologia',
    description: 'Implementazione di sistemi di agricoltura di precisione e monitoraggio IoT per ottimizzare le risorse e ridurre l\'impatto ambientale.',
    achievements: [
      'Agricoltura 4.0',
      'IoT Implementation',
      'Carbon Neutral'
    ]
  },
  {
    year: 2023,
    title: 'Biodiversità e Territorio',
    description: 'Progetti di ripristino ambientale e tutela della biodiversità locale, in partnership con organizzazioni ambientaliste.',
    achievements: [
      '15 Specie Protette',
      '3 Ettari Ripristinati',
      'WWF Partnership'
    ]
  },
  {
    year: 2022,
    title: 'Economia Circolare',
    description: 'Completa transizione verso un modello di economia circolare con zero sprechi e valorizzazione di tutti i sottoprodotti.',
    achievements: [
      'Zero Waste',
      '100% Compostaggio',
      'Economia Circolare'
    ]
  },
  {
    year: 2021,
    title: 'Energia Rinnovabile',
    description: 'Installazione di pannelli solari e sistema di gestione energetica per raggiungere l\'autosufficienza energetica.',
    achievements: [
      '100% Rinnovabile',
      'Autosufficienza',
      'Solar Power'
    ]
  },
  {
    year: 2020,
    title: 'Certificazione Biologica',
    description: 'Ottenimento della certificazione biologica europea e implementazione di pratiche agricole sostenibili.',
    achievements: [
      'Certificazione EU',
      'Pratiche Biologiche',
      'Sostenibilità'
    ]
  }
])
</script>

<style scoped>
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

