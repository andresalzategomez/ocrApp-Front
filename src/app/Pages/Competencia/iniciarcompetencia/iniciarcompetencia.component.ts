import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Atleta } from '../../Atleta/models/atleta.model';
import { AtletaService } from '../../Atleta/services/atleta.service';
import { Categoria } from '../../Categoria/models/categoria.model';
import { CategoriaService } from '../../Categoria/services/categoria.service';
import { GanadoresDialogComponent } from '../ganadores-dialog/ganadores-dialog.component';
import { Competencia } from '../models/competencia.model';
import { CompetenciaService } from '../services/competencia.service';

declare let alertify: any; 

@Component({
  selector: 'app-iniciarcompetencia',
  templateUrl: './iniciarcompetencia.component.html',
  styleUrls: ['./iniciarcompetencia.component.css']
})
export class IniciarcompetenciaComponent implements OnInit {

  arrayFaltanteCateg:any[] = [[]];

  competenciaIniciada:boolean = false
  competenciaFinalizada:boolean = false
  HoraInicio:string;
  HoraFin:string;
  idCompetencia:number
  competencia:Competencia
  categorias:Categoria[]=[]
	atletasList:Atleta [] = []
	popUpDeleteUserResponse : any;
	showType	    				: string = 'list';
	displayedAtletaColumns : string [] = ['nombre', 'no_atleta', 'categoria', 'oleada', 'action'];
	displayedCategoryColumns : string [] = ['nombre', 'descripcion', 'oleadas', 'action'];
	@ViewChild(MatPaginator) paginator : MatPaginator;
	@ViewChild(MatSort) sort           : MatSort;

	constructor(
    public translate : TranslateService,
    private categoriaService: CategoriaService,
    private competenciaService: CompetenciaService,
    private atletaService: AtletaService,
    private router : Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
	) { }

	ngOnInit() {
    this.idCompetencia =  this.route.snapshot.params['idCompetencia'];
    console.log("idCompetencia", this.idCompetencia);

    this.initForm();
	}

  async initForm(){
    await this.findCompetenciaById()
		await this.getCategoriaByCompetencia()
    await this.findAtletaByCompetencia()
  }

