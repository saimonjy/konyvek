<?php 
require('includes/adatbazis.php');

$post = json_decode(file_get_contents('php://input'), true);
print_r($post);

//1. $post atalakitasa olyan adatta ami a tablaban jo (ervenyesseg kezelese)
if (!$post['azon']) {
    die('{"error":"ervenytelen azonosito: \'{$post[\'azon\']}\'"}');
}

$query = 'INSERT INTO javakonyvek (azon, cim) VALUES ("' . $post['azon'] . '", "' . $post['cim'] . '")';

// $stmt = $mysqli->prepare("SELECT * FROM myTable WHERE name = ? AND age = ?");
// $stmt->bind_param("si", $_POST['name'], $_POST['age']);
// $stmt->execute();

//2. $post eltarolasa az adatbazisban
$db = new AdatBazis();
echo $db->mentes($query);
?>