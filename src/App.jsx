import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Books from './components/Books'
import Contact from './components/Contact'
import "./styles/global.css";
import "./styles/Books.css";




function App() {
  const [count, setCount] = useState(0)



  return (
    <>
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

    </>
  )
}

export default App

