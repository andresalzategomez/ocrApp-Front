import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, retry, switchMap, throwError } from 'rxjs';
// import { stringify } from 'crypto-js/enc-base64';
import { environment } from '../../../environments/environment';
import { User } from '../user/user.types';
import { CustomError, DataReponse } from '../../Model/data-response.model';
import { EmbryoService } from '../../Services/Embryo.service';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../../Pages/Session/services/usuario.service';
import { Usuario } from '../../Pages/Session/models/Usuario.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService
{
    private _authenticated: boolean = false;
    
    /**URL API EntryPoint */
    private apiUrl = (environment.url_destino + environment.API_URL_USUARIO);
    
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private usuarioService: UsuarioService,
        // private _notificationsService: NotificationsService,
        // private _usersService: UsersService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    set refreshToken(token: string)
    {
        localStorage.setItem('refreshToken', token);
    }

    get refreshToken(): string
    {
        return localStorage.getItem('refreshToken') ?? '';
    }

     /**
     * Setter & getter for authenticated
     */
      set authenticatedData(authenticated: any) {
        console.log('set authenticatedData ' + JSON.stringify(authenticated));
        localStorage.setItem('authenticatedData', JSON.stringify(authenticated).toString());
        // this.findUsuario();
    }

    get authenticatedData(): any {
        return JSON.parse(localStorage.getItem('authenticatedData')|| '{}');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(parameter: any): Observable<any>
    {

        const formData = new FormData();
        formData.append('nombreUsuario', parameter.usuario.toLowerCase().trim());
        formData.append('correo', parameter.email);

        return this._httpClient.post(`${this.apiUrl}/resetPassword`,
        {   "nombreUsuario":parameter.usuario,
            "correo": parameter.email,
            // "header" : {
            //     "userId" : "1",
            //     "token" : null,
            //     "source" : environment.source,
            //     "externalUser" : null,
            //     "apiTraceId" : "Angular-Test",
            //     "tenantId":  environment.tenantId
            // }
        }, aut).
     pipe(
         catchError(err => {
             console.log(err);
                throw new CustomError( err, err.message );
            }),
            retry<any>(3),
            map((data: DataReponse) => {
                if(data.response == 'ERROR'){
                    throw new CustomError( data.errorCode, data.errorDescription );
                } else {
                    return data.response;
                }
            
            })
        );
    }

    cambiarPassword(email: string, password: string, token: string) {
        return this._httpClient
            .post(`${this.apiUrl}/cambiarPassword`, {
                userEmail: email,
                token: token,
                password: password,
                // header : {
                //     "userId" : "1",
                //     "token" : null,
                //     "source" : environment.source,
                //     "externalUser" : null,
                //     "apiTraceId" : "Angular-Test",
                //     "tenantId":  environment.tenantId
                // }
            }, aut)
            .pipe(
                catchError((error) => {
                    if (error.status === 200) return error.message;
                    throw new CustomError( error.status, error.message );
                }),
                retry<any>(3),
                map((data: DataReponse) => {
                    console.log('data', data);
                    if (data.response === 'OK') return data.data;
                    throw new CustomError( data.errorCode, data.errorDescription );
                })
            );
    }

    public getRole() {
		return this._httpClient.post<any>(`${this.apiUrl}/getRole`, {
			tenant: environment.tenant
		}, {
			headers: {
				
				'Authorization': 'Bearer ' + this.accessToken
			}
		})
		.pipe(
			catchError((error) => {
				console.log('error log', error);
				console.error('error', error.error.description);
				throw new CustomError( error.status, error.error.description );  
			}),
			retry(3),
			map((data: any) => {
				if (data.response === 'OK') return data.rol;
			})
		);
	}
    
    getUsuarios(){
        return this._httpClient.post(`${this.apiUrl}/getUsuarios`, {
			tenant: environment.tenant
		}, {
			headers: {
				'Authorization': 'Bearer ' + this.accessToken
			}
		})
        .pipe(
        catchError((error) => {
          console.error('error', error);
          if (error.status === 200) return error.message;
        }),
        retry(3),
          map((data: any) => {
            if (data.response === 'OK') return data.usaurios;
          })
        );	
    }
    
    getUsuariossinRol(){
        return this._httpClient.post(`${this.apiUrl}/getUsuariossinRol`, {
			tenant: environment.tenant
		}, {
			headers: {
				'Authorization': 'Bearer ' + this.accessToken
			}
		})
        .pipe(
        catchError((error) => {
          console.error('error', error);
          if (error.status === 200) return error.message;
        }),
        retry(3),
          map((data: any) => {
            if (data.response === 'OK') return data.usuariosinRol;
          })
        );	
    }

    /**
     * Reset password
     *
     * @param password
     */
     resetPassword(token: string, password: string): Observable<any>
     {
         return this._httpClient.post(`${this.apiUrl}/validarToken`,
         {
             "token": token,
             "password": password,
            //  "header" : {
            //      "userId" : "1",
            //      "token" : null,
            //      "source" : environment.source,
            //      "externalUser" : null,
            //      "apiTraceId" : "Angular-Test",
            //      "tenantId":  environment.tenantId
            //  }
         }, aut).
        pipe(
          catchError(err => {
                console.log(err);
                throw new CustomError( err, err.message );
            }),
            retry<any>(3),
            map((data: DataReponse) => {
                if(data.response == 'ERROR'){
                    // throw new CustomError( data.errorCode, data.errorDescription );
                } else {
                    return data.response;
                }
                
            })
        );
    }


    /**
     * Sign in
     *
     * @param credentials
     */
    signIn2(credentials: { username: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError(() => new Error('User is already logged in.'));
        }

        //Implement the connection to the API to smsecurity
        const formData = new FormData();
        formData.append('username', credentials.username);
        formData.append('password', credentials.password);
       // NUEVO

       console.log('aut::' + JSON.stringify(aut));
       return this._httpClient.post(`${this.apiUrl}/signIn`, formData ).pipe(
           switchMap((response: any) => {
               catchError(error => {
                   console.log('error' + JSON.stringify(error));
                   
                   return throwError(() => new Error(error));
               })
               console.log('response:::' + JSON.stringify(response));
               if (response.response === 'ERROR') {
               
                   return  throwError(() => new Error(response.errordescription));
               }
               //Validate the response from the API in the token
               if(response.token == '' || response.token == null || response.token == undefined) {
               
                   return  throwError(() => new Error('El token no es valido'));
               }

               // Store the access token in the local storage
               this.accessToken = response.token;

               // Store the refresh token in the local storage
               this.refreshToken = response.refreshToken;

               // Store the tenantId in the local storage
               //this.accessTenantId = response.tenantId;

               // Set the authenticated flag to true
               this._authenticated = true;

               // Store the user on the user service
               // this._userService.user = response.userName;

               //Store the access authentication
               this.authenticatedData = response;

               // Return a new observable with the response
               return of(response);
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
            // Store the access token in the local storage
            this.accessToken = data.accessToken;

            // Store the refresh token in the local storage
            // this.refreshToken = data.refreshToken;

            // Store the tenantId in the local storage
            //this.accessTenantId = response.tenantId;

            // Set the authenticated flag to true
            this._authenticated = true;

            // Store the user on the user service
            // this._userService.user = response.userName;

            //Store the access authentication
            this.authenticatedData = data;
            return data;
          })
        );	
    }

    /**
     * Sign in using the access token
     */
     signInUsingToken(): Observable<any>
     {
        /** Nuevo*/
         console.log('signInUsingToken');
 
         //New while for the token exist in the session currently
         if(this.accessToken == '' || this.accessToken == null || this.accessToken == undefined) {
             localStorage.removeItem('accessToken');
             return of(false);
         } else {
             return of(true);
         }
         /** Nuevo fin */
 
         // Renew token
         
     }
 
     /**
      * Sign out
      */
     signOut(): Observable<any>
     {
         // Remove the access token from the local storage
         localStorage.removeItem('accessToken');
 
         // Remove the authenticated Data from the local storage
         localStorage.removeItem('authenticatedData');

         localStorage.removeItem('showAlerta');
 
         // Set the authenticated flag to false
         this.usuarioService._authenticated = false;
         this.accessToken = "";
         this.authenticatedData = null;
 
         // Return the observable
         return of(true);
     }
 
    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
    //    console.log("_authenticated", this._authenticated);
    console.log("this.accessToken", this.accessToken);
    
       debugger
        if(this.accessToken == '' || this.accessToken == null || this.accessToken == undefined) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('authenticatedData');
            localStorage.removeItem('showAlerta');
            return of(false);
        }
        /** Nuevo fin  */

        if(localStorage.getItem('authenticatedData') != null && JSON.parse(localStorage.getItem('authenticatedData')|| '{}').rol === null){
            localStorage.removeItem('accessToken');
            localStorage.removeItem('authenticatedData');
            return of(false);
        }

        // Check if the user is logged in
        if ( this._authenticated )
        // if ( this.usuarioService._authenticated)
        {
           return of(true);
        }
        else{
            console.log('check _authenticated::'+this.usuarioService._authenticated+ ' ==> expiro el accessToken y refreshToken, se procede a salir del sistema');
            // Set the authenticated flag to false
             this.usuarioService._authenticated = false;
            return of(false);
         }/**Fin */

    }

     /** Funcion para llamar el actualizar el token */
