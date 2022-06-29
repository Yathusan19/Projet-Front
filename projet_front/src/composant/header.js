import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
			<header>
				<h2><a href="#">PACKBIO</a></h2>
				<nav>
					<li><a href="#">Produits</a></li>
					<li><a href="#">Contact</a></li>
					<li><a className="header-connexion" href="#">Connexion</a></li>
					<li><a className="header-panier" img src="src/composant/iconepanier.png" alt="Icone Panier"href="#"></a></li>
				</nav>
			</header>

    </div>
  );
}

export default Header;
