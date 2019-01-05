new Vue({
    el: '#app',
    data:{
        radios: [
            {}
        ],

        nombre:'',
        imei: '',
        sim:'',
        modelo: '',
        cellphone: '',
        cargador: '',
        estado: ''
        
    },
    methods:{
        nuevoRadio: function(){

            this.radios.push({
                nombre:this.nombre ,imei: this.imei, sim: this.sim, modelo: this.modelo, cellphone: this.cellphone, estado: this.estado, cargador: this.cargador });
                
                this.nombre = "";
                this.imei = "";
                this.sim = "";
                this.cellphone = "";
        }
    }
})

