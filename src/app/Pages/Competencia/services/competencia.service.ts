import { Injectable } from '@angular/core';
import { Competencia, Oleada } from '../models/competencia.model';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { catchError, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  private apiUrl = environment.url_destino + environment.API_URL_OCR;

  saveCompetencia(parameter: Competencia){
    return this._httpClient.post(`${this.apiUrl}/createCompetencia`, { 
      "nombre": parameter.nombre,
      "departamento": parameter.departamento,
      "municipio": parameter.municipio,
      "direccion": parameter.direccion,
      "id_usuario": parameter.id_usuario,
      "fecha": parameter.fecha,
      "estado": parameter.estado,
      "oficialLiga": parameter.oficialLiga,
      "tenant": environment.tenant
    })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.response === 'OK') return data;
      })
    );	
  }

  updateCompetencia(parameter: Competencia){
    return this._httpClient.post(`${this.apiUrl}/updateCompetencia`, { 
      "id": parameter.id,
      "nombre": parameter.nombre,
      "departamento": parameter.departamento,
      "municipio": parameter.municipio,
      "direccion": parameter.direccion,
      "fecha": parameter.fecha,
      "hora_inicio": parameter.hora_inicio,
      "hora_final": parameter.hora_final,
      "estado": parameter.estado,
      "id_usuario": parameter.id_usuario,
      "aprobado": parameter.aprobado,
      "oficialLiga": parameter.oficialLiga,
      "tenant": environment.tenant
    })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.response === 'OK') return data;
      })
    );	
  }

  getCompetenciaById(idCompetencia){
    return this._httpClient.post(`${this.apiUrl}/getCompetenciaById`, { 
      "id": idCompetencia,
      "tenant": environment.tenant
    })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.response === 'OK') return data.competencia;
      })
    );	
  }

  getOleadaByCompetencia(idCompetencia){
    return this._httpClient.post(`${this.apiUrl}/getOleadaByCompetencia`, { 
      "idCompetencia": idCompetencia,
      "tenant": environment.tenant
    })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.response === 'OK') return data.oleadas;
      })
    );	
  }

  saveOleada(parameter: Oleada){
    return this._httpClient.post(`${this.apiUrl}/createOleada`, { 
      "id_competencia": parameter.id_competencia,
      "id_categoria": parameter.id_categoria,
      "no_oleada": parameter.no_oleada,
      "fechaInicio": parameter.fechaInicio,
      "tenant": environment.tenant
    })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.response === 'OK') return data;
      })
    );	
  }

  updateOleada(parameter: Oleada){
    return this._httpClient.post(`${this.apiUrl}/updateOleada`, { 
      "id": parameter.id,
      "id_competencia": parameter.id_competencia,
      "id_categoria": parameter.id_categoria,
      "no_oleada": parameter.no_oleada,
      "fechaInicio": parameter.fechaInicio,
      "fechaFin": parameter.fechaFin,
      "tenant": environment.tenant
    })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.response === 'OK') return data;
      })
    );	
  }
}
