import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetenciaService } from '../../../services/competencia.service';
import { DatePipe, formatDate } from '@angular/common';

declare let alertify: any; 

@Component({
  selector: 'app-createcompetencia',
  templateUrl: './createcompetencia.component.html',
  styleUrls: ['./createcompetencia.component.css']
})
export class CreatecompetenciaComponent implements OnInit {

  dataForm:FormGroup
  checkTerms:boolean = true;
  minDate:Date

  constructor(
    private formBuilder: FormBuilder,
    private competenciaService: CompetenciaService,
    
    public router : Router,
  ) {}

  ngOnInit() {
    this.createForm();
    this.minDate = new Date(Date.now());
    // alertify.set('notifier','position', 'top-right');
    // alertify.success('Usuario creado con exito!',2);
  }

  createForm(){
    this.dataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      lugar: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
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
    
    // if(this.dataForm.invalid || !this.checkTerms){
    //   console.log("Inválido");
    //   return;
    // }
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
}
