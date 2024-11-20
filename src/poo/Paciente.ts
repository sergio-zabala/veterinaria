import { Cliente } from "./Cliente";

export class Paciente{
    //Propiedades.

private nombre:string;
private especie:string;
private estadoSalud:string;
private esExotica:boolean;
private id_duenio:string;



//Constructor.

constructor(nombre:string,especie:string,estadoSalud:string,esExotica:boolean,id_cliente:string){
    this.nombre=nombre;
    this.especie=especie;
    this.estadoSalud=estadoSalud;
    this.esExotica=esExotica;
    this.id_duenio=id_cliente;
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

public getEstadoSalud(): string {
    return this.estadoSalud;
}

public setEstadoSalud(estadoSalud: string): void {
    this.estadoSalud = estadoSalud;
}

public getEsExotica(): boolean {
    return this.esExotica;
}

public setEsExotica(esExotica: boolean): void {
    this.esExotica = esExotica;
}

public getId_duenio(): string {
    return this.id_duenio;
}

public setId_duenio(id_duenio: string): void {
    this.id_duenio = id_duenio;
}

}
