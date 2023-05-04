function alteraraction(action){

}
function btnupdate(){
    forms = document.getElementById("forms");
    forms.action = "../Funcionario/controle/controle_Funcionario_atualizar.php";
    
}

var btndelete = document.getElementById("delete");
btndelete.addEventListener('click',function btndelete(){
    alteraraction(controle_Funcionario_delete.php)
})
var btncreate = document.getElementById("create");
btncreate.addEventListener('click',function btncreate(){
    alteraraction(controle_Funcionario_cadastrar.php)
})