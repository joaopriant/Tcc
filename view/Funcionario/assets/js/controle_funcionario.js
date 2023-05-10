
forms = document.getElementById("forms");
function btnupdate(){
    forms.action = "../Funcionario/controle/controle_Funcionario_atualizar.php";
}

function btndelete(){
    forms.action = "../Funcionario/controle/controle_Funcionario_delete.php";
}

function btncreate(){
    forms.action = "../Funcionario/controle/controle_Funcionario_cadastrar.php";
}