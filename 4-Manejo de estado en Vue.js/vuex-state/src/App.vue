<template>
    <h1>Hola me llamo {{ nombre }} {{ apellidos}}, soy de {{ ciudad }} y me dedico a {{profesion}}</h1>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        /*computed: {
            nombre() {
                return this.$store.state.nombre;
            }
        }*/
       /* computed: mapState({
            nombre: (state) => state.nombre,
            apellidos: (state) => state.apellidos,
        })*/
        computed: mapState(['nombre', 'apellidos', 'ciudad', 'profesion']),
    }
</script>