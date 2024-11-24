import { Cliente } from "../poo/Cliente";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { registrarPaciente } from "./gestionPaciente";
import { seleccionarSucursal } from "./gestionRed";
import { obtenerDato } from "./readlineSync";
import pc from "picocolors";

// FUNCION PARA MOSTRAR CLIENTES DE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarClientes(centralVeterinaria:CentralVeterinaria):void {
    const idSucursal = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSucursal) return;

    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSucursal);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        sucursal.mostrarTablaClientes(); 
    }
}

// FUNCION PARA REGISTRAR UN NUEVO CLIENTE DESDE CONSOLA
export function registrarCliente(centralVeterinaria:CentralVeterinaria, ids:string[]):void {
    const idSucursal = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSucursal) return;

    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSucursal);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        const nombre = obtenerDato(pc.bold("Nombre del cliente: "));
        const telefono = obtenerDato(pc.bold("Telefono del cliente: "));
        const cliente = new Cliente(nombre, telefono, idSucursal);
        cliente.guardarId(ids);
        sucursal.altaCliente(cliente); 
        registrarPaciente(centralVeterinaria, cliente);
    }
}