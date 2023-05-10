<?php
require_once "../Local/Local.php";

if (!isset($_POST['txtDescricao'])) {
    die("Descricao não encontrado\n");
}


$idsala = $_POST['txtidsala'];
$numsala = $_POST['txtnumsala'];
$bloco = $_POST['txtbloco'];
$andar = $_POST['txtandar'];

$idsala = strip_tags($idsala);
$numsala = strip_tags($numsala);
$bloco = strip_tags($bloco);
$andar = strip_tags($andar);

$Local = new Local();
$Local->setAndar($andar);
$Local->setBloco($bloco);
$Local->setidSala($idsala);
$Local->setAndar($andar);

$resultado = $Local->atualizar();
if($resultado == true){
    echo "Atualizado com sucesso";
} else {
    echo "Erro ao atualizar";
}
?>