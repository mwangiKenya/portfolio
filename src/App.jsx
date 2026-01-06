import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Hire from "./Hire";
import Skills from "./Skills";
import Projects from "./Projects";
import "./App.css"; // Ensure your CSS is imported

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <HashRouter>
        {/* 🔝 Fixed Top Section */}
        <div className="my-main-top-div">
          <div className="my-header-div">
            <h1 className="my-header-name">Collins Mwangi</h1>
          </div>

          {/* 🧭 Navigation Section */}
          <nav className="my-nav-section">
            <div className="nav-container">
              {/* 🍔 Hamburger Icon */}
              <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              </div>

              {/* 🔗 Navigation Links */}
              <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <NavLink to="/" className="my-nav-link" onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink to="/About" className="my-nav-link" onClick={closeMenu}>
                  About me
                </NavLink>
                <NavLink to="/Skills" className="my-nav-link" onClick={closeMenu}>
                  Skills
                </NavLink>
                <NavLink to="/Projects" className="my-nav-link" onClick={closeMenu}>
                  Projects
                </NavLink>
                <NavLink to="/Hire" className="my-nav-link" onClick={closeMenu}>
                  Contact me
                </NavLink>
                <h1> Collins Mwangi </h1>
              </div>
              
            </div>
          </nav>
          <h1 className="my-name-point"> Collins Mwangi </h1>
        </div>

        {/* 🧩 Route Components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
