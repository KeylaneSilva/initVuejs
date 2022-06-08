<template>
  <div>
    <Navabar :logo="img_logo" :alt="alt_name"/>
    <div>
      <RouterView/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Navabar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default{
    name: 'App',

    components:{
      Navabar,
      Footer
    },

    data(){
      return{
        img_logo: '/img/logo.png',
        alt_name: 'Imagem de logo de um hamburguer'
      }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    font-family: Helvetica;
  }

  .main-container {
    margin: 50px;
    min-height: 350px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
