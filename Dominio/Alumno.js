class Alumno{
    constructor(nombre, apellido, cedula, restricciones){
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula
        this.restricciones = restricciones
    }
    toString(){         
        return 'Nombre completo: ' + this.nombre + ' ' + this.apellido + ', Cédula: ' + this.cedula + ', Restricciones: ' + this.restricciones;
    }
}   
export default Alumno;
