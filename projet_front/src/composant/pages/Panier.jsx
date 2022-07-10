import { Link } from "react-router-dom";
import HeroHeader from "../HeroHeader";
import PanierProduct from "../PanierProduct";

export default function Panier() {
    return (
        <section className="page-panier">
            <HeroHeader title='Panier' />
            <div className="main-container">
                <div className="top-line">
                    <h4>Votre panier</h4>
                    <Link to='/produits'>Continuer les achats</Link>
                </div>
                <div className="panier-products">
                    <PanierProduct /> 
                    <PanierProduct /> 
                    <PanierProduct /> 
                </div>
                <div className="total-container">
                    <div className="total-title">
                        <h3>Sous-total</h3>
                        <h3>19,99€</h3>
                    </div>
                    <p>Taxes incluses</p>
                    <div className="buttons-container">
                        <Link to='/'>Paypal</Link>
                        <Link to='/paiements'>Proceder au paiment</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}