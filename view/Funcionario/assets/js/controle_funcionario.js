forms = document.getElementById("forms");
const chkCadastro = document.getElementById("chkCadastro");

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
        date: date,
        permissaoCadasttro:chkCadastro.checked
    }
    console.log(funcionario)
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
  // atualizarpage(200);
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
function cadastroAcesso(funcionario){
    
    let acessoCadastro = document.getElementById("cadastro");
    let acessoAbertura = document.getElementById("AberturaChamado");
    let acessoAcompanhamento = document.getElementById("acompanhamento");
    let acessoManutencao = document.getElementById("manutencao");
    let acessoDashboard = document.getElementById("dashboard");


    acessoCadastro = acessoCadastro.checked == true ? 1 : 0;
    acessoAbertura = acessoAbertura.checked === true ? 1 : 0;
    acessoAcompanhamento = acessoAcompanhamento.checked === true ? 1 : 0;
    acessoManutencao = acessoManutencao.checked === true ? 1 : 0;
    acessoDashboard = acessoDashboard.checked === true ? 1 : 0;

    acesso = {
        funcionario: funcionario,
        AcompanhamentoChamado: acessoAcompanhamento,
        AberturaChamado: acessoAbertura,
        Manutencao: acessoManutencao,
        Cadastro: acessoCadastro,
        Dashboard: acessoDashboard
    }
    console.log(acesso);

    if (res.status === 200) {
        console.log("Post successfully created!")
        fetch("../../controle/acesso/controle_acesso_cadastrar.php", {
            method: 'post',
            body: JSON.stringify(acesso),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((res) => {
            console.log(res)
            
        })
}}

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
    cadastroAcesso(registro)
    return response.json()
    }).then((res) => {
        
        const div = document.getElementById("divResposta");
        if(res.cod==1){
            div.innerHTML = "O campo não pode ser vazio";
        }
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })
    //atualizarpage(200)
}


function preencherForm(registro,nome,email,cargo,date){
    nome = nome.toString();
    email = email.toString();

    document.getElementById("txtid").value = registro;
    document.getElementById("txtnome").value = nome;
    document.getElementById("txtemail").value = email;
    document.getElementById("date").value = date;
    document.getElementById("cbocargo").value = cargo;
}

function carregarFuncionarios(divid){
    const divListaCargos = document.getElementById(divid);
    fetch("../../controle/funcionario/controle_Funcionario_listarAll.php", {
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
            const date = new Date( res[k].DatadeNacimento);
            var dia = ("0" + date.getDate()).slice(-2);
            var mes = ("0" + (date.getMonth() + 1)).slice(-2);
            const data = date.getFullYear()+"-"+(mes)+"-"+(dia);
            console.log(data)
            const IdCargo = res[k].Cargo.IdCargo;
            const cargo = res[k].Cargo.Cargo;
             const meuClick = "onclick=preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')";

            tabela+="<tr>";
               tabela+="<td onclick=\""+meuClick  +"\">";
                    tabela+= registro;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=nome;
                tabela+="</td>";
                
                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=email;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
                    tabela+=cargo;
                tabela+="</td>";

                tabela+="<td  onclick=\"preencherForm('"+registro+"','"+nome+"','"+email+"','"+IdCargo+"','"+data+"')\">";
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