const MyNameApp = {
  data(){
    return {
      nome: "",
      idade: 22,
      input_name: ""
    }
  },

  methods: {
    submitForm(e){
      e.preventDefault();
      this.nome = this.input_name

      // console.log(this.input_name)
    }
  }
}

Vue.createApp(MyNameApp).mount('#app');

