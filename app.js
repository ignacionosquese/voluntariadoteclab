let pantallaClima = document.querySelector('#pantallaClima');
let iconoClima = document.querySelector('#icono');
let fecha = new Date;
console.log(fecha);  
let suscripcionExitosa = document.getElementById('suscripcionExitosa');  



let hora = fecha.getHours();
let minutos = fecha.getMinutes();
console.log(hora,minutos);

let diaSemana =  ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`);
let horaActual = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()} ${hora} : ${minutos}`;



//pantallaClima.innerHTML = 'Hola Mundo';

/*if (navigator.geolocation){

    navigator.geolocation.getCurrentPosition(posicion => {console.log(posicion)});

}*/


let lat = -34.3744588;
let lon = -58.8644352;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d3861c7c7f44fed005be2abd3e8d5f7c&units=metric`;
console.log (url);

/*const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenosaires&appid=d3861c7c7f44fed005be2abd3e8d5f7c`;
console.log(url);*/


fetch(url)
.then (response => {return response.json()})
.then (data => {console.log (data.main.temp)

    let temp = Math.round(data.main.temp);
    console.log(data.weather[0].icon);
    let iconCode = data.weather[0].icon;
    const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`;
    console.log(urlIcon);

    pantallaClima.innerHTML = `Pilar ${horaActual}  ${temp} °C`;
    iconoClima.src = `${urlIcon}`;
    

})

.catch (error => {console.log(error)})


const checks=document.querySelectorAll('.form-check-input');
console.log(checks);
const botonSuscripcion = document.querySelector('#botonSuscripcion');


botonSuscripcion.addEventListener('click', function(){

    checks.forEach((e)=>{
        if (e.checked == true){
            sessionStorage.setItem(e.id,e.value);
        }
    })

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var mail = document.getElementById('mail');
    var password = document.getElementById('password');

    sessionStorage.setItem(nombre.id, nombre.value);
    sessionStorage.setItem(apellido.id, apellido.value);
    sessionStorage.setItem(mail.id, mail.value);
    sessionStorage.setItem(password.id, password.value);

    suscripcionExitosa.innerHTML = "Gracias por suscribirse a Voces del Pilar";

    const usuario = sessionStorage.getItem('mail');
    const contrasena = sessionStorage.getItem('password');
    
        console.log(usuario, contrasena);

})



/*const iniciarSesion = document.querySelector('#iniciarSesion');
let registracionExitosa = document.getElementById('registracionExitosa');

iniciarSesion.addEventListener('click', function(){

    let usuarioIngresado = document.getElementById('usuario').value;
    let contrasenaIngresada = document.getElementById('contrasena').value;

    if (contrasenaIngresada == sessionStorage.getItem('password') && usuarioIngresado == sessionStorage.getItem('mail')){

        registracionExitosa.innerHTML = "Gracias por iniciar sesion";

    }
    else{

        registracionExitosa.innerHTML = "Usuario o contraseña incorrectos";
    }


})*/



