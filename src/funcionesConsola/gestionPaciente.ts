import { Cliente } from "../poo/Cliente";
import { Paciente } from "../poo/Paciente";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { Veterinaria } from "../poo/Veterinaria";
import { seleccionarSucursal } from "./gestionRed";
import { pedirIdPaciente } from "./gestionVeterinarias";
import { obtenerDato, obtenerDatoNumerico } from "./readlineSync";
import pc from "picocolors";

const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;

// FUNCION PARA REGISTRAR UN NUEVO PACIENTEDE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function registrarPaciente(centralVeterinaria: CentralVeterinaria, cliente: Cliente) {
    let opcion: number;
    do {
        console.log(pc.cyan(pc.bold("¿Cuantas mascotas se registran?")));
        opcion = obtenerDatoNumerico(pc.bold("Escribe la cantidad: "))
    } while (opcion <= 0 || isNaN(opcion))

    const sucursal = centralVeterinaria.getSucursales().find(vet => vet.getIdVeterinaria() === cliente.getId_sucursal());

    // BUCLE QUE RECORRE SEGUN LA CANTIDAD DE ESPECIES QUE REGISTRE EL CLIENTE
    for (let i = 0; i < opcion; i++) {
        // SI SUCURSAL EXISTE
        if (sucursal) {
            let nombre:string;
            // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
            do{
                nombre= obtenerDato(pc.bold("Nombre de Mascota: "));
                if(!regExpSoloLetras.test(nombre) || nombre == ""){
                    console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
                }
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }while(!regExpSoloLetras.test(nombre) || nombre == "")
                
            let especie:string;
            // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
            do {
                especie = obtenerDato(pc.bold("Especie: "));
                if(!regExpSoloLetras.test(especie)||especie === ""){
                    console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
                }
            } while (!regExpSoloLetras.test(especie) || especie === "");

            let paciente :Paciente = new Paciente(nombre, especie, cliente);
            cliente.setPacientes(paciente);
            paciente.setIdPaciente(paciente.getIdPaciente());
            sucursal.altaPaciente(paciente);
        }
    }
}

// FUNCION PARA MOSTRAR PACIENTESDE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarPacientes(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    const idSuc:string | null = seleccionarSucursal(centralVeterinaria);
    // SI EL ID NO EXISTE
    if (!idSuc) return;
    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.getSucursales().find(vet => vet.getIdVeterinaria() === idSuc);

    // SI NO EXISTE SUCURSAL
    if (!sucursal) return;

    // SI NO MOSTRAR TABLA
    sucursal.mostrarTablaPacientes();
}

// FUNCION PARA DAR DE BAJA A UN PACIENTE DESDE CONSOLA
export function bajaPaciente(centralVeterinaria: CentralVeterinaria): void {
    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
    let idSuc: string | null = seleccionarSucursal(centralVeterinaria);

    // SI NO EXISTE RETONRAR
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal: Veterinaria | undefined = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

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
    const idSuc: string | null = seleccionarSucursal(centralVeterinaria);

    // SI NO ID EXISTE
    if (!idSuc) return;

    // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
    const sucursal:Veterinaria | undefined = centralVeterinaria.obtenerVeterinariaPorId(idSuc);

    if (!sucursal) return;

    // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
    const idPaciente: number | null = pedirIdPaciente(sucursal);

    // SI NO EXISTE ID
    if (!idPaciente) return;

    // SI NO
    let nombre:string;
    // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
    do{
        nombre= obtenerDato(pc.bold("Nombre de Mascota: "));
        if(!regExpSoloLetras.test(nombre) || nombre == ""){
            console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
        }
    }while(!regExpSoloLetras.test(nombre) || nombre === "")
       
    let especie:string;
    // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
    do {
        especie = obtenerDato(pc.bold("Especie: "));
        if(!regExpSoloLetras.test(especie)||especie === ""){
            console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
        }
    } while (!regExpSoloLetras.test(especie)||especie === "");

    sucursal.modificarPaciente(idPaciente, nombre, especie);
}