import { graficoDeColunas } from './graficoColunas.js';


google.charts.load('current', {'packages': ['corechart'],'language': 'pt-br'});
window.onload = () =>{
    graficoDeColunas();
}   
