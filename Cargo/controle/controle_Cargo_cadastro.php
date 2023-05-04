<<<<<<< HEAD
<?php
require_once "cargo.php";

if (!isset($_POST['txtIdCargo'])) {
    die("Cargo não encontrado\n");
}

if (!isset($_POST['txtCargo'])) {
    echo ("Cargo não encontrado\n");
}


$idcargo = $_POST['txtIdCargo'];
$cargo = $_POST['txtCargo'];


$idcargo = strip_tags($idcargo);
$cargo = strip_tags($cargo);

$Cargo = new Cargo();
$Cargo->setIdCargo($idcargo);
$Cargo->setCargo($cargo);


$resultado = $Cargo->cadastrar();
if ($resultado == true) {
    echo "Cadastrado com sucesso";
} else {
    echo "Erro ao cadastrar";
}
=======
<?php
require_once "cargo.php";

if (!isset($_POST['txtIdCargo'])) {
    die("Cargo não encontrado\n");
}

if (!isset($_POST['txtCargo'])) {
    echo ("Cargo não encontrado\n");
}


$idcargo = $_POST['txtIdCargo'];
$cargo = $_POST['txtCargo'];


$idcargo = strip_tags($idcargo);
$cargo = strip_tags($cargo);

$Cargo = new Cargo();
$Cargo->setIdCargo($idcargo);
$Cargo->setCargo($cargo);


$resultado = $Cargo->cadastrar();
if ($resultado == true) {
    echo "Cadastrado com sucesso";
} else {
    echo "Erro ao cadastrar";
}
>>>>>>> f5be3071c12af259a66479f61599b4ece0886f6c
?>