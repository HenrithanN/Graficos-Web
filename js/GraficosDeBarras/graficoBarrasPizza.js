export const graficoBarrasPizza = () =>{

	const tabela = new google.visualization.DataTable();

	tabela.addColumn('string','categorias');
	tabela.addColumn('number', 'valores');
	tabela.addColumn({type:'string',role: 'style'});
	tabela.addColumn({type:'number',role: 'annotation'});

		tabela.addRows([
			['Tecnologia', 47814,'#a6a6a6',47814],
			['Marketing', 22552,'#a6a6a6',22552],
			['Administrativo', 65243,'#1b9af5',65243],
			['Linhas de crédito', 55504,'#a6a6a6',55504],
			['Segurança', 86085,'#f5921b',86085],
			['Atendimento ao cliente', 12605,'#a6a6a6',12605]
		]);	

		tabela.sort({column: 1, asc: true});

		const opcoes = {
			title:'Grafico de Barras - Gastos por unidade de negócio',
			height: 400,
			width: 900,
			legend: 'none',
			hAxis:{gridlines:{count: 0}},
			chartArea:
				{
					left: 170,
					top: 100,
					width:'60%',
					height:'70%'
				}
			};
	
	const grafico = new google.visualization.BarChart(document.querySelector('#grafico-barras-pizza'));
            grafico.draw(tabela, opcoes);
    
}