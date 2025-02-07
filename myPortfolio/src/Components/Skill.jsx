import './Skill.css';
export default function Skill() {
    return(
        <>
        <section className="skill">
            <p>Skills</p>
            <div className="skill-left">
                <h3>Front-end</h3>
                <p>
                    I am proficient in HTML, CSS, and JavaScript. I have experience using React.js and Bootstrap to create responsive and user-friendly web applications.
                </p>
            </div>
            <div className="skill-left">
                <h3>Back-end</h3>
                <p>
                    I have experience using Node.js and Express.js to create server-side applications. I am also familiar with RESTful APIs and databases such as MongoDB.
                </p>
            </div>
            <div className="skill-left">
                <h3>Database</h3>
                <p>
                    I have experience working with databases such as MongoDB and MySQL. I am proficient in writing queries and creating schemas to store and retrieve data.
                </p>
            </div>
        </section>
        <br /><br /><br /><br /><br />
        <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 My Portfolio. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </footer>
        </>
    )
}