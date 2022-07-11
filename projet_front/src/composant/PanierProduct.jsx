export default function PanierProduct() {
    return (
        <div className="panier-product">
            <div className="product-title">
                <figure className="product-image">
                    <img src="https:\/\/img.passeportsante.net\/1200x675\/2021-05-03\/i102018-concombre-cornichon-nu.webp" alt="" />
                </figure>
                <h5>pack Santa maria (légumes)</h5>
            </div>
            <div className="product-quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <h6 className="product-price">19,99€</h6>
        </div>
    )
}