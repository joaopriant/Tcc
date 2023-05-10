<?php
require_once "../../modelo/Cargo.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);


if($json_object!=null){

    $nomeNovoCargo = $json_object->nomecargo;
    $nomeNovoCargo  = strip_tags($nomeNovoCargo);


  
    if ($nomeNovoCargo=="") {
        echo '{"cod":"1","msg":"O cargo não pode ser vazio!"}';
        exit;
    } 
        
 
    $Cargo = new Cargo();
    $Cargo->setCargo($nomeNovoCargo);

    $resultado = $Cargo->cadastrar();
    
    if ($resultado == true) {
        echo '{"cod":"2","msg":"Cadastrado com seucesso"}';
    } else {
        echo '{"cod":"3","msg":"O cargo não pode ser vazio!"}';
    }
}else{
    echo '{"cod":"4","msg":"O cargo não pode ser nulo!"}';
    exit;
}
