<template>
  <div>
    <input type="submit" value="Enviar" @click="Enviar">
  </div>
</template>

<script>
  export default{
    name: 'InputSubmit',

    methods: {
      Enviar(e){
        alert('Dados enviados')
        e.preventDefault()
      }
    }
  }

</script>