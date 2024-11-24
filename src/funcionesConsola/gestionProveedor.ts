import { Proveedor } from "../poo/Proveedor";
import { CentralVeterinaria } from "../poo/RedVeterinaria";
import { seleccionarSucursal } from "./gestionRed";
import { obtenerDato } from "./readlineSync";

// FUNCION PARA REGISTRAR UN NUEVO PROVEEDOR DE UNA SUCURSAL ESPECIFICA CONSOLA
export function registrarProveedor(centralVeterinaria:CentralVeterinaria, ids:string[]):void {
    const idSucursal = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSucursal) return;

    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSucursal);

    // SI SUCURSAL EXISTE
    if (sucursal) {
        const nombre = obtenerDato("Nombre del proveedor: ");
        const telefono = obtenerDato("telefono: ");
        const proveedor = new Proveedor(nombre, telefono,idSucursal); 
        proveedor.guardarId(ids);
        sucursal.altaProveedor(proveedor); 
    }
}

// FUNCION PARA MOSTRAR PROVEEDORES DE UNA SUCURSAL ESPECIFICA DESDE CONSOLA
export function mostrarProveedores(centralVeterinaria:CentralVeterinaria):void {
    const idSucursal = seleccionarSucursal(centralVeterinaria);
    // SI ID EXISTE
    if (!idSucursal) return;

    const sucursal = centralVeterinaria.getVeterinarias().find(vet => vet.getIdVeterinaria() === idSucursal);
    // SI SUCURSAL EXISTE
    if (sucursal) {
        sucursal.mostrarTablaProveedores(); 
    }
}