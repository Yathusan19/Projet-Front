export default function HeroHeader({title}) {
    
    return (
        <section className="hero">
            <div className="hero-image">
                <img src="assets/images/hero-background.jpg" alt="" />
                <div className="overlay"></div>
            </div>
            <h1 className="page-title">{title}</h1>
        </section>
    )
}