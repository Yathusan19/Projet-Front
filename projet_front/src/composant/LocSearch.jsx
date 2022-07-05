export default function LocSearch() {
    return(
        <div className="loc-search-container">
            <div className="input-flex-container">
                <a href=""><div className="meetup-label shadow">Point de rencontre</div></a>
                <a href=""><div className="meetup-label border">Livraison</div></a>
            </div>
            <form className="form-search" action="" method="POST">
                <div className="loc-container">
                    <label htmlFor="lieu">Où habitez-vous ?</label>
                    <input type="text" name="lieu" id="lieu" placeholder="Toulouse, Marseille, Paris..." />
                </div>
                <button className="search-button" type="submit">Rechercher</button>
            </form>
        </div>
    )
}