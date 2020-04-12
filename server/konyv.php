<?php
    require('includes/adatbazis.php');
    $query = 'SELECT * FROM javakonyvek WHERE azon = "' . $_GET['azon'] . '"';
    $db = new AdatBazis();
    echo $db->lekerdezes($query);
?>