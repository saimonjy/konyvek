<?php
    require('includes/adatbazis.php');
    $query = 'SELECT * FROM javakonyvek';
    $db = new AdatBazis();
    echo $db->lista($query);
?>