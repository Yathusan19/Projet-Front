import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Product from "./pages/Product.jsx";

export default function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/produits" element={<Product/>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}