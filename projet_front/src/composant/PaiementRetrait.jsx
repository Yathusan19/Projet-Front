import { Link } from 'react-router-dom'

export default function PaiementRetrait() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form className="paiement-form" method="POST" onSubmit={(e) => handleSubmit(e)}>
            <h3>Paiements</h3>
            <div className="coordonnee-wrapper">
                <h4>Numéro pour le point de rencontre :</h4>
            </div>
            <div className="">
                <h4>Informations vous concernant</h4>
                <div className="row">
                    <input type="text" name="prenom" placeholder="Prénom" />
                    <input type="text" name="nom" placeholder="Nom" />
                </div>
                <input type="number" name="telephone" placeholder="Téléphone" />
                <div className="checkbox">
                    <input type="checkbox" name="sauvegarde" id="sauvegarde" />
                    <span>Sauvegarder mes coordonnées pour la prochaine fois</span>
                </div>
            </div>
            <div className="form-buttons">
                <Link to='/panier' className="secondary-button">Retour au panier</Link>
                <button className="primary-button">Continuer vers l’expédition</button>
            </div>
        </form>
    )
}