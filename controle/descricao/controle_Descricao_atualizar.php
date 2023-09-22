<?php
require_once "../../modelo/Descricao.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){

    $iddesc = $json_object->iddesc;
    $iddesc  = strip_tags($iddesc);
    $desc = $json_object->desc;
    $desc  = strip_tags($desc);
    
    
    if ($iddesc=="") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($desc=="") {
        echo '{"cod":"2","msg":"A descricao não pode ser vazio!"}';
        exit;
    }


    $Descricao = new Descricao();
    $Descricao->setidDescricao($iddesc);
    $Descricao->setDescricao($desc);


    $resultado = $Descricao->atualizar();
    if($resultado == true){
         echo '{"cod":"3","msg":"Atualizado com sucesso!"}';
    }else{
        echo '{"cod":"4","msg":"erro ao atualizar!"}';
    }
}else{
    echo '{"cod":5","msg":"O JSON não pode ser nulo!"}';
    exit;
}
?>