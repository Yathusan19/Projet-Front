<?php

$pdo = new PDO("mysql:host=localhost:3306;dbname=packbio", "root", "", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);


$data = $pdo->prepare("SELECT * FROM *");
$data->execute();
$dataTot = $data->fetchAll(PDO::FETCH_ASSOC);


$dataJson = json_encode($dataTot);
var_dump($dataJson);
file_put_contents("data.json",$dataJson)


?>