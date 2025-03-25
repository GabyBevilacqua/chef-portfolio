import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        // Animación del contenedor al entrar en pantalla
        gsap.from(aboutRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
                toggleActions: "play none none none", // Reproduce la animación una vez
            }
        });

        // Animación de la imagen
        gsap.from(imageRef.current, {
            opacity: 0,
            x: -100,
            duration: 1.5,
            delay: 0.3,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        // Animación del texto
        gsap.from(textRef.current, {
            opacity: 0,
            x: 100,
            duration: 1.5,
            delay: 0.5,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });
    }, []);

    return (
        <section ref={aboutRef} id="about" className="about">
            <div className="about-container">
                <div ref={imageRef} className="about-image">
                    <img src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742662490/chef-profile_mk5dba.jpg" alt="Chef" />
                </div>
                <div ref={textRef} className="about-text">
                    <h2>Bio</h2>
                    <p>
                        Soy una chef apasionada por la cocina y la creatividad en cada plato. Con años de experiencia, he desarrollado
                        un enfoque único que combina tradición e innovación. Mis recetas buscan inspirar y deleitar a quienes las prueban.
                    </p>
                    <p>
                        Además de cocinar, he escrito dos libros de recetas que reflejan mi amor por la gastronomía y el arte de cocinar con el alma.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
