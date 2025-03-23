import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Books.css";

const books = [
  {
    title: "Delicias Gourmet",
    description: "Un libro lleno de recetas exclusivas y secretos culinarios.",
    image: "https://picsum.photos/id/75/200",
    link: "https://tuweb.com/compra-libro1",
  },
  {
    title: "Cocina Creativa",
    description: "Explora nuevas técnicas y reinventa platos clásicos.",
    image: "https://picsum.photos/id/113/200",
    link: "https://tuweb.com/compra-libro2",
  },
];

const Books = () => {
  const booksRef = useRef(null);

  useEffect(() => {
   // gsap.from(booksRef.current, { opacity: 0, y: 50, duration: 1.2 });
  }, []);

  return (
    <section ref={booksRef} id="books" className="books">
      <h2 className="books-title">Libros Digitales</h2>
      <div className="books-container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="buy-button">
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
