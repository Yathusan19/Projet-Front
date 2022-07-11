import { useState } from "react";
import { useParams } from "react-router-dom";
import produits from '../../php/datasProduits.json';
import agriculteurs from '../../php/datasAgriculteurs.json';
import { useEffect } from "react";
import axios from 'axios'

export default function Article() {
    const [count, setCount] = useState(0);

    const handleChangeQuantity = (quantity) => {
    setCount(p => (p+quantity>=0 && p+quantity<=2) ? p+quantity : p)    
    }

    let num = 0;
    let buttonsCount = document.getElementsByClassName("button-count");
    let inputNumberProduct = document.getElementsByClassName("number-product")[0];

    const params = useParams();

    return (
        <div className="article">
            {
                produits.map((produit) => 
                    produit.id === params.id ?
                    <div className="section_one" key={produit.id}>
                        <div className="img_sec">
                            <img src="/assets/images/Image1.png" alt="" />
                        </div>
                        <div className="first_sec_text">
                            <h2 className="title">{produit.nom}{produit.quantite <= 20 ? <span className="rest">Plus que {produit.quantite}</span> : null}</h2>
                            <p className="vente">
                                Vendu par 
                                <span style={{color: "green"}}> {agriculteurs[produit.vendeurId].nom} {agriculteurs[produit.vendeurId].prenom}</span>
                            </p>
                            <div className="price">
                                <p className="prix">
                                    {produit.prix} €
                                </p>
                                <p className="taxe">
                                    Taxes incluses
                                </p>
                            </div>
                            <div className="quantite">
                                <p className="quantite">
                                    Quantité
                                </p>
                                <div className="quantity_poids">
                                    <div className="product-count">
                                        <button className="button-count no-active" onClick={() => handleChangeQuantity(-1)}>-</button>
                                        <input type="text" readOnly className="number-product" value={count} />
                                        <button className="button-count" onClick={() => handleChangeQuantity(1)}>+</button>
                                    </div>
                                    <div>
                                        <p className="poids">
                                            Ce panier fait environ
                                            <span style={{fontWeight: "bold"}}> 4kg </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="zone_buttons">
                                    <button className="reservation">Réserver maintenant</button>
                                    <button className="paiement">Procéder au paiement</button>
                                </div>
                                <div className="desc">
                                    <p className="description">
                                        {produit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            )}
            <div className="section_two">
                <h3 className="title_sec_two">Ce qui pourrez vous intéresser</h3>
                <div className="third_section">
                    <div className="img_0">
                        <div className="information">
                            <p className="titre">
                                pack flying cloud(fruits)
                            </p>
                            <p className="vente">
                                Vendu par Packbio
                            </p>
                            <p className="prix">
                                12,99$
                            </p>
                        </div>
                    </div>
                    <div className="img_1">
                        <div className="information">
                            <p className="titre">
                                Cerise (100g)
                            </p>
                            <p className="vente">
                                Vendu par Jean8758
                            </p>
                            <p className="prix">
                                5,99$
                            </p>
                        </div>
                    </div>
                    <div className="img_2">
                        <div className="information">
                            <p className="titre">
                                Pommes rouges (100g)
                            </p>
                            <p className="vente">
                                Vendu par Luc34
                            </p>
                            <p className="prix">
                                8,99$
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}