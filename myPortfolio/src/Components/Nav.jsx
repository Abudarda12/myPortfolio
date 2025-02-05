import React, {useState} from 'react';
import './Nav.css';
export default function Nav(){
    let[active,setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }

    return (
        <nav className="nav">
            <h1>My Portfolio</h1>
            <div className={"nav-links" + (active ? " active" : "")}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <div className="resume">
                     <a href="/abudarda.pdf" download>
                     <button>Download CV</button>
                     </a>
                </div>
                
            </div>
            <button className="nav__toggle" aria-label="Toggle navigation" onClick={handleClick}>
                &#9776;
            </button>
        </nav>
    )
}