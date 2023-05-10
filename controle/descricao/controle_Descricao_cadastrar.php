<?php
    require_once "../Descricao/Descricao.php";

    if (!isset($_POST['txtDescricao'])) {
        die("Descricao não encontrado\n");
    }


    $Descricao = $_POST['txtTipo'];

    $Descricao = strip_tags($Descricao);

    $tipoequipamento = new Descricao();
    $tipoequipamento->setDescricao($Descricao);

    $resultado = $tipoequipamento->cadastrar();
    if ($resultado == true) {
        echo "Cadastrado com sucesso";
    } else {
        echo "Erro ao cadastrar";
    }

?>