
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atleta } from '../../Atleta/models/atleta.model';
import { Competencia, Oleada } from '../models/competencia.model';
import { CategoriaService } from '../../Categoria/services/categoria.service';
import { Categoria } from '../../Categoria/models/categoria.model';
import { formatDate } from '@angular/common';
import moment from 'moment';
import { CompetenciaService } from '../services/competencia.service';
declare let alertify: any;

@Component({
  selector: 'app-ganadores-dialog',
  templateUrl: './ganadores-dialog.component.html',
  styleUrls: ['./ganadores-dialog.component.scss'],
})
export class GanadoresDialogComponent implements OnInit {

  displayedProductColumns : string [] = ['posicion', 'no_atleta', 'no_oleada', 'nombre', 'fechaInicio', 'tiempo_competencia', 'tiempo', 'categoria'];
  allAtletas:Atleta[]=[];
  atletas:Atleta[]=[];
  competencia:Competencia;
  categorias:Categoria[]=[]
  buscarByCategoria:boolean = false;
  oleadas:Oleada[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<GanadoresDialogComponent>,
    private competenciaService: CompetenciaService,
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
    this.competencia = this.data.competencia;
    this.allAtletas = this.data.atletas;
    this.getCategoriaByCompetencia()
    this.findOleadaByCompetencia()
  }

  changeCategoria(idCategoria){
    let nombreCategoria:string = '';
    const categoriaFind = this.categorias.find(item => item.id === idCategoria);

    if(categoriaFind) nombreCategoria = categoriaFind.nombre
    return nombreCategoria;
  }

  calcularGanadoresPorCategoria(value: any): any {
    let newVal = value.sort((a: any, b: any) => {
      let date1 = new Date(b.tiempo_competencia);
      let date2 = new Date(a.tiempo_competencia);
  
      if (date1 < date2) {
          return 1;
      } else if (date1 > date2) {
          return -1;
      } else {
          return 0;
      }
    });
    return newVal;
  }

  getCategoriaByCompetencia(){
    this.categoriaService.getCategoriaByCompetencia(this.competencia.id)
      .subscribe({
        next: (data: Categoria[]) => {
          this.categorias = data
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

  buscarGanadoresCategoria(categoria){
    this.atletas = [];
    this.allAtletas.forEach(element => {
      // console.log("diferencia" + element.nombre, formatDate((element.tiempo_competencia), 'HH:mm:ss', 'en-US') - formatDate((this.competencia.hora_inicio), 'HH:mm:ss', 'en-US'));
      if(element.categoria_id === categoria.id){
        this.atletas.push(element);
      }
    });

    this.atletas = this.calcularGanadoresPorCategoria(this.atletas);
    console.log("this.atletas", this.atletas);
    
    this.buscarByCategoria = true;
  }

  caluclarTiempoPorAtleta(atleta:Atleta){
    const oleadaTiempo = this.oleadas.find(item => {
      if(item.id_categoria == atleta.categoria_id && item.id_competencia == atleta.competencia_id) return item;
    });
    if(oleadaTiempo){
      const fecha1 = moment(oleadaTiempo.fechaInicio, "YYYY-MM-DD HH:mm:ss");
      const fecha2 = moment(atleta.tiempo_competencia, "YYYY-MM-DD HH:mm:ss");
      const diffSeconds = fecha2.diff(fecha1, 'seconds');
      const hours = Math.floor(diffSeconds / (60 * 60));
      const divisor_for_minutes = diffSeconds % (60 * 60);
      const minutes = Math.floor(divisor_for_minutes / 60);
      const divisor_for_seconds = divisor_for_minutes % 60;
      const seconds = Math.ceil(divisor_for_seconds);
      return hours + ":" + minutes + ":" + seconds
    }
  }

  findOleadaByCompetencia(){
    this.competenciaService.getOleadaByCompetencia(this.competencia.id)
      .subscribe({
        next: (data: Oleada[]) => {
          this.oleadas = data;
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

  verFechaInicio(element:Atleta){
    const oleadaFecha = this.oleadas.find(item => {
      if(item.id_categoria == element.categoria_id && item.id_competencia == element.competencia_id && item.no_oleada == element.no_oleada) return item
    });
    return moment(oleadaFecha?.fechaInicio, "HH:mm:ss")
  }
}
