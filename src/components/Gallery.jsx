import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Gallery.css";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://picsum.photos/id/24/200",
    "https://picsum.photos/id/19/200",
    "https://picsum.photos/id/23/200",
    "https://picsum.photos/id/30/200",
    "https://picsum.photos/id/35/200",
    "https://picsum.photos/id/42/200",
];

const Gallery = () => {
    const galleryRef = useRef(null);

    useGSAP(() => {
        gsap.from(galleryRef.current, { 
            opacity: 0, 
            y: 50, 
            duration: 2,
            scrollTrigger: {
                trigger: galleryRef.current,
                start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
                toggleActions: "play none none none", // Reproduce la animación una vez
            } 
        });
    });

    return (
        <section ref={galleryRef} id="gallery" className="gallery">
            <h2 className="gallery-title">Galería de Platos</h2>
            <div className="gallery-container">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Plato ${index + 1}`}  />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
