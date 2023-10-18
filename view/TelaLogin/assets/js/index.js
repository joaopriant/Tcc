function btnPost(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    let login = {
        email: email,
        senha: senha
    }
    fetch("/login", {
    method: 'post',
    body: JSON.stringify(login),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    }).then((response) => {
        return response.text()
    }).then((res) => {
        const obj = JSON.parse(res);
        
        if(obj.status=="true"){
            localStorage.setItem("dadosLogin",res);
            console.log(obj.acessos.Dashboard)
            if(obj.acessos.Dashboard === 1){
                window.location = "/view/dashboard/dashboard.html";
            }
            else if(obj.acessos.Manutencao===1){
                window.location = "/view/Dashboard-manutentor/Historico-manutencao.html";
            }
            else if(obj.acessos.Cadastro === 1){
                window.location = "/view/Listagem-tabela/listagem.html";
            }
            else if(obj.acessos.AberturaChamado===1){
                window.location = "/view/Dashboard-manutentor/Historico-manutencao.html";
            }
            
        }else{
            alert("Email ou senha inválido!")
        }
        console.log(res)

    }).catch((error) => {
        console.log(error)
    })
    
}
