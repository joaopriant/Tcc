<?php
    use Firebase\JWT\TokenJWT;
    session_start();
    require_once "Router.php";
    require_once "Usuario.php";
    require_once "modelo/TokenJWT.php";
    require_once "modelo/Funcionario.php";
    $rota  = new Router();    
  /*
    $rota->post('/login', function() {
        $jsonRecebido = file_get_contents('php://input');
        echo $jsonRecebido;

        $objJson = json_decode($jsonRecebido);
        $u1 = new Usuario();
        $u1->setEmail($objJson->email);
        $u1->setsenha($objJson->senha);
        $u1->setCargo($objJson->cargo);
        
        if($u1->login() == true){
            echo "logou";
        }else {
            echo "usuario e senha invalidos";
        }

    });
*/
    $rota->post('/login', function () {
      $jsonRecebido = file_get_contents('php://input');
      $obj = json_decode($jsonRecebido);
      $funcionario = new Funcionario();
      $funcionario->setEmail($obj->email);
      $funcionario->setSenha($obj->senha);
      $resposta = array();
      if ($funcionario->verificarUsuarioSenha() == true) {
        $tokenJWT = new TokenJWT();
        $novoToken = $tokenJWT->gerarToken(json_encode($funcionario));
        $resposta['status'] = 'true';
        $resposta['msg'] = "Login efetuado com sucesso";
        $resposta['token'] =  $novoToken;
      }else{
        $resposta['status'] = 'false';
        $resposta['msg'] = "Login inválido";
      }
      echo json_encode($resposta);
    });
/*
    $rota->get('/', function() {
        echo "ola mundfdfsddso";
    });

    $rota->post('/locais', function() {
        require_once "controle/local/controle_Local_cadastrar.php";
      });
      $rota->get('/locais', function() {
        require_once "controle/local/controle_Local_listarAll.php";
      });
      $rota->put('/locais', function() {
        require_once "controle/local/controle_Local_atualizar.php";
      });
      $rota->delete('/locais', function() {
        require_once "controle/local/controle_Local_deletar.php";
      });
      
      
      
      $rota->post('/manutencoes', function() {
        require_once "controle/manutencao/controle_manutencao_cadastrar.php";
      });
      $rota->get('/manutencoes', function() {
        require_once "controle/manutencao/controle_manutencao_listarAll.php";
      });
      $rota->put('/manutencoes', function() {
        require_once "controle/manutencao/controle_manutencao_atualizar.php";
      });
      $rota->delete('/manutencoes', function() {
        require_once "controle/manutencao/controle_manutencao_deletar.php";
      });
      
      
      
      $rota->post('/descricoes', function() {
        require_once "controle/descricao/controle_Descricao_cadastrar.php";
      });
      $rota->get('/descricoes', function() {
        require_once "controle/descricao/controle_Descricao_listarAll.php";
      });
      $rota->put('/descricoes', function() {
        require_once "controle/descricao/controle_Descricao_atualizar.php";
      });
      $rota->delete('/descricoes', function() {
        require_once "controle/descricao/controle_Descricao_deletar.php";
      });
      
      
      $rota->post('/equipamentos', function() {
        require_once "controle/equipamento/controle_Equipamento_cadastrar.php";
      });
      $rota->get('/equipamentos', function() {
        require_once "controle/equipamento/controle_Equipamento_listarAll.php";
      });
      $rota->put('/equipamentos', function() {
        require_once "controle/equipamento/controle_Equipamento_atualizar.php";
      });
      $rota->delete('/equipamentos', function() {
        require_once "controle/equipamento/controle_Equipamento_deletar.php";
      });
      
      
      
      $rota->post('/funcionarios', function() {
        require_once "controle/funcionario/controle_Funcionario_cadastrar.php";
      });
      $rota->get('/funcionarios', function() {
        require_once "controle/funcionario/controle_Funcionario_listarAll.php";
      });
      $rota->put('/funcionarios', function() {
        require_once "controle/funcionario/controle_Funcionario_atualizar.php";
      });
      $rota->delete('/funcionarios', function() {
        require_once "controle/funcionario/controle_Funcionario_deletar.php";
      });

      */
    $rota->run();

    ?>
