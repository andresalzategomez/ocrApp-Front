"use strict";
(self["webpackChunkembryo"] = self["webpackChunkembryo"] || []).push([["src_app_Pages_Atleta_atleta_module_ts"],{

/***/ 58010:
/*!*******************************************************!*\
  !*** ./src/app/Pages/Atleta/atleta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtletaRoutingModule": () => (/* binding */ AtletaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _createatleta_components_createatleta_createatleta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createatleta/components/createatleta/createatleta.component */ 59028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: 'register',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _createatleta_components_createatleta_createatleta_component__WEBPACK_IMPORTED_MODULE_0__.CreateatletaComponent,
    },
];
class AtletaRoutingModule {
}
AtletaRoutingModule.ɵfac = function AtletaRoutingModule_Factory(t) { return new (t || AtletaRoutingModule)(); };
AtletaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AtletaRoutingModule });
AtletaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AtletaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 22733:
/*!***********************************************!*\
  !*** ./src/app/Pages/Atleta/atleta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtletaModule": () => (/* binding */ AtletaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _atleta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atleta-routing.module */ 58010);
/* harmony import */ var _createatleta_components_createatleta_createatleta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createatleta/components/createatleta/createatleta.component */ 59028);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-instantsearch */ 13107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
































class AtletaModule {
}
AtletaModule.ɵfac = function AtletaModule_Factory(t) { return new (t || AtletaModule)(); };
AtletaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AtletaModule });
AtletaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _atleta_routing_module__WEBPACK_IMPORTED_MODULE_0__.AtletaRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule,
        angular_instantsearch__WEBPACK_IMPORTED_MODULE_29__.NgAisModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AtletaModule, { declarations: [_createatleta_components_createatleta_createatleta_component__WEBPACK_IMPORTED_MODULE_1__.CreateatletaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _atleta_routing_module__WEBPACK_IMPORTED_MODULE_0__.AtletaRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule,
        angular_instantsearch__WEBPACK_IMPORTED_MODULE_29__.NgAisModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 59028:
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/Atleta/createatleta/components/createatleta/createatleta.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateatletaComponent": () => (/* binding */ CreateatletaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_atleta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/atleta.service */ 25067);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);

















function CreateatletaComponent_form_24_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CreateatletaComponent_form_24_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CreateatletaComponent_form_24_mat_select_20_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateatletaComponent_form_24_mat_select_20_mat_option_5_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.selectCompetencia(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                             ", item_r9.nombre, "\n                          ");
  }
}

function CreateatletaComponent_form_24_mat_select_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Seleccionar una Competencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateatletaComponent_form_24_mat_select_20_mat_option_5_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.competenciaList);
  }
}

function CreateatletaComponent_form_24_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateatletaComponent_form_24_mat_option_30_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.selectCategoria(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                             ", item_r12.nombre, "\n                          ");
  }
}

function CreateatletaComponent_form_24_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CreateatletaComponent_form_24_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                      Registrarse\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CreateatletaComponent_form_24_mat_progress_spinner_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-progress-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24)("mode", "indeterminate");
  }
}

function CreateatletaComponent_form_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreateatletaComponent_form_24_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CreateatletaComponent_form_24_mat_error_8_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreateatletaComponent_form_24_mat_error_15_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CreateatletaComponent_form_24_mat_select_20_Template, 7, 1, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Seleccionar una Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CreateatletaComponent_form_24_mat_option_30_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CreateatletaComponent_form_24_mat_error_33_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CreateatletaComponent_form_24_span_44_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CreateatletaComponent_form_24_mat_progress_spinner_46_Template, 2, 2, "mat-progress-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.dataForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("nombre_atleta").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("talla").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.competenciaList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categoriaList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("id_categoria").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.dataForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.disabled);
  }
}

