function btnPost(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if(validadorcampo()){
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
        return response.json()
    }).then((res) => {
        

    }).catch((error) => {
        console.log(error)
    })
    }
}
