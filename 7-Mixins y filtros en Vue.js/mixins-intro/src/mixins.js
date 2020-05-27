export const mixin = {
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
        }
    }
};