const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas:[
            'Hacer la compra',
            'Hacer la documentación del proyecto',
            'Jugar al fifa'
        ]
    },
    methods: {
        agregarTarea(){
            // this, hace referencia a la instancia vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});

//Vanilla JavaScript

/* function agregarTarea(){
    const input = document.querySelector('input[type=text]');
    vm.tareas.unshift(input.value);
    input.value = '';
} */