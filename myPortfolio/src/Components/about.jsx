import './about.css';
export default function About(){
    return(
        <>
        
        <div className='container'>
        <section className="a-left">
            <p>About Me</p>
            <h1>Why you hire me for <br />for your next project?</h1>
            <p>
                I am a Full Stack Developer with a passion for creating <br /> user-friendly web applications.
                I am proficient in both <br />front-end and back-end technologies, <br />
                and I am always looking to learn new things.
            </p>
            <a href="#form">
                <button>Hire Me!</button>
            </a>
        </section>
        <section className="a-right">
            <div className="front-end">
                <h3>Front-end</h3>
                lorem ipsum dolor sit amet,  consectetur adipiscing elit.
            </div>
            <div className="back-end">
                <h3>Back-end</h3>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="database">
                <h3>Database</h3>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </section>

        </div>
       
        </>
    )
}