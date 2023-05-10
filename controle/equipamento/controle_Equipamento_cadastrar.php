<?php
require_once "../equipamento/equipamento.php";


if (!isset($_POST['txtnumPatrimonio'])) {
    die("Num patrimonio não encontrado\n");
}



$numpatri = $_POST['txtnumPatrimonio'];
$locais = $_POST['cbolocais'];
$funcionarios = $_POST['cbofuncionario'];
$descricao = $_POST['cbodescricao'];

$numpatri = strip_tags($numpatri);
$locais = strip_tags($locais);
$funcionarios = strip_tags($funcionarios);
$descricao = strip_tags($descricao);

$Equipamento = new Equipamento();
$Equipamento->setnumPatrimonio($numpatri);
$Equipamento->setidDescricao($descricao);
$Equipamento->setIdsala($locais);
$Equipamento->setRegistroFuncionario($funcionarios);



$resultado = $Equipamento->cadastrar();
if ($resultado == true) {
    echo "Cadastrado com sucesso";
} else {
    echo "Erro ao cadastrar";
}

?>