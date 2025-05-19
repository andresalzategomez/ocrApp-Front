 export interface Competencia {
    id:number;
    nombre:string;
    departamento:string;
    municipio:string;
    direccion:string;
    fecha: Date;
    estado:string;
    oficialLiga:boolean;
    aprobado:boolean;
    id_usuario:number;
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