<template>
    <div>
        <h2>Las Tareas por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
        <h2>Tareas finalizadas</h2>
        <li v-for="tarea in tareasFinalizadas">
            <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
        </li>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tareas: [
                    {nombre: 'Irme de viaje', completado: false},
                    {nombre: 'Salir a correr', completado: false},
                    {nombre: 'Jugar a la consola', completado: false},
                    {nombre: 'Comprar un coche', completado: false},
                    {nombre: 'Renovar el dni', completado: false},
                    {nombre: 'Hacer la compra', completado: false},
                    {nombre: 'Tomarme una cerveza', completado: false},
                ],
                finalizadas: []
            }
        },
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;
            }
        },
        computed: {
            tareasPendientes() {
                return this.tareas.filter((tarea) => !tarea.completado);
            },
            tareasFinalizadas() {
                return this.tareas.filter((tarea) => tarea.completado);
            }
        }
    }
</script>

<style>
    li a {
        color: rgb(0, 119, 255);
        font-weight: bold;
        text-decoration: none;
        font-size:20px;
    }
</style>