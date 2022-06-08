<template>
  <div id="footer">
    <p>Make Burguer &copy; 2022</p>
  </div>
</template>

<script>
  export default{
    name: 'Footer'
  }

</script>

<style scoped>
  #footer{
    height: 200px;
    background: #222;
    border-top: 4px solid #111;
    color: #fcba03;
    display: flex;
    align-items: center; /* alinha na vertical */
    justify-content: center; /* alinha na horizontal */
    width: 100%;
    position: absolute;
    bottom: 0;

  }
</style>