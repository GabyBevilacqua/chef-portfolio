
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    console.log("Hero useEffect executed");
    // gsap.from(heroRef.current, { opacity: 0, y: 50, duration: 1.2 });
    // gsap.from(textRef.current, { opacity: 0, x: -100, duration: 1.5, delay: 0.5 });
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero">
      <div className="hero-content">
        <h1 ref={textRef} className="hero-title">Bienvenidos a mi cocina</h1>
        <p className="hero-subtitle">Explora mis recetas y libros</p>
      </div>
    </section>
  );
};

export default Hero;
