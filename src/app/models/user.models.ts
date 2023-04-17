export class User{

    public id: string;
    public nombre: string;
    public apellidos: string;
    public telefono: string;
    public correo: string;
    public contrasena: string;


    constructor(obj?: IUser) {
        // this.expirationDate = obj && obj.expirationDate || '';
        this.id = obj && obj.id || '';
        this.nombre = obj && obj.nombre || '';
        this.apellidos = obj && obj.apellidos || '';
        this.telefono = obj && obj.telefono || '';
        this.correo = obj && obj.correo || '';
        this.contrasena = obj && obj.contrasena || '';
        
    }
}

export interface IUser {
    
    id:string;
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    contrasena: string;
}