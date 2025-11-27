<template>
  <!-- ============================================= -->
  <!-- Sezione Statistiche - Gruppo CAVIRO -->
  <!-- Mostra i risultati chiave di sostenibilità -->
  <!-- Brand compliant: colori P 7645C e P 209C -->
  <!-- ============================================= -->
  <section id="statistiche" class="py-20 bg-gradient-to-b from-neutral-50 to-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          I Nostri Risultati
        </h2>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto font-body">
          Numeri concreti che raccontano il nostro impegno per la sostenibilità
        </p>
      </div>
      
      <!-- Griglia di statistiche -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Statistica dinamica per ogni dato -->
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
          
          <!-- Valore principale -->
          <div class="text-4xl font-heading font-bold text-secondary mb-2">
            {{ stat.value }}
          </div>
          
          <!-- Descrizione -->
          <div class="text-text-secondary font-body font-medium">
            {{ stat.label }}
          </div>
          
          <!-- Progress bar (se presente) -->
          <div v-if="stat.progress" class="mt-4">
            <div class="w-full bg-neutral-200 rounded-full h-2">
              <div 
                class="h-2 rounded-full transition-all duration-1000"
                :class="stat.progressColor"
                :style="{ width: stat.progress + '%' }"
              ></div>
            </div>
            <p class="text-sm text-text-secondary mt-2 font-body">{{ stat.goal }}</p>
          </div>
        </div>
      </div>
      
      <!-- Sezione aggiuntiva con impatto ambientale e certificazioni -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Card impatto ambientale con brand colors -->
        <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-xl">
          <h3 class="text-2xl font-heading font-bold mb-6">Impatto Ambientale Positivo</h3>
          <div class="space-y-4 font-body">
            <div v-for="impact in environmentalImpact" :key="impact.label" class="flex items-center justify-between">
              <span class="font-medium">{{ impact.label }}</span>
              <span class="text-2xl font-heading font-bold">{{ impact.value }}</span>
            </div>
          </div>
        </div>
        
        <!-- Card certificazioni -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary">
          <h3 class="text-2xl font-heading font-bold text-secondary mb-6">Certificazioni & Riconoscimenti</h3>
          <div class="grid grid-cols-2 gap-4">
            <div 
              v-for="cert in certifications" 
              :key="cert.name"
              class="text-center p-4 bg-light rounded-lg hover:bg-accent/20 transition-colors"
            >
              <div class="text-3xl mb-2">{{ cert.icon }}</div>
              <div class="text-sm font-body font-semibold text-secondary">{{ cert.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// ============================================= //
// Dati reattivi per le statistiche CAVIRO     //
// Dati basati su report di sostenibilità reali //
// ============================================= //

const statistics = ref([
  {
    icon: '♻️',
    value: '100%',
    label: 'Economia Circolare',
    progress: 100,
    goal: 'Zero sprechi dal 2020',
    borderColor: 'border-primary',
    iconColor: '#8B1538',
    progressColor: 'bg-primary'
  },
  {
    icon: '🍇',
    value: '35k+',
    label: 'Viticoltori Soci',
    progress: 100,
    goal: 'La più grande cooperativa',
    borderColor: 'border-accent',
    iconColor: '#AB4660',
    progressColor: 'bg-accent'
  },
  {
    icon: '⚡',
    value: '260k',
    label: 'Tonnellate CO₂ evitate',
    progress: 85,
    goal: 'Obiettivo 300k entro 2026',
    borderColor: 'border-primary',
    iconColor: '#8B1538',
    progressColor: 'bg-primary'
  },
  {
    icon: '🌍',
    value: '36k',
    label: 'Ettari di Vigneti',
    progress: 100,
    goal: 'In 13 regioni italiane',
    borderColor: 'border-accent',
    iconColor: '#AB4660',
    progressColor: 'bg-accent'
  }
])

// Impatto ambientale dettagliato
const environmentalImpact = ref([
  { label: 'Bioetanolo prodotto (t/anno)', value: '20k+' },
  { label: 'Energia rinnovabile generata (MWh)', value: '15k+' },
  { label: 'Acqua recuperata e riutilizzata (%)', value: '95%' },
  { label: 'Sottoprodotti valorizzati (%)', value: '100%' }
])

// Certificazioni attive
const certifications = ref([
  { name: 'ISO 14001', icon: '🌿' },
  { name: 'ISO 9001', icon: '✨' },
  { name: 'Equalitas', icon: '🏆' },
  { name: 'Carbon Footprint', icon: '🌍' }
])
</script>

<style scoped>
/* ============================================= */
/* Stili StatisticsSection - Brand CAVIRO */
/* Animazioni card e progress bars */
/* ============================================= */

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
