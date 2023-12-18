import './HeroSection.css'

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hello, I'm Maria Aksamentova</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Entry Level Front-End </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                        I'm a goal-oriented Entry Level Frontend Developer with knowledge of HTML, CSS, JavaScript, React.
                        <br />
                    </p>
                </div>
                           </div>
            <div className="hero-section-img">
                <img src="../image/foto.png" alt="Hero Section" />
            </div>
        </section>
    );


}