const statusOptions = ['"Concluida"', '"Pendente"', '"Aberta"', '"Recusada"']
function carregarManutencao(divid){
    const divListaManutencao = document.getElementById(divid);
    fetch("/manutencoes", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th></th><th>Id Chamado</th><th>Problema</th><th>Data de inicio</th><th>Status</th>";
        for(var k in res) {
            const id = res[k].IdManutencao;
            const problema = res[k].Problema;
            const Datainicio = res[k].DataInicio;
            const Status = res[k].Status;
            
            if(Status== "Aberta"){     

            tabela+="<tr>";
                tabela+="<td onclick='atalizarManutencao("+id+','+statusOptions[0]+")'>";
                tabela+= '<ion-icon class="icon-complete" name="checkbox-outline"></ion-icon>';
                tabela+="</td>";

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

function carregarPendente(divid){
    const divListaManutencao = document.getElementById(divid);
    fetch("/manutencoes", {
    method: 'GET',
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

                tabela+="<td onclick='atalizarManutencao("+id+','+statusOptions[2]+")' >";
                tabela+='<ion-icon class ="icon-check" name="checkmark-circle-outline"></ion-icon>';
                tabela+="</td>";

                tabela+="<td onclick='atalizarManutencao("+id+','+statusOptions[3]+")'>";
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

function atalizarManutencao(id, statusmanu){
    const statusManutencao = statusmanu;
    let manutencao = {
        idmanutencao: id,
        status: statusManutencao
    };
    console.log(manutencao);
    fetch("/manutencoes", {
        method: 'PATCH',
        body: JSON.stringify(manutencao),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {

        if(res.cod==1){
            console.log("Não pode ser vazio")
        }
        if (res.cod == 7) {
            console.log("Post successfully updated!")
            carregarManutencao("abertos-manutencao");
            carregarPendente("pendente-manutencao");
            carregarHistorico("tabela-historico");
        }
    }).catch((error) => {
        console.log(error)
    })
}