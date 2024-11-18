import { generarIdUnica } from "../funciones/generadorIds";
import { Gestion } from "./Gestion";

export class Cliente implements Gestion{
    //propiedades

    private nombre:string;
    private telefono:string;
    private esVip:boolean;
    private visitas:number;
    private id_cliente:string;

    
    
    //Constructor
    
    constructor(nombre:string,telefono:string){
        this.nombre=nombre;
        this.telefono=telefono;
        this.esVip=false;
        this.visitas=0;
        this.id_cliente="";
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

    public getEsVip(): boolean {
        return this.esVip;
    }

    public setEsVip(esVip: boolean): void {
        this.esVip = esVip;
    }

    public getVisitas(): number {
        return this.visitas;
    }

    public setVisitas(visitas: number): void {
        this.visitas = visitas;
    }

    public getId_cliente(): string {
        return this.id_cliente;
    }

    private setId_cliente(id_cliente: string): void {
        this.id_cliente = id_cliente;
    }

 //metodos

 public guardarId(ids:string[]):void{
    this.setId_cliente(generarIdUnica(ids));
    console.log("ID de cliente guardado de forma exitosa."); 
 }

    // Método para incrementar el número de visitas
 private incrementarVisitas(): void {
    this.visitas++;
    // Si el cliente alcanza un numero de visitas 5 o mas, se convierte en VIP
    if (this.visitas >= 5) {
        this.esVip = true;
    }
 }

 // Método para simular la visita de un cliente
 public visitar(cantidadVisitas:number): void {
     if (cantidadVisitas > 0) {
         for (let i = 0; i < cantidadVisitas; i++) {
             this.incrementarVisitas();
             
        }
    }
    
    console.log(`${this.nombre} ha visitado. Visitas totales: ${this.visitas}`);
 }


//implementacion de interface Gestion

    alta(): void {
        
    }
    
    baja(): void {
        
    }

    modificar(id:string,nombre:string,telefono?:string): void {
        
    }
}