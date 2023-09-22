import React, { Component, useEffect } from "react";
import swal from 'sweetalert';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function FormularioEnsayo() {


    //Elementos del formulario de html
    let inputCategoria = document.getElementById("inputCategoria");
    let alert_categoria = document.getElementById("alert_categoria");
    let alert_categoria_txt = document.getElementById("alert_categoria_txt");
    let categoriaTxt = "";

    let inputNombre = document.getElementById("inputNombre");
    let alert_nombre = document.getElementById("alert_nombre");
    let alert_nombre_txt = document.getElementById("alert_nombre_txt");
    let nombreTxt = "";

    let inputTexto = document.getElementById("inputTexto");
    let alert_texto = document.getElementById("alert_texto");
    let alert_texto_txt = document.getElementById("alert_texto_txt");
    let textoTxt = "";

    let inputPuntuacion = document.getElementById("inputPuntuacion");
    let alert_puntuacion = document.getElementById("alert_puntuacion");
    let alert_puntuacion_txt = document.getElementById("alert_puntuacion_txt");
    let puntuacionTxt = "";

    let inputRetroalimentacion = document.getElementById("inputRetroalimentacion");
    let alert_retroalimentacion = document.getElementById("alert_retroalimentacion");
    let alert_retroalimentacion_txt = document.getElementById("alert_retroalimentacion_txt");
    let retroalimentacionTxt = "";

    let inputFormato = document.getElementById("inputFormato");
    let alert_formato = document.getElementById("alert_formato");
    let alert_formato_txt = document.getElementById("alert_formato_txt");
    let formatoTxt = "";

    let inputTamano = document.getElementById("inputTamano");
    let alert_tamano = document.getElementById("alert_tamano");
    let alert_tamano_txt = document.getElementById("alert_tamano_txt");
    let tamanoTxt = "";

    let inputPermitir = document.getElementById("inputPermitir");
    let alert_permitir = document.getElementById("alert_permitir");
    let alert_permitir_txt = document.getElementById("alert_permitir_txt");
    let permitirTxt = "";

    let inputInformacion = document.getElementById("inputInformacion");
    let alert_informacion = document.getElementById("alert_informacion");
    let alert_informacion_txt = document.getElementById("alert_informacion_txt");
    let informacionTxt = "";

    let btnEnviar = document.getElementById("btnEnviar");

    // =========== FUNCIONES DE VALIDACIONES DE CAMPOS ===========

    //   ***********  1. Validación de categoría  ***********
    function validarCategoria() {

        let valor = inputCategoria.value; // Declarar e inicializar 'valor'

        let inputCategoria = document.getElementById("inputCategoria"); // Declarar e inicializar 'inputCategoria'
        let alert_categoria = document.getElementById("alert_categoria");
        let alert_categoria_txt = document.getElementById("alert_categoria_txt");
        let categoriaTxt = "";

        inputCategoria.style.border = "";
        alert_categoria.style.display = "none";
        alert_categoria_txt.innerHTML = "";


        if (valor != "") {
            inputCategoria.style.border = "solid 2px green";
            categoriaTxt = valor;
            return true
        } else {
            alert_categoria_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
            alert_categoria.style.display = "flex";
            inputCategoria.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  2. Validación de nombre  ***********
    function validarNombre() {
        let inputNombre = document.getElementById("inputNombre");
        let alert_nombre = document.getElementById("alert_nombre");
        let alert_nombre_txt = document.getElementById("alert_nombre_txt");
        let nombreTxt = "";
        let regexName = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
        let valor = inputNombre.value.trim().toUpperCase();

        inputNombre.style.border = "";
        alert_nombre.style.display = "none";
        alert_nombre_txt.innerHTML = "";

        if (regexName.test(valor)) {
            inputNombre.style.border = "solid 2px green";
            nombreTxt = valor;
            return true
        } else {
            alert_nombre_txt.insertAdjacentHTML("afterbegin", `Nombre incorrecto`);
            alert_nombre.style.display = "flex";
            inputNombre.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  3. Validación de Texto de la pregunta  ***********
    function validarTexto() {
        let inputTexto = document.getElementById("inputTexto");
        let alert_texto = document.getElementById("alert_texto");
        let alert_texto_txt = document.getElementById("alert_texto_txt");
        let textoTxt = "";
        let regexTexto = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
        let valor = inputTexto.value.trim().toUpperCase();

        inputTexto.style.border = "";
        alert_texto.style.display = "none";
        alert_texto_txt.innerHTML = "";

        if (regexTexto.test(valor)) {
            inputTexto.style.border = "solid 2px green";
            textoTxt = valor;
            return true
        } else {
            alert_texto_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
            alert_texto.style.display = "flex";
            inputTexto.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  4. Validación de puntuacion  ***********

    function validarPuntuacion() {
        let inputPuntuacion = document.getElementById("inputPuntuacion");
        let alert_puntuacion = document.getElementById("alert_puntuacion");
        let alert_puntuacion_txt = document.getElementById("alert_puntuacion_txt");
        let puntuacionTxt = "";
        let valor = inputPuntuacion.value.trim();

        inputPuntuacion.style.border = "";
        alert_puntuacion.style.display = "none";
        alert_puntuacion_txt.innerHTML = "";

        if (!isNaN(valor) && valor.length > 0 && valor.length < 8 && Number.isInteger(parseFloat(valor))) {
            inputPuntuacion.style.border = "solid 2px green";
            puntuacionTxt = parseInt(valor);
            return true;
        } else {
            alert_puntuacion_txt.insertAdjacentHTML("afterbegin", `Incorrecto`);
            alert_puntuacion.style.display = "flex";
            inputPuntuacion.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  5. Validación de retroalimentacion general  ***********
    function validarRetroalimentacion() {
        let inputRetroalimentacion = document.getElementById("inputRetroalimentacion");
        let alert_retroalimentacion = document.getElementById("alert_retroalimentacion");
        let alert_retroalimentacion_txt = document.getElementById("alert_retroalimentacion_txt");
        let retroalimentacionTxt = "";

        let regexRetroalimentacion = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
        let valor = inputRetroalimentacion.value.trim().toUpperCase();

        inputRetroalimentacion.style.border = "";
        alert_retroalimentacion.style.display = "none";
        alert_retroalimentacion_txt.innerHTML = "";

        if (regexRetroalimentacion.test(valor)) {
            inputRetroalimentacion.style.border = "solid 2px green";
            retroalimentacionTxt = valor;
            return true
        } else {
            alert_retroalimentacion_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
            alert_retroalimentacion.style.display = "flex";
            inputRetroalimentacion.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  6. Formato de respuesta  ***********
    function validarFormato() {

        let inputFormato = document.getElementById("inputFormato");
        let alert_formato = document.getElementById("alert_formato");
        let alert_formato_txt = document.getElementById("alert_formato_txt");
        let formatoTxt = "";

        let valor = inputFormato.value;

        inputFormato.style.border = "";
        alert_formato.style.display = "none";
        alert_formato_txt.innerHTML = "";


        if (valor != "") {
            inputFormato.style.border = "solid 2px green";
            formatoTxt = valor;
            return true
        } else {
            alert_formato_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
            alert_formato.style.display = "flex";
            inputFormato.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  7. Tamano de la caja de entrada  ***********
    function validarTamano() {

        let inputTamano = document.getElementById("inputTamano");
        let alert_tamano = document.getElementById("alert_tamano");
        let alert_tamano_txt = document.getElementById("alert_tamano_txt");
        let tamanoTxt = "";

        let valor = inputTamano.value;

        inputTamano.style.border = "";
        alert_tamano.style.display = "none";
        alert_tamano_txt.innerHTML = "";


        if (valor != "") {
            inputTamano.style.border = "solid 2px green";
            tamanoTxt = valor;
            return true
        } else {
            alert_tamano_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
            alert_tamano.style.display = "flex";
            inputTamano.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  8. Permitir archivos adjuntos  ***********
    function validarPermitir() {

        let inputPermitir = document.getElementById("inputPermitir");
        let alert_permitir = document.getElementById("alert_permitir");
        let alert_permitir_txt = document.getElementById("alert_permitir_txt");
        let permitirTxt = "";

        let valor = inputPermitir.value;

        inputPermitir.style.border = "";
        alert_permitir.style.display = "none";
        alert_permitir_txt.innerHTML = "";


        if (valor != "") {
            inputPermitir.style.border = "solid 2px green";
            permitirTxt = valor;
            return true
        } else {
            alert_permitir_txt.insertAdjacentHTML("afterbegin", `Incorrecta`);
            alert_permitir.style.display = "flex";
            inputPermitir.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }


    //   ***********  9. Informacion para los los alumnos  ***********
    function validarInformacion() {

        let inputInformacion = document.getElementById("inputInformacion");
        let alert_informacion = document.getElementById("alert_informacion");
        let alert_informacion_txt = document.getElementById("alert_informacion_txt");
        let informacionTxt = "";

        let regexInformacion = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
        let valor = inputInformacion.value.trim().toUpperCase();

        inputInformacion.style.border = "";
        alert_informacion.style.display = "none";
        alert_informacion_txt.innerHTML = "";

        if (regexInformacion.test(valor)) {
            inputInformacion.style.border = "solid 2px green";
            informacionTxt = valor;
            return true
        } else {
            alert_informacion_txt.insertAdjacentHTML("afterbegin", `Texto incorrecto`);
            alert_informacion.style.display = "flex";
            inputInformacion.style.border = "solid 2px rgb(186, 3, 3)";
            return false;
        }
    }

    function alertWrong() {
        swal("Información inválida", "Por favor revisa nuevamente el formulario", "error");
    }

    // ***********  Alerta de éxito  ***********
    function alertSuccess() {
        swal("Pregunta agregada :)", "Visualiza tu listado de preguntas", "success");
    }




    function FormularioEnsayo() {
        useEffect(() => {
            let inputCategoria = document.getElementById("inputCategoria");
            let alert_categoria = document.getElementById("alert_categoria");
            let alert_categoria_txt = document.getElementById("alert_categoria_txt");
            let categoriaTxt = "";

            let inputNombre = document.getElementById("inputNombre");
            let alert_nombre = document.getElementById("alert_nombre");
            let alert_nombre_txt = document.getElementById("alert_nombre_txt");
            let nombreTxt = "";

            let inputTexto = document.getElementById("inputTexto");
            let alert_texto = document.getElementById("alert_texto");
            let alert_texto_txt = document.getElementById("alert_texto_txt");
            let textoTxt = "";

            let inputPuntuacion = document.getElementById("inputPuntuacion");
            let alert_puntuacion = document.getElementById("alert_puntuacion");
            let alert_puntuacion_txt = document.getElementById("alert_puntuacion_txt");
            let puntuacionTxt = "";

            let inputRetroalimentacion = document.getElementById("inputRetroalimentacion");
            let alert_retroalimentacion = document.getElementById("alert_retroalimentacion");
            let alert_retroalimentacion_txt = document.getElementById("alert_retroalimentacion_txt");
            let retroalimentacionTxt = "";

            let inputFormato = document.getElementById("inputFormato");
            let alert_formato = document.getElementById("alert_formato");
            let alert_formato_txt = document.getElementById("alert_formato_txt");
            let formatoTxt = "";

            let inputTamano = document.getElementById("inputTamano");
            let alert_tamano = document.getElementById("alert_tamano");
            let alert_tamano_txt = document.getElementById("alert_tamano_txt");
            let tamanoTxt = "";

            let inputPermitir = document.getElementById("inputPermitir");
            let alert_permitir = document.getElementById("alert_permitir");
            let alert_permitir_txt = document.getElementById("alert_permitir_txt");
            let permitirTxt = "";

            let inputInformacion = document.getElementById("inputInformacion");
            let alert_informacion = document.getElementById("alert_informacion");
            let alert_informacion_txt = document.getElementById("alert_informacion_txt");
            let informacionTxt = "";

            let btnEnviar = document.getElementById("btnEnviar");

            inputCategoria.addEventListener("change", function (event) {
                event.preventDefault();
                validarCategoria();
            });

            inputNombre.addEventListener("change", function (event) {
                event.preventDefault();
                validarNombre();
            });

            inputTexto.addEventListener("change", function (element) {
                element.preventDefault();
                validarTexto();
            })

            inputPuntuacion.addEventListener("change", function (event) {
                event.preventDefault();
                validarPuntuacion();
            });

            inputRetroalimentacion.addEventListener("change", function (element) {
                element.preventDefault();
                validarRetroalimentacion();
            })

            inputFormato.addEventListener("change", function (element) {
                element.preventDefault();
                validarFormato();
            })

            inputTamano.addEventListener("change", function (element) {
                element.preventDefault();
                validarTamano();
            })

            inputPermitir.addEventListener("change", function (element) {
                element.preventDefault();
                validarPermitir();
            })

            inputInformacion.addEventListener("change", function (element) {
                element.preventDefault();
                validarInformacion();
            })

        }, []); // El array vacío [] significa que se ejecutará una vez después del montaje

        const handleSubmit = async (event) => {
            event.preventDefault();

            // Validar campos
            const validaciones = [
                validarCategoria(),
                validarNombre(),
                validarTexto(),
                validarPuntuacion(),
                validarRetroalimentacion(),
                validarFormato(),
                validarTamano(),
                validarPermitir(),
                validarInformacion()
            ];

            if (validaciones.every(validation => validation)) {
                swal({ title: "Validando información", text: "Por favor espera...", icon: "info", closeOnClickOutside: false, buttons: false });

                const data = {
                    "categoria": parseInt(inputCategoria.value),
                    "nombre": inputNombre.value.trim().toUpperCase(),
                    "texto": inputTexto.value.trim().toUpperCase(),
                    "puntuacion": parseInt(inputPuntuacion.value),
                    "retroalimentacion": inputRetroalimentacion.value.trim().toUpperCase(),
                    "formato": parseInt(inputFormato.value),
                    "tamano": parseInt(inputTamano.value),
                    "permitir": parseInt(inputPermitir.value),
                    "informacion": inputInformacion.value.trim().toUpperCase()
                };

                try {
                    const response = await enviarSolicitud(data);

                    if (response.ok) {
                        alertSuccess();
                        borrarValidaciones();

                    } else {
                        alertWrong();
                        // Actualizar estados de imágenes y estilos si es necesario
                    }
                } catch (error) {
                    console.log('error', error);
                    swal({ title: "Error en el registro", text: "Hubo un problema al registrar la pregunta.", icon: "error" });
                    // Actualizar estados de imágenes y estilos si es necesario
                } finally {
                    swal.close();
                }
            }
        };

        async function enviarSolicitud(data) {
            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: 'follow'
            };
            //COLOCAR LA DIRECCION PARA REALIZAR EL FETCH A LA API EN SPRING(FALTA QUE LA DESARROLLE)
            return await fetch("https://kotomitl.onrender.com/api/productos/", requestOptions);
        }



            const borrarValidaciones = () => {
                //elementos de validación limpios
                inputCategoria.style.border = "";
                alert_categoria.style.display = "none";
                alert_categoria_txt.innerHTML = "";
                inputCategoria.value = "";

                inputNombre.style.border = "";
                alert_nombre.style.display = "none";
                alert_nombre_txt.innerHTML = "";
                inputNombre.value = "";

                inputTexto.style.border = "";
                alert_texto.style.display = "none";
                alert_texto_txt.innerHTML = "";
                inputTexto.value = ""

                inputPuntuacion.style.border = "";
                alert_puntuacion.style.display = "none";
                alert_puntuacion_txt.innerHTML = "";
                inputPuntuacion.value = "";

                inputRetroalimentacion.style.border = "";
                alert_retroalimentacion.style.display = "none";
                alert_retroalimentacion_txt.innerHTML = "";
                inputRetroalimentacion.value = ""

                inputFormato.style.border = "";
                alert_formato.style.display = "none";
                alert_formato_txt.innerHTML = "";
                inputFormato.value = "";

                inputTamano.style.border = "";
                alert_tamano.style.display = "none";
                alert_tamano_txt.innerHTML = "";
                inputTamano.value = "";

                inputPermitir.style.border = "";
                alert_permitir.style.display = "none";
                alert_permitir_txt.innerHTML = "";
                inputPermitir.value = "";

                inputInformacion.style.border = "";
                alert_informacion.style.display = "none";
                alert_informacion_txt.innerHTML = "";
                inputInformacion.value = "";
            };

            return (
                <form onSubmit={handleSubmit}>
                    <h1>Formulario para agregar pregunta tipo ensayo</h1>

                    <div className="row g-3 align-items-center" >
                        <div className="col-md-3">
                            <label for="inputCategoria" className="col-form-label" >Categoría</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_categoria">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_categoria_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <select className="inputCategoria" name="inputCategoria">
                                <option selected>Abre el menú para ver las opciones</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>


                    <div className="row g-3 align-items-center">
                        <div className="col-md-3">
                            <label for="inputNombre" className="col-form-label">Nombre de la pregunta</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_nombre">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_nombre_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="inputNombre" placeholder="Mínimo 5 caracteres"
                                required minLength="5" maxLength="50" />
                        </div>
                    </div>


                    <div className="row g-3 align-items-center">
                        <div className="col-md-3">
                            <label for="inputTexto" className="col-form-label">Texto de la pregunta</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_texto">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_texto_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="inputTexto" placeholder="Mínimo 5 caracteres"
                                required minLength="5" maxLength="50" />
                        </div>
                    </div>


                    <div className="row g-3 align-items-center">
                        <div className="col-md-3">
                            <label for="inputPuntuacion" className="col-form-label">Puntuacion</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_puntuacion">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_puntuacion_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="inputPuntuacion" placeholder="Mínimo 5 caracteres"
                                required minLength="5" maxLength="50" />
                        </div>
                    </div>


                    <div className="row g-3 align-items-center">
                        <div className="col-md-3">
                            <label for="inputRetroalimentacion" className="col-form-label">Retroalimentación general</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_retroalimentacion">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_retroalimentacion_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="inputRetroalimentacion" placeholder="Mínimo 5 caracteres"
                                required minLength="5" maxLength="50" />
                        </div>
                    </div>


                    <div className="row g-3 align-items-center" >
                        <div className="col-md-3">
                            <label for="inputFormato" className="col-form-label" >Formato de respuesta</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_formato">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_formato_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <select className="inputFormato" name="inputFormato">
                                <option selected>Abre el menú para ver las opciones</option>
                                <option value="1">Editor HTML</option>
                                <option value="2">Editor HTML con selector de archivo</option>
                                <option value="3">Texto sin formato</option>
                            </select>
                        </div>
                    </div>


                    <div className="row g-3 align-items-center" >
                        <div className="col-md-3">
                            <label for="inputTamano" className="col-form-label" >Tamaño de la caja de entrada</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_tamano">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_tamano_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <select className="inputTamano" name="inputTamano">
                                <option selected>Abre el menú para ver las opciones</option>
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


                    <div className="row g-3 align-items-center" >
                        <div className="col-md-3">
                            <label for="inputPermitir" className="col-form-label" >Permitir archivos adjuntos</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_permitir">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_permitir_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <select className="inputPermitir" name="inputPermitir">
                                <option selected>Abre el menú para ver las opciones</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>


                    <div className="row g-3 align-items-center">
                        <div className="col-md-3">
                            <label for="inputInformacion" className="col-form-label">Información para los alumnos</label>
                            <div style={{ display: 'none', color: 'rgb(186, 3, 3)' }} role="alert" id="alert_informacion">
                                <span><i className="bi bi-exclamation-triangle-fill icon__warning"></i></span>
                                <span id="alert_informacion_txt"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="inputInformacion" placeholder="Mínimo 5 caracteres"
                                required minLength="5" maxLength="50" />
                        </div>
                    </div>


                    <div className="align-items-center">
                        <button type="button" className="btn btn-success text-nowrap" id="btnEnviar">
                            <span>
                                <i className="bi bi-send icon__send fw-bold"></i>
                            </span>
                            <span className="icon__send fw-bold">Guardar</span>
                        </button>

                        <button type="button" className="btn btn-danger"><Link to="/" class="nav-link active">Cancelar</Link></button>
                    </div>
                </form>
            );
        }
    }

    export default FormularioEnsayo;