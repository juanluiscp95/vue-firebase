Vue.component('autor',{
    props: ['nombre','edad'],
    mounted(){
        //Las props son accesibles desde this
        console.log(typeof this.edad);
    },
    template: '<div><h1>{{ nombre }}</h1><button @click="cambiarProp">Cambiar Prop</button></div>',
    methods: {
        cambiarProp() {
            this.nombre = this.nombre.toUpperCase();
        }
    },
});


new Vue({
    el: 'main',
    data: {
        autor: 'Juan Luis',
    },
});