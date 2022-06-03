<template>
  <div>
    <h1>Primeiro Componente com Vue</h1>
    <p>Meu nome é {{ nome }} e sou {{ profissao }}</p>
  </div>
</template>

<!-- exportar componente -->
<script>
  export default {
    name: 'PrimeiroComponente',

    data(){
      return{
        nome: 'Keylane',
        profissao: 'Desenvolvedora'
      }
    }
  }
</script>