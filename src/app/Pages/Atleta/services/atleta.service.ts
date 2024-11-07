import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, map, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Atleta } from '../models/atleta.model';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  private apiUrl = environment.url_destino + environment.API_URL_OCR;

  saveAtleta(parameter: Atleta){
    return this._httpClient.post(`${this.apiUrl}/createAtleta`, { 
      "nombre": parameter.nombre,
      "documento": parameter.documento,
      "celular": parameter.celular,
      "email": parameter.email,
      "categoria_id": parameter.categoria_id,
      "competencia_id": parameter.competencia_id,
      "no_atleta": parameter.no_atleta,
      "no_oleada": parameter.no_oleada,
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

  updateAtleta(parameter: Atleta){
    return this._httpClient.post(`${this.apiUrl}/updateAtleta`, { 
      "id": parameter.id,
      "nombre": parameter.nombre,
      "documento": parameter.documento,
      "celular": parameter.celular,
      "email": parameter.email,
      "categoria_id": parameter.categoria_id,
      "competencia_id": parameter.competencia_id,
      "no_atleta": parameter.no_atleta,
      "no_oleada": parameter.no_oleada,
      "estado": parameter.estado,
      "tiempo_competencia": parameter.tiempo_competencia,
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

  asignarTiempoAtleta(parameter: Atleta){
    return this._httpClient.post(`${this.apiUrl}/asignarTiempoAtleta`, { 
      "id": parameter.id,
      "tiempo_competencia": parameter.tiempo_competencia,
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

  getCategoriaByCompetenciaId(idCompetencia:number){
    return this._httpClient.post(`${this.apiUrl}/getCategoriaByCompetenciaId`, {
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
        if (data.response === 'OK') return data.categoria;
      })
    );	
  }

  getCountAtletasByCompetencia(idCompetencia:number){
    return this._httpClient.post(`${this.apiUrl}/getCountAtletasByCompetencia`, {
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
        if (data.response === 'OK') return data.atletas;
      })
    );	
  }

  getAtletaByCompetencia(idCompetencia){
    return this._httpClient.post(`${this.apiUrl}/getAtletaByCompetencia`, { 
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
        if (data.response === 'OK') return data.atleta;
      })
    );	
  }
}
