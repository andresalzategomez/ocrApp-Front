import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../../../Core/guards/auth.service';

declare let alertify: any; 

@Component({
  selector: 'signIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss']
})
export class SignInComponent implements OnInit {

  dataForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      password: ["", Validators.required],
    });
  }

  onSubmit(){
    if(this.dataForm.invalid){
      console.log("Inválido");
      return;
    }
    this.signIn();
  }


  signIn(){
    this.usuarioService.signIn(this.dataForm.value)
      .subscribe({
			next: (data: any) => {
        if(data.response == 'OK'){
          if(data?.authenticatedData?.rol != null){
            this.authService.accessToken = data.accessToken.toString();
            this.authService.authenticatedData = data.authenticatedData;
            
            alertify.set('notifier','position', 'top-right');
            alertify.success('Bienvenido!',2);
            this._router.navigate(['/home']);
            // this.headerUserProfile.setUserLogin(true);
          }else{
            alertify.set('notifier','position', 'top-right');
            alertify.warning('Usuario sin rol especificado. Por favor contactar al administrador',5);
          }
        }
        if(data.response == 'error'){
          alertify.set('notifier','position', 'top-right');
          alertify.error('Nombre de usuario o Contraseña incorrecta!',2);
        }
        console.log(data);  
			},
			error: (err) => {
				console.log('Error', JSON.stringify(err));
			},
		}); 
  }
}
