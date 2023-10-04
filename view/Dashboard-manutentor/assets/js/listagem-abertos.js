function diaAtual(){
    const date = new Date();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
}
console.log(diaAtual());
atualizar('concluido',1,diaAtual());
function carregarManutencao(divid){
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
        let tabela = "<table><th></th><th>Id Chamado</th><th>Problema</th><th>Data de inicio</th><th>Status</th>";
        for(var k in res) {
            const id = res[k].IdManutencao;
            const problema = res[k].Problema;
            const Datainicio = res[k].DataInicio;
            const Status = res[k].Status;
            
            if(Status== "Aberta"){
            tabela+="<tr class='linha'>";
               tabela+="<td onclick='atualizar('Concluído',"+id+","+diaAtual()+")' id='finish-check'>";
                    tabela+= '<ion-icon class="icon-complete" value="" name="checkbox-outline"></ion-icon>';
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
    fetch("/manutencoes", {
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
                foto = res[k].Foto;
                equipamento = res[k].IdEquipamento;
                manutentor = res[k].Manutentor;
                datatermino = res[k].DataTermino;
                if(res[k].IdManutencao == id){
                    return manutencao = {
                        idmanutencao: res[k].IdManutencao,
                        problema: res[k].Problema,
                        Datainicio: res[k].DataInicio,
                        Status: 'Concluido',
                        foto: res[k].Foto,
                        equipamento: res[k].IdEquipamento,
                        manutentor: res[k].Manutentor,
                        datatermino: diaAtual()
                    }
                }
            }
    })
}
function atualizar(status,id,datatermino){
   // const id = document.getElementById(id).value;
   console.log('chegou')
    fetch("/manutencoes", {
    method: 'put',
    body: JSON.stringify(listarid(1)),
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
function finalizarManutencao(){

}