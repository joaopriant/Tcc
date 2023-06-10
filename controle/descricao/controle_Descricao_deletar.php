<?php
require_once "../../modelo/Descricao.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);
echo '{"cod":"1","msg":"O Descricao não pode ser vazio!"}';

if($json_object!=null){

    $iddesc = $json_object->iddesc;
    $iddesc  = strip_tags($iddesc);


  
    if ($iddesc=="") {
        echo '{"cod":"1","msg":"O Descricao não pode ser vazio!"}';
        exit;
    }
    
    
    $Descricao = new Descricao();
    $Descricao ->setidDescricao($iddesc);
    
 
    $resultado = $Descricao->excluir(); 
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