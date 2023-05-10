<?php
require_once "../manutencao/equipamento.php";

if (!isset($_POST['txtDescricao'])) {
    die("Descricao não encontrado\n");
}

$IdManutencao = $_POST['txtdescricao'];
$idequipamento = $_POST['txtidsala'];
$Problema = $_POST['txtnumsala'];
$Foto = $_POST['txtbloco'];
$DataInicio = $_POST['txtandar'];
$Status = $_POST['txtbloco'];
$Manutentor = $_POST['txtandar'];
$DataTermino = $_POST['txtdescricao'];


$IdManutencao = strip_tags($IdManutencao);
$idequipamento = strip_tags($idequipamento);
$Problema = strip_tags($Problema);
$Foto = strip_tags($Foto);
$DataInicio = strip_tags($DataInicio);
$Status = strip_tags($Status);
$Manutentor = strip_tags($Manutentor);
$DataTermino = strip_tags($DataTermino);

$manutencao = new Manutencao();
$manutencao->setIdEquipamento($idequipamento);
$manutencao->setDataInicio($DataInicio);
$manutencao->setDataTermino($DataTermino);
$manutencao->setFoto($Foto);
$manutencao->setIdEquipamento($idequipamento);
$manutencao->setManutentor($Manutentor);
$manutencao->setProblema($Problema);
$manutencao->setStatus($Status);


$resultado = $manutencao->atualizar();
if($resultado == true){
    echo "Atualizado com sucesso";
} else {
    echo "Erro ao atualizar";
}
?>