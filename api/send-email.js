import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Configurado en las variables de entorno de Vercel
            pass: process.env.EMAIL_PASS, // Configurado en las variables de entorno de Vercel
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Correo enviado:", info.response);
        return res.status(200).json({ message: "Correo enviado con éxito 🚀" });
    } catch (error) {
        console.error("Error al enviar correo:", error);
        return res.status(500).json({ error: `Error al enviar el mensaje: ${error.message}` });
    }
}