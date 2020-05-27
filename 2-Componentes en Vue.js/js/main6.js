Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template',
});

new Vue({
    el: 'main',
    data:{
        tareas:[
            {titulo: 'Salir a correr'},
            {titulo: 'Salir a correr'},
            {titulo: 'Salir a correr'},
            {titulo: 'Salir a correr'},
            {titulo: 'Salir a correr'},
            {titulo: 'Salir a correr'},
        ]
    }
});


