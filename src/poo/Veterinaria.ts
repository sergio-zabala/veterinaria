import { generarIdUnica } from "../funciones/generadorIds";
import { Cliente } from "./Cliente";
import { Direccion } from "./Direccion";
import { Gestion } from "./interfaceGestion";

export class Veterinaria implements Gestion {
    private nombre: string
    private direccion: Direccion
    private idVeterinaria: string
    private clientes: Cliente[]

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDireccion(): Direccion {
        return this.direccion;
    }

    public setDireccion(direccion: Direccion): void {
        this.direccion = direccion;
    }

    public getIdVeterinaria(): string | undefined{
        if(this.idVeterinaria){
            return this.idVeterinaria;
        }
        return "Alerta: Esta Veterinaria no contiene id";
    }

    private setIdVeterinaria(idVeterinaria: string): void {
        this.idVeterinaria = idVeterinaria;
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public setClientes(clientes: Cliente[]): void {
        this.clientes = clientes;
    }

    // IMPLEMENTACION DE METODOS DE INTERFACE GESTION
    public alta(): void {

    }
    public modificar(): void {

    }
    public bajar(): void {

    }

    public guardarId(ids:string[]): void {
        this.setIdVeterinaria(generarIdUnica(ids))
    }
}