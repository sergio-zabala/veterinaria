import readlineSync from "readline-sync";

// FUNCION QUE EVALUA CUANDO SALIR DEL FLUJO
export let salir: boolean = false;

export function setSalir(value: boolean): void { 
    salir = value; 
}

// FUNCION PARA OBTENER DATOS DE TIPO STRING
export function obtenerDato(mensaje: string): string {
    return readlineSync.question(mensaje);
}
// FUNCION PARA OBTENER DATOS DET TIPO NUMERICOS
export function obtenerDatoNumerico(mensaje: string): number {
    return readlineSync.questionInt(mensaje);
}
