<?php
require_once "modelo/manutencao.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){
    
    $problema = $json_object->problema;
    $problema  = strip_tags($problema);
    
    $foto = $json_object->foto;
    $foto  = strip_tags($foto);

    $status = $json_object->status;
    $status  = strip_tags($status);
    
    $datainicio = $json_object->datainicio;
    $datainicio  = strip_tags($datainicio);
    
    $manutentor = $json_object->manutentor;
    $manutentor  = strip_tags($manutentor);
    
    $equipamento = $json_object->equipamento;
    $equipamento  = strip_tags($equipamento);

    if ($problema=="") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($manutentor=="") {
        echo '{"cod":"2","msg":"A descricao não pode ser vazio!"}';
        exit;
    }
    if ($status=="") {
        echo '{"cod":"4","msg":"A descricao não pode ser vazio!"}';
        exit;
    }
    if ($datainicio=="") {
        echo '{"cod":"5","msg":"datainicio não pode ser vazio!"}';
        exit;
    }
    if ($equipamento=="") {
        echo '{"cod":"6","msg":"A descricao não pode ser vazio!"}';
        exit;
    }

    $manutencao = new Manutencao();
    $manutencao->setproblema($problema);
    $manutencao->setFoto($foto);
    $manutencao->setManutentor($manutentor);
    $manutencao->setIdEquipamento($equipamento);
    $manutencao->setDataInicio($datainicio);
    $manutencao->setstatus($status);
  
    $resultado = $manutencao->cadastrar();

    if ($resultado == true) {
        echo '{"cod":"7","msg":"Cadastrado com seucesso"}';
    } else {
        echo '{"cod":"8","msg":"O equipamento não pode ser vazio!"}';
    }
}else{
    echo '{"cod":"9","msg":"O cadastro não pode ser realizado!"}';
    exit;
}
