function carregarLocal() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        //console.log(this.responseText);
        let cbolocal = document.getElementById("cbolocal")
        let objLocais = JSON.parse(this.responseText);
        
        //let document.
        objLocais.forEach(local => {
            let novaOpcao = document.createElement("option");
            const idlocal = local.IdSala;
            novaOpcao.value = local.Idsala;
            novaOpcao.text = ("Sala:")+local.Sala + (" Andar:")+ local.Andar + (" Bloco:")+ local.Bloco;
            cbolocal.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/local/controle_Local_listarAll.php");
    xmlhttp.send();

}
carregarLocal();
function capturarvaluecbo(idelement){
    const cbo = document.getElementById(idelement)
    const id = cbo.value; 
    console.log(id);
    return id;
}

function carregarEquipamento() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        //console.log(this.responseText);
        let cboequipamento = document.getElementById("cboequipamento")
        let objequipamento = JSON.parse(this.responseText);
        objequipamento.forEach(equipamento => {
            if(equipamento.Idsala == capturarvaluecbo('cbolocal')){
            let novaOpcao = document.createElement("option");
            novaOpcao.value = equipamento.IdEquipamento;
            novaOpcao.text = equipamento.numPatrimonio;
            cboequipamento.add(novaOpcao);
        }else{
            for (let i = 0; i < cboequipamento.options.length; i++) {
                if (cboequipamento.options[i].value == equipamento.IdEquipamento) {
                  cboequipamento.remove(i);
                }
              }
        }
        });
    }
    xmlhttp.open("GET", "../../controle/equipamento/controle_Equipamento_listarAll.php");
    xmlhttp.send();

}

