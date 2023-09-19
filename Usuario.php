<?php 
require_once 'modelo/Banco.php';
class Usuario{
    private $Nome;
    private $Email;
    private $Senha;
    private $Cargo;
    private $banco;
    function __construct()
    {
        $this->banco = new Banco();
    }
    public function login(){
        $sql = "SELECT COUNT(*) AS qtd,Nome, Email,Cargo FROM funcionario WHERE Email = ? AND senha = MD5(?)";
        $stmt = $this->banco->getConexao()->prepare($sql);
        $email = $this->Email;
        $senha = $this->Senha;
        $cargo = $this->Cargo;
        $stmt->bind_param("ss", $email,$senha);
        $stmt->execute();
        $resultado = $stmt->get_result();

        $linha = $resultado->fetch_object();
        if($linha == 1){
            $this ->setNome($linha->nome);
            $_SESSION['logado'] = true;
            $_SESSION['nome'] = $linha->nome;
            $_SESSION['email'] = $linha->email;
            $_SESSION['cargo'] = $linha->cargo;
           return true;
        }
        return false;
    }
    public function getNome()
    {
        return $this->Nome;
    }
    public function setNome($Nome)
    {
        $this->Nome = $Nome;
    }
    public function getEmail()
    {
        return $this->Email;
    }
    public function setEmail($Email)
    {
        $this->Email = $Email;
    }
    public function getSenha()
    {
        return $this->Senha;
    }
    public function setSenha($Senha)
    {
        $this->Senha = $Senha;
    }
    public function getCargo()
    {
        return $this->Cargo;
    }
    public function setCargo($Cargo)
    {
        $this->Cargo = $Cargo;
    }

}

?>