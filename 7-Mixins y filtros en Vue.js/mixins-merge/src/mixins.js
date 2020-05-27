export const mixin = {
    created() {
        console.log('Created desde el mixin');
        this.saludar();
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
        saludar() {
            alert('Hola desde el mixin');
        }
    }
};