<template>
  <!-- ============================================= -->
  <!-- Sezione Report di Sostenibilità - CAVIRO -->
  <!-- Download bilanci annuali con design brand -->
  <!-- Colori P 7645C e P 209C, font Merriweather/Lato -->
  <!-- ============================================= -->
  <section id="report" class="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 left-0 w-full h-full opacity-5">
      <div class="absolute inset-0 pattern-bg-report"></div>
    </div>
    
    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          Bilanci di Sostenibilità
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-body">
          Trasparenza e rendicontazione: ogni anno pubblichiamo il nostro impegno concreto 
          per un futuro sostenibile, documentando progressi, obiettivi e impatto sul territorio.
        </p>
      </div>
      
      <!-- Griglia di card per i report -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card per ogni anno con design brand CAVIRO -->
        <div 
          v-for="(report, index) in reports" 
          :key="report.year"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary group flex flex-col h-full"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Intestazione con gradiente brand -->
          <div class="bg-gradient-to-br from-primary via-accent to-light p-8 text-white relative overflow-hidden">
            <!-- Pattern decorativo -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div class="relative z-10">
              <div class="mb-4">
                <TrophyIcon v-if="report.icon === 'trophy'" class="w-16 h-16 mx-auto" />
                <BoltIcon v-else-if="report.icon === 'rocket'" class="w-16 h-16 mx-auto" />
                <SparklesIcon v-else-if="report.icon === 'sparkles'" class="w-16 h-16 mx-auto" />
              </div>
              <h3 class="text-3xl font-heading font-bold mb-2">{{ report.year }}</h3>
              <p class="text-sm text-neutral-50 font-body font-medium">Bilancio di Sostenibilità</p>
            </div>
          </div>
          
          <!-- Contenuto della card -->
          <div class="p-6 flex flex-col flex-grow">
            <h4 class="font-heading font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors report-title">
              {{ report.title }}
            </h4>
            
            <p class="text-text-secondary font-body text-sm mb-6 leading-relaxed report-description">
              {{ report.description }}
            </p>
            
            <!-- Highlights principali -->
            <div class="report-highlights-container mb-6">
              <ul class="space-y-3">
                <li 
                  v-for="(highlight, index) in report.highlights" 
                  :key="index"
                  class="text-sm text-neutral-700 flex items-start bg-light rounded-lg p-2"
                >
                  <CheckCircleIcon class="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span class="flex-1 font-body">{{ highlight }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Pulsante download con brand style -->
            <button
              @click="downloadReport(report.year)"
              class="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-body font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <ArrowDownTrayIcon class="w-5 h-5" />
              <span>Scarica Report PDF</span>
            </button>
            
            <!-- Info aggiuntive -->
            <div class="mt-4 text-center text-xs text-text-secondary font-body flex items-center justify-center space-x-2">
              <DocumentTextIcon class="w-4 h-4" />
              <span>PDF • {{ report.pages }} pagine • {{ report.size }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Messaggio informativo -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-light border-2 border-primary rounded-xl p-6 max-w-2xl">
          <p class="text-neutral-700 font-body leading-relaxed">
            <strong class="text-primary font-bold">Trasparenza totale:</strong> I report sono disponibili in formato PDF. 
            Per approfondimenti o richieste specifiche sui contenuti, 
            <a href="#contatti" class="text-primary hover:underline font-bold">contattaci</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { 
  CheckCircleIcon, 
  TrophyIcon, 
  BoltIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/solid'

// ============================================= //
// Dati reattivi per i report CAVIRO          //
// Array con informazioni bilanci annuali      //
// ============================================= //

const reports = ref([
  {
    year: 2024,
    title: 'Economia Circolare e Investimenti ESG',
    description: 'Fatturato consolidato di 385 milioni di euro, investimenti ESG di oltre 12 milioni di euro e valorizzazione di 110.000 tonnellate di sottoprodotti vitivinicoli.',
    highlights: [
      '385M€ fatturato consolidato',
      '12M€ investimenti ESG',
      '110k t sottoprodotti valorizzati'
    ],
    icon: 'trophy',
    pages: 120,
    size: '8.5 MB'
  },
  {
    year: 2023,
    title: 'Sostenibilità e Riduzione CO₂',
    description: 'Inclusione nella lista delle aziende italiane più attente al clima. Focus sulla riduzione delle emissioni di CO₂ e valorizzazione completa dei sottoprodotti.',
    highlights: [
      'Riduzione emissioni CO₂',
      'Economia circolare',
      '110k t sottoprodotti valorizzati'
    ],
    icon: 'rocket',
    pages: 115,
    size: '7.8 MB'
  },
  {
    year: 2020,
    title: 'Resilienza e Sostenibilità',
    description: 'Anno della resilienza post-pandemica con focus sulla sostenibilità sociale ed economica della filiera vitivinicola. Consolidamento del modello di economia circolare.',
    highlights: [
      'Supporto filiera',
      'Bioraffineria attiva',
      'Zero sprechi consolidato'
    ],
    icon: 'sparkles',
    pages: 108,
    size: '7.2 MB'
  }
])

// ============================================= //
// Funzione per gestire il download del report //
// In produzione, scarica il PDF effettivo     //
// ============================================= //

const downloadReport = (year) => {
  // Path del PDF - in produzione dovrebbe essere nella cartella public/reports/
  const pdfUrl = `/reports/caviro-bilancio-sostenibilita-${year}.pdf`
  
  // Messaggio informativo per l'utente
  const message = `Download del Bilancio di Sostenibilità ${year}\n\nPercorso: ${pdfUrl}\n\nNota: In questa versione demo, i file PDF non sono fisicamente disponibili. In produzione, i bilanci verrebbero scaricati automaticamente dal server.`
  
  // Conferma download (in produzione rimuovere e fare download diretto)
  if (confirm(message + '\n\nVuoi procedere con la simulazione?')) {
    try {
      // Creazione link per download
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = `CAVIRO-Bilancio-Sostenibilita-${year}.pdf`
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Messaggio di successo
      console.log(`[SUCCESS] Download avviato: Bilancio ${year}`)
    } catch (error) {
      console.warn('[WARNING] File non trovato. Assicurarsi che i PDF siano nella cartella /public/reports/')
      // In produzione, mostrare un toast/notification elegante
    }
  }
}

// ============================================= //
// Funzione per allineare altezze di titoli,   //
// descrizioni e container highlights           //
// ============================================= //

const alignReportHeights = () => {
  nextTick(() => {
    // Trova tutti gli elementi da allineare
    const titles = document.querySelectorAll('.report-title')
    const descriptions = document.querySelectorAll('.report-description')
    const highlightsContainers = document.querySelectorAll('.report-highlights-container')
    
    // Calcola l'altezza massima per ogni tipo di elemento
    let maxTitleHeight = 0
    let maxDescriptionHeight = 0
    let maxHighlightsHeight = 0
    
    titles.forEach(title => {
      const height = title.offsetHeight
      if (height > maxTitleHeight) maxTitleHeight = height
    })
    
    descriptions.forEach(desc => {
      const height = desc.offsetHeight
      if (height > maxDescriptionHeight) maxDescriptionHeight = height
    })
    
    highlightsContainers.forEach(container => {
      const height = container.offsetHeight
      if (height > maxHighlightsHeight) maxHighlightsHeight = height
    })
    
    // Applica l'altezza massima a tutti gli elementi
    titles.forEach(title => {
      title.style.minHeight = `${maxTitleHeight}px`
    })
    
    descriptions.forEach(desc => {
      desc.style.minHeight = `${maxDescriptionHeight}px`
    })
    
    highlightsContainers.forEach(container => {
      container.style.minHeight = `${maxHighlightsHeight}px`
    })
  })
}

// Allinea le altezze quando il componente è montato e quando la finestra viene ridimensionata
onMounted(() => {
  alignReportHeights()
  window.addEventListener('resize', alignReportHeights)
})

// Cleanup listener quando il componente viene smontato
onUnmounted(() => {
  window.removeEventListener('resize', alignReportHeights)
})
</script>

<style scoped>
/* ============================================= */
/* Stili ReportSection - Brand CAVIRO */
/* Pattern di sfondo e animazioni card */
/* ============================================= */

/* Pattern di sfondo per report section */
.pattern-bg-report {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238B1538' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
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

/* Effetto hover migliorato con colori brand */
.group:hover .group-hover\:text-primary {
  color: #8B1538;
}

/* Transizioni smooth */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
