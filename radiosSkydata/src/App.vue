<template>
  <div id="app">
    <div class="jumbotron">
      <div class="container">
        <h1>Radios Skydata CR</h1>

        <!--Utilizando Componentes-->
        <informacion></informacion>
        <radios></radios>
      
      </div>
    </div>
  </div>
</template>

<script>

//Imports de componentes
import Informacion from './componentes/InfoComponent.vue'
import Radios from './componentes/radioComponent.vue'

export default {

  //Llamado de componentes
  components:{
    Informacion,
    Radios
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>
