<template>
  <!-- Sezione Statistiche - Mostra i risultati chiave di sostenibilità -->
  <!-- Questa sezione evidenzia visivamente i principali traguardi raggiunti dall'azienda -->
  <section id="statistiche" class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          I Nostri Risultati
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Numeri che raccontano il nostro impegno per la sostenibilità
        </p>
      </div>
      
      <!-- Griglia di statistiche -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Statistica 1: Energia Rinnovabile -->
        <div 
          v-for="(stat, index) in statistics" 
          :key="index"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4"
          :class="stat.borderColor"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Icona -->
          <div class="text-5xl mb-4 animate-pulse-slow" :style="{ color: stat.iconColor }">
            {{ stat.icon }}
          </div>
          
          <!-- Valore -->
          <div class="text-4xl font-bold text-gray-800 mb-2">
            {{ stat.value }}
          </div>
          
          <!-- Descrizione -->
          <div class="text-gray-600 font-medium">
            {{ stat.label }}
          </div>
          
          <!-- Progress bar (se presente) -->
          <div v-if="stat.progress" class="mt-4">
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="h-2 rounded-full transition-all duration-1000"
                :class="stat.progressColor"
                :style="{ width: stat.progress + '%' }"
              ></div>
            </div>
            <p class="text-sm text-gray-500 mt-2">Obiettivo: {{ stat.goal }}</p>
          </div>
        </div>
      </div>
      
      <!-- Sezione aggiuntiva con grafico visivo -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Card impatto ambientale -->
        <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl">
          <h3 class="text-2xl font-bold mb-6">Impatto Ambientale Positivo</h3>
          <div class="space-y-4">
            <div v-for="impact in environmentalImpact" :key="impact.label" class="flex items-center justify-between">
              <span class="font-medium">{{ impact.label }}</span>
              <span class="text-2xl font-bold">{{ impact.value }}</span>
            </div>
          </div>
        </div>
        
        <!-- Card certificazioni -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Certificazioni Attive</h3>
          <div class="grid grid-cols-2 gap-4">
            <div 
              v-for="cert in certifications" 
              :key="cert.name"
              class="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <div class="text-3xl mb-2">{{ cert.icon }}</div>
              <div class="text-sm font-semibold text-gray-800">{{ cert.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Dati reattivi per le statistiche principali
// Questi dati potrebbero essere caricati da un'API in un'applicazione reale
const statistics = ref([
  {
    icon: '⚡',
    value: '100%',
    label: 'Energia da Fonti Rinnovabili',
    progress: 100,
    goal: 'Raggiunto nel 2023',
    borderColor: 'border-yellow-500',
    iconColor: '#F59E0B',
    progressColor: 'bg-yellow-500'
  },
  {
    icon: '💧',
    value: '-25%',
    label: 'Riduzione Consumo Idrico',
    progress: 100,
    goal: 'Obiettivo 2024 raggiunto',
    borderColor: 'border-blue-500',
    iconColor: '#3B82F6',
    progressColor: 'bg-blue-500'
  },
  {
    icon: '🌱',
    value: '0',
    label: 'Rifiuti in Discarica',
    progress: 100,
    goal: 'Zero waste dal 2022',
    borderColor: 'border-green-500',
    iconColor: '#10B981',
    progressColor: 'bg-green-500'
  },
  {
    icon: '🌍',
    value: '150t',
    label: 'CO₂ Compensata',
    progress: 75,
    goal: '200t entro 2025',
    borderColor: 'border-emerald-500',
    iconColor: '#059669',
    progressColor: 'bg-emerald-500'
  }
])

// Impatto ambientale dettagliato
const environmentalImpact = ref([
  { label: 'Alberi piantati', value: '500+' },
  { label: 'Specie protette', value: '15' },
  { label: 'Ettari ripristinati', value: '5' },
  { label: 'Biodiversità aumentata', value: '+30%' }
])

// Certificazioni attive
const certifications = ref([
  { name: 'Biologico EU', icon: '🌿' },
  { name: 'Carbon Neutral', icon: '🌍' },
  { name: 'ISO 14001', icon: '✨' },
  { name: 'SQNPI', icon: '🏆' }
])
</script>

<style scoped>
/* Animazione per l'apparizione delle card */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Applica l'animazione con delay progressivo */
.grid > div {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Stili per le progress bar animate */
.transition-all {
  transition: width 1s ease-out;
}
</style>

