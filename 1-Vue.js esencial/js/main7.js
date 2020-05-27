Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

new Vue({
    el: 'main',
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [{
                titulo: 'Need For Speed',
                genero: 'coches',
                puntuacion: 9
            },
            {
                titulo: 'FIFA',
                genero: 'futbol',
                puntuacion: 8
            },
            {
                titulo: 'GTA',
                genero: 'accion',
                puntuacion: 10
            },
        ]
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }
    
});

