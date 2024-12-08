import pc from "picocolors";
import { Veterinaria } from "../poo/Veterinaria";
import { obtenerDato, obtenerDatoNumerico } from "./readlineSync";

// FUNCION PARA PEDIR EL ID DE CLIENTE DESDE CONSOLA
export function pedirIdCliente(veterinaria: Veterinaria): string | null {
    // LISTA DE IDENTIFICADORES DE CLIENTES
    const idsClientes: string[] | null = veterinaria.getIdsClientes();

    // SI ID DE CLIENTE ES INDEFINIDO O ARREGLO VACIO
    if (!idsClientes || idsClientes.length === 0) {
        console.log(pc.yellow("No hay Clientes registrados."));
        return null;
    }
    // PEDIR ID DE CLIENTE AL USUARIO
    const idSeleccionado: string = obtenerDato(pc.bold("Ingrese el ID del cliente: "));

    // SI EL ID INGRESADO POR EL USUARIO ESTA INCLUIDO EN EL ARREGLO DE ID DE CLIENTES.
    if (idsClientes.includes(idSeleccionado)) {
        return idSeleccionado;
    } else {
        console.log(pc.magenta("El ID ingresado no corresponde a ningun cliente."));
        return null;
    }
}


// FUNCION PARA PEDIR EL ID DE PACIENTE DESDE CONSOLA
export function pedirIdPaciente(veterinaria: Veterinaria): number | null {
    // LISTA DE IDENTIFICADORES DE  PACIENTES
    const idsPacientes: number[] | null = veterinaria.getIdsPacientes();
    // SI ID PACIENTES ES INDEFINIDO O ARREGLO VACIO
    if (!idsPacientes || idsPacientes.length === 0) {
        console.log(pc.yellow("No hay Pacientes registrados."));
        return null;
    }
    // PEDIR ID DE PACIENTE AL USUARIO
    const idSeleccionado: number = obtenerDatoNumerico(pc.bold("Ingrese el ID del paciente: "));

    // SI EL ID INGRESADO POR EL USUARIO ESTA INCLUIDO EN EL ARREGLO DE ID DE PACIENTES.
    if (idsPacientes.includes(idSeleccionado)) {
        return idSeleccionado;
    } else {
        console.log(pc.magenta("El ID ingresado no corresponde a ningun paciente."));
        return null;
    }
}


// FUNCION PARA PEDIR EL ID DE PROVEEDOR DESDE CONSOLA
export function pedirIdProveedor(veterinaria:Veterinaria): string | null {
   // LISTA DE IDENTIFICADORES DE PROVEEDORES
   const idsProveedores: string[] | null = veterinaria.getIdsProveedores();

    // SI ID PROVEEDORES ES INDEFINIDO O ARREGLO VACIO
    if (!idsProveedores || idsProveedores.length === 0) {
        console.log(pc.yellow("No hay Proveedores registrados."));
        return null;
    }
    // PEDIR ID DE SUCURSAL AL USUARIO
    const idSeleccionado: string = obtenerDato(pc.bold("Ingrese el ID del proveedor: "));

    // SI EL ID INGRESADO POR EL USUARIO ESTA INCLUIDO EN EL ARREGLO DE ID DE PROVEEDORES.
    if (idsProveedores.includes(idSeleccionado)) {
        return idSeleccionado;
    } else {
        console.log(pc.magenta("El ID ingresado no corresponde a ningun proveedor."));
        return null;
    }
}