// ESTA CLASE AL CONTENER MUCHOS PARAMETROS, SERIA TAMBIEN UNA BUENA PRACTICA APLICAR UN PATRON DE DISEÑO, EN ESTE CASO EL ADECUADO SERIA EL BUILDER.

// CLASE DIRECCION
export class Direccion {
    private provincia: string;
    private ciudad: string;
    private codigoPostal: number;
    private calle: string;
    private numero: number;

    constructor(provincia: string, ciudad: string, codigoPostal: number, calle: string, numero: number){
        this.provincia = provincia;
        this.ciudad= ciudad;
        this.codigoPostal = codigoPostal;
        this.calle = calle;
        this.numero = numero
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }

    public getCodigoPostal(): number {
        return this.codigoPostal;
    }

    public setCodigoPostal(codigoPostal: number): void {
        this.codigoPostal = codigoPostal;
    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }
}