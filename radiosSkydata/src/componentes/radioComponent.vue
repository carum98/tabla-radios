<template>
<div>
<!--Formulario para ingresar datos de los radios-->
  <form class="col-md-8 card p-4 shadow" style="margin:auto" v-if="!ocultar">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" placeholder="Nombre" v-model="nombre">
        </div>
        <div class="form-group col-md-4">
          <label for="imei">IMEI</label>
          <input type="number" class="form-control" id="imei" placeholder="IMEI" v-model="imei">
        </div>
        <div class="form-group col-md-4">
          <label for="sim">Sim</label>
          <input type="number" class="form-control" id="sim" placeholder="Sim" v-model="sim">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="cellphone">Cellphone number</label>
          <input type="number" class="form-control" id="cellphone" placeholder="Cellphone number" v-model="cellphone">
        </div>
        <div class="form-group col-md-6">
          <label for="modelo" aria-placeholder="Modelo">Modelo</label>
          <select id="modelo" class="form-control" v-model="modelo">
            <option>Modelo...</option>
            <option value="T320" >T320</option>
            <option value="T199">T199</option>
            <option value="T298">T298</option>
            <option value="App Celular">APP CELULAR</option>
            <option value="Dispatcher">Dispatcher</option>
          </select>
        </div>
      </div>

      <div>
      <div class="custom-control custom-checkbox mb-2">
        <input type="checkbox" class="custom-control-input" id="cargador"  true-value="Si" false-value="No" v-model="cargador">
        <label class="custom-control-label" for="cargador">Cargador</label>
      </div>

      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="Nuevo" v-model="estado">
        <label class="custom-control-label" for="customRadioInline1">Nuevo</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline ">
        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="Usado" v-model="estado">
        <label class="custom-control-label" for="customRadioInline2">Usado</label>
      </div>
      </div>

        <button type="submit" class="btn btn-primary" @click.prevent="nuevoRadio">Agregar</button>

  </form>
  <!--Ocultar formulario de radios-->
      <div class="custom-control custom-switch float-right">
        <input type="checkbox" class="custom-control-input" id="ocultar" v-model="ocultar">
        <label class="custom-control-label" for="ocultar">ocultar</label>
      </div>

 <!--Tabla con la informacion de los radios-->
    <table class="table table-bordered mt-4 table-dark">
        <tr>
            <th>Nombre</th>
            <th>Imei</th>
            <th>Sim</th>
            <th>Modelo</th>
            <th>Cellphone number</th>
            <th>Estado</th>
            <th>Cargador</th>
        </tr>
        <tr v-for="radio in radios" :key="radio.id">
            <td>{{ radio.nombre }}</td>
            <td>{{ radio.imei }}</td>
            <td>{{ radio.sim }}</td>
            <td>{{ radio.modelo }}</td>
            <td>{{ radio.cellphone }}</td>
            <td>{{ radio.estado }} </td>
            <td>{{ radio.cargador }}</td>
        </tr>
    </table>

</div>

</template>

<script>

export default {
  data(){
    return {
      radios: [],

        nombre:'',
        imei: '',
        sim:'',
        modelo: '',
        cellphone: '',
        cargador: '',
        estado: '',
        ocultar: ''

    }
  },
  methods: {
    nuevoRadio: function(){
        this.radios.push({nombre:this.nombre ,imei: this.imei, sim: this.sim, modelo: this.modelo, cellphone: this.cellphone, estado: this.estado, cargador: this.cargador });

          this.nombre = "";
          this.imei = "";
          this.sim = "";
          this.cellphone = "";
    }
  }
}

</script>

<style>
 table tr{
   text-align: center;
 }
</style>

