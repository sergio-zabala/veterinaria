import { ICrud } from "./ICrud";
import { GestionCentral } from "./GestionCentral";
import { Veterinaria } from "../Veterinaria";
import { Cliente } from "../Cliente";
import { obtenerDato } from "../../funcionesConsola/readlineSync";
import pc from "picocolors";
import { GestionPaciente } from "./GestionPaciente";
import { GestionVeterinaria } from "./GestionVeterinaria";

const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;
const regExTel: RegExp = /^\+\d{1,3}[ .]\d{1,5}-\d{3,10}$/m;

export class GestionCliente implements ICrud {
    private gestion:GestionCentral;
    private gestionVeterinaria:GestionVeterinaria;
    private gestionPaciente:GestionPaciente;


    constructor(gestionCentral:GestionCentral, gestionVeterinaria:GestionVeterinaria, gestionPaciente:GestionPaciente) {
        this.gestion=gestionCentral;
        this.gestionPaciente=gestionPaciente;
        this.gestionVeterinaria=gestionVeterinaria;
    }

    public registrar(ids: string[]): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();
        // SI ID EXISTE
        if (!idSuc) return;

        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerSucursales().find(vet => vet.getIdVeterinaria() === idSuc);
        // SI SUCURSAL EXISTE
        if (sucursal) {
            let nombre: string;
            // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
            do {
                nombre = obtenerDato(pc.bold("Nombre del cliente: "));
                if (!regExpSoloLetras.test(nombre) || nombre == "") {
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
            this.gestionPaciente.registrar(undefined,cliente);
        }
    }

    public baja(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        let idSuc = this.gestion.seleccionarSucursal();

        // SI NO EXISTE RETONRAR
        if (!idSuc) return;

        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal:Veterinaria | undefined = this.gestion.obtenerIdSucursal(idSuc);


        if (!sucursal) return;
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE CLIENTE INGRESADO POR EL USUARIO.
        const idCliente: string | null = this.gestionVeterinaria.pedirIdCliente(sucursal);

        // SI NO EXISTE ID
        if (!idCliente) return;

        // SI NO
        sucursal.bajaCliente(idCliente);
    }
    public modificar(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();

        // SI ID EXISTE
        if (!idSuc) return;

        const sucursal = this.gestion.obtenerIdSucursal(idSuc);

        if (!sucursal) return;
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE CLIENTE INGRESADO POR EL USUARIO.
        const idCliente: string | null = this.gestionVeterinaria.pedirIdCliente(sucursal);
        // SI NO EXISTE ID
        if (!idCliente) return;

        // SI NO
        let nombre: string;

        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            nombre = obtenerDato(pc.bold("Nombre del cliente: "));
            if (!regExpSoloLetras.test(nombre) || nombre == "") {
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

    public mostrar(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();
        // SI ID NO EXISTE
        if (!idSuc) return;
        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerSucursales().find(vet => vet.getIdVeterinaria() === idSuc);
        // SI SUCURSAL EXISTE
        if (sucursal) {
            sucursal.mostrarTablaClientes();
        }
    }
}