  findCompetenciaById(){
    this.competenciaService.getCompetenciaById(this.idCompetencia)
      .subscribe({
        next: (data: Competencia) => {
          console.log("data", data);
          
          this.competencia = data[0];
          if(this.competencia.estado == "FINALIZADA"){
            this.HoraInicio = formatDate((this.competencia.hora_inicio), 'HH:mm:ss', 'en-US');
            this.HoraFin = formatDate(this.competencia.hora_final, 'HH:mm:ss', 'en-US');

            this.competenciaIniciada = true;
            this.competenciaFinalizada = true;
          }else{
            if(this.competencia.hora_inicio != null){
              this.HoraInicio = formatDate((this.competencia.hora_inicio), 'HH:mm:ss', 'en-US');
              this.competenciaIniciada = true;
            }
          }
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

  getCategoriaByCompetencia(){
    this.categoriaService.getCategoriaByCompetencia(this.idCompetencia)
      .subscribe({
        next: (data: Categoria[]) => {
          this.categorias = data
          console.log("categorias", this.categorias);
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

  findAtletaByCompetencia(){
    this.atletaService.getAtletaByCompetencia(this.idCompetencia)
      .subscribe({
        next: (data: Atleta[]) => {
          this.atletasList = data
          console.log("data", this.atletasList);
          this.validarAtletasPorOleada();
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

  validarAtletasPorOleada(){
    this.categorias?.forEach(elementCate => {
      let contAtletas = 0;
      this.atletasList.forEach(elementAtl => {
        if(elementCate.id == elementAtl.id_categoria) contAtletas = contAtletas + 1;
      });
      let oleadas = contAtletas / elementCate.no_oleada;
      if(!Number.isInteger(contAtletas / elementCate.no_oleada)) oleadas = Math.trunc(contAtletas / elementCate.no_oleada) + 1
      let arrayConst:number[] = []
      for (let i = 1; i <= oleadas; i++) {
        arrayConst[i]= elementCate?.no_oleada
      }
      this.arrayFaltanteCateg[elementCate.nombre] = arrayConst;
    });

    this.atletasList.forEach(element => {
      if(element.no_oleada != null){
        const categoria = this.categorias.find(item => item.id === element.id_categoria);
        if(categoria) this.arrayFaltanteCateg[categoria.nombre][element.no_oleada] = this.arrayFaltanteCateg[categoria.nombre][element.no_oleada] -1;
      }
    });

    console.log("arrayFaltanteCateg", this.arrayFaltanteCateg);
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
        const fechaActual = new Date
        this.HoraInicio = formatDate(new Date(fechaActual), 'HH:mm:ss', 'en-US');
        this.competencia.hora_inicio = formatDate(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = this.competencia.hora_inicio
        this.updateCompetencia(this.competencia)
      }
    });
  }

  finalizarCompetencia(){
    Swal.fire({
      title: 'Finalizar Competencia',
      text: `Está seguro que desea finalziar la competencia?`,
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
        this.competenciaFinalizada = true;
        const fechaActual = new Date
        this.HoraFin = formatDate(new Date(fechaActual), 'HH:mm:ss', 'en-US')
        this.competencia.hora_inicio = formatDate(new Date(this.competencia.hora_inicio), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = formatDate(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.estado = 'FINALIZADA';
        this.updateCompetencia(this.competencia)
      }
    });
  }

  async darLlegada(){
    let noAtleta: string = '';
    const { value: no_atleta, isConfirmed } = await Swal.fire({
      title: 'Dar llegada',
      text: `Dar llegada de atleta`,
      input: 'text',
      inputLabel: 'Ingresa el número del atleta',
      inputPlaceholder: "",
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
        const ateletaFinalizado = this.atletasList.find(item => item.no_atleta === no_atleta);
        if(ateletaFinalizado){
          console.log("ateletaFinalizado", ateletaFinalizado);
          
          if(ateletaFinalizado.estado == 'EN_COMPETENCIA'){
              alertify.set('notifier','position', 'top-right');
              alertify.success('El atleta ' + ateletaFinalizado.no_atleta + " ha finalizado.", 5);
              ateletaFinalizado.estado = 'FINALIZADO';
              ateletaFinalizado.tiempo_competencia = formatDate(new Date(new Date), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US')

              this.asignarTiempoAtleta(ateletaFinalizado)
            }else{
              alertify.set('notifier','position', 'top-right');
              alertify.warning('El atleta ya había finalizado.', 3);
            }
        }else{
          alertify.set('notifier','position', 'top-right');
          alertify.warning('Número de atleta no encontrado!', 3);
        }
      }
    }
  }

  updateAtleta(atleta:Atleta, swMensaje?:boolean){
    console.log("update Atleta");
    console.log("atleta.", atleta)

    this.atletaService.updateAtleta(atleta)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            if(!swMensaje){
              alertify.set('notifier','position', 'top-right');
              alertify.success('Atleta guardado con exito!',2);
            }
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

  asignarTiempoAtleta(atleta:Atleta){
    console.log("asignarTiempoAtleta");
    console.log("atleta.", atleta)

    this.atletaService.asignarTiempoAtleta(atleta)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Atleta guardado con exito!',2);
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

  updateCompetencia(competencia:Competencia){
    console.log("update competencia");
    console.log("competencia.", competencia)

    this.competenciaService.updateCompetencia(competencia)
      .subscribe({
        next: (data: any) => {
          console.log("data", data);
          if(data?.response == 'OK'){
            alertify.set('notifier','position', 'top-right');
            alertify.success('Competencia actualizada con exito!',2);
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

  verGanadores(){
    this.dialog.open(GanadoresDialogComponent, {
      data: {competencia: this.competencia, atletas: this.atletasList},
      width: '95%',
      height: '80%'
    }).afterClosed()
      .subscribe((result) => {
        if (result) {
          console.log("result", result);
          
        }
      });    
  }

  async asignarOleada(categoria:Categoria){
    console.log("categoria", categoria);
    
    let noAtleta: string = '';
    const { value: no_oleada, isConfirmed } = await Swal.fire({
      title: 'Oleada',
      text: `Ingresa el número de ateltas por oleadas en la categoría ` + categoria.nombre,
      input: 'text',
      inputLabel: 'Número de oleada',
      inputPlaceholder: "",
      inputValue: noAtleta,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
          if (!value) {
              return 'Debes ingresar el número de atletas por oleada.'
          }
      }
    });

    if (isConfirmed) {
      if (no_oleada) {
        categoria.no_oleada = Number(no_oleada);
        
        this.categoriaService.updateCategoria(categoria)
          .subscribe({
            next: (data: any) => {
              console.log("data", data);
              if(data?.response == 'OK'){
                alertify.set('notifier','position', 'top-right');
                alertify.success('Categoría actualizada con exito!', 4);
              }
            },
            error: (err) => {
              alertify.set('notifier','position', 'top-right');
              alertify.error(`${err?.errorDescription}`, 4);
            },
          });
      }
    }
  }

  async asignarAtleta(atleta:Atleta){
    console.log("atleta", atleta);

    let noAtleta: string = '';
    const { value: no_oleada, isConfirmed } = await Swal.fire({
      title: 'Asignar atleta',
      text: `Ingresa el número de oleada para ` + atleta.nombre_atleta,
      input: 'text',
      inputLabel: 'Número de oleada',
      inputPlaceholder: "",
      inputValue: noAtleta,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
          if (!value) {
              return 'Debes ingresar el número de la oleada.'
          }
      }
    });

    if (isConfirmed) {
      if (no_oleada) {
        const categoriafind = this.categorias.find(item => item.id === atleta.id_categoria);
        console.log("categoriafind", categoriafind);
        if(categoriafind){
          if(Number(no_oleada) > 0 && Number(no_oleada) <= categoriafind?.no_oleada){
            // debugger
            if(this.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] > 0) {
              atleta.no_oleada = Number(no_oleada);
              this.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] = this.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] - 1;
      
              this.atletaService.updateAtleta(atleta)
                .subscribe({
                  next: (data: any) => {
                    console.log("data", data);
                    if(data?.response == 'OK'){
                      alertify.set('notifier','position', 'top-right');
                      alertify.success('Competencia creada con exito!',2);
                    }
                  },
                  error: (err) => {
                    alertify.set('notifier','position', 'top-right');
                    alertify.error(`${err?.errorDescription}`, 4);
                  },
                });
            }else{
              alertify.set('notifier','position', 'top-right');
              alertify.warning('La oleada ' + no_oleada + ' para la categoría ' + categoriafind.nombre + ' ya está completa!', );
            }
          }else{
            alertify.set('notifier','position', 'top-right');
            alertify.warning('La oleada seleccionada no existe en categoría',2);
          }
        }else{
          alertify.set('notifier','position', 'top-right');
          alertify.warning('No existe categoría!',2);
        }
      }
    }
  }

  calcularAleatorio(){
    Swal.fire({
      title: 'Calcular oleadas aleatoriamente',
      text: `Está seguro que desea calcular oleadas aleatoriamente?`,
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
        let swLimiteOleada = false;
        let swFinOleadas = false;
        this.atletasList.forEach(atleta => {
          if(atleta.no_oleada == null){
            const category = this.categorias.find(item => item.id === atleta.id_categoria && item.no_oleada != null);
            console.log("category", category);
            
            if(category){
              // if(category.no_oleada != null){
                let sw = true;
                while (sw) {
                  const aleat =  Number(Math.floor(Math.random() * (this.arrayFaltanteCateg[category.nombre]?.length - 1))+1)
                  console.log("this.arrayFaltanteCateg[category.nombre][aleat]", this.arrayFaltanteCateg[category.nombre][aleat]);
                  
                  if(this.arrayFaltanteCateg[category.nombre][aleat] > 0){
                    atleta.no_oleada = aleat;
                    this.arrayFaltanteCateg[category.nombre][aleat] = this.arrayFaltanteCateg[category.nombre][aleat] - 1;
                    this.updateAtleta(atleta, true);
                    sw = false;
                    if(!swFinOleadas){
                      alertify.set('notifier','position', 'top-right');
                      alertify.success('Oleadas asignadas aleatoriamente con exito!', 2);
                      swFinOleadas = true
                    }
                  } 
                }
            }else{
              if(!swLimiteOleada){
                    alertify.set('notifier','position', 'top-right');
                    alertify.warning('Debe seleccionar el límite de oleadas por categorías!', 2);
                    swLimiteOleada = true;
                  }
            }
          }
        });
        
      }
    });
  }
}
