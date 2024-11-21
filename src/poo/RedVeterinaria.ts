import { Gestion } from "./Gestion";
import { Veterinaria } from "./Veterinaria";

export class RedVeterinaria implements Gestion {
    private nombre: string;
    private telefono: string;
    private veterinarias: Veterinaria[];

    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.veterinarias = [];
    }
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

    // IMPLEMENTACION DE METODOS DE INTERFACE GESTION
    public alta(idVeterinaria: string): void {
        const nuevaVeterinaria: Veterinaria | undefined = this.veterinarias.find((id) => id.getIdVeterinaria() === idVeterinaria);
        if (!nuevaVeterinaria) return;
        console.log(`El cliente con el id ${nuevaVeterinaria.getIdVeterinaria()} se dio de alta.`);
    }

    public modificar(idVeterinaria: string, nombre: string, telefono?: string): void {
        const modificarVeterinaria: Veterinaria | undefined = this.veterinarias.find((id) => id.getIdVeterinaria() === idVeterinaria);
        if (!modificarVeterinaria) return
        modificarVeterinaria.setNombre(nombre);
        if (telefono) {
            modificarVeterinaria.setIdVeterinaria(telefono);
        }
    }

    public baja(idVeterinaria: string): void {
        const bajaVeterinaria: Veterinaria[] | undefined = this.veterinarias.filter((id) => id.getIdVeterinaria() !== idVeterinaria);
        if (!bajaVeterinaria) return;
        this.veterinarias = bajaVeterinaria;
        console.log(`Se ha dado de baja a cliente con el id ${idVeterinaria}`);
    }

}