import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <h1 className="logo">Gabriela B. Franchi</h1>

        {/* Botón de menú hamburguesa */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Enlaces de navegación */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="hero" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                Bio
              </Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                Galería
              </Link>
            </li>
            <li>
              <Link to="books" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                Libros
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