class CreateatletaComponent {
  constructor(formBuilder, atletaService, categoriaService, _decimalPipe, router) {
    this.formBuilder = formBuilder;
    this.atletaService = atletaService;
    this.categoriaService = categoriaService;
    this._decimalPipe = _decimalPipe;
    this.router = router;
    this.categoriaList = [];
    this.competenciaList = [];
    this.atletasByCompetencia = [];
    this.tipoDocumento = ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Cédula de extranjería', 'Pasaporte', 'Permiso temporal de permanencia'];
    this.idCategoria = "";
  }

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem('authenticatedData') || '');
    this.createForm();
    this.findCompetenciasInicio();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      nombre_atleta: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      talla: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      tiempo_competencia: [null],
      id_categoria: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      id_competencia: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      id_usuario: [this.userLogin.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      no_atleta: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      no_oleada: [""],
      estado: ["EN_COMPETENCIA"]
    });
  }

  onSubmit() {
    console.log("this.dataForm", this.dataForm.value);

    if (this.dataForm.invalid || this.validarCedula()) {
      console.log("Inválido"); // alertify.set('notifier','position', 'top-right');
      // alertify.warning('Formulario inválido!',2);

      return;
    }

    this.saveAtleta();
  }

  saveAtleta() {
    console.log("save saveAtleta");
    console.log("this.dataForm.", this.dataForm.value);
    this.atletaService.saveAtleta(this.dataForm.value).subscribe({
      next: data => {
        console.log("data atleta", data);

        if (data?.response == 'OK') {
          // setTimeout(() => {
          this.enviarEmail(); // }, 5000);
        }
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  enviarEmail() {
    var _this = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const subject = '¡Inscripción Confirmada a la Carrera OCR!';

      const categ = _this.categoriaList.find(item => item.id === _this.dataForm.get('id_categoria')?.value);

      yield _this.atletaService.enviarEmail(_this.userLogin, _this.dataForm.value, _this.competenciaList[0], categ?.nombre, false, subject).subscribe({
        next: data => {
          console.log("data", data);

          if (data?.response == 'OK') {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Competencia creada con exito!', 2);

            _this.router.navigate(['/home']);
          }
        },
        error: err => {// this.showAlert = true;
          // this.alert = {
          //   type   : 'error',
          //   message: `${err.errorDescription}`
          // };
        }
      });
    })();
  }

  findCompetenciasInicio() {
    this.categoriaService.getCompetenciasInicio().subscribe({
      next: data => {
        console.log("data Competencia", data);
        this.competenciaList = data;
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  getCategoriaByCompetenciaId(idCompetencia) {
    this.atletaService.getCategoriaByCompetenciaId(idCompetencia).subscribe({
      next: data => {
        console.log("data Categoria", data);
        this.categoriaList = data;
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  getCountAtletasByCompetencia(idCompetencia) {
    this.atletaService.getCountAtletasByCompetencia(idCompetencia).subscribe({
      next: data => {
        this.atletasByCompetencia = data;
        console.log("data Atleta", data);
        this.dataForm.get('no_atleta')?.setValue(this._decimalPipe.transform(data.length + 1, '3.0-0')?.toString());
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  selectCompetencia(element) {
    console.log("element", element);
    this.getCategoriaByCompetenciaId(element.id); // this.getCountAtletasByCompetencia(element.id)
  }

  selectCategoria(element) {
    console.log("categoria", element);
    this.idCategoria = element.id.toString();
    this.getCategoriaByCompetenciaId(element.id_competencia);
    this.getCountAtletasByCompetencia(element.id_competencia);
  }

  validarCedula() {
    let existAtleta = false;
    const findAtleta = this.atletasByCompetencia.find(item => item.id_usuario === this.dataForm.get('id_usuario')?.value);
    console.log("findAtleta", findAtleta);

    if (findAtleta) {
      existAtleta = true;
      alertify.set('notifier', 'position', 'top-right');
      alertify.warning('El atleta ' + this.userLogin?.nombre + " ya se encuentra registrado en esta competencia.", 5);
    }

    return existAtleta;
  }

}

CreateatletaComponent.ɵfac = function CreateatletaComponent_Factory(t) {
  return new (t || CreateatletaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_atleta_service__WEBPACK_IMPORTED_MODULE_1__.AtletaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_2__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

CreateatletaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateatletaComponent,
  selectors: [["app-createatleta"]],
  decls: 33,
  vars: 1,
  consts: [[1, "inner-container", "bg-white", "section-gap-lg"], [1, "container"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "80", "fxFlex.lg", "70", "fxFlex.xl", "70"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50"], [1, "form-img", "register-image-atleta"], [1, "register-form", "form-margin"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-4"], [1, "w-100", "mt-3"], ["matInput", "", "type", "text", "formControlName", "nombre_atleta", "placeholder", "Nombre", "required", ""], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "talla", "placeholder", "Talla", "required", ""], ["class", "w-full overflow-hidden", "formControlName", "id_competencia", "style", "width: 100%", "placeholder", "Seleccione una Competencia", 4, "ngIf"], ["formControlName", "id_categoria", "placeholder", "Seleccione una Categor\u00EDa", 1, "w-full", "overflow-hidden", 2, "width", "100%"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "no_atleta", "placeholder", "N\u00FAmero de Atleta", "required", "", "readonly", ""], ["color", "primary", "mat-flat-button", "", "type", "submit", 1, "button-lg", "mb-3"], [3, "diameter", "mode", 4, "ngIf"], ["formControlName", "id_competencia", "placeholder", "Seleccione una Competencia", 1, "w-full", "overflow-hidden", 2, "width", "100%"], [3, "value", "click"], [3, "diameter", "mode"]],
  template: function CreateatletaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n          ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n              ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n              ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n              ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-card", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Registrar atleta");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CreateatletaComponent_form_24_Template, 49, 8, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n              ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n          ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n  ");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGVhdGxldGEuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Atleta_atleta_module_ts.js.map