<?php
require_once "cargo.php";

if(!isset($_POST['txtIdCargo'])){
    die("Cargo não encontrado\n");
}

$idcargo = $_POST['txtIdCargo'];


$idcargo = strip_tags($idcargo);


$Cargo = new Cargo();
$Cargo ->setIdCargo($idcargo);



$resultado = $Cargo->excluir();
if($resultado==true){
echo "Apagado com sucesso";
}else{
echo "Erro ao apagar";
}

?>