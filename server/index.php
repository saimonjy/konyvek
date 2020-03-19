<?php
$mysqli = new mysqli('localhost', 'root', '', 'test2');

if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
$mysqli->set_charset("utf8");

if ($result = $mysqli->query("SELECT * FROM javakonyvek")) {
    $konyvek = [];
    while ($konyvek[] = $result -> fetch_assoc()) {}
    echo json_encode($konyvek);
    $result->close();
}

$mysqli->close();
?>