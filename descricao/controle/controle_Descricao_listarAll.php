<?php
    require_once "../Descricao/Descricao.php";
    $Descricao = new Descricao();
   
    $objDescricao = $Descricao->listarDescricao();
    echo json_encode($objDescricao);

?>
