import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Competencia } from '../../../models/competencia.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../Categoria/services/categoria.service';

declare let alertify: any; 

@Component({
  selector: 'app-listcompetenciaaprobar',
  templateUrl: './listcompetenciaaprobar.component.html',
  styleUrls: ['./listcompetenciaaprobar.component.css']
})
export class ListCompetenciaAprobarComponent implements OnInit {

	competenciasList:Competencia [] = []
	competenciasGrid:Competencia [] = []
	popUpDeleteUserResponse : any;
	showType	    				: string = 'list';
	displayedProductColumns : string [] = ['id', 'nombre', 'fecha', 'estado', 'oficialLiga', 'aprobado', 'action'];
	@ViewChild(MatPaginator) paginator : MatPaginator;
	@ViewChild(MatSort) sort           : MatSort;

	constructor(
    public translate : TranslateService,
    private categoriaService: CategoriaService,
		private router : Router, 
	) { }

	ngOnInit() {
		this.getCompetenciasPorAprobar()
	}

  cambiarAprobado(estado, id_competencia){
    console.log("Aprobar", estado);
    this.categoriaService.cambiarAprobado(estado, id_competencia)
      .subscribe({
        next: (data: Competencia) => {
          console.log("data", data);
          alertify.set('notifier','position', 'top-right');
          alertify.success('Competencia actualizada con exito!',2);
          this.getCompetenciasPorAprobar();
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

  getCompetenciasPorAprobar(){
    this.categoriaService.getCompetenciasPorAprobar()
      .subscribe({
        next: (data: Competencia[]) => {
          console.log("data", this.competenciasList.length);
          this.competenciasList = data;
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
