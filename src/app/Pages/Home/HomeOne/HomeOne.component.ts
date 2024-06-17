import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { EmbryoService } from '../../../Services/Embryo.service';

@Component({
  selector: 'app-homeone',
  templateUrl: './HomeOne.component.html',
  styleUrls: ['./HomeOne.component.scss']
})
export class HomeoneComponent implements OnInit, AfterViewChecked{

   urlSlide1 = ''
   urlSlide2 = ''

   blogList              : any;
   productReviews        : any;
   productsArray         : any;
   productsSliderData    : any;
   newProductsSliderData : any;
   slideConfig : any;

   rtlSlideConfig = {
      slidesToShow: 4,
      slidesToScroll:4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      rtl: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll:1
            }
         }
      ]
   };

   constructor(public embryoService: EmbryoService,
               private cdRef : ChangeDetectorRef) {
      
   }

   ngOnInit() {
      this.initForm();
      this.urlSlide1 = 'assets/images/aside/aside-' + Number(Math.floor(Math.random() * 13) + 1) + '.jpg'      
      this.urlSlide2 = 'assets/images/aside/aside-' + Number(Math.floor(Math.random() * 13) + 1) + '.jpg'      
      
      this.embryoService.featuredProductsSelectedTab = 0;
      this.embryoService.newArrivalSelectedTab = 0;
   }

   ngOnChanges() {
      this.slideConfig = {
         slidesToShow: 1,
         slidesToScroll:1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: false,
         rtl: false,
         responsive: [
          {
             breakpoint: 768,
             settings: {
                arrows: false,
                slidesToShow: 1
             }
             },
          {
             breakpoint: 480,
             settings: {
                arrows: false,
                slidesToShow: 1
             }
          }
         ]
      };
   }

   async initForm(){
      await this.getFeaturedProducts();
      // await this.getBlogList();
      await this.getProductRevies();
   }

   ngAfterViewChecked() : void {
      this.cdRef.detectChanges();
   }

   public getFeaturedProducts() {
      
   }

   public getBlogList() {
      
   }

   public addToCart(value) {
      
   }

   public getProductRevies() {
   }

   public addToWishlist(value) {
   }

   public onFeaturedSelectedTab(tabIndex) {
      this.productsSliderData = null;
      switch (tabIndex) {
         case 0:
            this.productsSliderData = this.productsArray.men;
         break;

         case 1:
            this.productsSliderData = this.productsArray.women;
         break;

         case 2:
            this.productsSliderData = this.productsArray.gadgets;
         break;

         case 3:
            this.productsSliderData = this.productsArray.accessories;
         break;
         
         default:
            // code...
            break;
      }

      return true;
   }

   public onNewArrivalsSelectedTab(tabIndex) {
      this.newProductsSliderData = null;
      switch (tabIndex) {
         case 0:
            this.newProductsSliderData = this.productsArray.men;
         break;

         case 1:
            this.newProductsSliderData = this.productsArray.women;
         break;

         case 2:
            this.newProductsSliderData = this.productsArray.gadgets;
         break;

         case 3:
            this.newProductsSliderData = this.productsArray.accessories;
         break;
         
         default:
            // code...
            break;
      }

      return true;
   }
}
