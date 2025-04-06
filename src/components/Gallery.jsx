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
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248137/ga018_mk6nqx.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248135/ga017_ucptpm.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248134/ga016_pyfc2l.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248132/ga015_gfcmyg.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248131/ga014_eqgz26.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248129/ga013_ndikjh.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248128/ga012_qxjeq7.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248126/ga011_hvhsop.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248125/ga010_gthgbt.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248114/ga002_r6plpp.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248113/ga001_gnuvrj.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248114/ga003_rmc855.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248116/ga004_xyijsu.webp"
    
];

const Gallery = () => {
    const gallery1Ref = useRef(null);

    useGSAP(() => {
        gsap.from(gallery1Ref.current, {
            opacity: 0,
            y: 50,
            duration: 2,
            scrollTrigger: {
                trigger: gallery1Ref.current,
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
        <section id="gallery1" className="gallery1">
            <div ref={gallery1Ref} className="gallery1-content">               
                <Slider {...settings} className="gallery1-container">
                    {images.map((src, index) => (
                        <div key={index} className="gallery1-item">
                            <img src={src} alt={`Plato ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Gallery;
