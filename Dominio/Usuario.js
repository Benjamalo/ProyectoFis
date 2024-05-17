class Usuario{
    constructor(nombre,apellido,cedula, correoElectronico, img, admin = false){
        this.nombre= nombre
        this.apellido = apellido
        this.cedula = cedula
        this.correoElectronico = correoElectronico
        this.img = img
        this.admin = admin
    }
    get getNombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
    get getCedula(){
        return this.cedula
    }
    get getCorreo(){
        return this.correoElectronico
    }
    get getImg(){
        return this.img
    }
    get getAdmin(){
        return this.admin
    }
    /**
     * @param {any} nombre
     */
    set setNombre(nombre){
        this.nombre = nombre
    }
    /**
     * @param {any} apellido
     */
    set setApellido(apellido){
        this.apellido = apellido
    }
    /**
     * @param {any} ci
     */
    set setCedula(ci){
        this.cedula = ci
    }
    /**
     * @param {any} correo
     */
    set setCorreo(correo){
        this.correoElectronico = correo
    }
    /**
     * @param {any} img
     */
    set setImg(img){
        this.img = img
    }
    toString(){
        return 'Nombre completo: ', this.getNombreCompleto ,' Cédula: ',this.getCedula, ' Correo Electrónico: ', this.getNombreCompleto
    }
}
export default Usuario