<template>
  <div>
    <ul>
      <li>Inicio</li>
      <li>Home</li>
      <li>Contato</li>
      <li>Quem somos</li>
      <li>Faça seu orçamento</li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'Header',

    data(){
      return{

      }
    }
  }

</script>

<style scoped>
  ul{
    list-style-type: none; /* tira o estilo da lista*/
    display: flex;
    justify-content: end;

  }
  li{
    margin-right: 75px;
    cursor: pointer;
  }
  li:hover{
    color: green;
    transform: translateX(15px) scale(1.2); /* animação */
  }
</style>