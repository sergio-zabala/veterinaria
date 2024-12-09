import { Cliente } from "./Cliente";
import pc from "picocolors";

export class Paciente {
    // VARIABLES O ATRIBUTOS
    private static idContador:number=1 //ATRIBUTO CONTADOR ESTATICO
    private nombre: string;
    private especie: string;
    private esExotica: boolean;
    private cliente: Cliente;
    private idPaciente: number;
    private idDuenio: string;
    private id_sucursal: string;

    // CONSTRUCTOR
    constructor(nombre: string, especie: string, cliente: Cliente) {
        this.nombre = nombre;
        this.especie = especie;
        this.esExotica = false;
        this.cliente = cliente;
        this.idPaciente = Paciente.idContador++;
        this.idDuenio = cliente.getId_cliente();  //SE INICIALIZA CON EL ID DEL DUEÑO POR DEFECTO
        this.id_sucursal = cliente.getId_sucursal(); //SE INICIALIZA CON EL ID DE SUCURSAL AL CUAL SE REGISTRA EL CLIENTE POR DEFECTO
        this.validarSiesExotica(); // SE VALIDA SI ES EXOTICA O NO(SE LLAMA EN CUALQUIER CASO DE ACTUALIZAR)
    }

    //---------------------------------->GETTER Y SETTER<------------------------------------------//

    // OBTENER SUCURSAL
    public getId_sucursal(): string {
        return this.id_sucursal;
    }

    // SI EL CLIENTE CAMBIA DE SUCURSAL AL PACIENTE(MASCOTA)
    public setId_sucursal(cliente: Cliente): void {
        this.id_sucursal = cliente.getId_sucursal();
    }

    // OBTENER NOMBRE DE PACIENTE
    public getNombre(): string {
        return this.nombre;
    }

    // CAMBIAR NOMBRE DEL PACIENTE
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    // OBTENER TIPO ESPECIE DE PACIENTE
    public getEspecie(): string {
        return this.especie;
    }

    // MODIFICAR TIPO DE ESPECIE DE PACIENTE
    public setEspecie(especie: string): void {
        this.especie = especie;
        this.validarSiesExotica(); //ACTUALIZA esExotica CUANDO SE ESTABLECE ESPECIE.
    }

    // METODO PARA VER SI ES EXOTICA O NO
    public getEsExotica(): string {
        // USANDO OPERADOR TERNARIO SI ES TRUE SERA "SI" SINO "NO"
        return this.esExotica ? pc.green("SI") : pc.red("NO");
    }

    // MODIFICAR BOOLEANO
    public setEsExotica(esExotica: boolean): void {
        this.esExotica = esExotica;
    }

    // OBTENER ID DE PACIENTE
    public getIdDuenio(): string {
        return this.idDuenio;
    }

    // MODIFICAR ID DE PACIENTE
    public setIdDuenio(cliente: Cliente): void {
        this.idDuenio = cliente.getId_cliente();
    }

    public getIdPaciente(): number {
        return this.idPaciente;
    }

    public setIdPaciente(idPaciente:number){
        this.idPaciente = idPaciente;
    }

    // OBTENER EL CLIENTE DE ESTE PACIENTE
    public getCliente(): Cliente {
        return this.cliente;
    }

    // ACTUALIZAR ID PACIENTE
    public setCliente(cliente: Cliente): void {
        this.cliente = cliente;
        this.idDuenio = cliente.getId_cliente();  // ACTUALIZAMOS ID PACIENTE CUANDO CAMBIAMOS DE CLIENTE
    }

    //---------------------------------->METODOS COMUNES<------------------------------------------//
    public validarSiesExotica(): void {
        const especiesComunes = ["gato", "gata", "perro", "perra"]; //ARREGLO DE ANIMALES
        // GUARDA EN VARIABLE EL VALOR FALSE SOLO SI ES PERRO O GATO PARA EL RESTO SERA TRUE.
        this.setEsExotica(!especiesComunes.includes(this.especie.toLowerCase()))
    }
}
