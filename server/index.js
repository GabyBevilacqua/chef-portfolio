// require("dotenv").config();
// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Cargado ✅" : "No cargado ❌");

// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Configurar Nodemailer
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// // Ruta para recibir los mensajes del formulario
// app.post("/send-email", async (req, res) => {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({ error: "Todos los campos son obligatorios" });
//     }

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_USER,
//         subject: `Nuevo mensaje de ${name}`,
//         text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log("Correo enviado:", info.response);
//         res.status(200).json({ message: "Correo enviado con éxito 🚀" });
//     } catch (error) {
//         console.error("Error al enviar correo:", error);
//         res.status(500).json({ error: `Error al enviar el mensaje: ${error.message}` });
//     }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// app.get("/", (req, res) => {
//     res.send("¡Servidor funcionando correctamente! 🚀");
// });