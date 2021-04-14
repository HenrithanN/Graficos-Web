import { graficoDeBarras } from './graficoBarras.js';
import { graficoDeBarrasJson } from './graficoBarrasJson.js'
import { graficoBarrasPizza } from './graficoBarrasPizza.js'
import { graficoBarrasEmpilhadas } from './graficoBarrasEmpilhadas.js'


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDeBarras();
    graficoDeBarrasJson();
    graficoBarrasPizza();
    graficoBarrasEmpilhadas();

}   
