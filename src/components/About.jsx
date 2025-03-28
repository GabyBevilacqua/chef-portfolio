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
        <section id="about" className="about">
            <div ref={aboutRef} className="about-content">
                <div className="about-container">
                    <div ref={imageRef} className="about-image">
                        <img src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1743193213/fotogabypeq_w13psm.jpg" alt="Chef" />
                    </div>
                    <div ref={textRef} className="about-text">
                        <h2>Bio</h2>
                        <p>
                            ¡Hola! Soy Gabriela B. Franchi, chef profesional con formación en Ingeniería Mecánica. A lo largo de mi carrera, 
                            he desarrollado habilidades para la resolución de problemas, liderazgo de equipos y gestión eficiente en la cocina, 
                            siempre buscando la excelencia en cada plato que preparo. <br />

                            Actualmente, trabajo como chef en Campinas, São Paulo, donde ofrezco servicios de 
                            catering para bodas y eventos. Además, la repostería y los dulces son una de mis 
                            grandes pasiones, lo que me ha permitido crear propuestas innovadoras y llenas de sabor.<br />

                            Me encanta compartir recetas que combinan tradición y un toque de creatividad, 
                            como el Pastel de Chucho y preparaciones con vegetales que sorprenden por su sabor 
                            y versatilidad. Para mí, la cocina es más que una profesión: es una forma de conectar 
                            con las personas a través de la comida.<br />

                            Si quieres conocer más sobre mi trabajo, te invito a seguirme en mis redes sociales 
                            y descubrir mis últimas creaciones. ¡Será un placer compartir mi pasión contigo!
                        </p>
                        <p>
                            Además de cocinar, he escrito dos libros de recetas que reflejan mi amor por la 
                            gastronomía y el arte de cocinar con el alma.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
