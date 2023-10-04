<?php
require_once "modelo/Funcionario.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object!=null){
    
    $nome = $json_object->nome;
    $nome  = strip_tags($nome);

    $email = $json_object->email;
    $email  = strip_tags($email);
    
    $date = $json_object->date;
    $date  = strip_tags($date);
    
    $senha = $json_object->senha;
    $senha  = strip_tags($senha);

    $registro = $json_object->registro;
    $registro  = strip_tags($registro);
    
    $cargo = $json_object->cargo;
    $cargo  = strip_tags($cargo);

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

    if ($Dashboard=="") {
        echo '{"cod":"15","msg":"O Dashboard não pode ser vazio!"}';
        exit;
    }
    if ($Cadastro=="") {
        echo '{"cod":"14","msg":"O Dashboard não pode ser vazio!"}';
        exit;
    }
    
    if ($Manutencao=="") {
        echo '{"cod":"13","msg":"A manutenção não pode ser vazio!"}';
        exit;
    }
    if ($AcompanhamentoChamado=="") {
        echo '{"cod":"13","msg":"O Acompanhamento não pode ser vazio!"}';
        exit;
    }
    if ($AberturaChamado=="") {
        echo '{"cod":"12","msg":"a Abertura de Chamado não pode ser vazio!"}';
        exit;
    }

    if ($nome=="") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($registro=="") {
        echo '{"cod":"2","msg":"A descricao não pode ser vazio!"}';
        exit;
    }

    if ($senha=="") {
        echo '{"cod":"3","msg":"O id não pode ser vazio!"}';
        exit;
    }
    if ($email=="") {
        echo '{"cod":"4","msg":"A descricao não pode ser vazio!"}';
        exit;
    }
    if ($date=="") {
        echo '{"cod":"5","msg":"Date não pode ser vazio!"}';
        exit;
    }
    if ($cargo=="") {
        echo '{"cod":"6","msg":"A descricao não pode ser vazio!"}';
        exit;
    }

    $Funcionario = new Funcionario();
    $Funcionario->setNome($nome);
    $Funcionario->setRegistroFuncionario($registro);
    $Funcionario->setDatadeNasc($date);
    $Funcionario->setCargo($cargo);
    $Funcionario->setSenha($senha);
    $Funcionario->setEmail($email);
    $Funcionario->setDashboard($Dashboard);
    $Funcionario->setAberturaChamado($AberturaChamado);
    $Funcionario->setManutencao($Manutencao);
    $Funcionario->setCadastro($Cadastro);
    $Funcionario->setAcompanhamentoChamado($AcompanhamentoChamado);
  
    $resultado = $Funcionario->cadastrar();

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