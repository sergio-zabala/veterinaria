import pc from "picocolors";
import { obtenerDato, obtenerDatoNumerico } from "../../funcionesConsola/readlineSync";
import { Veterinaria } from "../Veterinaria";
import { ICrud } from "./ICrud";
import { CentralVeterinaria } from "../RedVeterinaria";

const regExpSoloLetras: RegExp = /^[a-zA-ZñÑ\s]+$/m;
const regExpNumCalle: RegExp = /^\d{4}$/m
const regExTel: RegExp = /^\+\d{1,3}[ .]\d{1,5}-\d{3,10}$/m;

export class GestionCentral implements ICrud {
    private central:CentralVeterinaria;

    constructor(){
        this.central= new CentralVeterinaria("Central Veterinaria", "123-456-789");
    }

    public registrar(ids: string[]): void {
        let nombre: string;
        // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
        do {
            nombre = obtenerDato(pc.bold("Nombre de la sucursal: "));
            if (!regExpSoloLetras.test(nombre) || nombre === "") {
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }
        } while (!regExpSoloLetras.test(nombre) || nombre === "")

        let telefono: string;
        do {
            telefono = obtenerDato(pc.bold("Telefono de la sucursal: "));
            if (!regExTel.test(telefono) || telefono === "") {
                console.log(pc.red("El dato ingresado no es valido para un telefono:ejemplo: +54 2235-555333."));
            }
        } while (!regExTel.test(telefono) || telefono === "");

        let calle: string;
        do {
            calle = obtenerDato(pc.bold("Calle: "));
            if (!regExpSoloLetras.test(calle) || calle === "") {
                console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
            }
        } while (!regExpSoloLetras.test(calle) || calle === "");

        let numero: number;
        do {
            numero = obtenerDatoNumerico(pc.bold("Numero de calle: "));
            if (!regExpNumCalle.test(numero.toString())) {
                console.log(pc.red("El numero de calle debe ser de 4 digitos"));
            }
        } while (!regExpNumCalle.test(numero.toString()) || numero.toString() === "");

        const nuevaSucursal: Veterinaria = new Veterinaria(nombre, telefono, calle, numero);
        nuevaSucursal.guardarId(ids);
        this.central.altaVeterinaria(nuevaSucursal);
    }

    public baja(): void {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        let sucursal = this.seleccionarSucursal();
        // SI SUCURSAL EXISTE
        if (sucursal) {
            this.central.bajaVeterinaria(sucursal);
            return;
        }
    }

    public modificar() {
        // GUARDAMOS INVOCACION DE FUNCION QUE SOLICITA Y EVALUA EL ID INGRESADO POR EL USUARIO.
        let idSuc = this.seleccionarSucursal();

        // SI ID SUCURSAL EXISTE
        if (idSuc) {
            let nombre: string;
            // MIENTRAS EL VALOR INGRESADO SEA UN NUMERO
            do {
                nombre = obtenerDato(pc.bold("Nombre de la sucursal: "));
                if (!regExpSoloLetras.test(nombre) || nombre === "") {
                    console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
                }
            } while (!regExpSoloLetras.test(nombre) || nombre === "")


            let telefono: string;
            do {
                telefono = obtenerDato(pc.bold("Telefono de la sucursal: "));
                if (!regExTel.test(telefono) || telefono === "") {
                    console.log(pc.red("El dato ingresado no es valido para un telefono:ejemplo: +54 2235-555333."));
                }
            } while (!regExTel.test(telefono) || telefono === "");



            let calle: string;
            do {
                calle = obtenerDato(pc.bold("Calle: "));
                if (!regExpSoloLetras.test(calle) || calle === "") {
                    console.log(pc.red("Solo se admiten letras y los campos no deben estar vacios. Intente nuevamente."));
                }
            } while (!regExpSoloLetras.test(calle) || calle === "");

            let numero: number;
            do {
                numero = obtenerDatoNumerico(pc.bold("Numero de calle: "));
                if (!regExpNumCalle.test(numero.toString())) {
                    console.log(pc.red("El numero de calle debe ser de 4 digitos"));
                }
            } while (!regExpNumCalle.test(numero.toString()) || numero.toString() === "");
            this.central.modificarVeterinaria(idSuc, nombre, telefono, calle, numero);
        }
    }

    public mostrar(): void {
        this.central.mostrarTablaVeterinarias();
    }

    public seleccionarSucursal(): string | null {
        // LISTA DE IDENTIFICADORES DE VETERINARIAS 
        const idsSucursales: string[] | null = this.central.getIdsSucursales();
    
        // SI ID SUCURSALES ES INDEFINIDO O ARREGLO VACIO
        if (!idsSucursales || idsSucursales.length === 0) {
            console.log(pc.yellow("No hay sucursales registradas."));
            return null;
        }
        // PEDIR ID DE SUCURSAL AL USUARIO
        const idSeleccionado: string = obtenerDato(pc.bold("Ingrese el ID de la sucursal para realizar una accion: "));
    
        // SI EL ID INGRESADO POR EL USUARIO ESTA INCLUIDO EN EL ARREGLO DE ID DE VETERINARIAS.
        if (idsSucursales.includes(idSeleccionado)) {
            return idSeleccionado;
        } else {
            console.log(pc.magenta("El ID ingresado no corresponde a ninguna sucursal."));
            return null;
        }
    }

    public obtenerSucursales(): Veterinaria[]{
        return this.central.getSucursales()
    }

    public obtenerIdsSucursales(): string[] | null{
        if(this.central.getIdsSucursales()){
            return this.central.getIdsSucursales()
        }
        return null
    }

    public obtenerIdSucursal(id:string):Veterinaria| undefined{
        return this.central.obtenerVeterinariaPorId(id);
    }

    public nuevaVisita(sucursal:Veterinaria, idCliente:string):void{
        this.central.obtenerNuevaVisita(sucursal, idCliente);
    }
}