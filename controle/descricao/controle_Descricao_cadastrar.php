<?php
    require_once "../../modelo/Descricao.php";

    $request_raw = file_get_contents('php://input');
    $json_object = json_decode($request_raw);

    if($json_object!=null){

        $nomeNovoDescricao = $json_object->desc;
        $nomeNovoDescricao  = strip_tags($nomeNovoDescricao);

        if ($nomeNovoDescricao=="") {
            echo '{"cod":"1","msg":"O cargo não pode ser vazio!"}';
            exit;
        }

        $Descricao = new Descricao();
        $Descricao->setDescricao($Descricao);

        $resultado = $Descricao->cadastrar();

        if ($resultado == true) {
            echo '{"cod":"2","msg":"Cadastrado com seucesso"}';
        } else {
            echo '{"cod":"3","msg":"O cargo não pode ser vazio!"}';
        }
    }else{
    echo '{"cod":"4","msg":"O cargo não pode ser nulo!"}';
    exit;
    }

?>