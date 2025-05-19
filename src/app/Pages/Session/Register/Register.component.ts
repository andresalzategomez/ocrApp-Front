import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { DepartamentosService } from '../../Competencia/services/departamentos.service';
import { DatePipe } from '@angular/common';
import { AtletaService } from '../../Atleta/services/atleta.service';

declare let alertify: any; 

@Component({
  selector: 'embryo-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})

export class RegisterComponent implements OnInit {

  dataForm:FormGroup
  checkTerms:boolean = true;
  roles:any[]=[];
  clubs:any[]=[];
  rolesAux:any[]=[];
  userLogin:any;

  municipiosList:any[] = [];

  genero:string [] = ['Masculino', 'Femenino'];

  maxDate:Date;
  minDate:Date;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private departamentosService: DepartamentosService,
    private atletaService: AtletaService,
    private datePipe: DatePipe,
    public router : Router,
  ) {}

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem('authenticatedData')|| '')
    this.maxDate = new Date(Date.now());
    this.createForm();
    this.initForm()
    // alertify.set('notifier','position', 'top-right');
    // alertify.success('Usuario creado con exito!',2);
  }

  async initForm(){
    await this.getMunicipios();
    await this.findRole()
    await this.findClubs()
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}$")]],
      password: ["", Validators.required],
      id_rol: [null, [Validators.required]],
      username: ["", [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      tipo_documento: ["", [Validators.required]],
      id_club: [null, [Validators.required]],
      celular: [null, Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern('^[0-9]{10,10}$')])],
      estado: ["ACTIVO"],
      fecha_nacimiento_aux: ["", [Validators.required]],
      fecha_nacimiento: [""],
      genero: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      municipio: ["", [Validators.required]],
      eps: ["", [Validators.required]],
      rh: ["", [Validators.required]],
      contacto_emergencia: ["", [Validators.required]],
      nombre_contacto_emergencia: ["", [Validators.required]],
      celular_contacto_emergencia: ["", [Validators.required]],
    });
  }

  onSubmit(){
    this.dataForm.get("contacto_emergencia")?.setValue(this.dataForm.get("nombre_contacto_emergencia")?.value + " - " + this.dataForm.get("celular_contacto_emergencia")?.value);
    this.dataForm.get("fecha_nacimiento")?.setValue(this.datePipe.transform(this.dataForm.get("fecha_nacimiento_aux")?.value,"yyyy-MM-dd"));
    if(this.dataForm.invalid || !this.checkTerms){
      console.log("Inválido");
      return;
    }
    this.saveUsuario();
  }

  saveUsuario(){
    this.dataForm.get("contacto_emergencia")?.setValue(this.dataForm.get("nombre_contacto_emergencia")?.value + " - " + this.dataForm.get("celular_contacto_emergencia")?.value);
    this.dataForm.get("fecha_nacimiento")?.setValue(this.datePipe.transform(this.dataForm.get("fecha_nacimiento_aux")?.value,"yyyy-MM-dd"));
    console.log("dataForm", this.dataForm.value);
    this.usuarioService.createUsuario(this.dataForm.value)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            this.enviarEmail();
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

  findRole(){
    this.usuarioService.getRole().subscribe({
			next: (data: any) => {
				this.roles = data;
        this.roles.forEach((element) => {
          if(element.nombre != "ADMIN" && element.nombre != 'ADMINLIGA') this.rolesAux.push(element);
        });
        console.log("this.roles", this.rolesAux);
			},
			error: (err) => {
				console.log('Error', JSON.stringify(err));
				alertify.set('notifier','position', 'top-right');
				alertify.error(`${err.errorDescription}`,2);
			},
		});
  }

  findClubs(){
    this.usuarioService.getClub().subscribe({
			next: (data: any) => {
				this.clubs = data;
        console.log("this.clubs", this.clubs);
			},
			error: (err) => {
				console.log('Error', JSON.stringify(err));
				alertify.set('notifier','position', 'top-right');
				alertify.error(`${err.errorDescription}`,2);
			},
		});
  }

  getMunicipios(){
    this.departamentosService.getMunicipios()
      .subscribe({
        next: (data: any[]) => {
          this.municipiosList = data;
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

  async enviarEmail(){
    const subject:string = '¡Registro Exitoso en la App de la Liga OCR!';
    await this.atletaService.enviarEmail(this.dataForm.value, null, null, "", true, subject)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Usuario creado con exito!',2);

            this.router.navigate(['/session/signin']);
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
