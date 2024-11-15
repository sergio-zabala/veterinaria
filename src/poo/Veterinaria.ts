// LIBRERIA DE TABLA
import { table } from 'table';
import { generarIdUnica } from "../funciones/generadorIds";
import { Cliente } from "./Cliente";
import { Direccion } from "./Direccion";
import { Gestion } from "./Gestion";

export class Veterinaria implements Gestion {
    private nombre: string
    private direccion: Direccion
    private idVeterinaria: string
    private clientes: Cliente[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.clientes = [];
    }

    private getNombre(): string {
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

    public getIdVeterinaria(): string | undefined {
        if (this.idVeterinaria) {
            return this.idVeterinaria;
        }
        console.error("Alerta: Esta Veterinaria no contiene id");
    }

    public setIdVeterinaria(idVeterinaria: string): void {
        this.idVeterinaria = idVeterinaria;
    }

    public setCliente(cliente:Cliente): void{
        this.clientes.push(cliente)
    }

    // IMPLEMENTACION DE METODOS DE INTERFACE GESTION
    public alta(idCliente: string): void {
        const nuevoCliente: Cliente | undefined = this.clientes.find((id) => id.getId_clientes() === idCliente);        
        if (!nuevoCliente) return;
        console.log(`El cliente con el id ${nuevoCliente.getId_clientes()} se dio de alta.`);
    }

    public modificar(idCliente: string, nombre: string, telefono: string): void {
        const modificarCliente: Cliente | undefined = this.clientes.find((id) => id.getId_clientes() === idCliente);
        if (!modificarCliente) return
        modificarCliente.setNombre(nombre);
        modificarCliente.setTelefono(telefono);
    }

    public baja(idCliente: string): void {
        const bajaCliente: Cliente[] | undefined = this.clientes.filter((id) => id.getId_clientes() !== idCliente);
        if (!bajaCliente) return;
        this.clientes = bajaCliente;
        console.log(`Se ha dado de baja a cliente con el id ${idCliente}`);
    }

    public guardarId(ids: string[]): void {
        this.setIdVeterinaria(generarIdUnica(ids))
    }

    public mostrarTablaClientes(): void {
        if(this.clientes.length > 0){
            const cabecera: string[] = ['ID', 'Nombre', 'Tel', 'Visitas', 'Es Vip'];
            const datosCls: string[][] = this.clientes.map(cliente => [
                cliente.getId_clientes(),
                cliente.getNombre(),
                cliente.getTelefono(),
                cliente.getVisitas().toString(),
                cliente.isEsVip().toString()
            ]);
    
            // Incluir la cabecera en los datos de la tabla
            const datosTabla: string[][] = [cabecera, ...datosCls];
            console.log(table(datosTabla));
        }else{
            console.log("No hay clientes que mostrar.");
        }
    }

    public mostrarDetalleDireccion(): void {
        const datosDireccion: string[][] = [
            ['Campo', 'Valor'],
            ['Sucursal', `${this.getNombre()}`],
            ['Provincia', `${this.direccion.getProvincia()}`],
            ['Ciudad', `${this.direccion.getCiudad()}`],
            ['cod.Postal', `${this.direccion.getCodigoPostal()}`],
            ['Calle', `${this.direccion.getCalle()}`],
            ['Número', `${this.direccion.getNumero()}`]
        ];

        console.log(table(datosDireccion));
    }
}