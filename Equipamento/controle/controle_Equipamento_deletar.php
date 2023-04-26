<?php

    require_once "../equipamento/equipamento.php";

    if(!isset($_POST['txtIdequipamento'])){
        die("ID não encontrado\n");
    }


    $idequip = $_POST['txtIdequipamento'];


    $idequip = strip_tags($idequip);


    $equipamento = new Equipamento();
    $equipamento->setIdEquipamento($idequip);



    $resultado = $equipamento->excluir();
    if($resultado==true){
    echo "Apagado com sucesso";
    }else{
    echo "Erro ao apagar";
    }

?>