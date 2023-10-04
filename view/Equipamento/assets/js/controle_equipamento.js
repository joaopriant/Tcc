
forms = document.getElementById("forms");

function atualizarpage(tempo){
    setInterval(function(){
        location.reload () 
      }, tempo);
}
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
function btnupdate(){
    const idequipamento = document.getElementById("txtid").value;
    const numpatrimonio = document.getElementById("txtnumpatrimonio").value;
    const local = document.getElementById("cboLocal").value;
    const responsavel = document.getElementById("cboResponsavel").value;
    const descricao = document.getElementById("cboDescricao").value;
    const numEquip = document.getElementById("txtnumequip").value;
    
    let Equipamento = {
        idequipamento: idequipamento,
        numpatrimonio: numpatrimonio,
        local: local,
        responsavel: responsavel,
        descricao: descricao,
        NumeroEquip: numEquip
    }
    console.log(Equipamento);
    fetch("/equipamentos", {
    method: 'put',
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
    
    let Equipamento = {
        idequipamento: idequipamento,
    }
    fetch("/equipamentos", {
        method: 'delete',
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
}

function btncreate(){
    const idequipamento = document.getElementById("txtid").value;
    const numpatrimonio = document.getElementById("txtnumpatrimonio").value;
    const local = document.getElementById("cboLocal").value;
    const responsavel = document.getElementById("cboResponsavel").value;
    const descricao = document.getElementById("cboDescricao").value;
    const numEquip = document.getElementById("txtnumequip").value;
    
    let Equipamento = {
        idequipamento: idequipamento,
        numpatrimonio: numpatrimonio,
        local: local,
        responsavel: responsavel,
        descricao: descricao,
        NumeroEquip: numEquip
    }
    fetch("/equipamentos", {
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

function preencherForm(idequipamento,numpatrimonio,local,responsavel,descricao,NumeroEquip){
    numpatrimonio = numpatrimonio.toString();
    NumeroEquip = NumeroEquip.toString();
    
    
    document.getElementById("txtid").value = idequipamento;
    document.getElementById("txtnumpatrimonio").value = numpatrimonio;
    document.getElementById("cboLocal").value = local;
    document.getElementById("cboResponsavel").value = responsavel;
    document.getElementById("cboDescricao").value = descricao;
    document.getElementById("txtnumequip").value = NumeroEquip;
}

function carregarEquipamentos(){
    const divListaresponsavels = document.getElementById("tabela");
    fetch("/equipamentos", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>ID Equipamento</th><th>Num patrimonio</th><th>Local</th><th>Descrição</th><th>Responsavel</th><th>Num Equip</th>";
        for(var k in res) {
            const idequipamento = res[k].IdEquipamento;
            const numpatrimonio = res[k].numPatrimonio;
            const numEquip = res[k].NumeroEquip;
            const descricao = res[k].idDescricao;
            const local = res[k].Idsala;
            const responsavel = res[k].Responsavel
            
            const meuClick = "onclick=preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"','"+numEquip+"')";
            
            tabela+="<tr>";
            tabela+="<td onclick=\""+meuClick+"\">";
            tabela+= idequipamento;
            tabela+="</td>";
            
            tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"','"+numEquip+"')\">";
            tabela+=numpatrimonio;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"','"+numEquip+"')\">";
                tabela+=local;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"','"+numEquip+"')\">";
                tabela+=descricao;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"','"+numEquip+"')\">";
                tabela+=responsavel;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+idequipamento+"','"+numpatrimonio+"','"+local+"','"+responsavel+"','"+descricao+"','"+numEquip+"')\">";
                tabela+=numEquip;
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
    xmlhttp.open("GET", "/locais");
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
    xmlhttp.open("GET", "/funcionarios");
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
    xmlhttp.open("GET", "descricoes");
    xmlhttp.send();

}
carregarDescricao();