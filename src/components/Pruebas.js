import React, { useState, useEffect } from "react";

function Pruebas() {
    const [preguntas, setPreguntas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Realiza la solicitud GET para obtener las preguntas desde tu API
        fetch('http://localhost:8080/api/ensayo/')
            .then((response) => response.json())
            .then((data) => {
                setPreguntas(data); // Almacena los datos de las preguntas en el estado
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
                        <th>Nombre</th>
                        <th>Texto</th>
                        <th>Puntuación</th>
                        <th>Retroalimentación</th>
                        <th>Formato</th>
                        <th>Tamaño</th>
                        <th>Permitir archivos adjuntos</th>
                        <th>Información para los alumnos</th>
                    </tr>
                </thead>
                <tbody>
                    {preguntas.map((pregunta) => (
                        <tr key={pregunta.id}>
                            <td>{pregunta.id}</td>
                            <td>{pregunta.nombre}</td>
                            <td>{pregunta.texto}</td>
                            <td>{pregunta.puntuacion}</td>
                            <td>{pregunta.retroalimentacion}</td>
                            <td>{pregunta.formato}</td>
                            <td>{pregunta.tamano}</td>
                            <td>{pregunta.permitir}</td>
                            <td>{pregunta.informacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pruebas;







import React, { useState, useEffect } from "react";
import VentanaRespuesta from "./VentanaRespuesta";

function ListadoPreguntas() {
    const [preguntas, setPreguntas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mostrarPreguntasAlumno, setMostrarPreguntasAlumno] = useState(false);

    useEffect(() => {
        // Realiza la solicitud GET para obtener las preguntas desde tu API
        fetch('http://localhost:8080/api/ensayo/')
            .then((response) => response.json())
            .then((data) => {
                setPreguntas(data); // Almacena los datos de las preguntas en el estado
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

    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

    const abrirVentanaDeRespuesta = (pregunta) => {
        setPreguntaSeleccionada(pregunta);
    };
    
    return (
        <div>
            <h1>Listado de preguntas</h1>
            <button onClick={() => setMostrarPreguntasAlumno(false)}>Profesor</button>
            <button onClick={() => setMostrarPreguntasAlumno(true)}>Alumno</button>

            {mostrarPreguntasAlumno ? (
                <table>
                    <thead>
                        <h1>Alumno</h1>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Texto</th>
                            <th>Puntuación</th>
                            <th>Retroalimentación</th>
                            <th>Información para los alumnos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preguntas.map((pregunta) => (
                            <tr key={pregunta.id}>
                                <td>{pregunta.id}</td>
                                <td>{pregunta.nombre}</td>
                                <td>{pregunta.texto}</td>
                                <td>{pregunta.puntuacion}</td>
                                <td>{pregunta.retroalimentacion}</td>
                                <td>{pregunta.informacion}</td>
                                <td>
                                    <button onClick={() => abrirVentanaDeRespuesta(pregunta.id)}>Responder</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <table className="bordered-table">
                    <thead>
                        <h1>Profesor</h1>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Texto</th>
                            <th>Puntuación</th>
                            <th>Retroalimentación</th>
                            <th>Formato</th>
                            <th>Tamaño</th>
                            <th>Permitir archivos adjuntos</th>
                            <th>Información para los alumnos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preguntas.map((pregunta) => (
                            <tr key={pregunta.id}>
                                <td>{pregunta.id}</td>
                                <td>{pregunta.nombre}</td>
                                <td>{pregunta.texto}</td>
                                <td>{pregunta.puntuacion}</td>
                                <td>{pregunta.retroalimentacion}</td>
                                <td>{pregunta.formato}</td>
                                <td>{pregunta.tamano}</td>
                                <td>{pregunta.permitir}</td>
                                <td>{pregunta.informacion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}
        </div>
    );
}

export default ListadoPreguntas;
