<?php
    require_once "../../modelo/manutencao.php";
   $manutencao = new manutencao();
   
   $objetomanutencao = $manutencao->listarmanutencao();
   echo json_encode($objetomanutencao);

?>
