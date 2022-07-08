import { Link } from 'react-router-dom'

export default function PaiementLivraison() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form className="paiement-form" method="POST" onSubmit={(e) => handleSubmit(e)}>
            <h3>Paiements</h3>
            <div className="coordonnee-wrapper">
                <h4>Coordonnées</h4>
                <input type="text" name="identifiant" id="identifiant" placeholder="E-mail ou numéro de portable"/>
            </div>
            <div className="">
                <h4>Adresse de livraison</h4>
                <select name="region" id="region">
                    <option value="" disabled>Région</option>
                </select>
                <div className="row">
                    <input type="text" name="prenom" placeholder="Prénom" />
                    <input type="text" name="nom" placeholder="Nom" />
                </div>
                <input type="text" name="adresse" id="adresse" placeholder="Adresse" />
                <input type="text" name="appartement" placeholder="Appartement, suite, etc. (facultatif)" />
                <div className="row">
                    <input type="text" name="code-postal" id="code-postal" placeholder="Code postal" />
                    <input type="text" name="ville" id="ville" placeholder="Ville" />
                </div>
                <input type="text" name="telephone" placeholder="Téléphone" />
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