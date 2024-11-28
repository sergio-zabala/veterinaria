import { Proveedor } from "../poo/Proveedor";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { seleccionarSucursal } from "./gestionRed";
import { pedirIdProveedor } from "./gestionVeterinarias";
import { obtenerDato } from "./readlineSync";
import pc from "picocolors";

// FUNCION PARA REGISTRAR UN NUEVO PROVEEDOR DE UNA SUCURSAL ESPECIFICA CONSOLA
export function registrarProveedor(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSuc);

    // SI SUCURSAL EXISTE
    if (sucursal) {
        const nombre = obtenerDato(pc.bold("Nombre del proveedor: "));
        const telefono = obtenerDato(pc.bold("telefono: "));
        const proveedor = new Proveedor(nombre, telefono, idSuc);
        proveedor.guardarId(ids);
        sucursal.altaProveedor(proveedor);
    }
}

// FUNCION PARA MOSTRAR PROVEEDORES DE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarProveedores(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSuc);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        sucursal.mostrarTablaProveedores();
    }
}

// FUNCION PARA DAR DE BAJA A UN PROVEEDOR DESDE CONSOLA
export function bajaProveedor(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc = seleccionarSucursal(centralVeterinaria);

    // SI NO EXISTE RETONRAR
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

    if (!sucursal) return;

    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
    const idProveedor: string | null = pedirIdProveedor(sucursal);

    // SI NO EXISTE ID
    if (!idProveedor) return;

    // SI NO
    sucursal.bajaProveedor(idProveedor);
}

// FUNCION PARA MODIFICAR UN PROVEEDOR DESDE CONSOLA
export function modificarProveedor(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);

    // SI ID EXISTE
    if (!idSuc) return;


    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);
    if (!sucursal) return;

    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
    const idProveedor: string | null = pedirIdProveedor(sucursal);

    // SI NO EXISTE ID
    if (!idProveedor) return;

    // SI NO
    const nombre = obtenerDato(pc.bold("Nombre del proveedor: "));
    const especie = obtenerDato(pc.bold("Telefono: "));
    sucursal.modificarProveedor(idProveedor, nombre, especie);
}
