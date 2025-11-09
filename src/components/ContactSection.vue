<template>
  <!-- Sezione "Contatti" migliorata -->
  <!-- Questa sezione permette agli utenti di contattare l'azienda per informazioni sui report -->
  <section id="contatti" class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Pattern decorativo di sfondo -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
    
    <div class="container mx-auto px-4 max-w-5xl relative z-10">
      <!-- Titolo della sezione -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contattaci
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Hai domande sul nostro impegno per la sostenibilità? 
          Siamo qui per rispondere alle tue curiosità!
        </p>
      </div>
      
      <!-- Layout a due colonne -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Form di contatto -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
          <!-- @submit.prevent impedisce il reload della pagina -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Campo Nome -->
            <div>
              <label 
                for="name" 
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Nome *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:border-green-400"
                placeholder="Il tuo nome completo"
              />
            </div>
            
            <!-- Campo Email -->
            <div>
              <label 
                for="email" 
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:border-green-400"
                placeholder="tua.email@esempio.com"
              />
            </div>
            
            <!-- Campo Messaggio -->
            <div>
              <label 
                for="message" 
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Messaggio *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="6"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none hover:border-green-400"
                placeholder="Scrivi qui il tuo messaggio..."
              ></textarea>
            </div>
            
            <!-- Messaggio di conferma migliorato -->
            <div 
              v-if="showConfirmation"
              class="bg-gradient-to-r from-green-50 to-light border-2 border-primary text-green-800 px-6 py-4 rounded-xl animate-slide-up"
            >
              <div class="flex items-center space-x-3">
                <span class="text-2xl">✓</span>
                <div>
                  <p class="font-semibold">Messaggio inviato con successo!</p>
                  <p class="text-sm">Ti risponderemo al più presto.</p>
                </div>
              </div>
            </div>
            
            <!-- Pulsante di invio migliorato -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              <span class="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Invia Messaggio</span>
              </span>
            </button>
          </form>
        </div>
        
        <!-- Informazioni di contatto alternative migliorate -->
        <div class="space-y-6">
          <!-- Card informazioni -->
          <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl">
            <h3 class="text-2xl font-bold mb-6">Informazioni di Contatto</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="text-3xl">📍</div>
                <div>
                  <h4 class="font-semibold mb-1">Indirizzo</h4>
                  <p class="text-green-100">
                    Via delle Colline 123<br>
                    50100 Firenze, Italia
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-3xl">📞</div>
                <div>
                  <h4 class="font-semibold mb-1">Telefono</h4>
                  <p class="text-green-100">
                    +39 055 1234567<br>
                    <span class="text-sm">Lun-Ven 9:00-18:00</span>
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-3xl">✉️</div>
                <div>
                  <h4 class="font-semibold mb-1">Email</h4>
                  <p class="text-green-100">
                    info@agribio.it<br>
                    sostenibilita@agribio.it
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Card orari -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Orari di Apertura</h3>
            <div class="space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span>Lunedì - Venerdì</span>
                <span class="font-semibold">9:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span>Sabato</span>
                <span class="font-semibold">9:00 - 13:00</span>
              </div>
              <div class="flex justify-between">
                <span>Domenica</span>
                <span class="font-semibold text-gray-400">Chiuso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Oggetto reattivo per i dati del form
// v-model sincronizza automaticamente questi valori con gli input
const formData = ref({
  name: '',
  email: '',
  message: ''
})

// Stato per mostrare il messaggio di conferma
const showConfirmation = ref(false)

// Funzione che gestisce l'invio del form
const handleSubmit = () => {
  // In un'applicazione reale, qui invieremmo i dati al backend
  // utilizzando fetch o axios per una chiamata API
  // Per ora, simuliamo l'invio mostrando un messaggio di conferma
  
  console.log('Dati form inviati:', formData.value)
  
  // Esempio di chiamata API (commentato per demo):
  /*
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData.value)
  })
  .then(response => response.json())
  .then(data => {
    showConfirmation.value = true
    // Reset form dopo conferma
    setTimeout(() => {
      resetForm()
    }, 5000)
  })
  .catch(error => {
    console.error('Errore:', error)
    // Mostrare messaggio di errore
  })
  */
  
  // Mostro il messaggio di conferma
  showConfirmation.value = true
  
  // Reset del form dopo 5 secondi (tempo aumentato per migliore UX)
  setTimeout(() => {
    resetForm()
  }, 5000)
}

// Funzione per resettare il form
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
  showConfirmation.value = false
}
</script>

<style scoped>
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
