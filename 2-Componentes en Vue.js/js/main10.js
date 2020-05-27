Vue.component('lista-tareas', {
    template: '<div><h1><slot></slot></h1><ul><tarea v-for="tarea in tareas" :tarea="tarea"></tarea></ul></div>',
    data(){
        return {
            tareas: [
                'Jugar al Ordenador',
                'Jugar al Ordenador',
                'Jugar al Ordenador',
                'Jugar al Ordenador',
                'Jugar al Ordenador',
                'Jugar al Ordenador',
            ],
        }
    }
});

Vue.component('tarea', {
    props: ['tarea'],
    template: '<li>{{ tarea }}</li>'
});

Vue.component('contacto', {
    template: '<div><a href="mailto:juanluis@gmail.com">juanluis@gmail.com</a><hr></div>'
});

Vue.component('bio', {
    template: '<div><p>hcsdbucbsdicnidjsnfidsnvcjidsnfjidnk</p><hr></div>'
});

new Vue({
    el: 'main',
    data:{
        seleccionado: 'lista-tareas'
    }
});


