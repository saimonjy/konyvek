<?php
require('includes/config.php');

function getListOfTable($query) {
    global $mysqlconfig;
    $result='{"result": "no result"}';
    $mysqli = new mysqli($mysqlconfig['host'], $mysqlconfig['user'], $mysqlconfig['password'], $mysqlconfig['db_name']);
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') '
                . $mysqli->connect_error);
    }
    $mysqli->set_charset("utf8");
    if ($sqlresult = $mysqli->query($query)) {
        $rows = [];
        while ($row = $sqlresult -> fetch_assoc()) {
            if ($row) {
                $rows[] = $row;
            }
        }
        $result = json_encode($rows);
        $sqlresult->close();
    }
    $mysqli->close();
    return $result;
}

?>