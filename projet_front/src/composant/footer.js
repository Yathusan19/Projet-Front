import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <footer>
            <div className="title-footer">
                <h2>PackBio</h2>
            </div>
            <div className="links-footer">
                <div className="container">
                    <ul>
                    <li>SAV</li>
                    <li>Conditions générales de vente</li>
                    <li>Condition générale de retour</li>
                    <li>Utilisation des cookies</li>
                 </ul>
                </div>  
               
                <div className="container">
                <ul>
                    <li>Portail Agriculteur</li>
                    <li>Contact</li>
                    <li>Connexion</li>
                    <li>Produits</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                    <p>Mentions légales.</p>
                </div>
        </footer>
  );
}
export default Footer;