const $botonTiempoTotal = document.querySelector('#calcular-tiempo-total');
$botonTiempoTotal.onclick = function () {

    let horasTotal = 0;
    let minutosTotal = 0;
    let segundosTotal = 0;

    for (let i = 1; i < 5; i++) {
        const horas = Number(document.querySelector(`#horas-video-${i}`).value)
        const minutos = Number(document.querySelector(`#minutos-video-${i}`).value)
        const segundos = Number(document.querySelector(`#segundos-video-${i}`).value)

        horasTotal += horas;
        minutosTotal += minutos;
        segundosTotal += segundos;
    }

    minutosTotal += Math.floor(segundosTotal / 60);
    segundosTotal %= 60;

    horasTotal += Math.floor(minutosTotal / 60);
    minutosTotal %= 60;

    tiempoTotal = `La duración total es de: ${String(horasTotal).padStart(2, '0')}:${String(minutosTotal).padStart(2, '0')}:${String(segundosTotal).padStart(2, '0')}`

    document.querySelector('#tiempo-total').innerText = tiempoTotal;
}
