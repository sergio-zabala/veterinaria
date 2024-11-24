import { CentralVeterinaria } from "./poo/RedVeterinaria";
import { menuRedPrincipal } from "./funcionesConsola/verificacionOpciones";

// INSTANCIA DE CENTRAL DE VETERINARIA
const centralVeterinaria:CentralVeterinaria = new CentralVeterinaria("Central Veterinaria", "123-456-789");
// ARREGLO DE IDENTIFICADORES
let ids:string[]=[];

function main():void {
    menuRedPrincipal(centralVeterinaria, ids);
}
main();