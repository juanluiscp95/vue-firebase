import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tareas: [
            {nombre: 'Dormir', completado: false},
            {nombre: 'Hacer la compra', completado: false},
            {nombre: 'Jugar a la consola', completado: false},
            {nombre: 'Tomar una cerveza', completado: false},
            {nombre: 'Cambiar de movil', completado: true},
        ]
    },
    getters: {
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    }
});