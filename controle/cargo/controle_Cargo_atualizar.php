<?php
require_once "../../modelo/Cargo.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);


if($json_object!=null){


    $idcargo = $json_object->idcargo;
    $idcargo  = strip_tags($idcargo);
    $nomecargo = $json_object->nomecargo;
    $nomecargo  = strip_tags($nomecargo);
    
    
    if ($idcargo=="") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($nomecargo=="") {
        echo '{"cod":"1","msg":"O cargo não pode ser vazio!"}';
        exit;
    }


    $Cargo = new Cargo();
    $Cargo->setIdCargo($idcargo);
    $Cargo->setCargo($nomecargo);


    $resultado = $Cargo->atualizar();
    if($resultado == true){
        echo "Atualizado com sucesso";
    }else{
        echo "Erro ao atualizar";
    }
}else{
    echo '{"cod":"4","msg":"O JSON não pode ser nulo!"}';
    exit;
}
?>