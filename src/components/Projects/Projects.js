import data from "../../data/index.json";
import './Projects.css'


export default function Projects() {
    return (
        <section className="portfolio-section" id="projects">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <h2 className="section-heading">My Recent Projects</h2>
                </div>
                <div>
                    <button className="btn btn-github">
                        <a href="https://github.com/MaruSmurf" >
                      <img src="../image/github.png" alt="logo-github" widht={40} height={40}></img>
                      Visit My GitHub</a>
                    </button>
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio-section-card">

                        <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <p className="text-sm portfolio-link">
                                <a href="https://github.com/MaruSmurf" >{item.link}</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}