<?php
    session_start();
    require_once "Router.php";
    require_once "Usuario.php";

//Cria uma instância da classe Router
    $router  = new Router();    
//define a rota: GET /retangulo/{int}/{int}/area
    $router->post('/login', function() {
    echo "oasdasdasdasdundfdfsddso";
        $jsonRecebido = file_get_contents('php://input');

        $objJson = json_decode($jsonRecebido);
        $u1 = new Usuario();
        $u1->setEmail($objJson->email);
        $u1->setsenha($objJson->senha);
        
        if($u1->login() == true){
            echo "logou";
        }else {
            echo "usuario e senha invalidos";
        }

    });
    $rota->run();
?>
