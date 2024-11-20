import { Cliente } from "./poo/Cliente";
import { Direccion } from "./poo/Direccion";
import { Veterinaria } from "./poo/Veterinaria";
const ids: string[] = [];

const main = (): void => {
    // instanciar direccion
    const dirPatitasFelices: Direccion = new Direccion("Buenos Aires", "Olavarria", 7400, "Dean Funes", 2828);
   dirPatitasFelices.setCalle("Sarmiento");
   dirPatitasFelices.setNumero(2514);
    // instancia sucursal
    const sucursalPatitasFelices: Veterinaria = new Veterinaria("Patitas Felices",dirPatitasFelices);
    sucursalPatitasFelices.guardarId(ids); //generar id de sucursal
    sucursalPatitasFelices.mostrarDetalleDireccion();
    

    //instanciar nuevo Cliente
    const cliente_1: Cliente = new Cliente("Gustavo", "23251212");
    cliente_1.guardarId(ids); // generar id cliente

    const cliente_2: Cliente = new Cliente("Pablo", "12235888");
    cliente_2.guardarId(ids); // generar id cliente

    const cliente_3: Cliente = new Cliente("Maria", "787887878");
    cliente_3.guardarId(ids); // generar id cliente


    // establecer direccion a sucursal
    sucursalPatitasFelices.setDireccion(dirPatitasFelices);

    sucursalPatitasFelices.setCliente(cliente_1);
    sucursalPatitasFelices.setCliente(cliente_2);
    sucursalPatitasFelices.setCliente(cliente_3);

    // EJEMPLO DAR DE ALTA
    sucursalPatitasFelices.alta(cliente_1.getId_cliente());
    sucursalPatitasFelices.alta(cliente_2.getId_cliente());
    sucursalPatitasFelices.alta(cliente_3.getId_cliente());

    // MOSTRAR TABLA
    sucursalPatitasFelices.mostrarTablaClientes();


    // EJEMPLO DAR DE BAJA
    sucursalPatitasFelices.baja(cliente_1.getId_cliente());

    // EJEMPLO DE VISITAR.
    cliente_2.visitar(6);
    cliente_3.visitar(2);


    // MOSTRAR TABLA
    sucursalPatitasFelices.mostrarTablaClientes();


}

// EJECUCION DEL PROGRAMA PRINCIPAL
main();


