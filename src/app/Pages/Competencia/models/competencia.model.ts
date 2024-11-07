 export interface Competencia {
    id:number;
    nombre:string;
    lugar:string;
    direccion:string;
    club:string;
    organizador:string;
    celular_organizador:string;
    documento_organizador:string;
    email_organizador:string;
    fecha: Date;
    estado:string;
    hora_inicio:string;
    hora_final:string;
}

export interface Oleada {
    id:number | null;
    id_competencia?:number;
    id_categoria?:number;
    no_oleada:number;
    fechaInicio:string;
    fechaFin:string;
}