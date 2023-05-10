<?php
    require_once "../Local/Local.php";


    if (!isset($_POST['txtBloco'])) {
        die("Bloco não encontrado\n");
    }

    if (!isset($_POST['txtNumsala'])) {
        echo ("num sala não encontrado\n");
    }
    if (!isset($_POST['txtAndar'])) {
        die("\nAndar não encontrado");
    }


    $bloco = $_POST['txtBloco'];
    $numsala = $_POST['txtNumsala'];
    $andar = $_POST['txtAndar'];

    $bloco = strip_tags($bloco);
    $numsala = strip_tags($numsala);
    $andar = strip_tags($andar);


    $local = new Local();
    $local->setBloco($bloco);
    $local->setNumsala($numsala);
    $local->setAndar($andar);


    $resultado = $local->cadastrar();
    if ($resultado == true) {
        echo "Cadastrado com sucesso";
    } else {
        echo "Erro ao cadastrar";
    }

?>