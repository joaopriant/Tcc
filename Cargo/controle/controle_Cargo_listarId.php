<<<<<<< HEAD
<?php
require_once "cargo.php";

if(!isset($_GET['txtIdCargo'])){
    die("Cargo não encontrado\n");
}

$idcargo = $_GET['txtIdCargo'];

$idcargo = strip_tags($idcargo);

$Cargo = new Cargo();
$Cargo->buscarCargoPorId($idcargo);

$tabela="<table border='1'>";
$tabela.="<tr>";
$tabela.="<td>".$idcargo->getIdCargo()."</td>";
$tabela.="<td>".$cargo->getCargo()."</td>";

$tabela.="</tr>";
$tabela.="</table>";
=======
<?php
require_once "cargo.php";

if(!isset($_GET['txtIdCargo'])){
    die("Cargo não encontrado\n");
}

$idcargo = $_GET['txtIdCargo'];

$idcargo = strip_tags($idcargo);

$Cargo = new Cargo();
$Cargo->buscarCargoPorId($idcargo);

$tabela="<table border='1'>";
$tabela.="<tr>";
$tabela.="<td>".$idcargo->getIdCargo()."</td>";
$tabela.="<td>".$cargo->getCargo()."</td>";

$tabela.="</tr>";
$tabela.="</table>";
>>>>>>> f5be3071c12af259a66479f61599b4ece0886f6c
echo $tabela;