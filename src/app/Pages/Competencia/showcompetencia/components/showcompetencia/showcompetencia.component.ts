import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Competencia } from '../../../models/competencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../../Categoria/services/categoria.service';
import { AtletaService } from '../../../../Atleta/services/atleta.service';
import { Atleta } from '../../../../Atleta/models/atleta.model';
import { CompetenciaService } from '../../../services/competencia.service';
import { Categoria } from '../../../../Categoria/models/categoria.model';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

declare let alertify: any; 

@Component({
  selector: 'app-showcompetencia',
  templateUrl: './showcompetencia.component.html',
  styleUrls: ['./showcompetencia.component.css']
})
export class ShowCompetenciaComponent implements OnInit {

  competenciaIniciada:boolean = false
  HoraInicio:string;
  idCompetencia:number
  competencia:Competencia
  categorias:Categoria[]=[]
	atletasList:Atleta [] = []
	popUpDeleteUserResponse : any;
	showType	    				: string = 'list';
	displayedProductColumns : string [] = ['no_atleta', 'nombre', 'documento', 'email', 'categoria'];
	@ViewChild(MatPaginator) paginator : MatPaginator;
	@ViewChild(MatSort) sort           : MatSort;

	constructor(
    public translate : TranslateService,
    private categoriaService: CategoriaService,
    private competenciaService: CompetenciaService,
    private atletaService: AtletaService,
    private router : Router,
    private route: ActivatedRoute
	) { }

	ngOnInit() {
    this.idCompetencia =  this.route.snapshot.params['idCompetencia'];
    console.log("idCompetencia", this.idCompetencia);
    
		this.findCompetenciaById()
		this.findCategoriaById()
    this.findAtletaByCategoria()
	}

  findCompetenciaById(){
    this.competenciaService.getCompetenciaById(this.idCompetencia)
      .subscribe({
        next: (data: Competencia) => {
          this.competencia = data[0]
          console.log("data", this.competencia);
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

  findCategoriaById(){
    this.categoriaService.getCategoria()
      .subscribe({
        next: (data: Categoria[]) => {
          this.categorias = data
          console.log("data", this.categorias);
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

  findAtletaByCategoria(){
    this.atletaService.getAtletaByCompetencia(this.idCompetencia)
      .subscribe({
        next: (data: Atleta[]) => {
          this.atletasList = data
          console.log("data", this.atletasList);
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

  changeCategoria(idCategoria){
    let nombreCategoria:string = '';
    const categoriaFind = this.categorias.find(item => item.id === idCategoria);

    if(categoriaFind) nombreCategoria = categoriaFind.nombre
    return nombreCategoria;
  }

  iniciarCompetencia(){
    Swal.fire({
      title: 'Iniciar Competencia',
      text: `Está seguro que desea iniciar la competencia?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.competenciaIniciada = true;
        this.HoraInicio = formatDate(new Date(new Date), 'HH:mm:ss', 'en-US')
      }
    });
  }

  async darLlegada(){
    let noAtleta: string = '';
    const { value: no_atleta, isConfirmed } = await Swal.fire({
      title: 'Dar llegada',
      text: `Dar llegada de atleta`,
      input: 'textarea',
      inputLabel: 'Ingresa el número del atleta',
      inputValue: noAtleta,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
          if (!value) {
              return 'Debes ingresar el número del atleta'
          }
      }
    });
  
    if (isConfirmed) {
      if (no_atleta) {
        const ateltaFinalizado = this.atletasList.find(item => item.no_atleta === no_atleta);
        if(ateltaFinalizado){
          console.log("numero atleta", ateltaFinalizado);
        }else{
          alertify.set('notifier','position', 'top-right');
          alertify.warning('Número de atleta no encontrado!', 3);
        }
      }
    }
  }

}
