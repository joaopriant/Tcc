<?php
    require_once "../../modelo/Funcionario.php";
   $funcionario = new Funcionario();
   
   $objetoFuncionarios = $funcionario->listarFuncionario();
   echo json_encode($objetoFuncionarios);

?>
