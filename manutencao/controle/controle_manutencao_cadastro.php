<?php
require_once "manutencao.php";

if(!isset($_POST['txtxproblema'])){
    die("Bloco não encontrado\n");
}

if(!isset($_POST['txtdatainicio'])){
    echo("num sala não encontrado\n");
}


$problema = $_POST['txtproblema'];
$foto = $_POST['txtimg'];
$datainicio = $_POST['txtdatainicio'];
$Equipamento_IdEquipamento = $_POST['cboIdequipamento'];
$status = $_POST['txtstatus'];

$problema = strip_tags($problema);
$foto = strip_tags($foto);
$status = strip_tags($status);


$manutencao = new manutencao();
$manutencao->setproblema($problema);
$manutencao->setfoto($foto);
$manutencao->setIdequipamento($Equipamento_IdEquipamento);
$manutencao->setstatus($status);
$manutencao->setDataInicio($datainicio);


$resultado = $manutencao->cadastrar();
if($resultado==true){
echo "Cadastrado com sucesso";
}else{
echo "Erro ao cadastrar";
}

?>