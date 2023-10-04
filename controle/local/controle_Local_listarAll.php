<?php
    require_once "modelo/Local.php";
   $Local = new Local();
   
   $objlocal = $Local->listarLocal();
   echo json_encode($objlocal);

?>
