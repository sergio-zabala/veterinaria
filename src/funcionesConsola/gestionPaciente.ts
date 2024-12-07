import { Cliente } from "../poo/Cliente";
import { Paciente } from "../poo/Paciente";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { Veterinaria } from "../poo/Veterinaria";
import { seleccionarSucursal } from "./gestionRed";
import { pedirIdPaciente } from "./gestionVeterinarias";
import { obtenerDato, obtenerDatoNumerico } from "./readlineSync";
import pc from "picocolors";

// FUNCION PARA REGISTRAR UN NUEVO PACIENTEDE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function registrarPaciente(centralVeterinaria: CentralVeterinaria, cliente: Cliente) {
    let opcion: number;
    do {
        console.log(pc.cyan(pc.bold("¿Cuantas mascotas se registran?")));
        opcion = obtenerDatoNumerico(pc.bold("Escribe la cantidad: "))
    } while (opcion <= 0 || isNaN(opcion))

    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === cliente.getId_sucursal());

    // BUCLE QUE RECORRE SEGUN LA CANTIDAD DE ESPECIES QUE REGISTRE EL CLIENTE
    for (let i = 0; i < opcion; i++) {
        // SI SUCURSAL EXISTE
        if (sucursal) {
            const nombre = obtenerDato(pc.bold("Nombre de Mascota: "));
            const especie = obtenerDato(pc.bold("Especie: "));
            const paciente = new Paciente(nombre, especie, cliente);

            paciente.setIdPaciente(cliente.getPacientes().length + (i + 1));

            sucursal.altaPaciente(paciente);
        }
    }
}

// FUNCION PARA MOSTRAR PACIENTESDE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarPacientes(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);
    // SI EL ID NO EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSuc);

    // SI NO EXISTE SUCURSAL
    if (!sucursal) return;

    // SI NO MOSTRAR TABLA
    sucursal.mostrarTablaPacientes();
}


// FUNCION PARA DAR DE BAJA A UN PACIENTE DESDE CONSOLA
export function bajaPaciente(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc = seleccionarSucursal(centralVeterinaria);

    // SI NO EXISTE RETONRAR
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);


    if (!sucursal) return;

    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
    const idPaciente: number | null = pedirIdPaciente(sucursal);

    // SI NO EXISTE ID
    if (!idPaciente) return;

    //  SI NO
    sucursal.bajaPaciente(idPaciente);
}

// FUNCION PARA MODIFICAR UN PACIENTE DESDE CONSOLA
export function modificarPaciente(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc = seleccionarSucursal(centralVeterinaria);

    // SI ID EXISTE
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

    if (!sucursal) return;

    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
    const idPaciente: number | null = pedirIdPaciente(sucursal);

    // SI NO EXISTE ID
    if (!idPaciente) return;

    // SI NO
    const nombre = obtenerDato(pc.bold("Nombre del paciente: "));
    const especie = obtenerDato(pc.bold("Especie: "));
    sucursal.modificarPaciente(idPaciente, nombre, especie);
}