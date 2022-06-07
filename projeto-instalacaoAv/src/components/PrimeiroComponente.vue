<template>
  <div>
    <h1>Primeiro Componente com Vue</h1>
    <p>Meu nome é {{ nome }} e sou {{ profissao }}</p>
    <MultiplosEventos/>
  </div>
</template>

<!-- exportar componente -->
<script>
  import MultiplosEventos from './MultiplosEventos.vue'

  export default {
    name: 'PrimeiroComponente',

    components:{
      MultiplosEventos
    },

    data(){
      return{
        nome: 'Keylane',
        profissao: 'Desenvolvedora'
      }
    }
  }
</script>