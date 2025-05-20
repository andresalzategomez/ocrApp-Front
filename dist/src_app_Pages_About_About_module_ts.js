"use strict";
(self["webpackChunkembryo"] = self["webpackChunkembryo"] || []).push([["src_app_Pages_About_About_module_ts"],{

/***/ 93797:
/*!*********************************************!*\
  !*** ./src/app/Pages/About/About.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _About_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.routing */ 8838);
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact/Contact.component */ 36565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



// import { GoogleMapsModule } from '@angular/google-maps';





























class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_About_routing__WEBPACK_IMPORTED_MODULE_0__.AboutRoutes),
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__.MatGridListModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__.MatGridListModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 8838:
/*!**********************************************!*\
  !*** ./src/app/Pages/About/About.routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutes": () => (/* binding */ AboutRoutes)
/* harmony export */ });
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact/Contact.component */ 36565);

const AboutRoutes = [
    {
        path: 'contact',
        component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
    },
];


/***/ }),

/***/ 36565:
/*!**********************************************************!*\
  !*** ./src/app/Pages/About/Contact/Contact.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/Embryo.service */ 75973);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);



class ContactComponent {
    constructor(embryoService) {
        this.embryoService = embryoService;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.center = { lat: 6.2401035, lng: -75.5615565 };
        this.zoom = 12;
        this.markers = [
            { lat: 6.2401035, lng: -75.5615565 },
            { lat: 40.74988, lng: -73.968285 }
        ];
        this.mapOptions = {
            lat: 6.2401035,
            lng: -75.5615565,
            zoom: 10,
            fillColor: '#DC143C',
            draggable: true,
            editable: true,
            visible: true,
        };
        this.icon = {
            url: './assets/images/flag.svg',
            scaledSize: {
                width: 40,
                height: 60
            }
        };
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_0__.EmbryoService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], inputs: { address: "address" }, decls: 71, vars: 0, consts: [[1, "inner-container"], [1, "Contact-page"], [1, "contact-map"], [1, "contact-info-wrapper"], [1, "container"], [1, "section-gap"], ["fxLayout", "row wrap", 1, "col-gap"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "40", "fxFlex.lg", "40", "fxFlex.xl", "40"], [1, "block-title"], [1, "text-italic", "mb-4"], [1, "mb-4"], ["href", "tel:12345688"], ["href", "mailto:bryan.a.c@hotmail.com"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "60", "fxFlex.lg", "60", "fxFlex.xl", "60"], ["src", "assets/images/contacus.jpg", "width", "1000", "height", "729", "alt", "Cont\u00E1ctanos"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Informaci\u00F3n de Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Si tiene alg\u00FAn problema, sugerencias y comentarios, no dude en ponerse en contacto con nosotros. Elija nuestros servicios de comunicaci\u00F3n. Nos encantar\u00E1 saber de usted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "+57 313 6610612");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "bryan.a.c@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Cl. 40d #38-10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n");
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective], styles: [".map-container[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiQ29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_Pages_About_About_module_ts.js.map