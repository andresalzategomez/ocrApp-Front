import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastaService, ToastaConfig, ToastOptions } from 'ngx-toasta';
import { environment } from '../../environments/environment';

declare let alertify: any; 

interface Response {
  data     : any;
}

@Injectable()
export class EmbryoService {

	sidenavOpen                 : boolean = false;
	paymentSidenavOpen          : boolean = false;
	isDirectionRtl              : boolean = false;
	featuredProductsSelectedTab : any = 0;
	newArrivalSelectedTab       : any = 0;

	/**** Get currency code:- https://en.wikipedia.org/wiki/ISO_4217 *****/
	currency  : string = 'COP';
	language  : string = 'es';

	shipping  : number = 12.95;
	tax       : number = 27.95;

	// products  : AngularFireObject<any>;

	localStorageCartProducts : any;
	localStorageWishlist : any;
	navbarCartCount : number = 0;
	navbarWishlistProdCount = 0;
	buyUserCartProducts : any;

	private apiUrl = environment.url_destino + environment.API_URL_OCR;
	
	constructor(private http:HttpClient,
				private _httpClient: HttpClient,
				private dialog: MatDialog,
				// private db: AngularFireDatabase,
				private toastyService: ToastaService,
				// private authService: AuthService,
				private toastyConfig: ToastaConfig) {

		this.toastyConfig.position = "top-right";
		this.toastyConfig.theme = "material";

		// this.db.object("products").valueChanges().subscribe(res => {this.setCartItemDefaultValue(res['gadgets'][1])});
	}

	}
