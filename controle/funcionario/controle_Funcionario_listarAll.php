<?php
    require_once "modelo/funcionario.php";
    $funcionario = new Funcionario();
   
   $objFuncionarios = $funcionario->listarFuncionario();
   echo json_encode($objFuncionarios);

?>
