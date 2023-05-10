<?php
    require_once "../Equipamento/equipamento.php";
   $equipamento = new Equipamento();
   
   $objetoequipamento = $equipamento->listarEquipamento();
   echo json_encode($objetoequipamento);

?>
