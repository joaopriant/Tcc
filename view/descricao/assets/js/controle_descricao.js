function atualizarpage(tempo){
    setInterval(function(){
        location.reload () 
      }, tempo);
}

function btnupdate(){

    const iddesc = document.getElementById("txtid").value;
    const desc = document.getElementById("txtDescricao").value;
    let descricao = {
        iddesc: iddesc,
        desc: desc
        
    }
    console.log(descricao);
    fetch("../../controle/descricao/controle_Descricao_atualizar.php", {
    method: 'post',
    body: JSON.stringify(descricao),
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
    let descricao = {
        iddesc: idDelete
    }
    fetch("../../controle/descricao/controle_Descricao_delete.php", {
    method: 'post',
    body: JSON.stringify(descricao),
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
    const novaDescricao = document.getElementById("txtDescricao").value;
    let descricao = {
        desc: novaDescricao
    }
    fetch("../../controle/descricao/controle_Descricao_cadastrar.php", {
    method: 'post',
    body: JSON.stringify(descricao),
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
    console.log(descricao)
   // atualizarpage(200)
}


function preencherForm(id,descricao){
    descricao = descricao.toString()
    document.getElementById("txtid").value = id;
    document.getElementById("txtDescricao").value = descricao;
    console.log(descricao)
}

function carregarDescricao(){
    const divListaDescricao = document.getElementById("divListaDescricao");
    fetch("../../controle/descricao/controle_Descricao_listarAll.php", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Id Descricao</th><th>Descricao</th>";
        for(var k in res) {
            const id = res[k].idDescricao;
             const descricao = res[k].Descricao
            tabela+="<tr>";
                tabela+="<td onclick=preencherForm('"+id+"','"+descricao+"')>";
                    tabela+= res[k].idDescricao;
                tabela+="</td>";

                tabela+="<td  onclick=preencherForm('"+id+"','"+descricao+"')>";
                    tabela+=res[k].Descricao;
                tabela+="</td>";
                
            tabela+="</tr>";
            
         }
         tabela+="</table>";
         divListaDescricao.innerHTML=tabela;
        console.log(res);
   
    }).catch((error) => {
        console.log(error)
    })
}