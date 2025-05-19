import { Component, Input, OnInit } from '@angular/core';
import { EmbryoService } from '../../../Services/Embryo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

   contactInfo  : any;
   emailPattern : any = /\S+@\S+\.\S+/;

   @Input() address : any;

   center: google.maps.LatLngLiteral = { lat: 6.2401035, lng: -75.5615565 };
   zoom = 12;
   markers = [
      { lat: 6.2401035, lng: -75.5615565 },
      { lat: 40.74988, lng: -73.968285 }
   ];
   
   mapOptions : any = {
      lat          : 6.2401035,
      lng          : -75.5615565,
      zoom         : 10,
      fillColor    : '#DC143C',
      draggable    : true,
      editable     : true,
      visible      : true,
   };

   icon : any = {
      url: './assets/images/flag.svg',
      scaledSize: {
         width: 40,
         height: 60
      }
   }

   constructor(public embryoService : EmbryoService) {}

   ngOnInit() {
   }
}

