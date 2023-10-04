<?php
require_once "modelo/Equipamento.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){

    $idequipamento = $json_object->idequipamento;
    $idequipamento  = strip_tags($idequipamento);

    if ($idequipamento=="") {
        echo '{"cod":"2","msg":"O Id não pode ser vazio!"}';
        exit;
    }


    $Equipamento = new Equipamento();
    $Equipamento->setIdEquipamento($idequipamento);
  
    $resultado = $Equipamento->excluir();

    if ($resultado == true) {
        echo '{"cod":"7","msg":"Deletado com seucesso"}';
    } else {
        echo '{"cod":"8","msg":"Delete não pode ser concluido"}';
    }
}else{
    echo '{"cod":"9","msg":O JSON não pode ser nulo!"}';
    exit;
}

?>