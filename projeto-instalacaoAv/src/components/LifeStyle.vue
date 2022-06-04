<template>
  <div>
    <h1>Ciclo de vida Hooks</h1>
    <h2>O nome é: {{ nome }}</h2>
    <h2>O nome é: {{ cont }}</h2>
  </div>
</template>

<script>

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

    beforeMounted(){
      console.log('É executado imediatamente antes da renderização inicial acontecer e depois que o modelo ou funções de renderização forem compilados')
    },

    mounted(){
      setTimeout(() => {
        this.nome = 'Você terá acesso completo ao componente reativo, modelos e DOM renderizado (via this.$el)'

      }, 3000)
    },

    beforeUpdate(){
      console.log('O gancho beforeUpdate é executado após dados serem alterados em seu componente e o ciclo de atualização começa, logo antes do DOM ser corrigido e re-renderizado.Use beforeUpdate se precisar obter o novo estado de qualquer dado reativo em seu componente antes dele ser de fato renderizado')
    },

    updated(){
      setTimeout(() => {
        this.nome = 'O gancho é executado após dados em seu componente sofrem alteração e o DOM renderizar'
      })
    },

    beforeDestroy(){
      console.log('É acionado imediatamente antes da destruição. Seu componente ainda estará totalmente presente e funcional')
    },

    destroyed(){
      console.log('Ao chegar nesse componente destroyed, nada terá sobrado em seu componente. Use o destroyed para fazer qualquer limpeza de última hora ou informar um servidor remoto que o componente foi destruido')
    }

  }

</script>