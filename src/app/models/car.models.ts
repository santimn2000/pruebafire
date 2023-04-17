export class Car{

    public id: string;
    public marca: string;
    public modelo: string;
    public caballos: string;
    public color: string;
    public vel_max: string;


    constructor(obj?: ICar) {
        // this.expirationDate = obj && obj.expirationDate || '';
        this.id = obj && obj.id || '';
        this.marca = obj && obj.marca || '';
        this.modelo = obj && obj.modelo || '';
        this.caballos = obj && obj.caballos || '';
        this.color = obj && obj.color || '';
        this.vel_max = obj && obj.vel_max || '';
        
    }
}

export interface ICar {
    
    id:string;
    marca: string;
    modelo: string;
    caballos: string;
    color: string;
    vel_max: string;
}