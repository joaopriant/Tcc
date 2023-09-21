<?php
require_once "../../modelo/Acesso.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){
    
    $funcionario = $json_object->funcionario;
    $funcionario  = strip_tags($funcionario);

    $AcompanhamentoChamado = $json_object->AcompanhamentoChamado;
    $AcompanhamentoChamado  = strip_tags($AcompanhamentoChamado);
    
    $AberturaChamado = $json_object->AberturaChamado;
    $AberturaChamado  = strip_tags($AberturaChamado);
    
    $Manutencao = $json_object->Manutencao;
    $Manutencao  = strip_tags($Manutencao);

    $Dashboard = $json_object->Dashboard;
    $Dashboard  = strip_tags($Dashboard);

    $Cadastro = $json_object->Cadastro;
    $Cadastro  = strip_tags($Cadastro);

    if ($funcionario=="") {
        echo '{"cod":"1","msg":"O Funcionario não pode ser vazio!"}';
        exit;
    }
    if ($Dashboard=="") {
        echo '{"cod":"2","msg":"O Dashboard não pode ser vazio!"}';
        exit;
    }
    if ($Cadastro=="") {
        echo '{"cod":"2","msg":"O Dashboard não pode ser vazio!"}';
        exit;
    }
    
    if ($Manutencao=="") {
        echo '{"cod":"3","msg":"A manutenção não pode ser vazio!"}';
        exit;
    }
    if ($AcompanhamentoChamado=="") {
        echo '{"cod":"4","msg":"O Acompanhamento não pode ser vazio!"}';
        exit;
    }
    if ($AberturaChamado=="") {
        echo '{"cod":"5","msg":"a Abertura de Chamado não pode ser vazio!"}';
        exit;
    }

    $Acesso = new Acesso();
    $Acesso->setFuncionario($funcionario);
    $Acesso->setDashboard($Dashboard);
    $Acesso->setAberturaChamado($AberturaChamado);
    $Acesso->setManutencao($Manutencao);
    $Acesso->setCadastro($Cadastro);
    $Acesso->setAcompanhamentoChamado($AcompanhamentoChamado);
  
    $resultado = $Acesso->cadastrar();

    if ($resultado == true) {
        echo '{"cod":"7","msg":"Cadastrado com seucesso"}';
    } else {
        echo '{"cod":"8","msg":"O cargo não pode ser vazio!"}';
    }
}else{
    echo '{"cod":"9","msg":"O cadastro não pode ser realizado!"}';
    exit;
}

?>