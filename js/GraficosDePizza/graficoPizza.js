export const graficoDePizza = () =>{
    const tabelaPizza = new google.visualization.DataTable();
        tabelaPizza.addColumn('string', 'Categorias');
        tabelaPizza.addColumn('number', 'Valores');
        tabelaPizza.addRows([
            ['Educacao',2000],
            ['Transporte',500],
            ['Lazer',230],
            ['Saude',50],
            ['Cartao de Credito',900],
            ['Alimentacao',260]
        ]);

    const opcoes = {
        title:'Grafico de Pizza - Tipos de gastos',
        height: 300,
        width: 900,
        is3D: true,
        pieSliceText: 'value',
        legend: 'labeled',
        slices: {
            0:{color:'purple'},
            1:{color:'pink'},
            2:{color:'grey'},
            3:{color:'green'},
            4:{color:'red', offset:0.4},
            5:{color:'orange'}
        }
    }
    const graficoPizza = new google.visualization.PieChart(document.querySelector('#grafico-pizza-1'));

    graficoPizza.draw(tabelaPizza,opcoes);
}