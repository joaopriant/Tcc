function carregarEquipamento() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cboequipamento = document.getElementById("cboequipamento")
        let objequipamento = JSON.parse(this.responseText);

        //let document.
        objequipamento.forEach(equipamento => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = equipamento.IdEquipamento;
            novaOpcao.text = equipamento.Responsavel;
            cboequipamento.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/equipamento/controle_Equipamento_listarAll.php");
    xmlhttp.send();

}
carregarEquipamento();