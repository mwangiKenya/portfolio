import { HashRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Hire from "./Hire"
import Skills from "./Skills"
import Projects from "./Projects"

function App() {
    return (
    <>
      <HashRouter>
        <div className="my-main-top-div">
          <div className="my-header-div">
            <h1> Collins Mwangi</h1>
            
          </div>
          
            <nav className="my-nav-section">
              <NavLink to = '/' className="my-nav-link "> Home </NavLink>
              <NavLink to = '/About' className="my-nav-link "> About me </NavLink>
              <NavLink to = '/Skills' className="my-nav-link "> Skills </NavLink>
              <NavLink to = '/Projects' className="my-nav-link"> Projects </NavLink>
              <NavLink to = '/Hire' className="my-nav-link"> Contact me </NavLink>
            </nav>
        </div>

        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/About" element = {<About/>}/>
          <Route path="/Hire" element = {<Hire/>}/>
          <Route path="/Skills" element = {<Skills/>}/>
          <Route path="/Projects" element = {<Projects/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}


export default App
