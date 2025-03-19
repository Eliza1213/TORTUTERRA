import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarContactos = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const fetchContactos = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/contactos");
        const data = await response.json();
        setContactos(data);
      } catch (error) {
        console.error("Error al obtener los contactos:", error);
      }
    };

    fetchContactos();
  }, []);

  // Función para eliminar un contacto con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este contacto?"
    );

    if (confirmacion) {
      try {
        const response = await fetch(`http://localhost:4000/api/contactos/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Actualiza la lista de contactos después de eliminar
          setContactos(contactos.filter((contacto) => contacto._id !== id));
        } else {
          alert("Error al eliminar el contacto");
        }
      } catch (error) {
        console.error("Error al eliminar el contacto:", error);
      }
    }
  };

  return (
    <div className="contactos-container">
      {/* Encabezado */}
      <h2>Contactos</h2>
      
      {/* Tabla de contactos */}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.length > 0 ? (
            contactos.map((contacto) => (
              <tr key={contacto._id}>
                <td>{contacto.email}</td>
                <td>{contacto.telefono}</td>
                <td>{contacto.ubicacion}</td>
                <td>
                  <Link 
                    to={`/contactosAdmin/actualizar/${contacto._id}`} 
                    className="btn"
                  >
                    Actualizar
                  </Link>
                  <button
                    onClick={() => handleEliminar(contacto._id)}
                    className="btn"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay contactos disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarContactos;
