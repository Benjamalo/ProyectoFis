class Usuario {
  constructor(
    nombre,
    apellido,
    cedula,
    correoElectronico,
    clave,
    img,
    admin = false
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.correoElectronico = correoElectronico;
    this.clave = clave;
    this.img = img;
    this.admin = admin;
  }
  get getNombre() {
    return this.nombre;
  }
  get getApellido() {
    return this.apellido;
  }
  get getCedula() {
    return this.cedula;
  }
  get getCorreo() {
    return this.correoElectronico;
  }
  get getClave() {
    return this.clave;
  }
  get getImg() {
    return this.img;
  }
  get getAdmin() {
    return this.admin;
  }
  /**
   * @param {any} nombre
   */
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  /**
   * @param {any} apellido
   */
  set setApellido(apellido) {
    this.apellido = apellido;
  }
  /**
   * @param {any} ci
   */
  set setCedula(ci) {
    this.cedula = ci;
  }
  /**
   * @param {any} correo
   */
  set setCorreo(correo) {
    this.correoElectronico = correo;
  }
  /**
     * @param {any} clave
     */
  set setClave(clave) {
    this.clave = clave;
  }
  /**
   * @param {any} img
   */
  set setImg(img) {
    this.img = img;
  }
  toString() {
    return (
      "Nombre: ",
      this.getNombre,
      "Apellido: ",
      this.apellido,
      " Cédula: ",
      this.getCedula,
      " Correo Electrónico: ",
      this.getCorreo,
      "Clave: ",
      this.getClave,
      "Foto: ",
      this.getImg,
      "Admin: ",
      this.getAdmin
    );
  }
}
export default Usuario;
