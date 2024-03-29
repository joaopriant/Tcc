forms = document.getElementById("forms");
const chkCadastro = document.getElementById("chkCadastro");

const registro = document.getElementById("txtid");
const nome = document.getElementById("txtnome");
const email = document.getElementById("txtemail");
const cargo = document.getElementById("cbocargo");
const senha = document.getElementById("txtsenha");
const date = document.getElementById("date");


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
function atualizarpage(tempo){
    setInterval(function(){
        location.reload () 
      }, tempo);
}

function btndelete(){
    let funcionario = {
        registro:registro.value
    }
    fetch("/funcionarios", {
    method: 'delete',
    body: JSON.stringify(funcionario),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        carregarFuncionarios("tabela")
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
    //atualizarpage(200)
}

function btncreate(){
    let acessoCadastro = document.getElementById("ckbCadastro");
    let acessoAbertura = document.getElementById("ckbAberturaChamado");
    let acessoAcompanhamento = document.getElementById("ckbAcompanhamento");
    let acessoManutencao = document.getElementById("ckbManutencao");
    let acessoDashboard = document.getElementById("ckbDashboard");

    acessoCadastro = acessoCadastro.checked === true ? 1 : 0;
    acessoAbertura = acessoAbertura.checked === true ? 1 : 0;
    acessoAcompanhamento = acessoAcompanhamento.checked === true ? 1 : 0;
    acessoManutencao = acessoManutencao.checked === true ? 1 : 0;
    acessoDashboard = acessoDashboard.checked === true ? 1 : 0;
    console.log(nome)
    let funcionario = {
        registro: registro.value,
        nome: nome.value,
        email: email.value,
        cargo: cargo.value,
        senha: senha.value,
        date: date.value,
        AcompanhamentoChamado: acessoAcompanhamento,
        AberturaChamado: acessoAbertura,
        Manutencao: acessoManutencao,
        Cadastro: acessoCadastro,
        Dashboard: acessoDashboard
    }
    
    fetch("/funcionarios", {
    method: 'post',
    body: JSON.stringify(funcionario),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
    return response.json()
    }).then((res) => {
        carregarFuncionarios("tabela")
        const div = document.getElementById("alerta");
        if(res.cod==1){
            div.innerHTML = "O campo não pode ser vazio";
        }
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })
    //atualizarpage(200)
}

function preencherForm(registro,nome,email,cargo,date,acompanhamento,abertura,cadastro,dashboard,manutencao) {
    let acessoCadastro = document.getElementById("ckbCadastro");
    let acessoAbertura = document.getElementById("ckbAberturaChamado");
    let acessoAcompanhamento = document.getElementById("ckbAcompanhamento");
    let acessoManutencao = document.getElementById("ckbManutencao");
    let acessoDashboard = document.getElementById("ckbDashboard");
    cadastro = cadastro === "1" ? true : false;
    abertura = abertura === "1" ? true : false;
    acompanhamento = acompanhamento === "1" ? true : false;
    manutencao = manutencao === "1" ? true : false;
    dashboard = dashboard === "1" ? true : false;
    nome = nome.toString();
    email = email.toString()
    document.getElementById("txtid").value = registro;
    document.getElementById("txtnome").value = nome;
    document.getElementById("txtemail").value = email;
    document.getElementById("date").value = date;
    document.getElementById("cbocargo").value = cargo;
    acessoAcompanhamento.checked = acompanhamento;
    acessoAbertura.checked = abertura;
    acessoCadastro.checked = cadastro;
    acessoManutencao.checked = manutencao;
    acessoDashboard.checked = dashboard;
}

function carregarFuncionarios(divid){
    const divListaCargos = document.getElementById(divid);
    fetch("/funcionarios", {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        let tabela = "<table><th>Registro</th><th>Nome</th><th>Email</th><th>Cargo</th><th>Data de Nascimento</th>"; 
        for(var k in res) {
            const registro = res[k].RegistroFuncionario;
            const nome = res[k].Nome
            const email = res[k].Email;
            const senha = res[k].Senha;
            const date = new Date( res[k].DatadeNascimento);
            var dia = ("0" + date.getDate()).slice(-2);
            var mes = ("0" + (date.getMonth() + 1)).slice(-2);
            const data = date.getFullYear()+"-"+(mes)+"-"+(dia);
            const cargo = res[k].Cargo;
            const acompanhamento = res[k].AcompanhamentoChamado;
            const abertura = res[k].AberturaChamado;
            const cadastro = res[k].Cadastro;
            const dashboard = res[k].Dashboard;
            const manutencao = res[k].Manutencao;
            console.log(manutencao)
            const meuClick = "onclick=preencherForm('"+registro+"','"+nome+"','"+email+"','"+cargo+"','"+data+"','"+acompanhamento+"','"+abertura+"','"+cadastro+"','"+dashboard+"','"+manutencao+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick+"\">";
                    tabela+= registro;
                tabela+="</td>";

                tabela+="<td onclick=\""+meuClick+"\">";
                    tabela+=nome;
                tabela+="</td>";
                
                tabela+="<td onclick=\""+meuClick+"\">";
                    tabela+=email;
                tabela+="</td>";

                tabela+="<td onclick=\""+meuClick+"\">";
                    tabela+=cargo;
                tabela+="</td>";

                tabela+="<td onclick=\""+meuClick+"\">";
                    tabela+=data;
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
