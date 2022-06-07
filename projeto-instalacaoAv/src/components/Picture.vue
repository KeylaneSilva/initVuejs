<template>
  <div>
    <img :src="picture" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem"/>
  </div>
</template>

<script>
  import MudarImagem from './MudarImagem.vue'
  export default{
    name: 'Picture',

    components:{
      MudarImagem
    },

    data(){
      return{
        picture: '/img/avatar.png',
        descricao: 'Keyane Silva'
      }
    },

    methods:{
      trocarImagem(e){
        this.picture = '/img/avatar2.png'
      }
    }
  }

</script>