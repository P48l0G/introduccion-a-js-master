/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#boton-aceptar").onclick = function () {
    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;

    if (!isNaN(cantidadIntegrantes) && cantidadIntegrantes > 0 && cantidadIntegrantes < 50) {

        const $ingresarCantidadIntegrantes = document.querySelector("#ingresar-cantidad-integrantes");
        $ingresarCantidadIntegrantes.hidden = true;

        for (let i = 0; i < cantidadIntegrantes; i++) {
            const inputEdad = document.createElement('input');
            const labelEdad = document.createElement('label');
            const parrafo = document.createElement('p');

            inputEdad.type = "number";
            inputEdad.id = "edad-integrante-" + i;
            inputEdad.className = "edad"

            labelEdad.textContent = `Edad del familiar ` + (i + 1) + `: `;
            labelEdad.htmlFor = "edad-integrante-" + i;

            const edades = document.querySelector("#edades");

            edades.appendChild(labelEdad);
            edades.appendChild(inputEdad);
            edades.appendChild(parrafo);

            const $botonCalcular = document.querySelector("#boton-calcular");
            $botonCalcular.hidden = false;

        }
    } else {
        alert("Ingrese un número válido mayor a 0 y menor a 50.");
        return;
    }
};

document.querySelector("#boton-calcular").onclick = function () {
    const botonReiniciar = document.createElement('button');
    botonReiniciar.type = "button";
    botonReiniciar.id = "boton-reiniciar";
    botonReiniciar.textContent = "Empezar de nuevo";

    const listaDeEdades = crearListaEdades();

    const menorEdad = document.querySelector("#menor-edad");
    const mayorEdad = document.querySelector("#mayor-edad");
    const promedioEdad = document.querySelector("#promedio-edad");

    menorEdad.textContent = `La edad más baja es ${calcularMenorEdad(listaDeEdades)} años.`;
    mayorEdad.textContent = `La edad más alta es ${calcularMayorEdad(listaDeEdades)} años.`;
    promedioEdad.textContent = `La edad promedio es ${calcularPromedioEdad(listaDeEdades)} años.`;

    const $botonCalcular = document.querySelector("#boton-calcular");
    $botonCalcular.hidden = true;


    document.body.appendChild(botonReiniciar);
    botonReiniciar.onclick = function () {
        window.location.reload();
    }
}

function crearListaEdades() {
    let edades = document.querySelectorAll(".edad");
    let listaEdades = [];

    for (let i = 0; i < edades.length; i++) {
        const edad = parseFloat(edades[i].value);

        if (isNaN(edad) || !Number.isInteger(edad) || edad <= 0) {
            alert("Ingrese edades válidas mayores a 0");
            return;
        }

        listaEdades.push(edad);
    }

    return listaEdades;
}
function calcularMenorEdad(listaEdades) {
    numeroMenor = listaEdades[0];
    for (let i = 1; i < listaEdades.length; i++) {
        if (listaEdades[i] < numeroMenor) {
            numeroMenor = listaEdades[i];
        }
    }
    return numeroMenor;
}

function calcularMayorEdad(listaEdades) {
    numeroMayor = listaEdades[0];
    for (let i = 1; i < listaEdades.length; i++) {
        if (listaEdades[i] > numeroMayor) {
            numeroMayor = listaEdades[i];
        }
    }
    return numeroMayor;
}

function calcularPromedioEdad(listaEdades) {
    let sumaEdades = 0;
    for (let i = 0; i < listaEdades.length; i++) {
        sumaEdades += listaEdades[i];
    }
    return parseFloat(sumaEdades / listaEdades.length);
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
