import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { mostrarMensajeConsola, opcionesCliente, opcionesPaciente, opcionesGestionRed, opcionesProveedor, opcionesTipoGestion } from "./configuracionOpciones";
import { bajaCliente, modificarCliente, mostrarClientes, recibirVisitaSucursal, registrarCliente } from "./gestionCliente";
import { bajaPaciente, modificarPaciente, mostrarPacientes } from "./gestionPaciente";
import { bajaProveedor, modificarProveedor, mostrarProveedores, registrarProveedor } from "./gestionProveedor";
import { bajaSucursal, modificarSucursal, mostrarSucursales, registrarSucursal } from "./gestionRed";
import { obtenerDatoNumerico, salir, setSalir } from "./readlineSync";
import pc from "picocolors";

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
                setSalir(true);
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
                break;
        }

    } while (opcion !== 0 && !salir);
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
                return;
            case 2:
                verificarOpcionesPaciente(centralVeterinaria, ids)
                break;
            case 3:
                verificarOpcionesProveedor(centralVeterinaria, ids);
                break;
            case 4:
                return;
            case 0:
                setSalir(true);
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
                break;
        }
    } while (opcion !== 0 && !salir);
}

// VERIFICAR OPCIONES GESTION CLIENTE
export function verificarOpcionesCliente(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesCliente);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                bajaCliente(centralVeterinaria);
                break;
            case 2:
                modificarCliente(centralVeterinaria);
                break;
            case 3:
                registrarCliente(centralVeterinaria, ids);
                break;
            case 4:
                mostrarClientes(centralVeterinaria);
                break;
            case 5:
                recibirVisitaSucursal(centralVeterinaria);
                break;
            case 6:
                return;
            case 0:
                setSalir(true);
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
                break;
        }
    } while (opcion !== 0 && !salir);
}

// VERIFICAR OPCIONES GESTION PROVEEDOR
export function verificarOpcionesProveedor(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesProveedor);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                bajaProveedor(centralVeterinaria);
                break;
            case 2:
                modificarProveedor(centralVeterinaria);
                break;
            case 3:
                registrarProveedor(centralVeterinaria, ids);
                break;
            case 4:
                mostrarProveedores(centralVeterinaria);
                break;
            case 5:
                return;
            case 0:
                setSalir(true)
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
                break;
        }
    } while (opcion !== 0 && !salir);
}

// VERIFICAR OPCIONES GESTION PACIENTE
export function verificarOpcionesPaciente(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesPaciente);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                bajaPaciente(centralVeterinaria);
                break;
            case 2:
                modificarPaciente(centralVeterinaria);
                break;
            case 3:
                mostrarPacientes(centralVeterinaria);
                break;
            case 4:
                return;
            case 0:
                setSalir(true);
                return;
            default:
                console.log(pc.magenta("Opcion no valida, intente nuevamente."));
                break;
        }
    } while (opcion !== 0 && !salir);
}