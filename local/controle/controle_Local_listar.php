<?php
    require_once "../Local/Local.php";
   $Descricao = new Descricao();
   
   $objDescricao = $Descricao->listarDescricao();
   echo json_encode($objDescricao);

?>
