<?php
    require_once "../Descricao/Descricao.php";

    if(!isset($_GET['txtId'])){
        die("Id não encontrado\n");
    }

    $idDescricao = $_GET['txtId'];

    $idDescricao = strip_tags($idDescricao);

    $Descricao = new Descricao();
    $Descricao->buscarDescricaoPorId($idDescricao);

    $tabela="<table border='1'>";
    $tabela.="<tr>";
    $tabela.="<td>".$Descricao->getidDescricao()."</td>";
    $tabela.="<td>".$Descricao->getDescricao()."</td>";

    $tabela.="</tr>";
    $tabela.="</table>";
    echo $tabela;
?>