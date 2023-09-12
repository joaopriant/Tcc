
forms = document.getElementById("forms");

function atualizarpage(tempo){
    setInterval(function(){
        location.reload () 
      }, tempo);
}

function btnupdescricao(){
    const idequipamento = document.getElementById("txtid").value;
    const numpatrimonio = document.getElementById("txtnumpatrimonio").value;
    const local = document.getElementById("cboLocal").value;
    const responsavel = document.getElementById("cboResponsavel").value;
    const descricao = document.getElementById("cboDescricao").value;
    
    let Equipamento = {
        idequipamento: idequipamento,
        numpatrimonio: numpatrimonio,
        local: local,
        responsavel: responsavel,
        descricao: descricao
    }
    console.log(Equipamento);
    fetch("../../controle/Equipamento/controle_Equipamento_atualizar.php", {
    method: 'post',
    body: JSON.stringify(Equipamento),
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
    //atualizarpage(200);
}


function btndelete(){
    const idequipamento = document.getElementById("txtid").value;
    const numpatrimonio = document.getElementById("txtnumpatrimonio").value;
    const local = document.getElementById("cboLocal").value;
    const responsavel = document.getElementById("cboResponsavel").value;
    const descricao = document.getElementById("cboDescricao").value;
    
    let Equipamento = {
        idequipamento: idequipamento,
        numpatrimonio: numpatrimonio,
        local: local,
        responsavel: responsavel,
        descricao: descricao
    }
    fetch("../../controle/Equipamento/controle_Equipamento_deletar.php", {
        method: 'post',
    body: JSON.stringify(Equipamento),
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
    atualizarpage(200)
}

function btncreate(){
    const idequipamento = document.getElementById("txtid").value;
    const numpatrimonio = document.getElementById("txtnumpatrimonio").value;
    const local = document.getElementById("cboLocal").value;
    const responsavel = document.getElementById("cboResponsavel").value;
    const descricao = document.getElementById("cboDescricao").value;
    
    let Equipamento = {
        idequipamento: idequipamento,
        numpatrimonio: numpatrimonio,
        local: local,
        responsavel: responsavel,
        descricao: descricao
    }
    fetch("../../controle/Equipamento/controle_Equipamento_cadastrar.php", {
        method: 'post',
        body: JSON.stringify(Equipamento),
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
    atualizarpage(200)
    console.log(Equipamento)
}

function preencherForm(idequipamento,numpatrimonio,local,responsavel,descricao){
    numpatrimonio = numpatrimonio.toString();
    local = local.toString();
    responsavel = responsavel.toString();
    descricao = descricao.toString();
    
    
    document.getElementById("txtid").value = idequipamento;
    document.getElementById("txtnumpatrimonio").value = numpatrimonio;
    document.getElementById("cboLocal").value = local;
    document.getElementById("cboFuncionario").value = responsavel;
    document.getElementById("cboDescricao").value = descricao;
}

function carregarEquipamentos(){
    const divListaresponsavels = document.getElementById("divListaEquipamentos");
    fetch("../../controle/Equipamento/controle_Equipamento_listarAll.php", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>ID Equipamento</th><th>Num patrimonio</th><th>local</th><th>Data de Nacimento</th><th>responsavel</th>";
        for(var k in res) {
            const idequipamento = res[k].idequipamento;
            const numpatrimonio = res[k].numpatrimonio
            const local = res[k].local;
            const descricao = res[k].descricao;
            const responsavel = res[k].responsavel
            
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

function carregarLocal() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbolocal = document.getElementById("cboLocal")
        let objLocais = JSON.parse(this.responseText);

        //let document.
        objLocais.forEach(local => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = local.Idsala;
            novaOpcao.text = ("Sala:")+local.Sala + (" Andar:")+ local.Andar + (" Bloco:")+ local.Bloco;
            cbolocal.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/local/controle_Local_listarAll.php");
    xmlhttp.send();

}
carregarLocal();

function carregarFuncionario() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbofuncionario = document.getElementById("cboResponsavel");
        let objfuncionarios = JSON.parse(this.responseText);

        //let document.
        objfuncionarios.forEach(funcionario => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = funcionario.RegistroFuncionario;
            novaOpcao.text = funcionario.Nome;
            cbofuncionario.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/Funcionario/controle_Funcionario_listarAll.php");
    xmlhttp.send();

}
carregarFuncionario();

function carregarDescricao() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbotipoequip = document.getElementById("cboDescricao")
        let objtipo = JSON.parse(this.responseText);

        objtipo.forEach(tipo => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = tipo.idDescricao;
            novaOpcao.text = tipo.Descricao;
            cbotipoequip.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/Descricao/controle_Descricao_listarAll.php");
    xmlhttp.send();

}
carregarDescricao();