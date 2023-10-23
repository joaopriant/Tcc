
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

function carregarDescricao(divid){
    const divListaDescricao = document.getElementById(divid);
    fetch("/descricoes", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Id Descricao</th><th>Descricao</th>";
        for(var k in res) {
            const id = res[k].idDescricao;
             const descricao = res[k].Descricao
            tabela+="<tr>";
                tabela+="<td>";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td>";
                    tabela+=descricao;
                tabela+="</td>";
                
            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaDescricao.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
}

function carregarFuncionarios(divid){
    const divListaCargos = document.getElementById(divid);
    fetch("/funcionarios", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Registro</th><th>Nome</th><th>Email</th><th>Cargo</th><th>Data de Nascimento</th>"; 
        for(var k in res) {
            const registro = res[k].RegistroFuncionario;
            const nome = res[k].Nome
            const email = res[k].Email;
            const senha = res[k].Senha;
            const date = new Date( res[k].DatadeNascimento);
            var dia = ("0" + date.getDate()).slice(-2);
            var mes = ("0" + (date.getMonth() + 1)).slice(-2);
            const data = date.getFullYear()+"-"+(mes)+"-"+(dia);
            const cargo = res[k].Cargo;

            tabela+="<tr>";
               tabela+="<td>";
                    tabela+= registro;
                tabela+="</td>";

                tabela+="<td>";
                    tabela+=nome;
                tabela+="</td>";
                
                tabela+="<td>";
                    tabela+=email;
                tabela+="</td>";

                tabela+="<td>";
                    tabela+=cargo;
                tabela+="</td>";

                tabela+="<td>";
                    tabela+=data;
                tabela+="</td>";
            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaCargos.innerHTML=tabela;
        console.log(res);
    }).catch((error) => {
        console.log(error)
    })
}

function carregarLocal(divid){
    const divListaLocal = document.getElementById(divid);
    fetch("/locais", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Id Sala</th><th>Sala</th><th>Andar</th><th>Bloco</th>";
        for(var k in res) {
            const id = res[k].Idsala;
            const sala = res[k].Sala;
            const andar = res[k].Andar;
            const bloco = res[k].Bloco;

            tabela+="<tr>";
            tabela+="<td>";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td>";
                    tabela+=sala;
                tabela+="</td>";

                tabela+="<td>";
                tabela+=andar;
                tabela+="</td>";

                tabela+="<td>";
                tabela+=bloco;
                tabela+="</td>";

            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaLocal.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
}


function carregarEquipamento(divid){
    const divListaresponsavels = document.getElementById(divid);
    fetch("/equipamentos", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>ID Equipamento</th><th>Num patrimonio</th><th>local</th>";
        for(var k in res) {
            const idequipamento = res[k].IdEquipamento;
            const numpatrimonio = res[k].numPatrimonio
            const local = res[k].Idsala;    
            
            tabela+="<tr>";
            tabela+="<td>";
            tabela+= idequipamento;
            tabela+="</td>";
            
            tabela+="<td>";
            tabela+=numpatrimonio;
                tabela+="</td>";
                
                tabela+="<td>";
                tabela+=local;
                tabela+="</td>";
                
                tabela+="</tr>";
                
            }
         tabela+="</table>";
         divListaresponsavels.innerHTML=tabela;
   
    }).catch((error) => {
        console.log(error)
    })
}

function carregarHistorico(divid){
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
         }
         tabela+="</table>";
         divListaManutencao.innerHTML=tabela;
   
    }).catch((error) => {
        console.log(error)
    })
}