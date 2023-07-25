<?php
require_once "../../modelo/Equipamento.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){
    
    $idequipamento = $json_object->idequipamento;
    $idequipamento  = strip_tags($idequipamento);

    $numpatrimonio = $json_object->numpatrimonio;
    $numpatrimonio  = strip_tags($numpatrimonio);
    
    $local = $json_object->local;
    $local  = strip_tags($local);
    
    $responsavel = $json_object->responsavel;
    $responsavel  = strip_tags($responsavel);

    $descricao = $json_object->descricao;
    $descricao  = strip_tags($descricao);

    if ($idequipamento=="") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($descricao=="") {
        echo '{"cod":"2","msg":"A descricao não pode ser vazio!"}';
        exit;
    }

    if ($responsavel=="") {
        echo '{"cod":"3","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($local=="") {
        echo '{"cod":"5","msg":"local não pode ser vazio!"}';
        exit;
    }


    $Equipamento = new Equipamento();
    $Equipamento->setIdEquipamento($idequipamento);
    $Equipamento->setRegistroFuncionario($descricao);
    $Equipamento->setIdsala($local);
    $Equipamento->setRegistroFuncionario($responsavel);
    $Equipamento->setnumpatrimonio($numpatrimonio);
  
    $resultado = $Equipamento->cadastrar();

    if ($resultado == true) {
        echo '{"cod":"7","msg":"Cadastrado com seucesso"}';
    } else {
        echo '{"cod":"8","msg":"O cargo não pode ser vazio!"}';
    }
}else{
    echo '{"cod":"9","msg":"O cargo não pode ser nulo!"}';
    exit;
}

?>