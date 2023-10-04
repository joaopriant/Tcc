
<?php
require_once "modelo/manutecao.php";

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

if($json_object != null) {

    $IdManut = $json_object->IdManut;
    $IdManut  = strip_tags($IdManut);

    if ($IdManut == "") {
        echo '{"cod":"1","msg":"O id não pode ser vazio!"}';
        exit;
    }

    $Manutencao = new Manutencao();
    $Manutencao->setIdManutencao($IdManut);

    $resultado = $Manutencao->excluir();
    if ($resultado == true) {
        echo '{"cod":"2","msg":"Sucesso ao deletar!"}';
    } else {
        echo '{"cod":"3","msg":"erro ao deletar!"}';
    }
} else {
    echo '{"cod":"4","msg":"O JSON não pode ser nulo!"}';
    exit;
}
?>

