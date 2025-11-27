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
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Intestazione con gradiente brand -->
          <div class="bg-gradient-to-br from-primary via-accent to-light p-8 text-white relative overflow-hidden">
            <!-- Pattern decorativo -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div class="relative z-10">
              <div class="text-5xl mb-4">{{ report.icon }}</div>
              <h3 class="text-3xl font-heading font-bold mb-2">{{ report.year }}</h3>
              <p class="text-sm text-neutral-50 font-body font-medium">Bilancio di Sostenibilità</p>
            </div>
          </div>
          
          <!-- Contenuto della card -->
          <div class="p-6">
            <h4 class="font-heading font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">
              {{ report.title }}
            </h4>
            
            <p class="text-text-secondary font-body text-sm mb-6 leading-relaxed min-h-[60px]">
              {{ report.description }}
            </p>
            
            <!-- Highlights principali -->
            <ul class="space-y-3 mb-6">
              <li 
                v-for="(highlight, index) in report.highlights" 
                :key="index"
                class="text-sm text-neutral-700 flex items-start bg-light rounded-lg p-2"
              >
                <span class="text-primary mr-3 font-bold text-lg">✓</span>
                <span class="flex-1 font-body">{{ highlight }}</span>
              </li>
            </ul>
            
            <!-- Pulsante download con brand style -->
            <button
              @click="downloadReport(report.year)"
              class="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-body font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>📥</span>
              <span>Scarica Report PDF</span>
            </button>
            
            <!-- Info aggiuntive -->
            <div class="mt-4 text-center text-xs text-text-secondary font-body">
              <span>📄 PDF • {{ report.pages }} pagine • {{ report.size }}</span>
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
import { ref } from 'vue'

// ============================================= //
// Dati reattivi per i report CAVIRO          //
// Array con informazioni bilanci annuali      //
// ============================================= //

const reports = ref([
  {
    year: 2023,
    title: 'Economia Circolare: Il Futuro è Qui',
    description: 'Risultati straordinari nell\'economia circolare con 260k tonnellate di CO₂ evitate e 100% di valorizzazione dei sottoprodotti.',
    highlights: [
      '260k t CO₂ evitate',
      '100% economia circolare',
      'Certificazione Equalitas rinnovata'
    ],
    icon: '🏆',
    pages: 120,
    size: '8.5 MB'
  },
  {
    year: 2022,
    title: 'Innovazione e Territorio',
    description: 'Focus sull\'innovazione tecnologica e il supporto ai 35.000 viticoltori soci, con investimenti in agricoltura di precisione.',
    highlights: [
      '35k+ viticoltori supportati',
      'Agricoltura 4.0',
      'Valorizzazione territorio'
    ],
    icon: '🚀',
    pages: 115,
    size: '7.8 MB'
  },
  {
    year: 2021,
    title: 'Resilienza e Sostenibilità',
    description: 'Anno della resilienza post-pandemica con focus sulla sostenibilità sociale ed economica della filiera vitivinicola.',
    highlights: [
      'Supporto filiera',
      'Bioraffineria potenziata',
      'Zero sprechi consolidato'
    ],
    icon: '🌱',
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
  const message = `📥 Download del Bilancio di Sostenibilità ${year}\n\nPercorso: ${pdfUrl}\n\nNota: In questa versione demo, i file PDF non sono fisicamente disponibili. In produzione, i bilanci verrebbero scaricati automaticamente dal server.`
  
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
      console.log(`✅ Download avviato: Bilancio ${year}`)
    } catch (error) {
      console.warn('⚠️ File non trovato. Assicurarsi che i PDF siano nella cartella /public/reports/')
      // In produzione, mostrare un toast/notification elegante
    }
  }
}
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
