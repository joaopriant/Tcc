<?php
require_once "../cargo";

if(!isset($_GET['txtIdCargo'])){
    die("Cargo não encontrado\n");
}

$idcargo = $_POST['txtIdCargo'];
$cargo = $_POST['txtCargo'];


$idcargo = strip_tags($idcargo);
$cargo = strip_tags($cargo);


$Cargo = new Cargo();
$Cargo->setIdCargo($idcargo);
$Cargo->setCargo($cargo);


$resultado = $Cargo->atualizar();
if($resultado == true){
    echo "Atualizado com sucesso";
} else {
    echo "Erro ao atualizar";
}
?>