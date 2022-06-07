<template>
  <div>
    <div>
      <form action="" @submit="EnviarDados">
        <div>
          <input type="text" v-model="nUsuario" placeholder="digite alguma coisa">
        </div>
        <div>
          <input type="text" v-model="nEmail" placeholder="digite alguma coisa">
        </div>
        <InputSubmit/>
      </form>
    </div>
    <div>
      <h3>Informações Digitadas</h3>
      <p>Informação 1: {{nUsuario}}</p>
      <p>Informação 2: {{nEmail}}</p>
    </div>
  </div>

</template>

<script>
  import InputSubmit from './InputSubmit.vue'

  export default{
    name: 'InputText',

    components:{
      InputSubmit
    },

    data(){
      return{
        nUsuario: '',
        nEmail: ''
      }
    },
    methods: {
      EnviarDados(e){
        console.log('Nome:' + this.nUsuario)
        console.log('Email:' + this.nEmail)

        e.preventDefault()
      }
    }
  }
</script>