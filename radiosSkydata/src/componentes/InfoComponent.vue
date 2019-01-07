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
            <option value="Cindy">Cindy</option>
            <option value="Nathalia">Nathalia</option>
            <option value="Juan Carlos">Juan Carlos</option>
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
                <input class="form-control" type="date" value="2019-01-01" id="fecha" v-model="fecha">
                </div>
    </div>
                <div>
                  <button type="submit" class="btn btn-primary mt-3" @click.prevent="agregarDatos">Agregar Datos</button>
                </div>
  <!--<pre>{{$data}}</pre>-->
  </form>

  <!--Recuadro para mostrara informcion suministraba por madio del formulario-->
  <div class="card bg-light mb-3" style="max-width: 18rem;" v-for="dato in datos" :key="dato.id">
      <div class="card-header">{{dato.cliente}}</div>
      <div class="card-body">
          <h5 class="card-title">{{dato.ejecutivo}}</h5>
          <p class="card-text">{{dato.modalidad}}</p>
          <p class="card-text">{{dato.fecha}}</p>
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

      this.datos.push({cliente: this.cliente, ejecutivo: this.ejecutivo, modalidad: this.modalidad, fecha: this.fecha})

        this.mostrar = false;
        this.cliente = "";
        this.ejecutivo = "";
        this.modalidad = "";
        this.fecha = "";
    }
  }
}
</script>
