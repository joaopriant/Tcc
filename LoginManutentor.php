<?php
include('../modelo/Banco.php');
$obj_baco = new Banco();

$senhaBanco;
$emailBanco;
$permitir;

if(isset($_POST['email']) || isset($_POST['senha'])) {

    if(strlen($_POST['email']) == 0) {
        echo "Preencha seu e-mail";
    } else if(strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else {

        $emailDigitado = $_POST['email'];
        $senhaDigitado =$_POST['senha'];

        $sql_code =$obj_baco->getConexao()->prepare("SELECT * FROM funcionario WHERE Email = '$emailDigitado' AND senha = '$senhaDigitado'");
        # $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);
        $sql_code->execute();
        $retornoBanco = $sql_code->get_result();

        $professores = array();
        while($temp = $retornoBanco ->fetch_array()){
            $professores[] = $temp;
        }
        foreach($professores as $key => $value){
            $senhaBanco = $value['senha'];
            $emailBanco = $value['email'];

            if($emailDigitado == $emailBanco && $senhaDigitado == $senhaBanco){
                $permitir = "s";
            }else{
                $permitir = "n";
            }
        }
        if($permitir == "s"){
            header("Location: http://localhost:8080/view/dashboard.html");
        }else{
            echo "Email ou senha incorretos!";
        }
      
    }

}
     
?>