<?php
include "Banco.php";

class Funcionario implements JsonSerializable
{
    private $RegistroFuncionario;
    private $Nome;
    private $DatadeNascimento;
    private $Email;
    private $Senha;
    private $Cargo;
    private $banco;

    private $permissaoCadasttro;

    public function jsonSerialize()
    {
        $array["Nome"] = $this->getNome();
        $array["Cargo"] = $this->getCargo();
        $array["Email"] = $this->getEmail();
        $array["DatadeNascimento"] = $this->getDatadeNasc();
        $array["senha"] = $this->getSenha();
        $array["RegistroFuncionario"] = $this->getRegistroFuncionario();
        $array["permissaoCadasttro"] = $this->getPermissaoCadasttro();
       
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
        $data = $this->DatadeNascimento;
        $email = $this->Email;
        $cargo = $this->Cargo;
        $senha = $this->Senha;
        $hash = md5($senha);
        $permissaoCadasttro= $this->permissaoCadasttro;

        $stmt = $this->banco->getConexao()->prepare("insert into Funcionario(RegistroFuncionario, Nome, DatadeNascimento, Email, Senha, Cargo)values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $registrofuncionario, $nome, $data, $email, $hash, $cargo);
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
        $data = $this->DatadeNascimento;
        $email = $this->Email;
        $cargo = $this->Cargo;
        $senha = $this->Senha;
        $hash = md5($senha);

        $stmt = $this->banco->getConexao()->prepare("update Funcionario set Nome=?, DatadeNascimento=?, Email=?,Cargo=?, senha=? where RegistroFuncionario = ?");

        $stmt->bind_param("sssisi", $nome, $data, $email, $cargo, $hash, $registro);
        return $stmt->execute();
    }
    public function listarFuncionario()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from Funcionario");
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
            $resultados[$i]->setCargo($linha->cargo);
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
        return $this->DatadeNascimento;
    }
    public function setDatadeNasc($DatadeNascimento)
    {
        $this->DatadeNascimento = $DatadeNascimento;
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




	/**
	 * @return mixed
	 */
	public function getPermissaoCadasttro() {
		return $this->permissaoCadasttro;
	}
	
	/**
	 * @param mixed $permissaoCadasttro 
	 * @return self
	 */
	public function setPermissaoCadasttro($permissaoCadasttro) {
		$this->permissaoCadasttro = $permissaoCadasttro;
		return $this;
	}
}

?>