// refrescartokenAuth(){
         
//     // Renew token
//     const tokenre = {

//         headers : new HttpHeaders({
//             'Authorization': `Bearer ${this.refreshToken}`,
//         })
//     }

//     console.log('tokenre:::' + JSON.stringify(tokenre));

//     return this._httpClient.get(`${this.apiUrlRefresh}/refreshtoken`, tokenre ).pipe(
//        switchMap((response: any) => {
//            catchError(error => {
//                console.log('error' + JSON.stringify(error));
//                return throwError(() => new Error(error));
              
//            })
//            console.log('response refrescartokenAuth:::');
//            if (response.response === 'ERROR') {
            
//                return throwError(() => new Error(response.errordescription));
//            }
//            //Validate the response from the API in the token
//            if(response.token == '' || response.token == null || response.token == undefined) {
            
//                return throwError(() => new Error('El token no es valido'));
//            }

//            // Store the access token in the local storage
//            this.accessToken = response.token;

//            // Store the refresh token in the local storage
//            this.refreshToken = response.refreshToken;

//            // Store the tenantId in the local storage
//            //this.accessTenantId = response.tenantId;

//            // Set the authenticated flag to true
//            this._authenticated = true;

//            // Store the user on the user service
//            this._userService.user = response.userName;

//            //Store the access authentication
//            this.authenticatedData = response;

//            // Return a new observable with the response
//            return of(true);
//        })
//    );        
// }

  /*** obtener alertas */
//   findUsuario(){
//     let userId = JSON.parse(localStorage.getItem('authenticatedData')).userId;
//     console.log('findusuario auth: '+userId);
//     this._usersService.findUsuario(userId).subscribe({
//     next: (data: User) => {
//         console.log('data  ::>  ',JSON.stringify(data));
//             let dataUser={
//                 nombres:data.name,
//                 nombreUsuario: data.username,
//                 correo:data.email,
//             }

//         localStorage.setItem('dataUser', JSON.stringify(dataUser));
//         },
//         error: (err) => {
//         this.getMessage(err);
//         },
//     });
//   }


    getMessage(err: any) {
        throw new Error('Metodo no implentado en core.');
      }
}

const aut = {

    headers : new HttpHeaders({
        'Authorization': `Basic ${btoa(decodeURIComponent(encodeURIComponent(`${environment.smpa_apigateway_core_user}:${environment.smpa_apigateway_core_pwd}`)))}`,
    })
}
