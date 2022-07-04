import { Link } from "react-router-dom";

export default function Product({product}) {
    return (
        <Link to={`/produits/${product.id}`} className="product-item">
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
                {product.quantity ? <div className="product-quantity">Plus que {product.quantity}</div> : null}
                <h3 className="product-title">{product.name}{product.unit ? <span> ({product.unit})</span> : null}</h3>
                <p className="product-seller">Vendu par {product.seller}</p>
                <h4 className="product-price">{product.price}€</h4>
            </div>
        </Link>  
    )
}