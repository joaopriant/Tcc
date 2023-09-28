function carregarLocal() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        //console.log(this.responseText);
        let cbolocal = document.getElementById("cbolocal")
        let objLocais = JSON.parse(this.responseText);
        
        //let document.
        objLocais.forEach(local => {
            let novaOpcao = document.createElement("option");
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
    const cbo = document.getElementById(idelement);
    const id = cbo.value;
    console.log(id);
    return id;
}

function carregarEquipamento() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
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
function btncreate(){

    const problema = document.getElementById("txtproblema");
    const foto = document.getElementById("inpfoto");
    const status = document.getElementById("cbostatus");
    const datainicio = document.getElementById("date");
    const manutentor = document.getElementById("cbomanutentor");
    const equipamento = document.getElementById("cboequipamento");

    console.log(foto)
    let chamado = {
        problema: problema.value,
        foto: foto.value,
        status: status.value,
        datainicio: datainicio.value,
        manutentor: manutentor.value,
        equipamento: equipamento.value,
    }
    
    fetch("../../controle/manutencao/controle_manutencao_cadastrar.php", {
    method: 'post',
    body: JSON.stringify(chamado),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
    return response.json()
    }).then((res) => {
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

function carregarFuncionario() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        console.log(this.responseText);
        let cbofuncionario = document.getElementById("cbomanutentor");
        let objfuncionarios = JSON.parse(this.responseText);

        //let document.
        objfuncionarios.forEach(funcionario => {
            let novaOpcao = document.createElement("option");
            novaOpcao.value = funcionario.RegistroFuncionario;
            novaOpcao.text = funcionario.Nome;
            cbofuncionario.add(novaOpcao);
        });
    }
    xmlhttp.open("GET", "../../controle/Funcionario/controle_Funcionario_listarAll.php");
    xmlhttp.send();

}
carregarFuncionario();