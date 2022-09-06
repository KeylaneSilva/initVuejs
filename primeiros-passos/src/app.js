const Contador = {
  data(){
    return{
      contador: 0,
      mensagem: "Você passou o mouse sobre mim em " + new Date().toLocaleString(),
      mensagem2: 'Olá, novo usuario',
      texto: "Mensagem aqui",
      visivel: true,
      todos: [
        {text: 'Aprender JavaScript'},
        {text: 'Aprender Vue'},
        {text: 'Criar algo incrivel'}
      ]
    }
  },
  mounted(){
    setInterval(() =>{
      this.contador++
    }, 1000)
  },
  methods:{
    reverterMensagem(){
      this.mensagem2 = this.mensagem2
      .split('') // transforma a string em um array
      .reverse() // inverte o array
      .join('') // retorna o arrau como uma string
    }
  }

}

Vue.createApp(Contador).mount('#app');

