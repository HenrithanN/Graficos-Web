export const  graficoDeLinha = () =>{
    
    const tabelaLinha = new google.visualization.DataTable();
    tabelaLinha.addColumn('string', 'Mês');
    tabelaLinha.addColumn('number', 'Gastos');
    tabelaLinha.addRows(
        [
            ['jan',800],
            ['fev',400],
            ['mar',1100],
            ['abr',400],
            ['mai',500],
            ['jun',750],
            ['jul',1500],
            ['ago',650],
            ['set',850],
            ['out',400],
            ['nov',1000],
            ['dez',720]
        ]);
    
        const opcoes = {
            title: 'Grafico de Linha - Gastos por mês',
            width: 900,
            height: 300,
            vAxis:{
                format : 'currency',
                gridlines: {count : 0}},
            curveType: 'function',
            legend: 'none'
        }

        const graficoLinha = new google.visualization.LineChart(document.querySelector('#grafico-linha'));
        
        graficoLinha.draw(tabelaLinha, opcoes)
    

}

