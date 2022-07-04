export default function SearchForm() {
    return (
        <div className="form-container">
            <div className="filter-label">Filtres</div>
            <form className="form" action="" method="POST">
                <div className="input-container">
                    <label htmlFor="lieu">Lieu</label>
                    <input type="text" name="lieu" id="lieu" placeholder="Tapez quelque chose..." />
                </div>
                <div className="input-container">
                    <label htmlFor="item">Que recherchez vous ?</label>
                    <input type="text" name="item" id="item" placeholder="Tapez quelque chose..." />
                </div>
                <div className="input-container">
                    <label htmlFor="prix">Gamme de prix</label>
                    <select name="prix" id="prix">
                        <option value="10">1-10€</option>
                        <option value="20">1-20€</option>
                        <option value="30">1-30€</option>
                        <option value="40">+30€</option>
                    </select>
                </div>
                <div className="input-container no-border">
                    <label htmlFor="type">Type de livraison</label>
                    <select name="type" id="type">
                        <option value="livraison">Livraison</option>
                        <option value="point-de-rencontre">Point de rencontre</option>
                    </select>
                </div>
                <button className="form-button" type="submit">Rechercher</button>
            </form>
        </div>
    )
}