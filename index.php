<?php
//https://github.com/bramus/router
require_once "Router.php";
//Cria uma instância da classe Router
$router  = new Router();    
//define a rota: GET /retangulo/{int}/{int}/area
$router->get('/', function() {
    echo "ola mundo";
});

//define a rota: GET /retangulo/{int}/{int}/area
$router->post('/cargos', function() {
  require_once "controle/cargo/controle_Cargo_cadastrar.php";
});
$router->get('/cargos', function() {
  require_once "controle/cargo/controle_Cargo_listarId.php";
});
$router->put('/cargos', function() {
  require_once "controle/cargo/controle_Cargo_atualizar.php";
});
$router->delete('/cargos', function() {
  require_once "controle/cargo/controle_Cargo_deletar.php";
});



$router->post('/locais', function() {
  require_once "controle/local/controle_Local_cadastrar.php";
});
$router->get('/locais', function() {
  require_once "controle/local/controle_Local_listarId.php";
});
$router->put('/locais', function() {
  require_once "controle/local/controle_Local_atualizar.php";
});
$router->delete('/locais', function() {
  require_once "controle/local/controle_Local_deletar.php";
});



$router->post('/manutencoes', function() {
  require_once "controle/manutencao/controle_manutencao_cadastrar.php";
});
$router->get('/manutencoes', function() {
  require_once "controle/manutencao/controle_manutencao_listarId.php";
});
$router->put('/manutencoes', function() {
  require_once "controle/manutencao/controle_manutencao_atualizar.php";
});
$router->delete('/manutencoes', function() {
  require_once "controle/manutencao/controle_manutencao_deletar.php";
});



$router->post('/descricoes', function() {
  require_once "controle/descricao/controle_Descricao_cadastrar.php";
});
$router->get('/descricoes', function() {
  require_once "controle/descricao/controle_Descricao_listarId.php";
});
$router->put('/descricoes', function() {
  require_once "controle/descricao/controle_Descricao_atualizar.php";
});
$router->delete('/descricoes', function() {
  require_once "controle/descricao/controle_Descricao_deletar.php";
});


$router->post('/equipamentos', function() {
  require_once "controle/equipamento/controle_Equipamento_cadastrar.php";
});
$router->get('/equipamentos', function() {
  require_once "controle/equipamento/controle_Equipamento_listarId.php";
});
$router->put('/equipamentos', function() {
  require_once "controle/equipamento/controle_Equipamento_atualizar.php";
});
$router->delete('/equipamentos', function() {
  require_once "controle/equipamento/controle_Equipamento_deletar.php";
});



$router->post('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_cadastrar.php";
});
$router->get('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_listarId.php";
});
$router->put('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_atualizar.php";
});
$router->delete('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_deletar.php";
});

$router->run();
?>