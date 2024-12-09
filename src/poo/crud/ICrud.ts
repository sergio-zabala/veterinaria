import { Cliente } from "../Cliente";
import { CentralVeterinaria } from "../RedVeterinaria";

// CRUD (CREATE, READ,UPDATE, DELETE)
export interface ICrud{
    registrar(ids?:string[], cliente?:Cliente):void
    baja(centralVeterinaria?:CentralVeterinaria):void;
    modificar(centralVeterinaria?:CentralVeterinaria):void;
    mostrar(centralVeterinaria?: CentralVeterinaria):void;
}