<template>
  <div>
    <hr>
    <h1>Ciclo de vida Hooks</h1>
    <h2>O nome é: {{ nome }}</h2>
  </div>
</template>

<script>
  export default{
    name: 'LifeCicleStyle',

    data(){
      return{
        nome: 'Ainda não sei'
      }
    },

    // cicle de vida hooks
    created(){
      setTimeout(() => {
        this.nome = 'Keylane'

      }, 1000)
    },

    mounted(){
      setTimeout(() => {
        this.nome = 'Ricardo'

      }, 2000)
    }
  }

</script>