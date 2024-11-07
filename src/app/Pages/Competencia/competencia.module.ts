import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgAisModule } from 'angular-instantsearch';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompetenciaRoutingModule } from './competencia-routing.module';
import { CreatecompetenciaComponent } from './createcompetencia/components/createcompetencia/createcompetencia.component';
import { ListCompetenciaComponent } from './listcompetencia/components/listcompetencia/listcompetencia.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';
import { ShowCompetenciaComponent } from './showcompetencia/components/showcompetencia/showcompetencia.component';
import { GanadoresDialogComponent } from './ganadores-dialog/ganadores-dialog.component';
import { IniciarcompetenciaComponent } from './iniciarCompetencia/iniciarcompetencia.component';
import { dialogIniciarOleadaComponent } from './dialoginiciaroleada/dialoginiciaroleada.component';

@NgModule({
  declarations: [
    CreatecompetenciaComponent,
    ListCompetenciaComponent,
    ShowCompetenciaComponent,
    GanadoresDialogComponent,
    IniciarcompetenciaComponent,
    dialogIniciarOleadaComponent
  ],
  imports: [
    CommonModule,
    CompetenciaRoutingModule,
    FlexLayoutModule,
    MatCardModule, 
    MatButtonModule,
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatProgressSpinnerModule,
    MatTableModule, 
    MatExpansionModule, 
    MatSelectModule, 
    MatSnackBarModule, 
    MatTooltipModule, 
    MatChipsModule, 
    MatListModule, 
    MatSidenavModule, 
    MatTabsModule, 
    MatProgressBarModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    NgAisModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatDividerModule,
    TranslateModule,
    MatPaginatorModule,
    MatSortModule,    
  ]
})
export class CompetenciaModule { }
