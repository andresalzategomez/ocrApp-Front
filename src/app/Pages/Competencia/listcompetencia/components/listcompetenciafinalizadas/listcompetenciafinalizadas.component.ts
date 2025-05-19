import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Competencia } from '../../../models/competencia.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../Categoria/services/categoria.service';

@Component({
  selector: 'app-listcompetenciafinalizadas',
  templateUrl: './listcompetenciafinalizadas.component.html',
  styleUrls: ['./listcompetenciafinalizadas.component.css']
})
export class ListCompetenciaFinalizadasComponent implements OnInit {

	competenciasList:Competencia [] = []
	competenciasGrid:Competencia [] = []
	popUpDeleteUserResponse : any;
	showType	    				: string = 'list';
	displayedProductColumns : string [] = ['id', 'nombre', 'fecha', 'estado', 'oficialLiga', 'aprobado'];
	@ViewChild(MatPaginator) paginator : MatPaginator;
	@ViewChild(MatSort) sort           : MatSort;

	constructor(
    public translate : TranslateService,
    private categoriaService: CategoriaService,
		private router : Router, 
	) { }

	ngOnInit() {
		this.getCompetenciasFinalizadas()
	}

  getCompetenciasFinalizadas(){
    this.categoriaService.getCompetenciasFinalizadas  ()
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
