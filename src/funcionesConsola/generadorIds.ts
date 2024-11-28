// ALMACENAMIENTO DE CARACTERES
let caracteresMinus:string = "abcdefghijklmnopqrstuvwxyz";
const caracteresMayus:string = caracteresMinus.toUpperCase();
const numeros: string= "0123456789";

// FUNCION QUE SE ENCARGA DE GENERAR EL ID Y VALIDAR SI EXISTE EN ARREGLO. RETORNA EL ID.
export function generarIdUnica(ids:string[]):string {
    const longitud=10; //LONGITUD QUE TENDRA EL ID GENERADO
    let id: string= ""; // ID VACIO QUE GUARDARA EL ID GENERADO.

    // CONCATENAR TODAS LAS VARIABLES DE STRINGS
    const caracteres:string = `${caracteresMinus}${caracteresMayus}${numeros}`; //LONGITUD 83
    
    // BUCLE QUE ITERA 10 VECES
    for (let i = 1; i < longitud; i++) {
        let random:number = Math.floor(Math.random() * caracteres.length); //RANDOM CON REFERENCIA A LONGITUD DE CARACTERES.
        id += caracteres[random]; //GUARDAR Y CONCATENAR EL CARACTER GENERADO EN CADA VUELTA.
    }
    // USANDO RECURSIVIDAD, VALIDAMOS SI EXISTE EL ID EN ARREGLO.
    if (ids.length > 0 && ids.includes(id)) {
        // SI EXISTE SE AUTO EJECUTA
        return generarIdUnica(ids);
    }
    // SINO GUARDAR Y RETORNAR ESE ID.
    ids.push(id);
    return id;
}