<template>
  <div>
    <PrimeiroComponente/>
    <p>{{ teste }}</p>
    <Linha/>
    <LifeCicleStyle />
    <Linha/>
    <Pessoa/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCicleStyle from './components/LifeStyle.vue'
  import Linha from './components/Linha.vue'
  import Pessoa from './components/Pessoa.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCicleStyle,
      Linha,
      Pessoa
    },

    data(){
      return{
        teste: 'Posso usar componente aqui também'
      }
    }
  }
</script>