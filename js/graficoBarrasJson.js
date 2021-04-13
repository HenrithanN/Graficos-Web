    export const graficoDeBarrasJson = () =>{
    
    const dadosJson = $.ajax({
        url:'https://gist.githubusercontent.com/HenrithanN/e2f0fa890a97c1bb6e939dae5ade8d5f/raw/83dcf2f96695737c4a3fbc62b7784a9299218c9f/dadosGraficos.json',
        dataType:'json',
        async: false
    }).responseText;    

    const tabelaJson = new google.visualization.DataTable(dadosJson);

    const opcoes = {
        title: 'Grafico de Barras JSON - Usuários e Poupanças',
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
    const graficoJson = new google.visualization.BarChart(
        document.querySelector('#grafico-barras-json'));

        graficoJson.draw(tabelaJson, opcoes);
}