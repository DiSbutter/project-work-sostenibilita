<template>
  <!-- Sezione "Contatti" -->
  <section id="contatti" class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-3xl">
      <!-- Titolo della sezione -->
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Contattaci
      </h2>
      
      <!-- Sottotitolo -->
      <p class="text-center text-gray-600 mb-12">
        Hai domande sul nostro impegno per la sostenibilità? Scrivici!
      </p>
      
      <!-- Form di contatto -->
      <!-- @submit.prevent impedisce il reload della pagina -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Campo Nome -->
        <div>
          <label 
            for="name" 
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Nome *
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Il tuo nome completo"
          />
        </div>
        
        <!-- Campo Email -->
        <div>
          <label 
            for="email" 
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="tua.email@esempio.com"
          />
        </div>
        
        <!-- Campo Messaggio -->
        <div>
          <label 
            for="message" 
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Messaggio *
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Scrivi qui il tuo messaggio..."
          ></textarea>
        </div>
        
        <!-- Messaggio di conferma -->
        <div 
          v-if="showConfirmation"
          class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
        >
          ✓ Grazie per averci contattato! Ti risponderemo al più presto.
        </div>
        
        <!-- Pulsante di invio -->
        <button
          type="submit"
          class="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          📧 Invia Messaggio
        </button>
      </form>
      
      <!-- Informazioni di contatto alternative -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <div class="text-3xl mb-2">📍</div>
          <h3 class="font-semibold text-gray-800">Indirizzo</h3>
          <p class="text-sm text-gray-600">Via delle Colline 123<br>50100 Firenze, Italia</p>
        </div>
        
        <div>
          <div class="text-3xl mb-2">📞</div>
          <h3 class="font-semibold text-gray-800">Telefono</h3>
          <p class="text-sm text-gray-600">+39 055 1234567<br>Lun-Ven 9:00-18:00</p>
        </div>
        
        <div>
          <div class="text-3xl mb-2">✉️</div>
          <h3 class="font-semibold text-gray-800">Email</h3>
          <p class="text-sm text-gray-600">info@agribio.it<br>sostenibilita@agribio.it</p>
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
  // Per ora, simuliamo l'invio mostrando un messaggio di conferma
  
  console.log('Dati form inviati:', formData.value)
  
  // Mostro il messaggio di conferma
  showConfirmation.value = true
  
  // Reset del form dopo 3 secondi
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
    showConfirmation.value = false
  }, 3000)
}
</script>

<style scoped>
/* Focus visibile per accessibilità */
input:focus,
textarea:focus,
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
