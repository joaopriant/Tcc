<?php
require_once "manutencao.php";

if(!isset($_POST['txtxproblema'])){
    die("Bloco não encontrado\n");
}

if(!isset($_POST['txtdatainicio'])){
    echo("num sala não encontrado\n");
}


$Problema = $_POST['txtProblema'];
$Foto = $_POST['txtImg'];
$DataInicio = $_POST['txtDataInicio'];
$IdEquipamento = $_POST['cboIdEquipamento'];
$Status = $_POST[''];
$DataTermino = $_POST[''];
$Manutentor = $_POST['txtManutentor'];

$Problema = strip_tags($Problema);
$Foto = strip_tags($Foto);
$Status = strip_tags($Status);
$DataInicio = strip_tags($DataInicio);
$DataTermino = strip_tags($DataTermino);
$Manutentor = strip_tags($Manutentor);

$manutencao = new manutencao();
$manutencao->setProblema($Problema);
$manutencao->setFoto($Foto);
$manutencao->setIdEquipamento($IdEquipamento);
$manutencao->setStatus($Status);
$manutencao->setDataInicio($DataInicio);
$manutencao->setDataTermino($DataTermino);
$manutencao->setManutentor($Manutentor);


$resultado = $manutencao->cadastrar();
if($resultado==true){
echo "Cadastrado com sucesso";
}else{
echo "Erro ao cadastrar";
}

?>