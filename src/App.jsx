import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Hire from "./Hire";
import Skills from "./Skills";
import Projects from "./Projects";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HashRouter>
      <header className="my-main-top-div">
        <div className="my-header-div">
          <h1 className="my-header-name">Collins Mwangi</h1>
        </div>

        <nav className="my-nav-section">
          <div className="nav-container">
            <button
              className="hamburger"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            </button>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <NavLink to="/" className="my-nav-link" onClick={closeMenu} end>
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
            </div>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;