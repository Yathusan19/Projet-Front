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
				<form>
				<div class="form-outline mb-4">
				  <input type="email" id="form2Example1" class="form-control" />
				  <label class="form-label" for="form2Example1">Email address</label>
				</div>
				<div class="form-outline mb-4">
				  <input type="password" id="form2Example2" class="form-control" />
				  <label class="form-label" for="form2Example2">Password</label>
				</div>
				<div class="row mb-4">
				  <div class="col d-flex justify-content-center">
					<div class="form-check">
					  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
					  <label class="form-check-label" for="form2Example31"> Remember me </label>
					</div>
				  </div>
			  
				  <div class="col">
					<a href="#!">Forgot password?</a>
				  </div>
				</div>
				<button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
				<div class="text-center">
				  <p>Not a member? <a href="#!">Register</a></p>
				  <p>or sign up with:</p>
				  <button type="button" class="btn btn-link btn-floating mx-1">
					<i class="fab fa-facebook-f"></i>
				  </button>
			  
				  <button type="button" class="btn btn-link btn-floating mx-1">
					<i class="fab fa-google"></i>
				  </button>
			  
				  <button type="button" class="btn btn-link btn-floating mx-1">
					<i class="fab fa-twitter"></i>
				  </button>
			  
				  <button type="button" class="btn btn-link btn-floating mx-1">
					<i class="fab fa-github"></i>
				  </button>
				</div>
			  </form>
				}
		</div>
	);
}