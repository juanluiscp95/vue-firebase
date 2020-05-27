import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        /*productos: [
            {nombre: 'koenigsegg jesko ', precio: 2500000},
            {nombre: 'pagani huayra', precio: 3000000},
            {nombre: 'bugatti chiron', precio: 2904000},
        ],*/
        carro: [],
    },
    getters: {
        totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0),
    },
    mutations: {
        anadirProducto: (state, producto) => state.productos.unshift(producto),
        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
    },
    modules: {
        productos
    }
});