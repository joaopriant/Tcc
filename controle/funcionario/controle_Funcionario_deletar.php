<?php
require_once "modelo/Funcionario.php";


$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);   

if($json_object!=null){

    $registro = $json_object->registro;
    $registro  = strip_tags($registro);

    if ($registro=="") {
        echo '{"cod":"2","msg":"o id não pode ser vazio!"}';
        exit;
    }

    $Funcionario = new Funcionario();
    $Funcionario->setRegistroFuncionario($registro);
 
    $resultado = $Funcionario->excluir(); 
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