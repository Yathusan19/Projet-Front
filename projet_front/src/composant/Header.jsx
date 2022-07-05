import { Link } from "react-router-dom";

export default function Header() {

	function ToggleMenu() {
		const menu = document.querySelector('.header-navigation')
		let isOpen = menu.classList.contains('open')
		isOpen ? menu.classList.remove('open') : menu.classList.add('open')
	}
	
	return (
		<header className="header">
			<a  className="logo" href="/">PACKBIO</a>
			<div className="burger-button" onClick={() => ToggleMenu()}></div>
			<nav className="header-navigation">
				<Link to="/">Accueil</Link>
				<Link to="/produits">Produits</Link>
				<Link to="/">Contact</Link>
				<Link className="header-button" to="/">Connexion</Link>
				<Link className="header-panier" to="/"><img src="assets/images/icon-panier.svg" alt="Afficher le panier"/></Link>
			</nav>
		</header>
	);
}