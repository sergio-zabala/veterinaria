import { generarIdUnica } from "./funciones/generadorIds";
import { Direccion } from "./poo/Direccion";
import { Veterinaria } from "./poo/Veterinaria";

const ids:string[]=[];

console.log("esta id sera para la veterinaria", generarIdUnica(ids));


const sucursalPatitasFelices: Veterinaria = new Veterinaria();
const direccionPatitasFelices: Direccion = new Direccion("Buenos Aires", "Olavarria", 7400, "Dean Funes", 2828);

sucursalPatitasFelices.setDireccion(direccionPatitasFelices);
console.log("ID VETERINARIA:", sucursalPatitasFelices.getIdVeterinaria());

console.log(sucursalPatitasFelices.getDireccion());


console.log(ids);

