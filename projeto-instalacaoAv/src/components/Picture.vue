<template>
  <div>
    <img :src="picture" :alt="descricao">
  </div>
</template>

<script>
  export default{
    name: 'Picture',
    data(){
      return{
        picture: '/img/avatar.png',
        descricao: 'Keyane Silva'
      }
    }
  }

</script>