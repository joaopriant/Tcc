<<<<<<< HEAD
<?php
    require_once "cargo.php";
   $Cargo = new Cargo();
   
   $objetocargo = $Cargo->listarCargo();
   echo json_encode($objetocargo);

?>
=======
<?php
    require_once "cargo.php";
   $Cargo = new Cargo();
   
   $objetocargo = $Cargo->listarCargo();
   echo json_encode($objetocargo);

?>
>>>>>>> f5be3071c12af259a66479f61599b4ece0886f6c
