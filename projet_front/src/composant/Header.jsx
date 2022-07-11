import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

	function ToggleMenu() {
		const menu = document.querySelector('.header-navigation')
		let isOpen = menu.classList.contains('open')
		isOpen ? menu.classList.remove('open') : menu.classList.add('open')
	}

	const [modal, setModal] = useState(false);	

	return (
		<div>
		<header className="header">
			<a  className="logo" href="/">PACKBIO</a>
			<div className="burger-button" onClick={() => ToggleMenu()}></div>
			<nav className="header-navigation">
				<Link to="/panier">Accueil</Link>
				<Link to="/produits">Produits</Link>
				<Link to="/">Contact</Link>
				 <Link onClick={() => setModal(!modal)} className="header-button" to="/">Connexion</Link>
				<Link className="header-panier" to="/"><img src="assets/images/icon-panier.svg" alt="Afficher le panier"/></Link>
			</nav>
		</header>
		{modal && 
				<div id="id01" class="modal">
				<div class="modal-dialog">
				  <div class="modal-content">
					<header class="container"> 
					  <a href="#" class="closebtn">×</a>
					  <h2>Connexion</h2>
					</header>
					<div class="container">
						<form action="">
							<input type="text" id="login" name="login" placeholder="login"/>
							<input type="text" id="password" name="login"placeholder="password"/>
						</form>
					</div>
					<footer class="container">
					<form action="">
					<a href="">Mot de passe oublié ?</a>
					<input type="submit" className="valide" value="Connexion"/>
					</form>
					</footer>
				  </div>
				</div>
			  </div> 
				}
			</div>
	);
}