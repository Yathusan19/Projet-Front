import ProductContainer from "../ProductContainer";
import SearchForm from "../SearchForm";

export default function Product() {
    return (
        <div className="product-page">
            <section className="hero">
                <div className="hero-image">
                    <img src="assets/images/hero-background.jpg" alt="" />
                    <div className="overlay"></div>
                </div>
                <h1 className="page-title">boutique</h1>
            </section>
            <SearchForm />
            <ProductContainer />
        </div>
    )
}