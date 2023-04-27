<?php
require_once "../Descricao/Descricao.php";

if (!isset($_POST['txtDescricao'])) {
    die("Descricao não encontrado\n");
}


$Desc = $_POST['txtDescricao'];
$IdDesc = $_POST['txtIdDescricao'];

$Desc = strip_tags($Desc);
$IdDesc = strip_tags($IdDesc);

$descricao = new Descricao();
$descricao->setDescricao($Desc);
$descricao->setidDescricao($IdDesc);

$resultado = $descricao->atualizar();
if($resultado == true){
    echo "Atualizado com sucesso";
} else {
    echo "Erro ao atualizar";
}
?>