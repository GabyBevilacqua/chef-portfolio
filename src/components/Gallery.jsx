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
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991450/gabyBFranchi/servicios/fal7xa8nw4zh6s8ak57z.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991450/gabyBFranchi/servicios/djfxzpqczkttrc8qdlcf.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991450/gabyBFranchi/servicios/zrovddsdnad4znjbfeam.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991450/gabyBFranchi/servicios/pmzv0melhdib8sskcsie.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/wbueju3nlpa8xy8lbzwp.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/dpk5awmqlk9qf9pjcb1z.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/wfmlpjpdppkikj8n4gnm.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/yghjmyntxchmwrjap1ra.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/fl9dvjum7vzyhqofqies.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/cshh0etttt6nuaw3ycwl.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991449/gabyBFranchi/servicios/ae0lah4v7oulp8jd9lqh.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/cjzm8xbmp3saqdf7dokc.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/aytixyy9ls4xibr10687.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/pogieqpaevucet6tzdok.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/msh67ajitgvfnwsgiisn.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/svxdrvxhmr6so2fw5dt8.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/plb1jhnzscsrcqetiigk.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/x2aijla8tssx1sqxgizg.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991448/gabyBFranchi/servicios/ujwwzo94woa9nl87yka5.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1744991447/gabyBFranchi/servicios/bizt588piou0fecancss.webp"
    
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
        dots: false,
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
            <h2 className="gallery1-title playfair-text">Galeria de Serviços</h2>
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
