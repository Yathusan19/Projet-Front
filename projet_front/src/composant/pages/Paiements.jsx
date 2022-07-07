import { useEffect, useState } from "react";
import HeroHeader from "../HeroHeader";
import PaiementProduct from "../PaiementProduct";
import { Link } from 'react-router-dom'

export default function Paiements() {

    const [panier, setPanier] = useState([{
        id: 1,
        name: "pack Santa maria (légumes)",
        price: 19.99,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        quantity: 2,
        localisation: 'Bordeaux'
    },
    {
        id: 2,
        name: "concombre",
        price: 23.99,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: '100g',
        localisation: 'Paris'
    },
    {
        id: 3,
        name: "carotte",
        price: 17.85,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: 'kilo',
        promo: '-20%',
        localisation: 'Montreuil'
    },
    {
        id: 4,
        name: "salade",
        price: 25.00,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        quantity: 5,
        unit: 'pièce',
        localisation: 'Toulouse'
    },
    {
        id: 5,
        name: "tomate",
        price: 5.14,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: '~50g',
        localisation: 'Marseille'
    }])

    const totalPrice = panier.reduce((acc, curr) => acc + curr.price, 0)

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className="paiements-page">
            <HeroHeader title={"paiements"} />
            <div className="main-container">
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
                        <Link to='/panier' className="secondary-button">Retour au panier</Link>
                        <button className="primary-button">Continuer vers l’expédition</button>
                    </div>
                </form>
                <div className="panier-container">
                    {panier.map((product) => <PaiementProduct key={product.id} product={product}/>)}
                    <div className="paiement-row">
                        <div>
                            <p>Sous-total</p>
                            <p>{totalPrice} €</p>
                        </div>
                        <div>
                            <p>Livraison</p>
                            <p className="light-text">calculé à l’étape suivante</p>
                        </div>
                    </div>
                    <div className="total-row">
                        <p>Total</p>
                        <p className="total-price"><span>eur </span>{totalPrice} €</p>
                    </div>
                </div>
            </div>
        </section>
    )
}