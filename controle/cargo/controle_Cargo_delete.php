<?php
require_once "../../modelo/Cargo.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);


if($json_object!=null){

    $idcargo = $json_object->idcargo;
    $idcargo  = strip_tags($idcargo);


  
    if ($idcargo=="") {
        echo '{"cod":"1","msg":"O cargo não pode ser vazio!"}';
        exit;
    }
    
    
    $Cargo = new Cargo();
    $Cargo ->setIdCargo($idcargo);
    
 
    $resultado = $Cargo->excluir(); 
        if ($resultado == true) {
            echo '{"cod":"2","msg":"Deletado com seucesso"}';
        } else {
            echo '{"cod":"3","msg":"O Id não pode ser vazio!"}';
        }
    }else{
    echo '{"cod":"4","msg":"O Id não pode ser nulo!"}';
    exit;
    }
?>