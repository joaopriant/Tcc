<?php

    require_once "../Descricao/Descricao.php";

    if(!isset($_POST['txtIdDescricao'])){
        die("ID não encontrado\n");
    }
    


    $idDesc = $_POST['txtIdDescricao'];


    $idDesc = strip_tags($idDesc);


    $descricao = new Descricao();
    $descricao->setidDescricao($idDesc);



    $resultado = $descricao->excluir();
    if($resultado==true){
    echo "Apagado com sucesso";
    }else{
    echo "Erro ao apagar";
    }

?>