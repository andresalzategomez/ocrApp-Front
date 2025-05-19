import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import { Usuario } from '../models/Usuario.model';
import { catchError, map, retry } from 'rxjs';
import { Injectable } from '@angular/core';

 
@Injectable({
    providedIn: 'root'
  })

export class UsuarioService {
  _authenticated: boolean = false;

    constructor(
        private _httpClient: HttpClient,
      ) {}

      private apiUrl = (environment.url_destino + environment.API_URL_USUARIO);

      savePaciente(parameter: Usuario){
        return this._httpClient.post(`${this.apiUrl}/saveUsuario`, { 
            data: parameter,
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

    public getRole() {
      return this._httpClient.post<any>(`${this.apiUrl}/getRole`, {
        tenant: environment.tenant
      })
      .pipe(
        catchError((error) => {
          console.log('error log', error);
          if (error.status === 200) return error.message;
        }),
        retry(3),
        map((data: any) => {
          if (data.response === 'OK') return data.rol;
        })
      );
    }

    public getRoleById(id) {
      return this._httpClient.post<any>(`${this.apiUrl}/getRoleById`, {
        "id": id,
        "tenant": environment.tenant
      })
      .pipe(
        catchError((error) => {
          console.log('error log', error);
          if (error.status === 200) return error.message;
        }),
        retry(3),
        map((data: any) => {
          if (data.response === 'OK') return data.rol;
        })
      );
    }

    public getClub() {
      return this._httpClient.post<any>(`${this.apiUrl}/getClub`, {
        tenant: environment.tenant
      })
      .pipe(
        catchError((error) => {
          console.log('error log', error);
          if (error.status === 200) return error.message;
        }),
        retry(3),
        map((data: any) => {
          if (data.response === 'OK') return data.club;
        })
      );
    }
    
    createUsuario(parameter: Usuario){
        return this._httpClient.post(`${this.apiUrl}/createUsuario`, { 
            data: parameter,
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

    updateUsuario(data: any, accessToken){
      return this._httpClient.post(`${this.apiUrl}/updateUsuario`, { 
          data,
        }, {
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
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

  signIn(parameter){
      return this._httpClient.post(`${this.apiUrl}/signIn`, { 
          'username': parameter.username,
          'password': parameter.password
        })
      .pipe(
      catchError((error) => {
        console.error('error', error);
        if (error.status === 200) return error.message;
      }),
      retry(3),
        map((data: any) => {
          this._authenticated = true;
          return data;
        })
      );	
  }

  forgotPassword(parameter){
    console.log("parameter", parameter);
    
    return this._httpClient.post(`${this.apiUrl}/forgotPassword`, { 
        'email': parameter
      })
    .pipe(
    catchError((error) => {
      console.error('error', error);
      if (error.status === 200) return error.message;
    }),
    retry(3),
      map((data: any) => {
        this._authenticated = true;
        return data;
      })
    );	
}
  
  logOut(parameter){
      return this._httpClient.post(`${this.apiUrl}/logOut`, { 

        })
      .pipe(
      catchError((error) => {
        console.error('error', error);
        if (error.status === 200) return error.message;
      }),
      retry(3),
        map((data: any) => {
          return data;
        })
      );	
  }
}