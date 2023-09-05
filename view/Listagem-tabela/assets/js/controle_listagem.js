
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



function carregarFuncionario(divid){
    const divListaCargos = document.getElementById(divid);
    fetch("../../controle/funcionario/controle_Funcionario_listarAll.php", {
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
            const date = new Date( res[k].DatadeNacimento);
            var dia = ("0" + date.getDate()).slice(-2);
            var mes = ("0" + (date.getMonth() + 1)).slice(-2);
            const data = date.getFullYear()+"/"+(mes)+"/"+(dia);
            console.log(data)
            const IdCargo = res[k].Cargo.IdCargo;
            const cargo = res[k].Cargo.Cargo;
             const meuClick = "onclick=preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= registro;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=nome;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=email;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=cargo;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=data;
                tabela+="</td>";
                            
            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaCargos.innerHTML=tabela;
    }).catch((error) => {
        console.log(error)
    })
}

function carregarLocal(divid){
    const divListaLocal = document.getElementById(divid);
    fetch("../../controle/local/controle_Local_listarAll.php", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Id problema</th><th>problema</th><th>Datainicio</th><th>Status</th>";
        for(var k in res) {
            const id = res[k].Idproblema;
            const problema = res[k].problema;
            const Datainicio = res[k].Datainicio;
            const Status = res[k].Status;
       
             const meuClick = "onclick=preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')\">";
                    tabela+=problema;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')\">";
                tabela+=Datainicio;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')\">";
                tabela+=Status;
                tabela+="</td>";

            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaLocal.innerHTML=tabela;
   
    }).catch((error) => {
        console.log(error)
    })
}


function carregarEquipamento(divid){
    const divListaresponsavels = document.getElementById(divid);
    fetch("../../controle/Equipamento/controle_Equipamento_listarAll.php", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>ID Equipamento</th><th>Num patrimonio</th><th>local</th><th>Responsavel</th><th>Descrição</th>";
        for(var k in res) {
            const idequipamento = res[k].IdEquipamento;
            const numpatrimonio = res[k].numPatrimonio
            const local = res[k].Idsala;
            const descricao = res[k].Descricao_idDescricao;
            const responsavel = res[k].Responsavel;
            
            const meuClick = "onclick=preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"')";
            
            tabela+="<tr>";
            tabela+="<td onclick=\""+meuClick+"\">";
            tabela+= idequipamento;
            tabela+="</td>";
            
            tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"')\">";
            tabela+=numpatrimonio;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"')\">";
                tabela+=local;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"')\">";
                tabela+=descricao;
                tabela+="</td>";
                
                tabela+="<td onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"')\">";
                tabela+=responsavel;
                tabela+="</td>";
                tabela+="<td class='qrcode' onclick=mostrar()>"
                tabela+="<p>Mostar QrCode</p>";
                tabela+="</td>";
                tabela+="</tr>";
                
            }
         tabela+="</table>";
         divListaresponsavels.innerHTML=tabela;
   
    }).catch((error) => {
        console.log(error)
    })
}


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
        let tabela = "<table><th>Id Chamado</th><th>Problema</th><th>Data de inicio</th><th>Status</th>";
        for(var k in res) {
            const id = res[k].idManutencao;
            const problema = res[k].problema;
            const Datainicio = res[k].DataInicio;
            const Status = res[k].Status;
       
             const meuClick = "onclick=preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')\">";
                    tabela+=problema;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')\">";
                tabela+=Datainicio;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+problema+"','"+Datainicio+"','"+Status+"')\">";
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