<template>
  <div>
    <hr>
    <h1>Ciclo de vida Hooks</h1>
    <h2>O nome é: {{ nome }}</h2>
    <h2>O nome é: {{ cont }}</h2>
  </div>
</template>

<script>
import { onBeforeUpdate } from 'vue'

  export default{
    name: 'LifeCicleStyle',

    data(){
      return{
        nome: 'Ainda não sei',
        cont: 0
      }
    },

    beforeCreate(){
      console.log('É executado no momento da inicialização do componente, data(dados), que ainda não estão reativos, e o events (eventos) ainda não foram configurados')
    },

    // cicle de vida hooks
    created(){
      // setInterval(() => {
      //   this.cont++

      // }, 1000)
      
      setTimeout(() => {
        this.nome = 'Com o created você já é capaz de acessar data e evets reativos que estão ativos com o gancho created. Os modelos de DOM Virtual ainda não foram montados e nem renderizados'

      }, 2000)
    },

    beforeMount(){
      this.nome = 'É executado imediatamente antes da renderização inicial acontecer e depois que o modelo ou funções de renderização forem compilados'
    },

    mounted(){
      setTimeout(() => {
        this.nome = 'Você terá acesso completo ao componente reativo, modelos e DOM renderizado (via this.$el).'

      }, 3000)
    }

  }

</script>