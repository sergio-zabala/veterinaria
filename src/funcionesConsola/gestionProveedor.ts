import { Proveedor } from "../poo/Proveedor";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { Veterinaria } from "../poo/Veterinaria";
import { seleccionarSucursal } from "./gestionRed";
import { pedirIdProveedor } from "./gestionVeterinarias";
import { obtenerDato } from "./readlineSync";
import pc from "picocolors";

const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;
const regExTel: RegExp = /^\+\d{1,3}[ .]\d{1,5}-\d{3,10}$/m;

// FUNCION PARA REGISTRAR UN NUEVO PROVEEDOR DE UNA SUCURSAL ESPECIFICA CONSOLA
export function registrarProveedor(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.getSucursales().find(vet => vet.getIdVeterinaria() === idSuc);

    // SI SUCURSAL EXISTE
    if (sucursal) {
        let nombre: string;

        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            nombre = obtenerDato(pc.bold("Nombre del proveedor: "));
            if(!regExpSoloLetras.test(nombre) || nombre == ""){
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }
        } while (!regExpSoloLetras.test(nombre) || nombre == "")

        let telefono: string;
        do {
            telefono = obtenerDato(pc.bold("Telefono del proveedor: "));
            if (!regExTel.test(telefono)) {
                console.log(pc.red("El dato ingresado no es valido para un telefono:ejemplo: +54 2235-555333."));
            }
        } while (!regExTel.test(telefono) || telefono === "");


        const proveedor = new Proveedor(nombre, telefono, idSuc);
        proveedor.guardarId(ids);
        sucursal.altaProveedor(proveedor);
    }
}

// FUNCION PARA MOSTRAR PROVEEDORES DE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarProveedores(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc: string | null = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.getSucursales().find(vet => vet.getIdVeterinaria() === idSuc);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        sucursal.mostrarTablaProveedores();
    }
}

// FUNCION PARA DAR DE BAJA A UN PROVEEDOR DESDE CONSOLA
export function bajaProveedor(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc: string | null = seleccionarSucursal(centralVeterinaria);

    // SI NO EXISTE RETONRAR
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

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
    const idSuc: string | null = seleccionarSucursal(centralVeterinaria);

    // SI ID NO EXISTE
    if (!idSuc) return;

    const sucursal: Veterinaria | undefined = centralVeterinaria.obtenerVeterinariaPorId(idSuc);
    if (!sucursal) return;

    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
    const idProveedor: string | null = pedirIdProveedor(sucursal);

    // SI NO EXISTE ID
    if (!idProveedor) return;

    // SI NO
    let nombre: string;

    // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
    do {
        nombre = obtenerDato(pc.bold("Nombre del proveedor: "));
        if(!regExpSoloLetras.test(nombre) || nombre == ""){
            console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
        }
    } while (!regExpSoloLetras.test(nombre) || nombre == "")

    let telefono: string;
    do {
        telefono = obtenerDato(pc.bold("Telefono del Proveedor: "));
        if (!regExTel.test(telefono)) {
            console.log(pc.red("El dato ingresado no es valido para un telefono:ejemplo: +54 2235-555333."));
        }
    } while (!regExTel.test(telefono) || telefono === "");
    sucursal.modificarProveedor(idProveedor, nombre, telefono);
}
