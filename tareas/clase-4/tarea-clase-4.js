// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i <= 22; i += 3) {
    console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let numero = 11;

while (numero > 1) {
    numero -= 1;
    console.log(numero)
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
function fizzBuzz1() {
console.log('---------------------FizzBuzz 1');
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz1();

// otra solución

function fizzBuzz2() {
console.log('---------------------FizzBuzz 2');
    for (let i = 1; i <= 50; i++) {
        let texto = '';

        if (i % 3 === 0) {
            texto = 'Fizz';
        }
        if (i % 5 === 0) {
            texto = texto + 'Buzz';
        }
        console.log(texto || i);
    }
}
fizzBuzz2();

// otra solución
function fizzBuzz3() {
    console.log('---------------------FizzBuzz 3');

    for (let i = 1; i <= 50; i++) {
        let texto = '';

        if (i % 3 === 0) {
            texto = 'Fizz';
        }
        if (i % 5 === 0) {
            texto += 'Buzz';
        }
        console.log(texto || i);
    }
}

fizzBuzz3();

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedio(numeros) {
    let sumaNumeros = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumaNumeros += numeros[i];
    }
    return sumaNumeros / numeros.length;
}
let numeros = [2, 3, 5, 6];
console.log(`El promedio es ${calcularPromedio(numeros)}`);
