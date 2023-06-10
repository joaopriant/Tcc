forms = document.getElementById("forms");

function atualizarpage(tempo){
    setInterval(function(){
        location.reload () 
      }, tempo);
}

function btnupdate(){

    const idlocal = document.getElementById("txtid").value;
    const sala = document.getElementById("txtsala").value;
    const andar = document.getElementById("txtandar").value;
    const bloco = document.getElementById("txtbloco").value;

    let local = {
        idlocal: idlocal,
        sala: sala,
        andar: andar,
        bloco: bloco
        
    }
    console.log(local);
    fetch("../../controle/local/controle_Local_atualizar.php", {
    method: 'post',
    body: JSON.stringify(local),
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
    let local = {
        idlocal: idDelete
    }
    fetch("../../controle/local/controle_Local_deletar.php", {
    method: 'post',
    body: JSON.stringify(local),
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
    let local = {
        sala: sala,
        andar: andar,
        bloco: bloco 
       }
    fetch("../../controle/local/controle_Local_cadastrar.php", {
    method: 'post',
    body: JSON.stringify(local),
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
    console.log(local)
}


function preencherForm(id,sala,andar,bloco){
    local = local.toString()
    document.getElementById("txtid").value = id;
    document.getElementById("txtsala").value = sala;
    document.getElementById("txtandar").value = andar;
    document.getElementById("txtbloco").value = bloco;
    console.log(local)
}

function carregarLocal(){
    const divListaCargos = document.getElementById("divListaCargos");
    fetch("../../controle/local/controle_Local_listarAll.php", {
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
            const id = res[k].Idsala;
            const sala = res[k].Sala;
            const andar = res[k].Andar;
            const bloco = res[k].Bloco;
       
             const meuClick = "onclick=preencherForm('"+id+"','"+sala+"','"+andar+"','"+bloco+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= id;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+id+"','"+local+"')\">";
                    tabela+=local;
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