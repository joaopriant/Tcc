<?php
require_once "../banco/banco.php";
class Local implements JsonSerializable
{
    private $idSala;
    private $Numsala;
    private $Bloco;
    private $Andar;
    private $banco;

    public function jsonSerialize()
    {
        $array["idSala"] = $this->getidSala();
        $array["Andar"] = $this->getAndar();
        $array["Bloco"] = $this->getBloco();
        $array["Numsala"] = $this->getNumsala();

        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {
        $numsala = $this->Numsala;
        $bloco = $this->Bloco;
        $andar = $this->Andar;

        $stmt = $this->banco->getConexao()->prepare("insert into local(Numsala, Bloco, Andar)values(?, ?, ?)");
        $stmt->bind_param("sss", $numsala, $bloco, $andar);
        return $stmt->execute();
    }

    public function excluir()
    {
        $idsala = $this->idSala;
        $stmt = $this->banco->getConexao()->prepare("delete from Local where idSala = ?");
        $stmt->bind_param("i", $idsala);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $numsala = $this->Numsala;
        $bloco = $this->Bloco;
        $andar = $this->Andar;
        $idsala = $this->idSala;
        $stmt = $this->banco->getConexao()->prepare("update Local    
            set Numsala=?,
            set Bloco=?,
            set Andar=?,
            where idSala = ?");

        $stmt->bind_param("sssi", $numsala, $bloco, $andar, $idsala);
        return $stmt->execute();
    }

    public function buscarLocalPorId($idSala)
    {
        $stmt = $this->banco->getConexao()->prepare("select * from Local where idSala = ?");
        $stmt->bind_param("i", $idSala);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setidSala($linha->Idsala);
            $this->setNumsala($linha->NumSala);
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
            $resultados[$i]->setidSala($linha->Idsala);
            $resultados[$i]->setNumsala($linha->Numsala);
            $resultados[$i]->setBloco($linha->Bloco);
            $resultados[$i]->setAndar($linha->Andar);
            $i++;
        }
        return $resultados;
    }
    public function getidSala()
    {
        return $this->idSala;
    }
    public function setidSala($idsala)
    {
        $this->idSala = $idsala;
    }
    public function getNumsala()
    {
        return $this->Numsala;
    }
    public function setNumsala($Numsala)
    {
        $this->Numsala = $Numsala;
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