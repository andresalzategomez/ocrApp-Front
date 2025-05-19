import { Component, OnInit } from '@angular/core';
import { EmbryoService } from '../../../Services/Embryo.service';
import { UsuarioService } from '../../../Pages/Session/services/usuario.service';
import { AuthService } from '../../../Core/guards/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'HeaderTwo',
  templateUrl: './HeaderTwo.component.html',
  styleUrls: ['./HeaderTwo.component.scss']
})
export class HeaderTwoComponent implements OnInit {

   popupResponse : any;

   constructor(
      public embryoService : EmbryoService,
      public router : Router,
      private authService:AuthService,
      public usuarioService:UsuarioService,
   ) { }

   ngOnInit() {
   }

   public toggleSidebar()
   {
      this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
   }

   logOut(){
		document.getElementById('html').classList.remove("admin-panel");
      this.authService.signOut();
		this.router.navigate(['/home']);
	}
}
