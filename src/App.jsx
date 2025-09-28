import { HashRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"

function App() {
    return (
    <>
      <HashRouter>
        <div className="my-main-top-div">
          <div className="my-header-div">
            <h1> My Portfolio </h1>
          </div>
          
            <nav className="my-nav-section">
              <Link to = '/' className="my-nav-link"> Home </Link>
              <Link to = '/About' className="my-nav-link"> About me </Link>
              <Link to = '/Skills' className="my-nav-link"> Skills </Link>
              <Link to = '/Projects' className="my-nav-link"> Projects </Link>
              <Link to = '/Contact' className="my-nav-link"> Contact me </Link>
            </nav>
            <h1 className="my-header-name"> Mwangi Collins </h1>
        </div>

        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}


export default App
