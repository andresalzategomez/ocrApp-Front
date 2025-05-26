import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment'
import { catchError, map, retry } from 'rxjs';
import {Categoria} from '../models/categoria.model'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  private apiUrl = environment.url_destino + environment.API_URL_OCR;

  
  saveCategoria(parameter: Categoria){
    return this._httpClient.post(`${this.apiUrl}/createCategoria`, { 
      "nombre": parameter.nombre,
      "descripcion": parameter.descripcion,
      "idCompetencia": parameter.id_competencia,
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

  updateCategoria(parameter: Categoria){
    return this._httpClient.post(`${this.apiUrl}/updateCategoria`, { 
      "id": parameter.id,
      "nombre": parameter.nombre,
      "descripcion": parameter.descripcion,
      "no_oleada": parameter.no_oleada,
      "idCompetencia": parameter.id_competencia,
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


  getCompetenciasInicioById(idUsuario){
    return this._httpClient.post(`${this.apiUrl}/getCompetenciasInicioById`, { 
      "id_usuario": idUsuario,
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


  getCompetenciasInicio(){
    return this._httpClient.post(`${this.apiUrl}/getCompetenciasInicio`, { 
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


  getCompetenciasPorAprobar(){
    return this._httpClient.post(`${this.apiUrl}/getCompetenciasPorAprobar`, { 
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

  getCompetenciasPorAprobarLiga(){
    return this._httpClient.post(`${this.apiUrl}/getCompetenciasPorAprobarLiga`, { 
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

  getCompetenciasFinalizadas(){
    return this._httpClient.post(`${this.apiUrl}/getCompetenciasFinalizadas`, { 
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

  getCategoria(){
    return this._httpClient.post(`${this.apiUrl}/getCategoria`, { 
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

  getCategoriaByCompetencia(idCompetencia){
    return this._httpClient.post(`${this.apiUrl}/getCategoriaByCompetencia`, { 
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

  cambiarAprobadoLiga(aprobado, id){
    return this._httpClient.post(`${this.apiUrl}/cambiarAprobadoLiga`, { 
      "id": id,
      "aprobado": aprobado,
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

  cambiarAprobado(aprobado, id){
    return this._httpClient.post(`${this.apiUrl}/cambiarAprobado`, { 
      "id": id,
      "aprobado": aprobado,
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
}
