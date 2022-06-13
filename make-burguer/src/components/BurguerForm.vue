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

        <div class="input-container">
          <label for="carne">Escolha o sua carne:</label>
          <select name="carne" id="carne">
            <option value="">Escolha a carne do seu burguer</option>
            <option value="">Maminha</option>
            <option value="">Vegana</option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label for="opcionais" id="opcionais-title">Selecione seus opcionais:</label>
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="Salame">
            <span>Salame</span>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Crie seu burger!">
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
  #burger-form{
    max-width: 400px;
    margin: 0 auto; /* centraliza o conteudo0 */
  }

  .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input, select{
    padding:  5px 10px; /* aumenta a area interna */
    width: 300px;
  }

  #opcionais-container{
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title{
    width: 100%;
  }

  .checkbox-container{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
  }

  .submit-btn {
  background-color: #222;
  color:#fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  /* margin: 0 auto; */
  cursor: pointer;
  transition: .5s;
  }
  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>