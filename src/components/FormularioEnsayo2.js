import React, { useState } from "react";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function FormularioEnsayo() {
    const [formData, setFormData] = useState({
        categoria: "",
        nombre: "",
        texto: "",
        puntuacion: "",
        retroalimentacion: "",
        formato: "",
        tamano: "",
        permitir: "",
        informacion: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Realiza la validación de los campos aquí
        const { categoria, nombre, texto, puntuacion, retroalimentacion, formato, tamano, permitir, informacion } = formData;
      
        // Ejemplo de validación simple
        if (!categoria || !nombre || !texto || !puntuacion || !retroalimentacion || !formato || !tamano || !permitir || !informacion) {
          alert("Por favor, completa todos los campos del formulario.");
          return;
        }
      
        // Si todos los campos están completos, puedes enviar los datos al servidor o realizar cualquier otra acción necesaria aquí
        // Ejemplo de envío de datos a un servidor (usando fetch, axios u otra biblioteca)
        try {
          const response = await fetch('http://localhost:8080/api/ensayo/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Aquí debes enviar los datos del formulario en el formato adecuado
          });
      
          if (response.ok) {
            // La solicitud fue exitosa, puedes mostrar un mensaje de éxito o redirigir a otra página
            alert("El formulario se ha enviado con éxito.");
            // Redirigir al usuario a otra página
            window.location.href = '/';
          } else {
            // La solicitud falló, puedes manejar el error de acuerdo a tus necesidades
            alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
          }
        } catch (error) {
          // Manejo de errores en caso de que ocurra una excepción
          console.error("Error al enviar el formulario:", error);
          alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
        }
      };
      

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="categoria" className="col-form-label">Categoría</label>
                </div>
                <div className="col-md-8">
                    <select
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className="inputCategoria"
                        required
                    >
                        <option value="">Selecciona una categoría</option>
                        <option value="1">Categoría 1</option>
                        <option value="2">Categoría 2</option>
                        <option value="3">Categoría 3</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="nombre" className="col-form-label">Nombre de la pregunta</label>
                </div>
                <div className="col-md-8">
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Mínimo 5 caracteres"
                        required
                        minLength="5"
                        maxLength="50"
                    />
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="texto" className="col-form-label">Texto de la pregunta</label>
                </div>
                <div className="col-md-8">
                    <input
                        type="text"
                        id="texto"
                        name="texto"
                        value={formData.texto}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Mínimo 5 caracteres"
                        required
                        minLength="5"
                        maxLength="50"
                    />
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="puntuacion" className="col-form-label">Puntuación</label>
                </div>
                <div className="col-md-8">
                    <input
                        type="text"
                        id="puntuacion"
                        name="puntuacion"
                        value={formData.puntuacion}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Puntuación"
                        required
                        minLength="1"
                        maxLength="7"
                    />
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="retroalimentacion" className="col-form-label">Retroalimentación general</label>
                </div>
                <div className="col-md-8">
                    <input
                        type="text"
                        id="retroalimentacion"
                        name="retroalimentacion"
                        value={formData.retroalimentacion}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Retroalimentación general"
                        required
                        minLength="5"
                        maxLength="50"
                    />
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="formato" className="col-form-label">Formato de respuesta</label>
                </div>
                <div className="col-md-8">
                    <select
                        id="formato"
                        name="formato"
                        value={formData.formato}
                        onChange={handleChange}
                        className="inputFormato"
                        required
                    >
                        <option value="">Selecciona un formato</option>
                        <option value="1">Editor HTML</option>
                        <option value="2">Editor HTML con selector de archivo</option>
                        <option value="3">Texto sin formato</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="tamano" className="col-form-label">Tamaño de la caja de entrada</label>
                </div>
                <div className="col-md-8">
                    <select
                        id="tamano"
                        name="tamano"
                        value={formData.tamano}
                        onChange={handleChange}
                        className="inputTamano"
                        required
                    >
                        <option value="">Selecciona un tamaño</option>
                        <option value="1">5 líneas</option>
                        <option value="2">10 líneas</option>
                        <option value="3">15 líneas</option>
                        <option value="4">20 líneas</option>
                        <option value="5">25 líneas</option>
                        <option value="6">30 líneas</option>
                        <option value="7">35 líneas</option>
                        <option value="8">40 líneas</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="permitir" className="col-form-label">Permitir archivos adjuntos</label>
                </div>
                <div className="col-md-8">
                    <select
                        id="permitir"
                        name="permitir"
                        value={formData.permitir}
                        onChange={handleChange}
                        className="inputPermitir"
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="1">Sí</option>
                        <option value="2">No</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="informacion" className="col-form-label">Información para los alumnos</label>
                </div>
                <div className="col-md-8">
                    <input
                        type="text"
                        id="informacion"
                        name="informacion"
                        value={formData.informacion}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Mínimo 5 caracteres"
                        required
                        minLength="5"
                        maxLength="50"
                    />
                </div>
            </div>

            <div className="align-items-center">
                <button type="submit" className="btn btn-success text-nowrap" id="btnEnviar">
                    <span>
                        <i className="bi bi-send icon__send fw-bold"></i>
                    </span>
                    <span className="icon__send fw-bold">Guardar</span>
                </button>

                <button type="button" className="btn btn-danger">
                    <Link to="/" className="nav-link active">Cancelar</Link>
                </button>
            </div>
        </form>
    );
}

export default FormularioEnsayo;
