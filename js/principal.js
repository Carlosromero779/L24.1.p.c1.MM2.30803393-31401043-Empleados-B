/*EMPLEADOS-B
*En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
*personal administrativo. La empresa necesita determinar cuánto es el total de sueldo (por
*empleado y por la empresa) que deberá pagar en la próxima nómina.
*Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
*el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana
*(obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos
*(administrativo) gana $150:
*Juan tendrá un sueldo de $120
*Ana tendrá un sueldo de $144
*Lin tendrá un sueldo de $220
*Mary tendrá un sueldo de $60
*Carlos tendrá un sueldo de $165
*El total de sueldo que debe pagar la empresa es de $709
*/
import Cl_empleados from "./Cl_empleados.js";
import Cl_empresa from "./Cl_empresa.js";
let empleado1 = new Cl_empleados("Juan", "obrero", 100);
let empleado2 = new Cl_empleados("Ana", "obrero", 120);
let empleado3 = new Cl_empleados("Lin", "administrativo", 200);
let empleado4 = new Cl_empleados("Mary", "obrero", 50);
let empleado5 = new Cl_empleados("Carlos", "administrativo", 150);
let empresa = new Cl_empresa();

empresa.procesarEmpleados(empleado1);
empresa.procesarEmpleados(empleado2);
empresa.procesarEmpleados(empleado3);
empresa.procesarEmpleados(empleado4);
empresa.procesarEmpleados(empleado5);
 let salida = document.getElementById("salida");
 salida.innerHTML = `<br> ${empleado1.nombre} tendrá un sueldo de $${empleado1.nuevoSueldo()} `;
 salida.innerHTML += `<br> ${empleado2.nombre} tendrá un sueldo de $${empleado2.nuevoSueldo()}`;
 salida.innerHTML += `<br> ${empleado3.nombre} tendrá un sueldo de $${empleado3.nuevoSueldo()}`;
 salida.innerHTML += `<br> ${empleado4.nombre} tendrá un sueldo de $${empleado4.nuevoSueldo()}`;
 salida.innerHTML += `<br> ${empleado5.nombre} tendrá un sueldo de $${empleado5.nuevoSueldo()} <br>`;
 salida.innerHTML += `<br> El total de sueldo que debe pagar la empresa es de $${empresa.sueldoPagarEmpresa()} <br>`;
