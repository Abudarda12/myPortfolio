import './main.css';
export default function Main() {
    return (<>
      <main className='main'>
        <section className='left'>
            <h3>Hi! I'm</h3>
            <h1 >Abudarda Ansari</h1>
            <h3>Full Stack Developer</h3>
            <p>
            I am a Full Stack Developer with a passion for creating user-friendly web applications.
              I am proficient in both front-end and back-end technologies, <br /> 
             and I am always looking to learn new things.
            </p>
            <a href="#form">
                <button>Hire Me!</button>
            </a>
            <br />
                <p>Find me on</p>
                <div className="social-icons">
                    <a href="https://github.com/Abudarda12" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/abudarda-a-8235a924b/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    {/* Add more social icons as needed */}
                </div>
       </section>
       <section className='right'>
        <div className='image-front'>
               <img src='src\Components\abudarda.jpeg' alt='Abudarda Ansari' />
        </div>
        
       </section>
      
      </main>
      
    </>
     
    )               
}