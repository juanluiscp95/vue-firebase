new Vue({
    el: 'main',
    data: {
        tareas:[
            {
                titulo: 'Hacer la compra',
                completado: false
            },
            {
                titulo: 'Jugar al FIFA',
                completado: false
            },
            {
                titulo: 'Dormir',
                completado: false
            },
            {
                titulo: 'Salir a correr',
                completado: false
            },
            {
                titulo: 'Tomar una cerveza',
                completado: false
            },
        ]
    },
    methods: {
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed:{
        tareasCompletadas(){
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
    
});


