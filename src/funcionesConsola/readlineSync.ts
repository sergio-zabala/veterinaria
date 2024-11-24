import readlineSync from "readline-sync";
// FUNCION PARA OBTENER DATOS DE TIPO STRING
export function obtenerDato(mensaje: string): string {
    return readlineSync.question(mensaje);
}
// FUNCION PARA OBTENER DATOS DET TIPO NUMERICOS
export function obtenerDatoNumerico(mensaje: string): number {
    return readlineSync.questionInt(mensaje);
}
