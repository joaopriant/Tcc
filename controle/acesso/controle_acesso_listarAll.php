<?php
    require_once "../../modelo/Acesso.php";
    $Acesso = new Acesso();
   
   $objAcessos = $Acesso->listarAcesso();
   echo json_encode($objAcessos);

?>

