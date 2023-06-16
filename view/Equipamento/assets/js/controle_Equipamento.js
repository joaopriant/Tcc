function carregarLocal() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbolocal = document.getElementById("cboLocal")
        let objLocais = JSON.parse(this.responseText);

        //let document.
        objLocais.forEach(local => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = local.Idsala;
            novaOpcao.text = ("Bloco:")+local.Bloco;
            cbolocal.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../local/controle_Local_listar.php");
    xmlhttp.send();

}
carregarLocal();
