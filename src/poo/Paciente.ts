import { Cliente } from "./Cliente";
export class Paciente {
    //Propiedades.
    private nombre: string;
    private especie: string;
    private esExotica: boolean;
    private id_duenio:Cliente;
    //Constructor.
    constructor(nombre: string, especie: string, id_duenio:Cliente) {
        this.nombre = nombre;
        this.especie = especie;
        this.esExotica = false;
        this.id_duenio = id_duenio;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    public getEsExotica(): boolean {
        return this.esExotica;
    }

    public setEsExotica(esExotica: boolean): void {
        this.esExotica = esExotica;
    }

    public getId_duenio(): Cliente {
        return this.id_duenio;
    }

    public setId_duenio(id_duenio: Cliente): void {
        this.id_duenio = id_duenio;
    }
}