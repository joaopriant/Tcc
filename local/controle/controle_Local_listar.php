<?php
    require_once "../local/Local.php";
   $Descricao = new Descricao();
   
   $objDescricao = $Descricao->listarDescricao();
   echo json_encode($objDescricao);

?>
