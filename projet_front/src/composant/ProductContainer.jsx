import { useState } from "react"
import Product from "./Product";

export default function ProductContainer({query}) {
    
    function matchQuery(element) {
        const place = query.place ? query.place === element.localisation ? true : false : true
        const product = query.product ? query.product.includes(element.name) ? true : false : true
        const price = query.price ? query.price >= element.price ? true : false : true
        if ( place && product && price ) return true
        return false
    }

    const [productsList, setProductsList] = useState([{
        id: 1,
        name: "pack Santa maria (légumes)",
        price: 19.99,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        quantity: 2,
        localisation: 'Bordeaux'
    },
    {
        id: 2,
        name: "concombre",
        price: 23.99,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: '100g',
        localisation: 'Paris'
    },
    {
        id: 3,
        name: "carotte",
        price: 17.85,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: 'kilo',
        promo: '-20%',
        localisation: 'Montreuil'
    },
    {
        id: 4,
        name: "salade",
        price: 25.00,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        quantity: 5,
        unit: 'pièce',
        localisation: 'Toulouse'
    },
    {
        id: 5,
        name: "tomate",
        price: 5.14,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: '~50g',
        localisation: 'Marseille'
    }])

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