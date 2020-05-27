import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nombre: 'Juan Luis',
        apellidos: 'Calderón Pomares',
        profesion: 'Developer',
        ciudad: 'Elche'
    }
});