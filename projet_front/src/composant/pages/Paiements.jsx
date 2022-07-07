import HeroHeader from "../HeroHeader";

export default function Paiements() {
    return (
        <section className="paiements-page">
            <HeroHeader title={"paiements"} />
            <div className="main-container">
                <form className="">
                    <h3>Paiements</h3>
                    <div className="">
                        <h4>Coordonnées</h4>
                        <input type="text" name="identifiant" id="identifiant" placeholder="E-mail ou numéro de portable"/>
                    </div>
                    <div className="">
                        <h4>Adresse de livraison</h4>
                        <select name="region" id="region">
                            <option value="" disabled>Région</option>
                        </select>
                        <div className="row">
                            <input type="text" name="prenom" id="prenom" placeholder="Prénom" />
                            <input type="text" name="nom" id="nom" placeholder="Nom" />
                        </div>
                        <input type="text" name="adresse" id="adresse" placeholder="Adresse" />
                        <input type="text" name="adresse" id="adresse" placeholder="Appartement, suite, etc. (facultatif)" />
                        <div className="row">
                            <input type="text" name="code-postal" id="code-postal" placeholder="Code postal" />
                            <input type="text" name="ville" id="ville" placeholder="Ville" />
                        </div>
                        <input type="text" name="telephone" id="telephone" placeholder="Téléphone" />
                        <div className="checkbox">
                            <input type="checkbox" name="sauvegarde" id="sauvegarde" />
                            <span>Sauvegarder mes coordonnées pour la prochaine fois</span>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="secondary-button">Retour au panier</button>
                        <button className="primary-button">Continuer vers l’expédition</button>
                    </div>
                </form>
                <div className="panier-container">
                    <div></div>
                </div>
            </div>
        </section>
    )
}