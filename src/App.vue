<template>
  <div id="app">

    <div class="jumbotron">
          <img src="./assets/skydata.png">
          <img src="./assets/radios.png">
    <div class="container">
        <!--Utilizando Componentes-->
        <informacion></informacion>
        <radios></radios>
        <!--<pre>{{$data}}</pre>-->
      </div>
    </div>
  </div>
</template>

<script>

//Imports de componentes
import Informacion from './componentes/InfoComponent.vue'
import Radios from './componentes/radioComponent.vue'

import { bus } from './main.js'

export default {
  //Llamado de componentes
  components:{
    Informacion,
    Radios
  },
  name: 'app',
  data () {
    return {
      excel: this.excel
    }
  },
  created(){
    bus.$on('actualizarexcel', (excel)=> {
      this.excel = excel;
    })
  }
}
//Generar excel y rellenar tabla
   /*$(document).ready( function () {
      $('#TablaRadios').DataTable({
        "data":
          this.excel,
        "columns": [
            { "data": "nombre" },
            { "data": "imei" },
            { "data": "sim" },
            { "data": "modelo" },
            { "data": "cellphone" },
            { "data": "estado" },
            { "data": "cargador" }
        ],
        dom: 'Bt',
        buttons: [
        'copy', 'csv', 'excel'
          ]
      });
  } );*/
</script>
<style>
  body{
    background: #e9ecef
  }
</style>
