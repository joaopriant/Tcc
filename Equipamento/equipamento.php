<?php
include "../banco/banco.php";
class Equipamento implements JsonSerializable
{
    private $IdEquipamento;
    private $numPatrimonio;

    private $Descricao_idDescricao;

    private $Funcionario_RegistroFuncionario;

    private $Local_Idsala;

    private $banco;

    public function jsonSerialize()
    {
        $array["IdEquipamento"] = $this->getIdEquipamento();
        $array["numPatrimonio"] = $this->getnumPatrimonio();
        $array["Descricao_idDescricao"] = $this->getidDescricao();
        $array["Funcionario_RegistroFuncionario"] = $this->getRegistroFuncionario();
        $array["Local_Idsala"] = $this->getIdsala();

        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {

        $idequipamento = $this->IdEquipamento;
        $numpatri = $this->numPatrimonio;
        $descricao = $this->Descricao_idDescricao;
        $local = $this->Local_Idsala;
        $funcionario = $this->Funcionario_RegistroFuncionario;

        $stmt = $this->banco->getConexao()->prepare("insert into equipamento(numPatrimonio, Local_Idsala, Funcionario_RegistroFuncionario,Descricao_idDescricao)values(?,?,?,?)");
        $stmt->bind_param("ssss", $numpatri,  $local, $funcionario,$descricao);
        return $stmt->execute();
    }
    public function excluir()
    {
        $idequipamento = $this->IdEquipamento;
        $stmt = $this->banco->getConexao()->prepare("delete from Equipamento
         where IdEquipamento = ?");
        $stmt->bind_param("i", $idequipamento);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $idequipamento = $this->IdEquipamento;
        $numpatri = $this->numPatrimonio;
        $tipoequip = $this->Descricao_idDescricao;
        $local = $this->Local_Idsala;
        $funcionario = $this->Funcionario_RegistroFuncionario;
        $stmt = $this->banco->getConexao()->prepare("update Local    
            set numPatrimonio=?,
            set TipoEquipamento_idDescricao=?,
            set Local_Idsala=?,
            set Funcionario_RegistroFuncionario=?,
            where IdEquipamento = ?");

        $stmt->bind_param("ssss", $numpatri, $tipoequip, $local, $funcionario);
        $stmt->execute();
    }

    public function buscarequipamentoPorId($IdEquipamento)
    {

        $stmt = $this->banco->getConexao()->prepare("select * from Equipamento
         where IdEquipamento = ?");
        $stmt->bind_param("i", $IdEquipamento);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setIdEquipamento($linha->IdEquipamento);
            $this->setnumPatrimonio($linha->numPatrimonio);
            $this->setIdsala($linha->Local_Idsala);
            $this->setRegistroFuncionario($linha->Funcionario_RegistroFuncionario);
            $this->setidDescricao($linha->Descricao_idDescricao);
        }
        return $this;

    }
    public function listarEquipamento
    (
    ) {
        $stmt = $this->banco->getConexao()->prepare("Select * from Equipamento");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Equipamento();
            $resultados[$i]->setIdEquipamento($linha->IdEquipamento);
            $resultados[$i]->setnumPatrimonio($linha->numPatrimonio);
            $resultados[$i]->setIdsala($linha->Local_Idsala);
            $resultados[$i]->setidDescricao($linha->Descricao_idDescricao);
            $resultados[$i]->setRegistroFuncionario($linha->Funcionario_RegistroFuncionario);
            $i++;
        }
        return $resultados
        ;
    }
    public function getIdEquipamento()
    {
        return $this->IdEquipamento;
    }
    public function setIdEquipamento($v)
    {
        $this->IdEquipamento = $v;
    }
    public function getnumPatrimonio()
    {
        return $this->numPatrimonio;
    }
    public function setnumPatrimonio($numPatrimonio)
    {
        $this->numPatrimonio = $numPatrimonio;
    }
    public function getidDescricao()
    {
        return $this->Descricao_idDescricao;
    }
    public function setidDescricao($Descricao_idDescricao)
    {
        $this->Descricao_idDescricao = $Descricao_idDescricao;
    }
    public function getRegistroFuncionario()
    {
        return $this->Funcionario_RegistroFuncionario;
    }
    public function setRegistroFuncionario($Funcionario_RegistroFuncionario)
    {
        $this->Funcionario_RegistroFuncionario = $Funcionario_RegistroFuncionario;
    }
    public function getIdsala()
    {
        return $this->Local_Idsala;
    }
    public function setIdsala($Local_Idsala)
    {
        $this->Local_Idsala = $Local_Idsala;
    }

}

?>