const productos = [
    {nombre: 'koenigsegg jesko ', precio: 2500000},
    {nombre: 'pagani huayra', precio: 3000000},
    {nombre: 'bugatti chiron', precio: 2904000},
];

const mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto),
};

export default {
    state: productos,
    mutations,
};