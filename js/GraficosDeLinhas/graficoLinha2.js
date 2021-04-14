export const graficoDeLinhas2 = () =>{

    const tabela = new google.visualization.DataTable();

    tabela.addColumn('string','anos');

    tabela.addColumn('number','Conta Poupança');
    tabela.addColumn('number','Conta Corrente');
    tabela.addColumn('number','Conta Salario');
    tabela.addColumn('number','Conta de Cartão de Crédito');
    tabela.addColumn('number','Conta Cartão');

    tabela.addRows([

        ['2012',200,275,343,470,322],
        ['2013',221,340,380,476,346],
        ['2014',343,331,376,450,351],
        ['2015',442,391,387,510,357],
        ['2016',465,400,412,532,360]

    ]);


    const opcoes = {
        title:'Grafico de Linhas - Quantidade de Novos Usuarios nas Contas',
        titleTextStyle:{
            color:'#5e5851',
            fontSize:20,
            fontType:'Arial'
        },  
        width:950,
        height:430,
        series:{
            0:{color:'#3682ff', lineWidth:5},
            1:{color:'#a6a6a6'},
            2:{color:'#a6a6a6'},
            3:{color:'#a6a6a6'},
            4:{color:'#a6a6a6'}
        },
        vAxis:{
            gridlines:{
                color:'transparent'
            }
        },
        legend:{
            textStyle:{
                color:'#928e8a',
                fontSize:15
            }
        }

    }

    const grafico = new google.visualization.LineChart(document.querySelector('#grafico-linha-2'));
    grafico.draw(tabela, opcoes)
}