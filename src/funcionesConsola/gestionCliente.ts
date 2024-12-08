import { Cliente } from "../poo/Cliente";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { Veterinaria } from "../poo/Veterinaria";
import { registrarPaciente } from "./gestionPaciente";
import { seleccionarSucursal } from "./gestionRed";
import { pedirIdCliente } from "./gestionVeterinarias";
import { obtenerDato } from "./readlineSync";
import pc from "picocolors";

const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;
const regExTel: RegExp = /^\+\d{1,3}[ .]\d{1,5}-\d{3,10}$/m;
// FUNCION PARA MOSTRAR CLIENTES DE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarClientes(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc: string | null = seleccionarSucursal(centralVeterinaria);
    // SI ID NO EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.getSucursales().find(vet => vet.getIdVeterinaria() === idSuc);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        sucursal.mostrarTablaClientes();
    }
}

// FUNCION PARA REGISTRAR UN NUEVO CLIENTE DESDE CONSOLA
export function registrarCliente(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc: string | null = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.getSucursales().find(vet => vet.getIdVeterinaria() === idSuc);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        let nombre: string;
        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            nombre = obtenerDato(pc.bold("Nombre del cliente: "));
            if(!regExpSoloLetras.test(nombre) || nombre == ""){
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }
        } while (!regExpSoloLetras.test(nombre) || nombre == "")

        let telefono: string;
        do {
            telefono = obtenerDato(pc.bold("Telefono del cliente: "));
            if (!regExTel.test(telefono)) {
                console.log(pc.red("El dato ingresado no es valido para un telefono:ejemplo: +54 2235-555333."));
            }
        } while (!regExTel.test(telefono) || telefono === "")

        const cliente: Cliente = new Cliente(nombre, telefono, idSuc);
        cliente.guardarId(ids);
        cliente.visitar();
        sucursal.altaCliente(cliente);
        registrarPaciente(centralVeterinaria, cliente);
    }
}

// FUNCION PARA DAR DE BAJA A UN CLIENTE DESDE CONSOLA
export function bajaCliente(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc = seleccionarSucursal(centralVeterinaria);

    // SI NO EXISTE RETONRAR
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);


    if (!sucursal) return;
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE CLIENTE INGRESADO POR EL USUARIO.
    const idCliente: string | null = pedirIdCliente(sucursal);

    // SI NO EXISTE ID
    if (!idCliente) return;

    // SI NO
    sucursal.bajaCliente(idCliente);
}

// FUNCION PARA MODIFICAR UN CLIENTE DESDE CONSOLA
export function modificarCliente(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc: string | null = seleccionarSucursal(centralVeterinaria);

    // SI ID EXISTE
    if (!idSuc) return;

    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

    if (!sucursal) return;
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE CLIENTE INGRESADO POR EL USUARIO.
    const idCliente: string | null = pedirIdCliente(sucursal);
    // SI NO EXISTE ID
    if (!idCliente) return;

    // SI NO
    let nombre: string;

    // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
    do {
        nombre = obtenerDato(pc.bold("Nombre del cliente: "));
        if(!regExpSoloLetras.test(nombre) || nombre == ""){
            console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
        }
    } while (!regExpSoloLetras.test(nombre) || nombre == "")

    let telefono: string;
    do {
        telefono = obtenerDato(pc.bold("Telefono del cliente: "));
        if (!regExTel.test(telefono)) {
            console.log(pc.red("El dato ingresado no es valido para un telefono:ejemplo: +54 2235-555333."));
        }
    } while (!regExTel.test(telefono) || telefono === "")

    sucursal.modificarCliente(idCliente, nombre, telefono);
}

export function recibirVisitaSucursal(centralVeterinaria: CentralVeterinaria) {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc: string | null = seleccionarSucursal(centralVeterinaria);
    if (!idSuc) return;

    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

    if (!sucursal) return;
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE CLIENTE INGRESADO POR EL USUARIO.
    const idCliente: string | null = pedirIdCliente(sucursal);
    // SI NO EXISTE ID
    if (!idCliente) return;


    centralVeterinaria.obtenerNuevaVisita(sucursal, idCliente)
}