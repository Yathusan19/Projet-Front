import { useState } from "react"
import Product from "./Product";
import products from '../php/datasProduits.json';

export default function ProductContainer({query}) {
    
    function matchQuery(element) {
        console.log(element.nom.toLowerCase())
        // const place = query.place ? query.place === element.localisation ? true : false : true
        const produit = query.product ? query.product.includes(element.nom.toLowerCase()) ? true : false : true
        const price = query.price ? query.price >= element.prix ? true : false : true
        if ( produit && price ) return true
        return false
    }

    const [productsList, setProductsList] = useState(products)

    return (
        <section className="products-container">
            {productsList.map((product) => matchQuery(product) ? <Product key={product.id} product={product} /> : null)}
        </section>
    )
}