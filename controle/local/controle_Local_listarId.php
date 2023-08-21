<?php
require_once "../Local/Local.php";

if(!isset($_GET['txtidSala'])){
    die("Id não encontrado\n");
}

$idsala = $_GET['txtidSala'];

$idsala = strip_tags($idsala);

$Local = new Local();
$Local->buscarLocalPorId($idsala);

$tabela="<table border='1'>";
$tabela.="<tr>";
$tabela.="<td>".$Local->getidSala()."</td>";
$tabela.="<td>".$Local->getSala()."</td>";
$tabela.="<td>".$Local->getBloco()."</td>";
$tabela.="<td>".$Local->getAndar()."</td>";

$tabela.="</tr>";
$tabela.="</table>";
echo $tabela;