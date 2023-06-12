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
    fetch("../../controle/cargo/controle_Cargo_atualizar.php", {
    method: 'post',
    body: JSON.stringify(cargo),
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
    atualizarpage(200);
}


function btndelete(){
    const idDelete = document.getElementById("txtid").value;
    let cargo = {
        idcargo: idDelete
    }
    fetch("../../controle/cargo/controle_Cargo_deletar.php", {
    method: 'post',
    body: JSON.stringify(cargo),
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
    const novoCargo = document.getElementById("txtcargo").value;
    let cargo = {
        nomecargo: novoCargo
    }
    fetch("../../controle/cargo/controle_Cargo_cadastrar.php", {
    method: 'post',
    body: JSON.stringify(cargo),
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
    console.log(cargo)
}


function preencherForm(id,cargo){
    cargo = cargo.toString()
    document.getElementById("txtid").value = id;
    document.getElementById("txtcargo").value = cargo;
    console.log(cargo)
}

function carregarCargos(){
    const divListaCargos = document.getElementById("divListaCargos");
    fetch("../../controle/cargo/controle_Cargo_listarAll.php", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Id Cargo</th><th>Cargo</th>";
        for(var k in res) {
            const id = res[k].IdCargo;
             const cargo = res[k].Cargo
       
             const meuClick = "onclick=preencherForm('"+id+"','"+cargo+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+cargo+"')\">";
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