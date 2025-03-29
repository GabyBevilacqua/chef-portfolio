import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Books.css";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const books = [
    {
        title: "Recetas de Navidad Venezolanas",
        description: "Una recopilación de recetas que nos transportan a nuestras cenas familiares, evocando el sabor del hogar sin importar la distancia. Es un regalo para quienes están lejos, pero desean revivir la calidez y felicidad de estas celebraciones.",
        image: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248141/portadalibro001_sqkyip.webp",
        link: "https://www.paypal.com/es/home",
    },
    {
        title: "Cocina Creativa",
        description: "Explora nuevas técnicas y reinventa platos clásicos.",
        image: "https://picsum.photos/id/113/200",
        link: "https://www.paypal.com/es/home",
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
            <h2 className="books-title">Libros Digitales</h2>
            <div className="books-container ">
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                            <a 
                            href={book.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="buy-button"
                            >
                                Comprar
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Books;
