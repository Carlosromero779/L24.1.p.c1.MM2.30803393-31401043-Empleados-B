export default class Cl_empresa{
    constructor(){
        this.acumSueldos = 0;
    }
    procesarEmpleados(empleados){
        this.acumSueldos+= empleados.nuevoSueldo();
}
sueldoPagarEmpresa(){
    return this.acumSueldos;
}
}