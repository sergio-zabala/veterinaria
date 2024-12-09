import { GestionCentral } from "../poo/crud/GestionCentral";
import { GestionCliente } from "../poo/crud/GestionCliente";
import { GestionPaciente } from "../poo/crud/GestionPaciente";
import { GestionProveedor } from "../poo/crud/GestionProveedor";
import { GestionVeterinaria } from "../poo/crud/GestionVeterinaria";
import { mostrarMensajeConsola, opcionesCliente, opcionesPaciente, opcionesGestionRed, opcionesProveedor, opcionesTipoGestion } from "./configuracionOpciones";
import { obtenerDatoNumerico, salir, setSalir } from "./readlineSync";
import pc from "picocolors";

// INSTANCIAS
const central:GestionCentral= new GestionCentral();
const gestionVet:GestionVeterinaria=new GestionVeterinaria(central);
const gestionPaciente:GestionPaciente=new GestionPaciente(central, gestionVet);
const gestionCliente:GestionCliente= new GestionCliente(central, gestionVet, gestionPaciente);
const gestionProveedor:GestionProveedor= new GestionProveedor(central, gestionVet);


// VERIFICAR OPCIONES MENU PRINCIPAL
export function menuRedPrincipal(ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesGestionRed);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                central.mostrar();
                break;
            case 2:
                central.registrar(ids);
                break;
            case 3:
                central.baja()
                break;
            case 4:
                central.modificar();
                break;
            case 5:
                verificarOpcionesTipoGestion(ids)
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
export function verificarOpcionesTipoGestion(ids: string[]) {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesTipoGestion);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                verificarOpcionesCliente(ids)
                return;
            case 2:
                verificarOpcionesPaciente()
                break;
            case 3:
                verificarOpcionesProveedor(ids);
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
export function verificarOpcionesCliente(ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesCliente);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                gestionCliente.baja();
                break;
            case 2:
                gestionCliente.modificar();
                break;
            case 3:
                gestionCliente.registrar(ids);
                break;
            case 4:
                gestionCliente.mostrar();
                break;
            case 5:
                gestionVet.recibirVisitaSucursal();
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
export function verificarOpcionesProveedor(ids: string[]): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesProveedor);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                gestionProveedor.baja();
                break;
            case 2:
                gestionProveedor.modificar();
                break;
            case 3:
                gestionProveedor.registrar(ids);
                break;
            case 4:
                gestionProveedor.mostrar();
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
export function verificarOpcionesPaciente(): void {
    let opcion: number;
    do {
        mostrarMensajeConsola(opcionesPaciente);
        opcion = obtenerDatoNumerico(pc.bold("Seleccione una opcion: "));

        switch (opcion) {
            case 1:
                gestionPaciente.baja();
                break;
            case 2:
                gestionPaciente.modificar();
                break;
            case 3:
                gestionPaciente.mostrar();
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