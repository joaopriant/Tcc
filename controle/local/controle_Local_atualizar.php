<?php
require_once "modelo/Local.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);


if($json_object!=null){
    
    $idsala = $json_object->idsala;
    $idsala  = strip_tags($idsala);

    $sala = $json_object->sala;
    $sala  = strip_tags($sala);

    $andar = $json_object->andar;
    $andar  = strip_tags($andar);

    $bloco = $json_object->bloco;
    $bloco  = strip_tags($bloco);
    
    
    if ($idsala=="") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($sala=="") {
        echo '{"cod":"2","msg":"Sala não pode ser vazio!"}';
        exit;
    }

    if ($andar=="") {
        echo '{"cod":"3","msg":"Andar não pode ser vazio!"}';
        exit;
    }
    if ($bloco=="") {
        echo '{"cod":"4","msg":"Bloco não pode ser vazio!"}';
        exit;
    }

    $Local = new Local();
    $Local->setIdsala($idsala);
    $Local->setSala($sala);
    $Local->setAndar($andar);
    $Local->setBloco($bloco);

    $resultado = $Local->atualizar();
    if($resultado == true){
         echo '{"cod":"5","msg":"Atualizado com sucesso!"}';
    }else{
        echo '{"cod":"6","msg":"erro ao atualizar!"}';
    }
}else{
    echo '{"cod":"7","msg":"O JSON não pode ser nulo!"}';
    exit;
}
?>