import Vue from 'vue'
import App from './App.vue'

//Declarando VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, {
    fieldsBagName: 'vvFields'
 })


import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)


//Lamado bus de datos
export var bus = new Vue();

new Vue({
  el: '#app',data: {

},
  render: h => h(App)
})
