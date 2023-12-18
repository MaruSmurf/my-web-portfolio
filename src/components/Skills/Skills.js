import './Skills.css'
import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="skills-section" id="skills">
            <div className="portfolio-container">
                <p className="section-title">My Skills</p>
                <span className="skills-section-title">
                    <li>Create a responsive website using
                        HTML to structure content, CSS to handle
                        visual style, and JavaScript to develop interactive
                        experiences
                    </li>
                    <li>
                        Use React in relation to Javascript libraries
                        and frameworks.
                    </li>
                    <li>
                        Use Bootstrap CSS Framework to create webpages and work
                        with GitHub repositories and version control.
                    </li>
                </span>
            </div>
            <div className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills-section-card">
                        <div className="skills-section-img">
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills-section-card-content">
                            <h3 className="skills-section-title">{item.title}</h3>

                        </div>
                    </div>
                ))}
            </div>
            <div className="skills-edu">
            <h2 className="skills-section-heading">Education</h2>

                <img src="../image/certif.png" width={400} height={300}></img>
                < a href="https://marusmurf.github.io/cvmar/">
                    <button className="btn btn-primary">More information in czech language</button>
                </a>

        </div>
        </section>
    );
}