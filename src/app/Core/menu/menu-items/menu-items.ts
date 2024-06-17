import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: Menu[];
}

const HeaderOneItems= [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  // {
  //   state: "about",
  //   name: "NOSOTROS",
  //   type: "sub",
  //   icon: "arrow_right_alt",
  //   children: [
  //     {  
  //       state: 'about', 
  //       name: 'NOSOTROS',
  //       type: 'link',
  //       icon: 'home'
  //     },
  //     {  
  //       state: 'term-condition', 
  //       name: 'TÉRMINOS Y CONDICIONES',
  //       type: 'link',
  //       icon: 'arrow_right_alt',
  //    }
  //   ]
  // },
  // {
  //   state:'products',
  //   name:"PROFESIONALES",
  //   type:"link",
  //   icon: 'party_mode'
  // },
  {
    state:'',
    name:"Menú",
    type:"link",
    icon: 'perm_contact_calendar',
    children: [
      {  
        state: 'competencia/list', 
        name: 'Ver competencias',
        type: 'link',
        icon: 'perm_contact_calendar',
      },
      {  
        state: 'competencia/create', 
        name: 'Registrar competencia',
        type: 'link',
        icon: 'arrow_right_alt',
      },
      {  
        state: 'categoria/create', 
        name: 'Registrar categoria',
        type: 'link',
        icon: 'arrow_right_alt',
      },
    ]
  },
];

const FooterOneItems= [
  {
     state:'',
     name:"Acerca de",
     type:"sub",
     icon: '',
     children: [
      {  
         state: 'about', 
         name: 'Nosotros',
         type: 'link',
         icon: 'arrow_right_alt',
      },
      {  
         state: 'term-condition', 
         name: 'Términos y Condiciones',
         type: 'link',
         icon: 'arrow_right_alt',
      },
      // {  
      //   state: 'privacy-policy', 
      //   name: 'PRIVACY POLICY',
      //   type: 'link',
      //   icon: 'arrow_right_alt',
      // },
      {  
        state: 'faq', 
        name: 'Preguntas Frecuentes',
        type: 'link',
        icon: 'arrow_right_alt',
       },
       {  
         state:'contact',
         name:"Contáctanos",
         type:"link",
         icon: 'perm_contact_calendar',
       }
    ]
  }, 
  {
    state:'',
    name:"Sesión",
    type:"sub",
    icon: '',
    children: [
        {  
        state: 'session/signin', 
        name: 'SIGN IN',
        type: 'link',
        icon: 'arrow_right_alt',
        },
        {  
            state: 'session/signup', 
            name: 'Registrarse',
            type: 'link',
            icon: 'arrow_right_alt',
        },
        {  
            state: 'session/forgot-password', 
            name: 'Olvidó Contraseña',
            type: 'link',
            icon: 'arrow_right_alt',
        },
        // {  
        //     state: 'session/thank-you', 
        //     name: 'THANK YOU',
        //     type: 'link',
        //     icon: 'arrow_right_alt',
        // }
    ]
  },
  // {
  //   state:'',
  //   name:"CATEGORIES",
  //   type:"sub",
  //   icon: '',
  //   children: [
  //     {  
  //       state: 'products/women', 
  //       name: 'WOMEN',
  //       type: 'link',
  //       icon: 'arrow_right_alt',
  //     },
  //     {  
  //       state: 'products/men', 
  //       name: 'MEN',
  //       type: 'link',
  //       icon: 'arrow_right_alt',
  //     },
  //     {  
  //       state: 'products/accesories', 
  //       name: 'ACCESSORIES',
  //       type: 'link',
  //       icon: 'arrow_right_alt',
  //     },
  //     {  
  //       state: 'products/gadgets', 
  //       name: 'GADGETS',
  //       type: 'link',
  //       icon: 'arrow_right_alt',
  //     }
  //   ]
  // },
  {
    state:'',
    name:"SOCIAL",
    type:"sub",
    icon: '',
    children: [
      {
        state: 'https://www.facebook.com/derechos.4', 
        name: 'Facebook',
        type: 'social_link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'https://twitter.com/derechos.4', 
        name: 'Twitter',
        type: 'social_link',
        icon: 'arrow_right_alt',
      },
      {
        state: 'https://www.youtube.com/derechos.4', 
        name: 'Youtube',
        type: 'social_link',
        icon: 'arrow_right_alt',
      },
      // {
      //   state: 'https://plus.google.com', 
      //   name: 'Google Plus',
      //   type: 'social_link',
      //   icon: 'arrow_right_alt',
      // }
    ]
  }

]

@Injectable()
export class MenuItems {

   /*
    * Get all header menu
    */
   getMainMenu(): Menu[] {
      return HeaderOneItems;
   }

   /*
    * Get all footer menu
    */
   getFooterOneMenu(): Menu[] {
      return FooterOneItems;
   }
}
