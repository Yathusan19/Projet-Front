import ProductContainer from "../ProductContainer";
import SearchForm from "../SearchForm";
import HeroHeader from "../HeroHeader";

export default function Product() {
    return (
        <div className="product-page">
            <HeroHeader title="boutique" />
            <SearchForm />
            <ProductContainer />
        </div>
    )
}