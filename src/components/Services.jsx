import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Services.css";

import RollingGallery from "./RollingGallery";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.from(servicesRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
                toggleActions: "play none none none", // Reproduce la animación una vez
            }
        });
        gsap.from(textRef.current, {
            opacity: 0,
            x: -100,
            duration: 1.5,
            delay: 0.3,
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        gsap.from(imageRef.current, {
            opacity: 0,
            x: 100,
            duration: 1.5,
            delay: 0.5,
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

    });

    return (

        <section ref={servicesRef} id="services" className="services">
            <div className="services-content">
                <div ref={textRef} className="services-text">
                    <h2 className="services-title playfair-text">
                        Serviços Personalizados de Gastronomia
                    </h2>
                    <h3 className="services-subtitle playfair-text">
                        Cozinha Sob Medida para Seus Momentos Especiais
                    </h3>
                    <p className="services-description">
                        Ofereço experiências gastronômicas únicas, adaptadas ao seu paladar e ocasião.
                        Seja um jantar íntimo, um evento corporativo ou uma celebração inesquecível,
                        trago criatividade, técnica e toque profissional diretamente para sua mesa.
                    </p>
                    <h3 className="services-subtitle playfair-text">
                        Como posso te servir?
                    </h3>
                    <h3 className="services-subtitle playfair-text">
                        Pratos & Preparações por Encomenda
                    </h3>
                    <ul className="services-list">
                        <li>Petiscos gourmet (pasapalos) para happy hours ou coquetéis.</li>
                        <li>Pratos elaborados (entradas, principais e sobremesas) com ingredientes selecionados.</li>
                        <li>Cardápios personalizados (tradicional, contemporâneo, vegano ou com fusões criativas).</li>
                    </ul>
                    <h3 className="services-subtitle playfair-text">
                        Serviço de Catering Completo
                    </h3>
                    <ul className="services-list">
                        <li>Buffets all inclusive (montagem, equipe e logística) para eventos de qualquer porte.</li>
                        <li>Temas especiais: gastronomia brasileira, internacional ou sob medida.</li>
                    </ul>
                    <h3 className="services-subtitle playfair-text">
                        Chef a Domicílio
                    </h3>
                    <ul className="services-list">
                        <li>Cozinho na sua casa com todo o equipamento necessário, desde jantares românticos até festas familiares.</li>
                        <li>Aulas de culinária personalizadas (aprenda a preparar pratos exclusivos!).</li>
                    </ul>
                    <h2 className="services-title playfair-text">
                        Por que escolher meu trabalho?
                    </h2>
                    <ul className="services-list">
                        <li>Formação técnica (engenharia + gastronomia): precisão e criatividade em cada detalhe.</li>
                        <li>Dedicação artesanal: desde a seleção dos ingredientes até a apresentação final.</li>
                        <li>Flexibilidade total: adapto-me a dietas, restrições e sonhos gastronômicos.</li>
                    </ul>
                    <p className="services-description">
                        Vamos transformar sua ideia em sabores memoráveis? Entre em contato para orçamentos e propostas!
                    </p>
                </div>
                <div ref={imageRef} className="services-image">
                    <img
                        src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248128/ga012_qxjeq7.webp"
                        alt="Serviços"
                    />
                </div>
            </div>

        </section>

    );
}

export default Services;
