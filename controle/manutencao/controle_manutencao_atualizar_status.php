<?php
require_once "modelo/manutencao.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){
    $status = $json_object->status;
    $status  = strip_tags($status);
    
    $idmanutencao = $json_object->idmanutencao;
    $idmanutencao  = strip_tags($idmanutencao);
    if ($status=="") {
        echo '{"cod":"4","msg":"O Status não pode ser vazio!"}';
        exit;
    }
    if ($idmanutencao=="") {
        echo '{"cod":"6","msg":"O ID não pode ser vazio!"}';
        exit;
    }

    $manutencao = new Manutencao();
    $manutencao->setIdManutencao($idmanutencao);
    $manutencao->setstatus($status);
  
    $resultado = $manutencao->atualizar_status();

    if ($resultado == true) {
        echo '{"cod":"7","msg":"Cadastrado com seucesso"}';
    } else {
        echo '{"cod":"8","msg":"O manutencao não pode ser vazio!"}';
    }
}else{
    echo '{"cod":"9","msg":"O cadastro não pode ser realizado!"}';
    exit;
}
