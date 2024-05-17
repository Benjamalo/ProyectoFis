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
    const email = document.getElementById("inputEmail").value;
    const clave = document.getElementById("inputClave").value;
    if (comprueboRegistrado(email, clave)) {
      // Previene el envío del formulario
      event.preventDefault();
      mostrarNavbar(navbar);
      mostrarSeccion("pantallaInicio");
      console.log(`El usuario ${email} está registrado`);
    } else {
      console.log(`El usuario ${email} NO está registrado`);
    }
  });
});

function comprueboRegistrado(email, clave) {
  if (email && clave) {
    const listaUsers = sistema.obtenerListaUsuarios();
    const existe = listaUsers.filter(
      (e) => e.correoElectronico == email && e.clave == clave
    );

    if (existe.length) {
      return true;
    }
  }
}

// Función para mostrar la barra de navegación
function mostrarNavbar(navbar) {
  navbar.classList.remove("hidden");
}

const ulHTML = document.getElementById("listaAlumnos");
const listaAlumnos = sistema.obtenerListaAlunos();
listaAlumnos.forEach((al) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${al.nombre + " " + al.apellido}</p>`;
  ulHTML.appendChild(li);
});

const listaUsuarios = sistema.obtenerListaUsuarios();
const ulUsuarios = document.getElementById("listaUsuarios");
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
  console.log(sistema.obtenerListaUsuarios())
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
  const nombre = document.getElementById("registroNombre").value;
  const apellido = document.getElementById("registroApellido").value;
  const cedula = document.getElementById("registroCedula").value;
  const email = document.getElementById("registroEmail").value;
  const clave = document.getElementById("registroClave").value;
  const foto = document.getElementById("registroFoto").files[0];
  console.log(clave);
  const existeUser = sistema
    .obtenerListaUsuarios()
    .filter((e) => e.correoElectronico == email);
  console.log(existeUser);
  existeUser;
  sistema.agregarUsuario(nombre, apellido, cedula, email, clave, foto);

  mostrarNavbar(navbar);
  mostrarSeccion("pantallaInicio");
});
