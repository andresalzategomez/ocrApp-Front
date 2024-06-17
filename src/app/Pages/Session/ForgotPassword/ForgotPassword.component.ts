import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/guards/auth.service';


declare let alertify: any; 
@Component({
  selector: 'embryo-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  dataForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    public router : Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      correo: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}$")]],
      repetirCorreo: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}$")]]
    });
  }

  onSubmit(){
    console.log("this.dataForm", this.dataForm.value);
    
    if(this.dataForm.invalid){
      alertify.set('notifier','position', 'top-right');
      alertify.warning('Formulario inválido!',2);
      return;
    }else{
      if(this.dataForm.get("correo").value != this.dataForm.get("repetirCorreo").value){
        alertify.set('notifier','position', 'top-right');
        alertify.warning('los correos no coinciden!',2);
        return;
      }
    }
    this.forgotPassword();
  }

  forgotPassword(){
    this.usuarioService.forgotPassword(this.dataForm.get("correo").value)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Revisa el correo!',2);

            // this.router.navigate(['/home']);
          }else{
            if(data?.response == 'OK'){
              alertify.set('notifier','position', 'top-right');
              alertify.warning('Usuario no existente!',2);
            }
          }
        },
        error: (err) => {
          // this.showAlert = true;
          // this.alert = {
          //   type   : 'error',
          //   message: `${err.errorDescription}`
          // };
        },
      });
  }

}
