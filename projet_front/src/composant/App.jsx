import { useState } from "react";
import { deliveryContext, panierContext } from "../context/Contexts";
import Router from "./Router";

export default function App() {

    const [delivery, setDelivery] = useState('point-de-rencontre')
    const [panier, setPanier] = useState([{}])

    function handleDeliveryChange(type) {
        if (delivery === type) return
        setDelivery(type)
    }

    function handlePanierChange(element) {
        setPanier((prev) => [{ ...prev, element}])
    }

	return (
        <deliveryContext.Provider value={[delivery, handleDeliveryChange]}>
            <panierContext.Provider value={[panier, handlePanierChange]}>
                <Router />
            </panierContext.Provider>
        </deliveryContext.Provider>
	)
}