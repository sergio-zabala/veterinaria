export interface Gestion{
    alta(id:string):void
    baja(id:string):void
    modificar(id:string, nombre?:string, telefono?:string):void
}