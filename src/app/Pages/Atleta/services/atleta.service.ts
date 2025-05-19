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
      "nombre_atleta": parameter.nombre_atleta,
      "id_categoria": parameter.id_categoria,
      "id_competencia": parameter.id_competencia,
      "no_atleta": parameter.no_atleta,
      "no_oleada": parameter.no_oleada,
      "id_usuario": parameter.id_usuario,
      "estado": parameter.estado,
      "talla": parameter.talla,
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
  
  enviarEmail(usuario, parameter, competencia, categoria, isRegistro, subject){
    return this._httpClient.post(`${this.apiUrl}/enviarEmail`, { 
      "atleta": parameter,
      "usuario": usuario,
      "competencia": competencia,
      "categoria": categoria,
      "subject": subject,
      "isRegistro": isRegistro,
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
      "nombre_atleta": parameter.nombre_atleta,
      "id_categoria": parameter.id_categoria,
      "id_competencia": parameter.id_competencia,
      "no_atleta": parameter.no_atleta,
      "no_oleada": parameter.no_oleada,
      "estado": parameter.estado,
      "talla": parameter.talla,
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
