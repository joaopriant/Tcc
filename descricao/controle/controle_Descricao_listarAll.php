<?php
    require_once "../descricao/Descricao.php";
    $Descricao = new Descricao();
   
    $objDescricao = $Descricao->listarDescricao();
    echo json_encode($objDescricao);

?>
