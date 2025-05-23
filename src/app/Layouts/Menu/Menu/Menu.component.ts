import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../Core/guards/auth.service';
import { MenuItems } from '../../../Core/menu/menu-items/menu-items';
import { UsuarioService } from '../../../Pages/Session/services/usuario.service';

@Component({
  selector: 'embryo-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuComponent implements OnInit {

   expanded       : boolean;

   constructor(
    public menuItems: MenuItems,
    public usuarioService: UsuarioService,
    public authService: AuthService,
    public router: Router, 
    public translate: TranslateService) {
   }

   ngOnInit() {
    console.log("this.usuarioService._authenticated", this.authService.authenticatedData);
    
   }

   public onItemSelected(item: any) {
      if (item.children && item.children.length) {
         this.expanded = !this.expanded;
      }
   }


   public redirectTo(subchildState){
      this.router.navigate([subchildState.state],{ queryParams:{ category: subchildState.queryState }});
   }

}
