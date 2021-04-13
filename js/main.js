import { graficoDePizza } from './graficoPizza.js';
import { graficoDeLinha } from './graficoLinha.js';
import { graficoDeColunas } from './graficoColunas.js';
import { graficoDeBarras } from './graficoBarras.js';
import { graficoDeBarrasJson } from './graficoBarrasJson.js'


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDePizza();
    graficoDeLinha();
    graficoDeColunas();
    graficoDeBarras();
    graficoDeBarrasJson();
}   
