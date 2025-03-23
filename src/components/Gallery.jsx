import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Gallery.css";

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

  useEffect(() => {
 //   gsap.from(galleryRef.current, { opacity: 0, y: 50, duration: 1.2 });
  }, []);

  return (
    <section ref={galleryRef} id="gallery" className="gallery">
      <h2 className="gallery-title">Galería de Platos</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Plato ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
