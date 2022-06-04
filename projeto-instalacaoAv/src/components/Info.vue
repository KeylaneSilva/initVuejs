<template>
  <div>
    <p>Estou trabalhando e estudando</p>
    <p>Algumas das tecnologias</p>
    <ul>
      <li>{{tecnologia1}}</li>
      <li>{{tecnologia2}}</li>
      <li>{{tecnologia3}}</li>
      <li>{{tecnologia4}}</li>
      <li>{{tecnologia5}}</li>
    </ul>
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
      }
    }
  }

</script>