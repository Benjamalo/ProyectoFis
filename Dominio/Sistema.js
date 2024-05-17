import Alumno from "./Alumno.js";
import Usuario from "./Usuario.js";
class Sistema {
  constructor() {
    this.alumnos = [
      { nombre: "Juan", apellido: "Perez", cedula: 41, restricciones: "Carne" },
    ];
    this.usuarios = [
      {
        nombre: "Eloisa",
        apellido: "Teixeira",
        cedula: 566,
        correoElectronico: "eloisatex@gmail.com",
        img: "",
        admin: false,
      },
      {
        nombre: "Benjamin",
        apellido: "Malo",
        cedula: 123,
        correoElectronico: "benjamalo02@gmail.com",
        img: "",
        admin: true,
      },
    ];
  }

  agregarAlumno(nombre, apellido, cedula, restricciones) {
    const alumno = new Alumno(nombre, apellido, cedula, restricciones);
    this.alumnos.push(alumno);
  }
  obtenerListaAlunos() {
    return this.alumnos;
  }
  obtenerListaUsuarios() {
    return this.usuarios;
  }
}

export default Sistema;
