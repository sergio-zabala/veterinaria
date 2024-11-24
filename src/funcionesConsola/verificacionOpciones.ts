import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { mostrarMensajeConsola, opcionesCliente, opcionesPaciente, opcionesGestionRed, opcionesProveedor, opcionesTipoGestion } from "./configuracionOpciones";
import { mostrarClientes, registrarCliente } from "./gestionCliente";
import { mostrarPacientes } from "./gestionPaciente";
import { mostrarProveedores, registrarProveedor } from "./gestionProveedor";
import { bajaSucursal, modificarSucursal, mostrarSucursales, registrarSucursal } from "./gestionRed";
import { obtenerDatoNumerico } from "./readlineSync";
import pc from "picocolors";

// VERIFICAR OPCIONES GESTION CLIENTE
export function verificarOpcionesCliente(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesCliente);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                console.log("Dar de baja Cliente por su id");
                break;
            case 2:
                console.log("Modificar un cliente por su id");
                break;
            case 3:
                registrarCliente(centralVeterinaria, ids);
                break;
            case 4:
                mostrarClientes(centralVeterinaria);
                break;
            case 5:
                menuRedPrincipal(centralVeterinaria, ids);
                break;
            case 0:
                console.log(pc.cyan("¡Hasta luego!"));
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
        }
    } while (opcion !== 0);
}

// VERIFICAR OPCIONES GESTION PROVEEDOR
export function verificarOpcionesProveedor(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesProveedor);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                console.log("Dar de baja proveedor por su id");
                break;
            case 2:
                console.log("Modificar un proveedor por su id");
                break;
            case 3:
                registrarProveedor(centralVeterinaria, ids);
                break;
            case 4:
                mostrarProveedores(centralVeterinaria);
                break;
            case 5:
                menuRedPrincipal(centralVeterinaria, ids);
                break;
            case 0:
                console.log(pc.cyan("¡Hasta luego!"));
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
        }
    } while (opcion !== 0);
}

// VERIFICAR OPCIONES GESTION PACIENTE
export function verificarOpcionesPaciente(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesPaciente);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                console.log("Dar de baja Paciente por su id");
                break;
            case 2:
                console.log("Modificar un paciente por su id");
                break;
            case 3:
                mostrarPacientes(centralVeterinaria);
                break;
            case 4:
                menuRedPrincipal(centralVeterinaria, ids);
                break;
            case 0:
                console.log(pc.cyan("¡Hasta luego!"));
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
        }
    } while (opcion !== 0);
}

// VERIFICAR OPCIONES MENU PRINCIPAL
export function menuRedPrincipal(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesGestionRed);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                mostrarSucursales(centralVeterinaria);
                break;
            case 2:
                registrarSucursal(centralVeterinaria, ids);
                break;
            case 3:
                bajaSucursal(centralVeterinaria)
                break;
            case 4:
                modificarSucursal(centralVeterinaria);
                break;
            case 5:
                verificarOpcionesTipoGestion(centralVeterinaria, ids)
                break;
            case 0:
                console.log(pc.cyan("¡Hasta luego!"));
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
        }
    } while (opcion !== 0);
}

// VERIFICAR ENTRADA DEL MENU DE OPCIONES DEL TIPO DE GESTION
export function verificarOpcionesTipoGestion(centralVeterinaria: CentralVeterinaria, ids: string[]) {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesTipoGestion);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                verificarOpcionesCliente(centralVeterinaria, ids)
                break;
            case 2:
                verificarOpcionesPaciente(centralVeterinaria, ids)
                break;
            case 3:
                verificarOpcionesProveedor(centralVeterinaria, ids);
                break;
            case 4:
                menuRedPrincipal(centralVeterinaria, ids);
                break;
            case 0:
                console.log(pc.cyan("¡Hasta luego!"));
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
        }
    } while (opcion !== 0);
}