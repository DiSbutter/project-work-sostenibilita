<template>
  <!-- Sezione "Report di sostenibilità" -->
  <section id="report" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Titolo della sezione -->
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Report di Sostenibilità
      </h2>
      
      <!-- Sottotitolo -->
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Scopri i nostri progressi anno dopo anno. Ogni report documenta il nostro impegno 
        concreto per un futuro più sostenibile.
      </p>
      
      <!-- Griglia di card per i report -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card per ogni anno -->
        <!-- Uso v-for per iterare sui dati dei report -->
        <div 
          v-for="report in reports" 
          :key="report.year"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Intestazione colorata -->
          <div class="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <h3 class="text-2xl font-bold">{{ report.year }}</h3>
            <p class="text-sm text-green-100">Anno di riferimento</p>
          </div>
          
          <!-- Contenuto della card -->
          <div class="p-6">
            <h4 class="font-semibold text-lg text-gray-800 mb-3">
              {{ report.title }}
            </h4>
            
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              {{ report.description }}
            </p>
            
            <!-- Highlights principali -->
            <ul class="space-y-2 mb-6">
              <li 
                v-for="(highlight, index) in report.highlights" 
                :key="index"
                class="text-sm text-gray-700 flex items-start"
              >
                <span class="text-green-600 mr-2">✓</span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
            
            <!-- Pulsante download -->
            <button
              @click="downloadReport(report.year)"
              class="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              📥 Scarica Report PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Array reattivo contenente i dati dei report
// In un'applicazione reale, questi dati potrebbero venire da un'API
const reports = ref([
  {
    year: 2024,
    title: 'Innovazione e Tecnologia',
    description: 'Il nostro percorso verso l\'agricoltura 4.0 con nuove tecnologie per il monitoraggio e l\'ottimizzazione delle risorse.',
    highlights: [
      'Riduzione 25% consumo idrico',
      '100% energia da fonti rinnovabili',
      'Certificazione Carbon Neutral'
    ]
  },
  {
    year: 2023,
    title: 'Biodiversità e Territorio',
    description: 'Focus sulla tutela della biodiversità locale e sul ripristino degli ecosistemi naturali nei nostri terreni.',
    highlights: [
      '15 nuove specie vegetali autoctone',
      '3 ettari di bosco ripristinato',
      'Partnership con WWF Italia'
    ]
  },
  {
    year: 2022,
    title: 'Economia Circolare',
    description: 'Implementazione completa del modello di economia circolare con zero sprechi e valorizzazione dei sottoprodotti.',
    highlights: [
      'Zero rifiuti in discarica',
      'Compostaggio 100% organico',
      '50 tonnellate CO₂ compensate'
    ]
  }
])

// Funzione per gestire il download del report
// In un'applicazione reale, questa funzione farebbe il download effettivo del PDF
const downloadReport = (year) => {
  // Simulazione del download
  // Il file PDF dovrebbe trovarsi in /public/reports/
  const pdfUrl = `/reports/report-${year}.pdf`
  
  // Mostro un messaggio all'utente (in produzione rimuovere questo alert)
  alert(`Download del report ${year} in corso...\nPercorso file: ${pdfUrl}\n\nNota: In questa demo, i PDF non sono disponibili.`)
  
  // In produzione, usare questo codice per il download effettivo:
  // const link = document.createElement('a')
  // link.href = pdfUrl
  // link.download = `report-sostenibilita-${year}.pdf`
  // link.click()
}
</script>

<style scoped>
/* Animazione hover per le card */
.hover\:shadow-xl:hover {
  transform: translateY(-4px);
}
</style>
