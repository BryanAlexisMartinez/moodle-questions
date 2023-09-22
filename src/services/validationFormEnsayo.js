// =========== VALIDACIÓN DE FORMULARIO DE FORMULARIO PREGUNTA ENSAYO ===========

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


//===============LIMPIAR CAMPOS UNA VEZ GUARDADA LA PREGUNTA EN LA BASE DE DATOS========================
function borrarValidaciones() {

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

}

// =========== FUNCIONES DE VALIDACIONES DE CAMPOS ===========

//   ***********  1. Validación de categoría  ***********
function validarCategoria() {

    valor = inputCategoria.value;

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

inputCategoria.addEventListener("change", function (element) {
    element.preventDefault();
    validarCategoria();
})


//   ***********  2. Validación de nombre  ***********
function validarNombre() {
    let regexName = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
    valor = inputNombre.value.trim().toUpperCase();

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

inputNombre.addEventListener("change", function (element) {
    element.preventDefault();
    validarNombre();
})


//   ***********  3. Validación de Texto de la pregunta  ***********
function validarTexto() {
    let regexTexto = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
    valor = inputTexto.value.trim().toUpperCase();

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

inputTexto.addEventListener("change", function (element) {
    element.preventDefault();
    validarTexto();
})


//   ***********  4. Validación de puntuacion  ***********

function validarPuntuacion() {
    valor = inputPuntuacion.value.trim();

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

inputPuntuacion.addEventListener("change", function (event) {
    event.preventDefault();
    validarPuntuacion();
});


//   ***********  5. Validación de retroalimentacion general  ***********
function validarRetroalimentacion() {
    let regexRetroalimentacion = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
    valor = inputRetroalimentacion.value.trim().toUpperCase();

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

inputRetroalimentacion.addEventListener("change", function (element) {
    element.preventDefault();
    validarRetroalimentacion();
})


//   ***********  6. Formato de respuesta  ***********
function validarFormato() {

    valor = inputFormato.value;

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

inputFormato.addEventListener("change", function (element) {
    element.preventDefault();
    validarFormato();
})


//   ***********  7. Tamano de la caja de entrada  ***********
function validarTamano() {

    valor = inputTamano.value;

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

inputTamano.addEventListener("change", function (element) {
    element.preventDefault();
    validarTamano();
})


//   ***********  8. Permitir archivos adjuntos  ***********
function validarPermitir() {

    valor = inputPermitir.value;

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

inputPermitir.addEventListener("change", function (element) {
    element.preventDefault();
    validarPermitir();
})

//   ***********  9. Informacion para los los alumnos  ***********
function validarInformacion() {
    let regexInformacion = /^[a-zA-Z0-9," "áéíóúÁÉÍÓÚüÜñÑ?¿?/-_¡!._]{3,}$/;
    valor = inputInformacion.value.trim().toUpperCase();

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

inputInformacion.addEventListener("change", function (element) {
    element.preventDefault();
    validarInformacion();
})


// ***********  Alerta de error  ***********
function alertWrong() {
    swal("Información inválida", "Por favor revisa nuevamente el formulario", "error");
}

// ***********  Alerta de éxito  ***********
function alertSuccess() {
    swal("Pregunta agregada :)", "Visualiza tu listado de preguntas", "success");
}




btnEnviar.addEventListener("click", async function (event) {
    event.preventDefault();

    // Validar campos
    const validaciones = [
        validarCampo(validarCategoria),
        validarCampo(validarNombre),
        validarCampo(validarTexto),
        validarCampo(validarPuntuacion),
        validarCampo(validarRetroalimentacion),
        validarCampo(validarFormato),
        validarCampo(validarTamano),
        validarCampo(validarPermitir),
        validarCampo(validarInformacion)
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
});

function validarCampo(validacion) {
    return validacion();
}

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