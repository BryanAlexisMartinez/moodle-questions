import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RespuestaAlumno() {
    const { preguntaId } = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState(""); // Cambié el valor inicial a una cadena vacía
    const [nombre, setNombre] = useState("");
    const [texto, setTexto] = useState("");
    const [retroalimentacion, setRetroalimentacion] = useState("");
    const [informacion, setInformacion] = useState("");
    const [formato, setFormato] = useState(1);
    const [tamano, setTamano] = useState(1);
    const [respuestaTextoNormal, setRespuestaTextoNormal] = useState("");
    const [archivo, setArchivo] = useState(null);

    useEffect(() => {
        if (!preguntaId) {
            // Si preguntaId no está definido, no hagas la solicitud
            return;
        }
    
        // Obtén los detalles de la pregunta desde la API usando el ID
        fetch(`http://localhost:8080/api/ensayo/${preguntaId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("La solicitud no fue exitosa");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data); // Verifica los datos recibidos en la consola
                setId(data.id);
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
    

    const handleCancelar = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>Detalles de la Pregunta</h1>
            <p>ID: {id}</p>
            <p>Nombre de la pregunta: {nombre}</p>
            <p>Texto de la pregunta: {texto}</p>
            <p>Retroalimentación general: {retroalimentacion}</p>
            <p>Información general: {informacion}</p>

            <p>Respuestas de los alumnos:</p>

            <div className="row g-3 align-items-center"></div>

            <button onClick={handleCancelar}>Cancelar</button>
        </div>
    );
}

export default RespuestaAlumno;
