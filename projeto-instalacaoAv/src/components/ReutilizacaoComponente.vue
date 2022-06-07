<template>
  <div>
    <button  @click="verificar()">Add ao carinho</button>
    <p v-show="adicionado">{{ verify }}</p>
  </div>
</template>

<script>
  export default{
    name: 'ReutilizacaoComponente',

    data(){
      return{
        adicionado: false,
        verify: ''
      }
    },

    methods:{
      verificar(e){
        this.adicionado = !this.adicionado
        console.log(this.verify)
        if(this.adicionado === true){
          this.verify = 'Adicionado'
        }
      }
    }
  }
</script>

<style scoped>
  div{
    display: flex;
  }
</style>