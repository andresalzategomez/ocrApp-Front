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

const HeaderAdminLigaItems= [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  {
    state: "menu",
    name: "MENÚ",
    type: "sub",
    mega: true,
    icon: 'arrow_right_alt',
    children: [
      {  
        state: 'menu', 
        name: 'Competencias',
        type: 'sub',
        icon: 'arrow_right_alt',
        children:[
          {  
            state: 'competencia/aprobarLiga', 
            name: 'Aprobar oficiales',
            type: 'link',
            icon: 'perm_contact_calendar',
          },
          {  
            state: 'competencia/aprobar', 
            name: 'Aprobar NO oficiales',
            type: 'link',
            icon: 'perm_contact_calendar',
          },
          {  
            state: 'competencia/list', 
            name: 'Ver Iniciadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          },
          {  
            state: 'competencia/list/finalizadas', 
            name: 'Ver Finalizadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          }
        ]
      },
    ]
  },
  {
    state: "contact",
    name: "CONTÁCTENOS",
    type: "link",
    icon: "perm_contact_calendar",
  },
];

const HeaderOrganizadorItems= [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  {
    state: "menu",
    name: "MENÚ",
    type: "sub",
    mega: true,
    icon: 'arrow_right_alt',
    children: [
      {  
        state: 'menu', 
        name: 'Competencias',
        type: 'sub',
        icon: 'arrow_right_alt',
        children:[
          {  
            state: 'competencia/create', 
            name: 'Crear Competencia',
            type: 'link',
            icon: 'arrow_right_alt',
          },
          {  
            state: 'competencia/list', 
            name: 'Ver Iniciadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          },
          {  
            state: 'competencia/list/finalizadas', 
            name: 'Ver Finalizadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          }
        ]
      }
    ]
  },
  {
    state: "contact",
    name: "CONTÁCTENOS",
    type: "link",
    icon: "perm_contact_calendar",
  },
];

const HeaderAdminItems= [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  {
    state: "menu",
    name: "MENÚ",
    type: "sub",
    mega: true,
    icon: 'arrow_right_alt',
    children: [
      {  
        state: 'menu', 
        name: 'Competencias',
        type: 'sub',
        icon: 'arrow_right_alt',
        children:[
          {  
            state: 'competencia/create', 
            name: 'Crear Competencia',
            type: 'link',
            icon: 'arrow_right_alt',
          },
          {  
            state: 'competencia/list', 
            name: 'Ver Iniciadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          },
          {  
            state: 'competencia/list/finalizadas', 
            name: 'Ver Finalizadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          }
        ]
      },
      {
        state: 'menu', 
        name: 'Atletas',
        type: 'sub',
        icon: 'arrow_right_alt',
        children:[
          {  
            state: 'atleta/register', 
            name: 'Registrar atleta',
            type: 'link',
            icon: 'arrow_right_alt',
          }
        ]
      }
    ]
  },
  {
    state: "contact",
    name: "CONTÁCTENOS",
    type: "link",
    icon: "perm_contact_calendar",
  },
];

const HeaderAtletaItems= [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  {
    state: "menu",
    name: "MENÚ",
    type: "sub",
    mega: true,
    icon: 'arrow_right_alt',
    children: [
      {  
        state: 'menu', 
        name: 'Competencias',
        type: 'sub',
        icon: 'arrow_right_alt',
        children:[
          {  
            state: 'atleta/register', 
            name: 'Registrar competencia',
            type: 'link',
            icon: 'arrow_right_alt',
          },
          {  
            state: 'competencia/list', 
            name: 'Ver Iniciadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          },
          {  
            state: 'competencia/list/finalizadas', 
            name: 'Ver Finalizadas',
            type: 'link',
            icon: 'perm_contact_calendar',
          }
        ]
      }
    ]
  },
  {
    state: "contact",
    name: "CONTÁCTENOS",
    type: "link",
    icon: "perm_contact_calendar",
  },
];

const HeaderOneItems= [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  {
    state: "contact",
    name: "CONTÁCTENOS",
    type: "link",
    icon: "perm_contact_calendar",
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
        state: 'https://www.facebook.com/Junior.Romero.99/about', 
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
        state: 'https://www.instagram.com/ligaocrantioquia/', 
        name: 'Instagram',
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
   getMainMenu(rol): Menu[] {
    if(rol == "ADMIN"){
      return HeaderAdminItems;
    }
    if(rol == "ADMIN-LIGA"){
      return HeaderAdminLigaItems;
    }
    if(rol == "ORGANIZADOR"){
      return HeaderOrganizadorItems;
    }
    if(rol == "ATLETA"){
      return HeaderAtletaItems;
    }

    return HeaderOneItems;
      
   }
   getMainMenuInicio(): Menu[] {
      return HeaderOneItems;
   }

   /*
    * Get all footer menu
    */
   getFooterOneMenu(): Menu[] {
      return FooterOneItems;
   }
}
