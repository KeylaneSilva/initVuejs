<template>
  <div>
    <p v-if="status_trabalho">Estou trabalhando e estudando no momento</p>
    <p v-else>Não estou trabalhando e nem estudando no momento</p>
    <p>Algumas das tecnologias front-end</p>
    <ul>
      <li v-for="(tecnologias, index) in tec_front" v-bind:key="index" >
        {{tecnologias}}
      </li>
    </ul>
    <p>Algumas tecnologias back-end</p>
    <ul>
      <li v-for="tecnologias in tec_back" :key="tecnologias.id">
        {{tecnologias.linguagem}}
      </li>
    </ul>
    <p v-show="teste_show">Testando o v-show (parecido com o if só que não tem o else)</p>
    <button @click="botao">{{nome_botao}}</button>
    <p v-show="link_botao">Clique aqui para ir para o <a v-bind:href="meu_link" target="_blank">link do google</a></p>

    <div>
      <button>Mostrar email</button>
      <p>{{ email }}</p>
    </div>
    <Picture/>

  </div>
</template>

<script>
  import Picture from './Picture.vue'

  export default{
    name: 'Info',

    props:{
      email: String,
      status_trabalho: Boolean
    },

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
        teste_show: true,
        meu_link: 'https://www.google.com.br/',
        link_botao: true,
        nome_botao: 'Clique para desativar',
        tec_front: ['HTML', 'CSS', 'Javascript', 'Vue'],
        tec_back: [
          {id:1, linguagem:'Node'},
          {id:2, linguagem:'JavaScript'},
          {id:3, linguagem:'Express'},
          {id:4, linguagem:'Mongo'}
        ]
      }
    },

    methods:{
      botao(){
        this.link_botao = !this.link_botao
        if(this.link_botao == true){
          this.nome_botao = 'Clique para desativar'
        }else{
          this.nome_botao = 'Clique para ativar'
        }
      }
    }
  }

</script>