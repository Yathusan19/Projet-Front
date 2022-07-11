import "../../styles/pages/_homepage.scss";
import "../../styles/composants/_loc-search.scss"
import ProfilsContainer from "../ProfilsContainer";
import { Link } from "react-router-dom";
import HeroHeader from "../HeroHeader";
import LocSearch from "../LocSearch";
import Map from "../Map";


export default function Home() {

    return (
        <div className="homepage">
            <HeroHeader/>
            <LocSearch/>
        <section className='sectionNousRejoindre'>
            <h1 className='decouvrirProjet'>Découvrez notre projet</h1>
            <div className="containerProjet">
                <Link to="/"><div className="containerImageBloc" id='imageUn'>
                    <div className="masqueNoir">
                        <h3 className='titreProjet'>Vous êtes un agriculteur ? <br/>
                            Venez prendre part au projet 
                        </h3>
                    </div>
                </div></Link>
                <Link to="/"><div className="containerImageBloc" id='imageDeux'>
                    <div className="masqueNoir">
                        <h3 className='titreProjet'>Vous êtes un client(e) ? <br/>
                            Venez prendre part au projet 
                        </h3>
                    </div>
                </div></Link>
            </div>
        </section>
        <section className="container-projet">
            <h3 className="title-projet">Découvrir notre projet</h3>
            <div className="container-flex-projet">
                <div className="container-image-projet">
                    <img src="assets/images/fraise_png.png" alt="photo d'une fraise avec un fond transparent"></img>
                </div>
                <div className="container-txt-projet">
                    <h3 className="title-txt-projet">La fraicheur</h3>
                    <h4 className="title-deux-txt-projet">DES FRUITS ET LÉGUME BIO</h4>
                    <p className="txt-projet">Retrouvez sur nos étals, vos fruits et légumes Bio préférés. Fraises, pommes, bananes côtoient tomates, carottes ou salades et bien plus encore… Ils sont tout frais, tout justes prêts à être cuisinés !</p>
                </div>
            </div>
            <div className="container-flex-projet" id="inverse">
                <div className="container-image-projet">
                    <img src="assets/images/avocat-png.png" alt="photo d'un avocat avec un fond transparent"></img>
                </div>
                <div className="container-txt-projet">
                    <h3 className="title-txt-projet">La fraicheur</h3>
                    <h4 className="title-deux-txt-projet">DES FRUITS ET LÉGUME BIO</h4>
                    <p className="txt-projet">Retrouvez sur nos étals, vos fruits et légumes Bio préférés. Fraises, pommes, bananes côtoient tomates, carottes ou salades et bien plus encore… Ils sont tout frais, tout justes prêts à être cuisinés !</p>
                </div>
            </div>
            <div className="container-flex-projet">
                <div className="container-image-projet">
                    <img src="assets/images/myrtilles-png.png"></img>
                </div>
                <div className="container-txt-projet">
                    <h3 className="title-txt-projet">La fraicheur</h3>
                    <h4 className="title-deux-txt-projet">DES FRUITS ET LÉGUME BIO</h4>
                    <p className="txt-projet">Retrouvez sur nos étals, vos fruits et légumes Bio préférés. Fraises, pommes, bananes côtoient tomates, carottes ou salades et bien plus encore… Ils sont tout frais, tout justes prêts à être cuisinés !</p>
                </div>
            </div>
            <div className="container-flex-projet" id="inverse">
                <div className="container-image-projet">
                    <img src="assets/images/money-png.png"></img>
                </div>
                <div className="container-txt-projet">
                    <h3 className="title-txt-projet">La fraicheur</h3>
                    <h4 className="title-deux-txt-projet">DES FRUITS ET LÉGUME BIO</h4>
                    <p className="txt-projet">Retrouvez sur nos étals, vos fruits et légumes Bio préférés. Fraises, pommes, bananes côtoient tomates, carottes ou salades et bien plus encore… Ils sont tout frais, tout justes prêts à être cuisinés !</p>
                </div>
            </div>
        </section>
        <h2 className='mapTitle'>Découvrez les agriculteurs proche de chez vous</h2>
        <section className="sectionMap">
            <div className="container-map-flex">
                <div className="containerMap">
                    <Map/>                
                </div>
                <div className="container-map-txt">
                    <h3>Où que vous soyez</h3>
                    <p>Pour rendre accessible à tous le plus large choix de produits Bio et naturels, Packbio vous propose chaque saison le meilleur des fruits et légumes Biologiques au juste prix.</p>
                </div>
            </div>
        </section>
        <section className="sectionProfils">
            <h2 className="titleAgri">Ils nous ont fait confiance</h2>
            <ProfilsContainer/>
        </section>
        </div>
    )
}