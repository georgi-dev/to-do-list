<?php
require_once './constants.php';
class Db
{
    private $_pdo;
    private $_query;
    private $_rst;
    private $_result;
    

    public function __construct($query)
    {
        $this->_query = $query;
        $this->_pdo = new PDO("mysql:host=".SERVERNAME.";dbname=".DB_NAME."", USERNAME, PASSWORD);
        $this->_rst = $this->_pdo->prepare($this->_query);
    }

    public function fetch($binds = null)
    {
        $this->_rst->execute($binds);
        $this->_result = $this->_rst->fetch(PDO::FETCH_ASSOC);
        return $this->_result;
        
    }
    public function getAffectedRows() {
        return $this->_rst->rowCount();
    }
    public function fetchAll($binds = null)
    {
       
        $this->_rst->execute($binds);
        $this->_result = $this->_rst->fetchAll(PDO::FETCH_ASSOC);

        return $this->_result;
        
    }

    public function query($binds = null)
    {
            $this->_rst->execute($binds);
            return $this->_pdo->lastInsertId();
        
    }

    private function _sql_debug($_query, $binds = null)
    {
        if ($binds !== null) {
            foreach ($binds as $key => $value)
            {
                $_query = str_replace($key, "'" . $value . "'", $_query);
            }   
        }
        Debug::var_debug($_query);
    }

}