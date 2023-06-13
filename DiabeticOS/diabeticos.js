//Mensaje de flotante
function mostrarMensaje(mensaje) {
  var mensajeFlotante = document.getElementById("mensaje-flotante");
  mensajeFlotante.textContent = mensaje;
  mensajeFlotante.style.display = "block";

  if (
    mensaje === "Inicio de sesión exitoso. ¡Bienvenido!" ||
    mensaje === "Usuario registrado con éxito. ¡Bienvenido!"
  ) {
    setTimeout(function() {
      mensajeFlotante.style.display = "none";
      if (mensaje === "Usuario registrado con éxito. ¡Bienvenido!") {
        window.location.href = "index.html"; // Reemplaza con la URL correspondiente
      } else {
        window.location.href = "comunidad.html"; // Reemplaza con la URL correspondiente
      }
    }, 3000);
  } else {
    var btnAceptar = document.createElement("button");
    btnAceptar.textContent = "Aceptar";
    btnAceptar.classList.add("btn-aceptar");
    btnAceptar.addEventListener("click", function() {
      mensajeFlotante.style.display = "none";
    });

    mensajeFlotante.appendChild(btnAceptar);
  }
}

//funcion de inicio de sesion
function iniciarSesion() {
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("contraseña").value;

  if (email === '' || contraseña === '') {
    mostrarMensaje("Por favor, ingresa tu correo y contraseña.");
    return;
  }

  if (email === 'jairivansalas@gmail.com' && contraseña === '1234') {
    mostrarMensaje("Inicio de sesión exitoso. ¡Bienvenido!");
  } else {
    mostrarMensaje("Credenciales inválidas. Por favor, intenta nuevamente.");
  }
}


//Esta funcion soo redirecciona a inicio
function cerrarSesion() {
  window.location.href = "index.html";
}

//Formulario de crear cuenta
function CrearCuenta() {
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var date = document.getElementById("date").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var contraseña = document.getElementById("contraseña").value;
  var contraseñac = document.getElementById("contraseñac").value;
  
  if (name === '' || lastname === '' || date === '' || email === '' || phone =='' 
  || contraseña === '' || contraseñac === '') {
    mostrarMensaje("Todos los campos son obligatorios");
    return;
  }
  if (contraseña ===  contraseñac ) {
    mostrarMensaje("Usuario registrado con éxito. ¡Bienvenido!");
    setTimeout(function() {
      mostrarMensaje(""); 
      window.location.href = "index.html"; 
    }, 4000); 
  } else {
    mostrarMensaje("Las contraseñas no coinciden");
  }
}

function redireccionarFormulario() {
  window.location.href = "registro.html"; // Reemplaza con la URL del formulario de creación de cuenta
}

function redireccionarInicioSesion() {
  window.location.href = "index.html"; // Reemplaza con la URL del formulario de iniciar sesión
}


document.addEventListener("DOMContentLoaded", function() {
  const newsItems = document.querySelectorAll(".news-item");


function animateNewsItems() {
  newsItems.forEach(function(item) {
    if (isElementInViewport(item)) {
      item.classList.add("animate");
    }
  });
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", animateNewsItems);


animateNewsItems();
});

function redirectToPage(url) {
  window.open(url, '_blank');
}

// Obtener el elemento del reloj por su ID
var clock = document.getElementById("clock");

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el elemento del reloj por su ID
  var clock = document.getElementById("clock");

  // Actualizar la hora y la fecha cada segundo
  function updateClock() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Los meses se indexan desde 0, se suma 1 para obtener el número de mes correcto
    var year = currentDate.getFullYear();

    // Formatear la hora y la fecha
    var time = hours + ":" + padZero(minutes) ;
    var date = day + "/" + month + "/" + year;

    // Actualizar el contenido del reloj
    clock.innerHTML = "Hora: " + time + "<br>Fecha: " + date;
  }

  // Función para agregar un cero inicial a los números de un solo dígito
  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  // Actualizar el reloj inicialmente y luego cada segundo
  updateClock();
  setInterval(updateClock, 1000);
});
