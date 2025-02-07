import './project.css';
export default function Project(){
    return(
        <>
        <div className="project">
        <div className="project-header">
            <h3>Projects</h3>
        </div>
        <section className="project-container">
     
            <div className="project-box">
                <h3>Project 1</h3>
                <p>
                    This is a project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam sit amet nisi condimentum, suscipit turpis id, ultricies nunc. 
                    Donec nec enim id sem tincidunt ultricies.
                </p>
            </div>  
            <div className="project-box">
                <h3>Project 2</h3>
                <p>
                    This is a project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam sit amet nisi condimentum, suscipit turpis id, ultricies nunc. 
                    Donec nec enim id sem tincidunt ultricies.
                </p>        
            </div>  
            <div className="project-box">
                <h3>Project 3</h3>
                <p>
                    This is a project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam sit amet nisi condimentum, suscipit turpis id, ultricies nunc. 
                    Donec nec enim id sem tincidunt ultricies.
                </p>
            </div>  
        </section>
        </div>
        
        </>
    )
}