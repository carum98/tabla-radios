import Vue from 'vue'
import App from './App.vue'

//Declarando VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

//Lamado bus de datos
export var bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
