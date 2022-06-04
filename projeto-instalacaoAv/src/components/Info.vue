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
  </div>
</template>

<script>
  export default{
    name: 'Info',

    data(){
      return{
        tecnologia1: 'Javascript',
        tecnologia2: 'Vue',
        tecnologia3: 'Node',
        tecnologia4: 'HTML',
        tecnologia5: 'CSS',
        status_trabalho: true,
        teste_show: true
      }
    }
  }

</script>