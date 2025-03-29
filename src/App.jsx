import { useState, useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import './App.css'
import Spinner from "./components/Spinner";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Books from './components/Books'
import Contact from './components/Contact'
import "./styles/global.css";
import "./styles/Books.css";
import "./styles/Spinner.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el spinner

  useEffect(() => {
    // Simula un retraso en la carga (puedes reemplazar esto con lógica real)
    const timer = setTimeout(() => {
      setIsLoading(false); // Oculta el spinner después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner /> // Muestra el spinner mientras isLoading es true
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Gallery />
          <div className="books-background">
            <div className="books-overlay">
              <Books />
            </div>
          </div>
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;

