const button = document.getElementById("teste");
const modal = document.querySelector("dialog");
const conteudo = document.getElementById("conteudo");

function mostrar(){
    console.log("oi");
    let id = "<p>"
    id += "Nome: " + "</p>";
    conteudo.innerHTML = id;
    modal.showModal();
}