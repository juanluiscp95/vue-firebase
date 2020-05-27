import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import EquipoJuanLuis from './components/EquipoJuanLuis.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo', component: Equipo, children: [
        {path: 'juanluis', component: EquipoJuanLuis},
    ]},
];