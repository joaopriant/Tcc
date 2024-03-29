forms = document.getElementById("forms");
table = document.getElementById("tabela");

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

    const idsala = document.getElementById("txtid").value;
    const sala = document.getElementById("txtsala").value;
    const andar = document.getElementById("txtandar").value;
    const bloco = document.getElementById("txtbloco").value;

    let local = {
        idsala: idsala,
        sala: sala,
        andar: andar,
        bloco: bloco
        
    }
    console.log(local);
    fetch("/locais", {
    method: 'put',
    body: JSON.stringify(local),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        carregarLocal();
     
        if(res.cod==1){
            console.log("O campo não pode ser vazio");
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
    const idsala = document.getElementById("txtid").value;
    let local = {
        idsala: idsala
    }
    fetch("/locais", {
    method: 'delete',
    body: JSON.stringify(local),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        carregarLocal();
        if(res.cod==1){
            console.log("O campo não pode ser vazio");
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
    const sala = document.getElementById("txtsala").value;
    const andar = document.getElementById("txtandar").value;
    const bloco = document.getElementById("txtbloco").value;
    let local = {
        sala: sala,
        andar: andar,
        bloco: bloco 
       }
    fetch("/locais", {
    method: 'post',
    body: JSON.stringify(local),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        carregarLocal();
        if(res.cod==1){
            console.log("O campo não pode ser vazio");
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

function carregarLocal(){
    const divListaLocal = document.getElementById("tabela");
    fetch("/locais", {
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