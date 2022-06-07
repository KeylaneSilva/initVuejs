<template>
  <div>
    <h1>Meu nome é {{ nome }}</h1>
    <!-- passando por props -->
    <Info :email="email" :status_trabalho="status_trabalho"/>
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
        nome: 'Keylane',
        email: 'keylane@gmail.com',
        status_trabalho: true
      }
    }
  }

</script>