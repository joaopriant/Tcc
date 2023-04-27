<?php
require_once "../Equipamento/equipamento.php";

if (!isset($_POST['txtDescricao'])) {
    die("Descricao não encontrado\n");
}


$idequipamento = $_POST['txtidsala'];
$numpatrimonio = $_POST['txtnumsala'];
$responsavel = $_POST['txtbloco'];
$idsala = $_POST['txtandar'];
$descricao = $_POST['txtdescricao'];

$idsala = strip_tags($idsala);
$responsavel = strip_tags($responsavel);
$numpatrimonio = strip_tags($numpatrimonio);
$idequipamento = strip_tags($idequipamento);
$descricao = strip_tags($descricao);

$Equipamento = new Equipamento();
$Equipamento->setIdEquipamento($idequipamento);
$Equipamento->setnumPatrimonio($numpatrimonio);
$Equipamento->setIdsala($idsala);
$Equipamento->setidDescricao($descricao);
$Equipamento->setRegistroFuncionario($responsavel);


$resultado = $Equipamento->atualizar();
if($resultado == true){
    echo "Atualizado com sucesso";
} else {
    echo "Erro ao atualizar";
}
?>