<?php
require_once "Banco.php";
class Local implements JsonSerializable
{
    private $Idsala;
    private $Sala;
    private $Bloco;
    private $Andar;
    private $banco;

    public function jsonSerialize()
    {
        $array["Idsala"] = $this->getIdsala();
        $array["Andar"] = $this->getAndar();
        $array["Bloco"] = $this->getBloco();
        $array["Sala"] = $this->getSala();

        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {   
        $Idsala = $this-> Idsala;
        $Sala = $this->Sala;
        $bloco = $this->Bloco;
        $andar = $this->Andar;

        $stmt = $this->banco->getConexao()->prepare("insert into local(Idsala, Sala, Bloco, Andar)values(?, ?, ?, ?)");
        $stmt->bind_param("isss",$Idsala, $Sala, $bloco, $andar);
        return $stmt->execute();
    }

    public function excluir()
    {
        $Idsala = $this->Idsala;
        $stmt = $this->banco->getConexao()->prepare("delete from Local where Idsala = ?");
        $stmt->bind_param("i", $Idsala);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $Sala = $this->Sala;
        $bloco = $this->Bloco;
        $andar = $this->Andar;
        $Idsala = $this->Idsala;
        
        $stmt = $this->banco->getConexao()->prepare("update Local set Sala=?, Bloco=?, Andar=? where Idsala = ?");

        $stmt->bind_param("sssi", $Sala, $bloco, $andar, $Idsala);
        return $stmt->execute();
    }

    public function buscarLocalPorId($Idsala)
    {
        $stmt = $this->banco->getConexao()->prepare("select * from Local where Idsala = ?");
        $stmt->bind_param("i", $Idsala);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setIdsala($linha->Idsala);
            $this->setSala($linha->Sala);
            $this->setBloco($linha->Bloco);
            $this->setAndar($linha->Andar);

        }
        return $this;

    }

    public function listarLocal()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from Local");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Local();
            $resultados[$i]->setIdsala($linha->Idsala);
            $resultados[$i]->setSala($linha->Sala);
            $resultados[$i]->setBloco($linha->Bloco);
            $resultados[$i]->setAndar($linha->Andar);
            $i++;
        }
        return $resultados;
    }
    public function getIdsala()
    {
        return $this->Idsala;
    }
    public function setIdsala($Idsala)
    {
        $this->Idsala = $Idsala;
    }
    public function getSala()
    {
        return $this->Sala;
    }
    public function setSala($Sala)
    {
        $this->Sala = $Sala;
    }
    public function getBloco()
    {
        return $this->Bloco;
    }
    public function setBloco($Bloco)
    {
        $this->Bloco = $Bloco;
    }
    public function getAndar()
    {
        return $this->Andar;
    }
    public function setAndar($Andar)
    {
        $this->Andar = $Andar;
    }

}

?>