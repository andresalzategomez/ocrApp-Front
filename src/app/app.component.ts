import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EmbryoService } from './Services/Embryo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   constructor(translate: TranslateService, private embryoService:EmbryoService) {
      translate.addLangs(['en', 'fr']);
      translate.setDefaultLang('en');
      translate.use('en');
      // const browserLang: string = translate.getBrowserLang();
      // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }
   // variableAny:any[] = [{'producto': '1','cantidad': 5, 'valor': '45,000'}, "%0A", {'producto': '2','cantidad': 5, 'valor': '45,000'}]
   // variableAny:any[] = (JSON.parse(localStorage.getItem("cart_item")) || [])
   // variableString:string = ""

   ngOnInit() {
      // this.embryoService.calculateLocalCartProdCounts()
      // this.variableAny.forEach(element => {
      //    if(element?.name != undefined) this.variableString += 'Producto: ' + element?.name + ", Cantidad: " + (element?.quantity == undefined?'1':element?.quantity) + ", Valor: " + element?.price + "%0A"
      // });
   }

   
   
   
}
