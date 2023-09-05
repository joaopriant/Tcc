<?php
include "Banco.php";
class Manutencao implements JsonSerializable
{
    private $IdManutencao;
    private $Problema;
    private $Foto;
    private $DataInicio;
    private $Status;
    private $IdEquipamento;
    private $banco;
    private $DataTermino;
    private $Manutentor;

    public function jsonSerialize()
    {
        $array["IdManutencao"] = $this->getIdManutencao();
        $array["DataInicio"] = $this->getDataInicio();
        $array["Foto"] = $this->getFoto();
        $array["Problema"] = $this->getProblema();
        $array["Status"] = $this->getStatus();
        $array["IdEquipamento"] = $this->getIdEquipamento();
        $array["DataTermino"] = $this->getDataTermino();
        $array["Manutentor"] = $this->getManutentor();
        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {

        $IdManutencao = $this->IdManutencao;
        $Problema = $this->Problema;
        $Foto = $this->Foto;
        $DataInicio = $this->DataInicio;
        $IdEquipamento = $this->IdEquipamento;
        $Status = $this->Status;
        $Manutentor = $this->Manutentor;
        $DataTermino = $this->DataTermino;

        $stmt = $this->banco->getConexao()->prepare("insert into manutencao(IdManutencao, Problema, Foto, DataInicio, Equipamento, Status, Manutentor, DataTermino)values(?, ?, ?,?,?,?,?,?)");
        $stmt->bind_param("isssisss", $IdEquipamento, $Problema, $Foto, $DataInicio, $IdEquipamento, $Status, $Manutentor, $DataTermino);
        return $stmt->execute();
    }

    public function excluir()
    {
        $IdManutencao = $this->IdManutencao;
        $stmt = $this->banco->getConexao()->prepare("delete from manutencao where IdManutencao = ?");
        $stmt->bind_param("i", $IdManutencao);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $stmt = $this->banco->getConexao()->prepare("update manutencao    
            set Problema=?,
            set Foto=?,
            set DataInicio=?,
            set DataTermino=?,
            set Status=?,
            set Manutentor=?,
            where idManutencao = ?");

        $stmt->bind_param("ssssssi", $this->Problema, $this->Foto, $this->DataInicio, $this->DataTermino, $this->Status, $this->Manutentor ,$this->IdManutencao);
        return $stmt->execute();
    }

    public function buscarmanutencaoPorId($IdManutencao)
    {
        $stmt = $this->banco->getConexao()->prepare("select * from Manutencao where IdManutencao = ?");
        $stmt->bind_param("i", $IdManutencao);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setIdManutencao($linha->IdManutencao);
            $this->setProblema($linha->Problema);
            $this->setFoto($linha->Foto);
            $this->setDataInicio($linha->DataInicio);
            $this->setDataTermino($linha->DataTermino);
            $this->setStatus($linha->Status);
            $this->setManutentor($linha->Manutentor);
            $this->setIdequipamento($linha->IdEquipamento);

        }
        return $this;

    }
    public function buscarconcluidos(){
        $stmt = $this->banco->getConexao()->prepare("SELECT COUNT(*) as concluido from manutencao where status='concluido' ");
        $stmt->execute();
        $resultado = $stmt->get_result();
        return $resultado;
    }

    public function buscarpendente(){
        $stmt = $this->banco->getConexao()->prepare("select count(*) as pendente from manutencao where status='pendente'");
        $stmt->execute();
        $resultado = $stmt->get_result();
        return $resultado;
    }
    public function listarmanutencao()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from manutencao");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new manutencao();
            $resultados[$i]->setIdManutencao($linha->IdManutencao);
            $resultados[$i]->setProblema($linha->Problema);
            $resultados[$i]->setFoto($linha->Foto);
            $resultados[$i]->setDataInicio($linha->DataInicio);
            $resultados[$i]->setDataTermino($linha->DataTermino);
            $resultados[$i]->setStatus($linha->Status);
            $resultados[$i]->setManutentor($linha->Manutentor);
            $resultados[$i]->setIdEquipamento($linha->IdEquipamento);
            $i++;
        }
        return $resultados;
    }
    public function getIdManutencao()
    {
        return $this->IdManutencao;
    }
    public function setIdManutencao($IdManutencao)
    {
        $this->IdManutencao = $IdManutencao;
    }
    public function getProblema()
    {
        return $this->Problema;
    }
    public function setProblema($Problema)
    {
        $this->Problema = $Problema;
    }
    public function getFoto()
    {
        return $this->Foto;
    }
    public function setFoto($Foto)
    {
        $this->Foto = $Foto;
    }
    public function getDataInicio()
    {
        return $this->DataInicio;
    }
    public function setDataInicio($DataInicio)
    {
        $this->DataInicio = $DataInicio;
    }
    public function getStatus()
    {
        return $this->Status;
    }
    public function setStatus($Status)
    {
        $this->Status = $Status;
    }
    public function getIdEquipamento()
    {
        return $this->IdEquipamento;
    }
    public function setIdEquipamento($IdEquipamento)
    {
        $this->IdEquipamento = $IdEquipamento;
    }
    public function getDataTermino()
    {
        return $this->DataTermino;
    }
    public function setDataTermino($DataTermino)
    {
        $this->DataTermino = $DataTermino;
    }

    public function getManutentor()
    {
        return $this->Manutentor;
    }
    public function setManutentor($Manutentor)
    {
        $this->Manutentor = $Manutentor;
    }

}

?>