import { Veterinaria } from "./Veterinaria";
import { BorderUserConfig, table } from "table";
import pc from "picocolors"
import { Cliente } from "./Cliente";

export class CentralVeterinaria {
    private nombre: string;
    private telefono: string;
    private veterinarias: Veterinaria[];

    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.veterinarias = [];
    }

    //---------------------------------->GETTER Y SETTER<------------------------------------------//

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    public getIdsVeterinarias(): string[] | null {
        // SI ES MAYOR A CERO MAPEAR
        if (this.veterinarias.length > 0) {
            // DEVUEVE UN NUEVO ARREGLO DE LOS ID REGISTRADOS
            return this.veterinarias.map((veterinaria) => veterinaria.getIdVeterinaria());
        }
        return null;
    }


    //---------------------------------->METODOS COMUNES<------------------------------------------//
    // METODO PARA OBTENER UNA VETERINARIA POR SU ID 
    public obtenerVeterinariaPorId(idVeterinaria: string): Veterinaria | undefined {
        return this.veterinarias.find(veterinaria => veterinaria.getIdVeterinaria() === idVeterinaria);
    }

    public obtenerNuevaVisita(veterinaria: Veterinaria, idCliente:string):void {
        veterinaria.recibirVisitaClienteExistente(idCliente);
    }

    // ALTAS, BAJAS Y MODIFICACION DE VETERINARIAS
    public altaVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
        console.log(pc.green(`La sucursal de veterinaria "${veterinaria.getNombre()}" se dio de alta.`));
    }

    public modificarVeterinaria(idVeterinaria: string, nombre: string, telefono: string, calle: string, numero: number): void {
        const modificarVeterinaria = this.veterinarias.find((veterinaria) => veterinaria.getIdVeterinaria() === idVeterinaria);

        if (!modificarVeterinaria) {
            console.log(pc.magenta(`NO SE PUDO MODIFICAR: La sucursal de veterinaria con el id "${idVeterinaria}" no existe`));
            return;
        }

        modificarVeterinaria.setNombre(nombre);
        modificarVeterinaria.setTelefono(telefono);
        modificarVeterinaria.setCalle(calle);
        modificarVeterinaria.setNumero(numero);
        console.log(pc.green(`La sucursal con id "${modificarVeterinaria.getIdVeterinaria()}" ha sido editada con éxito!`));
    }

    public bajaVeterinaria(idVeterinaria: string): void {
        //BUSCAR EL INDICE DEL ID DE VETERINARIA
        const veterinariaIndex = this.veterinarias.findIndex((veterinaria) => veterinaria.getIdVeterinaria() === idVeterinaria);

        // SI NO LO ENCUENTRA
        if (veterinariaIndex === -1) {
            console.log(pc.magenta(`IMPOSIBLE ELIMINAR: La sucursal de veterinaria con el id "${idVeterinaria}" no existe`));
            return;
        }
        // SINO
        this.veterinarias.splice(veterinariaIndex, 1);
        console.log(pc.yellow(`Se ha dado de baja la sucursal con el id "${idVeterinaria}"`));
    }

    // MOSTRAR TABLAS DE VETERINARIAS
    public mostrarTablaVeterinarias(): void {
        // SI HAY AL MENOS UNA VETERINARIA
        if (this.veterinarias.length > 0) {
            const cabecera: string[] = [pc.bold("ID"), pc.bold("Nombre"), pc.bold("Telefono"), pc.bold("Calle"), pc.bold("Numero")];
            const datosVrias: string[][] = this.veterinarias.map(veterinaria => [
                pc.cyan(veterinaria.getIdVeterinaria()),
                pc.cyan(veterinaria.getNombre()),
                pc.cyan(veterinaria.getTelefono()),
                pc.cyan(veterinaria.getCalle()),
                pc.cyan(veterinaria.getNumero()?.toString())
            ]);
            const datosTabla: string[][] = [cabecera, ...datosVrias];
            console.log(table(datosTabla));
            return;
        }
        // SINO
        console.log(pc.yellow("No hay sucursales que mostrar."));
        return;
    }
}
