<?php
  require_once "../../modelo/Cargo.php";
  $Cargo = new Cargo();
   
  $objetocargo = $Cargo->listarCargo();
  echo json_encode($objetocargo);

?>
