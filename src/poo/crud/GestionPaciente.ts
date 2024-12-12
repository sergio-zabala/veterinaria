import { obtenerDato, obtenerDatoNumerico } from "../../funcionesConsola/readlineSync";
import { Cliente } from "../Cliente";
import { Paciente } from "../Paciente";
import { Veterinaria } from "../Veterinaria";
import { GestionCentral } from "./GestionCentral";
import { GestionVeterinaria } from "./GestionVeterinaria";
import { ICrud } from "./ICrud";
import pc from "picocolors";
const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;

export class GestionPaciente implements ICrud {
    private gestion: GestionCentral;
    private gestionVeterinaria: GestionVeterinaria;

    constructor(gestion: GestionCentral, gestionVeterinaria: GestionVeterinaria) {
        this.gestion = gestion;
        this.gestionVeterinaria = gestionVeterinaria;
    }

    public registrar(ids?: string[], cliente?: Cliente): void {
        let opcion: number;
        do {
            console.log(pc.cyan(pc.bold("¿Cuantas mascotas se registran?")));
            opcion = obtenerDatoNumerico(pc.bold("Escribe la cantidad: "))
        } while (opcion <= 0 || isNaN(opcion))

        let sucursal: Veterinaria | undefined;
        if (cliente) {
            sucursal = this.gestion.obtenerSucursales().find(vet => vet.getIdVeterinaria() === cliente.getId_sucursal());
        }

        // BUCLE QUE RECORRE SEGUN LA CANTIDAD DE ESPECIES QUE REGISTRE EL CLIENTE
        for (let i = 0; i < opcion; i++) {
            // SI SUCURSAL EXISTE
            if (sucursal) {
                let nombre: string;
                // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
                do {
                    nombre = obtenerDato(pc.bold("Nombre de Mascota: "));
                    if (!regExpSoloLetras.test(nombre) || nombre == "") {
                        console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
                    }
                } while (!regExpSoloLetras.test(nombre) || nombre == "")

                let especie: string;
                // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
                do {
                    especie = obtenerDato(pc.bold("Especie: "));
                    if (!regExpSoloLetras.test(especie) || especie === "") {
                        console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
                    }
                } while (!regExpSoloLetras.test(especie) || especie === "");

                if (cliente) {
                    let paciente: Paciente = new Paciente(nombre, especie, cliente);
                    cliente.setPacientes(paciente);
                    paciente.setIdPaciente(paciente.getIdPaciente());
                    sucursal.altaPaciente(paciente);
                }
            }
        }
    }
    public mostrar(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();
        // SI EL ID NO EXISTE
        if (!idSuc) return;
        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerSucursales().find(vet => vet.getIdVeterinaria() === idSuc);

        // SI NO EXISTE SUCURSAL
        if (!sucursal) return;

        // SI NO MOSTRAR TABLA
        sucursal.mostrarTablaPacientes();
    }

    public baja(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        let idSuc: string | null = this.gestion.seleccionarSucursal();

        // SI NO EXISTE RETONRAR
        if (!idSuc) return;

        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerIdSucursal(idSuc);

        if (!sucursal) return;

        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
        const idPaciente: number | null = this.gestionVeterinaria.pedirIdPaciente(sucursal);

        // SI NO EXISTE ID
        if (!idPaciente) return;

        //  SI NO
        sucursal.bajaPaciente(idPaciente);
    }

    public modificar(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();

        // SI NO ID EXISTE
        if (!idSuc) return;

        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerIdSucursal(idSuc);

        if (!sucursal) return;

        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
        const idPaciente: number | null = this.gestionVeterinaria.pedirIdPaciente(sucursal);

        // SI NO EXISTE ID
        if (!idPaciente) return;

        // SI NO
        let nombre: string;
        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            nombre = obtenerDato(pc.bold("Nombre de Mascota: "));
            if (!regExpSoloLetras.test(nombre) || nombre == "") {
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }
        } while (!regExpSoloLetras.test(nombre) || nombre === "")

        let especie: string;
        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            especie = obtenerDato(pc.bold("Especie: "));
            if (!regExpSoloLetras.test(especie) || especie === "") {
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }
        } while (!regExpSoloLetras.test(especie) || especie === "");

        sucursal.modificarPaciente(idPaciente, nombre, especie);
    }
}