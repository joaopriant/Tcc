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
            novaOpcao.text = ("Bloco:")+local.Bloco;
            cbolocal.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../local/controle_Local_listar.php");
    xmlhttp.send();

}
carregarLocal();

function carregarFuncionario() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbofuncionario = document.getElementById("cboFuncionario");
        let objfuncionarios = JSON.parse(this.responseText);

        //let document.
        objfuncionarios.forEach(funcionario => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = funcionario.RegistroFuncionario;
            novaOpcao.text = ("nome:")+funcionario.Nome + (" Email:") +funcionario.Email;
            console.log(funcionario.Nome)
            cbofuncionario.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../Funcionario/controle_Funcionario_listar.php");
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
            novaOpcao.text = ("Tipo:")+tipo.Descricao;
            cbotipoequip.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../Descricao/controle_Descricao_listar.php");
    xmlhttp.send();

}
carregarDescricao();

forms = document.getElementById("forms");

function atualizarpage(tempo){
    setInterval(function(){
        location.reload () 
      }, tempo);
}

function btnupdate(){

    const registro = document.getElementById("txtid").value;
    const nome = document.getElementById("txtnome").value;
    const email = document.getElementById("txtemail").value;
    const cargo = document.getElementById("cbocargo").value;
    const senha = document.getElementById("txtsenha").value;
    const date = document.getElementById("date").value;

    let funcionario = {
        registro: registro,
        nome: nome,
        email: email,
        cargo: cargo,
        senha: senha,
        date: date
    }
    console.log(cargo);
    fetch("../../controle/Funcionario/controle_Funcionario_atualizar.php", {
    method: 'post',
    body: JSON.stringify(funcionario),
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
    const registro = document.getElementById("txtid").value;
    const nome = document.getElementById("txtnome").value;
    const email = document.getElementById("txtemail").value;
    const cargo = document.getElementById("cbocargo").value;
    const senha = document.getElementById("txtsenha").value;
    const date = document.getElementById("date").value;

    let funcionario = {
        registro: registro,
        nome: nome,
        email: email,
        cargo: cargo,
        senha: senha,
        date: date
    }
    fetch("../../controle/Funcionario/controle_Funcionario_deletar.php", {
    method: 'post',
    body: JSON.stringify(funcionario),
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
    const registro = document.getElementById("txtid").value;
    const nome = document.getElementById("txtnome").value;
    const email = document.getElementById("txtemail").value;
    const cargo = document.getElementById("cbocargo").value;
    const senha = document.getElementById("txtsenha").value;
    const date = document.getElementById("date").value;

    let funcionario = {
        registro: registro,
        nome: nome,
        email: email,
        cargo: cargo,
        senha: senha,
        date: date
    }
    fetch("../../controle/Funcionario/controle_Funcionario_cadastrar.php", {
    method: 'post',
    body: JSON.stringify(funcionario),
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
    console.log(funcionario)
}


function preencherForm(registro,nome,email,cargo,senha,date){
    nome = nome.toString();
    email = email.toString();
    cargo = cargo.toString();
    senha = senha.toString();


    document.getElementById("txtid").value = registro;
    document.getElementById("txtnome").value = nome;
    document.getElementById("txtemail").value = email;
    document.getElementById("cbocargo").value = cargo;
    document.getElementById("date").value = today;
    console.log(date)
}

function carregarFuncionarios(){
    const divListaCargos = document.getElementById("divListaFuncionarios");
    fetch("../../controle/funcionario/controle_Funcionario_listarAll.php", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Registro Funcionario</th><th>Nome</th><th>Email</th><th>Data de Nacimento</th><th>Cargo</th>";
        for(var k in res) {
            const registro = res[k].RegistroFuncionario;
            const nome = res[k].Nome
            const email = res[k].Email;
            const senha = res[k].Senha;
            const date = res[k].DatadeNacimento;
            const cargo = res[k].Cargo
       
             const meuClick = "onclick=preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+date+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= registro;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+date+"')\">";
                    tabela+=nome;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+date+"')\">";
                    tabela+=email;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+date+"')\">";
                    tabela+=date;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+date+"')\">";
                    tabela+=cargo;
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