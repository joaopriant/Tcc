<?php
  require_once ("banco.php");

  class Login{
    private $Email;
    private $Senha;
    private $banco;
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function verificação(){
      $email = $this-> Email;
      $senha = $this-> Senha;
      $stmt = $this->banco->getConexao()->prepare("SELECT * FROM funcionario WHERE Email = ? AND senha = ?");
      $stmt->bind_param('ss', $email,$senha);
      $stmt->execute();
      $resultado = $stmt->get_result();
      return $resultado;
    }
}
?>