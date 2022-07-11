<?php
include "connect.php";

function ajouterUser($nom, $prenom, $identifiant, $motdepasse)
{
    if(require("connect.php"))
    {
        $req = $access->prepare("INSERT INTO utilisateurs (nom, prenom, identifiant, motdepasse) VALUES ($nom, $prenom, $identifiant, $motdepasse)");

        $req->execute(array($nom, $prenom, $identifiant, $motdepasse));

        return true;

        $req->closeCursor();
    }
}

// function getUsers($email, $password){

//   if(require("connexion.php")){

//     $req = $access->prepare("SELECT * FROM utilisateur ");

//     $req->execute();

//     if($req->rowCount() == 1){

//       $data = $req->fetchAll(PDO::FETCH_OBJ);

//       foreach($data as $i){
//         $mail = $i->email;
//         $mdp = $i->motdepasse;
//       }

//       if($mail == $email AND $mdp == $password)
//       {
//         return $data;
//       }
//       else{
//           return false;
//       }

//     }

//   }

// }

function modifier($image, $nom, $prix, $desc, $id)
{
    if(require("connect.php"))
    {
        $req = $access->prepare("UPDATE produits SET `image` = ?, nom = ?, prix = ?, description = ? WHERE id=?");

        $req->execute(array($image, $nom, $prix, $desc, $id));

        $req->closeCursor();
    }
}

function afficherUnProduit($id)
{
    if(require("connect.php"))
    {
        $req=$access->prepare("SELECT * FROM produits WHERE id=?");

        $req->execute(array($id));

        $data = $req->fetchAll(PDO::FETCH_OBJ);

        return $data;

        $req->closeCursor();
    }
}

function ajouter($nom, $image, $desc , $prix, $quantite)
{
    if(require("connect.php"))
    {
        $req = $access->prepare("INSERT INTO produits (nom, image, description, prix, quantite) VALUES ($nom, $image, $desc , $prix, $quantite)");

        $req->execute(array($nom, $image, $desc , $prix, $quantite));

        $req->closeCursor();
    }
}

function afficher()
{
    if(require("connect.php"))
    {
        $req=$access->prepare("SELECT * FROM produits ORDER BY id DESC");

        $req->execute();

        $data = $req->fetchAll(PDO::FETCH_OBJ);

        return $data;

        $req->closeCursor();
    }
}

function supprimer($id)
{
    if(require("connect.php"))
    {
        $req=$access->prepare("DELETE FROM produits WHERE id=?");

        $req->execute(array($id));

        $req->closeCursor();
    }
}

function getAdmin($pseudo, $password){

    if(require("connect.php")){

        $req = $access->prepare("SELECT * FROM admin WHERE id=101");

        $req->execute();

        if($req->rowCount() == 1){

            $data = $req->fetchAll(PDO::FETCH_OBJ);

            foreach($data as $i){
                $pseudo = $i->pseudo;
                $mdp = $i->motdepasse;
            }

            if($pseudo == $pseudo AND $mdp == $password)
            {
                return $data;
            }
            else{
                return false;
            }

        }

    }

}

?>