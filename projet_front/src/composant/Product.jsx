import { Link } from "react-router-dom"
import agriculteurs from '../php/datasAgriculteurs.json';

export default function Product({product}) {
    return (
        <Link to={`/produits/${product.id}`} className="product-item">
            <img className="product-image" src={product.image} alt={product.nom} />
            <div className="product-info">
                {product.quantite <= 20 ? <div className="product-alert">Plus que {product.quantite}</div> : null}
                {product.promo ? <div className="product-alert">{product.promo}</div> : null}
                <h3 className="product-title">{product.nom}{product.unit ? <span> ({product.unit})</span> : null}</h3>
                <p className="product-seller">Vendu par {agriculteurs[product.vendeurId - 1].nom} {agriculteurs[product.vendeurId - 1].prenom}</p>
                <h4 className="product-price">{product.prix}€</h4>
            </div>
        </Link>  
    )
}