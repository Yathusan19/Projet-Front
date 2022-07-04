import { useEffect, useState } from "react"
import Product from "./Product";

export default function ProductContainer() {

    function getAllProducts(query) {
        
    }

    const [productsList, setProductsList] = useState([{
        id: 1,
        name: "pack Santa maria (légumes)",
        price: 19.99,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        quantity: 2,
    },
    {
        id: 2,
        name: "concombre",
        price: 23.99,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: '100g'
    },
    {
        id: 3,
        name: "carotte",
        price: 17.85,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: 'kilo'
    },
    {
        id: 4,
        name: "salade",
        price: 25.00,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        quantity: 5,
        unit: 'pièce'
    },
    {
        id: 5,
        name: "tomate",
        price: 5.14,
        image: 'https://www.nifeislife.com/img/c/536.jpg',
        seller: 'PackBio',
        unit: '~50g'
    }])

    useEffect(() => {
        
    }, [])

    return (
        <section className="products-container">
            {productsList.map((product) => <Product key={product.id} product={product} />)}
        </section>
    )
}