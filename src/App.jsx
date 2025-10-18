import { HashRouter, Routes, Route, Link } from "react-router-dom"
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
              <Link to = '/' className="my-nav-link"> Home </Link>
              <Link to = '/About' className="my-nav-link"> About me </Link>
              <Link to = '/Skills' className="my-nav-link"> Skills </Link>
              <Link to = '/Projects' className="my-nav-link"> Projects </Link>
              <Link to = '/Hire' className="my-nav-link"> Contact me </Link>
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
