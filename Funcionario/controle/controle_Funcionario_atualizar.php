<?php
require_once "../Funcionario/funcionario.php";

if (!isset($_POST['txtDescricao'])) {
    die("Descricao não encontrado\n");
}

$registrofuncionario = $_POST['txtidsala'];
$nome = $_POST['txtnumsala'];
$data = $_POST['txtbloco'];
$email = $_POST['txtandar'];

$registrofuncionario = strip_tags($registrofuncionario);
$nome = strip_tags($nome);
$data = strip_tags($data);
$email = strip_tags($email);


$Funcionario = new Funcionario();
$Funcionario->setRegistroFuncionario($registrofuncionario);
$Funcionario->setEmail($email);
$Funcionario->setDatadeNasc($data);
$Funcionario->setNome($nome);



$resultado = $Funcionario->atualizar();
if($resultado == true){
    echo "Atualizado com sucesso";
} else {
    echo "Erro ao atualizar";
}
?>