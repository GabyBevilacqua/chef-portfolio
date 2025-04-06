import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "../styles/RollingGallery.css";

const IMGS = [
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248137/ga018_mk6nqx.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248135/ga017_ucptpm.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248134/ga016_pyfc2l.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248132/ga015_gfcmyg.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248131/ga014_eqgz26.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248129/ga013_ndikjh.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248128/ga012_qxjeq7.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248126/ga011_hvhsop.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248125/ga010_gthgbt.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248114/ga002_r6plpp.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248113/ga001_gnuvrj.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248114/ga003_rmc855.webp",
    "https://res.cloudinary.com/dzqgni1qi/image/upload/v1743248116/ga004_xyijsu.webp"
];

const RollingGallery = ({ autoplay = false, pauseOnHover = true, images = [] }) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.8; // Increased width for items
  const dragFactor = 0.01;
  const radius = cylinderWidth / (1.5 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  // Autoplay effect with adjusted timing
  /* useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]); */

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 0.5, // Reduce el ángulo gradualmente
          transition: { duration: 0.1, ease: "linear" }, // Animación continua y suave
        });
        rotation.set(rotation.get() - 0.2); // Actualiza el valor de rotación
      }, 20); // Intervalo corto para una animación fluida
  
      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause on hover with smooth transition
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop(); // Stop the animation smoothly
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2000);
    }
  };
/*
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 1,
          transition: { duration: 0.02, ease: "linear" },
        });
        rotation.set(rotation.get() - 1);
      }, 20);
    }
  };*/

  return (
    <div id="gallery" className="gallery-container">
        <h2 className="gallery-title">Galeria</h2>     
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt="gallery" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
