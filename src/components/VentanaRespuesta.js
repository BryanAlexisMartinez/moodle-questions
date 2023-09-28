import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditorHtml from './EditorHtml';

function VentanaRespuesta() {
    const { preguntaId } = useParams();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("Nombre de la pregunta");
    const [texto, setTexto] = useState("Texto de la pregunta");
    const [retroalimentacion, setRetroalimentacion] = useState("Retroalimentación general");
    const [informacion, setInformacion] = useState("Información para los alumnos");
    const [formato, setFormato] = useState(1); // Valor predeterminado
    const [tamano, setTamano] = useState(1); // Valor predeterminado
    

    useEffect(() => {
        // Supongamos que obtienes los detalles de la pregunta desde la API
        fetch(`http://localhost:8080/api/ensayo/${preguntaId}`)
            .then((response) => response.json())
            .then((data) => {
                // Actualiza los estados con los valores obtenidos de la API
                setNombre(data.nombre);
                setTexto(data.texto);
                setRetroalimentacion(data.retroalimentacion);
                setInformacion(data.informacion);
                setFormato(data.formato);
                setTamano(data.tamano);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles de la pregunta:", error);
            });
    }, [preguntaId]);

    const handleGuardar = () => {
        // Obtener el nombre del alumno desde el input
        const nombreAlumno = document.getElementById('alumno').value;
    
        // Crear un objeto que represente la respuesta del alumno
        const respuestaAlumno = {
            preguntaId,
            nombreAlumno,
            // Otros campos de la respuesta del alumno, si los hay
        };
    
        // Realizar una solicitud POST a la API de respuestas
        fetch('http://localhost:8080/api/respuesta/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(respuestaAlumno),
        })
        .then((response) => response.json())
        .then((data) => {
            // La respuesta de la API después de guardar la respuesta del alumno
            console.log('Respuesta de la API:', data);
            navigate("/"); // Redirigir a la página principal o a donde sea necesario
        })
        .catch((error) => {
            console.error('Error al guardar la respuesta del alumno:', error);
        });
    };

    const handleCancelar = () => {
        // Si el usuario cancela, simplemente navega de regreso a la ventana de preguntas
        navigate("/"); // Cambia la ruta según tu estructura de rutas
    };

    // Mostrar contenido específico del editor basado en el formato
    let contenidoEditor;

    if (formato === 1) {
        contenidoEditor = (
            <div>
                <EditorHtml />
                {/* Agrega aquí el contenido específico del formato 1 */}
            </div>
        );
    } else if (formato === 2) {
        contenidoEditor = (
            <div>
                <label htmlFor="fileInput">Seleccionar archivo:</label>
                <input type="file" id="fileInput" />
            </div>
        );
    } else if (formato === 3) {
        // Ajusta la cantidad de líneas según el valor de "tamano"
        let rows = 5; // Valor predeterminado
        if (tamano >= 1 && tamano <= 8) {
            rows = 5 + (tamano - 1) * 5;
        }

        contenidoEditor = (
            <div>
               
                <textarea
                    rows={rows}
                    placeholder="Ingresa tu texto aquí"
                    style={{ width: '100%' }}
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
            </div>
        );
    }

    return (
        <div>
            <h1>Detalles de la Pregunta</h1>
            <p>ID: {preguntaId}</p>
            <p>Nombre de la pregunta: {nombre}</p>
            <p>Texto de la pregunta: {texto}</p>
            <p>Retroalimentación general: {retroalimentacion}</p>
            <p>Informacion general: {informacion}</p>

            <p>Tu respuesta:</p>


            <div className="row g-3 align-items-center">
                <div className="col-md-3">
                    <label htmlFor="alumno" className="col-form-label">Nombre del alumno</label>
                </div>
                <div className="col-md-8">
                    <input
                        type="text"
                        id="alumno"
                        name="alumno"                      
                        className="form-control"
                        placeholder="Ingresa tu nombre completo"
                        required
                        minLength="5"
                        maxLength="50"
                    />
                </div>
            </div>


            {contenidoEditor}

            <button onClick={handleGuardar}>Guardar</button>
            <button onClick={handleCancelar}>Cancelar</button>
        </div>
    );
}

export default VentanaRespuesta;
