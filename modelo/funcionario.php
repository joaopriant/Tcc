<?php
include "Banco.php";
class Funcionario
{
    private $RegistroFuncionario;
    private $Nome;
    private $DatadeNacimento;
    private $Email;
    private $Senha;
    private $Cargo;
    private $banco;

    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {

        $registrofuncionario = $this->RegistroFuncionario;
        $nome = $this->Nome;
        $data = $this->DatadeNacimento;
        $email = $this->Email;
        $cargo = $this->Cargo;
        $senha = $this->Senha;

        $stmt = $this->banco->getConexao()->prepare("insert into Funcionario(RegistroFuncionario, Nome, DatadeNacimento, Email, Senha, Cargo)values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("isss", $registrofuncionario, $nome, $data, $email, $senha, $cargo);
        return $stmt->execute();
    }

    public function excluir()
    {
        $registrofuncionario = $this->RegistroFuncionario;
        $stmt = $this->banco->getConexao()->prepare("delete from Funcionario where RegistroFuncionario = ?");
        $stmt->bind_param("i", $registrofuncionario);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $registrofuncionario = $this->RegistroFuncionario;
        $nome = $this->Nome;
        $data = $this->DatadeNacimento;
        $email = $this->Email;
        $cargo = $this->Cargo;
        $senha = $this->Senha;

        $stmt = $this->banco->getConexao()->prepare("update Funcionario    
            set Nome=?,
            set DatadeNacimento=?,
            set Email=?,
            set Cargo=?,
            set Senha=?,
            where RegistroFuncionario = ?");

        $stmt->bind_param("sdsisi", $nome, $data, $email, $cargo, $senha, $registrofuncionario);
        return $stmt->execute();
    }

    public function buscarFuncionarioPorId($RegistroFuncionario)
    {   
        
        $stmt = $this->banco->getConexao()->prepare("select * from Funcionario where RegistroFuncionario = ?");
        $stmt->bind_param("i", $RegistroFuncionario);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setRegistroFuncionario($linha->RegistroFuncionario);
            $this->setNome($linha->Nome);
            $this->setDatadeNasc($linha->DatadeNacimento);
            $this->setEmail($linha->Email);

        }
        return $this;

    }
    public function listarFuncionario()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from Funcionario");
        $stmt->execute();
        $result = $stmt->get_result();
        $vetor = array();
        $i = 0;
        while ($linha = mysqli_fetch_object($result)) {
            $vetorFuncionario[$i] = new Funcionario();
            $vetorFuncionario[$i]->setRegistroFuncionario($linha->RegistroFuncionario);
            $vetorFuncionario[$i]->setNome($linha->Nome);
            $i++;
        }
        return $vetorFuncionario;
    }
    public function getRegistroFuncionario()
    {
        return $this->RegistroFuncionario;
    }
    public function setRegistroFuncionario($v)
    {
        $this->RegistroFuncionario = $v;
    }
    public function getNome()
    {
        return $this->Nome;
    }
    public function setNome($Nome)
    {
        $this->Nome = $Nome;
    }
    public function getDatadeNasc()
    {
        return $this->DatadeNacimento;
    }
    public function setDatadeNasc($DatadeNacimento)
    {
        $this->DatadeNacimento = $DatadeNacimento;
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