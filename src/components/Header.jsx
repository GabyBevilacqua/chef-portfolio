
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <h1 className="logo">Chef Portfolio</h1>
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="books" smooth={true} duration={500}>
              Mis Libros
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
