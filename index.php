<?php
//https://github.com/bramus/router
require_once "Router.php";
//Cria uma instância da classe Router
$router  = new Router();    
//define a rota: GET /retangulo/{int}/{int}/area
$router->get('/', function() {
    echo "ola mundfdfsddso";
});


$router->post('/locais', function() {
  require_once "controle/local/controle_Local_cadastrar.php";
});
$router->get('/locais', function($id) {
  require_once "controle/local/controle_Local_listarId.php";
});
$router->get('/locais', function() {
  require_once "controle/local/controle_Local_listarAll.php";
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
$router->get('/manutencoes', function($id) {
  require_once "controle/manutencao/controle_manutencao_listarId.php";
});
$router->get('/manutencoes', function() {
  require_once "controle/manutencao/controle_manutencao_listarAll.php";
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
$router->get('/descricoes', function($id) {
  require_once "controle/descricao/controle_Descricao_listarId.php";
});
$router->get('/descricoes', function() {
  require_once "controle/descricao/controle_Descricao_listarAll.php";
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
$router->get('/equipamentos', function($id) {
  require_once "controle/equipamento/controle_Equipamento_listarId.php";
});
$router->get('/equipamentos', function() {
  require_once "controle/equipamento/controle_Equipamento_listarAll.php";
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
$router->get('/funcionarios', function($id) {
  require_once "controle/funcionario/controle_Funcionario_listarId.php";
});
$router->get('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_listarAll.php";
});
$router->put('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_atualizar.php";
});
$router->delete('/funcionarios', function() {
  require_once "controle/funcionario/controle_Funcionario_deletar.php";
});

$router->run();
?>