<template>
  <div>
    <button @click="Event1(text1),Event2(text2), Limpar()">Ativar eventos</button>
    <p>{{mult_eventos}}</p>
  </div>
</template>

<script>
  export default{
    name: 'MultiplosEventos',

    data(){
      return{
        mult_eventos: '',
        text1: 'Primeiro Evento',
        text2: 'Segundo Evento'
      }
    },

    methods:{
      Event1(text1, e){
        this.mult_eventos = text1
      },
      Event2(text2, e){
        setTimeout(() => this.mult_eventos = text2, 2000)
      },
      Limpar(e){
        setTimeout(() =>  this.mult_eventos = '', 3000)

      }
    }
  }

</script>

<style scoped>
  div{
    padding: 50px;
  }
</style>