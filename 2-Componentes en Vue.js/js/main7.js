Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: '<section class="alerta" :class="[tipo,posicion]"><header class="alerta__header"><a href="#" @click="ocultarWidget">Cerrar</a><slot name="header">Hola</slot></header><div class="alerta__contenido"><slot>contenido</slot></div><footer class="alerta__footer"><slot name="footer">Esto es el footer</slot></footer></section>',
    methods: {
        ocultarWidget(){
            this.$emit('ocultar');
        }
    }
});

new Vue({
    el: 'main',
    data:{
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false,
    }
});

