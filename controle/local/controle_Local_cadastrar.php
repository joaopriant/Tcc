<?php
require_once "modelo/Local.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){

    $sala = $json_object->sala;
    $sala  = strip_tags($sala);

    $andar = $json_object->andar;
    $andar  = strip_tags($andar);

    $bloco = $json_object->bloco;
    $bloco  = strip_tags($bloco);
  
    if ($sala=="") {
        echo '{"cod":"1","msg":"A sala não pode ser vazio!"}';
        exit;
    }     
    if ($andar=="") {
        echo '{"cod":"1","msg":"O andar não pode ser vazio!"}';
        exit;
    }   
    if ($bloco=="") {
        echo '{"cod":"1","msg":"O bloco não pode ser vazio!"}';
        exit;
    }   
 
    $Local = new Local();
    $Local->setSala($sala);
    $Local->setAndar($andar);
    $Local->setBloco($bloco);

    $resultado = $Local->cadastrar();
    
    if ($resultado == true) {
        echo '{"cod":"2","msg":"Cadastrado com sucesso"}';
    } else {
        echo '{"cod":"3","msg":"Os campos não podem ser vazios!"}';
    }
}else{
    echo '{"cod":"4","msg":"O Local não pode ser nulo!"}';
    exit;
}
?>