import { menuRedPrincipal } from "./funcionesConsola/verificacionOpciones";
import pc from "picocolors";
import { salir } from "./funcionesConsola/readlineSync";

// ARREGLO DE IDENTIFICADORES
let ids:string[]=[];

function main():void {
    while (!salir) { 
        menuRedPrincipal(ids); 
    } 
    console.log(pc.cyan("¡Programa terminado! ¡Hasta luego!"));
}
main();