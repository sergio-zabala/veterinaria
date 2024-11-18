import { Gestion } from "./Gestion";

export class Proveedor implements Gestion{
        //Propiedades

private nombre:string;
private telefono:string;
private id_proveedor:string;



//Constructor.

constructor(nombre:string,telefono:string){
    this.nombre=nombre;
    this.telefono=telefono;
    this.id_proveedor="";
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

public getId_proveedor(): string {
    return this.id_proveedor;
}

private setId_proveedor(id_proveedor: string): void {
    this.id_proveedor = id_proveedor;
}

public guardarIds(ids:string[]):void{
    this.setId_proveedor(ids);
    console.log("ID de proveedor guardado de forma exitosa."); 
}

//implementacion de interface Gestion

alta(): void {
        
}

baja(): void {
    
}

modificar(id:string,nombre?:string,telefono?:string): void {
    
}
}