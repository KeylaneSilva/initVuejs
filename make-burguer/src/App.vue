<template>
  <div>
    <Navabar/>
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
    }
  }
</script>

<style>

</style>
