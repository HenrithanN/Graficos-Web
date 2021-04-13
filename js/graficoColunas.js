export const  graficoDeColunas = () =>{
    
    const tabelaColunas = google.visualization.arrayToDataTable([
        ['Mês', 'Entrada', 'Saida'],
        ['jan',2500,1000],
        ['fev',1000,500],
        ['mar',3000,1300],
        ['abr',1500,1700],
        ['mai',5000,2250],
        ['jun',3567,3000],
        ['jul',3452,1468],
        ['ago',1833,5250],
        ['set',1800,1000],
        ['out',1800,1000],
        ['nov',3569,1500],
        ['dez',3000 ,1740] 
        ]);
        const opcoes = {
            title: 'Grafico de Colunas - Entradas e saidas da conta',
            width: 900,
            height: 400,
            vAxis:{
                format : 'currency',
                gridlines: {count : 0}}
        }

        const graficoColunas = new google.visualization.ColumnChart(document.querySelector('#grafico-colunas'));
        
        graficoColunas.draw(tabelaColunas, opcoes)
    

}

