<?php
require_once "../../modelo/Equipamento.php";

if(!isset($_GET['txtIdequipamento'])){
    die("Id não encontrado\n");
}

$idequipamento = $_GET['txtIdequipamento'];

$idequipamento = strip_tags($idequipamento);

$equipamento = new Equipamento();
$equipamento->buscarequipamentoPorId($idequipamento);

$tabela="<table border='1'>";
$tabela.="<tr>";
$tabela.="<td>".$equipamento->getIdEquipamento()."</td>";
$tabela.="<td>".$equipamento->getRegistroFuncionario()."</td>";
$tabela.="<td>".$equipamento->getnumPatrimonio()."</td>";
$tabela.="<td>".$equipamento->getIdsala()."</td>";
$tabela.="<td>".$equipamento->getidDescricao()."</td>";

$tabela.="</tr>";
$tabela.="</table>";
echo $tabela;