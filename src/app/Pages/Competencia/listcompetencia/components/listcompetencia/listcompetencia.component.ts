import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Competencia } from '../../../models/competencia.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../Categoria/services/categoria.service';

@Component({
  selector: 'app-listcompetencia',
  templateUrl: './listcompetencia.component.html',
  styleUrls: ['./listcompetencia.component.css']
})
export class ListCompetenciaComponent implements OnInit {

	competenciasList:Competencia [] = []
	competenciasGrid:Competencia [] = []
	popUpDeleteUserResponse : any;
	showType	    				: string = 'list';
	displayedProductColumns : string [] = ['id', 'nombre', 'organizador', 'documento', 'celular', 'email', 'fecha', 'estado', 'action'];
	@ViewChild(MatPaginator) paginator : MatPaginator;
	@ViewChild(MatSort) sort           : MatSort;

	constructor(
    public translate : TranslateService,
    private categoriaService: CategoriaService,
		private router : Router, 
	) { }

	ngOnInit() {
		this.findCompetenciasInicio()
	}

  findCompetenciasInicio(){
    this.categoriaService.getCompetenciasInicio()
      .subscribe({
        next: (data: Competencia[]) => {
          console.log("data", data);
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
