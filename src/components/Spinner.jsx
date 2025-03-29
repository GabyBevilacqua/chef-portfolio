import React from "react";
import "../styles/Spinner.css"; // Asegúrate de crear este archivo para los estilos del spinner

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;