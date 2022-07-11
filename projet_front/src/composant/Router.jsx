import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Product from "./pages/Product.jsx";
import Article from './pages/Article.jsx'
import Paiements from './pages/Paiements.jsx'
import Panier from "./pages/Panier.jsx";

export default function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/produits" element={<Product/>} />
				<Route path="/produits/:id" element={<Article />} />
				<Route path="/paiements" element={<Paiements />} />
				<Route path="/panier" element={<Panier />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}