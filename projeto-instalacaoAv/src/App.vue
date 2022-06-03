<template>
  <div>
    <PrimeiroComponente/>
    <p>{{ teste }}</p>
    <LifeCicleStyle />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCicleStyle from './components/LifeStyle.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCicleStyle
    },

    data(){
      return{
        teste: 'Posso usar componente aqui também'
      }
    }
  }
</script>