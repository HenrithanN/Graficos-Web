import { graficoDePizza } from './graficoPizza.js';
import { graficoDePizza2 } from './graficoPizza2.js';


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDePizza();
    graficoDePizza2();
}   
