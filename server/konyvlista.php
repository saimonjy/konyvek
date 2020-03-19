<?php
require('includes/mysql_list.php');
$query = 'SELECT * FROM javakonyvek';
echo getListOfTable($query);
?>