import { useState } from "react";
import HeroHeader from "../HeroHeader";
import PaiementLivraison from "../PaiementLivraison";
import PaiementProduct from "../PaiementProduct";
import { deliveryContext } from "../../context/Contexts";
import { useContext } from "react";
import PaiementRetrait from "../PaiementRetrait";

export default function Paiements() {

    const [ delivery, handleDeliveryChange ] = useContext(deliveryContext)

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
    console.log(delivery)
    
    return (
        <section className="paiements-page">
            <HeroHeader title={"paiements"} />
            <div className="main-container">
                { delivery === 'livraison' ?
                    <PaiementLivraison />
                    :
                    <PaiementRetrait />
                }
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