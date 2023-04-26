<?php
    require_once "../local/Local.php";

    if (!isset($_POST['txtidSala'])) {
        die("id Sala não encontrado\n");
    }


    $idsala = $_POST['txtidSala'];


    $idsala = strip_tags($idsala);


    $local = new Local();
    $local->setidSala($idsala);



    $resultado = $local->excluir();
    if ($resultado == true) {
        echo "Apagado com sucesso";
    } else {
        echo "Erro ao apagar";
    }

?>