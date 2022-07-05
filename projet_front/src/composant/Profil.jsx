import { Link } from "react-router-dom";
import "../styles/composants/_profil.scss";

export default function profil({profil}){
    return (
        <Link to={`/profils`} className="profil-item">
            <img className="profil-image" src={profil.image} alt={profil.name} />
            <div className="profil-filter"></div>
                <div className="container-profil-info">
                    <h3 className="profil-name">{profil.name}</h3>
                    <p className="profil-desc">{profil.desc}</p>
                </div>
        </Link>
    )
}