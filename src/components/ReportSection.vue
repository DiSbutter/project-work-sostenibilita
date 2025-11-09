<template>
  <!-- Sezione "Report di sostenibilità" migliorata -->
  <!-- Questa sezione presenta i report annuali in modo attraente e professionale -->
  <section id="report" class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute inset-0 pattern-bg-report"></div>
    </div>
    
    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Report di Sostenibilità
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Scopri i nostri progressi anno dopo anno. Ogni report documenta il nostro impegno 
          concreto per un futuro più sostenibile e trasparente.
        </p>
      </div>
      
      <!-- Griglia di card per i report migliorata -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card per ogni anno con animazioni e design migliorato -->
        <div 
          v-for="(report, index) in reports" 
          :key="report.year"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Intestazione colorata con gradiente -->
          <div class="bg-gradient-to-br from-primary via-secondary to-accent p-8 text-white relative overflow-hidden">
            <!-- Pattern decorativo -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div class="relative z-10">
              <div class="text-5xl mb-4">{{ report.icon }}</div>
              <h3 class="text-3xl font-bold mb-2">{{ report.year }}</h3>
              <p class="text-sm text-green-100 font-medium">Anno di riferimento</p>
            </div>
          </div>
          
          <!-- Contenuto della card -->
          <div class="p-6">
            <h4 class="font-bold text-xl text-gray-800 mb-3 group-hover:text-primary transition-colors">
              {{ report.title }}
            </h4>
            
            <p class="text-gray-600 text-sm mb-6 leading-relaxed min-h-[60px]">
              {{ report.description }}
            </p>
            
            <!-- Highlights principali con design migliorato -->
            <ul class="space-y-3 mb-6">
              <li 
                v-for="(highlight, index) in report.highlights" 
                :key="index"
                class="text-sm text-gray-700 flex items-start bg-green-50 rounded-lg p-2"
              >
                <span class="text-primary mr-3 font-bold text-lg">✓</span>
                <span class="flex-1">{{ highlight }}</span>
              </li>
            </ul>
            
            <!-- Pulsante download migliorato -->
            <button
              @click="downloadReport(report.year)"
              class="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>📥</span>
              <span>Scarica Report PDF</span>
            </button>
            
            <!-- Info aggiuntive -->
            <div class="mt-4 text-center text-xs text-gray-500">
              <span>📄 PDF • {{ report.pages }} pagine</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Messaggio informativo -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-green-50 border-2 border-primary rounded-xl p-6 max-w-2xl">
          <p class="text-gray-700 leading-relaxed">
            <strong class="text-primary">Nota:</strong> I report sono disponibili in formato PDF. 
            Per richieste specifiche o domande sui contenuti, 
            <a href="#contatti" class="text-primary hover:underline font-semibold">contattaci</a>.
          </p>
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
    ],
    icon: '🚀',
    pages: 45
  },
  {
    year: 2023,
    title: 'Biodiversità e Territorio',
    description: 'Focus sulla tutela della biodiversità locale e sul ripristino degli ecosistemi naturali nei nostri terreni.',
    highlights: [
      '15 nuove specie vegetali autoctone',
      '3 ettari di bosco ripristinato',
      'Partnership con WWF Italia'
    ],
    icon: '🌳',
    pages: 42
  },
  {
    year: 2022,
    title: 'Economia Circolare',
    description: 'Implementazione completa del modello di economia circolare con zero sprechi e valorizzazione dei sottoprodotti.',
    highlights: [
      'Zero rifiuti in discarica',
      'Compostaggio 100% organico',
      '50 tonnellate CO₂ compensate'
    ],
    icon: '♻️',
    pages: 38
  }
])

// Funzione per gestire il download del report
// In un'applicazione reale, questa funzione farebbe il download effettivo del PDF
const downloadReport = (year) => {
  // Simulazione del download con feedback visivo migliorato
  // Il file PDF dovrebbe trovarsi in /public/reports/
  const pdfUrl = `/reports/report-${year}.pdf`
  
  // Mostro un messaggio all'utente con stile migliore
  // In produzione, sostituire con una notifica toast o modal
  const message = `📥 Download del Report ${year} in corso...\n\nPercorso: ${pdfUrl}\n\nNota: In questa demo, i PDF non sono fisicamente disponibili. In un'applicazione reale, i file verrebbero scaricati automaticamente.`
  
  // Usa un alert più elegante (in produzione usare una libreria di notifiche)
  if (confirm(message + '\n\nVuoi procedere con la simulazione del download?')) {
    // In produzione, usare questo codice per il download effettivo:
    try {
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = `report-sostenibilita-${year}.pdf`
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.warn('File non trovato. In produzione, assicurarsi che i PDF siano nella cartella /public/reports/')
      // In produzione, potresti voler mostrare un messaggio di errore più user-friendly
    }
  }
}
</script>

<style scoped>
/* Pattern di sfondo per report section */
.pattern-bg-report {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232E7D32' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* Animazioni per l'apparizione delle card */
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

.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Effetto hover migliorato */
.group:hover .group-hover\:text-primary {
  color: #2E7D32;
}

/* Transizioni smooth */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
