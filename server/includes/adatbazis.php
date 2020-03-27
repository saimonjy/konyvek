<?php
require('includes/config.php');

class AdatBazis {
    public $kapcsolat;

    function __construct() {
        global $mysqlconfig;

        $this->kapcsolat = new mysqli($mysqlconfig['host'], $mysqlconfig['user'], $mysqlconfig['password'], $mysqlconfig['db_name']);
        if ($this->kapcsolat->connect_error) {
            die('Connect Error (' . $this->kapcsolat->connect_errno . ') '
                    . $this->kapcsolat->connect_error);
        }
        $this->kapcsolat->set_charset("utf8");
    }

    function __destruct() {
        $this->kapcsolat->close();
    }

    function lekerdezes($query) {
        global $mysqlconfig;
        if ($sqlresult = $this->kapcsolat->query($query)) {
            $result = [];
            while ($row = $sqlresult->fetch_assoc()) {
                if ($row) {
                    $result[] = $row;
                }
            }
            $sqlresult->close();
        } else {
            $result = ['error' => [
                'query' => $query,
                'message' => $this->kapcsolat->error,
            ]];    
        }
        return $this->json($result);
    }

    function mentes($query) {
        if ($this->kapcsolat->query($query) === true) {
            $result = ['result' => 'ok'];
        } else {
            $result = ['error' => [
                'query' => $query,
                'message' => $this->kapcsolat->error,
            ]];    
        }
        return $this->json($result);
    }

    function json($adat) {
        return json_encode($adat);
    }

}

?>