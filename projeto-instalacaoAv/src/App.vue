<template>
  <div>
    <PrimeiroComponente/>
    <p>{{ teste }}</p>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente
    },

    data(){
      return{
        teste: 'Posso usar componente aqui também'
      }
    }
  }
</script>