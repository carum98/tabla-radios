<template>
<div>
<!--Formulario para ingresar datos de los radios-->
  <form class="col-md-8 card p-4 shadow" style="margin:auto" v-if="!ocultar">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" placeholder="Nombre" autocomplete="off" v-model="nombre" required title="Especifique nombre del radio" data-placement="left">
        </div>
        <div class="form-group col-md-4">
          <label for="imei">IMEI</label>
          <input type="number" name="imei" class="form-control" id="imei" placeholder="IMEI" autocomplete="off" v-model="imei" v-validate="'max:15'" required title="IMEI del radio, 15 caracteres">
          <div v-show="errors.has('imei')" class="text-danger">EL Imei debe contener 15 caracteres</div>
        </div>
        <div class="form-group col-md-4">
          <label for="sim">Sim</label>
          <input type="number" name="sim" class="form-control" id="sim" placeholder="Sim" autocomplete="off" v-model="sim" v-validate="'max:8'" required title="SIM asignado, 8 caracteres" data-placement="right">
          <div v-show="errors.has('sim')" class="text-danger">EL Sim debe contener 8 caracteres</div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="cellphone">Cellphone number</label>
          <input type="number" name="cellphone" class="form-control" id="cellphone" placeholder="Cellphone number" autocomplete="off" v-model="cellphone" v-validate="'min:0|max:18'" required title="Cellphone number de la plataforma, 18 caracteres" data-placement="left">
          <div v-show="errors.has('cellphone')" class="text-danger">Cellphone number consta de 18 caracteres</div>
        </div>
        <div class="form-group col-md-6">
          <label for="modelo" placeholder="Modelo">Modelo</label>
          <select id="modelo" class="form-control" v-model="modelo" required title="Indicar modelo del radio" data-placement="right">
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
        <input type="radio" id="estado1" name="customRadioInline1" class="custom-control-input" value="Nuevo" v-model="estado">
        <label class="custom-control-label" for="estado1">Nuevo</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline ">
        <input type="radio" id="estado2" name="customRadioInline1" class="custom-control-input" value="Usado" v-model="estado">
        <label class="custom-control-label" for="estado2">Usado</label>
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
    <table id="TablaRadios" class="table table-bordered mt-4 table-dark shadow table-hover" v-if="mostrar">
      <thead>
        <tr>
            <th>Nombre</th>
            <th>Imei</th>
            <th>Sim</th>
            <th>Modelo</th>
            <th>Cellphone number</th>
            <th>Estado</th>
            <th>Cargador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="radio in radios" :key="radio.id">
            <td>{{radio.nombre}}</td>
            <td>{{radio.imei}}</td>
            <td>{{radio.sim}}</td>
            <td>{{radio.modelo}}</td>
            <td>{{radio.cellphone}}</td>
            <td>{{radio.estado}} </td>
            <td>{{radio.cargador}}</td>
        </tr>
      </tbody>
    </table>
<pre>{{$data}}</pre>
</div>

</template>

<script>

import { bus } from '../main.js'

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
        ocultar: '',
        mostrar: true
    }
  },
  methods: {
    nuevoRadio: function(){

      var nombre = this.nombre.trim();
      var imei = this.imei.trim();
      var sim = this.sim.trim();
      var cellphone = this.cellphone.trim();
      var modelo = this.modelo;

      if(nombre && imei && sim && cellphone && modelo){
        this.mostrar = true

        this.radios.push({nombre:this.nombre ,imei: this.imei, sim: this.sim, modelo: this.modelo, cellphone: this.cellphone, estado: this.estado, cargador: this.cargador });

          bus.$emit('actualizarexcel', this.radios)

          this.nombre = "";
          this.imei = "";
          this.sim = "";
          this.cellphone = "";
      }

    }

  }
}
</script>

<style>
 table tr{
   text-align: center;
 }
</style>

