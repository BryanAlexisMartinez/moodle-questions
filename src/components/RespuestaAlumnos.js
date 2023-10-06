import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RespuestaAlumno() {
    const [respuestas, setRespuestas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Agregamos esta línea

    const handleCancelar = () => {
        navigate("/");
    };

    useEffect(() => {
        // Realiza la solicitud GET para obtener las preguntas desde tu API
        fetch('http://localhost:8080/api/respuesta/')
            .then((response) => response.json())
            .then((data) => {
                setRespuestas(data); // Almacena los datos de las preguntas en el estado
                setLoading(false); // Cambia el estado de carga a falso una vez que se han cargado los datos
            })
            .catch((error) => {
                console.error("Error al obtener las preguntas:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h1>Listado de preguntas</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Pregunta</th>
                        <th>Texto</th>
                        <th>Puntuación</th>
                        <th>Retroalimentación</th>
                        <th>Información para los alumnos</th>
                        <th>Respuesta del alumno</th> {/* Aquí usa el nombre correcto */}
                    </tr>
                </thead>
                <tbody>
                    {respuestas.map((respuesta) => (
                        <tr key={respuesta.id}>
                            <td>{respuesta.id}</td>
                            <td>{respuesta.nombrePregunta}</td> {/* Utiliza el nombre correcto de la propiedad */}
                            <td>{respuesta.textoPregunta}</td> {/* Utiliza el nombre correcto de la propiedad */}
                            <td>{respuesta.puntuacion}</td>
                            <td>{respuesta.retroalimentacionPregunta}</td> {/* Utiliza el nombre correcto de la propiedad */}
                            <td>{respuesta.informacionPregunta}</td> {/* Utiliza el nombre correcto de la propiedad */}
                            <td>{respuesta.textoNormal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleCancelar}>Cancelar</button>

        </div>
    );
}
export default RespuestaAlumno;
