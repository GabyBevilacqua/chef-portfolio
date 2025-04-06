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
                            Olá! Sou Gabriela B. Franchi, chef profissional com formação em Engenharia Mecânica. Ao longo
                            da minha carreira, desenvolvi habilidades para resolução de problemas, liderança de
                            equipes e gestão eficiente na cozinha, sempre buscando a excelência em cada prato que
                            preparo.
                        </p>
                        <p>
                            Atualmente, trabalho como chef em Campinas, São Paulo, onde ofereço serviços de catering
                            para casamentos e eventos. Além disso, a confeitaria e os doces são uma das minhas grandes
                            paixões, o que me permitiu criar propostas inovadoras e cheias de sabor.
                        </p>
                        <p>
                            Adoro compartilhar receitas que combinam tradição e um toque de criatividade, como o
                            Pastel de Chuchu e preparações com vegetais que surpreendem pelo sabor e versatilidade.
                            Para mim, a cozinha vai além de uma profissão: é uma forma de me conectar com as pessoas
                            através da comida.
                        </p>
                        <p>
                            Se quiser conhecer mais sobre o meu trabalho, te convido a me seguir nas redes
                            sociais e descobrir minhas últimas criações. Será um prazer dividir essa paixão com você!
                        </p>
                        <p>
                            Além de cozinhar, já escrevi dois livros de receitas que refletem meu amor pela
                            gastronomia e a arte de cozinhar com a alma.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
