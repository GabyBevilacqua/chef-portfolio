import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Books.css";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const books = [
    {
        title: "Receitas de Natal Venezuelanas",
        description: "Uma seleção de receitas que nos transportam para os jantares em família, trazendo o sabor do lar, não importa a distância. Este é um presente para quem está longe, mas deseja reviver o calor e a alegria dessas celebrações.",
        image: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248141/portadalibro001_sqkyip.webp",
        link: "https://www.amazon.com.br",
    },
    {
        title: "Cozinha Criativa",
        description: "Descubra novas formas de cozinhar com técnicas inovadoras que despertam a curiosidade e desafiam o paladar. Reinvente receitas clássicas com criatividade e paixão, explorando combinações inesperadas e ingredientes versáteis.",
        image: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248123/ga009_j76qzy.webp",
        link: "https://www.amazon.com.br",
    },
];

const Books = () => {
    const booksRef = useRef(null);

    useGSAP(() => {
        gsap.from(booksRef.current, { 
            opacity: 0, 
            y: 50, 
            duration: 1.2,
            scrollTrigger: {
                trigger: booksRef.current,
                start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
                toggleActions: "play none none none", // Reproduce la animación una vez
            } 
        });
    });

    return (
        <section ref={booksRef} id="books" className="books">
            <div className="books-container ">
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <h3 className="playfair-text">{book.title}</h3>
                            <p>{book.description}</p>
                            <a 
                            href={book.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="buy-button"
                            >
                                Próximamente
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Books;
