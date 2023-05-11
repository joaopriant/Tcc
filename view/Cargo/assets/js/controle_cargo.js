<<<<<<< HEAD

forms = document.getElementById("forms");
function btnupdate(){

    const idcargo = document.getElementById("txtid").value;
    const nomecargo = document.getElementById("txtcargo").value;
    let cargo = {
        idcargo: idcargo,
        nomecargo: nomecargo
    }
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
}


function btndelete(){
    const idDelete = document.getElementById("txtid").value;
    let cargo = {
        idcargo: idDelete
    }
    fetch("../../controle/cargo/controle_Cargo_delete.php", {
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
}


function btncreate(){
    const novoCargo = document.getElementById("txtcargo").value;
    let cargo = {
        nomecargo: novoCargo
    }
    fetch("../../controle/cargo/controle_Cargo_cadastro.php", {
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
}


function preencherForm(id,cargo){
    document.getElementById("txtid").value = id;
    document.getElementById("txtcargo").value = cargo;
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
        let tabela = "<table><th>cod</th><th>cargo<th>";
        for(var k in res) {
            const id = res[k].IdCargo;
             const cargo = res[k].Cargo
            tabela+="<tr>";
                tabela+="<td onclick=preencherForm('"+id+"','"+cargo+"')>";
                    tabela+= res[k].IdCargo;
                tabela+="</td>";

                tabela+="<td  onclick=preencherForm('"+id+"','"+cargo+"')>";
                    tabela+=res[k].Cargo;
                tabela+="</td>";
                
            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaCargos.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
=======

forms = document.getElementById("forms");
function btnupdate(){
    forms.action = "../Cargo/controle/controle_Cargo_atualizar.php";
}

function btndelete(){
    forms.action = "../Cargo/controle/controle_Cargo_delete.php";
}

function btncreate(){
    const novoCargo = document.getElementById("txtcargo").value;
    let cargo = {
        nomecargo: novoCargo
    }
    fetch("../../controle/cargo/controle_Cargo_cadastro.php", {
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
}

function preencherForm(id,cargo){
    document.getElementById("txtid").value = id;
    document.getElementById("txtcargo").value = cargo;
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
        let tabela = "<table><th>cod</th><th>cargo<th>";
        for(var k in res) {
            const id = res[k].IdCargo;
             const cargo = res[k].Cargo
            tabela+="<tr>";
                tabela+="<td onclick=preencherForm('"+id+"','"+cargo+"')>";
                    tabela+= res[k].IdCargo;
                tabela+="</td>";

                tabela+="<td  onclick=preencherForm('"+id+"','"+cargo+"')>";
                    tabela+=res[k].Cargo;
                tabela+="</td>";
                
            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaCargos.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
>>>>>>> f8566549d5666b03c8b30cc6e194e373daa7e307
}