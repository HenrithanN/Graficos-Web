import { graficoDeArea } from './graficoArea.js';
import { graficoDeAreaReceita } from './graficoAreaReceita.js';
import { graficoDeAreaReceitaPlanilha } from './graficoAreaReceitaPlanilha.js';


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDeArea();
    graficoDeAreaReceita();
    graficoDeAreaReceitaPlanilha();

}   
