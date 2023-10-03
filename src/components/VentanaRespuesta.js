import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditorHtml from './EditorHtml';

function VentanaRespuesta() {
    const { preguntaId } = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState("Id de la pregunta");
    const [nombre, setNombre] = useState("Nombre de la pregunta");
    const [texto, setTexto] = useState("Texto de la pregunta");
    const [retroalimentacion, setRetroalimentacion] = useState("Retroalimentación general");
    const [informacion, setInformacion] = useState("Información para los alumnos");
    const [formato, setFormato] = useState(1);
    const [tamano, setTamano] = useState(1);
    const [respuestaTextoNormal, setRespuestaTextoNormal] = useState("");
    const [archivo, setArchivo] = useState(null);

    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        // Obtén los detalles de la pregunta desde la API
        fetch(`http://localhost:8080/api/ensayo/${preguntaId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("La solicitud no fue exitosa");
                }
                return response.json();
            })
            .then((data) => {
                // Actualiza los estados con los valores obtenidos de la API
                setId(data.id);
                setNombre(data.nombre);
                setTexto(data.texto);
                setRetroalimentacion(data.retroalimentacion);
                setInformacion(data.informacion);
                setFormato(data.formato);
                setTamano(data.tamano);

                // Agregar salidas de depuración para verificar los valores
                console.log("Id de la pregunta:", data.id);
                console.log("Nombre de la pregunta:", data.nombre);
                console.log("Texto de la pregunta:", data.texto);
                console.log("Retroalimentación general:", data.retroalimentacion);
                console.log("Información para los alumnos:", data.informacion);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles de la pregunta:", error);
            });
    }, [preguntaId]);


    const handleGuardar = () => {
        const nombreAlumno = document.getElementById('alumno').value;

        if (!nombreAlumno || nombreAlumno.trim() === "") {
            alert('Por favor, ingresa el nombre del alumno.');
            return;
        }

        if (formato === 1) {
            const textoHtml = textareaRef.current.value;
            if (!textoHtml || textoHtml.trim() === "") {
                console.error('Por favor, ingresa el texto en el campo Texto HTML.');
                return;
            }
        }

        if (formato === 3 && (!respuestaTextoNormal || respuestaTextoNormal.trim() === "")) {
            alert('Por favor, ingresa el texto en el campo Texto Normal.');
            return;
        }

        // Crear un objeto que represente la respuesta del alumno
        const respuestaAlumno = {
            preguntaId: preguntaId, // Agregar el ID de la pregunta
            nombreAlumno,
            textoNormal: formato === 3 ? respuestaTextoNormal : "",
            textoHtml: formato === 1 ? textareaRef.current.value : "",
            archivo: formato === 2 ? archivo : null,
            // Incluye los campos de la pregunta
            preguntaId: id,
            nombrePregunta: nombre, // Campo nombre de la pregunta
            textoPregunta: texto, // Campo texto de la pregunta
            retroalimentacionPregunta: retroalimentacion, // Campo retroalimentacion de la pregunta
            informacionPregunta: informacion, // Campo informacion de la pregunta
        };



        // Resto del código...

        fetch('http://localhost:8080/api/respuesta/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(respuestaAlumno),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al guardar la respuesta del alumno");
                }
                return response.json();
            })
            .then((data) => {
                console.log('Respuesta de la API:', data);
                alert('¡El formulario ha sido enviado con éxito!');
                navigate("/");
            })
            .catch((error) => {
                console.error('Error al guardar la respuesta del alumno:', error);
                alert('Error al guardar la respuesta del alumno.');
            });
    };

    const handleCancelar = () => {
        navigate("/");
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        setArchivo(selectedFile);
    };

    let contenidoEditor;

    if (formato === 1) {
        contenidoEditor = (
            <div>
                <EditorHtml
                    value={respuestaTextoNormal}
                    onChange={(value) => setRespuestaTextoNormal(value)}
                />
            </div>
        );
    } else if (formato === 2) {
        contenidoEditor = (
            <div>
                <label htmlFor="fileInput">Seleccionar archivo:</label>
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    accept=".pdf, .doc, .docx"
                    required
                />
            </div>
        );
    } else if (formato === 3) {
        let rows = 5;
        if (tamano >= 1 && tamano <= 8) {
            rows = 5 + (tamano - 1) * 5;
        }

        contenidoEditor = (
            <div>
                <textarea
                    rows={rows}
                    placeholder="Ingresa tu texto aquí"
                    style={{ width: '100%' }}
                    value={respuestaTextoNormal}
                    onChange={(e) => setRespuestaTextoNormal(e.target.value)}
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
                    <label htmlFor="alumno" className="col-form-label" required>Nombre del alumno</label>
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
