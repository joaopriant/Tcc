function carregarPendente(divid){
    const divListaManutencao = document.getElementById(divid);
    fetch("/manutencoes", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Id Chamado</th><th>Problema</th><th>Data de inicio</th><th>Status</th>";
        for(var k in res) {
            const id = res[k].IdManutencao;
            const problema = res[k].Problema;
            const Datainicio = res[k].DataInicio;
            const Status = res[k].Status;
            
            if(Status== "Pendente"){     

            tabela+="<tr>";
               tabela+="<td>";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td>";
                    tabela+=problema;
                tabela+="</td>";

                tabela+="<td>";
                tabela+=Datainicio;
                tabela+="</td>";

                tabela+="<td>";
                tabela+=Status;
                tabela+="</td>";

                tabela+="<td >";
                tabela+='<ion-icon class ="icon-check" name="checkmark-circle-outline"></ion-icon>';
                tabela+="</td>";

                tabela+="<td>";
                tabela+='<ion-icon class ="icon-uncheck" name="close-circle-outline"></ion-icon>';
                tabela+="</td>";

            tabela+="</tr>";
            }else{
                continue
            }
         }
         tabela+="</table>";
         divListaManutencao.innerHTML=tabela;
   
    }).catch((error) => {
        console.log(error)
    })
}