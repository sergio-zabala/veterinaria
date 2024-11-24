import { Cliente } from "../poo/Cliente";
import { Paciente } from "../poo/Paciente";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { seleccionarSucursal } from "./gestionRed";
import { obtenerDato, obtenerDatoNumerico } from "./readlineSync";
import pc from "picocolors";

// FUNCION PARA REGISTRAR UN NUEVO PACIENTEDE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function registrarPaciente(centralVeterinaria:CentralVeterinaria, cliente:Cliente) {
    let opcion:number;
    do{
        console.log(pc.cyan(pc.bold("¿Cuantas mascotas se registran?")));
        opcion = obtenerDatoNumerico(pc.bold("Escribe la cantidad: "))
    }while(opcion <= 0 || isNaN(opcion))

    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === cliente.getId_sucursal());
    
    // BUCLE QUE RECORRE SEGUN LA CANTIDAD DE ESPECIES QUE REGISTRE EL CLIENTE
    for (let i = 0; i < opcion; i++) {
        // SI SUCURSAL EXISTE
        if (sucursal) {
            const nombre = obtenerDato(pc.bold("Nombre de Mascota: "));
            const especie = obtenerDato(pc.bold("Especie: "));
            const paciente = new Paciente(nombre, especie, cliente);
            sucursal.altaPaciente(paciente); 
        } 
    }
}

// FUNCION PARA MOSTRAR PACIENTESDE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarPacientes(centralVeterinaria:CentralVeterinaria):void {
    const idSucursal = seleccionarSucursal(centralVeterinaria);
    // SI EL ID NO EXISTE
    if (!idSucursal) return;
    // SI SUCURSAL EXISTE
    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSucursal);

    if (sucursal) {
        sucursal.mostrarTablaPacientes(); 
    } 
}