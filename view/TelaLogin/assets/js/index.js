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
           
                alert("abertura chamados");
                window.location = "/view/Dashboard-manutentor/Historico-manutencao.html";
          
            
        }else{
            alert("Email ou senha inválido!")
        }
        console.log(res)

    }).catch((error) => {
        console.log(error)
    })
    
}
