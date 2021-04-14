export const graficoBarrasEmpilhadas = () =>{

	const tabela = new google.visualization.arrayToDataTable([
        [
            'Categorias',
            'Tecnologia',            {role:'annotation'},        {role:'style'},         
            'Marketing',             {role:'annotation'},        {role:'style'},         
            'Administrativo',        {role:'annotation'},        {role:'style'},         
            'Linhas de crédito',     {role:'annotation'},        {role:'style'},         
            'Segurança',             {role:'annotation'},        {role:'style'},         
            'Atendimento ao cliente',{role:'annotation'},        {role:'style'}
        ],
        [
            'Categorias',
            47814,                     47814,                    'color:#a6a6a6',
            22552,                     22552,                    'color:#a6a6a6',
            65243,                     65243,                    'color:#1b9af5',
            55504,                     55504,                    'color:#a6a6a6',
            86085,                     86085,                    'color:#f5921b',
            12605,                     12605,                    'color:#a6a6a6'
        
        ]
    ]);

		const opcoes = {
			title:'Grafico de Barras Empilhadas - Gastos por unidade de negócio',
			height: 400,
			width: 1300,
			legend: 'none',
			hAxis:{
                ticks:[{v: 0, f:''},
                .165,
                {v: .2428, f:'7,78%'},
                {v: .4679, f:'22,51%'},
                {v: .6594, f:'19,15%'},
                {v: .9564, f:'29,7%'},
                {v: 1,f:'4,35%'}]
            },
            isStacked:'percent',
			chartArea:
				{
					left: 170,
					top: 100,
					width:'80%',
					height:'70%'
				},
                series:{
                    0:{color:'#a6a6a6'},
					1:{color:'#a6a6a6'},
					2:{color:'#1b9af5'},
					3:{color:'#a6a6a6'},
					4:{color:'#f5921b'},
					5:{color:'#a6a6a6'}
                }
			};
	
	const grafico = new google.visualization.BarChart(document.querySelector('#grafico-barras-empilhadas'));
            grafico.draw(tabela, opcoes);
    
}