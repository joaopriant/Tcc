<?php
    require_once "../../modelo/equipamento.php";
   $equipamento = new Equipamento();
   
   $objetoequipamento = $equipamento->listarEquipamento();
   echo json_encode($objetoequipamento);

?>
