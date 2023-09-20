<?php
require_once "../../modelo/Acesso.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);
echo '{"cod":"1","msg":"Teste"}';

if($json_object!=null){

    $funcionario = $json_object->funcionario;
    $funcionario  = strip_tags($funcionario);

    if ($funcionario=="") {
        echo '{"cod":"2","msg":"A descricao não pode ser vazio!"}';
        exit;
    }

    $Acesso = new Acesso();
    $Acesso->setFuncionario($funcionario);
 
    $resultado = $Acesso->excluir(); 
        if ($resultado == true) {
            echo '{"cod":"3","msg":"Deletado com seucesso"}';
        } else {
            echo '{"cod":"4","msg":"O Id não pode ser vazio!"}';
        }
    }else{
    echo '{"cod":"5","msg":"O Id não pode ser nulo!"}';
    exit;
    }
?> 