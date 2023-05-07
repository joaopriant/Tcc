<?php
require_once "cargo.php";

if (!isset($_POST['txtcargo'])) {
    echo ("Cargo não encontrado\n");
}

$cargo = $_POST['txtcargo'];

$cargo = strip_tags($cargo);

$Cargo = new Cargo();
$Cargo->setCargo($cargo);


$resultado = $Cargo->cadastrar();
if ($resultado == true) {
    echo "Cadastrado com sucesso";
} else {
    echo "Erro ao cadastrar";
}
?>