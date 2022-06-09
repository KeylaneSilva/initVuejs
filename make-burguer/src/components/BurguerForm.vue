<template>
  <div>
    <p>uma mensagem aqui</p>
    <div>
      <form action="" id="burger-form">
        <div class="input-container">
          <label for="nome">Nome do cliente:</label>
          <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
        </div>
         <div class="input-container">
          <label for="pao">Escolha o seu pão:</label>
          <select name="pao" id="pao">
            <option value="">Escolha o seu pão</option>
            <option value="">Pão de Batata</option>
            <option value="">Pão de Queijo</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'BurguerForm'
  }
</script>

<style scoped>

</style>