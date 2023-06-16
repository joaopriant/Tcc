
<?php
require_once "Banco.php";

class Cargo implements JsonSerializable
{
    private $IdCargo;
    private $Cargo;
    private $banco;
    public function jsonSerialize()
    {
        $array["IdCargo"] = $this->getIdCargo();
        $array["Cargo"] = $this->getCargo();
       
        return $array;
    }
    function __construct()
    {
        $this->banco = new Banco();
    }

    public function cadastrar()
    {
        $IdCargo = $this->IdCargo;
        $Cargo = $this->Cargo;
        

        $stmt = $this->banco->getConexao()->prepare("insert into Cargo(IdCargo, Cargo)values(?, ?)");
        $stmt->bind_param("ss", $IdCargo, $Cargo);
        return $stmt->execute();
    }

    public function excluir()
    {
        $IdCargo = $this->IdCargo;
        $stmt = $this->banco->getConexao()->prepare("delete from Cargo where IdCargo = ?");
        $stmt->bind_param("i", $IdCargo);
        return $stmt->execute();
    }

    public function atualizar()
    {
        $IdCargo = $this->IdCargo;
        $Cargo = $this->Cargo;
        
        $stmt = $this->banco->getConexao()->prepare("update Cargo  set Cargo=? where idCargo=?");

        $stmt->bind_param("si",$Cargo , $IdCargo);
        return $stmt->execute();
    }

    public function buscarCargoPorId($IdCargo)
    {
        $stmt = $this->banco->getConexao()->prepare("select * from Cargo where IdCargo = ?");
        $stmt->bind_param("i", $IdCargo);
        $stmt->execute();
        $resultado = $stmt->get_result();
        while ($linha = $resultado->fetch_object()) {
            $this->setIdCargo($linha->IdCargo);
            $this->setCargo($linha->Cargo);
            

        }
        return $this;

    }

    public function listarCargo()
    {
        $stmt = $this->banco->getConexao()->prepare("Select * from Cargo");
        $stmt->execute();
        $resultado = $stmt->get_result();
        $resultados = array();
        $i = 0;
        while ($linha = $resultado->fetch_object()) {
            $resultados[$i] = new Cargo();
            $resultados[$i]->setIdCargo($linha->IdCargo);
            $resultados[$i]->setCargo($linha->Cargo);
        
            $i++;
        }
        return $resultados;
    }
    public function getIdCargo()
    {
        return $this->IdCargo;
    }
    public function setIdCargo($IdCargo)
    {
        $this->IdCargo = $IdCargo;
    }
    public function getCargo()
    {
        return $this->Cargo;
    }
    public function setCargo($Cargo)
    {
        $this->Cargo = $Cargo;
    }
    
}

?>