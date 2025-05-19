
import { Component, OnInit } from '@angular/core';
import { EmbryoService } from '../../../Services/Embryo.service';

@Component({
  selector: 'app-hometwo',
  templateUrl: './HomeTwo.component.html',
  styleUrls: ['./HomeTwo.component.scss']
})
export class HomeTwoComponent implements OnInit {
   urlSlide1 = ''
   urlSlide2 = ''

   slideConfig : any;
   slideConfigTwo : any;
   slideConfigBrands : any;
   arraySlider:any[] = [];
   brandsLogoArray:any[] = [];
   
   constructor(public embryoService : EmbryoService) { }

   ngOnInit() {
      this.urlSlide1 = 'assets/images/aside/aside-' + Number(Math.floor(Math.random() * 13) + 1) + '.jpg';
      this.urlSlide2 = 'assets/images/aside/aside-' + Number(Math.floor(Math.random() * 13) + 1) + '.jpg';

      this.brandsLogoArray = [
         {
            "image": 'assets/images/brands/ocrAnt.png'
         },
         {
            "image": 'assets/images/brands/acr logo.png'
         },
         {
            "image": 'assets/images/brands/ocrAnt.png'
         },
         {
            "image": 'assets/images/brands/acr logo.png'
         },
         {
            "image": 'assets/images/brands/ocrAnt.png'
         },
         {
            "image": 'assets/images/brands/acr logo.png'
         }
      ]

      this.arraySlider = [
         {
            "img": 'assets/images/aside/aside-1.jpg',
            "content": "Prueba"
         },
         {
            "img": 'assets/images/aside/aside-1.jpg',
            "content": "Prueba"
         },
         {
            "img": 'assets/images/aside/aside-1.jpg',
            "content": "Prueba"
         },
         {
            "img": 'assets/images/aside/aside-1.jpg',
            "content": "Prueba"
         }
      ]

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

      this.slideConfigBrands = {
         infinite: true,
         centerMode: true,
         slidesToShow: 5,
         slidesToScroll: 2,
         autoplay: true,
         autoplaySpeed: 500,
         rtl: false,
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  centerMode: true,
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 480,
               settings: {
                  centerMode: true,
                  slidesToShow: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            }
         ]
      };

      this.slideConfigTwo = {
         infinite: true,
         centerMode: true,
         centerPadding: '400px',
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 1000,
         dots: false,
         rtl: false,
         responsive: [
            {
               breakpoint: 1400,
               settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '300px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 1199,
               settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '150px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 899,
               settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '75px',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 768,
               settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            },
            {
               breakpoint: 480,
               settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000
               }
            }
         ]
      };
      
      this.embryoService.featuredProductsSelectedTab = 0;
      this.embryoService.newArrivalSelectedTab = 0;
   }
}
