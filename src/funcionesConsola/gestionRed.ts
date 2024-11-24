import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { Veterinaria } from "../poo/Veterinaria";
import { obtenerDato, obtenerDatoNumerico } from "./readlineSync";
import pc from "picocolors";

// FUNCION PARA SELECCIONAR SUCURSAL DESDE CONSOLA
export function seleccionarSucursal(centralVeterinaria: CentralVeterinaria): string | null {
    // LISTA DE IDENTIFICADORES DE VETERINARIAS 
    const idsSucursales = centralVeterinaria.getIdsVeterinarias();

    // 
    if (!idsSucursales || idsSucursales.length === 0) {
        console.log(pc.yellow("No hay sucursales registradas."));
        return null;
    }

    const idSeleccionado = obtenerDato(pc.bold("Ingrese el ID de la sucursal a la que gestionara: "));

    if (idsSucursales.includes(idSeleccionado)) {
        return idSeleccionado;
    } else {
        console.log(pc.magenta("El ID ingresado no corresponde a ninguna sucursal."));
        return null;
    }
}

// FUNCION PARA REGISTRAR UNA NUEVA SUCURSAL DESDE CONSOLA
export function registrarSucursal(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    const nombre: string = obtenerDato(pc.bold("Nombre de la sucursal: ")),
        telefono: string = obtenerDato(pc.bold("Telefono de la sucursal: ")),
        calle: string = obtenerDato(pc.bold("Calle: ")),
        numero: number = obtenerDatoNumerico(pc.bold("Numero: "))

    const nuevaSucursal = new Veterinaria(nombre, telefono, calle, numero);
    nuevaSucursal.guardarId(ids);
    centralVeterinaria.altaVeterinaria(nuevaSucursal);
}

// FUNCION PARA DAR DE BAJA UNA SUCURSAL
export function bajaSucursal(centralVeterinaria: CentralVeterinaria): void {
    let idSuc = seleccionarSucursal(centralVeterinaria);
    if (idSuc) {
        centralVeterinaria.bajaVeterinaria(idSuc);
        return;
    }
}

export function modificarSucursal(centralVeterinaria: CentralVeterinaria) {
    let idSuc = seleccionarSucursal(centralVeterinaria);
    if (idSuc) {
        const nombre: string = obtenerDato(pc.bold("Nombre de la sucursal: ")),
        telefono: string = obtenerDato(pc.bold("Telefono de la sucursal: ")),
        calle: string = obtenerDato(pc.bold("Calle: ")),
        numero: number = obtenerDatoNumerico(pc.bold("Numero: "))
        centralVeterinaria.modificarVeterinaria(idSuc, nombre, telefono, calle, numero);
    }
}

// MOSTRAR SUCURSALES DESDE CONSOLA
export function mostrarSucursales(centralVeterinaria: CentralVeterinaria): void {
    centralVeterinaria.mostrarTablaVeterinarias();
}

