const numeros = document.querySelectorAll('li');

function calcularPromedio() {
    let sumaNumeros = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaNumeros += parseInt(numeros[i].innerText);
    }

    let promedio = sumaNumeros / numeros.length
    document.querySelector('#promedio').innerText = `El promedio es ${promedio}.`;
}

calcularPromedio()

function buscarNumeroMasBajo() {
    let numeroMasBajo = numeros[0].innerText;

    for (i = 1; i < numeros.length; i++) {
        if (numeros[i].innerText < numeroMasBajo) {
            numeroMasBajo = numeros[i].innerText;
        }
    }
    document.querySelector('#numero-mas-bajo').innerText = `El número más pequeño es ${numeroMasBajo}.`;
}
buscarNumeroMasBajo();

function buscarNumeroMasAlto() {
    let numeroMasAlto = numeros[0].innerText;

    for (i = 1; i < numeros.length; i++) {
        if (Number(numeros[i].innerText) > numeroMasAlto) {
            numeroMasAlto = numeros[i].innerText;
        }
    }
    document.querySelector('#numero-mas-alto').innerText = `El número mas grande es ${numeroMasAlto}.`;
}
buscarNumeroMasAlto();

function buscarNumeroMasRepetido() {
    let numeroMasRepetido = numeros[0];
    let cantidadNumeroMasRepetido = 0;

    for (let i = 0; i < numeros.length; i++) {
        let numeroActual = 0;

        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i].textContent === numeros[j].textContent) {
                numeroActual++;
                if (numeroActual > cantidadNumeroMasRepetido) {
                    numeroMasRepetido = numeros[i].textContent;
                    cantidadNumeroMasRepetido++;
                }
            }
        }
        numeroActual = 0;
    }
    document.querySelector('#numero-mas-repetido').innerText = `El número más repetido es ${numeroMasRepetido}.`
}

buscarNumeroMasRepetido();
