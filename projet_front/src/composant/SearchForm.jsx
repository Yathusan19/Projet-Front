import { useContext } from "react"
import { deliveryContext } from "../context/Contexts"

export default function SearchForm({ query, setQuery }) {

    const [delivery, handleDeliveryChange] = useContext(deliveryContext)

    function handleSubmit(e) {
        e.preventDefault()
        const place = document.querySelector('#place').value
        const product = document.querySelector('#product').value
        const price = document.querySelector('#price').value
        const deliveryType = document.querySelector('#delivery').value
        setQuery({
            place: place,
            product: product,
            price: price,
        })
        handleDeliveryChange(deliveryType)
        console.log(query)
        console.log(delivery)
    }
       
    return (
        <div className="form-container">
            <div className="filter-label">Filtres</div>
            <form className="form" action="" method="POST" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-container">
                    <label htmlFor="place">Lieu</label>
                    <input type="text" name="place" id="place" placeholder="Tapez quelque chose..." />
                </div>
                <div className="input-container">
                    <label htmlFor="product">Que recherchez vous ?</label>
                    <input type="text" name="product" id="product" placeholder="Tapez quelque chose..." />
                </div>
                <div className="input-container">
                    <label htmlFor="price">Gamme de prix</label>
                    <select name="price" id="price">
                        <option value="10">1-10€</option>
                        <option value="20">1-20€</option>
                        <option value="30">1-30€</option>
                        <option value="40">+30€</option>
                    </select>
                </div>
                <div className="input-container no-border">
                    <label htmlFor="delivery">Type de livraison</label>
                    <select name="delivery" id="delivery">
                        <option value="livraison">Livraison</option>
                        <option value="point-de-rencontre">Point de rencontre</option>
                    </select>
                </div>
                <button className="form-button" type="submit">Rechercher</button>
            </form>
        </div>
    )
}