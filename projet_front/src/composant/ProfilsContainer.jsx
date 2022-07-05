import { useEffect, useState } from "react";
import Profil from "./Profil";

export default function ProfilsContainer(){
    
    function getProfils(query){

    }

    const [profilsList, setProfilsList] = useState([{
        id: 1,
        name: "Hervé",
        desc: "Maraîcher dans le Gers.",
        image: "https://www.tgs-france.fr/app/uploads/2014/11/agriculteur-berger-875x560-c-center.jpg"
    },
    {
        id: 2,
        name: "Luc",
        desc: "Producteur de pommes dans l’Hérault.",
        image: "https://www.nifeislife.com/img/c/536.jpg"
    },
    {
        id: 3,
        name: "Lucas",
        desc: "Producteur de salades dans la Creuse.",
        image: "https://www.oise.fr/fileadmin/user_upload/docs/marche-fermier-digital/fruits-legumes/la-ferme-du-metz/la-ferme-du-metz-1.jpg"
    }])

    useEffect(() => {

    }, [])
    
    return (

        <div className="container-profils">
            {profilsList.map((profil) => <Profil key={profil.id} profil={profil}/>)}
        </div>
    )
}