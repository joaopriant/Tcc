<?php
    require_once "Funcionario.php";
   $funcionario = new Funcionario();
   
   $objetoFuncionarios = $funcionario->listarFuncionario();
   echo json_encode($objetoFuncionarios);

?>
