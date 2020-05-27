new Vue({
    el: 'main',
    data: {
        mensaje:'Hola Mundo :) !',
        nuevaTarea: null,
        tareas:[{
                titulo: 'Hacer la compra',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: 'Jugar al FIFA',
                prioridad: false,
                antiguedad: 123
            },
            {
                titulo: 'Dormir',
                prioridad: true,
                antiguedad: 323
            },
        ]
    },
    methods: {
        agregarTarea(){
            // this, hace referencia a la instancia vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea = null;
        },
    },
    computed:{
        mensajeAlReves(){
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
    
});

