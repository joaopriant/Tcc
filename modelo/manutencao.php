<?php
require_once "Banco.php";
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
        $stmt->bind_param("isssisss", $IdManutencao, $Problema, $Foto, $DataInicio, $IdEquipamento, $Status, $Manutentor, $DataTermino);
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
    public function atualizar_status()
    {
        $status = $this->Status;
        $idManutencao = $this->IdManutencao; 
        $stmt = $this->banco->getConexao()->prepare("update manutencao set Status=? where idManutencao = ?");
        $stmt->bind_param("si", $status,$idManutencao);
        return $stmt->execute();
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
            $resultados[$i]->setIdManutencao($linha->idmanutencao);
            $resultados[$i]->setProblema($linha->problema);
            $resultados[$i]->setFoto($linha->foto);
            $resultados[$i]->setDataInicio($linha->DataInicio);
            $resultados[$i]->setDataTermino($linha->DataTermino);
            $resultados[$i]->setStatus($linha->status);
            $resultados[$i]->setManutentor($linha->Manutentor);
            $resultados[$i]->setIdEquipamento($linha->Equipamento);
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