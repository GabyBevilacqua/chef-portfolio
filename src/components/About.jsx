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
      },
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
      },
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
      },
    });
  }, []);

  return (
    <section id="about" className="about">
      <div ref={aboutRef} className="about-content">
        <div className="about-container">
          <div ref={imageRef} className="about-image">
            <img
              src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1743193213/fotogabypeq_w13psm.jpg"
              alt="Chef"
            />
          </div>
          <div ref={textRef} className="about-text">
            <h2>Sobre mim</h2>
            <p>
              A cozinha sempre foi meu refúgio, meu ponto de reencontro comigo
              mesma. Desde pequena, me fascinava ver como o fogo mudava as
              texturas, como os temperos contavam histórias e como um prato bem
              feito podia abraçar a alma de alguém, mesmo num dia difícil.
            </p>
            <p>
              Nunca planejei viver disso. Achei que seria só um hobby, uma
              distração. Mas a verdade é que em nenhum outro lugar eu me sinto
              tão eu quanto na cozinha. Ela me ensinou sobre resiliência, sobre
              começar de novo, sobre errar, rir de si mesma e ter coragem pra
              tentar de novo, sempre.
            </p>
            <p>
              A vida me desafiou a colocar minha história numa mala e recomeçar
              longe de tudo o que eu conhecia. Descobri que ninguém ensina a se
              reconstruir, mas que todo dia é uma oportunidade silenciosa de
              escolher seguir em frente, mesmo quando parece mais fácil
              desistir.
            </p>
            <p>
              Foi na cozinha que reencontrei meu propósito. Aprendi que não se
              trata só de receitas ou técnicas — mas de tocar pessoas, de
              inspirar, de lembrar a mim e aos outros que, por mais difícil que
              o caminho pareça, a vida sempre guarda espaço pra um novo começo.
            </p>
            <p>
              Hoje, meu propósito é simples: viver com verdade, me desafiar
              todos os dias e usar minha paixão pela comida pra espalhar alegria
              e coragem. Porque no fim, a gente não precisa de uma vida perfeita
              — só de um motivo pra continuar e de pessoas certas ao nosso lado.
            </p>
            <p>
              E se for pra viver, que seja intenso. Se for pra tentar, que seja
              com coragem. E se for pra sonhar… que seja grande.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
