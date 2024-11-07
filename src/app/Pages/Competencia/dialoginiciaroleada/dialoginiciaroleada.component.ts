import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Oleada } from '../models/competencia.model';
import { formatDate } from '@angular/common';

declare let alertify: any;

@Component({
  selector: 'app-dialogIniciarOleada',
  templateUrl: './dialogIniciarOleada.component.html',
  styleUrls: ['./dialogIniciarOleada.component.scss']
})

export class dialogIniciarOleadaComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<dialogIniciarOleadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  dataForm!: FormGroup;
  isOleada:boolean = false;
  oleadas:number[]=[];
  oleadaSelect:Oleada;

  ngOnInit(): void {
    this.createForm();
    this.initForm();
    console.log("this.data", this.data);
  }

  goBack(){
    this.dialogRef.close();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      categoria: [null, Validators.required],
      oleada: [null, Validators.required],
    });
  }

  /** Realiza las consultas iniciales al cargar el componente */
  async initForm() {
    
  }

  onSubmit() {
    console.log(this.dataForm.value)
    if (this.dataForm.invalid) {
      alertify.set('notifier', 'position', 'top-right');
      alertify.warning('Formulario invalido', 2);
      return;
    }
    this.oleadaSelect = {
      id : null,
      id_competencia : this.data?.competencia?.id,
      id_categoria : this.dataForm.get("categoria")?.value?.id,
      no_oleada : Number(this.dataForm.get('oleada')?.value),
      fechaInicio : formatDate(new Date(new Date), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US'),
      fechaFin: ""
    }
    
    this.dialogRef.close(this.oleadaSelect);
  }

  changeCategoria(event:any){
    console.log("event", event.value);
    if(event){
      this.isOleada = true;
      this.oleadas = [];
      for (let index = 1; index <= event.value?.no_oleada; index++) {
        this.oleadas.push(index);
      }
    }
  }
}
