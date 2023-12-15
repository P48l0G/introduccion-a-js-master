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
            const labelEdad = document.createElement('label');
            const inputEdad = document.createElement('input');
            const botonagregarSalarioAnual = document.createElement('button');
            const botonQuitarSalarioAnual = document.createElement('button');
            const labelSalarioAnual = document.createElement('label');
            const inputSalarioAnual = document.createElement('input');
            const lineBreak = document.createElement('br');

            inputEdad.type = "number";
            inputEdad.id = "edad-integrante-" + i;
            inputEdad.className = "edad"
            inputEdad.placeholder = "Ingrese edad"

            labelEdad.textContent = "Edad del familiar " + (i + 1) + ": ";
            labelEdad.htmlFor = "edad-integrante-" + i;

            botonagregarSalarioAnual.type = "button";
            botonagregarSalarioAnual.id = "boton-agregar-salario-anual" + i;
            botonagregarSalarioAnual.textContent = "Agregar salario anual";

            botonQuitarSalarioAnual.type = "button";
            botonQuitarSalarioAnual.id = "boton-quitar-salario-anual" + i;
            botonQuitarSalarioAnual.textContent = "Quitar salario anual";
            botonQuitarSalarioAnual.hidden = true;

            inputSalarioAnual.type = "number";
            inputSalarioAnual.id = "salario-anual-integrante-" + i;
            inputSalarioAnual.className = "salario-anual";
            inputSalarioAnual.placeholder = "Ingrese salario anual";
            inputSalarioAnual.hidden = true;

            labelSalarioAnual.textContent = "Salario anual del familiar " + (i + 1) + ": $";
            labelSalarioAnual.htmlFor = "salario-anual-integrante-" + i;
            labelSalarioAnual.hidden = true

            edades.appendChild(labelEdad);
            edades.appendChild(inputEdad);
            edades.appendChild(botonagregarSalarioAnual);
            edades.appendChild(botonagregarSalarioAnual);
            edades.appendChild(botonQuitarSalarioAnual);
            edades.appendChild(labelSalarioAnual);
            edades.appendChild(inputSalarioAnual);
            edades.appendChild(lineBreak);

            botonagregarSalarioAnual.onclick = function () {
                inputSalarioAnual.hidden = false;
                labelSalarioAnual.hidden = false;
                botonagregarSalarioAnual.hidden = true;
                botonQuitarSalarioAnual.hidden = false;
            };
            botonQuitarSalarioAnual.onclick = function () {
                inputSalarioAnual.hidden = true;
                labelSalarioAnual.hidden = true;
                botonagregarSalarioAnual.hidden = false;
                botonQuitarSalarioAnual.hidden = true;
                inputSalarioAnual.value = "";
            }
        }

    } else {
        alert("Ingrese un número válido mayor a 0 y menor a 50.");
        return;
    }

    const $botonCalcular = document.querySelector("#boton-calcular");
    $botonCalcular.hidden = false;
};

document.querySelector("#boton-calcular").onclick = function () {
    const listaDeEdades = crearListaEdades();
    const listaDeSalariosAnuales = crearListaSalariosAnuales();
    const menorEdad = document.querySelector("#menor-edad");
    const mayorEdad = document.querySelector("#mayor-edad");
    const promedioEdad = document.querySelector("#promedio-edad");

    menorEdad.textContent = `La edad más baja es: ${calcularMenorEdad(listaDeEdades)} años.`;
    mayorEdad.textContent = `La edad más alta es: ${calcularMayorEdad(listaDeEdades)} años.`;
    promedioEdad.textContent = `La edad promedio es: ${calcularPromedioEdad(listaDeEdades)} años.`;

    const mayorSalarioAnual = document.querySelector("#mayor-salario-anual");
    const menorSalarioAnual = document.querySelector("#menor-salario-anual");
    const salarioAnualPromedio = document.querySelector("#salario-anual-promedio");
    const salarioMensualPromedio = document.querySelector("#salario-mensual-promedio");

    let haySalarios = false;

    let i = 0;
    while (i < listaDeSalariosAnuales.length && !haySalarios) {
        if (listaDeSalariosAnuales[i] !== "") {
            haySalarios = true;
        }
        i++;
    }

    document.querySelector("#salarios").hidden = !haySalarios;

    if (haySalarios) {
        mayorSalarioAnual.textContent = `El mayor salario anual es: $${calcularMayorSalarioAnual(listaDeSalariosAnuales)}.`;
        menorSalarioAnual.textContent = `El menor salario anual es: $${calcularMenorSalarioAnual(listaDeSalariosAnuales)}.`;
        salarioAnualPromedio.textContent = `El salario anual promedio es: $${calcularPromedioSalarioAnual(listaDeSalariosAnuales)}.`;
        salarioMensualPromedio.textContent = `El salario mensual promedio es: $${calcularPromedioSalarioMensual(listaDeSalariosAnuales)}.`;
    }

    const $botonCalcular = document.querySelector("#boton-calcular");
    $botonCalcular.hidden = true;

    const $botonReiniciar = document.querySelector("#boton-reiniciar");
    $botonReiniciar.hidden = false;
}

const $botonReiniciar = document.querySelector("#boton-reiniciar");
$botonReiniciar.onclick = function () {
    window.location.reload();
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

function crearListaSalariosAnuales() {
    let salariosAnuales = document.querySelectorAll(".salario-anual");
    let listaSalariosAnuales = [];

    for (let i = 0; i < salariosAnuales.length; i++) {
        const salarioAnual = parseFloat(salariosAnuales[i].value);

        if (isNaN(salarioAnual) || salarioAnual <= 0) {
            continue;
        }

        if (salarioAnual < 0) {
            alert("Ingrese salarios anuales válidos");
            return;
        }

        listaSalariosAnuales.push(salarioAnual);
    }

    //AGREGAR SOLUCION PARA "SALARIO MAYOR ES: UNDEFINED", "PROMEDIO ES: NaN", ETC.

    return listaSalariosAnuales;
}

function calcularMenorSalarioAnual(listaSalariosAnuales) {
    salarioAnualMenor = listaSalariosAnuales[0];
    for (let i = 1; i < listaSalariosAnuales.length; i++) {
        if (listaSalariosAnuales[i] < salarioAnualMenor) {
            salarioAnualMenor = listaSalariosAnuales[i];
        }
    }
    return salarioAnualMenor;
}

function calcularMayorSalarioAnual(listaSalariosAnuales) {
    salarioAnualMayor = listaSalariosAnuales[0];
    for (let i = 1; i < listaSalariosAnuales.length; i++) {
        if (listaSalariosAnuales[i] > salarioAnualMayor) {
            salarioAnualMayor = listaSalariosAnuales[i];
        }
    }
    return salarioAnualMayor;

}
function calcularPromedioSalarioAnual(listaSalariosAnuales) {
    let sumaSalariosAnuales = 0;
    for (let i = 0; i < listaSalariosAnuales.length; i++) {
        sumaSalariosAnuales += listaSalariosAnuales[i];
    }
    return parseFloat(sumaSalariosAnuales / listaSalariosAnuales.length);
}

function calcularPromedioSalarioMensual(listaSalariosAnuales) {
    let sumaSalariosAnuales = 0;
    for (let i = 0; i < listaSalariosAnuales.length; i++) {
        sumaSalariosAnuales += listaSalariosAnuales[i];
    }
    return parseFloat((sumaSalariosAnuales / listaSalariosAnuales.length) / 12);
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
