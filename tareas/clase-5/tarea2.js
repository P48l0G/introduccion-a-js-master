const $botonIngresar = document.querySelector('#ingresar');
$botonIngresar.onclick = function () {
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidosUsuario = document.querySelector('#apellidos-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;
    const informacionUsuario = mostrarInformacionUsuario(primerNombreUsuario, segundoNombreUsuario, apellidosUsuario, edadUsuario);
    const tituloBienbenida = document.querySelector('h1');
    document.querySelector('#informacion-usuario').textContent = informacionUsuario;
    tituloBienbenida.textContent = `Bienvenido ${primerNombreUsuario}!`;
}

function mostrarInformacionUsuario(primerNombreUsuario, segundoNombreUsuario, apellidosUsuario, edadUsuario) {
    return `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidosUsuario}, ${edadUsuario}`
}
