Vue.component('candidato', {
    //props: ['nombre', 'correo', 'imagen'],
    props:{
        nombre: {
            type: [String, Array],
            required: true,
        },
        correo: {
            type: String,
            default: 'juan@correo.com'
        },
        imagen: String,
        location: { 
            type: Object,
            default(){
                return {
                    ciudad: 'Valencia',
                }
            },
        },
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
});


