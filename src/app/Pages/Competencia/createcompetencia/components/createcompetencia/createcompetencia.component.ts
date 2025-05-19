import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetenciaService } from '../../../services/competencia.service';
import { formatDate } from '@angular/common';
import { DepartamentosService } from '../../../services/departamentos.service';
import { UsuarioService } from '../../../../Session/services/usuario.service';

declare let alertify: any; 

@Component({
  selector: 'app-createcompetencia',
  templateUrl: './createcompetencia.component.html',
  styleUrls: ['./createcompetencia.component.css']
})
export class CreatecompetenciaComponent implements OnInit {

  dataForm:FormGroup
  checkTerms:boolean = true;
  minDate:Date;
  departamentoList:any[] = []
  municipiosList:any[] = []
  municipiosSw:boolean = false;
  userLogin:any;
  dataClub:any;
  rolLogin:any;
  
  constructor(
    private formBuilder: FormBuilder,
    private competenciaService: CompetenciaService,
    private usuarioService: UsuarioService,
    private departamentosService: DepartamentosService,
    public router : Router,
  ) {}

  ngOnInit() {
    this.createForm();
    this.userLogin = JSON.parse(localStorage.getItem('authenticatedData')|| '')
    console.log("this.userLogin?.club", this.userLogin?.club);
    
    this.minDate = new Date(Date.now());
    this.getDepartamentos();
    this.getRolById();
    this.getClub();
    // alertify.set('notifier','position', 'top-right');
    // alertify.success('Usuario creado con exito!',2);
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      departamento: ["", [Validators.required]],
      municipio: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      club: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      hora_inicio: [""],
      hora_final: [""],
      oficialLiga: [null],
      aprobado: [null],
      id_usuario: [null],
      estado: ["INICIO"],
    });
  }

  onSubmit(){
    console.log("this.dataForm", this.dataForm.value);
    
    if(this.dataForm.invalid){
      alertify.set('notifier','position', 'top-right');
      alertify.warning('Formulario inválido!', 2);
      return;
    }
    this.saveCompetencia();
  }

  saveCompetencia(){
    console.log("save saveCompetencia");
    this.dataForm.get('fecha')?.setValue(formatDate(new Date(this.dataForm.get('fecha')?.value), 'yyyy-MM-dd', 'en-US'))
    
    
    console.log("this.dataForm.", this.dataForm.value)
    this.competenciaService.saveCompetencia(this.dataForm.value)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Competencia creada con exito!',2);

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

  getDepartamentos(){
    this.departamentosService.getDepartamento()
      .subscribe({
        next: (data: any[]) => {
          console.log("data dep", data);
          this.departamentoList = data;
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

  selectDepartamento(event){
    this.getMunicipios(event);
  }

  getMunicipios(departamento:any){
    this.departamentosService.getMunicipios()
      .subscribe({
        next: (data: any[]) => {
          this.municipiosList = data;
          this.municipiosList = this.municipiosList.filter(item => item.departmentId === departamento.id);
          console.log("municipiosList", this.municipiosList);
          this.municipiosSw = true;
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

  getRolById(){
    this.usuarioService.getRoleById(this.userLogin?.id).subscribe({
        next: (data: any) => {
          console.log("data role", data[0]);
          this.rolLogin = data[0];
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

  getClub(){
    this.usuarioService.getClub().subscribe({
        next: (data: any) => {
          this.dataClub = data.find(item => item.id === Number(this.userLogin?.club));
          console.log("dataClub", this.dataClub);
          this.dataForm.get("club")?.setValue(this.dataClub.nombre);
          this.dataForm.get("id_usuario")?.setValue(this.userLogin?.id);
          
          console.log("this.dataForm", this.dataForm.value);
          
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
