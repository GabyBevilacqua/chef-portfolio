import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Gallery.css";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://picsum.photos/id/24/500",
    "https://picsum.photos/id/19/500",
    "https://picsum.photos/id/23/500",
    "https://picsum.photos/id/30/500",
    "https://picsum.photos/id/35/500",
    "https://picsum.photos/id/42/500",
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
            },
        });
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Activa el deslizamiento automático
        autoplaySpeed: 4000, // Velocidad del deslizamiento automático (3 segundos)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="gallery" className="gallery">
            <div ref={galleryRef} className="gallery-content">
                <h2 className="gallery-title">Galería de Platos</h2>
                <Slider {...settings} className="gallery-container">
                    {images.map((src, index) => (
                        <div key={index} className="gallery-item">
                            <img src={src} alt={`Plato ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Gallery;
