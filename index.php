<?php
//https://github.com/bramus/router
require_once "Router.php";

//Cria uma instância da classe Router
$router  = new Router();    

//define a rota: GET /retangulo/{int}/{int}/area
$router->get('/', function($v1,$v2) {
echo "ola mundo";
  });

//define a rota: GET /retangulo/{int}/{int}/area
$router->get('/retangulo/(\d+)/(\d+)/area', function($v1,$v2) {
   
 });
 //define a rota: GET /retangulo/{int}/{int}/perimetro
 $router->get('/retangulo/(\d+)/(\d+)/perimetro', function($v1,$v2) {
  
  });
  //define a rota: GET /retangulo/{int}/{int}/diagonal
  $router->get('/retangulo/(\d+)/(\d+)/diagonal', function($v1,$v2) {
   
  });
 
$router->run();
?>