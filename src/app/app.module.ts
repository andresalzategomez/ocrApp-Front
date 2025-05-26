import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ToastaModule } from 'ngx-toasta';
import { BidiModule } from '@angular/cdk/bidi';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutes } from './app-routing';
import { MenuItems } from './Core/menu/menu-items/menu-items';

import { EmbryoService } from './Services/Embryo.service';

import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { AdminPanelModule } from './AdminPanel/admin-panel.module';
import { HeaderTwoComponent } from './Layouts/Header/HeaderTwo/HeaderTwo.component';
import { FooterOneComponent } from './Layouts/Footer/FooterOne/FooterOne.component';
import { MenuComponent } from './Layouts/Menu/Menu/Menu.component';
import { HomeoneComponent } from './Pages/Home/HomeOne/HomeOne.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';
import { SideBarMenuComponent } from './Layouts/Menu/SidebarMenu/SidebarMenu.component';
import { FixedHeaderComponent } from './Layouts/Header/FixedHeader/FixedHeader.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HomeTwoComponent } from './Pages/Home/HomeTwo/HomeTwo.component';
import { AboutUsComponent } from './Pages/AboutUs/AboutUs.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		HomeoneComponent,
		HomeTwoComponent,
		HeaderTwoComponent,
		FooterOneComponent,
		MenuComponent,
		SideBarMenuComponent,
		NotFoundComponent,
		FixedHeaderComponent,
		AboutUsComponent
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'embryo-seo-pre'}),
		BrowserAnimationsModule,
		RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' }),
		MatButtonModule,
		FlexLayoutModule,
		MatCardModule,
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
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		LoadingBarRouterModule,
		LoadingBarModule,
		SlickCarouselModule,
		AngularFirestoreModule,
		// AngularFireDatabaseModule,
		ToastaModule.forRoot(),
		BidiModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		PerfectScrollbarModule,
		AdminPanelModule
  ],
	providers: [
		MenuItems,
		EmbryoService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	exports : [
		RouterModule,
		ToastaModule
	],

	bootstrap: [AppComponent]
})
export class AppModule { }
