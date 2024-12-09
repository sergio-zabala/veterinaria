import { obtenerDato } from "../../funcionesConsola/readlineSync";
import { Proveedor } from "../Proveedor";
import { Veterinaria } from "../Veterinaria";
import { GestionCentral } from "./GestionCentral";
import { GestionVeterinaria } from "./GestionVeterinaria";
import { ICrud } from "./ICrud";
import pc from "picocolors";

const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;
const regExTel: RegExp = /^\+\d{1,3}[ .]\d{1,5}-\d{3,10}$/m;
export class GestionProveedor implements ICrud {
    private gestion:GestionCentral;
    private gestionVeterinaria:GestionVeterinaria;

    constructor(gestion:GestionCentral, gestionVeterinaria:GestionVeterinaria){
        this.gestion=gestion;
        this.gestionVeterinaria=gestionVeterinaria;
    }

    public registrar(ids: string[]): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc = this.gestion.seleccionarSucursal();
        // SI ID EXISTE
        if (!idSuc) return;
        // SI EL ID SUCURSAL EXISTE EN LA LISTA DE REGISTROS ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerSucursales().find(vet => vet.getIdVeterinaria() === idSuc);

        // SI SUCURSAL EXISTE
        if (sucursal) {
            let nombre: string;

            // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
            do {
                nombre = obtenerDato(pc.bold("Nombre del proveedor: "));
                if (!regExpSoloLetras.test(nombre) || nombre == "") {
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

    public mostrar(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();
        // SI ID EXISTE
        if (!idSuc) return;
        // SI EL ID SUCURSAL EXISTE EN LA LISTA ----> BUSCAR EL PRIMER ID EN LA LISTA DE SUCURSALES QUE COINCIDA CON EL QUE LE PASA EL USUARIO.
        const sucursal: Veterinaria | undefined = this.gestion.obtenerSucursales().find(vet => vet.getIdVeterinaria() === idSuc);
        // SI SUCURSAL EXISTE
        if (sucursal) {
            sucursal.mostrarTablaProveedores();
        }
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
        const idProveedor: string | null = this.gestionVeterinaria.pedirIdProveedor(sucursal);

        // SI NO EXISTE ID
        if (!idProveedor) return;

        // SI NO
        sucursal.bajaProveedor(idProveedor);
    }


    public modificar(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        const idSuc: string | null = this.gestion.seleccionarSucursal();

        // SI ID NO EXISTE
        if (!idSuc) return;

        const sucursal: Veterinaria | undefined = this.gestion.obtenerIdSucursal(idSuc);
        if (!sucursal) return;

        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID DE PACIENTE INGRESADO POR EL USUARIO.
        const idProveedor: string | null = this.gestionVeterinaria.pedirIdProveedor(sucursal);

        // SI NO EXISTE ID
        if (!idProveedor) return;

        // SI NO
        let nombre: string;

        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            nombre = obtenerDato(pc.bold("Nombre del proveedor: "));
            if (!regExpSoloLetras.test(nombre) || nombre == "") {
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
}