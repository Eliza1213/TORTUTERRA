import React from "react";
import '../styles/Boton.css'

const Boton= ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button className={`registro-btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Boton;

