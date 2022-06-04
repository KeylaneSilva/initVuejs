<template>
  <div>
    <div>
      <form>
        <div>
          <input type="text" v-model="nome_1" placeholder="digite alguma coisa">
        </div>
        <div>
          <input type="text" v-model="nome_2" placeholder="digite alguma coisa">
        </div>
        <InputSubmit/>
      </form>
    </div>
    <div>
      <h3>Informações Digitadas</h3>
      <p>Informação 1: {{nome_1}}</p>
      <p>Informação 2: {{nome_2}}</p>
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
        nome_1: '',
        nome_2: ''
      }
    }
  }
</script>