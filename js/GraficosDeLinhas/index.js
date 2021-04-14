import { graficoDeLinha } from './graficoLinha.js';
import { graficoDeLinhas2 } from './graficoLinha2.js';


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDeLinha();
    graficoDeLinhas2();
}   
