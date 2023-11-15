// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*

// TAREA 1 CON INTERPOLACION

let nombreDeUsuario = prompt('¿Cuál es tu nombre?');
if (nombreDeUsuario.toLowerCase() === 'pablo') {
    console.log(`¡Hola, Tocayo! Yo también me llamo ${nombreDeUsuario}.`);
} else if (nombreDeUsuario.toLowerCase() === 'juan') {
    console.log(`Hola, ${nombreDeUsuario}. Te llamás igual que mi papá.`);
} else {
    console.log(`¡Hola, ${nombreDeUsuario}!`);
}

*/

/*
// TAREA 1

MI_NOMBRE = 'pablo';
NOMBRE_MADRE = 'irma';

let nombreUsuario = (prompt('¿Cuál es tu nombre?') || '').toLowerCase();
if (MI_NOMBRE === nombreUsuario) {
    console.log(`¡Hola, Tocayo! Yo también me llamo ${MI_NOMBRE}`);
} else if (NOMBRE_MADRE === nombreUsuario) {
    console.log(`Hola, ${nombreUsuario}. Te llamás igual que mi mamá.`);
} else if (nombreUsuario.trim().length === 0) {
    console.log(`No ingresaste ningún nombre.`);
} else {
    console.log(`¡Hola, ${nombreUsuario}!`);
}
*/

/*
// TAREA 2

const MI_EDAD = 32;
const TEXTO_PREGUNTA_EDAD = '¿Cuál es tu edad?';

let edadUsuario = number(prompt(TEXTO_PREGUNTA_EDAD));

if (MI_EDAD === edadUsuario) {
    console.log('Tenemos la misma edad.');
} else if (MI_EDAD > edadUsuario) {
    console.log('Tenés menos años que yo.');
} else if (MI_EDAD < edadUsuario) {
    console.log('Tenés más años que yo.');
} else {
    console.log('No entendí tu respuesta');
}
*/

// TAREA 3

const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';
const EDAD_MINIMA_PARA_ENTRAR = 18;

const USUARIO_TIENE_DNI = (prompt('¿Tiene documento?') || '').toLowerCase();

if (USUARIO_TIENE_DNI.toLowerCase() === RESPUESTA_SI) {
    const edadUsuario = Number(prompt('¿Cuál es su edad?'));

    if (EDAD_MINIMA_PARA_ENTRAR <= edadUsuario) {
        console.log('Puede entrar.');
    } else if (EDAD_MINIMA_PARA_ENTRAR > edadUsuario) {
        console.log('No puede entrar.');
    } else {
        console.log('No entendí su respuesta.');
    }

} else if (USUARIO_TIENE_DNI.toLowerCase() === RESPUESTA_NO) {
    console.log('No puede entrar al bar.');

} else {
    console.log('No entendí su respuesta.');
}
