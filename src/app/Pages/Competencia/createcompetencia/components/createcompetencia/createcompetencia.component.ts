import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetenciaService } from '../../../services/competencia.service';
import { formatDate } from '@angular/common';
import { DepartamentosService } from '../../../services/departamentos.service';

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
  
  constructor(
    private formBuilder: FormBuilder,
    private competenciaService: CompetenciaService,
    private departamentosService: DepartamentosService,
    public router : Router,
  ) {}

  ngOnInit() {
    this.createForm();
    this.minDate = new Date(Date.now());
    this.getDepartamentos();
    // alertify.set('notifier','position', 'top-right');
    // alertify.success('Usuario creado con exito!',2);
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      lugar: [""],
      departamento: ["", [Validators.required]],
      municipio: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      club: ["", [Validators.required]],
      organizador: ["", [Validators.required]],
      celular_organizador: [null, Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern('^[0-9]{10,10}$')])],
      documento_organizador: ["", [Validators.required]],
      email_organizador: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}$")]],
      fecha: ["", [Validators.required]],
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
    this.dataForm.get('lugar')?.setValue(this.dataForm.get('departamento')?.value?.name + " - " + this.dataForm.get('municipio')?.value?.name)

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
}
