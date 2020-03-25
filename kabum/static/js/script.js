function populateGraph(year, graph_data_sales, graph_data_ecommerce, labels) {
    if (year <= 2015 && year >= 1999) {
        //Se o ano for válido
        var min_year = year - 3;
        var max_year = year + 3;
    } else {
        return
    }

    for (i = max_year; i >= year; i--) {
        try {
            if (labels.includes(i) == false && i != year) {
                graph_data_sales.push(dados[i]["Total_sales"]);
                graph_data_ecommerce.push(dados[i]["Total_Ecommerce"]);
                labels.push(i);
            }

        } catch (err) {

        }

    }
    //Dados do ano no gráfico
    graph_data_sales.push(dados[year]["Total_sales"]);
    graph_data_ecommerce.push(dados[year]["Total_Ecommerce"]);
    labels.push(year);

    for (i = year; i >= min_year; i--) {
        try {
            if (labels.includes(i) == false && i != year) {
                graph_data_sales.push(dados[i]["Total_sales"]);
                graph_data_ecommerce.push(dados[i]["Total_Ecommerce"]);
                labels.push(i);
            }

        } catch (err) {

        }
    }
    return graph_data_sales, graph_data_ecommerce, labels
}
function updateTable(labels, dados, year) {
    $("#tbody").html("");
    //Percorre todas as linhas
    for(i=0;i<labels.length;i++){
        if(dados[year]["Ecommerce"][i] == 0){
            dado_ecommerce = 'S';
            
        }else{
            dado_ecommerce = "$ " + dados[year]["Ecommerce"][i] + " M";
        }
        if(dados[year]["Sales"][i] == 0){
            dado_sales = 'S';
            
        }else{
            dado_sales = "$ " + dados[year]["Sales"][i] + " M";
        }
        $("#tbody").append('<tr> <td>'+labels[i]+'</td> <td>'+ dado_sales +'</td> <td>'+dado_ecommerce+'</td> </tr>');

    }
}

