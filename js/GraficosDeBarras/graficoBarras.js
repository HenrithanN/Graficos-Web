export const  graficoDeBarras = () =>{
    
    const dadosJson = $.ajax({
        url:'https://gist.githubusercontent.com/HenrithanN/ef01fbe7650686d42fc06121f8f3306d/raw/404f6a1dc4a3636d8fa22299f8233bdca2554dbe/dadosGraficoGastos.json',
        dataType:'json',
        async: false
    }).responseText;
        
    /*
    Linhas abaixo comentadas, pois ao inves de criar uma tabela, adicionando linhas,
    colunas e os seus dados, apenas criamos a tabela, e a preenchemos com a variavel dadosJson,
    esta variavel importa um link de um gist do github, contendo os dados que serão consumidos.
    */
    /*
        tabelaBarras.addColumn('string', 'Categorias');
        tabelaBarras.addColumn('number', 'Valores');
        tabelaBarras.addColumn({type:'string', role:'annotation'});
        tabelaBarras.addColumn({type:'string', role:'style'});
        tabelaBarras.addRows([
            ['Educacao',2000,'R$ 2000.00','red'],
            ['Transporte',500,'R$ 500.00','orange'],
            ['Lazer',230,'R$ 230.00','lightGreen'],
            ['Saude',50,'R$ 50.00','green'],
            ['Cartao de Credito',900,'R$ 900.00','pink'],
            ['Alimentacao',260,'R$ 260.00','grey']
        ]);
*/
            
    
        const tabelaBarras = new google.visualization.DataTable(dadosJson);
        tabelaBarras.sort([{column: 1, desc: true}]);
        const opcoes = {
            title: 'Grafico de Barras - Tipos de Gastos',
            width: 900,
            height: 400,
            hAxis:{
                format : 'currency',
                gridlines: {count : 0},
                textPosition:'none'},                
            legend: 'none',
            annotations:{
                alwaysOutside:true
            }
        }

        const graficoBarras = new google.visualization.BarChart(document.querySelector('#grafico-barras'));
        
        graficoBarras.draw(tabelaBarras, opcoes)
    

}

