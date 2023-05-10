<?php

    require_once "../manutencao/manutencao.php";

    if(!isset($_POST['txtIdManutencao'])){
        die("ID não encontrado\n");
    }


    $IdManut = $_POST['txtIdManut'];


    $IdManut = strip_tags($IdManut);


    $manutencao = new Manutencao();
    $manutencao->setIdManutencao($IdManut);



    $resultado = $manutencao->excluir();
    if($resultado==true){
    echo "Apagado com sucesso";
    }else{
    echo "Erro ao apagar";
    }

?>