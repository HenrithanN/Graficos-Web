import { graficoDePizza } from './GraficosDePizza/graficoPizza.js';
import { graficoDeLinha } from './GraficosDeLinhas/graficoLinha.js';
import { graficoDeColunas } from './GraficosDeColunas/graficoColunas.js';
import { graficoDeBarras } from './GraficosDeBarras/graficoBarras.js';
import { graficoDeBarrasJson } from './GraficosDeBarras/graficoBarrasJson.js'
import { graficoDeArea } from './GraficosDeArea/graficoArea.js'


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDePizza();
    graficoDeLinha();
    graficoDeColunas();
    graficoDeBarras();
    graficoDeBarrasJson();
    graficoDeArea();
}   
