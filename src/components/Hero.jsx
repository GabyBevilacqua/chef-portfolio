
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import "../styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const instagramRef = useRef(null);
    const facebookRef = useRef(null);

    useGSAP(() => {
        console.log("Hero executed");
        gsap.from(heroRef.current, { opacity: 0, y: 50, duration: 1.2 });
        gsap.from(textRef.current, { opacity: 0, x: -100, duration: 1.5, delay: 0.5 });

        gsap.to(instagramRef.current, {
            rotation: 360,
            duration: 3,
            repeat: -1,  // Rotación infinita
            ease: "linear", // Hace que la animación sea fluida
        });

        gsap.to(facebookRef.current, {
            rotation: -360, // Rotación en sentido contrario
            duration: 3,
            repeat: -1, 
            ease: "linear",
        });
    });

    return (
        <section ref={heroRef} id="hero" className="hero">
            <div className="hero-content">
                <h1 ref={textRef} className="hero-title">Gabriela B. Franchi</h1>
                <p className="hero-subtitle">Portafolio y libros</p>

                <div className="social-icons">
                    <a href="https://www.instagram.com/gabriela.bfranchi/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram ref={instagramRef} className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/B.Franchi.Catering" target="_blank" rel="noopener noreferrer">
                        <FaFacebook ref={facebookRef} className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
