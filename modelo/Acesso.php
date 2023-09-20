<?php
require_once "Banco.php";

class Acesso implements JsonSerializable
{
    private $Funcionario;
    private $AcompanhamentoChamado;
    private $AberturaChamado;
    private $Manutencao;
    private $Dashboard;
    private $banco;

    public function jsonSerialize()
    {
        $array["Funcionario"] = $this->getFuncionario();
        $array["AcompanhamentoChamado"] = $this->getAcompanhamentoChamado();
        $array["AberturaChamado"] = $this->getAberturaChamado();
        $array["Manutencao"] = $this->getManutencao();
        $array["Dashboard"] = $this->getDashboard();

       
        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }
    
    public function cadastrar()
    {

        $Funcionario = $this->Funcionario;
        $AcompanhamentoChamado = $this->AcompanhamentoChamado;
        $AberturaChamado = $this->AberturaChamado;
        $Manutencao = $this->Manutencao;
        $Dashboard = $this->Dashboard;


        $stmt = $this->banco->getConexao()->prepare("insert into Funcionario(Funcionario, AcompanhamentoChamado, AberturaChamado, Manutencao, Dashboard)values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("iiiii", $Funcionario, $AcompanhamentoChamado, $AberturaChamado, $Manutencao, $Dashboard);
        return $stmt->execute();
    }

    public function excluir()
    {
        $Funcionario = $this->Funcionario;
        $stmt = $this->banco->getConexao()->prepare("delete from Acesso where Funcionario = ?");
        $stmt->bind_param("i", $Funcionario);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $Funcionario = $this->Funcionario;
        $AcompanhamentoChamado = $this->AcompanhamentoChamado;
        $AberturaChamado = $this->AberturaChamado;
        $Manutencao = $this->Manutencao;
        $Dashboard = $this->Dashboard;


        $stmt = $this->banco->getConexao()->prepare("update Acesso set AcompanhamentoChamado=?, AberturaChamado=?, Manutencao=?,Dashboard=? where Funcionario = ?");
        $stmt->bind_param("iiiii", $AcompanhamentoChamado, $AberturaChamado, $Manutencao, $Dashboard, $Funcionario);
        return $stmt->execute();
    }
    public function listarAcesso()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from Acesso");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Acesso();
            $resultados[$i]->setFuncionario($linha->Funcionario);
            $resultados[$i]->setAcompanhamentoChamado($linha->AcompanhamentoChamado);
            $resultados[$i]->setManutencao($linha->Manutencao);
            $resultados[$i]->setAberturaChamado($linha->AberturaChamado);
            $resultados[$i]->setDashboard($linha->Dashboard);
            $i++;
        }
        return $resultados;
    }

    public function getFuncionario()
    {
        return $this->Funcionario;
    }
    public function setFuncionario($Funcionario)
    {
        $this->Funcionario = $Funcionario;
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