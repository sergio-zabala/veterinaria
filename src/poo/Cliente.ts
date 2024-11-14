import { Gestion } from "./gestion";

export class Cliente implements Gestion{
    //propiedades

    private nombre:string;
    private telefono:string;
    private esVip:boolean;
    private visitas:number;
    private id_clientes:string;

    
    
    //Constructor
    
    constructor(nombre:string,telefono:string,esVip:boolean,visitas:number,id_clientes:string){
        this.nombre=nombre;
        this.telefono=telefono;
        this.esVip=esVip;
        this.visitas=visitas;
        this.id_clientes=id_clientes;
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

    public isEsVip(): boolean {
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

    public getId_clientes(): string {
        return this.id_clientes;
    }

    private setId_clientes(id_clientes: string): void {
        this.id_clientes = id_clientes;
    }

 //metodos

 public guardarIds(ids:string[]):void{
    this.setId_clientes(ids)
 }
//implementacion de interface Gestion

    alta(): void {
        
    }
    
    baja(): void {
        
    }

    modificar(): void {
        
    }
}