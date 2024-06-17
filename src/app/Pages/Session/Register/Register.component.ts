import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

declare let alertify: any; 

@Component({
  selector: 'embryo-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})

export class RegisterComponent implements OnInit {

  dataForm:FormGroup
  checkTerms:boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    public router : Router,
  ) {}

  ngOnInit() {
    this.createForm();
    // alertify.set('notifier','position', 'top-right');
    // alertify.success('Usuario creado con exito!',2);
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      username: ["", [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      password: ["", Validators.required],
      terms: [""],
      celular: [null, Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern('^[0-9]{10,10}$')])],
      email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}$")]],
    });
  }

  onSubmit(){
    console.log("this.dataForm", this.dataForm.value);
    
    if(this.dataForm.invalid || !this.checkTerms){
      console.log("Inválido");
      return;
    }
    this.saveUsuario();
  }

  saveUsuario(){
    console.log("save Usuario");
    this.usuarioService.createUsuario(this.dataForm.value)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Usuario creado con exito!',2);

            this.router.navigate(['/home']);
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

  ChangeTerms(event){
    console.log("event", event);
    
  }
}
