<?php
require_once "Banco.php";

class Funcionario implements JsonSerializable
{
    private $RegistroFuncionario;
    private $Nome;
    private $DatadeNascimento;
    private $Email;
    private $Senha;
    private $Cargo;
    private $Cadastro;
    private $AcompanhamentoChamado;
    private $AberturaChamado;
    private $Manutencao;
    private $Dashboard;
    private $banco;

    private $permissaoCadasttro;

    public function jsonSerialize()
    {
        $array["RegistroFuncionario"] = $this->getRegistroFuncionario();
        $array["Email"] = $this->getEmail();
        $array["senha"] = $this->getSenha();
        $array["Nome"] = $this->getNome();
        $array["DatadeNascimento"] = $this->getDatadeNasc();
        $array["Cargo"] = $this->getCargo();
        $array["AcompanhamentoChamado"] = $this->getAcompanhamentoChamado();
        $array["AberturaChamado"] = $this->getAberturaChamado();
        $array["Manutencao"] = $this->getManutencao();
        $array["Dashboard"] = $this->getDashboard();
        $array["Cadastro"] = $this->getCadastro();
        return $array;
    }

    function __construct()
    {
        $this->banco = new Banco();
    }


    
    //método que verifica se o usuário e senha estão corretos
    public function verificarUsuarioSenha(){   
       
        $this->Senha = md5($this->Senha); //cria um hash utilizando o algoritmo md5 para a senha
        $sql = "select count(*) as qtd , Nome, RegistroFuncionario, Cadastro, AberturaChamado, Manutencao, Dashboard, AcompanhamentoChamado  from funcionario where Email = ? and senha =?";
        $stmt = $this->banco->getConexao()->prepare($sql);
        $stmt->bind_param("ss", $this->Email, $this->Senha);
        $stmt->execute();  //executa a  instrução sql no sgbd
        $resultado = $stmt->get_result();   //recupera os dados referentes a execução do sql
        //estrutura de repetição que passa por todos os dados
        while ($linha = $resultado->fetch_object()) { 
            //verifica se qtd é igual a 1, significa que existe 1 usuario om o email e senha fornecido.
            if ($linha->qtd == 1) {
                $this->setRegistroFuncionario($linha->RegistroFuncionario);
                $this->setNome($linha->Nome);
                $this->setCadastro($linha->Cadastro);
                $this->setAberturaChamado($linha->AberturaChamado);
                $this->setAcompanhamentoChamado($linha->AcompanhamentoChamado);
                $this->setManutencao($linha->Manutencao);
                $this->setDashboard($linha->Dashboard);

                return true;
            }
        }
        return false;
    }
    public function cadastrar()
    {

        $registrofuncionario = $this->RegistroFuncionario;
        $nome = $this->Nome;
        $data = $this->DatadeNascimento;
        $email = $this->Email;
        $cargo = $this->Cargo;
        $hash = md5($this->Senha);
        $AcompanhamentoChamado = $this->AcompanhamentoChamado;
        $AberturaChamado = $this->AberturaChamado;
        $Manutencao = $this->Manutencao;
        $Dashboard = $this->Dashboard;
        $Cadastro = $this->Cadastro;

        $stmt = $this->banco->getConexao()->prepare("insert into Funcionario(RegistroFuncionario, Nome, DatadeNascimento, Email, Senha, Cargo, Cadastro ,AcompanhamentoChamado, AberturaChamado, Manutencao, Dashboard)values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssiiiii", $registrofuncionario, $nome, $data, $email, $hash, $cargo,$Cadastro, $AcompanhamentoChamado, $AberturaChamado, $Manutencao, $Dashboard);
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
        $hash = md5($this->Senha);
        $AcompanhamentoChamado = $this->AcompanhamentoChamado;
        $AberturaChamado = $this->AberturaChamado;
        $Manutencao = $this->Manutencao;
        $Dashboard = $this->Dashboard;
        $Cadastro = $this->Cadastro;

        $stmt = $this->banco->getConexao()->prepare("update Funcionario set Nome=?, DatadeNascimento=?, Email=?,Cargo=?, senha=?, AcompanhamentoChamado=?,Cadastro=? ,AberturaChamado=?, Manutencao=?,Dashboard=? where RegistroFuncionario = ?");

        $stmt->bind_param("sssisiiiiii", $nome, $data, $email, $cargo, $hash, $AcompanhamentoChamado,$Cadastro, $AberturaChamado, $Manutencao, $Dashboard,$registro);
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
            $resultados[$i]->setDatadeNasc($linha->DatadeNascimento);
            $resultados[$i]->setCargo($linha->Cargo);
            $resultados[$i]->setAcompanhamentoChamado($linha->AcompanhamentoChamado);
            $resultados[$i]->setManutencao($linha->Manutencao);
            $resultados[$i]->setAberturaChamado($linha->AberturaChamado);
            $resultados[$i]->setDashboard($linha->Dashboard);
            $resultados[$i]->setCadastro($linha->Cadastro);
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
    public function getCadastro()
    {
        return $this->Cadastro;
    }
    public function setCadastro($Cadastro)
    {
        $this->Cadastro = $Cadastro;
    }
    public function getAcompanhamentoChamado()
    {
        return $this->AcompanhamentoChamado;
    }
    public function setAcompanhamentoChamado($AcompanhamentoChamado)
    {
        $this->AcompanhamentoChamado = $AcompanhamentoChamado;
    }
    public function getAberturaChamado()
    {
        return $this->AberturaChamado;
    }
    public function setAberturaChamado($AberturaChamado)
    {
        $this->AberturaChamado = $AberturaChamado;
    }
    public function getManutencao()
    {
        return $this->Manutencao;
    }
    public function setManutencao($Manutencao)
    {
        $this->Manutencao = $Manutencao;
    }
    public function getDashboard()
    {
        return $this->Dashboard;
    }
    public function setDashboard($Dashboard)
    {
        $this->Dashboard = $Dashboard;
    }
}

?>