<?php
    require_once "../../modelo/manutencao.php";
   $manutencao = new manutencao();
   
   $objetomanutencao = $manutencao->buscarpendente();
   echo json_encode($objetomanutencao);

?>
