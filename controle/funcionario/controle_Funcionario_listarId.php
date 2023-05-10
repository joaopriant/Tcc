<?php
require_once "funcionario.php";

if(!isset($_GET['txtRegistroFuncionario'])){
    die("Registro não encontrado\n");
}

$registrofuncionario = $_GET['txtRegistroFuncionario'];

$registrofuncionario = strip_tags($registrofuncionario);

$funcionario = new Funcionario();
$funcionario->buscarFuncionarioPorId($registrofuncionario);

$tabela="<table border='1'>";
$tabela.="<tr>";
$tabela.="<td>".$funcionario->getNome()."</td>";
$tabela.="<td>".$funcionario->getEmail()."</td>";
$tabela.="<td>".$funcionario->getRegistroFuncionario()."</td>";
$tabela.="<td>".$funcionario->getDatadeNasc()."</td>";

$tabela.="</tr>";
$tabela.="</table>";
echo $tabela;