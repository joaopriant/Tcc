function carregarManutencao(divid){
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
        let tabela = "<table><th></th><th>Id Chamado</th><th>Problema</th><th>Data de inicio</th><th>Status</th>";
        for(var k in res) {
            const id = res[k].IdManutencao;
            const problema = res[k].Problema;
            const Datainicio = res[k].DataInicio;
            const Status = res[k].Status;
            
            if(Status== "Aberta"){

            tabela+="<tr id='"+id+"' class='linha'>";
               tabela+="<td>";
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
let idmanutencao;
let problema;
let Datainicio;
let Status;
function listarid(id){
    fetch("../../controle/manutencao/controle_manutencao_listarAll.php", {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then((response) => {
            return response.json()
        }).then((res) => {
            for(var k in res) {
                idmanutencao = res[k].IdManutencao;
                problema = res[k].Problema;
                Datainicio = res[k].DataInicio;
                Status = res[k].Status;
                if(res[k].IdManutencao == id){
                    break;
                }
            }
    })
}
function atualizar(status,id){
   // const id = document.getElementById(id).value;
    listarid(id)
    let manutencao = {
        IdManutencao: id,
        Status: status,
        Problema: problema,
        DataInicio: Datainicio
    }
    
    console.log(manutencao)
    fetch("../../controle/manutencao/controle_manutencao_atualizar.php", {
    method: 'post',
    body: JSON.stringify(manutencao),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
     
        const div = document.getElementById("divResposta");
        if(res.cod==1){
            div.innerHTML = "O campo não pode ser vazio";
        }
        console.log(res)

        if (res.status === 200) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
    })
}
atualizar("Aberta",7)