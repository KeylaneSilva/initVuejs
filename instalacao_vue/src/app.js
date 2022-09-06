const MyNameApp = {
  data(){
    return {
      nome: "",
      idade: 22,
      input_name: "",
      tratante: "",
      nome2: " "
    }
  },

  methods: {
    submitForm(e){
      e.preventDefault();
      this.nome = this.input_name

      // console.log(this.input_name)
    },
    enviarFormulario(e){
      e.preventDefault();
      this.nome2 = this.tratante
    }
  }
}

Vue.createApp(MyNameApp).mount('#app');

