<?php
    require_once "../../modelo/Descricao.php";
    $Descricao = new Descricao();
   
    $objDescricao = $Descricao->listarDescricao();
    echo json_encode($objDescricao);

?>
