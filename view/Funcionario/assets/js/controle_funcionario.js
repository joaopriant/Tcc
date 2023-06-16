function carregarCargo() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cboCargo = document.getElementById("cboCargo")
        let objCargo = JSON.parse(this.responseText);

        //let document.
        objCargo.forEach(cargo => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = cargo.IdCargo;
            novaOpcao.text = ("Cargo:")+cargo.Cargo;
            cboCargo.add(novaOpcao);
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

    const idsala = document.getElementById("txtid").value;
    const sala = document.getElementById("txtsala").value;
    const andar = document.getElementById("txtandar").value;
    const bloco = document.getElementById("txtbloco").value;

    let cargo = {
        idsala: idsala,
        sala: sala,
        andar: andar,
        bloco: bloco
        
    }
    console.log(cargo);
    fetch("../../controle/cargo/controle_cargo_atualizar.php", {
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
    const idsala = document.getElementById("txtid").value;
    let cargo = {
        idsala: idsala
    }
    fetch("../../controle/cargo/controle_cargo_deletar.php", {
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
    const sala = document.getElementById("txtsala").value;
    const andar = document.getElementById("txtandar").value;
    const bloco = document.getElementById("txtbloco").value;
    let cargo = {
        sala: sala,
        andar: andar,
        bloco: bloco 
       }
    fetch("../../controle/cargo/controle_cargo_cadastrar.php", {
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
    console.log(cargo)
}


function preencherForm(id,sala,andar,bloco){
    sala = sala.toString();
    andar = andar.toString();
    bloco = bloco.toString();
    document.getElementById("txtid").value = id;
    document.getElementById("txtsala").value = sala;
    document.getElementById("txtandar").value = andar;
    document.getElementById("txtbloco").value = bloco;
    console.log(sala)
    console.log(andar)
    console.log(bloco)
}

function carregarcargo(){
    const divListacargo = document.getElementById("divListacargo");
    fetch("../../controle/cargo/controle_cargo_listarAll.php", {
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
         divListacargo.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
}