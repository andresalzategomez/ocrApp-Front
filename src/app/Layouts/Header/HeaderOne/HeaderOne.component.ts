import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmbryoService } from '../../../Services/Embryo.service';

@Component({
  selector: 'HeaderOne',
  templateUrl: './HeaderOne.component.html',
  styleUrls: ['./HeaderOne.component.scss']
})
export class HeaderOneComponent implements OnInit {

   toggleActive     : boolean = false;
   cartProducts     : any;
   popupResponse    : any;
   wishlistProducts : any;

   constructor(public embryoService: EmbryoService) {}

   ngOnInit() {
   }

   public toggleSearch() {
   }

   public toggleSidebar()
   {
   }

   public openConfirmationPopup(value:any) {
     
   }

   public getPopupResponse(response:any, value:any, type) {
      
   }

   public addAllWishlistToCart(values:any) {
   } 

   public openWishlistConfirmationPopup(value:any) {
      
   }

   public selectedCurrency(value) {
   }

   public selectedLanguage(value) {
   }

   public addToCart(value) {
   }
}
