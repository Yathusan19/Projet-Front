import { useState } from "react"
import Product from "./Product";
import products from '../php/datasProduits.json';

export default function ProductContainer({query}) {
    
    function matchQuery(element) {
        const place = query.place ? query.place === element.localisation ? true : false : true
        const product = query.product ? query.product.includes(element.name) ? true : false : true
        const price = query.price ? query.price >= element.price ? true : false : true
        if ( place && product && price ) return true
        return false
    }

    const [productsList, setProductsList] = useState(products)

    // function getAllProducts() {
    //     axios.get('DATABASE_URL')
    //         .then(function (response) {
    //             setProductsList(response.data)
    //         })
    // }

    return (
        <section className="products-container">
            {productsList.map((product) => matchQuery(product) ? <Product key={product.id} product={product} /> : null)}
        </section>
    )
}