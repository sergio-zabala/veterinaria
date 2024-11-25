import { generarIdUnica } from "../funcionesConsola/generadorIds";
import pc from "picocolors";
import { Paciente } from "./Paciente";

export class Cliente {
    private nombre: string;
    private telefono: string;
    private esVip: boolean;
    private visitas: number;
    private id_cliente: string;
    private id_sucursal: string;
    private pacientes:Paciente[];

    constructor(nombre: string, telefono: string, id_sucursal: string) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = false;
        this.visitas = 0;
        this.id_cliente = "";
        this.id_sucursal = id_sucursal;
        this.pacientes =[];
    }
    // OBTENER ID SUCURSAL DEL CLIENTE
    public getId_sucursal(): string {
        return this.id_sucursal;
    }

    // MODIFICAR ID SUCURSAL DEL CLIENTE
    public setId_sucursal(id_sucursal: string): void {
        this.id_sucursal = id_sucursal;
    }

    // OBTENER NOMBRE DE CLIENTE
    public getNombre(): string {
        return this.nombre;
    }

    // MODIFICAR NOMBRE DE CLIENTE
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    // OBTENER TELEFONO CLIENTE
    public getTelefono(): string {
        return this.telefono;
    }

    // MODIFICAR TELEFONO CLIENTE
    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    // OBTENER SI ES VIP
    public getEsVip(): string {
        return this.esVip ? pc.green(pc.bold("SI")): pc.red(pc.bold("NO"));
    }

    // MODIFICAR BOOLEANO SI ES VIP
    public setEsVip(esVip: boolean): void {
        this.esVip = esVip;
    }

    // OBTENER VISITAS
    public getVisitas(): number {
        return this.visitas;
    }

    // MODIFICAR VISITAS
    public setVisitas(visitas: number): void {
        this.visitas = visitas;
    }

    // OBTENER ID CLIENTE
    public getId_cliente(): string {
        return this.id_cliente;
    }

    // MODIFICAR ID CLIENTE
    private setId_cliente(id_cliente: string): void {
        this.id_cliente = id_cliente;
    }

    // VER LISTA DE PACIENTES DE UN CLIENTE
    public getPacientes(): Paciente[] {
        return this.pacientes;
    }

    // MODIFICAR LISTA DE PACIENTES DE UN CLIENTE
    public setPacientes(paciente: Paciente): void {
        this.pacientes.push(paciente);
    }

    // METODO PARA GUARDAR EL ID UNICO
    public guardarId(ids: string[]): void {
        if(this.getId_cliente() === "" || !this.getId_cliente()){
            this.setId_cliente(generarIdUnica(ids));
        }
    }

    // METODO PARA INCREMENTAR LAS VISITAS
    private actualizarVipStatus(): void {
        this.esVip = this.visitas >= 5;
    }

    public incrementarVisitas(): void {
        this.visitas += 1;
        this.actualizarVipStatus();
    }

    // METODO PARA LA SIMULACION DE VISITAS DEL CLIENTE
    public visitar(): void {
        this.incrementarVisitas();
    }
}