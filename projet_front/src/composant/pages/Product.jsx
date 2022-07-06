import ProductContainer from "../ProductContainer";
import SearchForm from "../SearchForm";
import HeroHeader from "../HeroHeader";
import { useState } from 'react'

export default function Product() {

    const [query, setQuery] = useState({
        place: false,
        product: false,
        price: false,
        delivery: false
    })


    return (
        <div className="product-page">
            <HeroHeader title="boutique" />
            <SearchForm query={query} setQuery={setQuery} />
            <ProductContainer query={query} />
        </div>
    )
}