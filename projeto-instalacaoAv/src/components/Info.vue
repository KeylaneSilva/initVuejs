<template>
  <div>
    <p v-if="status_trabalho">Estou trabalhando e estudando no momento</p>
    <p v-else>Não estou trabalhando e nem estudando no momento</p>
    <p>Algumas das tecnologias</p>
    <ul>
      <li>{{tecnologia1}}</li>
      <li>{{tecnologia2}}</li>
      <li>{{tecnologia3}}</li>
      <li>{{tecnologia4}}</li>
      <li>{{tecnologia5}}</li>
    </ul>
    <p v-show="teste_show">Testando o v-show (parecido com o if só que não tem o else)</p>
    <p>Clique aqui para ir para o <a v-bind:href="meu_link" target="_blank">link do google</a></p>
    <Picture/>

  </div>
</template>

<script>
  import Picture from './Picture.vue'

  export default{
    name: 'Info',

    components: {
      Picture
    },

    data(){
      return{
        tecnologia1: 'Javascript',
        tecnologia2: 'Vue',
        tecnologia3: 'Node',
        tecnologia4: 'HTML',
        tecnologia5: 'CSS',
        status_trabalho: true,
        teste_show: true,
        meu_link: 'https://www.google.com.br/'
      }
    }
  }

</script>