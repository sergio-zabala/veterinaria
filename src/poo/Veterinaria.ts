// LIBRERIA DE TABLA
import { table } from 'table';
import { generarIdUnica } from "../funcionesConsola/generadorIds";
import { Cliente } from "./Cliente";
import { Proveedor } from './Proveedor';
import { Paciente } from './Paciente';
import pc from "picocolors";


export class Veterinaria {
    private nombre: string;
    private telefono: string;
    private calle: string;
    private numero: number;
    private idVeterinaria: string;
    private clientes: Cliente[];
    private proveedores: Proveedor[];
    private pacientes: Paciente[];


    // CONSTRUCTOR
    constructor(nombre: string, telefono: string, calle: string, numero: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.calle = calle;
        this.numero = numero;
        this.clientes = [];
        this.proveedores = [];
        this.pacientes = [];
        this.idVeterinaria = "";
    }

    //---------------------------------->GETTER Y SETTER<------------------------------------------//
    // OBTENER  NOMBRE NOMBRE CLIENTE
    public getNombre(): string {
        return this.nombre;
    }

    // MODIFICAR NOMBRE CLIENTE
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    // OBTENER TELEFONO DE CLIENTE
    public getTelefono(): string {
        return this.telefono;
    }
    // MODIFICAR TELEFONO DE CLIENTE
    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }
    // OBTENER NOMBRE DE CALLE DE VETERINARIA
    public getCalle(): string {
        return this.calle;
    }
    // MODIFICAR NOMBRE DE CALLE DE VETERINARIA

    public setCalle(calle: string): void {
        this.calle = calle;
    }
    // OBTENER NUMERO DE CALLE DE VETERINARIA

    public getNumero(): number {
        return this.numero;
    }
    // MODIFICAR NUMERO DE CALLE DE VETERINARIA
    public setNumero(numero: number): void {
        this.numero = numero;
    }
    // OBTENER LISTA DE CLIENTES
    public getClientes(): Cliente[] {
        return this.clientes;
    }
    // OBTENER LISTA DE PROVEEDORES
    public getProveedores(): Proveedor[] {
        return this.proveedores;
    }

    // OBTENER LISTA DE PACIENTES
    public getPacientes(): Paciente[] {
        return this.pacientes;
    }

    // OBTENER ID DE SUCURSAL DE VETERINARIA
    public getIdVeterinaria(): string {
        if (this.idVeterinaria) {
            return this.idVeterinaria;
        }
        throw new Error(pc.magenta("Ocurrio un problema, La Veterinaria no contiene id"));
    }


    // MODIFICAR ID DE SUCURSAL VETERINARIA
    public setIdVeterinaria(idVeterinaria: string): void {
        this.idVeterinaria = idVeterinaria;
    }

    //---------------------------------->METODOS COMUNES<------------------------------------------//

    // ALTAS, BAJAS Y MODIFICACION DE CIENTE
    public altaCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log(pc.green(`El cliente "${cliente.getNombre()}" se dio de alta.`));
    }

    // MODIFICAR CLIENTE
    public modificarCliente(idCliente: string, nombre: string, telefono: string): void {
        const modificarCliente: Cliente | undefined = this.clientes.find((id) => id.getId_cliente() === idCliente);
        // SI NO ENCUENTRA EL ID DE CLIENTE
        if (!modificarCliente) {
            console.log(pc.magenta(`NO SE PUDO MODIFICAR: El cliente con el id "${idCliente}" no existe`));
            return
        }
        // MODIFICAR NOMBRE Y TEL
        modificarCliente.setNombre(nombre);
        modificarCliente.setTelefono(telefono);
        modificarCliente.setTelefono(telefono);
        console.log(pc.green(`El cliente con id "${modificarCliente.getId_cliente()}" ha sido editado con exito!`));
    }

    // DAR DE DE BAJA CLIENTE
    public bajaCliente(idCliente: string): void {
        const inicialLength = this.clientes.length; // GUARDA LONGITUD INICIAL

        // FILTRAR Y DISCRIMINAR AL OBJETO CON EL ID QUE SE LE PASA
        this.clientes = this.clientes.filter((id) => id.getId_cliente() !== idCliente);
        if (this.clientes.length === inicialLength) {
            console.log(pc.magenta(`IMPOSIBLE ELIMINAR: El cliente con id "${idCliente}" no existe`));
            return
        };
        console.log(pc.yellow(`Se ha dado de baja a cliente con el id "${idCliente}"`));
    }

    // ALTAS, BAJAS Y MODIFICACION DE PROVEEDOR
    public altaProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
        console.log(pc.green(`El proveedor "${proveedor.getNombre()}" se dio de alta.`));
    }

    // MODIFICAR PROVEEDOR
    public modificarProveedor(idProveedor: string, nombre: string, telefono: string): void {
        const modificarProveedor: Proveedor | undefined = this.proveedores.find((id) => id.getId_proveedor() === idProveedor);

        // SI NO ENCUENTRA EL ID DE PROVEEDOR
        if (!modificarProveedor) {
            console.log(pc.magenta(`NO SE PUDO MODIFICAR: El proveedor con el id "${idProveedor}" no existe`));
            return
        }
        modificarProveedor.setNombre(nombre);
        modificarProveedor.setTelefono(telefono);
        console.log(pc.green(`El proveedor con id "${modificarProveedor.getId_proveedor()}" ha sido editado con exito!`));
    }
    // DAR DE BAJA UN PROVEEDOR
    public bajaProveedor(idProveedor: string): void {
        const inicialLength = this.proveedores.length;
        this.proveedores = this.proveedores.filter((id) => id.getId_proveedor() !== idProveedor);
        if (this.proveedores.length === inicialLength) {
            console.log(pc.magenta(`IMPOSIBLE ELIMINAR: El proveedor con el id "${idProveedor}" no existe`));
            return
        };
        console.log(pc.yellow(`Se ha dado de baja al proveedor con el id "${idProveedor}"`));
    }

    //ALTAS, BAJAS Y MODIFICACION DE PACIENTES
    public altaPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
        console.log(pc.green(`El paciente "${paciente.getNombre()}" se dio de alta.`));
    }

    public modificarPaciente(idPaciente: string, nombre: string): void {
        const modificarPaciente: Paciente | undefined = this.pacientes.find((id) => id.getIdPaciente() === idPaciente);

        // SI NO ENCUENTRA EL ID DE PACIENTE
        if (!modificarPaciente) {
            console.log(pc.magenta(`NO SE PUDO MODIFICAR: El paciente con el id "${idPaciente}" no existe`));
            return
        }
        modificarPaciente.setNombre(nombre);
        console.log(pc.green(`El paciente con el id "${modificarPaciente.getIdPaciente()}" ha sido editado con exito!`));
    }


    public guardarId(ids: string[]): void {
        // SI EL ATRIBUTO ESTA VACIO O ES UNDEFINED
        if (this.idVeterinaria === "" || !this.idVeterinaria) {
            this.setIdVeterinaria(generarIdUnica(ids))
        }
    }

    // METODO PRIVADO QUE SOLO SE ENCARGA DE MOSTRAR LA TABLA NECESARIA USANDO LIBRERIA TABLE
    private mostrarTabla(headers: string[], data: string[][]): void {
        if (data.length > 0) {
            const datosTabla: string[][] = [headers, ...data];
            console.log(table(datosTabla));
        } else {
            console.log(pc.bold("No hay datos que mostrar."));
        }
    }

    // MOSTRAR TABLA CLIENTES
    public mostrarTablaClientes(): void {
        // SI CLIENTES CONTIENE ELEMENTOS
        if (this.clientes.length > 0) {
            const cabecera: string[] = [pc.bold("Nombre"), pc.bold("Teléfono"), pc.bold("Visitas"), pc.bold("VIP")];
            const datosClientes: string[][] = this.clientes.map(cliente => [
                pc.cyan(cliente.getNombre()),
                pc.cyan(cliente.getTelefono()),
                pc.cyan(cliente.getVisitas().toString()),
                pc.cyan(cliente.getEsVip())
            ]);
            this.mostrarTabla(cabecera, datosClientes);
            return;
        }
        console.log(pc.yellow("No hay clientes registrados en esta sucursal."));
        return;
    }

    // MOSTRAR TABLAS PROVEEDORES
    public mostrarTablaProveedores(): void {
        // SI PROVEEDORES CONTIENE ELEMENTOS
        if (this.proveedores.length > 0) {
            const cabecera: string[] = [pc.bold("ID"), pc.bold("Nombre"), pc.bold("Telefono")];
            const datosPdres: string[][] = this.proveedores.map(proveedor => [
                pc.cyan(proveedor.getId_proveedor()),
                pc.cyan(proveedor.getNombre()),
                pc.cyan(proveedor.getTelefono())
            ]);

            this.mostrarTabla(cabecera, datosPdres);
            return;
        }
        console.log(pc.yellow("No hay proveedores registrados en esta sucursal."));
        return;
    }

    // MOSTRAR TABLA PACIENTES
    public mostrarTablaPacientes(): void {
        // SI PACIENTES CONTIENE ELEMENTOS
        if (this.pacientes.length > 0) {
            const cabecera: string[] = [pc.bold("ID"), pc.bold("Nombre"), pc.bold("Especie"), pc.bold("Es exotico")];
            const datosPtes: string[][] = this.pacientes.map(paciente => [
                pc.cyan(paciente.getIdPaciente()),
                pc.cyan(paciente.getNombre()),
                pc.cyan(paciente.getEspecie()),
                paciente.getEsExotica()
            ]);

            this.mostrarTabla(cabecera, datosPtes);
        }
        console.log(pc.yellow("No hay pacientes registrados en esta sucursal."));
        return;
    }
}