import React, { useState, useEffect } from "react";

function ListadoPreguntas() {
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

export default ListadoPreguntas;
