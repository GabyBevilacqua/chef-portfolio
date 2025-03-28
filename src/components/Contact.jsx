import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Contact.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useGSAP(() => {
        gsap.from(contactRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
                toggleActions: "play none none none", // Reproduce la animación una vez
            }
        });
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Mensaje enviado con éxito 🚀");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error de conexión con el servidor.");
        }
    };


    return (
        <section id="contact" className="contact">
            <div ref={contactRef} className="contact-content">
                <h2 className="contact-title">Contacto</h2>
                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Tu Mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="contact-button">Enviar</button>
                    </form>

                    <div className="contact-socials">
                        <a href="https://www.instagram.com/gabriela.bfranchi/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://www.facebook.com/B.Franchi.Catering" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
