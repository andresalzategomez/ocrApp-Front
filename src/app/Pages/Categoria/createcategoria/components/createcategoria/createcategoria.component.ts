import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompetenciaService } from '../../../../Competencia/services/competencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencia } from '../../../../Competencia/models/competencia.model';
import { CategoriaService } from '../../../services/categoria.service';

declare let alertify: any; 

@Component({
  selector: 'app-createcategoria',
  templateUrl: './createcategoria.component.html',
  styleUrls: ['./createcategoria.component.css']
})
export class CreatecategoriaComponent implements OnInit {

  dataForm:FormGroup;
  checkTerms:boolean = true;
  minDate:Date;
  competenciaList:Competencia[] = [];
  userLogin:any;
  idCompetencia:number;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    public router : Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.idCompetencia =  this.route.snapshot.params['idCompetencia'];
    this.userLogin = JSON.parse(localStorage.getItem('authenticatedData')|| '')
    this.createForm();
    this.getCompetenciaById()
    this.minDate = new Date(Date.now());
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      descripcion: [""],
      id_competencia: ["", [Validators.required]],
      no_oleada: [null]
    });
  }

  onSubmit(){
    console.log("this.dataForm", this.dataForm.value);
    
    if(this.dataForm.invalid){
      alertify.set('notifier','position', 'top-right');
      alertify.warning('Formulrio inválido!', 2);
      return;
    }
    this.saveCategoria();
  }

  saveCategoria(){
    console.log("save saveCategoria");
    console.log("this.dataForm.value", this.dataForm.value)

    this.categoriaService.saveCategoria(this.dataForm.value)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Categoría creada con exito!', 4);

            this.router.navigate(['/competencia/iniciar/' + this.idCompetencia]);
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

  getCompetenciaById(){
    this.categoriaService.getCompetenciaById(this.idCompetencia)
      .subscribe({
        next: (data: Competencia[]) => {
          console.log("data compe", data);
          this.dataForm.get("id_competencia").setValue(data[0].id)
          console.log("this.dataForm", this.dataForm.value);
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
}
