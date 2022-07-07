<?php

$pdo = new PDO("mysql:host=localhost;dbname=packbio;charset=utf8", "root", "", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);



// Agriculteurs

$dataAgriculteurs = $pdo->prepare("SELECT * FROM agriculteurs");
$dataAgriculteurs->execute();
$datasAgriculteurs = $dataAgriculteurs->fetchAll(PDO::FETCH_ASSOC);


$datasAgriculteursJson = json_encode($datasAgriculteurs);
var_dump($datasAgriculteursJson);
file_put_contents("dataAgriculteurs.json",$datasAgriculteursJson);



//Produits

$dataProduits = $pdo->prepare("SELECT * FROM produits");
$dataProduits->execute();
$datasProduits = $dataProduits->fetchAll(PDO::FETCH_ASSOC);

$datasProduitsJson = json_encode($datasProduits);
var_dump($datasProduitsJson);
file_put_contents("datasProduits.json",$datasProduitsJson);



//utilisateurs

$dataUtilisateurs = $pdo->prepare("SELECT * FROM utilisateurs");
$dataUtilisateurs->execute();
$datasUtilisateurs = $dataUtilisateurs->fetchAll(PDO::FETCH_ASSOC);

$datasUtilisateursJson = json_encode($datasUtilisateurs);
var_dump($datasUtilisateursJson);
file_put_contents("datasUtilisateurs.json",$datasUtilisateursJson);

?>