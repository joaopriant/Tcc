function toggleDiv(divid,down,up){
    if(document.getElementById(divid).style.display == 'none'){
        document.getElementById(divid).style.display = 'block';
        document.getElementById(up).style.display = 'block';
        document.getElementById(down).style.display = 'none';
    }else{
     document.getElementById(divid).style.display = 'none';
     document.getElementById(down).style.display = 'block';
     document.getElementById(up).style.display = 'none';
   }
 }
 function carregarHistorico(divid){
    const divListaManutencao = document.getElementById(divid);
    fetch("../../controle/manutencao/controle_manutencao_listarAll.php", {
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
            
            if(Status== "Concluido"){     

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