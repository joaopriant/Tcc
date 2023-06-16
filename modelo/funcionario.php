<?php
include "Banco.php";
class Funcionario implements JsonSerializable
{
    private $RegistroFuncionario;
    private $Nome;
    private $DatadeNacimento;
    private $Email;
    private $Senha;
    private $Cargo;
    private $banco;

    public function jsonSerialize()
    {
        $array["Nome"] = $this->getNome();
        $array["Cargo"] = $this->getCargo();
        $array["Email"] = $this->getEmail();
        $array["DatadeNacimento"] = $this->getDatadeNasc();
        $array["senha"] = $this->getSenha();
        $array["RegistroFuncionario"] = $this->getRegistroFuncionario();
       
        return $array;
    }

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
        $stmt->bind_param("ssssss", $registrofuncionario, $nome, $data, $email, $senha, $cargo);
        return $stmt->execute();
    }

    public function excluir()
    {
        $registrofuncionario = $this->RegistroFuncionario;
        $stmt = $this->banco->getConexao()->prepare("delete from Funcionario where RegistroFuncionario = ?");
        $stmt->bind_param("s", $registrofuncionario);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $registro = $this->RegistroFuncionario;
        $nome = $this->Nome;
        $data = $this->DatadeNacimento;
        $email = $this->Email;
        $cargo = $this->Cargo;
        $senha = $this->Senha;

        $stmt = $this->banco->getConexao()->prepare("update Funcionario set Nome=?, DatadeNacimento=?, Email=?,Cargo=? Senha=? where RegistroFuncionario = ?");

        $stmt->bind_param("sssiss", $nome, $data, $email, $cargo, $senha, $registro);
        return $stmt->execute();
    }

    public function buscarFuncionarioPorId($RegistroFuncionario)
    {   
        
        $stmt = $this->banco->getConexao()->prepare("select * from Funcionario where RegistroFuncionario = ?");
        $stmt->bind_param("s", $RegistroFuncionario);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setRegistroFuncionario($linha->registro);
            $this->setNome($linha->nome);
            $this->setEmail($linha->Email);
            $this->setDatadeNasc($linha->cargo);
            $this->setDatadeNasc($linha->date);

        }
        return $this;

    }
    public function listarFuncionario()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from funcionario");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Funcionario();
            $resultados[$i]->setRegistroFuncionario($linha->RegistroFuncionario);
            $resultados[$i]->setNome($linha->Nome);
            $resultados[$i]->setEmail($linha->Email);
            $resultados[$i]->setDatadeNasc($linha->DatadeNacimento);
            $resultados[$i]->setCargo($linha->Cargo);
            $i++;
        }
        return $resultados;
    }
    public function getRegistroFuncionario()
    {
        return $this->RegistroFuncionario;
    }
    public function setRegistroFuncionario($RegistroFuncionario)
    {
        $this->RegistroFuncionario = $RegistroFuncionario;
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