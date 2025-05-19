import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtletaService } from '../../../services/atleta.service';
import { Categoria } from '../../../../Categoria/models/categoria.model';
import { CategoriaService } from '../../../../Categoria/services/categoria.service';
import { Competencia } from '../../../../Competencia/models/competencia.model';
import { Atleta } from '../../../models/atleta.model';
import { DecimalPipe } from '@angular/common';

declare let alertify: any; 

@Component({
  selector: 'app-createatleta',
  templateUrl: './createatleta.component.html',
  styleUrls: ['./createatleta.component.css']
})
export class CreateatletaComponent implements OnInit {

  dataForm:FormGroup
  categoriaList:Categoria[] = [];
  competenciaList:Competencia[] = []
  atletasByCompetencia:Atleta[] = []

  tipoDocumento:string[] = ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Cédula de extranjería', 'Pasaporte', 'Permiso temporal de permanencia'];

  idCategoria:string = "";
  userLogin:any;

  constructor(
    private formBuilder: FormBuilder,
    private atletaService: AtletaService,
    private categoriaService: CategoriaService,
    private _decimalPipe: DecimalPipe,
    public router : Router,
  ) {}

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem('authenticatedData')|| '')
    this.createForm();
    this.findCompetenciasInicio()
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre_atleta: ["", [Validators.required]],
      talla: ["", [Validators.required]],
      tiempo_competencia: [null],
      id_categoria: ["", [Validators.required]],
      id_competencia: ["", [Validators.required]],
      id_usuario: [this.userLogin.id, [Validators.required]],
      no_atleta: ["", [Validators.required]],
      no_oleada: [""],
      estado:["EN_COMPETENCIA"]
    });
  }

  onSubmit(){
    console.log("this.dataForm", this.dataForm.value);
    
    if(this.dataForm.invalid || this.validarCedula()){
      console.log("Inválido");
      // alertify.set('notifier','position', 'top-right');
      // alertify.warning('Formulario inválido!',2);
      return;
    }
    this.saveAtleta();
  }

  saveAtleta(){
    console.log("save saveAtleta");
    console.log("this.dataForm.", this.dataForm.value)

    this.atletaService.saveAtleta(this.dataForm.value)
      .subscribe({
        next: (data: any) => {
          console.log("data atleta", data);
          if(data?.response == 'OK'){
            // setTimeout(() => {
              this.enviarEmail();
            // }, 5000);
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

  async enviarEmail(){
    const subject:string = '¡Inscripción Confirmada a la Carrera OCR!';
    const categ = this.categoriaList.find(item => item.id === this.dataForm.get('id_categoria')?.value);
    await this.atletaService.enviarEmail(this.userLogin, this.dataForm.value, this.competenciaList[0], categ?.nombre, false, subject)
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

  findCompetenciasInicio(){
    this.categoriaService.getCompetenciasInicio()
      .subscribe({
        next: (data: Competencia[]) => {
          console.log("data Competencia", data);
          this.competenciaList = data;
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

  getCategoriaByCompetenciaId(idCompetencia:number){
    this.atletaService.getCategoriaByCompetenciaId(idCompetencia)
      .subscribe({
        next: (data: Categoria[]) => {
          console.log("data Categoria", data);
          this.categoriaList = data;
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

  getCountAtletasByCompetencia(idCompetencia:number){
    this.atletaService.getCountAtletasByCompetencia(idCompetencia)
      .subscribe({
        next: (data: Atleta[]) => {
          this.atletasByCompetencia = data
          console.log("data Atleta", data);
          this.dataForm.get('no_atleta')?.setValue(this._decimalPipe.transform((data.length + 1), '3.0-0')?.toString())
          
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

  selectCompetencia(element){
    console.log("element", element);
    
    this.getCategoriaByCompetenciaId(element.id)
    // this.getCountAtletasByCompetencia(element.id)
  }

  selectCategoria(element){
    console.log("categoria", element);
    this.idCategoria = element.id.toString()

    this.getCategoriaByCompetenciaId(element.id_competencia)
    this.getCountAtletasByCompetencia(element.id_competencia)
  }

  validarCedula(){
    let existAtleta:boolean = false;
    const findAtleta = this.atletasByCompetencia.find(item => item.id_usuario === this.dataForm.get('id_usuario')?.value);
    console.log("findAtleta", findAtleta);
    if(findAtleta){
      existAtleta = true;
      alertify.set('notifier','position', 'top-right');
      alertify.warning('El atleta ' + this.userLogin?.nombre + " ya se encuentra registrado en esta competencia.", 5);
    }
    return existAtleta;
  }
}
