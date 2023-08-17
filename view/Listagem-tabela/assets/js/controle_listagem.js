
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
        console.log(res);
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
        let tabela = "<table><th>Id Sala</th><th>Sala</th><th>Andar</th><th>Bloco</th>";
        for(var k in res) {
            const id = res[k].Idsala;
            const sala = res[k].Sala;
            const andar = res[k].Andar;
            const bloco = res[k].Bloco;
       
             const meuClick = "onclick=preencherForm('"+id+"','"+sala+"','"+andar+"','"+bloco+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+sala+"','"+andar+"','"+bloco+"')\">";
                    tabela+=sala;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+sala+"','"+andar+"','"+bloco+"')\">";
                tabela+=andar;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+sala+"','"+andar+"','"+bloco+"')\">";
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
            const numpatrimonio = res[k].numPatrimônio
            const local = res[k].Local_Idsala;
            const descricao = res[k].Descricao_idDescricao;
            const responsavel = res[k].Responsavel
            
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
                
                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"')\">";
                tabela+=responsavel;
                tabela+="</td>";
                
                tabela+="</tr>";
                
            }
         tabela+="</table>";
         divListaresponsavels.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
}

