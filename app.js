new Vue({
    el: '#radio',
    data:{
        radios: [],

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
    
                var radios = this.radios
                console.log(radios)

                this.nombre = "";
                this.imei = "";
                this.sim = "";
                this.cellphone = "";


        }
    }
})

new Vue({
    el:'#datos',
    data:{
        datos: [ 
        ]  
        ,

        cliente: '',
        ejecutivo: '',
        modalidad: '',
        fecha: '',
        mostrar: true,
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
})

