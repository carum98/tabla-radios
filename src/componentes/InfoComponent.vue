<template>
<div>
  <!--formulario para ingresar informacion-->
  <form class="col-md-8 card p-4 mb-4 shadow"  style="margin:auto" v-if="mostrar">
    <div class="form-row">
        <div class="col">
        <label for="cliente">Cliente</label>
        <input type="text" id="cliente" class="form-control" placeholder="Cliente" v-model="cliente">
        </div>
          <div class="col">
          <label for="ejetivo">Ejecutivo</label>
          <select id="ejetivo" class="form-control" v-model="ejecutivo">
            <option>Ejecutivo...</option>
            <option value="Cindy Cartin">Cindy</option>
            <option value="Nathalia Blanco">Nathalia</option>
            <option value="Juan Carlos Rodriguez">Juan Carlos</option>
          </select>
             </div>
             <div class="col">
             <label for="modalidad">Modalidad</label>
             <select id="modalidad" class="form-control" v-model="modalidad">
               <option>Modalidad...</option>
               <option value="Demo">Demo</option>
               <option value="Venta">Venta</option>
               <option value="Alquiler">Alquiler</option>
             </select>
             </div>
                <div class="col">
                <label for="fecha">Fecha</label>
                <input class="form-control" name="fecha" type="date" value="2019-01-01" id="fecha" v-model="fecha" data-placement="bottom" title="Fecha de entrega de los radios" >
                </div>
    </div>
                <div>
                  <button type="submit" class="btn btn-primary mt-3" @click.prevent="agregarDatos">Agregar Datos</button>
                </div>
  <!--<pre>{{$data}}</pre>-->
  </form>

  <div class="row" v-for="dato in datos" :key="dato.id">
    <div class="card-header text-white bg-dark col m-1 rounded-pill">
      <h5 class="text-center">{{dato.cliente}}</h5>
    </div>
    <div class="card-header text-white bg-dark col m-1 rounded-pill">
      <h5 class="text-center">{{dato.ejecutivo}}</h5>
    </div>
    <div class="card-header text-white bg-dark col m-1 rounded-pill">
      <h5 class="text-center">{{dato.modalidad}}</h5>
    </div>
    <div class="card-header text-white bg-dark col m-1 rounded-pill">
      <h5 class="text-center">{{dato.fecha}}</h5>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      datos: [ ],

        cliente: '',
        ejecutivo: '',
        modalidad: '',
        fecha: '',
        mostrar: true
    }
  },
  methods:{
    agregarDatos: function(){

      if(this.cliente && this.ejecutivo && this.modalidad){
      this.datos.push({cliente: this.cliente, ejecutivo: this.ejecutivo, modalidad: this.modalidad, fecha: this.fecha})

        this.mostrar = false;
        this.cliente = "";
        this.ejecutivo = "";
        this.modalidad = "";
        this.fecha = "";
      }
    }
  }
}
</script>
