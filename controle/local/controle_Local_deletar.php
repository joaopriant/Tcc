<?php
require_once "../../modelo/Local.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){

    $idsala = $json_object->idsala;
    $idsala  = strip_tags($idsala);


  
    if ($idsala=="") {
        echo '{"cod":"1","msg":"O Local não pode ser vazio!"}';
        exit;
    }
    
    
    $Local = new Local();
    $Local ->setIdsala($idsala);
    
 
    $resultado = $Local->excluir(); 
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