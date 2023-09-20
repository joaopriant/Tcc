<?php
    require_once "modelo/Banco.php";
    $banco = new Banco();
    $request_raw = file_get_contents('php://input');
    $json_object = json_decode($request_raw);


    $email = $json_object->email;
    $senha = $json_object->senha;
    $senha = md5($senha);

    $stmt = $banco->getConexao()->prepare("SELECT COUNT(*) AS qnt FROM funcionario WHERE email = '$email' AND senha = '$senha'");
    $stmt->execute();
    $resultado = $stmt->get_result();
    $row = $resultado->fetch_assoc();
    $qnt = $row['qnt'];
    if ($qnt > 0) {
        $stmt = $banco->getConexao()->prepare("SELECT cargo FROM funcionario WHERE email = '$email' AND senha = '$senha'");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $row = $resultado->fetch_assoc();
        $cargo = $row['cargo'];
            if($cargo == 'Professor'){
                
            }
    }else{
        return "Usuario não Cadastrado";
    }


?>