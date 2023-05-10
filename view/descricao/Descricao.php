<?php
include "../banco/banco.php";
class Descricao implements JsonSerializable
{
    private $idDescricao;
    private $Descricao;
    private $banco;


    public function jsonSerialize()
    {
        $array["idDescricao"] = $this->getidDescricao();
        $array["Descricao"] = $this->getDescricao();
        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {
        $descricao = $this->Descricao;

        $stmt = $this->banco->getConexao()->prepare("insert into Descricao(Descricao)values(?)");
        $stmt->bind_param("s", $descricao);
        return $stmt->execute();
    }

    public function excluir()
    {
        $iddescricao = $this-> idDescricao;
        $stmt = $this->banco->getConexao()->prepare("delete from Descricao where idDescricao = ?");
        $stmt->bind_param("i", $iddescricao);
        return $stmt->execute();
    }

    public function atualizar()
    {   
    
        $idescricao = $this-> idDescricao;
        $descricao = $this->Descricao;
        $stmt = $this->banco->getConexao()->prepare("update Descricao    
            set Descricao=?,
            where idDescricao = ?");

        $stmt->bind_param("si", $descricao, $idescricao);
        return $stmt->execute();
    }

    public function buscarDescricaoPorId($idDescricao)
    {   
        $idDescricao = $this-> idDescricao;
        $Descricao = $this->Descricao;

        $stmt = $this->banco->getConexao()->prepare("select * from Descricao where idDescricao = ?");
        $stmt->bind_param("i", $idDescricao);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setidDescricao($linha->idDescricao);
            $this->setDescricao($linha->Descricao);

        }
        return $this;

    }
    public function listarDescricao()
    {
        
        $stmt = $this->banco->getConexao()->prepare("Select * from Descricao");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Descricao();
            $resultados[$i]->setidDescricao($linha->idDescricao);
            $resultados[$i]->setDescricao($linha->Descricao);
            $i++;
        }
        return $resultados;
    }
    public function getidDescricao()
    {
        return $this->idDescricao;
    }
    public function setidDescricao($v)
    {
        $this->idDescricao = $v;
    }
    public function getDescricao()
    {
        return $this->Descricao;
    }
    public function setDescricao($Descricao)
    {
        $this->Descricao = $Descricao;
    }

}

?>