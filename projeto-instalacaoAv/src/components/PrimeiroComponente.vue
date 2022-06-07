<template>
  <div>
    <h1>Primeiro Componente com Vue</h1>
    <p>Meu nome é {{ nome }} e sou {{ profissao }}</p>
    <MultiplosEventos/>
    <ReutilizacaoComponente/>
    <ReutilizacaoComponente/>
    <ReutilizacaoComponente/>
  </div>
</template>

<!-- exportar componente -->
<script>
  import ReutilizacaoComponente from './ReutilizacaoComponente.vue'
  import MultiplosEventos from './MultiplosEventos.vue'

  export default {
    name: 'PrimeiroComponente',

    components:{
      MultiplosEventos,
      ReutilizacaoComponente
    },

    data(){
      return{
        nome: 'Keylane',
        profissao: 'Desenvolvedora'
      }
    }
  }
</script>