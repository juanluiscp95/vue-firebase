// Global mixin
import Vue from 'vue';
Vue.mixin({
    created() {
        //console.info('Hola desde mixin global');
        this.saludar(this.$options.nombre)
    },
    methods: {
        saludar(nombre) {
            alert(`Hola desde ${nombre}!`);
        }
    }
});

// Local mixin
export const mixin = {
    created() {
        console.log('Created desde el mixin');
    },
    data () {
        return {
            aprender: [
                {nombre: 'Angular'},
                {nombre: 'Laravel'},
                {nombre: 'C++'},
                {nombre: 'Node'},
                {nombre: '.NET'}, 
            ],
            nuevaTecnologia: null,
        }
    },
    methods: {
        agregarTecnologia() {
            this.aprender.unshift({
                nombre: this.nuevaTecnologia,
            });
            this.nuevaTecnologia = null;
        },
    }
};