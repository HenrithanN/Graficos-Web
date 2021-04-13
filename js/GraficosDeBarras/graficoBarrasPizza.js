export const graficoBarrasPizza = () =>{

	const tabela = new google.visualization.DataTable();

	tabela.addColumn('string','categorias');
	tabela.addColumn('number', 'valores');

		tabela.addRows([
			['Tecnologia', 47814],
			['Marketing', 22552],
			['Administrativo', 65243],
			['Linhas de crédito', 55504],
			['Segurança', 86085],
			['Atendimento ao cliente', 12605]
		]);	

		tabela.sort({column: 1, asc: true});

		const opcoes = {
			title:'Gastos por unidade de negócio',
			height: 400,
			width: 900,
			legend: 
				{
					position: 'labeled', 
					textStyle: 
						{
							color: '#928e8a', 
							fontSize: 16
						}
				},
			titleTextStyle: 
				{ 
					color: '#5e5851',
					fontName: 'Arial',
					fontSize: 20,
					bold: true,
					italic: false 
				},
			chartArea:
				{
					left: 80,
					top: 100,
					width:'70%',
					height:'70%'
				}
			};
	
	const grafico = new google.visualization.BarChart(document.querySelector('#grafico-barras-pizza'));
            grafico.draw(tabela, opcoes);
    
}