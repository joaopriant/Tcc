<?php
    require_once "cargo.php";
   $Cargo = new Cargo();
   
   $objetocargo = $Cargo->listarCargo();
   echo json_encode($objetocargo);

?>
