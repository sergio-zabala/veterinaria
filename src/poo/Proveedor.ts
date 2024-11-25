import { generarIdUnica } from "../funcionesConsola/generadorIds";

export class Proveedor {
    // Propiedades
    private nombre: string;
    private telefono: string;
    private id_proveedor: string;
    private id_sucursal: string;

    // Constructor
    constructor(nombre: string, telefono: string, id_sucursal: string) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id_sucursal = id_sucursal;
        this.id_proveedor = "";  //AL PRINCIPIO VACIO
    }

    //<----------------METODOS GETTER Y SETTER----------------------->
    // OBTENER EL ID SUCURSAL
    public getId_sucursal(): string {
        return this.id_sucursal;
    }
    // MODIFICAR EL ID SUCURSAL
    public setId_sucursal(id_sucursal: string): void {
        this.id_sucursal = id_sucursal;
    }
    // OBTENER NOMBRE DE PROVEEDOR
    public getNombre(): string {
        return this.nombre;
    }
    // MODIFICAR EL NOMBRE DE PROVEEDOR

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    // OBTENER TELEFONO DE PROVEEDOR

    public getTelefono(): string {
        return this.telefono;
    }
    // MODIFICAR TELEFONO DE PROVEEDOR
    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }
    // OBTENER ID DE PROVEEDOR
    public getId_proveedor(): string {
        return this.id_proveedor;
    }
    // MODIFICAR ID DE PROVEEDOR
    private setId_proveedor(id_proveedor: string): void {
        this.id_proveedor = id_proveedor;
    }

    // METODO PARA GUARDAR EL ID DEL PROVEEEDOR
    public guardarId(ids: string[]): void {
        // SI EL ATRIBUTO ESTA VACIO O ES UNDEFINED
        if (this.getId_proveedor() === "" || !this.getId_proveedor()) {
            this.setId_proveedor(generarIdUnica(ids));
            return;
        }
    }
}
