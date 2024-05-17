import Sistema from "../Dominio/Sistema.js";
const sistema = new Sistema();
// sistema.agregarAlumno('Juan', 'Perez', 41, 'Carne');
// sistema.agregarAlumno('Camila', 'Guarnieri', 25, 'lactosa');
// sistema.agregarAlumno('Avril', 'Carmona', 17, 'Jamón');
// sistema.agregarAlumno('Benjamin', 'Malo', 22, 'Chocolate');

document.addEventListener("DOMContentLoaded", function () {
  mostrarSeccion("pantallaLogin");
  const navbar = document.getElementById("navBar");
  navbar.classList.add("hidden");

  const formLogin = document.querySelector("#pantallaLogin");
  formLogin.addEventListener("submit", function (event) {
    const email = document.getElementById('inputEmail').value
    // Previene el envío del formulario
    if(comprueboRegistrado(email)){
      event.preventDefault();
      mostrarNavbar(navbar);
      mostrarSeccion("pantallaInicio");
    };
  });
});

function comprueboRegistrado(email) {
  if(email){

  }
}

// Función para mostrar la barra de navegación
function mostrarNavbar(navbar) {
  navbar.classList.remove("hidden");
}

const listaAlumnos = sistema.obtenerListaAlunos();
console.log(listaAlumnos);
const listaUsuarios = sistema.obtenerListaUsuarios();
const ulUsuarios = document.getElementById("listaUsuarios");
const ulHTML = document.getElementById("listaAlumnos");
listaUsuarios.forEach((us) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${us.nombre + " " + us.apellido + " " + us.cedula}</p>
    <p>${us.correoElectronico}</p>
    <img src="${us.img}"></img>
    <p>Admin: ${us.admin}</p>
    `;
  ulUsuarios.appendChild(li);
});
const botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener("click", () => {
  let nombreAlumno = document.getElementById("inputAlumno").value;
  const li = document.createElement("li");
  li.textContent = nombreAlumno;
  ulHTML.appendChild(li);
  sistema.agregarAlumno(nombreAlumno);
  document.getElementById("inputAlumno").value = "";
  console.log(sistema.obtenerListaAlunos());
});

listaAlumnos.forEach((al) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${al.nombre + " " + al.apellido}</p>`;
  ulHTML.appendChild(li);
});

function mostrarSeccion(seccionId) {
  var secciones = document.querySelectorAll(
    "#pantallaInicio, #pantallaMisReservas, #pantallaLogin, #pantallaRegistro"
  );
  if (seccionId != "pantallaLogin") {
    document.getElementById("pantallaLogin").classList.remove("cardLogin");
  }
  if (seccionId == "pantallaRegistro") {
    document.getElementById("pantallaRegistro").classList.add("card");
  } else {
    document.getElementById("pantallaRegistro").classList.remove("card");
  }
  secciones.forEach(function (seccion) {
    seccion.classList.add("hidden");
  });
  var seccionAMostrar = document.getElementById(seccionId);
  seccionAMostrar.classList.remove("hidden");
}

var logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  mostrarSeccion("pantallaInicio");
});

var registro = document.getElementById("botonPantallaRegistro");
registro.addEventListener("click", function (event) {
  event.preventDefault(); //Cancela el evnío del formulario

  mostrarSeccion("pantallaRegistro");
});

var enlaces = document.querySelectorAll(".nav-link");
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function (event) {
    var seccionId = event.target.getAttribute("href").substring(1);
    mostrarSeccion(seccionId);
  });
});

const formularioRegistro = document.querySelector("#pantallaRegistro");

formularioRegistro.addEventListener("submit", function () {
  const navbar = document.getElementById("navBar");

  mostrarNavbar(navbar);
  mostrarSeccion("pantallaInicio");
});
