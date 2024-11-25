import { CentralVeterinaria } from "./poo/RedVeterinaria";
import { menuRedPrincipal } from "./funcionesConsola/verificacionOpciones";
import pc from "picocolors";
import { salir } from "./funcionesConsola/readlineSync";

// INSTANCIA DE CENTRAL DE VETERINARIA
const centralVeterinaria:CentralVeterinaria = new CentralVeterinaria("Central Veterinaria", "123-456-789");
// ARREGLO DE IDENTIFICADORES
let ids:string[]=[];

function main():void {
    while (!salir) { 
        menuRedPrincipal(centralVeterinaria, ids); 
    } 
    console.log(pc.cyan("¡Programa terminado! ¡Hasta luego!"));
}
main();