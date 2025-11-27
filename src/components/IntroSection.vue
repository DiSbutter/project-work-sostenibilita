<template>
  <!-- ============================================= -->
  <!-- Sezione "Il Gruppo CAVIRO" -->
  <!-- Brand compliant: Storytelling autentico del Gruppo -->
  <!-- Colori, font e layout secondo brand manual -->
  <!-- ============================================= -->
  <section id="chi-siamo" class="py-20 bg-white relative overflow-hidden">
    <!-- Pattern decorativo di sfondo con colori brand -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-light rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-light rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>
    
    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      <!-- Titolo della sezione con font Merriweather -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          Il Gruppo CAVIRO
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p class="text-xl text-text-secondary mt-4 font-body max-w-2xl mx-auto">
          La più grande cooperativa vitivinicola d'Italia
        </p>
      </div>
      
      <!-- Contenuto principale con layout a due colonne -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Testo descrittivo con font Lato -->
        <div class="prose prose-lg text-neutral-600 leading-relaxed animate-slide-in-left font-body">
          <p class="mb-6 text-lg">
            <strong class="text-primary text-xl font-bold">Gruppo CAVIRO</strong> è la principale cooperativa 
            vitivinicola italiana, punto di riferimento per oltre 35.000 viticoltori soci 
            che lavorano su oltre 36.000 ettari di vigneti in 13 regioni italiane.
          </p>
          
          <p class="mb-6">
            Fondata nel 1963 a Faenza, CAVIRO rappresenta un modello unico di <strong class="text-primary">economia circolare</strong> 
            applicata al settore vitivinicolo: ogni sottoprodotto della vinificazione viene 
            trasformato in nuove risorse, dal bioetanolo all'energia rinnovabile, dai fertilizzanti 
            ai cosmetici naturali.
          </p>
          
          <p class="mb-6">
            Con un fatturato di oltre 300 milioni di euro, il Gruppo è presente sul mercato 
            con brand storici come <strong class="text-primary">Tavernello</strong>, il vino più venduto al mondo, 
            e sviluppa prodotti innovativi nel rispetto della sostenibilità ambientale e sociale.
          </p>
          
          <p class="mb-6">
            La <strong class="text-primary">trasparenza</strong> è un valore fondante: ogni anno pubblichiamo 
            il Bilancio di Sostenibilità per condividere con stakeholder, soci e comunità i nostri 
            progressi verso gli obiettivi ESG (Environmental, Social, Governance) e gli impegni 
            per un futuro sostenibile.
          </p>
        </div>
        
        <!-- Card illustrativa con colori brand CAVIRO -->
        <div class="animate-slide-in-right">
          <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 shadow-2xl text-white transform hover:scale-105 transition-transform duration-300">
            <div class="text-center">
              <FireIcon class="w-16 h-16 mx-auto mb-6 animate-float" />
              <h3 class="text-2xl font-heading font-bold mb-4">La Nostra Missione</h3>
              <p class="text-neutral-50 leading-relaxed mb-6 font-body">
                Valorizzare il lavoro dei viticoltori italiani, produrre vini di qualità 
                e trasformare ogni risorsa in valore attraverso l'economia circolare, 
                costruendo un futuro sostenibile per il territorio e le comunità.
              </p>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div class="text-3xl font-heading font-bold">35k+</div>
                  <div class="text-sm text-neutral-100 font-body">Viticoltori Soci</div>
                </div>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div class="text-3xl font-heading font-bold">13</div>
                  <div class="text-sm text-neutral-100 font-body">Regioni Italiane</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Valori chiave con brand CAVIRO -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <!-- Valore 1: Economia Circolare -->
        <div class="text-center p-8 bg-gradient-to-br from-neutral-50 to-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-light hover:border-primary">
          <ArrowPathIcon class="w-12 h-12 mx-auto mb-4 text-primary animate-pulse-slow" />
          <h3 class="font-heading font-bold text-xl text-secondary mb-3">Economia Circolare</h3>
          <p class="text-text-secondary leading-relaxed font-body">
            Zero sprechi: ogni sottoprodotto diventa una nuova risorsa. 
            Dal bioetanolo all'energia, dal compost ai cosmetici.
          </p>
        </div>
        
        <!-- Valore 2: Cooperazione -->
        <div class="text-center p-8 bg-gradient-to-br from-neutral-50 to-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-light hover:border-primary">
          <UserGroupIcon class="w-12 h-12 mx-auto mb-4 text-primary animate-pulse-slow" style="animation-delay: 0.2s" />
          <h3 class="font-heading font-bold text-xl text-secondary mb-3">Cooperazione</h3>
          <p class="text-text-secondary leading-relaxed font-body">
            Un modello unico che unisce 35.000 viticoltori in un progetto 
            comune di valorizzazione del territorio e del lavoro agricolo.
          </p>
        </div>
        
        <!-- Valore 3: Innovazione -->
        <div class="text-center p-8 bg-gradient-to-br from-neutral-50 to-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-light hover:border-primary">
          <BeakerIcon class="w-12 h-12 mx-auto mb-4 text-primary animate-pulse-slow" style="animation-delay: 0.4s" />
          <h3 class="font-heading font-bold text-xl text-secondary mb-3">Innovazione Sostenibile</h3>
          <p class="text-text-secondary leading-relaxed font-body">
            Ricerca continua per tecnologie pulite, processi efficienti 
            e prodotti innovativi nel rispetto dell'ambiente.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ArrowPathIcon, 
  UserGroupIcon, 
  BeakerIcon,
  FireIcon
} from '@heroicons/vue/24/solid'

// ============================================= //
// IntroSection - Logica componente           //
// Componente puramente presentazionale       //
// Animazioni gestite tramite Tailwind CSS   //
// ============================================= //
</script>

<style scoped>
/* ============================================= */
/* Stili IntroSection - Brand CAVIRO */
/* Animazioni e layout responsive */
/* ============================================= */

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

/* Animazione float per icona */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
