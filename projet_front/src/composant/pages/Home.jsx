import "../../styles/pages/_homepage.scss";
import Footer from "../Footer";
import Header from "../Header";


export default function Home() {

    return (
        <div className="homepage">
            <header className='headerTransparent'> </header>
        <section className='sectionNousRejoindre'>
            <h1 className='decouvrirProjet'>Découvrez notre projet</h1>
            <div className="containerProjet">
                <a href="#"><div className="containerImageBloc" id='imageUn'>
                    <div className="masqueNoir">
                        <h3 className='titreProjet'>Vous êtes un agriculteur ? <br/>
                            Venez prendre part au projet 
                        </h3>
                    </div>
                </div></a>
                <a href="#"><div className="containerImageBloc" id='imageDeux'>
                    <div className="masqueNoir">
                        <h3 className='titreProjet'>Vous êtes un agriculteur ? <br/>
                            Venez prendre part au projet 
                        </h3>
                    </div>
                </div></a>
            </div>
        </section>
        <section className="sectionMap">
            <h2 className='mapTitle'>Découvrez les agriculteurs proche de chez vous</h2>
            <div className="containerMap">
                <div className="map">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.919438293305!2d2.093934715675779!3d48.89787247929136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6882c0a609293%3A0x66014e53962f882f!2sCh%C3%A2teau%20de%20Saint-Germain-en-Laye!5e0!3m2!1sfr!2sfr!4v1656626397346!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                
                </div>
            </div>
        </section>
        <section className="sectionAgriculteur">
            <h2 className='titleAgri'>Ils nous ont fait confiance</h2>
            <div className="containerBlocsGrid">
                <div className="blocs" id="imageAgriUn">
                    <div className="filtreNoir">
                        <p className='presAbsolute'>Hervé <br/> <b id='changeSize'>Maraîcher dans le Gers</b></p>
                    </div>
                </div>
                <div className="blocs" id="imageAgriDeux">
                    <div className="filtreNoir">
                        <p className='presAbsolute'>Luc <br/> <b id='changeSize'>Producteur de pomme dans l'Hérault</b></p>
                    </div>
                </div>
                <div className="blocs" id="imageAgriTrois">
                    <div className="filtreNoir">
                        <p className='presAbsolute'>Lucas <br/> <b id='changeSize'>Producteur de salade dans l'Oise</b></p>
                    </div>
                </div>
                <div className="blocs" id="imageAgriQUatre"></div>
                <div className="blocs" id="imageAgriCinq"></div>
                <div className="blocs" id="imageAgriSix"></div>
            </div>
        </section>
        <Footer/>
        </div>
    )
}