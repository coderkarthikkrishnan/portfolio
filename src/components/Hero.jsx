import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="section hero">
            <div className="hero-inner">
                <div className="hero-image-wrap">
                    <img
                        className="hero-image"
                        src="https://github.com/Coderkarthik01/GDGimages/blob/07a37f5916605ee11c7f5dd461b8478ed80f76c8/imgsq001.jpeg?raw=true"
                        alt="Karthik Krishnan GS"
                    />
                    <div className="hero-glow" aria-hidden="true" />
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">Karthik{'\u00A0'}Krishnan{'\u00A0'}GS</h1>
                    <p className="hero-role">Web Developer</p>
                    <p className="hero-sub">
                        I build fast, accessible, and modern web experiences with clean, maintainable code.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
