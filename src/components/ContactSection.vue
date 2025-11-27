<template>
  <!-- ============================================= -->
  <!-- Sezione Contatti - Gruppo CAVIRO -->
  <!-- Form di contatto e informazioni -->
  <!-- Brand compliant con colori P 7645C e P 209C -->
  <!-- ============================================= -->
  <section id="contatti" class="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-light rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
    
    <div class="container mx-auto px-4 max-w-5xl relative z-10">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          Contattaci
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto font-body">
          Hai domande sul nostro impegno per la sostenibilità? 
          Il team CAVIRO è a tua disposizione
        </p>
      </div>
      
      <!-- Layout a due colonne -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Form di contatto -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border-2 border-light">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Campo Nome -->
            <div>
              <label 
                for="name" 
                class="block text-sm font-body font-bold text-secondary mb-2"
              >
                Nome Completo *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:border-accent font-body"
                placeholder="Il tuo nome"
              />
            </div>
            
            <!-- Campo Email -->
            <div>
              <label 
                for="email" 
                class="block text-sm font-body font-bold text-secondary mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:border-accent font-body"
                placeholder="tua.email@esempio.com"
              />
            </div>
            
            <!-- Campo Azienda -->
            <div>
              <label 
                for="company" 
                class="block text-sm font-body font-bold text-secondary mb-2"
              >
                Azienda/Organizzazione
              </label>
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:border-accent font-body"
                placeholder="Nome azienda (opzionale)"
              />
            </div>
            
            <!-- Campo Messaggio -->
            <div>
              <label 
                for="message" 
                class="block text-sm font-body font-bold text-secondary mb-2"
              >
                Messaggio *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="6"
                class="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none hover:border-accent font-body"
                placeholder="Scrivi qui il tuo messaggio..."
              ></textarea>
            </div>
            
            <!-- Messaggio di conferma -->
            <div 
              v-if="showConfirmation"
              class="bg-gradient-to-r from-light to-accent/20 border-2 border-primary text-primary px-6 py-4 rounded-lg animate-slide-up"
            >
              <div class="flex items-center space-x-3">
                <span class="text-2xl">✓</span>
                <div class="font-body">
                  <p class="font-bold">Messaggio inviato con successo!</p>
                  <p class="text-sm text-secondary">Ti risponderemo al più presto.</p>
                </div>
              </div>
            </div>
            
            <!-- Pulsante di invio -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-body font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              <span class="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Invia Messaggio</span>
              </span>
            </button>
          </form>
        </div>
        
        <!-- Informazioni di contatto -->
        <div class="space-y-6">
          <!-- Card informazioni principali -->
          <div class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-xl">
            <h3 class="text-2xl font-heading font-bold mb-6">Informazioni di Contatto</h3>
            <div class="space-y-6 font-body">
              <!-- Sede legale -->
              <div class="flex items-start space-x-4">
                <div class="text-3xl">🏢</div>
                <div>
                  <h4 class="font-bold mb-1">Sede Legale</h4>
                  <p class="text-neutral-50">
                    Via Convertite 12<br>
                    48018 Faenza (RA), Italia
                  </p>
                </div>
              </div>
              
              <!-- Telefono -->
              <div class="flex items-start space-x-4">
                <div class="text-3xl">📞</div>
                <div>
                  <h4 class="font-bold mb-1">Telefono</h4>
                  <p class="text-neutral-50">
                    +39 0546 642111<br>
                    <span class="text-sm">Lun-Ven 8:30-12:30 / 14:00-18:00</span>
                  </p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="text-3xl">✉️</div>
                <div>
                  <h4 class="font-bold mb-1">Email</h4>
                  <p class="text-neutral-50">
                    info@gruppocaviro.com<br>
                    sostenibilita@gruppocaviro.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Card orari e note -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-light">
            <h3 class="text-xl font-heading font-bold text-secondary mb-4">Orari Uffici</h3>
            <div class="space-y-2 text-text-secondary font-body">
              <div class="flex justify-between">
                <span>Lunedì - Venerdì</span>
                <span class="font-bold">8:30 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span>Sabato - Domenica</span>
                <span class="font-bold text-neutral-400">Chiuso</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-neutral-200">
              <p class="text-sm text-text-secondary font-body">
                <strong class="text-primary">Nota:</strong> Per visite in sede è richiesto appuntamento.
              </p>
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
// ContactSection - Logica form contatto      //
// Gestione stato e invio dati               //
// ============================================= //

// Oggetto reattivo per i dati del form
const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

// Stato per mostrare il messaggio di conferma
const showConfirmation = ref(false)

// Funzione che gestisce l'invio del form
const handleSubmit = () => {
  // In produzione, qui invieremmo i dati al backend con fetch/axios
  console.log('📧 Dati form inviati:', formData.value)
  
  // Esempio di chiamata API (da implementare in produzione):
  /*
  fetch('https://api.gruppocaviro.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData.value)
  })
  .then(response => response.json())
  .then(data => {
    showConfirmation.value = true
    setTimeout(() => resetForm(), 5000)
  })
  .catch(error => {
    console.error('Errore invio form:', error)
  })
  */
  
  // Mostra messaggio di conferma
  showConfirmation.value = true
  
  // Reset del form dopo 5 secondi
  setTimeout(() => {
    resetForm()
  }, 5000)
}

// Funzione per resettare il form
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    company: '',
    message: ''
  }
  showConfirmation.value = false
}
</script>

<style scoped>
/* ============================================= */
/* Stili ContactSection - Brand CAVIRO */
/* Animazioni e interazioni form */
/* ============================================= */

/* Animazione per il messaggio di conferma */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.4s ease-out;
}

/* Focus visibile per accessibilità */
input:focus,
textarea:focus,
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Transizioni smooth per gli input */
input, textarea {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
</style>
