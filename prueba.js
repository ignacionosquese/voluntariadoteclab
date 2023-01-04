const iniciarSesion = document.querySelector('#iniciarSesion');
let registracionExitosa = document.getElementById('registracionExitosa');
let bienvenido = document.getElementById('bienvenido');

iniciarSesion.addEventListener('click', function(){

    let usuarioIngresado = document.getElementById('usuario').value;
    let contrasenaIngresada = document.getElementById('contrasena').value;

    if (contrasenaIngresada == sessionStorage.getItem('password') && usuarioIngresado == sessionStorage.getItem('mail')){

        registracionExitosa.innerHTML = "Gracias por iniciar sesion";
        //bienvenido.innerHTML = `Bienvenido ${usuarioIngresado} `;
        //window.location = "index.html";
        bienvenido.innerHTML = `Bienvenido ${usuarioIngresado}`;

    }
    else{

        registracionExitosa.innerHTML = "Usuario o contraseña incorrectos";
       
    }


})