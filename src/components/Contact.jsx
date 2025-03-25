import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Contact.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useGSAP(() => {
        gsap.from(contactRef.current, { opacity: 0, y: 50, duration: 1.2 });
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
        <section ref={contactRef} id="contact" className="contact">
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
                    <a href="https://facebook.com/tu_cuenta" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
