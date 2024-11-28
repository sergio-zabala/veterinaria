import { Cliente } from "../poo/Cliente";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { Veterinaria } from "../poo/Veterinaria";
import { registrarPaciente } from "./gestionPaciente";
import { seleccionarSucursal } from "./gestionRed";
import { pedirIdCliente } from "./gestionVeterinarias";
import { obtenerDato } from "./readlineSync";
import pc from "picocolors";

// FUNCION PARA MOSTRAR CLIENTES DE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarClientes(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSuc);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        sucursal.mostrarTablaClientes();
    }
}

// FUNCION PARA REGISTRAR UN NUEVO CLIENTE DESDE CONSOLA
export function registrarCliente(centralVeterinaria: CentralVeterinaria, ids: string[]): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSuc);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        const nombre = obtenerDato(pc.bold("Nombre del cliente: "));
        const telefono = obtenerDato(pc.bold("Telefono del cliente: "));
        const cliente = new Cliente(nombre, telefono, idSuc);
        cliente.guardarId(ids);
        cliente.visitar();
        sucursal.altaCliente(cliente);
        registrarPaciente(centralVeterinaria, cliente, ids);
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
    const nombre = obtenerDato(pc.bold("Nombre del cliente: "));
    const telefono = obtenerDato(pc.bold("Telefono del cliente: "));
    sucursal.modificarCliente(idCliente, nombre, telefono);
}

export function recibirVisitaSucursal(centralVeterinaria: CentralVeterinaria) {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc: string | null= seleccionarSucursal(centralVeterinaria);
    if(!idSuc) return;

    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

    if(!sucursal) return;
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE CLIENTE INGRESADO POR EL USUARIO.
    const idCliente: string | null = pedirIdCliente(sucursal);
    // SI NO EXISTE ID
    if (!idCliente) return;


    centralVeterinaria.obtenerNuevaVisita(sucursal, idCliente)
}