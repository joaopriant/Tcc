<?php
require_once "Banco.php";
class Equipamento implements JsonSerializable
{
    private $IdEquipamento;

    private $numPatrimonio;

    private $idDescricao;

    private $Responsavel;

    private $Idsala;

    private $NumeroEquip;

    private $banco;

    public function jsonSerialize()
    {
        $array["IdEquipamento"] = $this->getIdEquipamento();
        $array["numPatrimonio"] = $this->getnumPatrimonio();
        $array["idDescricao"] = $this->getidDescricao();
        $array["Responsavel"] = $this->getRegistroFuncionario();
        $array["Idsala"] = $this->getIdsala();
        $array["NumeroEquip"] = $this->getNumeroEquip();

        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {

        $numeroequip = $this->NumeroEquip;
        $numpatri = $this->numPatrimonio;
        $descricao = $this->idDescricao;
        $local = $this->Idsala;
        $funcionario = $this->Responsavel;

        $stmt = $this->banco->getConexao()->prepare("insert into equipamento(NumeroEquip,numPatrimonio, Local, Responsavel,Descricao)values(?,?,?,?,?)");
        $stmt->bind_param("ssisi", $numeroequip,$numpatri,  $local, $funcionario,$descricao);
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
        $descricao = $this->idDescricao;
        $local = $this->Idsala;
        $funcionario = $this->Responsavel;
        $NumeroEquip = $this->NumeroEquip;
        $stmt = $this->banco->getConexao()->prepare("update equipamento set NumeroEquip=?, numPatrimonio=?, Descricao=?, Local=?, Responsavel=? where IdEquipamento = ?");

        $stmt->bind_param("iiiisi", $NumeroEquip,$numpatri, $descricao, $local, $funcionario,$idequipamento);
        return $stmt->execute();
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
            $this->setIdsala($linha->Idsala);
            $this->setidDescricao($linha->NumeroEquip);
            $this->setRegistroFuncionario($linha->Responsavel);
            $this->setidDescricao($linha->idDescricao);
        }
        return $this;

    }
    public function listarEquipamento() 
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from Equipamento");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Equipamento();
            $resultados[$i]->setIdEquipamento($linha->IdEquipamento);
            $resultados[$i]->setnumPatrimonio($linha->numPatrimonio);
            $resultados[$i]->setIdsala($linha->Local);
            $resultados[$i]->setidDescricao($linha->NumeroEquip);
            $resultados[$i]->setidDescricao($linha->Descricao);
            $resultados[$i]->setRegistroFuncionario($linha->Responsavel);
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
    public function getNumeroEquip()
    {
        return $this->NumeroEquip;
    }
    public function setNumeroEquip($NumeroEquip)
    {
        $this->NumeroEquip = $NumeroEquip;
    }
    public function getidDescricao()
    {
        return $this->idDescricao;
    }
    public function setidDescricao($idDescricao)
    {
        $this->idDescricao = $idDescricao;
    }
    public function getRegistroFuncionario()
    {
        return $this->Responsavel;
    }
    public function setRegistroFuncionario($Responsavel)
    {
        $this->Responsavel = $Responsavel;
    }
    public function getIdsala()
    {
        return $this->Idsala;
    }
    public function setIdsala($Idsala)
    {
        $this->Idsala = $Idsala;
    }

}

?>