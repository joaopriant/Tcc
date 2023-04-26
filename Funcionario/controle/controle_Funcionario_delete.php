<?php
require_once "funcionario.php";

if(!isset($_POST['txtRegistroFuncionario'])){
    die("Registro não encontrado\n");
}


$registrofuncionario = $_POST['txtRegistroFuncionario'];


$registrofuncionario = strip_tags($registrofuncionario);


$funcionario = new funcionario();
$funcionario->setRegistroFuncionario($registrofuncionario);



$resultado = $funcionario->excluir();
if($resultado==true){
echo "Apagado com sucesso";
}else{
echo "Erro ao apagar";
}

?>