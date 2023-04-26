<?php
include "../banco/banco.php";
class manutencao implements JsonSerializable
{
    private $idManutencao;
    private $problema;
    private $foto;
    private $DataInicio;
    private $status;
    private $Equipamento_IdEquipamento;
    private $banco;

    public function jsonSerialize()
    {
        $array["idManutencao"] = $this->getidManutencao();
        $array["DataInicio"] = $this->getDataInicio();
        $array["foto"] = $this->getfoto();
        $array["problema"] = $this->getproblema();

        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {
        $problema = $this->problema;
        $foto = $this->foto;
        $DataInicio = $this->DataInicio;
        $idequipamento = $this->Equipamento_IdEquipamento;
        $status = $this->status;


        $stmt = $this->banco->getConexao()->prepare("insert into manutencao(problema, foto, DataInicio,Equipamento_IdEquipamento, status)values(?, ?, ?,?,?)");
        $stmt->bind_param("sss", $problema, $foto, $DataInicio, $idequipamento, $status);
        return $stmt->execute();
    }

    public function excluir()
    {
        $idManutencao = $this->idManutencao;
        $stmt = $this->banco->getConexao()->prepare("delete from manutencao where idManutencao = ?");
        $stmt->bind_param("i", $idManutencao);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $stmt = $this->banco->getConexao()->prepare("update manutencao    
            set problema=?,
            set foto=?,
            set DataInicio=?,
            where idManutencao = ?");

        $stmt->bind_param("sssi", $this->problema, $this->foto, $this->DataInicio, $this->idManutencao);
        $stmt->execute();
    }

    public function buscarmanutencaoPorId($idManutencao)
    {
        $stmt = $this->banco->getConexao()->prepare("select * from manutencao where idManutencao = ?");
        $stmt->bind_param("i", $idManutencao);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setidManutencao($linha->idManutencao);
            $this->setproblema($linha->problema);
            $this->setfoto($linha->foto);
            $this->setDataInicio($linha->DataInicio);

        }
        return $this;

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
            $resultados[$i]->setidManutencao($linha->idManutencao);
            $resultados[$i]->setproblema($linha->problema);
            $resultados[$i]->setfoto($linha->foto);
            $resultados[$i]->setDataInicio($linha->DataInicio);
            $i++;
        }
        return $resultados;
    }
    public function getidManutencao()
    {
        return $this->idManutencao;
    }
    public function setidManutencao($idManutencao)
    {
        $this->idManutencao = $idManutencao;
    }
    public function getproblema()
    {
        return $this->problema;
    }
    public function setproblema($problema)
    {
        $this->problema = $problema;
    }
    public function getfoto()
    {
        return $this->foto;
    }
    public function setfoto($foto)
    {
        $this->foto = $foto;
    }
    public function getDataInicio()
    {
        return $this->DataInicio;
    }
    public function setDataInicio($DataInicio)
    {
        $this->DataInicio = $DataInicio;
    }
    public function getstatus()
    {
        return $this->status;
    }
    public function setstatus($DataInicio)
    {
        $this->DataInicio = $DataInicio;
    }
    public function getIdequipamento()
    {
        return $this->Equipamento_IdEquipamento;
    }
    public function setIdequipamento($Equipamento_IdEquipamento)
    {
        $this->Equipamento_IdEquipamento = $Equipamento_IdEquipamento;
    }
}

?>