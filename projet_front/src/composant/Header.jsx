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
				<div className="container-filter">
					<div id="id01" className="modal">
						<div className="modal-dialog">
						<div className="modal-content">
							<a href="#" className="closebtn">×</a>
							<h2>Connexion</h2>
							<div className="container">
								<form action="">
									<input type="text" id="login" name="login" placeholder="Identifiant"/>
									<input type="text" id="password" name="login" placeholder="Mot de passe"/>
									<a href="" className="link-forgot">Mot de passe oublié ?</a>
									<input type="radio" value="Male" name="gender" className="radio"/> Se souvenir de moi
									<button className="button-submit">Connexion</button>
								</form>
							</div>
						</div>
					</div>
				</div> 
			  </div> 
				}
			</div>
	);
}