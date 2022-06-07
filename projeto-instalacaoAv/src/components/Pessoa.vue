<template>
  <div>
    <h1>Meu nome é {{ nome }}</h1>
    <Info/>
    <Form/>
  </div>
</template>

<script>
  import Info from './Info.vue'
  import Form from './Form/InputTex.vue'

  export default{
    name: 'Pessoa',

    components:{
      Info,
      Form
    },

    data(){
      return{
        nome: 'Keylane'
      }
    }
  }

</script>