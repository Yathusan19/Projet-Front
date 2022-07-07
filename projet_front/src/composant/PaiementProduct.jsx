export default function PaiementProduct({ product }) {
    return (
        <div className="paiement-product">
            <figure className="image-container">
                <img src={product.image} alt={product.name} />
            </figure>
            <div className="product-content">
                <p className="product-title">{product.name}</p>
                <p className="product-price">{product.price}€</p>
            </div>
        </div>
    )
}