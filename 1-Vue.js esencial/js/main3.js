const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
        tareas:[
            {nombre: 'Hacer la compra', prioridad: 'baja'},
            {nombre: 'Hacer la documentación del proyecto', prioridad: 'alta'},
            {nombre: 'Jugar al fifa', prioridad: 'alta'},
        ],
        persona:{
            nombre: 'Juan Luis',
            profesion: 'dev',
            ciudad: 'Elche'
        }
    },
});
