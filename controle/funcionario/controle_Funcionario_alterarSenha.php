<?php
require_once "modelo/Funcionario.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){

    
    $senha = $json_object->senha;
    $senha  = strip_tags($senha);

    $registro = $json_object->registro;
    $registro  = strip_tags($registro);
    


    if ($registro=="") {
        echo '{"cod":"2","msg":"A descricao não pode ser vazio!"}';
        exit;
    }

    if ($senha=="") {
        echo '{"cod":"3","msg":"Senha não pode ser vazio!"}';
        exit;
    }

    $Funcionario = new Funcionario();
    $Funcionario->setRegistroFuncionario($registro);
    $Funcionario->setSenha($senha);


    $resultado = $Funcionario->alterarSenha();
    if($resultado == true){
         echo '{"cod":"7","msg":"Atualizado com sucesso!"}';
    }else{
        echo '{"cod":"8","msg":"erro ao atualizar!"}';
    }
}else{
    echo '{"cod":"9","msg":"O JSON não pode ser nulo!"}';
    exit;
}
?>