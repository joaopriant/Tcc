<?php
    require_once "../manutencao/manutencao.php";
   $manutencao = new manutencao();
   
   $objetomanutencao = $manutencao->listarmanutencao();
   echo json_encode($objetomanutencao);

?>
