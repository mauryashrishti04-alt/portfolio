import "./About.css";
function About(){
    return(
        <section className="section about" id="about">
            <div className="conatiner about-inner">
                <div className="about-main">
                 <h2 className="section-title">About me</h2>
                 <p className="about-text">
                    I'm a final-year BCA student at SHEAT College of Engineering,Varanasi.I enjoy turning
                    ideas into working websites,and I've spent the last year building projects 
                    with the MERN Stack.
                 </p>
                 <a href="#"className="btn btn-primary" target="_blank" rel="noreferer">
                    Download resume
                 </a>
                </div>
                <ul className="about-facts">
                    <li>
                        <span className="fact-label">Location</span>
                        <span>Varanasi,India</span>
                    </li>
                    <li>
                        <span className="fact-label">Email</span>
                        <a href="mailto:mauryashrishti04@gmail.com">mauryashrishti04@gmail.com</a>
                    </li>
                    <li>
                        <span className="fact-label">GitHub</span>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                        github.com/mauryashrisht04-alt
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default About;