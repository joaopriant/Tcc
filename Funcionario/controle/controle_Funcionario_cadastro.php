<?php
require_once "funcionario.php";

if (!isset($_POST['txtNome'])) {
    die("Nome não encontrado\n");
}

if (!isset($_POST['txtRegistroFuncionario'])) {
    echo ("Registro f. não encontrado\n");
}
if (!isset($_POST['txtDatadeNasc'])) {
    die("\nData não encontrado");
}
if (!isset($_POST['txtEmail'])) {
    die("\nEmail não encontrado");
}



$nome = $_POST['txtNome'];
$registrofuncionario = $_POST['txtRegistroFuncionario'];
$data = $_POST['txtDatadeNasc'];
$email = $_POST['txtEmail'];

$nome = strip_tags($nome);
$registrofuncionario = strip_tags($registrofuncionario);
$data = strip_tags($data);
$email = strip_tags($email);


$funcionario = new Funcionario();
$funcionario->setNome($nome);
$funcionario->setRegistroFuncionario($registrofuncionario);
$funcionario->setDatadeNasc($data);
$funcionario->setEmail($email);

$resultado = $funcionario->cadastrar();
if ($resultado == true) {
    echo "Cadastrado com sucesso";
} else {
    echo "Erro ao cadastrar";
}
?>