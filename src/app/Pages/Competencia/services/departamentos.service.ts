import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { catchError, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  private apiUrl = environment.url_api_colombia;

  getDepartamento(){
    return this._httpClient.get(`${this.apiUrl}/Department`)
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.length > 0) return data;
      })
    );	
  }

  getMunicipios(){
    return this._httpClient.get(`${this.apiUrl}/City`)
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        if (data.length > 0) return data;
      })
    );	
  }

}
