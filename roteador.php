<?php
    require_once "Router.php";

    $rota = new Router();

    $rota->post('/login', function (){
        $jsonRecebido = file_get_contents('php://input');
        echo $jsonRecebido;

    });
?>