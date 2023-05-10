<?php
require_once "funcionario.php";

if (!isset($_POST['txtnome'])) {
    echo("Nome não encontrado\n");
}

if (!isset($_POST['txtregistro'])) {
    echo ("Registro f. não encontrado\n");
}
if (!isset($_POST['txtdata'])) {
    echo("\nData não encontrado");
}
if (!isset($_POST['txtEmail'])) {
    echo("\nEmail não encontrado");
}
if (!isset($_POST['txtcargo'])) {
    echo("cargo não encontrado");
}
if (!isset($_POST['txtsenha'])) {
    echo("senha nao encontrado ");
}

$nome = $_POST['txtnome'];
$resgistro = $_POST['txtregistro'];
$data = $_POST['txtdata'];
$email = $_POST['txtEmail'];
$senha = $_POST['txtsenha'];
$cargo = $_POST['txtcargo'];

$nome = strip_tags($nome);
$resgistro = strip_tags($resgistro);
$email = strip_tags($email);
$senha = strip_tags($senha);
$cargo = strip_tags($cargo);

$funcionario = new Funcionario();
$funcionario->setNome($nome);
$funcionario->setRegistroFuncionario($resgistro);
$funcionario->setDatadeNasc($data);
$funcionario->setEmail($email);
$funcionario->setCargo($cargo);
$funcionario->setSenha($senha);

$resultado = $funcionario->cadastrar();
if ($resultado == true) {
    echo "Cadastrado com sucesso";
} else {
    echo "Erro ao cadastrar";
}
?>