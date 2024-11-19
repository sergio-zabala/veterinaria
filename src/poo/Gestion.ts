export interface Gestion {
    //los metodos son publicos y no estan implementados...
    alta (id:string):void;
    modificar (id:string,nombre:string,telefono?:string):void;
    baja (id:string) :void;  
}