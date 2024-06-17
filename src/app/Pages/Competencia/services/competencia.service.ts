import { Injectable } from '@angular/core';
import { Competencia } from '../models/competencia.model';
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
      "lugar": parameter.lugar,
      "direccion": parameter.direccion,
      "organizador": parameter.organizador,
      "celular_organizador": parameter.celular_organizador,
      "documento_organizador": parameter.documento_organizador,
      "email_organizador": parameter.email_organizador,
      "fecha": parameter.fecha,
      "estado": parameter.estado,
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
}
