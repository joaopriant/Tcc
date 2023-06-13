function carregarCargo() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbocargo = document.getElementById("cbocargo")
        let objcargo = JSON.parse(this.responseText);

        //let document.
        objcargo.forEach(cargo => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = cargo.IdCargo;
            novaOpcao.text = cargo.Cargo;
            cbocargo.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/cargo/controle_Cargo_listarAll.php");
    xmlhttp.send();

}
carregarCargo();

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
    funcionario = funcionario.toString()
    document.getElementById("txtid").value = registro;
    document.getElementById("txtnome").value = nome;
    document.getElementById("txtemail").value = email;
    document.getElementById("cbocargo").value = cargo;
    document.getElementById("txtsenha").value = senha;
    document.getElementById("date").value = date;
    console.log(funcionario)
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
                    tabela+=cargo;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+date+"')\">";
                    tabela+=date;
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