import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <h2 className="title-footer">PackBio</h2>
            <nav className="links-footer">
                <div className="container">
                    <Link to="/">SAV</Link>
                    <Link to="/">Conditions générales de vente</Link>
                    <Link to="/">Condition générale de retour</Link>
                    <Link to="/">Utilisation des cookies</Link>
                </div>  
                <div className="container">
                    <Link to="/">Portail Agriculteur</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Connexion</Link>
                    <Link to="/">Produits</Link>
                </div>
            </nav>
            <div className="copyright">
                <Link to="/">Mentions légales.</Link>
            </div>
        </footer>
    );
}