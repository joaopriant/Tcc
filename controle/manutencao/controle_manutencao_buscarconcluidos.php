<?php
    require_once "../../modelo/manutencao.php";
    $manutencao = new manutencao();
   
    $objetomanutencao = $manutencao->buscarconcluidos();
    echo json_encode($objetomanutencao);

?>
