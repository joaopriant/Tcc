<?php
require_once "../manutencao/manutencao.php";

if(!isset($_GET['txtIdManutencao'])){
    die("Id não encontrado\n");
}

$idmanutencao = $_GET['txtIdManutencao'];

$idmanutencao = strip_tags($idmanutencao);

$manutencao = new Manutencao();
$manutencao->buscarmanutencaoPorId($idmanutencao);

$tabela="<table border='1'>";
$tabela.="<tr>";
$tabela.="<td>".$manutencao->getIdManutencao()."</td>";
$tabela.="<td>".$manutencao->getProblema()."</td>";
$tabela.="<td>".$manutencao->getFoto()."</td>";
$tabela.="<td>".$manutencao->getDataInicio()."</td>";
$tabela.="<td>".$manutencao->getStatus()."</td>";
$tabela.="<td>".$manutencao->getIdEquipamento()."</td>";
$tabela.="<td>".$manutencao->getDataTermino()."</td>";
$tabela.="<td>".$manutencao->getManutentor()."</td>";

$tabela.="</tr>";
$tabela.="</table>";
echo $tabela;