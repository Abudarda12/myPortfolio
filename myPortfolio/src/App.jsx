import Nav from "./Components/nav"
import Main from "./Components/Main"
import About from "./Components/about"
import Skill from "./Components/Skill"
import Project from "./Components/project"
import './App.css';
function App() {
 

  return (
    <>
    <div className="page">
    <Nav />
   
      <Main />
      <About />
      
      <Project />
      <Skill />

    </div>
    
    </>
  )
}

export default App
