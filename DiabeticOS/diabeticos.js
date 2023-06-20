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
  // Remove token from local storage
  localStorage.removeItem('token');
      
  // Redirect to 'index.html'
  window.location.href = 'index.html';
}

//Esta funcion solo direcciona al soporte técnico
function Soporte(){
  window.location.href = "soporte.html"
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
//Formulario de alarma
document.addEventListener("DOMContentLoaded", function() {
  var btnAgregarAlarma = document.getElementById("btnAgregarAlarma");
  var formAgregarAlarma = document.getElementById("formAgregarAlarma");

  btnAgregarAlarma.addEventListener("click", function() {
    formAgregarAlarma.classList.toggle("hidden");
  });
});

//Mensaje de alarma agregada
async function guardarDatosmedicamento(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  console.log('hello')

  const token = localStorage.getItem('token');
  const hora = document.getElementById('hora').value;
  const repetir = document.getElementById('repetir').value;
  const medicamento = document.getElementById('medicamento').value;

  // Crear objeto para enviar en la solicitud POST
  const data = {
    hora: hora,
    repetir: repetir,
    nombre: medicamento
  };

  try {
    // Configurar la solicitud POST
    const response = await fetch('http://localhost:3001/api/medicamento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Alarma registrada');
      window.location.href = 'alertas.html'; // Redirigir a alertas.html
    } else {
      throw new Error('Error en la solicitud');
    }
  } catch (error) {
    alert('Datos no válidos');
    console.error(error);
  }
}


function mostrarFormulariomedicamento() {
  var formulario = document.getElementById("formAgregarAlarma");
  formulario.classList.remove("hidden");

  // Ocultar elementos de las alarmas
  var alarmasContainer = document.getElementById("alarmsContainer");
  alarmasContainer.style.display = "none";
}

function ocultarFormulariomedicamento() {
  var formulario = document.getElementById("formAgregarAlarma");
  formulario.classList.add("hidden");
}

function mostrarAlarmasmedicamento() {
  var alarmasContainer = document.getElementById("alarmsContainer");
  alarmasContainer.style.display = "block";
}

//Formulario de alimento
document.addEventListener("DOMContentLoaded", function() {
  var btnAgregarAlimento= document.getElementById("btnAgregarAlimento");
  var formAgregarAlimento = document.getElementById("formAgregarAlimento");

  btnAgregarAlimento.addEventListener("click", function() {
    formAgregarAlimento.classList.toggle("hidden");
  });
});

//Mensaje de alimento agregado
async function guardarDatosalimento(event) {
  event.preventDefault();

  const nombre = document.getElementById('alimento').value;
  const cantidad = document.getElementById('cantidad').value;
  const unidad = document.getElementById('unidad').value;
  const hora = document.getElementById('hora').value;
  const fecha = document.getElementById('fecha').value;

  const data = {
    nombre: nombre,
    cantidad: cantidad,
    unidad: unidad,
    hora: hora,
    fecha: fecha
  };

  const token = localStorage.getItem('token');

  try {
    const response = await fetch('http://localhost:3001/api/dieta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Nueva dieta agregada')
      // Add code here to update the UI or perform any additional actions
    } else {
      throw new Error('Error: ' + response.status);
    }
  } catch (error) {
    alert('Datos incorrectos')
  }
}

function mostrarFormularioalimento() {
  var formulariodieta = document.getElementById("formAgregarAlimento");
  formulariodieta.classList.remove("hidden");

  // Ocultar elementos de las alarmas
  var dietsContainer = document.getElementById("dietsContainer");
  dietsContainer.style.display = "none";
}

function ocultarFormularioalimento() {
  var formulario = document.getElementById("formAgregarAlimento");
  formulario.classList.add("hidden");
}

function mostrarAlarmasalimento() {
  var dietsContainer = document.getElementById("dietsContainer");
  dietsContainer.style.display = "block";
}


//Formulario ejercicio
document.addEventListener("DOMContentLoaded", function() {
  var btnAgregarEjercicio= document.getElementById("btnAgregarEjercicio");
  var formAgregarEjercicio = document.getElementById("formAgregarEjercicio");

  btnAgregarEjercicio.addEventListener("click", function() {
    formAgregarEjercicio.classList.toggle("hidden");
  });
});

//Mensaje de alimento agregado
function guardarDatosejercicio(event) {
  event.preventDefault();

  const nombre = document.getElementById('ejercicio').value;
  const duracion = document.getElementById('tiempo').value;
  const fecha = document.getElementById('fecha').value;

  // Convert date to YYYY-MM-DD format
  let dateObject = new Date(fecha);
  let formattedDate = dateObject.toISOString().split('T')[0];

  const ejercicioData = {
      nombre: nombre,
      duracion: duracion,
      fecha: formattedDate
  };

  // Get token
  const token = localStorage.getItem('token');

  // Make the POST request
  fetch('http://localhost:3001/api/ejercicio', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(ejercicioData)
  })
  .then(response => {
    if (response.ok) {
        alert('Usuario ha modificado sus datos');
    } else {
        throw new Error('Failed to update user data');
    }
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Datos inválidos');
  });
} 

function mostrarFormularioejercicio() {
  var formularioejercicio = document.getElementById("formAgregarEjercicio");
  formularioejercicio.classList.remove("hidden");

  // Ocultar elementos de las alarmas
  var dietsContainer = document.getElementById("ExerciseTable");
  dietsContainer.style.display = "none";
}

function ocultarFormularioejercicio() {
  var formulario = document.getElementById("formAgregarEjercicio");
  formulario.classList.add("hidden");
}

function mostrarAlarmasejercicio(){
  var dietsContainer = document.getElementById("ExerciseTable");
  dietsContainer.style.display = "block";
}