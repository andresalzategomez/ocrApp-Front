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

  tipoDocumento:string[] = ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Cédula de extranjería', 'Pasaporte', 'Permiso temporal de permanencia']

  idCategoria:string = ""

  constructor(
    private formBuilder: FormBuilder,
    private atletaService: AtletaService,
    private categoriaService: CategoriaService,
    private _decimalPipe: DecimalPipe,
    public router : Router,
  ) {}

  ngOnInit() {
    this.createForm();
    this.findCompetenciasInicio()
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      tipo_documento: ["", [Validators.required]],
      celular: [null, Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern('^[0-9]{10,10}$')])],
      email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,20}$")]],
      club: ["", [Validators.required]],
      categoria_id: ["", [Validators.required]],
      competencia_id: ["", [Validators.required]],
      no_atleta: [""],
      no_oleada: [""],
      // estado:["EN_COMPETENCIA"]
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
    const findAtleta = this.atletasByCompetencia.find(item => item.documento === this.dataForm.get('documento')?.value);
    console.log("findAtleta", findAtleta);
    if(findAtleta){
      existAtleta = true;
      alertify.set('notifier','position', 'top-right');
      alertify.warning('El atleta con documento ' + findAtleta.documento + " ya se encuentra registrado en esta competencia.", 5);
    }
    return existAtleta;
  }
}
