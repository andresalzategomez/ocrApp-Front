(self["webpackChunkembryo"] = self["webpackChunkembryo"] || []).push([["src_app_Pages_Competencia_competencia_module_ts"],{

/***/ 75:
/*!*****************************************************************!*\
  !*** ./src/app/Pages/Competencia/competencia-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetenciaRoutingModule": () => (/* binding */ CompetenciaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _createcompetencia_components_createcompetencia_createcompetencia_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createcompetencia/components/createcompetencia/createcompetencia.component */ 49572);
/* harmony import */ var _listcompetencia_components_listcompetencia_listcompetencia_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listcompetencia/components/listcompetencia/listcompetencia.component */ 5796);
/* harmony import */ var _showcompetencia_components_showcompetencia_showcompetencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcompetencia/components/showcompetencia/showcompetencia.component */ 49902);
/* harmony import */ var _iniciarcompetencia_iniciarcompetencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iniciarcompetencia/iniciarcompetencia.component */ 79612);
/* harmony import */ var _listcompetencia_components_listcompetenciafinalizadas_listcompetenciafinalizadas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listcompetencia/components/listcompetenciafinalizadas/listcompetenciafinalizadas.component */ 54420);
/* harmony import */ var _listcompetencia_components_listcompetenciaaprobar_listcompetenciaaprobar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcompetencia/components/listcompetenciaaprobar/listcompetenciaaprobar.component */ 43807);
/* harmony import */ var _listcompetencia_components_listcompetenciaaprobarliga_listcompetenciaaprobarliga_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listcompetencia/components/listcompetenciaaprobarliga/listcompetenciaaprobarliga.component */ 37298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    {
        path: 'create',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _createcompetencia_components_createcompetencia_createcompetencia_component__WEBPACK_IMPORTED_MODULE_0__.CreatecompetenciaComponent,
    },
    {
        path: 'iniciar/:idCompetencia',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _iniciarcompetencia_iniciarcompetencia_component__WEBPACK_IMPORTED_MODULE_3__.IniciarcompetenciaComponent,
    },
    {
        path: 'list',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _listcompetencia_components_listcompetencia_listcompetencia_component__WEBPACK_IMPORTED_MODULE_1__.ListCompetenciaComponent,
    },
    {
        path: 'list/finalizadas',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _listcompetencia_components_listcompetenciafinalizadas_listcompetenciafinalizadas_component__WEBPACK_IMPORTED_MODULE_4__.ListCompetenciaFinalizadasComponent,
    },
    {
        path: 'aprobar',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _listcompetencia_components_listcompetenciaaprobar_listcompetenciaaprobar_component__WEBPACK_IMPORTED_MODULE_5__.ListCompetenciaAprobarComponent,
    },
    {
        path: 'aprobarLiga',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _listcompetencia_components_listcompetenciaaprobarliga_listcompetenciaaprobarliga_component__WEBPACK_IMPORTED_MODULE_6__.ListCompetenciaAprobarLigaComponent,
    },
    {
        path: 'show/:idCompetencia',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _showcompetencia_components_showcompetencia_showcompetencia_component__WEBPACK_IMPORTED_MODULE_2__.ShowCompetenciaComponent,
    },
    {
        path: 'detalle',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: _listcompetencia_components_listcompetencia_listcompetencia_component__WEBPACK_IMPORTED_MODULE_1__.ListCompetenciaComponent,
    },
];
class CompetenciaRoutingModule {
}
CompetenciaRoutingModule.ɵfac = function CompetenciaRoutingModule_Factory(t) { return new (t || CompetenciaRoutingModule)(); };
CompetenciaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CompetenciaRoutingModule });
CompetenciaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CompetenciaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 95941:
/*!*********************************************************!*\
  !*** ./src/app/Pages/Competencia/competencia.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetenciaModule": () => (/* binding */ CompetenciaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-instantsearch */ 13107);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _competencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competencia-routing.module */ 75);
/* harmony import */ var _createcompetencia_components_createcompetencia_createcompetencia_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createcompetencia/components/createcompetencia/createcompetencia.component */ 49572);
/* harmony import */ var _listcompetencia_components_listcompetencia_listcompetencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listcompetencia/components/listcompetencia/listcompetencia.component */ 5796);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _showcompetencia_components_showcompetencia_showcompetencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcompetencia/components/showcompetencia/showcompetencia.component */ 49902);
/* harmony import */ var _ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ganadores-dialog/ganadores-dialog.component */ 7008);
/* harmony import */ var _iniciarCompetencia_iniciarcompetencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iniciarCompetencia/iniciarcompetencia.component */ 38513);
/* harmony import */ var _dialoginiciaroleada_dialoginiciaroleada_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialoginiciaroleada/dialoginiciaroleada.component */ 55729);
/* harmony import */ var _listcompetencia_components_listcompetenciafinalizadas_listcompetenciafinalizadas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listcompetencia/components/listcompetenciafinalizadas/listcompetenciafinalizadas.component */ 54420);
/* harmony import */ var _listcompetencia_components_listcompetenciaaprobar_listcompetenciaaprobar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listcompetencia/components/listcompetenciaaprobar/listcompetenciaaprobar.component */ 43807);
/* harmony import */ var _listcompetencia_components_listcompetenciaaprobarliga_listcompetenciaaprobarliga_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listcompetencia/components/listcompetenciaaprobarliga/listcompetenciaaprobarliga.component */ 37298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);












































class CompetenciaModule {
}
CompetenciaModule.ɵfac = function CompetenciaModule_Factory(t) { return new (t || CompetenciaModule)(); };
CompetenciaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CompetenciaModule });
CompetenciaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _competencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompetenciaRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule,
        angular_instantsearch__WEBPACK_IMPORTED_MODULE_37__.NgAisModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_40__.MatDividerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_41__.TranslateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__.MatSortModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CompetenciaModule, { declarations: [_createcompetencia_components_createcompetencia_createcompetencia_component__WEBPACK_IMPORTED_MODULE_1__.CreatecompetenciaComponent,
        _listcompetencia_components_listcompetencia_listcompetencia_component__WEBPACK_IMPORTED_MODULE_2__.ListCompetenciaComponent,
        _listcompetencia_components_listcompetenciaaprobar_listcompetenciaaprobar_component__WEBPACK_IMPORTED_MODULE_8__.ListCompetenciaAprobarComponent,
        _listcompetencia_components_listcompetenciaaprobarliga_listcompetenciaaprobarliga_component__WEBPACK_IMPORTED_MODULE_9__.ListCompetenciaAprobarLigaComponent,
        _listcompetencia_components_listcompetenciafinalizadas_listcompetenciafinalizadas_component__WEBPACK_IMPORTED_MODULE_7__.ListCompetenciaFinalizadasComponent,
        _showcompetencia_components_showcompetencia_showcompetencia_component__WEBPACK_IMPORTED_MODULE_3__.ShowCompetenciaComponent,
        _ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_4__.GanadoresDialogComponent,
        _iniciarCompetencia_iniciarcompetencia_component__WEBPACK_IMPORTED_MODULE_5__.IniciarcompetenciaComponent,
        _dialoginiciaroleada_dialoginiciaroleada_component__WEBPACK_IMPORTED_MODULE_6__.dialogIniciarOleadaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _competencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompetenciaRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__.MatCheckboxModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__.MatSliderModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__.MatRadioModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridListModule,
        angular_instantsearch__WEBPACK_IMPORTED_MODULE_37__.NgAisModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_40__.MatDividerModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_41__.TranslateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__.MatSortModule] }); })();


/***/ }),

/***/ 49572:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/createcompetencia/components/createcompetencia/createcompetencia.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatecompetenciaComponent": () => (/* binding */ CreatecompetenciaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_competencia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/competencia.service */ 38109);
/* harmony import */ var _Session_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Session/services/usuario.service */ 55825);
/* harmony import */ var _services_departamentos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/departamentos.service */ 35041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);


















function CreatecompetenciaComponent_form_24_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_mat_select_13_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatecompetenciaComponent_form_24_mat_select_13_mat_option_5_Template_mat_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.selectDepartamento(item_r12)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                           ", item_r12.name, "\n                        ");
} }
function CreatecompetenciaComponent_form_24_mat_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Seleccionar un departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreatecompetenciaComponent_form_24_mat_select_13_mat_option_5_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.departamentoList);
} }
function CreatecompetenciaComponent_form_24_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_mat_form_field_18_mat_select_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                           ", item_r18.name, "\n                        ");
} }
function CreatecompetenciaComponent_form_24_mat_form_field_18_mat_select_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Seleccionar un municipio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreatecompetenciaComponent_form_24_mat_form_field_18_mat_select_2_mat_option_5_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r15.municipiosList);
} }
function CreatecompetenciaComponent_form_24_mat_form_field_18_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_mat_form_field_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreatecompetenciaComponent_form_24_mat_form_field_18_mat_select_2_Template, 7, 1, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CreatecompetenciaComponent_form_24_mat_form_field_18_mat_error_4_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.municipiosSw);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.dataForm.get("municipio").hasError("required"));
} }
function CreatecompetenciaComponent_form_24_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El campo no puede estar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                      Registrarse\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatecompetenciaComponent_form_24_mat_progress_spinner_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-progress-spinner", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24)("mode", "indeterminate");
} }
function CreatecompetenciaComponent_form_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreatecompetenciaComponent_form_24_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CreatecompetenciaComponent_form_24_mat_error_8_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n                    \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CreatecompetenciaComponent_form_24_mat_select_13_Template, 7, 1, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreatecompetenciaComponent_form_24_mat_error_15_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CreatecompetenciaComponent_form_24_mat_form_field_18_Template, 6, 2, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n                    \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CreatecompetenciaComponent_form_24_mat_error_24_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CreatecompetenciaComponent_form_24_mat_error_31_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " \n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "mat-datepicker-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "mat-datepicker", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CreatecompetenciaComponent_form_24_mat_error_43_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CreatecompetenciaComponent_form_24_span_49_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, CreatecompetenciaComponent_form_24_mat_progress_spinner_51_Template, 2, 2, "mat-progress-spinner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.dataForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("nombre").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.departamentoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("departamento").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.municipiosSw);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("direccion").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("club").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r7)("min", ctx_r0.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("fecha").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.dataForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.disabled);
} }
class CreatecompetenciaComponent {
    constructor(formBuilder, competenciaService, usuarioService, departamentosService, router) {
        this.formBuilder = formBuilder;
        this.competenciaService = competenciaService;
        this.usuarioService = usuarioService;
        this.departamentosService = departamentosService;
        this.router = router;
        this.checkTerms = true;
        this.departamentoList = [];
        this.municipiosList = [];
        this.municipiosSw = false;
    }
    ngOnInit() {
        this.createForm();
        this.userLogin = JSON.parse(localStorage.getItem('authenticatedData') || '');
        console.log("this.userLogin?.club", this.userLogin?.club);
        this.minDate = new Date(Date.now());
        this.getDepartamentos();
        this.getRolById();
        this.getClub();
        // alertify.set('notifier','position', 'top-right');
        // alertify.success('Usuario creado con exito!',2);
    }
    createForm() {
        this.dataForm = this.formBuilder.group({
            nombre: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            departamento: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            municipio: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            direccion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            club: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            fecha: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            hora_inicio: [""],
            hora_final: [""],
            oficialLiga: [null],
            aprobado: [null],
            id_usuario: [null],
            estado: ["INICIO"],
        });
    }
    onSubmit() {
        console.log("this.dataForm", this.dataForm.value);
        if (this.dataForm.invalid) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.warning('Formulario inválido!', 2);
            return;
        }
        this.saveCompetencia();
    }
    saveCompetencia() {
        console.log("save saveCompetencia");
        this.dataForm.get('fecha')?.setValue((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(new Date(this.dataForm.get('fecha')?.value), 'yyyy-MM-dd', 'en-US'));
        console.log("this.dataForm.", this.dataForm.value);
        this.competenciaService.saveCompetencia(this.dataForm.value)
            .subscribe({
            next: (data) => {
                console.log("data", data);
                if (data?.response == 'OK') {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.success('Competencia creada con exito!', 2);
                    this.router.navigate(['/home']);
                }
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    ChangeTerms(event) {
        console.log("event", event);
    }
    getDepartamentos() {
        this.departamentosService.getDepartamento()
            .subscribe({
            next: (data) => {
                console.log("data dep", data);
                this.departamentoList = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    selectDepartamento(event) {
        this.getMunicipios(event);
    }
    getMunicipios(departamento) {
        this.departamentosService.getMunicipios()
            .subscribe({
            next: (data) => {
                this.municipiosList = data;
                this.municipiosList = this.municipiosList.filter(item => item.departmentId === departamento.id);
                console.log("municipiosList", this.municipiosList);
                this.municipiosSw = true;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    getRolById() {
        this.usuarioService.getRoleById(this.userLogin?.id).subscribe({
            next: (data) => {
                console.log("data role", data[0]);
                this.rolLogin = data[0];
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    getClub() {
        this.usuarioService.getClub().subscribe({
            next: (data) => {
                this.dataClub = data.find(item => item.id === Number(this.userLogin?.club));
                console.log("dataClub", this.dataClub);
                this.dataForm.get("club")?.setValue(this.dataClub.nombre);
                this.dataForm.get("id_usuario")?.setValue(this.userLogin?.id);
                console.log("this.dataForm", this.dataForm.value);
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
}
CreatecompetenciaComponent.ɵfac = function CreatecompetenciaComponent_Factory(t) { return new (t || CreatecompetenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_competencia_service__WEBPACK_IMPORTED_MODULE_0__.CompetenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Session_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_departamentos_service__WEBPACK_IMPORTED_MODULE_2__.DepartamentosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
CreatecompetenciaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreatecompetenciaComponent, selectors: [["app-createcompetencia"]], decls: 33, vars: 1, consts: [[1, "inner-container", "bg-white", "section-gap-lg"], [1, "container"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "80", "fxFlex.lg", "70", "fxFlex.xl", "70"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50"], [1, "form-img", "register-image"], [1, "register-form", "form-margin"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-4"], [1, "w-100", "mt-3"], ["matInput", "", "type", "text", "formControlName", "nombre", "placeholder", "Nombre", "required", ""], [4, "ngIf"], ["class", "w-full overflow-hidden", "formControlName", "departamento", "style", "width: 100%", "placeholder", "Seleccione un departamento", 4, "ngIf"], ["class", "w-100 mt-3", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "direccion", "placeholder", "Direcci\u00F3n", "required", ""], ["matInput", "", "type", "text", "disabled", "", "readonly", "", "formControlName", "club", "placeholder", "Club"], ["matInput", "", "placeholder", "Seleccione la fecha de competencia", "formControlName", "fecha", 1, "w-full", "text-black", "rounded", 3, "matDatepicker", "min"], ["matSuffix", "", 3, "for"], ["fecha", ""], ["mat-flat-button", "", "type", "submit", 1, "button-lg", "mb-3", 2, "background", "#9AD135"], [3, "diameter", "mode", 4, "ngIf"], ["formControlName", "departamento", "placeholder", "Seleccione un departamento", 1, "w-full", "overflow-hidden", 2, "width", "100%"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["class", "w-full overflow-hidden", "formControlName", "municipio", "style", "width: 100%", "placeholder", "Seleccione un municipio", 4, "ngIf"], ["formControlName", "municipio", "placeholder", "Seleccione un municipio", 1, "w-full", "overflow-hidden", 2, "width", "100%"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "diameter", "mode"]], template: function CreatecompetenciaComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Registrar competencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CreatecompetenciaComponent_form_24_Template, 54, 13, "form", 7);
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGVjb21wZXRlbmNpYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 55729:
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/dialoginiciaroleada/dialoginiciaroleada.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dialogIniciarOleadaComponent": () => (/* binding */ dialogIniciarOleadaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);














function dialogIniciarOleadaComponent_form_10_mat_select_25_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                                    ", item_r8.nombre, "\n                                ");
  }
}

function dialogIniciarOleadaComponent_form_10_mat_select_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function dialogIniciarOleadaComponent_form_10_mat_select_25_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.changeCategoria($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Seleccione una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, dialogIniciarOleadaComponent_form_10_mat_select_25_mat_option_5_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.data.categoria);
  }
}

function dialogIniciarOleadaComponent_form_10_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                El campo no puede estar vac\u00EDo\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function dialogIniciarOleadaComponent_form_10_mat_select_42_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                                    ", item_r12, "\n                                ");
  }
}

function dialogIniciarOleadaComponent_form_10_mat_select_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Seleccione una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, dialogIniciarOleadaComponent_form_10_mat_select_42_mat_option_5_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.oleadas);
  }
}

function dialogIniciarOleadaComponent_form_10_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                El campo no puede estar vac\u00EDo\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function dialogIniciarOleadaComponent_form_10_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                    Guardar\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function dialogIniciarOleadaComponent_form_10_mat_progress_spinner_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-progress-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 24)("mode", "indeterminate");
  }
}

function dialogIniciarOleadaComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function dialogIniciarOleadaComponent_form_10_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                            Iniciar Oelada\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n                                Categoria - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, dialogIniciarOleadaComponent_form_10_mat_select_25_Template, 7, 1, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, dialogIniciarOleadaComponent_form_10_mat_error_27_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n                                Oleada - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, dialogIniciarOleadaComponent_form_10_mat_select_42_Template, 7, 1, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, dialogIniciarOleadaComponent_form_10_mat_error_44_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function dialogIniciarOleadaComponent_form_10_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, dialogIniciarOleadaComponent_form_10_span_70_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, dialogIniciarOleadaComponent_form_10_mat_progress_spinner_72_Template, 2, 2, "mat-progress-spinner", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.dataForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.data.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("categoria").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.oleadas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.get("oleada").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.dataForm.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dataForm.disabled);
  }
}

class dialogIniciarOleadaComponent {
  constructor(formBuilder, dialog, dialogRef, data) {
    this.formBuilder = formBuilder;
    this.dialog = dialog;
    this.dialogRef = dialogRef;
    this.data = data;
    this.isOleada = false;
    this.oleadas = [];
  }

  ngOnInit() {
    this.createForm();
    this.initForm();
    console.log("this.data", this.data);
  }

  goBack() {
    this.dialogRef.close();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      categoria: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      oleada: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  /** Realiza las consultas iniciales al cargar el componente */


  initForm() {
    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  onSubmit() {
    console.log(this.dataForm.value);

    if (this.dataForm.invalid) {
      alertify.set('notifier', 'position', 'top-right');
      alertify.warning('Formulario invalido', 2);
      return;
    }

    this.oleadaSelect = {
      id: null,
      id_competencia: this.data?.competencia?.id,
      id_categoria: this.dataForm.get("categoria")?.value?.id,
      no_oleada: Number(this.dataForm.get('oleada')?.value),
      fechaInicio: (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(new Date()), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US'),
      fechaFin: ""
    };
    this.dialogRef.close(this.oleadaSelect);
  }

  changeCategoria(event) {
    console.log("event", event.value);

    if (event) {
      this.isOleada = true;
      this.oleadas = [];

      for (let index = 1; index <= event.value?.no_oleada; index++) {
        this.oleadas.push(index);
      }
    }
  }

}

dialogIniciarOleadaComponent.ɵfac = function dialogIniciarOleadaComponent_Factory(t) {
  return new (t || dialogIniciarOleadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};

dialogIniciarOleadaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: dialogIniciarOleadaComponent,
  selectors: [["app-dialogIniciarOleada"]],
  decls: 15,
  vars: 1,
  consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-5", "sm:p-5"], [1, "border-2", "border-gray", "rounded-2xl"], [1, "w-full", "rounded", "mx-auto", "bg-white", "py-5", "px-5", "lg:px-5", "shadow-xl", "mb-1"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "md:w-1/2", "group", "inline-flex", "relative", "sm:w-full"], [1, "text-base", "font-bold", "text-left"], [1, "flex", "mt-2", "pb-4", "w-full"], [1, "mt-px", "border-t", "w-full"], [1, "md:w-1/4", "sm:w-full", "w-100", "relative", "z-0", "mb-2", "px-2", "group", "inline-flex"], [1, "w-full"], [1, "tracking-wide", "text-black", "text-sm", "font-bold", "mb-2"], [1, "text-sm", "text-red-700"], ["class", "w-100", "style", "width: 100%", "formControlName", "categoria", 3, "selectionChange", 4, "ngIf"], [4, "ngIf"], ["class", "w-100", "style", "width: 100%", "formControlName", "oleada", 4, "ngIf"], [1, "flex", "mt-2", "mb-2", "pb-5", "w-full"], [1, "flex", "justify-end", "px-2", "py-0", "pb-2", "w-full"], [1, "md:w-1/4", "sm:w-full", "w-100", "relative", "z-0", "mb-2", "px-2", "group", "inline-flex", "justify-end"], ["type", "button", 1, "bg-secondary", "text-sm", "font-semibold", "py-2", "px-2", "border", "border-solid", "text-[#009CD7]", "border-[#009CD7]", "rounded-full", 3, "click"], [1, "px-4"], ["mat-flat-button", "", "type", "submit", 1, "bg-primary", "text-white", "text-sm", "font-semibold", "py-2", "px-2", "rounded-full", "hover:bg-[#FF8403]"], [3, "diameter", "mode", 4, "ngIf"], ["formControlName", "categoria", 1, "w-100", 2, "width", "100%", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "oleada", 1, "w-100", 2, "width", "100%"], [3, "diameter", "mode"]],
  template: function dialogIniciarOleadaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, dialogIniciarOleadaComponent_form_10_Template, 77, 7, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".descripcionInput[_ngcontent-%COMP%] {\n  left: 10px;\n  bottom: 30px;\n}\n\n@media screen and (max-width: 960px) {\n  .descripcionInput[_ngcontent-%COMP%] {\n    bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZ0luaWNpYXJPbGVhZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0VBQ047QUFDRiIsImZpbGUiOiJkaWFsb2dJbmljaWFyT2xlYWRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXBjaW9uSW5wdXR7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLmRlc2NyaXBjaW9uSW5wdXR7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 7008:
/*!**********************************************************************************!*\
  !*** ./src/app/Pages/Competencia/ganadores-dialog/ganadores-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GanadoresDialogComponent": () => (/* binding */ GanadoresDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_competencia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/competencia.service */ 38109);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 92197);

















function GanadoresDialogComponent_mat_select_16_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GanadoresDialogComponent_mat_select_16_mat_option_5_Template_mat_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.buscarGanadoresCategoria(item_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                    ", item_r5.nombre, "\n                ");
} }
function GanadoresDialogComponent_mat_select_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Seleccionar una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GanadoresDialogComponent_mat_select_16_mat_option_5_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categorias);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r36 + 1);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Atleta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r37.no_atleta);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Oleada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r38.no_oleada);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r39.nombre);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r40.documento);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r41.email);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r22.changeCategoria(element_r42.categoria_id));
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fecha Fin (h:m:s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r24.verFechaInicio(element_r43));
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fecha Fin (h:m:s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r44.tiempo_competencia, "HH:mm:ss.SSS"));
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tiempo (h:m:s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.caluclarTiempoPorAtleta(element_r45));
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r46.estado);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/vacunacion/vacunacion/show/", element_r47.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/vacunacion/vacunacion/show/", element_r47.id, "");
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_tr_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 55);
} }
function GanadoresDialogComponent_ng_container_31_ng_container_2_tr_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 56);
} }
const _c0 = function () { return [15, 30, 45, 60]; };
function GanadoresDialogComponent_ng_container_31_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n             ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n                   ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "         \n                         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, GanadoresDialogComponent_ng_container_31_ng_container_2_th_18_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GanadoresDialogComponent_ng_container_31_ng_container_2_td_20_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, GanadoresDialogComponent_ng_container_31_ng_container_2_th_25_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, GanadoresDialogComponent_ng_container_31_ng_container_2_td_27_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, GanadoresDialogComponent_ng_container_31_ng_container_2_th_32_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, GanadoresDialogComponent_ng_container_31_ng_container_2_td_34_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, GanadoresDialogComponent_ng_container_31_ng_container_2_th_39_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, GanadoresDialogComponent_ng_container_31_ng_container_2_td_41_Template, 3, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n                             ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](44, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, GanadoresDialogComponent_ng_container_31_ng_container_2_th_46_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, GanadoresDialogComponent_ng_container_31_ng_container_2_td_48_Template, 3, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, GanadoresDialogComponent_ng_container_31_ng_container_2_th_53_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, GanadoresDialogComponent_ng_container_31_ng_container_2_td_55_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](58, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, GanadoresDialogComponent_ng_container_31_ng_container_2_th_60_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, GanadoresDialogComponent_ng_container_31_ng_container_2_td_62_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](65, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, GanadoresDialogComponent_ng_container_31_ng_container_2_th_67_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, GanadoresDialogComponent_ng_container_31_ng_container_2_td_69_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](72, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, GanadoresDialogComponent_ng_container_31_ng_container_2_th_74_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, GanadoresDialogComponent_ng_container_31_ng_container_2_td_76_Template, 3, 4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](79, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, GanadoresDialogComponent_ng_container_31_ng_container_2_th_81_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, GanadoresDialogComponent_ng_container_31_ng_container_2_td_84_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](87, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, GanadoresDialogComponent_ng_container_31_ng_container_2_th_89_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, GanadoresDialogComponent_ng_container_31_ng_container_2_td_91_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](94, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, GanadoresDialogComponent_ng_container_31_ng_container_2_th_96_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\n                               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, GanadoresDialogComponent_ng_container_31_ng_container_2_td_98_Template, 12, 2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "     \n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, GanadoresDialogComponent_ng_container_31_ng_container_2_tr_101_Template, 1, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, GanadoresDialogComponent_ng_container_31_ng_container_2_tr_103_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "\n                         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "  \n                      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "\n                   ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "   \n                   ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "\n                   ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "mat-paginator", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "\n             ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "\n             ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " \n       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r8.atletas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
} }
function GanadoresDialogComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GanadoresDialogComponent_ng_container_31_ng_container_2_Template, 116, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.buscarByCategoria);
} }
function GanadoresDialogComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n ");
} }
class GanadoresDialogComponent {
    constructor(data, dialogRef, competenciaService, categoriaService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.competenciaService = competenciaService;
        this.categoriaService = categoriaService;
        this.displayedProductColumns = ['posicion', 'no_atleta', 'no_oleada', 'nombre', 'fechaInicio', 'tiempo_competencia', 'tiempo', 'categoria'];
        this.allAtletas = [];
        this.atletas = [];
        this.categorias = [];
        this.buscarByCategoria = false;
        this.oleadas = [];
    }
    ngOnInit() {
        this.competencia = this.data.competencia;
        this.allAtletas = this.data.atletas;
        this.getCategoriaByCompetencia();
        this.findOleadaByCompetencia();
    }
    changeCategoria(idCategoria) {
        let nombreCategoria = '';
        const categoriaFind = this.categorias.find(item => item.id === idCategoria);
        if (categoriaFind)
            nombreCategoria = categoriaFind.nombre;
        return nombreCategoria;
    }
    calcularGanadoresPorCategoria(value) {
        let newVal = value.sort((a, b) => {
            let date1 = new Date(b.tiempo_competencia);
            let date2 = new Date(a.tiempo_competencia);
            if (date1 < date2) {
                return 1;
            }
            else if (date1 > date2) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return newVal;
    }
    getCategoriaByCompetencia() {
        this.categoriaService.getCategoriaByCompetencia(this.competencia.id)
            .subscribe({
            next: (data) => {
                this.categorias = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    buscarGanadoresCategoria(categoria) {
        this.atletas = [];
        this.allAtletas.forEach(element => {
            // console.log("diferencia" + element.nombre, formatDate((element.tiempo_competencia), 'HH:mm:ss', 'en-US') - formatDate((this.competencia.hora_inicio), 'HH:mm:ss', 'en-US'));
            if (element.id_categoria === categoria.id) {
                this.atletas.push(element);
            }
        });
        this.atletas = this.calcularGanadoresPorCategoria(this.atletas);
        console.log("this.atletas", this.atletas);
        this.buscarByCategoria = true;
    }
    caluclarTiempoPorAtleta(atleta) {
        const oleadaTiempo = this.oleadas.find(item => {
            if (item.id_categoria == atleta.id_categoria && item.id_competencia == atleta.id_competencia)
                return item;
        });
        if (oleadaTiempo) {
            const fecha1 = moment__WEBPACK_IMPORTED_MODULE_0___default()(oleadaTiempo.fechaInicio, "YYYY-MM-DD HH:mm:ss");
            const fecha2 = moment__WEBPACK_IMPORTED_MODULE_0___default()(atleta.tiempo_competencia, "YYYY-MM-DD HH:mm:ss");
            const diffSeconds = fecha2.diff(fecha1, 'seconds');
            const hours = Math.floor(diffSeconds / (60 * 60));
            const divisor_for_minutes = diffSeconds % (60 * 60);
            const minutes = Math.floor(divisor_for_minutes / 60);
            const divisor_for_seconds = divisor_for_minutes % 60;
            const seconds = Math.ceil(divisor_for_seconds);
            return hours + ":" + minutes + ":" + seconds;
        }
    }
    findOleadaByCompetencia() {
        this.competenciaService.getOleadaByCompetencia(this.competencia.id)
            .subscribe({
            next: (data) => {
                this.oleadas = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    verFechaInicio(element) {
        const oleadaFecha = this.oleadas.find(item => {
            if (item.id_categoria == element.id_categoria && item.id_competencia == element.id_competencia && item.no_oleada == element.no_oleada)
                return item;
        });
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(oleadaFecha?.fechaInicio, "HH:mm:ss");
    }
}
GanadoresDialogComponent.ɵfac = function GanadoresDialogComponent_Factory(t) { return new (t || GanadoresDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_competencia_service__WEBPACK_IMPORTED_MODULE_1__.CompetenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_2__.CategoriaService)); };
GanadoresDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GanadoresDialogComponent, selectors: [["app-ganadores-dialog"]], decls: 36, vars: 5, consts: [["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], [1, "md:w-1/4", "lg:w-1/4", "xl:w-1/4", "sm:w-full", "xs:w-full", "relative", "z-0", "mb-2", "px-2", "group", "xl:inline-flex", "lg:inline-flex", "md:inline-flex"], [1, "w-100"], ["class", "w-100 overflow-hidden", "placeholder", "Seleccionar una categor\u00EDa", "style", "width: 100%", 4, "ngIf"], ["fxLayoutJustify", "space-end", "fxLayoutAlign", "space-between end", 1, "m-3"], [1, "mb-0", "h5"], ["class", "m-3", 4, "ngIf", "ngIfElse"], ["class", "m-3"], ["elseBlock", ""], ["placeholder", "Seleccionar una categor\u00EDa", 1, "w-100", "overflow-hidden", 2, "width", "100%"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "m-3"], [4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "posicion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "no_atleta"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "no_oleada"], ["matColumnDef", "nombre"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "documento"], ["matColumnDef", "email"], ["matColumnDef", "categoria"], ["matColumnDef", "fechaInicio"], ["matColumnDef", "tiempo_competencia"], ["matColumnDef", "tiempo"], ["matColumnDef", "estado"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "routerLink"], ["matTooltip", "Detalle", 1, "fa", "fa-eye", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "Iniciar", 1, "fa", "fa-play", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["mat-header-row", ""], ["mat-row", ""], [1, "ml-5"]], template: function GanadoresDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n       ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n       ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n       ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GanadoresDialogComponent_mat_select_16_Template, 7, 1, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "  \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Atletas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n\n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, GanadoresDialogComponent_ng_container_31_Template, 4, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, GanadoresDialogComponent_ng_template_33_Template, 4, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n ");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.atletas && ctx.atletas.length >= 0)("ngIfElse", _r2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["[_nghost-%COMP%]     .soloRead .mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex {\n  background-color: rgba(211, 211, 211, 0.5) !important;\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  min-height: 30px;\n  border-radius: 5px;\n  padding: 12px 12px !important;\n  border-width: 1px;\n  height: 38px;\n  width: -webkit-fill-available !important;\n  width: -moz-available !important;\n  width: fill !important;\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(203 213 225/var(--tw-border-opacity)) !important;\n  --tw-bg-opacity: 1 !important;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color) !important;\n  box-shadow: 0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0), var(--tw-shadow) !important;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow) !important;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #B3F7B2;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #A1E7A0;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #8DD58C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbmFkb3Jlcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUFBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrRUFBQTtFQUNBLDZCQUFBO0VBRUEscURBQUE7RUFDQSxrRUFBQTtFQUNBLG1GQUFBO0VBQUEsd0lBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESiIsImZpbGUiOiJnYW5hZG9yZXMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5zb2xvUmVhZCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4ICB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxMSAyMTEgMjExIC8gMC41KSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogZmlsbCAhaW1wb3J0YW50O1xyXG4gICAgLS10dy1ib3JkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpICFpbXBvcnRhbnQ7XHJcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAycHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcm93Om50aC1jaGlsZCgzKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNGN0IyO1xyXG59XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ExRTdBMDtcclxufVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKDEpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4REQ1OEM7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 38513:
/*!**************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/iniciarCompetencia/iniciarcompetencia.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniciarcompetenciaComponent": () => (/* binding */ IniciarcompetenciaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ganadores-dialog/ganadores-dialog.component */ 7008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _services_competencia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/competencia.service */ 38109);
/* harmony import */ var _Atleta_services_atleta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Atleta/services/atleta.service */ 25067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);






















function IniciarcompetenciaComponent_ng_container_29_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r16.nombre);
  }
}

function IniciarcompetenciaComponent_ng_container_29_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r17.descripcion);
  }
}

function IniciarcompetenciaComponent_ng_container_29_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No. Oleadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r18.no_oleada);
  }
}

function IniciarcompetenciaComponent_ng_container_29_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IniciarcompetenciaComponent_ng_container_29_td_43_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const element_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.asignarOleada(element_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 42);
  }
}

function IniciarcompetenciaComponent_ng_container_29_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
  }
}

const _c0 = function () {
  return [15, 30, 45, 60];
};

function IniciarcompetenciaComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "         \n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, IniciarcompetenciaComponent_ng_container_29_th_20_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, IniciarcompetenciaComponent_ng_container_29_td_22_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, IniciarcompetenciaComponent_ng_container_29_th_27_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, IniciarcompetenciaComponent_ng_container_29_td_29_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, IniciarcompetenciaComponent_ng_container_29_th_34_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, IniciarcompetenciaComponent_ng_container_29_td_36_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](39, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, IniciarcompetenciaComponent_ng_container_29_th_41_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, IniciarcompetenciaComponent_ng_container_29_td_43_Template, 8, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "     \n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, IniciarcompetenciaComponent_ng_container_29_tr_46_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, IniciarcompetenciaComponent_ng_container_29_tr_48_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "  \n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "   \n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "mat-paginator", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.categorias);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedCategoryColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedCategoryColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
  }
}

function IniciarcompetenciaComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n            ");
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Atleta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r36.no_atleta);
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r37.nombre_atleta);
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r29.changeCategoria(element_r38.id_categoria));
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No. Oleadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r39.no_oleada);
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IniciarcompetenciaComponent_ng_container_53_td_50_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const element_r40 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.asignarAtleta(element_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 42);
  }
}

function IniciarcompetenciaComponent_ng_container_53_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
  }
}

function IniciarcompetenciaComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "         \n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, IniciarcompetenciaComponent_ng_container_53_th_20_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, IniciarcompetenciaComponent_ng_container_53_td_22_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, IniciarcompetenciaComponent_ng_container_53_th_27_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, IniciarcompetenciaComponent_ng_container_53_td_29_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, IniciarcompetenciaComponent_ng_container_53_th_34_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, IniciarcompetenciaComponent_ng_container_53_td_36_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](39, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, IniciarcompetenciaComponent_ng_container_53_th_41_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, IniciarcompetenciaComponent_ng_container_53_td_43_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](46, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, IniciarcompetenciaComponent_ng_container_53_th_48_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, IniciarcompetenciaComponent_ng_container_53_td_50_Template, 8, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "     \n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, IniciarcompetenciaComponent_ng_container_53_tr_53_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, IniciarcompetenciaComponent_ng_container_53_tr_55_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "  \n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "   \n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "mat-paginator", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r3.atletasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedAtletaColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedAtletaColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
  }
}

function IniciarcompetenciaComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n            ");
  }
}

class IniciarcompetenciaComponent {
  constructor(translate, categoriaService, competenciaService, atletaService, router, route, dialog) {
    this.translate = translate;
    this.categoriaService = categoriaService;
    this.competenciaService = competenciaService;
    this.atletaService = atletaService;
    this.router = router;
    this.route = route;
    this.dialog = dialog;
    this.arrayFaltanteCateg = [[]];
    this.competenciaIniciada = false;
    this.competenciaFinalizada = false;
    this.categorias = [];
    this.atletasList = [];
    this.showType = 'list';
    this.displayedAtletaColumns = ['nombre', 'no_atleta', 'categoria', 'oleada', 'action'];
    this.displayedCategoryColumns = ['nombre', 'descripcion', 'oleadas', 'action'];
  }

  ngOnInit() {
    this.idCompetencia = this.route.snapshot.params['idCompetencia'];
    console.log("idCompetencia", this.idCompetencia);
    this.initForm();
  }

  initForm() {
    var _this = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.findCompetenciaById();
      yield _this.getCategoriaByCompetencia();
      yield _this.findAtletaByCompetencia();
    })();
  }

  findCompetenciaById() {
    this.competenciaService.getCompetenciaById(this.idCompetencia).subscribe({
      next: data => {
        console.log("data", data);
        this.competencia = data[0];

        if (this.competencia.estado == "FINALIZADA") {
          this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.competencia.hora_inicio, 'HH:mm:ss', 'en-US');
          this.HoraFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.competencia.hora_final, 'HH:mm:ss', 'en-US');
          this.competenciaIniciada = true;
          this.competenciaFinalizada = true;
        } else {
          if (this.competencia.hora_inicio != null) {
            this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.competencia.hora_inicio, 'HH:mm:ss', 'en-US');
            this.competenciaIniciada = true;
          }
        }

        console.log("data", this.competencia);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  getCategoriaByCompetencia() {
    this.categoriaService.getCategoriaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        this.categorias = data;
        console.log("categorias", this.categorias);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  findAtletaByCompetencia() {
    this.atletaService.getAtletaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        this.atletasList = data;
        console.log("data", this.atletasList);
        this.validarAtletasPorOleada();
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  validarAtletasPorOleada() {
    this.categorias?.forEach(elementCate => {
      let contAtletas = 0;
      this.atletasList.forEach(elementAtl => {
        if (elementCate.id == elementAtl.id_categoria) contAtletas = contAtletas + 1;
      });
      let oleadas = contAtletas / elementCate.no_oleada;
      if (!Number.isInteger(contAtletas / elementCate.no_oleada)) oleadas = Math.trunc(contAtletas / elementCate.no_oleada) + 1;
      let arrayConst = [];

      for (let i = 1; i <= oleadas; i++) {
        arrayConst[i] = elementCate?.no_oleada;
      }

      this.arrayFaltanteCateg[elementCate.nombre] = arrayConst;
    });
    this.atletasList.forEach(element => {
      if (element.no_oleada != null) {
        const categoria = this.categorias.find(item => item.id === element.id_categoria);
        if (categoria) this.arrayFaltanteCateg[categoria.nombre][element.no_oleada] = this.arrayFaltanteCateg[categoria.nombre][element.no_oleada] - 1;
      }
    });
    console.log("arrayFaltanteCateg", this.arrayFaltanteCateg);
  }

  changeCategoria(idCategoria) {
    let nombreCategoria = '';
    const categoriaFind = this.categorias.find(item => item.id === idCategoria);
    if (categoriaFind) nombreCategoria = categoriaFind.nombre;
    return nombreCategoria;
  }

  iniciarCompetencia() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Iniciar Competencia',
      text: `Está seguro que desea iniciar la competencia?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.competenciaIniciada = true;
        const fechaActual = new Date();
        this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'HH:mm:ss', 'en-US');
        this.competencia.hora_inicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = this.competencia.hora_inicio;
        this.updateCompetencia(this.competencia);
      }
    });
  }

  finalizarCompetencia() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Finalizar Competencia',
      text: `Está seguro que desea finalziar la competencia?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.competenciaFinalizada = true;
        const fechaActual = new Date();
        this.HoraFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'HH:mm:ss', 'en-US');
        this.competencia.hora_inicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(this.competencia.hora_inicio), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.estado = 'FINALIZADA';
        this.updateCompetencia(this.competencia);
      }
    });
  }

  darLlegada() {
    var _this2 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let noAtleta = '';
      const {
        value: no_atleta,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Dar llegada',
        text: `Dar llegada de atleta`,
        input: 'text',
        inputLabel: 'Ingresa el número del atleta',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número del atleta';
          }
        }
      });

      if (isConfirmed) {
        if (no_atleta) {
          const ateletaFinalizado = _this2.atletasList.find(item => item.no_atleta === no_atleta);

          if (ateletaFinalizado) {
            console.log("ateletaFinalizado", ateletaFinalizado);

            if (ateletaFinalizado.estado == 'EN_COMPETENCIA') {
              alertify.set('notifier', 'position', 'top-right');
              alertify.success('El atleta ' + ateletaFinalizado.no_atleta + " ha finalizado.", 5);
              ateletaFinalizado.estado = 'FINALIZADO';
              ateletaFinalizado.tiempo_competencia = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(new Date()), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');

              _this2.asignarTiempoAtleta(ateletaFinalizado);
            } else {
              alertify.set('notifier', 'position', 'top-right');
              alertify.warning('El atleta ya había finalizado.', 3);
            }
          } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.warning('Número de atleta no encontrado!', 3);
          }
        }
      }
    })();
  }

  updateAtleta(atleta, swMensaje) {
    console.log("update Atleta");
    console.log("atleta.", atleta);
    this.atletaService.updateAtleta(atleta).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          if (!swMensaje) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Atleta guardado con exito!', 2);
          }
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

  asignarTiempoAtleta(atleta) {
    console.log("asignarTiempoAtleta");
    console.log("atleta.", atleta);
    this.atletaService.asignarTiempoAtleta(atleta).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Atleta guardado con exito!', 2);
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

  updateCompetencia(competencia) {
    console.log("update competencia");
    console.log("competencia.", competencia);
    this.competenciaService.updateCompetencia(competencia).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Competencia actualizada con exito!', 2);
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

  verGanadores() {
    this.dialog.open(_ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_2__.GanadoresDialogComponent, {
      data: {
        competencia: this.competencia,
        atletas: this.atletasList
      },
      width: '95%',
      height: '80%'
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log("result", result);
      }
    });
  }

  asignarOleada(categoria) {
    var _this3 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("categoria", categoria);
      let noAtleta = '';
      const {
        value: no_oleada,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Oleada',
        text: `Ingresa el número de ateltas por oleadas en la categoría ` + categoria.nombre,
        input: 'text',
        inputLabel: 'Número de oleada',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número de atletas por oleada.';
          }
        }
      });

      if (isConfirmed) {
        if (no_oleada) {
          categoria.no_oleada = Number(no_oleada);

          _this3.categoriaService.updateCategoria(categoria).subscribe({
            next: data => {
              console.log("data", data);

              if (data?.response == 'OK') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Categoría actualizada con exito!', 4);
              }
            },
            error: err => {
              alertify.set('notifier', 'position', 'top-right');
              alertify.error(`${err?.errorDescription}`, 4);
            }
          });
        }
      }
    })();
  }

  asignarAtleta(atleta) {
    var _this4 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("atleta", atleta);
      let noAtleta = '';
      const {
        value: no_oleada,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Asignar atleta',
        text: `Ingresa el número de oleada para ` + atleta.nombre_atleta,
        input: 'text',
        inputLabel: 'Número de oleada',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número de la oleada.';
          }
        }
      });

      if (isConfirmed) {
        if (no_oleada) {
          const categoriafind = _this4.categorias.find(item => item.id === atleta.id_categoria);

          console.log("categoriafind", categoriafind);

          if (categoriafind) {
            if (Number(no_oleada) > 0 && Number(no_oleada) <= categoriafind?.no_oleada) {
              // debugger
              if (_this4.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] > 0) {
                atleta.no_oleada = Number(no_oleada);
                _this4.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] = _this4.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] - 1;

                _this4.atletaService.updateAtleta(atleta).subscribe({
                  next: data => {
                    console.log("data", data);

                    if (data?.response == 'OK') {
                      alertify.set('notifier', 'position', 'top-right');
                      alertify.success('Competencia creada con exito!', 2);
                    }
                  },
                  error: err => {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error(`${err?.errorDescription}`, 4);
                  }
                });
              } else {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('La oleada ' + no_oleada + ' para la categoría ' + categoriafind.nombre + ' ya está completa!');
              }
            } else {
              alertify.set('notifier', 'position', 'top-right');
              alertify.warning('La oleada seleccionada no existe en categoría', 2);
            }
          } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.warning('No existe categoría!', 2);
          }
        }
      }
    })();
  }

  calcularAleatorio() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Calcular oleadas aleatoriamente',
      text: `Está seguro que desea calcular oleadas aleatoriamente?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        let swLimiteOleada = false;
        let swFinOleadas = false;
        this.atletasList.forEach(atleta => {
          if (atleta.no_oleada == null) {
            const category = this.categorias.find(item => item.id === atleta.id_categoria && item.no_oleada != null);
            console.log("category", category);

            if (category) {
              // if(category.no_oleada != null){
              let sw = true;

              while (sw) {
                const aleat = Number(Math.floor(Math.random() * (this.arrayFaltanteCateg[category.nombre]?.length - 1)) + 1);
                console.log("this.arrayFaltanteCateg[category.nombre][aleat]", this.arrayFaltanteCateg[category.nombre][aleat]);

                if (this.arrayFaltanteCateg[category.nombre][aleat] > 0) {
                  atleta.no_oleada = aleat;
                  this.arrayFaltanteCateg[category.nombre][aleat] = this.arrayFaltanteCateg[category.nombre][aleat] - 1;
                  this.updateAtleta(atleta, true);
                  sw = false;

                  if (!swFinOleadas) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.success('Oleadas asignadas aleatoriamente con exito!', 2);
                    swFinOleadas = true;
                  }
                }
              }
            } else {
              if (!swLimiteOleada) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('Debe seleccionar el límite de oleadas por categorías!', 2);
                swLimiteOleada = true;
              }
            }
          }
        });
      }
    });
  }

}

IniciarcompetenciaComponent.ɵfac = function IniciarcompetenciaComponent_Factory(t) {
  return new (t || IniciarcompetenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_3__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_competencia_service__WEBPACK_IMPORTED_MODULE_4__.CompetenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Atleta_services_atleta_service__WEBPACK_IMPORTED_MODULE_5__.AtletaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

IniciarcompetenciaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: IniciarcompetenciaComponent,
  selectors: [["app-iniciarcompetencia"]],
  viewQuery: function IniciarcompetenciaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 60,
  vars: 7,
  consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], ["fxLayoutJustify", "space-end", "fxLayoutAlign", "space-start end", 1, "m-3"], [1, "mb-0", "h5"], ["type", "button", 1, "btnCircle", 3, "routerLink"], [1, "fa-solid", "fa-plus", "fs-4"], ["class", "m-3", 4, "ngIf", "ngIfElse"], ["class", "m-3"], ["elseBlock", ""], [1, "mt-5"], ["fxLayoutJustify", "space-end", "fxLayoutAlign", "space-between end", 1, "m-3"], ["mat-flat-button", "", 1, "button-lg", "mb-3", 2, "background", "#9AD135", 3, "click"], [1, "m-3"], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "nombre"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "oleadas"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "click"], ["matTooltip", "Asignar # oleada", 1, "fa", "fa-edit", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["mat-header-row", ""], ["mat-row", ""], [1, "ml-5"], ["matColumnDef", "no_atleta"], ["matColumnDef", "categoria"], ["matColumnDef", "oleada"], ["matTooltip", "Asignar oleada", 1, "fa", "fa-edit", "fa-md", "action-table", "text-[#009CD7]", "pr-3"]],
  template: function IniciarcompetenciaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\n\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Categor\u00EDas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n                 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                \n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, IniciarcompetenciaComponent_ng_container_29_Template, 62, 5, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, IniciarcompetenciaComponent_ng_template_31_Template, 4, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "\n\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Atletas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IniciarcompetenciaComponent_Template_button_click_47_listener() {
        return ctx.calcularAleatorio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\n                        Calcular Aleatorio\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "\n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, IniciarcompetenciaComponent_ng_container_53_Template, 69, 5, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, IniciarcompetenciaComponent_ng_template_55_Template, 4, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.fecha);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/categoria/create/", ctx.idCompetencia, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.categorias && ctx.categorias.length >= 0)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.atletasList && ctx.atletasList.length >= 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader],
  styles: [".btnCircle[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 2em;\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: #9AD135;\r\n    border: none;\r\n    color: white;\r\n    border-radius: 50%;\r\n\r\n    :hover{\r\n        cursor: pointer;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpYXJjb21wZXRlbmNpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQjtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJpbmljaWFyY29tcGV0ZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5DaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QUQxMzU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"]
});

/***/ }),

/***/ 79612:
/*!**************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/iniciarcompetencia/iniciarcompetencia.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniciarcompetenciaComponent": () => (/* binding */ IniciarcompetenciaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ganadores-dialog/ganadores-dialog.component */ 7008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _services_competencia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/competencia.service */ 38109);
/* harmony import */ var _Atleta_services_atleta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Atleta/services/atleta.service */ 25067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);






















function IniciarcompetenciaComponent_ng_container_29_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r16.nombre);
  }
}

function IniciarcompetenciaComponent_ng_container_29_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r17.descripcion);
  }
}

function IniciarcompetenciaComponent_ng_container_29_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No. Oleadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r18.no_oleada);
  }
}

function IniciarcompetenciaComponent_ng_container_29_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_td_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IniciarcompetenciaComponent_ng_container_29_td_43_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const element_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.asignarOleada(element_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_29_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 42);
  }
}

function IniciarcompetenciaComponent_ng_container_29_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
  }
}

const _c0 = function () {
  return [15, 30, 45, 60];
};

function IniciarcompetenciaComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "         \n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, IniciarcompetenciaComponent_ng_container_29_th_20_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, IniciarcompetenciaComponent_ng_container_29_td_22_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, IniciarcompetenciaComponent_ng_container_29_th_27_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, IniciarcompetenciaComponent_ng_container_29_td_29_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, IniciarcompetenciaComponent_ng_container_29_th_34_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, IniciarcompetenciaComponent_ng_container_29_td_36_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](39, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, IniciarcompetenciaComponent_ng_container_29_th_41_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, IniciarcompetenciaComponent_ng_container_29_td_43_Template, 8, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "     \n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, IniciarcompetenciaComponent_ng_container_29_tr_46_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, IniciarcompetenciaComponent_ng_container_29_tr_48_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "  \n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "   \n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "mat-paginator", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.categorias);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedCategoryColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedCategoryColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
  }
}

function IniciarcompetenciaComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n            ");
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Atleta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r36.no_atleta);
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r37.nombre_atleta);
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r29.changeCategoria(element_r38.id_categoria));
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No. Oleadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r39.no_oleada);
  }
}

function IniciarcompetenciaComponent_ng_container_53_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IniciarcompetenciaComponent_ng_container_53_td_50_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const element_r40 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.asignarAtleta(element_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function IniciarcompetenciaComponent_ng_container_53_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 42);
  }
}

function IniciarcompetenciaComponent_ng_container_53_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
  }
}

function IniciarcompetenciaComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "         \n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, IniciarcompetenciaComponent_ng_container_53_th_20_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, IniciarcompetenciaComponent_ng_container_53_td_22_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, IniciarcompetenciaComponent_ng_container_53_th_27_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, IniciarcompetenciaComponent_ng_container_53_td_29_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "\n\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, IniciarcompetenciaComponent_ng_container_53_th_34_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, IniciarcompetenciaComponent_ng_container_53_td_36_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](39, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, IniciarcompetenciaComponent_ng_container_53_th_41_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n                                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, IniciarcompetenciaComponent_ng_container_53_td_43_Template, 3, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\n\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](46, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, IniciarcompetenciaComponent_ng_container_53_th_48_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, IniciarcompetenciaComponent_ng_container_53_td_50_Template, 8, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "     \n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, IniciarcompetenciaComponent_ng_container_53_tr_53_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, IniciarcompetenciaComponent_ng_container_53_tr_55_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "  \n                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "   \n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "mat-paginator", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " \n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r3.atletasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedAtletaColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedAtletaColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
  }
}

function IniciarcompetenciaComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n            ");
  }
}

class IniciarcompetenciaComponent {
  constructor(translate, categoriaService, competenciaService, atletaService, router, route, dialog) {
    this.translate = translate;
    this.categoriaService = categoriaService;
    this.competenciaService = competenciaService;
    this.atletaService = atletaService;
    this.router = router;
    this.route = route;
    this.dialog = dialog;
    this.arrayFaltanteCateg = [[]];
    this.competenciaIniciada = false;
    this.competenciaFinalizada = false;
    this.categorias = [];
    this.atletasList = [];
    this.showType = 'list';
    this.displayedAtletaColumns = ['nombre', 'no_atleta', 'categoria', 'oleada', 'action'];
    this.displayedCategoryColumns = ['nombre', 'descripcion', 'oleadas', 'action'];
  }

  ngOnInit() {
    this.idCompetencia = this.route.snapshot.params['idCompetencia'];
    console.log("idCompetencia", this.idCompetencia);
    this.initForm();
  }

  initForm() {
    var _this = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.findCompetenciaById();
      yield _this.getCategoriaByCompetencia();
      yield _this.findAtletaByCompetencia();
    })();
  }

  findCompetenciaById() {
    this.competenciaService.getCompetenciaById(this.idCompetencia).subscribe({
      next: data => {
        console.log("data", data);
        this.competencia = data[0];

        if (this.competencia.estado == "FINALIZADA") {
          this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.competencia.hora_inicio, 'HH:mm:ss', 'en-US');
          this.HoraFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.competencia.hora_final, 'HH:mm:ss', 'en-US');
          this.competenciaIniciada = true;
          this.competenciaFinalizada = true;
        } else {
          if (this.competencia.hora_inicio != null) {
            this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.competencia.hora_inicio, 'HH:mm:ss', 'en-US');
            this.competenciaIniciada = true;
          }
        }

        console.log("data", this.competencia);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  getCategoriaByCompetencia() {
    this.categoriaService.getCategoriaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        this.categorias = data;
        console.log("categorias", this.categorias);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  findAtletaByCompetencia() {
    this.atletaService.getAtletaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        this.atletasList = data;
        console.log("data", this.atletasList);
        this.validarAtletasPorOleada();
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  validarAtletasPorOleada() {
    this.categorias?.forEach(elementCate => {
      let contAtletas = 0;
      this.atletasList.forEach(elementAtl => {
        if (elementCate.id == elementAtl.id_categoria) contAtletas = contAtletas + 1;
      });
      let oleadas = contAtletas / elementCate.no_oleada;
      if (!Number.isInteger(contAtletas / elementCate.no_oleada)) oleadas = Math.trunc(contAtletas / elementCate.no_oleada) + 1;
      let arrayConst = [];

      for (let i = 1; i <= oleadas; i++) {
        arrayConst[i] = elementCate?.no_oleada;
      }

      this.arrayFaltanteCateg[elementCate.nombre] = arrayConst;
    });
    this.atletasList.forEach(element => {
      if (element.no_oleada != null) {
        const categoria = this.categorias.find(item => item.id === element.id_categoria);
        if (categoria) this.arrayFaltanteCateg[categoria.nombre][element.no_oleada] = this.arrayFaltanteCateg[categoria.nombre][element.no_oleada] - 1;
      }
    });
    console.log("arrayFaltanteCateg", this.arrayFaltanteCateg);
  }

  changeCategoria(idCategoria) {
    let nombreCategoria = '';
    const categoriaFind = this.categorias.find(item => item.id === idCategoria);
    if (categoriaFind) nombreCategoria = categoriaFind.nombre;
    return nombreCategoria;
  }

  iniciarCompetencia() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Iniciar Competencia',
      text: `Está seguro que desea iniciar la competencia?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.competenciaIniciada = true;
        const fechaActual = new Date();
        this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'HH:mm:ss', 'en-US');
        this.competencia.hora_inicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = this.competencia.hora_inicio;
        this.updateCompetencia(this.competencia);
      }
    });
  }

  finalizarCompetencia() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Finalizar Competencia',
      text: `Está seguro que desea finalziar la competencia?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.competenciaFinalizada = true;
        const fechaActual = new Date();
        this.HoraFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'HH:mm:ss', 'en-US');
        this.competencia.hora_inicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(this.competencia.hora_inicio), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.estado = 'FINALIZADA';
        this.updateCompetencia(this.competencia);
      }
    });
  }

  darLlegada() {
    var _this2 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let noAtleta = '';
      const {
        value: no_atleta,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Dar llegada',
        text: `Dar llegada de atleta`,
        input: 'text',
        inputLabel: 'Ingresa el número del atleta',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número del atleta';
          }
        }
      });

      if (isConfirmed) {
        if (no_atleta) {
          const ateletaFinalizado = _this2.atletasList.find(item => item.no_atleta === no_atleta);

          if (ateletaFinalizado) {
            console.log("ateletaFinalizado", ateletaFinalizado);

            if (ateletaFinalizado.estado == 'EN_COMPETENCIA') {
              alertify.set('notifier', 'position', 'top-right');
              alertify.success('El atleta ' + ateletaFinalizado.no_atleta + " ha finalizado.", 5);
              ateletaFinalizado.estado = 'FINALIZADO';
              ateletaFinalizado.tiempo_competencia = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(new Date()), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');

              _this2.asignarTiempoAtleta(ateletaFinalizado);
            } else {
              alertify.set('notifier', 'position', 'top-right');
              alertify.warning('El atleta ya había finalizado.', 3);
            }
          } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.warning('Número de atleta no encontrado!', 3);
          }
        }
      }
    })();
  }

  updateAtleta(atleta, swMensaje) {
    console.log("update Atleta");
    console.log("atleta.", atleta);
    this.atletaService.updateAtleta(atleta).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          if (!swMensaje) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Atleta guardado con exito!', 2);
          }
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

  asignarTiempoAtleta(atleta) {
    console.log("asignarTiempoAtleta");
    console.log("atleta.", atleta);
    this.atletaService.asignarTiempoAtleta(atleta).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Atleta guardado con exito!', 2);
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

  updateCompetencia(competencia) {
    console.log("update competencia");
    console.log("competencia.", competencia);
    this.competenciaService.updateCompetencia(competencia).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Competencia actualizada con exito!', 2);
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

  verGanadores() {
    this.dialog.open(_ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_2__.GanadoresDialogComponent, {
      data: {
        competencia: this.competencia,
        atletas: this.atletasList
      },
      width: '95%',
      height: '80%'
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log("result", result);
      }
    });
  }

  asignarOleada(categoria) {
    var _this3 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("categoria", categoria);
      let noAtleta = '';
      const {
        value: no_oleada,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Oleada',
        text: `Ingresa el número de ateltas por oleadas en la categoría ` + categoria.nombre,
        input: 'text',
        inputLabel: 'Número de oleada',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número de atletas por oleada.';
          }
        }
      });

      if (isConfirmed) {
        if (no_oleada) {
          categoria.no_oleada = Number(no_oleada);

          _this3.categoriaService.updateCategoria(categoria).subscribe({
            next: data => {
              console.log("data", data);

              if (data?.response == 'OK') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Categoría actualizada con exito!', 4);
              }
            },
            error: err => {
              alertify.set('notifier', 'position', 'top-right');
              alertify.error(`${err?.errorDescription}`, 4);
            }
          });
        }
      }
    })();
  }

  asignarAtleta(atleta) {
    var _this4 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("atleta", atleta);
      let noAtleta = '';
      const {
        value: no_oleada,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Asignar atleta',
        text: `Ingresa el número de oleada para ` + atleta.nombre_atleta,
        input: 'text',
        inputLabel: 'Número de oleada',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número de la oleada.';
          }
        }
      });

      if (isConfirmed) {
        if (no_oleada) {
          const categoriafind = _this4.categorias.find(item => item.id === atleta.id_categoria);

          console.log("categoriafind", categoriafind);

          if (categoriafind) {
            if (Number(no_oleada) > 0 && Number(no_oleada) <= categoriafind?.no_oleada) {
              // debugger
              if (_this4.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] > 0) {
                atleta.no_oleada = Number(no_oleada);
                _this4.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] = _this4.arrayFaltanteCateg[categoriafind.nombre][Number(no_oleada)] - 1;

                _this4.atletaService.updateAtleta(atleta).subscribe({
                  next: data => {
                    console.log("data", data);

                    if (data?.response == 'OK') {
                      alertify.set('notifier', 'position', 'top-right');
                      alertify.success('Competencia creada con exito!', 2);
                    }
                  },
                  error: err => {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error(`${err?.errorDescription}`, 4);
                  }
                });
              } else {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('La oleada ' + no_oleada + ' para la categoría ' + categoriafind.nombre + ' ya está completa!');
              }
            } else {
              alertify.set('notifier', 'position', 'top-right');
              alertify.warning('La oleada seleccionada no existe en categoría', 2);
            }
          } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.warning('No existe categoría!', 2);
          }
        }
      }
    })();
  }

  calcularAleatorio() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Calcular oleadas aleatoriamente',
      text: `Está seguro que desea calcular oleadas aleatoriamente?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        let swLimiteOleada = false;
        let swFinOleadas = false;
        this.atletasList.forEach(atleta => {
          if (atleta.no_oleada == null) {
            const category = this.categorias.find(item => item.id === atleta.id_categoria && item.no_oleada != null);
            console.log("category", category);

            if (category) {
              // if(category.no_oleada != null){
              let sw = true;

              while (sw) {
                const aleat = Number(Math.floor(Math.random() * (this.arrayFaltanteCateg[category.nombre]?.length - 1)) + 1);
                console.log("this.arrayFaltanteCateg[category.nombre][aleat]", this.arrayFaltanteCateg[category.nombre][aleat]);

                if (this.arrayFaltanteCateg[category.nombre][aleat] > 0) {
                  atleta.no_oleada = aleat;
                  this.arrayFaltanteCateg[category.nombre][aleat] = this.arrayFaltanteCateg[category.nombre][aleat] - 1;
                  this.updateAtleta(atleta, true);
                  sw = false;

                  if (!swFinOleadas) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.success('Oleadas asignadas aleatoriamente con exito!', 2);
                    swFinOleadas = true;
                  }
                }
              }
            } else {
              if (!swLimiteOleada) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('Debe seleccionar el límite de oleadas por categorías!', 2);
                swLimiteOleada = true;
              }
            }
          }
        });
      }
    });
  }

}

IniciarcompetenciaComponent.ɵfac = function IniciarcompetenciaComponent_Factory(t) {
  return new (t || IniciarcompetenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_3__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_competencia_service__WEBPACK_IMPORTED_MODULE_4__.CompetenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Atleta_services_atleta_service__WEBPACK_IMPORTED_MODULE_5__.AtletaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

IniciarcompetenciaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: IniciarcompetenciaComponent,
  selectors: [["app-iniciarcompetencia"]],
  viewQuery: function IniciarcompetenciaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 60,
  vars: 7,
  consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], ["fxLayoutJustify", "space-end", "fxLayoutAlign", "space-start end", 1, "m-3"], [1, "mb-0", "h5"], ["type", "button", 1, "btnCircle", 3, "routerLink"], [1, "fa-solid", "fa-plus", "fs-4"], ["class", "m-3", 4, "ngIf", "ngIfElse"], ["class", "m-3"], ["elseBlock", ""], [1, "mt-5"], ["fxLayoutJustify", "space-end", "fxLayoutAlign", "space-between end", 1, "m-3"], ["mat-flat-button", "", 1, "button-lg", "mb-3", 2, "background", "#9AD135", 3, "click"], [1, "m-3"], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "nombre"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "oleadas"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "click"], ["matTooltip", "Asignar # oleada", 1, "fa", "fa-edit", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["mat-header-row", ""], ["mat-row", ""], [1, "ml-5"], ["matColumnDef", "no_atleta"], ["matColumnDef", "categoria"], ["matColumnDef", "oleada"], ["matTooltip", "Asignar oleada", 1, "fa", "fa-edit", "fa-md", "action-table", "text-[#009CD7]", "pr-3"]],
  template: function IniciarcompetenciaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\n\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Categor\u00EDas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n                 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n                \n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, IniciarcompetenciaComponent_ng_container_29_Template, 62, 5, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, IniciarcompetenciaComponent_ng_template_31_Template, 4, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "\n\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Atletas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IniciarcompetenciaComponent_Template_button_click_47_listener() {
        return ctx.calcularAleatorio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "\n                        Calcular Aleatorio\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n                    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\n                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "\n\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, IniciarcompetenciaComponent_ng_container_53_Template, 69, 5, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, IniciarcompetenciaComponent_ng_template_55_Template, 4, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.fecha);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/categoria/create/", ctx.idCompetencia, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.categorias && ctx.categorias.length >= 0)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.atletasList && ctx.atletasList.length >= 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader],
  styles: [".btnCircle[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 2em;\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: #9AD135;\r\n    border: none;\r\n    color: white;\r\n    border-radius: 50%;\r\n\r\n    :hover{\r\n        cursor: pointer;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpYXJjb21wZXRlbmNpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQjtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJpbmljaWFyY29tcGV0ZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5DaXJjbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QUQxMzU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"]
});

/***/ }),

/***/ 5796:
/*!***********************************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/listcompetencia/components/listcompetencia/listcompetencia.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCompetenciaComponent": () => (/* binding */ ListCompetenciaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);













function ListCompetenciaComponent_ng_container_13_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r21.id);
} }
function ListCompetenciaComponent_ng_container_13_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r22.nombre);
} }
function ListCompetenciaComponent_ng_container_13_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r23.direccion);
} }
function ListCompetenciaComponent_ng_container_13_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r24.fecha));
} }
function ListCompetenciaComponent_ng_container_13_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r25.estado);
} }
function ListCompetenciaComponent_ng_container_13_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Oficial Liga");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_57_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 38);
} }
function ListCompetenciaComponent_ng_container_13_td_57_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function ListCompetenciaComponent_ng_container_13_td_57_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function ListCompetenciaComponent_ng_container_13_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaComponent_ng_container_13_td_57_i_2_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaComponent_ng_container_13_td_57_i_4_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaComponent_ng_container_13_td_57_i_6_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r26.oficialLiga == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r26.oficialLiga == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r26.oficialLiga == null);
} }
function ListCompetenciaComponent_ng_container_13_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Aprobado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_64_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 43);
} }
function ListCompetenciaComponent_ng_container_13_td_64_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 44);
} }
function ListCompetenciaComponent_ng_container_13_td_64_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function ListCompetenciaComponent_ng_container_13_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaComponent_ng_container_13_td_64_i_2_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaComponent_ng_container_13_td_64_i_4_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaComponent_ng_container_13_td_64_i_6_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r30.aprobado == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r30.aprobado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r30.aprobado == null);
} }
function ListCompetenciaComponent_ng_container_13_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaComponent_ng_container_13_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", element_r34.aprobado == null || element_r34.aprobado == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/competencia/iniciar/", element_r34.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", element_r34.aprobado == null || element_r34.aprobado == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/competencia/show/", element_r34.id, "");
} }
function ListCompetenciaComponent_ng_container_13_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 50);
} }
function ListCompetenciaComponent_ng_container_13_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 51);
} }
const _c0 = function () { return [15, 30, 45, 60]; };
function ListCompetenciaComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "         \n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListCompetenciaComponent_ng_container_13_th_20_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListCompetenciaComponent_ng_container_13_td_22_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListCompetenciaComponent_ng_container_13_th_27_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListCompetenciaComponent_ng_container_13_td_29_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListCompetenciaComponent_ng_container_13_th_34_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListCompetenciaComponent_ng_container_13_td_36_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n                                 \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ListCompetenciaComponent_ng_container_13_th_41_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ListCompetenciaComponent_ng_container_13_td_43_Template, 3, 3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ListCompetenciaComponent_ng_container_13_th_48_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ListCompetenciaComponent_ng_container_13_td_50_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](53, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ListCompetenciaComponent_ng_container_13_th_55_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ListCompetenciaComponent_ng_container_13_td_57_Template, 8, 3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ListCompetenciaComponent_ng_container_13_th_62_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ListCompetenciaComponent_ng_container_13_td_64_Template, 8, 3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](67, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ListCompetenciaComponent_ng_container_13_th_69_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ListCompetenciaComponent_ng_container_13_td_71_Template, 12, 6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "     \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, ListCompetenciaComponent_ng_container_13_tr_74_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ListCompetenciaComponent_ng_container_13_tr_76_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "  \n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "   \n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "mat-paginator", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.competenciasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
function ListCompetenciaComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
} }
class ListCompetenciaComponent {
    constructor(translate, categoriaService, router) {
        this.translate = translate;
        this.categoriaService = categoriaService;
        this.router = router;
        this.competenciasList = [];
        this.competenciasGrid = [];
        this.showType = 'list';
        this.displayedProductColumns = ['id', 'nombre', 'fecha', 'estado', 'oficialLiga', 'aprobado', 'action'];
    }
    ngOnInit() {
        this.findCompetenciasInicio();
    }
    findCompetenciasInicio() {
        this.categoriaService.getCompetenciasInicio()
            .subscribe({
            next: (data) => {
                console.log("data", data);
                this.competenciasList = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
}
ListCompetenciaComponent.ɵfac = function ListCompetenciaComponent_Factory(t) { return new (t || ListCompetenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ListCompetenciaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListCompetenciaComponent, selectors: [["app-listcompetencia"]], viewQuery: function ListCompetenciaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 2, consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "id"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["matColumnDef", "fecha"], ["class", "text-nowrap px3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estado"], ["matColumnDef", "oficialLiga"], ["matColumnDef", "aprobado"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-cell", "", 1, "text-nowrap", "px3"], ["class", "fa-solid fa-check-double fa-md action-table pr-3", "style", "color: blue;", "matTooltip", "Es oficial", 4, "ngIf"], ["class", "fa-regular fa-rectangle-xmark fa-md action-table pr-3", "style", "color: red;", "matTooltip", "No es Oficial", 4, "ngIf"], ["class", "fa-regular fa-hourglass-half fa-md action-table text-[#009CD7] pr-3", "matTooltip", "En espera", 4, "ngIf"], ["matTooltip", "Es oficial", 1, "fa-solid", "fa-check-double", "fa-md", "action-table", "pr-3", 2, "color", "blue"], ["matTooltip", "No es Oficial", 1, "fa-regular", "fa-rectangle-xmark", "fa-md", "action-table", "pr-3", 2, "color", "red"], ["matTooltip", "En espera", 1, "fa-regular", "fa-hourglass-half", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["class", "fa-regular fa-face-smile fa-md action-table pr-3", "style", "color: blue;", "matTooltip", "Aprobada", 4, "ngIf"], ["class", "fa-regular fa-face-frown fa-md action-table pr-3", "style", "color: red;", "matTooltip", "No aprobada", 4, "ngIf"], ["matTooltip", "Aprobada", 1, "fa-regular", "fa-face-smile", "fa-md", "action-table", "pr-3", 2, "color", "blue"], ["matTooltip", "No aprobada", 1, "fa-regular", "fa-face-frown", "fa-md", "action-table", "pr-3", 2, "color", "red"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "routerLink"], ["matTooltip", "Detalle", 1, "fa", "fa-eye", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "Iniciar", 1, "fa", "fa-play", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["mat-header-row", ""], ["mat-row", ""], [1, "ml-5"]], template: function ListCompetenciaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Competencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListCompetenciaComponent_ng_container_13_Template, 90, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListCompetenciaComponent_ng_template_15_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.competenciasList && ctx.competenciasList.length >= 0)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["a.disabled[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    color: #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rjb21wZXRlbmNpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZiIsImZpbGUiOiJsaXN0Y29tcGV0ZW5jaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb2xvcjogI2NjYztcclxufSJdfQ== */"] });


/***/ }),

/***/ 43807:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/listcompetencia/components/listcompetenciaaprobar/listcompetenciaaprobar.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCompetenciaAprobarComponent": () => (/* binding */ ListCompetenciaAprobarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);













function ListCompetenciaAprobarComponent_ng_container_13_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r20.id);
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r21.nombre);
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r22.direccion);
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r23.fecha));
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r24.estado);
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Oficial Liga");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_57_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_57_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_57_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 41);
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaAprobarComponent_ng_container_13_td_57_i_2_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaAprobarComponent_ng_container_13_td_57_i_4_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaAprobarComponent_ng_container_13_td_57_i_6_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r25.oficialLiga);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r25.oficialLiga == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r25.oficialLiga == null);
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Aprobado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_64_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 44);
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_64_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_64_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 41);
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaAprobarComponent_ng_container_13_td_64_i_2_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaAprobarComponent_ng_container_13_td_64_i_4_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaAprobarComponent_ng_container_13_td_64_i_6_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r29.aprobado == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r29.aprobado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r29.aprobado == null);
} }
function ListCompetenciaAprobarComponent_ng_container_13_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_td_71_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListCompetenciaAprobarComponent_ng_container_13_td_71_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const element_r33 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.cambiarAprobado(true, element_r33.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListCompetenciaAprobarComponent_ng_container_13_td_71_Template_a_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const element_r33 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.cambiarAprobado(false, element_r33.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarComponent_ng_container_13_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 51);
} }
function ListCompetenciaAprobarComponent_ng_container_13_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 52);
} }
const _c0 = function () { return [15, 30, 45, 60]; };
function ListCompetenciaAprobarComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "         \n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListCompetenciaAprobarComponent_ng_container_13_th_20_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListCompetenciaAprobarComponent_ng_container_13_td_22_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListCompetenciaAprobarComponent_ng_container_13_th_27_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListCompetenciaAprobarComponent_ng_container_13_td_29_Template, 3, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListCompetenciaAprobarComponent_ng_container_13_th_34_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListCompetenciaAprobarComponent_ng_container_13_td_36_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n                                 \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ListCompetenciaAprobarComponent_ng_container_13_th_41_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ListCompetenciaAprobarComponent_ng_container_13_td_43_Template, 3, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ListCompetenciaAprobarComponent_ng_container_13_th_48_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ListCompetenciaAprobarComponent_ng_container_13_td_50_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](53, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ListCompetenciaAprobarComponent_ng_container_13_th_55_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ListCompetenciaAprobarComponent_ng_container_13_td_57_Template, 8, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ListCompetenciaAprobarComponent_ng_container_13_th_62_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ListCompetenciaAprobarComponent_ng_container_13_td_64_Template, 8, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](67, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ListCompetenciaAprobarComponent_ng_container_13_th_69_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ListCompetenciaAprobarComponent_ng_container_13_td_71_Template, 12, 0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "     \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, ListCompetenciaAprobarComponent_ng_container_13_tr_74_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ListCompetenciaAprobarComponent_ng_container_13_tr_76_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "  \n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "   \n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.competenciasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
class ListCompetenciaAprobarComponent {
    constructor(translate, categoriaService, router) {
        this.translate = translate;
        this.categoriaService = categoriaService;
        this.router = router;
        this.competenciasList = [];
        this.competenciasGrid = [];
        this.showType = 'list';
        this.displayedProductColumns = ['id', 'nombre', 'fecha', 'estado', 'oficialLiga', 'aprobado', 'action'];
    }
    ngOnInit() {
        this.getCompetenciasPorAprobar();
    }
    cambiarAprobado(estado, id_competencia) {
        console.log("Aprobar", estado);
        this.categoriaService.cambiarAprobado(estado, id_competencia)
            .subscribe({
            next: (data) => {
                console.log("data", data);
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Competencia actualizada con exito!', 2);
                this.getCompetenciasPorAprobar();
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    getCompetenciasPorAprobar() {
        this.categoriaService.getCompetenciasPorAprobar()
            .subscribe({
            next: (data) => {
                console.log("data", this.competenciasList.length);
                this.competenciasList = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
}
ListCompetenciaAprobarComponent.ɵfac = function ListCompetenciaAprobarComponent_Factory(t) { return new (t || ListCompetenciaAprobarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ListCompetenciaAprobarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListCompetenciaAprobarComponent, selectors: [["app-listcompetenciaaprobar"]], viewQuery: function ListCompetenciaAprobarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 23, vars: 2, consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "ml-5"], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "id"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["matColumnDef", "fecha"], ["class", "text-nowrap px3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estado"], ["matColumnDef", "oficialLiga"], ["matColumnDef", "aprobado"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-cell", "", 1, "text-nowrap", "px3"], ["class", "fa-regular fa-face-smile fa-md action-table text-[#009CD7] pr-3", "matTooltip", "Es oficial", 4, "ngIf"], ["class", "fa-regular fa-face-frown fa-md action-table text-[#009CD7] pr-3", "matTooltip", "No es Oficial", 4, "ngIf"], ["class", "fa-regular fa-hourglass-half fa-md action-table text-[#009CD7] pr-3", "matTooltip", "En espera", 4, "ngIf"], ["matTooltip", "Es oficial", 1, "fa-regular", "fa-face-smile", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "No es Oficial", 1, "fa-regular", "fa-face-frown", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "En espera", 1, "fa-regular", "fa-hourglass-half", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["class", "fa-regular fa-face-smile fa-md action-table pr-3", "style", "color: blue;", "matTooltip", "Aprobada", 4, "ngIf"], ["class", "fa-regular fa-face-frown fa-md action-table pr-3", "style", "color: red;", "matTooltip", "No aprobada", 4, "ngIf"], ["matTooltip", "Aprobada", 1, "fa-regular", "fa-face-smile", "fa-md", "action-table", "pr-3", 2, "color", "blue"], ["matTooltip", "No aprobada", 1, "fa-regular", "fa-face-frown", "fa-md", "action-table", "pr-3", 2, "color", "red"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "click"], ["matTooltip", "Aprobar", 1, "fa-regular", "fa-thumbs-up", "fa-md", "action-table", "pr-3", 2, "color", "#0000FF"], ["matTooltip", "Negar", 1, "fa-solid", "fa-ban", "fa-md", "action-table", "pr-3", 2, "color", "#CF010B"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListCompetenciaAprobarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Competencias por aprobar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListCompetenciaAprobarComponent_ng_container_13_Template, 90, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "No product found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.competenciasList && ctx.competenciasList.length > 0)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["a.disabled[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    color: #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rjb21wZXRlbmNpYWFwcm9iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YiLCJmaWxlIjoibGlzdGNvbXBldGVuY2lhYXByb2Jhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59Il19 */"] });


/***/ }),

/***/ 37298:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/listcompetencia/components/listcompetenciaaprobarliga/listcompetenciaaprobarliga.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCompetenciaAprobarLigaComponent": () => (/* binding */ ListCompetenciaAprobarLigaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);













function ListCompetenciaAprobarLigaComponent_ng_container_13_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r18.id);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r19.nombre);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r20.direccion);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r21.fecha));
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r22.estado);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Oficial Liga");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 38);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_i_2_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_i_4_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_i_6_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r23.oficialLiga);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r23.oficialLiga == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r23.oficialLiga == null);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_td_64_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListCompetenciaAprobarLigaComponent_ng_container_13_td_64_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const element_r27 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.cambiarAprobado(true, element_r27.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListCompetenciaAprobarLigaComponent_ng_container_13_td_64_Template_a_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const element_r27 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.cambiarAprobado(false, element_r27.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 46);
} }
function ListCompetenciaAprobarLigaComponent_ng_container_13_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 47);
} }
const _c0 = function () { return [15, 30, 45, 60]; };
function ListCompetenciaAprobarLigaComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "         \n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListCompetenciaAprobarLigaComponent_ng_container_13_th_20_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListCompetenciaAprobarLigaComponent_ng_container_13_td_22_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListCompetenciaAprobarLigaComponent_ng_container_13_th_27_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListCompetenciaAprobarLigaComponent_ng_container_13_td_29_Template, 3, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListCompetenciaAprobarLigaComponent_ng_container_13_th_34_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListCompetenciaAprobarLigaComponent_ng_container_13_td_36_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n                                 \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ListCompetenciaAprobarLigaComponent_ng_container_13_th_41_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ListCompetenciaAprobarLigaComponent_ng_container_13_td_43_Template, 3, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ListCompetenciaAprobarLigaComponent_ng_container_13_th_48_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ListCompetenciaAprobarLigaComponent_ng_container_13_td_50_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](53, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ListCompetenciaAprobarLigaComponent_ng_container_13_th_55_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ListCompetenciaAprobarLigaComponent_ng_container_13_td_57_Template, 8, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ListCompetenciaAprobarLigaComponent_ng_container_13_th_62_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ListCompetenciaAprobarLigaComponent_ng_container_13_td_64_Template, 12, 0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "     \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ListCompetenciaAprobarLigaComponent_ng_container_13_tr_67_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, ListCompetenciaAprobarLigaComponent_ng_container_13_tr_69_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "  \n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "   \n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "mat-paginator", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.competenciasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
class ListCompetenciaAprobarLigaComponent {
    constructor(translate, categoriaService, router) {
        this.translate = translate;
        this.categoriaService = categoriaService;
        this.router = router;
        this.competenciasList = [];
        this.competenciasGrid = [];
        this.showType = 'list';
        this.displayedProductColumns = ['id', 'nombre', 'fecha', 'estado', 'oficialLiga', 'action'];
    }
    ngOnInit() {
        this.getCompetenciasPorAprobarLiga();
    }
    cambiarAprobado(estado, id_competencia) {
        console.log("Aprobar", estado);
        this.categoriaService.cambiarAprobadoLiga(estado, id_competencia)
            .subscribe({
            next: (data) => {
                console.log("data", data);
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Competencia actualizada con exito!', 2);
                this.getCompetenciasPorAprobarLiga();
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
    getCompetenciasPorAprobarLiga() {
        this.categoriaService.getCompetenciasPorAprobarLiga()
            .subscribe({
            next: (data) => {
                console.log("data", this.competenciasList.length);
                this.competenciasList = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
}
ListCompetenciaAprobarLigaComponent.ɵfac = function ListCompetenciaAprobarLigaComponent_Factory(t) { return new (t || ListCompetenciaAprobarLigaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ListCompetenciaAprobarLigaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListCompetenciaAprobarLigaComponent, selectors: [["app-listcompetenciaaprobarliga"]], viewQuery: function ListCompetenciaAprobarLigaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 23, vars: 2, consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "ml-5"], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "id"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["matColumnDef", "fecha"], ["class", "text-nowrap px3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estado"], ["matColumnDef", "oficialLiga"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-cell", "", 1, "text-nowrap", "px3"], ["class", "fa-regular fa-face-smile fa-md action-table text-[#009CD7] pr-3", "matTooltip", "Es oficial", 4, "ngIf"], ["class", "fa-regular fa-face-frown fa-md action-table text-[#009CD7] pr-3", "matTooltip", "No es Oficial", 4, "ngIf"], ["class", "fa-regular fa-hourglass-half fa-md action-table text-[#009CD7] pr-3", "matTooltip", "En espera", 4, "ngIf"], ["matTooltip", "Es oficial", 1, "fa-regular", "fa-face-smile", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "No es Oficial", 1, "fa-regular", "fa-face-frown", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "En espera", 1, "fa-regular", "fa-hourglass-half", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "click"], ["matTooltip", "Aprobar", 1, "fa-regular", "fa-thumbs-up", "fa-md", "action-table", "pr-3", 2, "color", "#0000FF"], ["matTooltip", "Negar", 1, "fa-solid", "fa-ban", "fa-md", "action-table", "pr-3", 2, "color", "#CF010B"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListCompetenciaAprobarLigaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Competencias por aprobar de la Liga de Antioquia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListCompetenciaAprobarLigaComponent_ng_container_13_Template, 83, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "No product found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.competenciasList && ctx.competenciasList.length > 0)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["a.disabled[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    color: #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rjb21wZXRlbmNpYWFwcm9iYXJsaWdhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmIiwiZmlsZSI6Imxpc3Rjb21wZXRlbmNpYWFwcm9iYXJsaWdhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 54420:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/listcompetencia/components/listcompetenciafinalizadas/listcompetenciafinalizadas.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCompetenciaFinalizadasComponent": () => (/* binding */ ListCompetenciaFinalizadasComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);













function ListCompetenciaFinalizadasComponent_ng_container_13_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r17.id);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r18.nombre);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r19.fecha));
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r20.estado);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Oficial Liga");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_50_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_50_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 35);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_50_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 36);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaFinalizadasComponent_ng_container_13_td_50_i_2_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaFinalizadasComponent_ng_container_13_td_50_i_4_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaFinalizadasComponent_ng_container_13_td_50_i_6_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r21.oficialLiga == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r21.oficialLiga == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r21.oficialLiga == null);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Aprobado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_57_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_57_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_57_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 36);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListCompetenciaFinalizadasComponent_ng_container_13_td_57_i_2_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListCompetenciaFinalizadasComponent_ng_container_13_td_57_i_4_Template, 1, 0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListCompetenciaFinalizadasComponent_ng_container_13_td_57_i_6_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r25.aprobado == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r25.aprobado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r25.aprobado == null);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 41);
} }
function ListCompetenciaFinalizadasComponent_ng_container_13_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 42);
} }
const _c0 = function () { return [15, 30, 45, 60]; };
function ListCompetenciaFinalizadasComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "         \n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListCompetenciaFinalizadasComponent_ng_container_13_th_20_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListCompetenciaFinalizadasComponent_ng_container_13_td_22_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListCompetenciaFinalizadasComponent_ng_container_13_th_27_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListCompetenciaFinalizadasComponent_ng_container_13_td_29_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n                                 \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListCompetenciaFinalizadasComponent_ng_container_13_th_34_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListCompetenciaFinalizadasComponent_ng_container_13_td_36_Template, 3, 3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ListCompetenciaFinalizadasComponent_ng_container_13_th_41_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ListCompetenciaFinalizadasComponent_ng_container_13_td_43_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n                                 \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ListCompetenciaFinalizadasComponent_ng_container_13_th_48_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ListCompetenciaFinalizadasComponent_ng_container_13_td_50_Template, 8, 3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](53, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ListCompetenciaFinalizadasComponent_ng_container_13_th_55_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ListCompetenciaFinalizadasComponent_ng_container_13_td_57_Template, 8, 3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n   \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ListCompetenciaFinalizadasComponent_ng_container_13_tr_60_Template, 1, 0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ListCompetenciaFinalizadasComponent_ng_container_13_tr_62_Template, 1, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "  \n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "   \n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "mat-paginator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.competenciasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
} }
function ListCompetenciaFinalizadasComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
} }
class ListCompetenciaFinalizadasComponent {
    constructor(translate, categoriaService, router) {
        this.translate = translate;
        this.categoriaService = categoriaService;
        this.router = router;
        this.competenciasList = [];
        this.competenciasGrid = [];
        this.showType = 'list';
        this.displayedProductColumns = ['id', 'nombre', 'fecha', 'estado', 'oficialLiga', 'aprobado'];
    }
    ngOnInit() {
        this.getCompetenciasFinalizadas();
    }
    getCompetenciasFinalizadas() {
        this.categoriaService.getCompetenciasFinalizadas()
            .subscribe({
            next: (data) => {
                console.log("data", data);
                this.competenciasList = data;
            },
            error: (err) => {
                // this.showAlert = true;
                // this.alert = {
                //   type   : 'error',
                //   message: `${err.errorDescription}`
                // };
            },
        });
    }
}
ListCompetenciaFinalizadasComponent.ɵfac = function ListCompetenciaFinalizadasComponent_Factory(t) { return new (t || ListCompetenciaFinalizadasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_0__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ListCompetenciaFinalizadasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListCompetenciaFinalizadasComponent, selectors: [["app-listcompetenciafinalizadas"]], viewQuery: function ListCompetenciaFinalizadasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 2, consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "id"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fecha"], ["class", "text-nowrap px3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "estado"], ["matColumnDef", "oficialLiga"], ["matColumnDef", "aprobado"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-cell", "", 1, "text-nowrap", "px3"], ["class", "fa-solid fa-check-double fa-md action-table pr-3", "style", "color: blue;", "matTooltip", "Es oficial", 4, "ngIf"], ["class", "fa-regular fa-rectangle-xmark fa-md action-table pr-3", "style", "color: red;", "matTooltip", "No es Oficial", 4, "ngIf"], ["class", "fa-regular fa-hourglass-half fa-md action-table text-[#009CD7] pr-3", "matTooltip", "En espera", 4, "ngIf"], ["matTooltip", "Es oficial", 1, "fa-solid", "fa-check-double", "fa-md", "action-table", "pr-3", 2, "color", "blue"], ["matTooltip", "No es Oficial", 1, "fa-regular", "fa-rectangle-xmark", "fa-md", "action-table", "pr-3", 2, "color", "red"], ["matTooltip", "En espera", 1, "fa-regular", "fa-hourglass-half", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["class", "fa-regular fa-face-smile fa-md action-table pr-3", "style", "color: blue;", "matTooltip", "Aprobada", 4, "ngIf"], ["class", "fa-regular fa-face-frown fa-md action-table pr-3", "style", "color: red;", "matTooltip", "No aprobada", 4, "ngIf"], ["matTooltip", "Aprobada", 1, "fa-regular", "fa-face-smile", "fa-md", "action-table", "pr-3", 2, "color", "blue"], ["matTooltip", "No aprobada", 1, "fa-regular", "fa-face-frown", "fa-md", "action-table", "pr-3", 2, "color", "red"], ["mat-header-row", ""], ["mat-row", ""], [1, "ml-5"]], template: function ListCompetenciaFinalizadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Competencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListCompetenciaFinalizadasComponent_ng_container_13_Template, 76, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListCompetenciaFinalizadasComponent_ng_template_15_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.competenciasList && ctx.competenciasList.length >= 0)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0Y29tcGV0ZW5jaWFmaW5hbGl6YWRhcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 38109:
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Competencia/services/competencia.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetenciaService": () => (/* binding */ CompetenciaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);




class CompetenciaService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_destino + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_OCR;
    }
    saveCompetencia(parameter) {
        return this._httpClient.post(`${this.apiUrl}/createCompetencia`, {
            "nombre": parameter.nombre,
            "departamento": parameter.departamento,
            "municipio": parameter.municipio,
            "direccion": parameter.direccion,
            "id_usuario": parameter.id_usuario,
            "fecha": parameter.fecha,
            "estado": parameter.estado,
            "oficialLiga": parameter.oficialLiga,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data;
        }));
    }
    updateCompetencia(parameter) {
        return this._httpClient.post(`${this.apiUrl}/updateCompetencia`, {
            "id": parameter.id,
            "nombre": parameter.nombre,
            "departamento": parameter.departamento,
            "municipio": parameter.municipio,
            "direccion": parameter.direccion,
            "fecha": parameter.fecha,
            "hora_inicio": parameter.hora_inicio,
            "hora_final": parameter.hora_final,
            "estado": parameter.estado,
            "id_usuario": parameter.id_usuario,
            "aprobado": parameter.aprobado,
            "oficialLiga": parameter.oficialLiga,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data;
        }));
    }
    getCompetenciaById(idCompetencia) {
        return this._httpClient.post(`${this.apiUrl}/getCompetenciaById`, {
            "id": idCompetencia,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.competencia;
        }));
    }
    getOleadaByCompetencia(idCompetencia) {
        return this._httpClient.post(`${this.apiUrl}/getOleadaByCompetencia`, {
            "idCompetencia": idCompetencia,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.oleadas;
        }));
    }
    saveOleada(parameter) {
        return this._httpClient.post(`${this.apiUrl}/createOleada`, {
            "id_competencia": parameter.id_competencia,
            "id_categoria": parameter.id_categoria,
            "no_oleada": parameter.no_oleada,
            "fechaInicio": parameter.fechaInicio,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data;
        }));
    }
    updateOleada(parameter) {
        return this._httpClient.post(`${this.apiUrl}/updateOleada`, {
            "id": parameter.id,
            "id_competencia": parameter.id_competencia,
            "id_categoria": parameter.id_categoria,
            "no_oleada": parameter.no_oleada,
            "fechaInicio": parameter.fechaInicio,
            "fechaFin": parameter.fechaFin,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data;
        }));
    }
}
CompetenciaService.ɵfac = function CompetenciaService_Factory(t) { return new (t || CompetenciaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
CompetenciaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CompetenciaService, factory: CompetenciaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49902:
/*!***********************************************************************************************************!*\
  !*** ./src/app/Pages/Competencia/showcompetencia/components/showcompetencia/showcompetencia.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowCompetenciaComponent": () => (/* binding */ ShowCompetenciaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ganadores-dialog/ganadores-dialog.component */ 7008);
/* harmony import */ var _dialoginiciaroleada_dialoginiciaroleada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dialoginiciaroleada/dialoginiciaroleada.component */ 55729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Categoria/services/categoria.service */ 22390);
/* harmony import */ var _services_competencia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/competencia.service */ 38109);
/* harmony import */ var _Atleta_services_atleta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Atleta/services/atleta.service */ 25067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);























function ShowCompetenciaComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowCompetenciaComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.darLlegada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n               Dar llegada\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.competenciaIniciada);
  }
}

function ShowCompetenciaComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowCompetenciaComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.lanzarOleada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n               Lanzar oleada\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.competenciaIniciada);
  }
}

function ShowCompetenciaComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowCompetenciaComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.verGanadores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n               Calcular ganadores\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r2.competenciaIniciada);
  }
}

function ShowCompetenciaComponent_h4_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("Hora F\u00EDn: " + ctx_r3.HoraFin);
  }
}

function ShowCompetenciaComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowCompetenciaComponent_button_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.finalizarCompetencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n               Detener Competencia\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r4.competenciaFinalizada);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Atleta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r36.no_atleta);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No oleada");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r37.no_oleada);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r38.nombre);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 40)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r39.documento);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r40.email);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r27.changeCategoria(element_r41.categoria_id));
  }
}

function ShowCompetenciaComponent_ng_container_50_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tiempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, element_r42.tiempo_competencia, "HH:mm:ss.SSS"));
  }
}

function ShowCompetenciaComponent_ng_container_50_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r43.estado);
  }
}

function ShowCompetenciaComponent_ng_container_50_th_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ShowCompetenciaComponent_ng_container_50_td_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n                                          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n                                       ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/vacunacion/vacunacion/show/", element_r44.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/vacunacion/vacunacion/show/", element_r44.id, "");
  }
}

function ShowCompetenciaComponent_ng_container_50_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 46);
  }
}

function ShowCompetenciaComponent_ng_container_50_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 47);
  }
}

const _c0 = function () {
  return [15, 30, 45, 60];
};

function ShowCompetenciaComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "         \n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ShowCompetenciaComponent_ng_container_50_th_20_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ShowCompetenciaComponent_ng_container_50_td_22_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ShowCompetenciaComponent_ng_container_50_th_27_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ShowCompetenciaComponent_ng_container_50_td_29_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](32, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ShowCompetenciaComponent_ng_container_50_th_34_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ShowCompetenciaComponent_ng_container_50_td_36_Template, 3, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](39, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ShowCompetenciaComponent_ng_container_50_th_41_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, ShowCompetenciaComponent_ng_container_50_td_43_Template, 3, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](46, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, ShowCompetenciaComponent_ng_container_50_th_48_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ShowCompetenciaComponent_ng_container_50_td_50_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](53, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ShowCompetenciaComponent_ng_container_50_th_55_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, ShowCompetenciaComponent_ng_container_50_td_57_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](60, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, ShowCompetenciaComponent_ng_container_50_th_62_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, ShowCompetenciaComponent_ng_container_50_td_64_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](67, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, ShowCompetenciaComponent_ng_container_50_th_69_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, ShowCompetenciaComponent_ng_container_50_td_71_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](74, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, ShowCompetenciaComponent_ng_container_50_th_76_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, ShowCompetenciaComponent_ng_container_50_td_78_Template, 12, 2, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "     \n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, ShowCompetenciaComponent_ng_container_50_tr_81_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "\n                                 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, ShowCompetenciaComponent_ng_container_50_tr_83_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "\n                              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "  \n                           ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "   \n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "mat-paginator", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "\n                     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "\n               ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r5.atletasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r5.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r5.displayedProductColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0));
  }
}

function ShowCompetenciaComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "\n         ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No product found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n      ");
  }
}

class ShowCompetenciaComponent {
  constructor(translate, categoriaService, competenciaService, atletaService, router, route, dialog) {
    this.translate = translate;
    this.categoriaService = categoriaService;
    this.competenciaService = competenciaService;
    this.atletaService = atletaService;
    this.router = router;
    this.route = route;
    this.dialog = dialog;
    this.competenciaIniciada = false;
    this.competenciaFinalizada = false;
    this.oleadas = [];
    this.categorias = [];
    this.atletasList = [];
    this.showType = 'list';
    this.displayedProductColumns = ['no_atleta', 'no_oleada', 'categoria', 'nombre', 'documento', 'email', 'tiempo', 'estado'];
  }

  ngOnInit() {
    this.idCompetencia = this.route.snapshot.params['idCompetencia'];
    console.log("idCompetencia", this.idCompetencia);
    this.findCompetenciaById();
    this.findOleadaByCompetencia();
    this.getCategoriaByCompetencia();
    this.findAtletaByCategoria();
  }

  findCompetenciaById() {
    this.competenciaService.getCompetenciaById(this.idCompetencia).subscribe({
      next: data => {
        console.log("data", data);
        this.competencia = data[0];

        if (this.competencia.estado == "FINALIZADA") {
          this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(this.competencia.hora_inicio, 'HH:mm:ss', 'en-US');
          this.HoraFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(this.competencia.hora_final, 'HH:mm:ss', 'en-US');
          this.competenciaIniciada = true;
          this.competenciaFinalizada = true;
        } else {
          if (this.competencia.hora_inicio != null) {
            this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(this.competencia.hora_inicio, 'HH:mm:ss', 'en-US');
            this.competenciaIniciada = true;
          }
        }

        console.log("data", this.competencia);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  findOleadaByCompetencia() {
    this.competenciaService.getOleadaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        console.log("data oleadas", data);
        this.oleadas = data;
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  getCategoriaByCompetencia() {
    this.categoriaService.getCategoriaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        this.categorias = data;
        console.log("categorias", this.categorias);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  findAtletaByCategoria() {
    this.atletaService.getAtletaByCompetencia(this.idCompetencia).subscribe({
      next: data => {
        this.atletasList = data;
        console.log("data", this.atletasList);
      },
      error: err => {// this.showAlert = true;
        // this.alert = {
        //   type   : 'error',
        //   message: `${err.errorDescription}`
        // };
      }
    });
  }

  changeCategoria(idCategoria) {
    let nombreCategoria = '';
    const categoriaFind = this.categorias.find(item => item.id === idCategoria);
    if (categoriaFind) nombreCategoria = categoriaFind.nombre;
    return nombreCategoria;
  }

  iniciarCompetencia() {
    var _this = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Iniciar Competencia',
        text: `Está seguro que desea iniciar la competencia?`,
        //icon: 'question',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonColor: '',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#1FAEEF',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          _this.competenciaIniciada = true;
          const fechaActual = new Date();
          _this.HoraInicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(fechaActual), 'HH:mm:ss', 'en-US');
          _this.competencia.hora_inicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
          _this.competencia.hora_final = _this.competencia.hora_inicio;

          _this.updateCompetencia(_this.competencia);
        }
      });
    })();
  }

  lanzarOleada() {
    const dialogRef = this.dialog.open(_dialoginiciaroleada_dialoginiciaroleada_component__WEBPACK_IMPORTED_MODULE_3__.dialogIniciarOleadaComponent, {
      width: '80%',
      minWidth: '70vw',
      maxHeight: '95vh',
      data: {
        competencia: this.competencia,
        categoria: this.categorias
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);

      if (result) {
        const oleadaFind = this.oleadas.find(oleada => oleada.no_oleada === result?.no_oleada && oleada.id_categoria == result.id_categoria);

        if (!oleadaFind) {
          console.log("encontrada", result);
          this.saveOleada(result);
        } else {
          alertify.set('notifier', 'position', 'top-right');
          alertify.warning('La oleada ya está iniciada!', 2);
        }
      }
    });
  }

  saveOleada(oleada) {
    this.oleadas.push(oleada);
    console.log("oleada +1", this.oleadas);
    this.competenciaService.saveOleada(oleada).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Oleada creada con exito!', 2);
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

  buildSelectHtml(optionsList) {
    let resultString = '';

    for (let i = 0; i < optionsList.length; i++) {
      resultString += '<option value=' + optionsList[i].id + '>' + optionsList[i].nombre + '</option>';
    }

    return resultString;
  }

  finalizarCompetencia() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Finalizar Competencia',
      text: `Está seguro que desea finalziar la competencia?`,
      //icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonColor: '',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1FAEEF',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        this.competenciaFinalizada = true;
        const fechaActual = new Date();
        this.HoraFin = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(fechaActual), 'HH:mm:ss', 'en-US');
        this.competencia.hora_inicio = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(this.competencia.hora_inicio), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.hora_final = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(fechaActual), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
        this.competencia.estado = 'FINALIZADA';
        this.updateCompetencia(this.competencia);
      }
    });
  }

  darLlegada() {
    var _this2 = this;

    return (0,C_Users_aalzate_Documents_Personal_Projects_OCR_Front_ocrapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let noAtleta = '';
      const {
        value: no_atleta,
        isConfirmed
      } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: 'Dar llegada',
        text: `Dar llegada de atleta`,
        input: 'text',
        inputLabel: 'Ingresa el número del atleta',
        inputPlaceholder: "",
        inputValue: noAtleta,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        inputValidator: value => {
          if (!value) {
            return 'Debes ingresar el número del atleta';
          }
        }
      });

      if (isConfirmed) {
        if (no_atleta) {
          const ateletaFinalizado = _this2.atletasList.find(item => item.no_atleta === no_atleta);

          if (ateletaFinalizado) {
            console.log("ateletaFinalizado", ateletaFinalizado);

            const oleadaIniciada = _this2.oleadas.find(item => item.no_oleada === ateletaFinalizado.no_oleada);

            console.log("oleadaIniciada", oleadaIniciada);

            if (oleadaIniciada) {
              if (ateletaFinalizado.estado == 'EN_COMPETENCIA') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('El atleta ' + ateletaFinalizado.no_atleta + " ha finalizado.", 5);
                ateletaFinalizado.estado = 'FINALIZADO';
                ateletaFinalizado.tiempo_competencia = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(new Date()), 'yyyy-MM-dd HH:mm:ss.SSS-05:00', 'en-US');
                console.log("ateletaFinalizado", ateletaFinalizado);

                _this2.asignarTiempoAtleta(ateletaFinalizado);
              } else {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('El atleta ya había finalizado.', 3);
              }
            } else {
              alertify.set('notifier', 'position', 'top-right');
              alertify.warning('La oleada #' + ateletaFinalizado.no_oleada + " del atleta " + ateletaFinalizado.no_atleta + " no ha sido iniciada!", 4);
            }
          } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.warning('Número de atleta no encontrado!', 3);
          }
        }
      }
    })();
  }

  updateAtleta(atleta) {
    console.log("update Atleta");
    console.log("atleta.", atleta);
    this.atletaService.updateAtleta(atleta).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Atleta guardado con exito!', 2);
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

  asignarTiempoAtleta(atleta) {
    this.atletaService.asignarTiempoAtleta(atleta).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Atleta guardado con exito!', 2);
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

  updateCompetencia(competencia) {
    console.log("update competencia");
    console.log("competencia.", competencia);
    this.competenciaService.updateCompetencia(competencia).subscribe({
      next: data => {
        console.log("data", data);

        if (data?.response == 'OK') {
          alertify.set('notifier', 'position', 'top-right');
          alertify.success('Competencia actualizada con exito!', 2);
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

  verGanadores() {
    this.dialog.open(_ganadores_dialog_ganadores_dialog_component__WEBPACK_IMPORTED_MODULE_2__.GanadoresDialogComponent, {
      data: {
        competencia: this.competencia,
        atletas: this.atletasList
      },
      width: '95%',
      height: '80%'
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log("result", result);
      }
    });
  }

}

ShowCompetenciaComponent.ɵfac = function ShowCompetenciaComponent_Factory(t) {
  return new (t || ShowCompetenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Categoria_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__.CategoriaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_competencia_service__WEBPACK_IMPORTED_MODULE_5__.CompetenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Atleta_services_atleta_service__WEBPACK_IMPORTED_MODULE_6__.AtletaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};

ShowCompetenciaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ShowCompetenciaComponent,
  selectors: [["app-showcompetencia"]],
  viewQuery: function ShowCompetenciaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 56,
  vars: 11,
  consts: [[1, "container"], [1, "section-gap", "pt-0"], ["fxLayoutAlign", "space-between center", 1, "m-3"], [1, "title"], [1, "mb-0"], ["fxLayoutJustify", "space-end", "fxLayoutAlign", "space-between end", 1, "m-3"], [1, "mb-0", "h5"], ["class", "button-lg mb-3", "style", "background: #9AD135;", "mat-flat-button", "", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["mat-flat-button", "", 1, "button-lg", "mb-3", 2, "background", "#9AD135", 3, "disabled", "click"], ["class", "m-3", 4, "ngIf", "ngIfElse"], ["class", "m-3"], ["elseBlock", ""], [1, "m-3"], ["fxLayout", "row wrap"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "product-list"], [1, "pt-0"], [1, "overflow-hidden"], [1, "table-responsive-x", "product-list-table"], ["mat-table", "", "matSort", "", 1, "w-100", "table-scroll-wrap", 3, "dataSource"], ["matColumnDef", "no_atleta"], ["class", "text-nowrap px-3", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "text-nowrap px-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "no_oleada"], ["matColumnDef", "nombre"], ["class", "text-nowrap product-name", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "documento"], ["matColumnDef", "email"], ["matColumnDef", "categoria"], ["matColumnDef", "tiempo"], ["matColumnDef", "estado"], ["matColumnDef", "action"], ["class", "px-3 text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "px-3 text-nowrap", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "px-3"], ["mat-cell", "", 1, "text-nowrap", "product-name"], ["mat-header-cell", "", 1, "px-3", "text-nowrap"], ["mat-cell", "", 1, "px-3", "text-nowrap"], [3, "routerLink"], ["matTooltip", "Detalle", 1, "fa", "fa-eye", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["matTooltip", "Iniciar", 1, "fa", "fa-play", "fa-md", "action-table", "text-[#009CD7]", "pr-3"], ["mat-header-row", ""], ["mat-row", ""], [1, "ml-5"]],
  template: function ShowCompetenciaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Atletas");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ShowCompetenciaComponent_button_26_Template, 2, 1, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ShowCompetenciaComponent_button_28_Template, 2, 1, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ShowCompetenciaComponent_button_30_Template, 2, 1, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\n               ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n               ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ShowCompetenciaComponent_h4_40_Template, 2, 1, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowCompetenciaComponent_Template_button_click_43_listener() {
        return ctx.iniciarCompetencia();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\n               Iniciar Competencia\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\n            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, ShowCompetenciaComponent_button_46_Template, 2, 1, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "\n         ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\n\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ShowCompetenciaComponent_ng_container_50_Template, 97, 5, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, ShowCompetenciaComponent_ng_template_52_Template, 4, 0, "ng-template", 11, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "\n   ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.competencia == null ? null : ctx.competencia.fecha);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.competenciaFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.competenciaFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.competenciaFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]("Hora inicio: " + (ctx.HoraInicio ? ctx.HoraInicio : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.competenciaFinalizada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.competenciaIniciada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.competenciaIniciada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.atletasList && ctx.atletasList.length >= 0)("ngIfElse", _r6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93Y29tcGV0ZW5jaWEuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 60598:
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.11.1
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);

    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];

    return n;
  }

  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }

  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }

  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }

  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }

  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }

  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return p;
  }

  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }

  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }

  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);

      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }

  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }

  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }

  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}

    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }

  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];

    if (null != t) {
      var e,
          n,
          i,
          u,
          a = [],
          f = !0,
          o = !1;

      try {
        if (i = (t = t.call(r)).next, 0 === l) ;else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }

      return a;
    }
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }

  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }

  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }

  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););

    return t;
  }

  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }

  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];

    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return String(t);
  }

  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");

    return "symbol" == typeof i ? i : i + "";
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var RESTORE_FOCUS_TIMEOUT = 100;
  /** @type {GlobalState} */

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */


  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }

      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  var swalPrefix = 'swal2-';
  /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */

  var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
  var swalClasses = classNames.reduce(function (acc, className) {
    acc[className] = swalPrefix + className;
    return acc;
  },
  /** @type {SwalClasses} */
  {});
  /** @type {SwalIcon[]} */

  var icons = ['success', 'warning', 'info', 'question', 'error'];
  var iconTypes = icons.reduce(function (acc, icon) {
    acc[icon] = swalPrefix + icon;
    return acc;
  },
  /** @type {SwalIcons} */
  {});
  var consolePrefix = 'SweetAlert2:';
  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */


  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardize console errors
   *
   * @param {string} message
   */


  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */


  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */

  var warnOnce = function warnOnce(message) {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */


  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */


  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  /**
   * @param {any} arg
   * @returns {boolean}
   */


  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */


  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  /**
   * @param {any} arg
   * @returns {boolean}
   */


  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };
  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */


  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */


  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */


  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getIconContent = function getIconContent() {
    return elementByClass(swalClasses['icon-content']);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  /**
   * @returns {HTMLButtonElement | null}
   */


  var getConfirmButton = function getConfirmButton() {
    return (
      /** @type {HTMLButtonElement} */
      elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm))
    );
  };
  /**
   * @returns {HTMLButtonElement | null}
   */


  var getCancelButton = function getCancelButton() {
    return (
      /** @type {HTMLButtonElement} */
      elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel))
    );
  };
  /**
   * @returns {HTMLButtonElement | null}
   */


  var getDenyButton = function getDenyButton() {
    return (
      /** @type {HTMLButtonElement} */
      elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny))
    );
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  /**
   * @returns {HTMLElement | null}
   */


  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js


  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */

  var getFocusableElements = function getFocusableElements() {
    var popup = getPopup();

    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */


    var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex) // sort according to tabindex
    .sort(function (a, b) {
      var tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      var tabindexB = parseInt(b.getAttribute('tabindex') || '0');

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    /** @type {NodeListOf<HTMLElement>} */

    var otherFocusableElements = popup.querySelectorAll(focusable);
    var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
      return isVisible$1(el);
    });
  };
  /**
   * @returns {boolean}
   */


  var isModal = function isModal() {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */


  var isToast = function isToast() {
    var popup = getPopup();

    if (!popup) {
      return false;
    }

    return hasClass(popup, swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */


  var isLoading = function isLoading() {
    var popup = getPopup();

    if (!popup) {
      return false;
    }

    return popup.hasAttribute('data-loading');
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */


  var setInnerHtml = function setInnerHtml(elem, html) {
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      var head = parsed.querySelector('head');
      head && Array.from(head.childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      var body = parsed.querySelector('body');
      body && Array.from(body.childNodes).forEach(function (child) {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */


  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */


  var removeCustomClasses = function removeCustomClasses(elem, params) {
    Array.from(elem.classList).forEach(function (className) {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
        return;
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */


  var getInput$1 = function getInput(popup, inputClass) {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */


  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */


  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (Array.isArray(target)) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */


  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */


  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */


  var getDirectChildByClass = function getDirectChildByClass(elem, className) {
    var children = Array.from(elem.children);

    for (var i = 0; i < children.length; i++) {
      var child = children[i];

      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */


  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? "".concat(value, "px") : value);
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */


  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem && (elem.style.display = display);
  };
  /**
   * @param {HTMLElement | null} elem
   */


  var hide = function hide(elem) {
    elem && (elem.style.display = 'none');
  };
  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */


  var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';

    if (!elem) {
      return;
    }

    new MutationObserver(function () {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */


  var setStyle = function setStyle(parent, selector, property, value) {
    /** @type {HTMLElement | null} */
    var el = parent.querySelector(selector);

    if (el) {
      el.style.setProperty(property, value);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */


  var toggle = function toggle(elem, condition) {
    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */


  var isVisible$1 = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /**
   * @returns {boolean}
   */


  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  };
  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  };
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */


  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (!timerProgressBar) {
      return;
    }

    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };

  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();

    if (!timerProgressBar) {
      return;
    }

    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };
  /**
   * Detect Node env
   *
   * @returns {boolean}
   */


  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var resetValidationMessage$1 = function resetValidationMessage() {
    globalState.currentInstance.resetValidationMessage();
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var popup = getPopup();
    var input = getDirectChildByClass(popup, swalClasses.input);
    var file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    var range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */

    var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    var select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;

    range.oninput = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };

    range.onchange = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };
  /**
   * @param {SweetAlertOptions} params
   */


  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };
  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */


  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (_typeof(param) === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {any} param
   * @param {HTMLElement} target
   */


  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */


  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };
  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */


  var animationEndEvent = function () {
    // Prevent run in Node env
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div'); // Chrome, Safari and Opera

    if (typeof testEl.style.webkitAnimation !== 'undefined') {
      return 'webkitAnimationEnd';
    } // Standard syntax


    if (typeof testEl.style.animation !== 'undefined') {
      return 'animationend';
    }

    return false;
  }();
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();

    if (!actions || !loader) {
      return;
    } // Actions (buttons) wrapper


    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */


  function renderButtons(actions, loader, params) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    } // Render buttons


    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    var buttonName =
    /** @type {'Confirm' | 'Deny' | 'Cancel'} */
    capitalizeFirstLetter(buttonType);
    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
  }
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();

    if (!closeButton) {
      return;
    }

    setInnerHtml(closeButton, params.closeButtonHtml || ''); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */


  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }

    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }

    addClass(container, swalClasses["grow-".concat(grow)]);
  }
  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */


  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };
  /** @type {InputClass[]} */

  var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */

  var renderInput = function renderInput(instance, params) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(function (inputClass) {
      var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);

      if (!inputContainer) {
        return;
      } // set attributes


      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  var showInput = function showInput(params) {
    if (!params.input) {
      return;
    }

    if (!renderInputType[params.input]) {
      error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(' | '), ", got \"").concat(params.input, "\""));
      return;
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    if (params.inputAutoFocus) {
      setTimeout(function () {
        focusInput(input);
      });
    }
  };
  /**
   * @param {HTMLInputElement} input
   */


  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  var setAttributes = function setAttributes(inputClass, inputAttributes) {
    var input = getInput$1(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (_typeof(params.customClass) === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (_typeof(params.customClass) === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  var getInputContainer = function getInputContainer(inputType) {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
    if (['string', 'number'].includes(_typeof(inputValue))) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(inputValue), "\""));
    }
  };
  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */


  var renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = function (input, params) {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = function (textarea, params) {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    var getMargin = function getMargin(el) {
      return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
    }; // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(function () {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        var textareaResizeHandler = function textareaResizeHandler() {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }

          var textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();

    if (!htmlContainer) {
      return;
    }

    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();

    if (!footer) {
      return;
    }

    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon();

    if (!icon) {
      return;
    } // if the given icon already rendered, apply the styling without re-rendering the icon


    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass && params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  var applyStyles = function applyStyles(icon, params) {
    for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          iconType = _Object$entries$_i[0],
          iconClassName = _Object$entries$_i[1];

      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }

    addClass(icon, params.icon && iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  var setContent = function setContent(icon, params) {
    if (!params.icon && !params.iconHtml) {
      return;
    }

    var oldContent = icon.innerHTML;
    var newContent = '';

    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }

    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i2 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr.length; _i2++) {
      var sel = _arr[_i2];
      setStyle(icon, sel, 'background-color', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };
  /**
   * @param {string} content
   * @returns {string}
   */


  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!image) {
      return;
    }

    if (!params.imageUrl) {
      hide(image);
      return;
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || ''); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup();

    if (!container || !popup) {
      return;
    } // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170


    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      var loader = getLoader();
      loader && popup.insertBefore(loader, getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses$1(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  var addClasses$1 = function addClasses(popup, params) {
    var showClass = params.showClass || {}; // Default Class + showClass when updating Swal.update({})

    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!progressStepsContainer) {
      return;
    }

    var progressSteps = params.progressSteps,
        currentProgressStep = params.currentProgressStep;

    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */


  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();

    if (!title) {
      return;
    }

    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    var popup = getPopup();

    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
  };
  /*
   * Global function to determine if SweetAlert2 popup is shown
   */


  var isVisible = function isVisible() {
    return isVisible$1(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */


  var clickConfirm = function clickConfirm() {
    var _dom$getConfirmButton;

    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };
  /*
   * Global function to click 'Deny' button
   */


  var clickDeny = function clickDeny() {
    var _dom$getDenyButton;

    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };
  /*
   * Global function to click 'Cancel' button
   */


  var clickCancel = function clickCancel() {
    var _dom$getCancelButton;

    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };
  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */


  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });
  /**
   * @param {GlobalState} globalState
   */

  var removeKeydownHandler = function removeKeydownHandler(globalState) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */


  var addKeydownHandler = function addKeydownHandler(globalState, innerParams, dismissWith) {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(innerParams, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {number} index
   * @param {number} increment
   */


  var setFocus = function setFocus(index, increment) {
    var _dom$getPopup;

    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      focusableElements[index].focus();
      return;
    } // no visible focusable elements, focus the popup


    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };

  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */

  var keydownHandler = function keydownHandler(innerParams, event, dismissWith) {
    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (event.isComposing || event.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    } // ENTER


    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    } // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    } // ARROWS - switch focus between buttons
    else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
      handleArrows(event.key);
    } // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };
  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */


  var handleEnter = function handleEnter(event, innerParams) {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    var input = getInput$1(getPopup(), innerParams.input);

    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      event.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} event
   */


  var handleTab = function handleTab(event) {
    var targetElement = event.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }

    event.stopPropagation();
    event.preventDefault();
  };
  /**
   * @param {string} key
   */


  var handleArrows = function handleArrows(key) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */


    var buttons = [confirmButton, denyButton, cancelButton];

    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }

    var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement;

    if (!buttonToFocus) {
      return;
    }

    for (var i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */


  var handleEsc = function handleEsc(event, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };
  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */


  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  }; // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var container = getContainer();
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.contains(container)) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };

  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  }; // @ts-ignore


  var isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */

  var iOSfix = function iOSfix() {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  var lockBodyScroll = function lockBodyScroll() {
    var container = getContainer();

    if (!container) {
      return;
    }
    /** @type {boolean} */


    var preventTouchMove;
    /**
     * @param {TouchEvent} event
     */

    container.ontouchstart = function (event) {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */


    container.ontouchmove = function (event) {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };
  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();
    var htmlContainer = getHtmlContainer();

    if (!container || !htmlContainer) {
      return false;
    }

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(htmlContainer) && // #1944
    htmlContainer.contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  var isStylus = function isStylus(event) {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  var isZoom = function isZoom(event) {
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };
  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */


  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */


  var previousBodyPadding = null;
  /**
   * @param {string} initialBodyOverflow
   */

  var replaceScrollbarWithPadding = function replaceScrollbarWithPadding(initialBodyOverflow) {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
    }
  };

  var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding() {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
      previousBodyPadding = null;
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */


  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      removeKeydownHandler(globalState);
    } // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom


    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }
  /**
   * Remove SweetAlert2 classes from body
   */


  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }
  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */


  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    var didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }

  var triggerClosePopup = function triggerClosePopup(instance) {
    var popup = getPopup();

    if (!popup) {
      return false;
    }

    var innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };
  /**
   * @param {any} error
   */


  function rejectPromise(error) {
    var rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  /**
   * @param {SweetAlert} instance
   */


  var handleAwaitingPromise = function handleAwaitingPromise(instance) {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise; // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };
  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */


  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };
  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */


  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */


  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    if (!animationEndEvent) {
      return;
    }

    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };
  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */


  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      } // instance might have been destroyed already


      if (instance._destroy) {
        instance._destroy();
      }
    });
  };
  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */


  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();

    if (!popup) {
      return;
    }

    var loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };
  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */


  var replaceButton = function replaceButton(popup, buttonToReplace) {
    var actions = getActions();
    var loader = getLoader();

    if (!actions || !loader) {
      return;
    }

    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }

    addClass([popup, actions], swalClasses.loading);
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(function (i) {
      return i === params.input;
    }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */


  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };
  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */


  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };
  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */


  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };
  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */


  var getFileValue = function getFileValue(input) {
    return input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var handleInputOptions = function handleInputOptions(instance, params) {
    var popup = getPopup();

    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */


    var processInputOptions = function processInputOptions(inputOptions) {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */


  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();

    if (!input) {
      return;
    }

    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };
  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */


  function populateSelectOptions(popup, inputOptions, params) {
    var select = getDirectChildByClass(popup, swalClasses.select);

    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */


    var renderOption = function renderOption(parent, optionLabel, optionValue) {
      var option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };

    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1]; // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>

      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        var optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now

        select.appendChild(optgroup);
        optionLabel.forEach(function (o) {
          return renderOption(optgroup, o[1], o[0]);
        });
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }
  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */


  function populateRadioOptions(popup, inputOptions, params) {
    var radio = getDirectChildByClass(popup, swalClasses.radio);

    if (!radio) {
      return;
    }

    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */


  var formatInputOptions = function formatInputOptions(inputOptions) {
    /** @type {InputOptionFlattened[]} */
    var result = [];

    if (inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };
  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */


  var isSelected = function isSelected(optionValue, inputValue) {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  var _this = undefined;
  /**
   * @param {SweetAlert} instance
   */

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  /**
   * @param {SweetAlert} instance
   */


  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */


  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */


  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
    var innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }

    var input = instance.getInput();
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */


  var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };
  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */


  var deny = function deny(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      instance.close({
        isDenied: true,
        value: value
      });
    }
  };
  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */


  var succeedWith = function succeedWith(instance, value) {
    instance.close({
      isConfirmed: true,
      value: value
    });
  };
  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */


  var rejectWith = function rejectWith(instance, error) {
    instance.rejectPromise(error);
  };
  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */


  var confirm = function confirm(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      succeedWith(instance, value);
    }
  };
  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */


  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  var showRelatedButton = function showRelatedButton(domCache) {
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };
  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */


  function getInput() {
    var innerParams = privateProps.innerParams.get(this);
    var domCache = privateProps.domCache.get(this);

    if (!domCache) {
      return null;
    }

    return getInput$1(domCache.popup, innerParams.input);
  }
  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */


  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }
  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */


  function setInputDisabled(input, disabled) {
    var popup = getPopup();

    if (!popup || !input) {
      return;
    }

    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      var radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }
  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */


  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */


  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  /**
   * Enable the input field
   * @this {SweetAlert}
   */


  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }
  /**
   * Disable the input field
   * @this {SweetAlert}
   */


  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }
  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */


  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }
  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */


  function resetValidationMessage() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  /** @type {Record<string, string>} */

  var deprecatedParams = {};
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */


  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */


  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };
  /**
   * @param {string} param
   */


  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };
  /**
   * @param {string} param
   */


  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };
  /**
   * @param {string} param
   */


  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    var isDeprecated = isDeprecatedParameter(param);

    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };
  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */


  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      return;
    }

    var validUpdatableParams = filterValidParams(params);
    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }
  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */


  var filterValidParams = function filterValidParams(params) {
    var validUpdatableParams = {};
    Object.keys(params).forEach(function (param) {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };
  /**
   * Dispose the current SweetAlert2 instance
   */


  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert} instance
   */


  var disposeSwal = function disposeSwal(instance) {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert} instance
   */


  var disposeWeakMaps = function disposeWeakMaps(instance) {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise; // Unset instance methods

      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */


  var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
    for (var i in obj) {
      obj[i]["delete"](instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */

  var handlePopupClick = function handlePopupClick(innerParams, domCache, dismissWith) {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */


  var handleToastClick = function handleToastClick(innerParams, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  var isAnyButtonShown = function isAnyButtonShown(innerParams) {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };

  var ignoreOutsideClick = false;
  /**
   * @param {DomCache} domCache
   */

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = function () {}; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup


        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  /**
   * @param {DomCache} domCache
   */


  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function (e) {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }

      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = function () {}; // We also need to check if the mouseup target is a child of the popup


        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */


  var handleModalClick = function handleModalClick(innerParams, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };
  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */


  function fire() {
    var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }
  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */


  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _callSuper(this, MixinSwal, arguments);
      }

      _inherits(MixinSwal, _this);

      return _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
        }
      }]);
    }(this); // @ts-ignore


    return MixinSwal;
  }
  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */


  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */


  var increaseTimer = function increaseTimer(ms) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */


  var isTimerRunning = function isTimerRunning() {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  /**
   * @param {string} attr
   */

  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  var Timer = /*#__PURE__*/function () {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }
    /**
     * @returns {number}
     */


    return _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
      /**
       * @returns {number}
       */

    }, {
      key: "stop",
      value: function stop() {
        if (this.started && this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date().getTime() - this.started.getTime();
        }

        return this.remaining;
      }
      /**
       * @param {number} n
       * @returns {number}
       */

    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
      /**
       * @returns {number}
       */

    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
      /**
       * @returns {boolean}
       */

    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);
  }();

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */

  var getTemplateParams = function getTemplateParams(params) {
    /** @type {HTMLTemplateElement} */
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    var templateContent = template.content;
    showWarningsForElements(templateContent);
    var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */

    var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (_typeof(defaultParams[paramName]) === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */

    var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(function (param) {
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      result[paramName] = new Function("return ".concat(value))();
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */

    var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */


  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    /** @type {HTMLElement | null} */

    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    /** @type {HTMLElement} */

    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    /** @type {HTMLElement} */

    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore

      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */


    var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));

    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */


  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      /** @type {HTMLElement} */

      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  var showWarningsForElements = function showWarningsForElements(templateContent) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(function (el) {
      var tagName = el.tagName.toLowerCase();

      if (!allowedElements.includes(tagName)) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    Array.from(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };
  /**
   * @param {AnimationEvent} event
   */


  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup || !animationEndEvent) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */


  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };
  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */


  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  var addClasses = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);

    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(function () {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup); // and remove the opacity workaround

        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },

    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }

    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }

    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }
  /**
   * @param {SweetAlertOptions} params
   */


  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }
  /** @type {SweetAlert} */


  var currentInstance;

  var _promise = /*#__PURE__*/new WeakMap();

  var SweetAlert = /*#__PURE__*/function () {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);
      /**
       * @type {Promise<SweetAlertResult>}
       */


      _classPrivateFieldInitSpec(this, _promise, void 0); // Prevent run in Node env


      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      /** @type {Readonly<SweetAlertOptions>} */

      this.params = outerParams;
      /** @type {boolean} */

      this.isAwaitingPromise = false;

      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }

    return _createClass(SweetAlert, [{
      key: "_main",
      value: function _main(userParams) {
        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        showWarningsForParams(Object.assign({}, mixinParams, userParams));

        if (globalState.currentInstance) {
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
          var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;

          globalState.currentInstance._destroy();

          if (!isAwaitingPromise) {
            swalPromiseResolve({
              isDismissed: true
            });
          }

          if (isModal()) {
            unsetAriaHidden();
          }
        }

        globalState.currentInstance = currentInstance;
        var innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams); // clear the previous timer

        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        } // clear the restore focus timeout


        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(currentInstance);
        render(currentInstance, innerParams);
        privateProps.innerParams.set(currentInstance, innerParams);
        return swalPromise(currentInstance, domCache, innerParams);
      } // `catch` cannot be the name of a module export, so we define our thenable methods here instead

    }, {
      key: "then",
      value: function then(onFulfilled) {
        return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        return _classPrivateFieldGet2(_promise, this)["finally"](onFinally);
      }
    }]);
  }();
  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */


  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve, reject) {
      // functions to handle all closings/dismissals

      /**
       * @param {DismissReason} dismiss
       */
      var dismissWith = function dismissWith(dismiss) {
        instance.close({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = function () {
        handleConfirmButtonClick(instance);
      };

      domCache.denyButton.onclick = function () {
        handleDenyButtonClick(instance);
      };

      domCache.cancelButton.onclick = function () {
        handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        dismissWith(DismissReason.close);
      };

      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };
  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */


  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);
    var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);

    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };
  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */


  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */


  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(function () {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // Dear russian users visiting russian sites. Let's have fun.


  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    var now = new Date();
    var initiationDate = localStorage.getItem('swal-initiation');

    if (!initiationDate) {
      localStorage.setItem('swal-initiation', "".concat(now));
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(function () {
        document.body.style.pointerEvents = 'none';
        var ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(function () {
          ukrainianAnthem.play()["catch"](function () {// ignore
          });
        }, 2500);
      }, 500);
    }
  } // Assign instance methods from src/instanceMethods/*.js to prototype


  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy; // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(function (key) {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }

      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.11.1';
  var Swal = SweetAlert; // @ts-ignore

  Swal["default"] = Swal;
  return Swal;
});

if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}

"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");

/***/ }),

/***/ 36060:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/paginator.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_PAGINATOR_DEFAULT_OPTIONS": () => (/* binding */ MAT_PAGINATOR_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PAGINATOR_INTL_PROVIDER": () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER),
/* harmony export */   "MAT_PAGINATOR_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_PAGINATOR_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatPaginator": () => (/* binding */ MatPaginator),
/* harmony export */   "MatPaginatorIntl": () => (/* binding */ MatPaginatorIntl),
/* harmony export */   "MatPaginatorModule": () => (/* binding */ MatPaginatorModule),
/* harmony export */   "PageEvent": () => (/* binding */ PageEvent),
/* harmony export */   "_MatPaginatorBase": () => (/* binding */ _MatPaginatorBase)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */

function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pageSizeOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pageSizeOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
  }
}

function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16)(1, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7._changePageSize($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("panelClass", ctx_r3.selectConfig.panelClass || "")("disableOptionCentering", ctx_r3.selectConfig.disableOptionCentering)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
  }
}

function MatPaginator_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.pageSize);
  }
}

function MatPaginator_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 8, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
  }
}

function MatPaginator_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.firstPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}

function MatPaginator_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.lastPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
  }
}

class MatPaginatorIntl {
  constructor() {
    /**
     * Stream to emit from when labels are changed. Use this to notify components when the labels have
     * changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A label for the page size selector. */

    this.itemsPerPageLabel = 'Items per page:';
    /** A label for the button that increments the current page. */

    this.nextPageLabel = 'Next page';
    /** A label for the button that decrements the current page. */

    this.previousPageLabel = 'Previous page';
    /** A label for the button that moves to the first page. */

    this.firstPageLabel = 'First page';
    /** A label for the button that moves to the last page. */

    this.lastPageLabel = 'Last page';
    /** A label for the range of items within the current page and the length of the whole list. */

    this.getRangeLabel = (page, pageSize, length) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} – ${endIndex} of ${length}`;
    };
  }

}

MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
  return new (t || MatPaginatorIntl)();
};

MatPaginatorIntl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatPaginatorIntl,
  factory: MatPaginatorIntl.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */


function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */


const MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The default page size if there is no page size and there are no provided page size options. */

const DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */

class PageEvent {}
/** Injection token that can be used to provide the default options for the paginator module. */


const MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to _MatPaginatorBase.

/** @docs-private */

const _MatPaginatorMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinInitialized)(class {}));
/**
 * Base class with all of the `MatPaginator` functionality.
 * @docs-private
 */


class _MatPaginatorBase extends _MatPaginatorMixinBase {
  constructor(_intl, _changeDetectorRef, defaults) {
    super();
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._pageIndex = 0;
    this._length = 0;
    this._pageSizeOptions = [];
    this._hidePageSize = false;
    this._showFirstLastButtons = false;
    /** Used to configure the underlying `MatSelect` inside the paginator. */

    this.selectConfig = {};
    /** Event emitted when the paginator changes the page size or page index. */

    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());

    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;

      if (pageSize != null) {
        this._pageSize = pageSize;
      }

      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }

      if (hidePageSize != null) {
        this._hidePageSize = hidePageSize;
      }

      if (showFirstLastButtons != null) {
        this._showFirstLastButtons = showFirstLastButtons;
      }
    }
  }
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */


  get pageIndex() {
    return this._pageIndex;
  }

  set pageIndex(value) {
    this._pageIndex = Math.max((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value), 0);

    this._changeDetectorRef.markForCheck();
  }
  /** The length of the total number of items that are being paginated. Defaulted to 0. */


  get length() {
    return this._length;
  }

  set length(value) {
    this._length = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);

    this._changeDetectorRef.markForCheck();
  }
  /** Number of items to display on a page. By default set to 50. */


  get pageSize() {
    return this._pageSize;
  }

  set pageSize(value) {
    this._pageSize = Math.max((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value), 0);

    this._updateDisplayedPageSizeOptions();
  }
  /** The set of provided page size options to display to the user. */


  get pageSizeOptions() {
    return this._pageSizeOptions;
  }

  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map(p => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(p));

    this._updateDisplayedPageSizeOptions();
  }
  /** Whether to hide the page size selection UI from the user. */


  get hidePageSize() {
    return this._hidePageSize;
  }

  set hidePageSize(value) {
    this._hidePageSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether to show the first/last buttons UI to the user. */


  get showFirstLastButtons() {
    return this._showFirstLastButtons;
  }

  set showFirstLastButtons(value) {
    this._showFirstLastButtons = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

  ngOnInit() {
    this._initialized = true;

    this._updateDisplayedPageSizeOptions();

    this._markInitialized();
  }

  ngOnDestroy() {
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */


  nextPage() {
    if (!this.hasNextPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;

    this._emitPageEvent(previousPageIndex);
  }
  /** Move back to the previous page if it exists. */


  previousPage() {
    if (!this.hasPreviousPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;

    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the first page if not already there. */


  firstPage() {
    // hasPreviousPage being false implies at the start
    if (!this.hasPreviousPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = 0;

    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the last page if not already there. */


  lastPage() {
    // hasNextPage being false implies at the end
    if (!this.hasNextPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages() - 1;

    this._emitPageEvent(previousPageIndex);
  }
  /** Whether there is a previous page. */


  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */


  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */


  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }

    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */


  _changePageSize(pageSize) {
    // Current page needs to be updated to reflect the new page size. Navigate to the page
    // containing the previous page's first item.
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;

    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */


  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */


  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */


  _updateDisplayedPageSizeOptions() {
    if (!this._initialized) {
      return;
    } // If no page size is provided, use the first page size option or the default page size.


    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }

    this._displayedPageSizeOptions = this.pageSizeOptions.slice();

    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    } // Sort the numbers using a number-specific sort function.


    this._displayedPageSizeOptions.sort((a, b) => a - b);

    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */


  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }

}

_MatPaginatorBase.ɵfac = function _MatPaginatorBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};

_MatPaginatorBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatPaginatorBase,
  inputs: {
    color: "color",
    pageIndex: "pageIndex",
    length: "length",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions",
    hidePageSize: "hidePageSize",
    showFirstLastButtons: "showFirstLastButtons",
    selectConfig: "selectConfig"
  },
  outputs: {
    page: "page"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatPaginatorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: MatPaginatorIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    length: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hidePageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showFirstLastButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */


class MatPaginator extends _MatPaginatorBase {
  constructor(intl, changeDetectorRef, defaults) {
    super(intl, changeDetectorRef, defaults);

    if (defaults && defaults.formFieldAppearance != null) {
      this._formFieldAppearance = defaults.formFieldAppearance;
    }
  }

}

MatPaginator.ɵfac = function MatPaginator_Factory(t) {
  return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
};

MatPaginator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatPaginator,
  selectors: [["mat-paginator"]],
  hostAttrs: ["role", "group", 1, "mat-paginator"],
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matPaginator"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 14,
  vars: 14,
  consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "appearance", "color"], [3, "value", "disabled", "panelClass", "disableOptionCentering", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
  template: function MatPaginator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
        return ctx.previousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
  styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{display:inline-block;width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-paginator',
      exportAs: 'matPaginator',
      inputs: ['disabled'],
      host: {
        'class': 'mat-paginator',
        'role': 'group'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [appearance]=\"_formFieldAppearance!\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [panelClass]=\"selectConfig.panelClass || ''\"\n          [disableOptionCentering]=\"selectConfig.disableOptionCentering\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{display:inline-block;width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}"]
    }]
  }], function () {
    return [{
      type: MatPaginatorIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatPaginatorModule {}

MatPaginatorModule.ɵfac = function MatPaginatorModule_Factory(t) {
  return new (t || MatPaginatorModule)();
};

MatPaginatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatPaginatorModule
});
MatPaginatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_PAGINATOR_INTL_PROVIDER],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatPaginator],
      declarations: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 92197:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/sort.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SORT_DEFAULT_OPTIONS": () => (/* binding */ MAT_SORT_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER": () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER),
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatSort": () => (/* binding */ MatSort),
/* harmony export */   "MatSortHeader": () => (/* binding */ MatSortHeader),
/* harmony export */   "MatSortHeaderIntl": () => (/* binding */ MatSortHeaderIntl),
/* harmony export */   "MatSortModule": () => (/* binding */ MatSortModule),
/* harmony export */   "matSortAnimations": () => (/* binding */ matSortAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

const _c0 = ["mat-sort-header", ""];

function MatSortHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3._disableViewStateAnimation = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6)(4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
  }
}

const _c1 = ["*"];

function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */


function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */


function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */


function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-sort`. */


const MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatSort.

/** @docs-private */

const _MatSortBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinInitialized)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(class {}));
/** Container for MatSortables to manage the sort state and provide default sort parameters. */


class MatSort extends _MatSortBase {
  constructor(_defaultOptions) {
    super();
    this._defaultOptions = _defaultOptions;
    /** Collection of all registered sortables that this directive manages. */

    this.sortables = new Map();
    /** Used to notify any child components listening to state changes. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overridden by the MatSortable's sort start.
     */

    this.start = 'asc';
    this._direction = '';
    /** Event emitted when the user changes either the active sort or sort direction. */

    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** The sort direction of the currently active MatSortable. */


  get direction() {
    return this._direction;
  }

  set direction(direction) {
    if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }

    this._direction = direction;
  }
  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the MatSortable's disable clear input.
   */


  get disableClear() {
    return this._disableClear;
  }

  set disableClear(v) {
    this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(v);
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */


  register(sortable) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }

      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }

    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */


  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */


  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }

    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */


  getNextSortDirection(sortable) {
    if (!sortable) {
      return '';
    } // Get the sort direction cycle with the potential sortable overrides.


    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }

    return sortDirectionCycle[nextDirectionIndex];
  }

  ngOnInit() {
    this._markInitialized();
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

}

MatSort.ɵfac = function MatSort_Factory(t) {
  return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
};

MatSort.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSort,
  selectors: [["", "matSort", ""]],
  hostAttrs: [1, "mat-sort"],
  inputs: {
    disabled: ["matSortDisabled", "disabled"],
    active: ["matSortActive", "active"],
    start: ["matSortStart", "start"],
    direction: ["matSortDirection", "direction"],
    disableClear: ["matSortDisableClear", "disableClear"]
  },
  outputs: {
    sortChange: "matSortChange"
  },
  exportAs: ["matSort"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matSort]',
      exportAs: 'matSort',
      host: {
        'class': 'mat-sort'
      },
      inputs: ['disabled: matSortDisabled']
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SORT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortActive']
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortStart']
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDirection']
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDisableClear']
    }],
    sortChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['matSortChange']
    }]
  });
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */


function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ['asc', 'desc'];

  if (start == 'desc') {
    sortOrder.reverse();
  }

  if (!disableClear) {
    sortOrder.push('');
  }

  return sortOrder;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationCurves.STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */

const matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('indicator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0px)'
  })), // 10px is the height of the sort indicator, minus the width of the pointers
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(10px)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('leftPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rightPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

  /** Animation that controls the arrow opacity. */
  arrowOpacity: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowOpacity', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0.54
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0
  })), // Transition between all states except for immediate transitions
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc, * => desc, * => active, * => hint, * => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowPosition', [// Hidden Above => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => desc-to-hint, * => desc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Below
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-desc, * => active-to-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  })]))), // Hidden Below => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc-to-hint, * => asc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Above
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-asc, * => active-to-asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-asc, active-to-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }))]),

  /** Necessary trigger that calls animate on children animations. */
  allowChildren: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('allowChildren', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animateChild)(), {
    optional: true
  })])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */

class MatSortHeaderIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

}

MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
  return new (t || MatSortHeaderIntl)();
};

MatSortHeaderIntl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatSortHeaderIntl,
  factory: MatSortHeaderIntl.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */


function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */


const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to the sort header.

/** @docs-private */

const _MatSortHeaderBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(class {});
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */


class MatSortHeader extends _MatSortHeaderBase {
  constructor(
  /**
   * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
   * @breaking-change 13.0.0
   */
  _intl, _changeDetectorRef, // `MatSort` is not optionally injected, but just asserted manually w/ better error.
  // tslint:disable-next-line: lightweight-tokens
  _sort, _columnDef, _focusMonitor, _elementRef,
  /** @breaking-change 14.0.0 _ariaDescriber will be required. */
  _ariaDescriber, defaultOptions) {
    // Note that we use a string token for the `_columnDef`, because the value is provided both by
    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
    // and we want to avoid having the sort header depending on the CDK table because
    // of this single reference.
    super();
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    /**
     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
     * provide an affordance that the header is sortable by showing on focus and hover.
     */

    this._showIndicatorHint = false;
    /**
     * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
     * position through the animation. If animations are currently disabled, the fromState is removed
     * so that there is no animation displayed.
     */

    this._viewState = {};
    /** The direction the arrow should be facing according to the current state. */

    this._arrowDirection = '';
    /**
     * Whether the view state animation should show the transition between the `from` and `to` states.
     */

    this._disableViewStateAnimation = false;
    /** Sets the position of the arrow that displays when sorted. */

    this.arrowPosition = 'after'; // Default the action description to "Sort" because it's better than nothing.
    // Without a description, the button's label comes from the sort header text content,
    // which doesn't give any indication that it performs a sorting operation.

    this._sortActionDescription = 'Sort';

    if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }

    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }

    this._handleStateChanges();
  }
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */


  get sortActionDescription() {
    return this._sortActionDescription;
  }

  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


  get disableClear() {
    return this._disableClear;
  }

  set disableClear(v) {
    this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(v);
  }

  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    } // Initialize the direction of the arrow and set the view state to be immediately that state.


    this._updateArrowDirection();

    this._setAnimationTransitionState({
      toState: this._isSorted() ? 'active' : this._arrowDirection
    });

    this._sort.register(this);

    this._sortButton = this._elementRef.nativeElement.querySelector('.mat-sort-header-container');

    this._updateSortActionDescription(this._sortActionDescription);
  }

  ngAfterViewInit() {
    // We use the focus monitor because we also want to style
    // things differently based on the focus origin.
    this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      const newState = !!origin;

      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);

        this._changeDetectorRef.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    this._sort.deregister(this);

    this._rerenderSubscription.unsubscribe();
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */


  _setIndicatorHintVisible(visible) {
    // No-op if the sort header is disabled - should not make the hint visible.
    if (this._isDisabled() && visible) {
      return;
    }

    this._showIndicatorHint = visible;

    if (!this._isSorted()) {
      this._updateArrowDirection();

      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'hint'
        });
      } else {
        this._setAnimationTransitionState({
          fromState: 'hint',
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */


  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {}; // If the animation for arrow position state (opacity/translation) should be disabled,
    // remove the fromState so that it jumps right to the toState.

    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */


  _toggleOnInteraction() {
    this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
      this._disableViewStateAnimation = true;
    }
  }

  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }

  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER)) {
      event.preventDefault();

      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */


  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */


  _getArrowDirectionState() {
    return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */


  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */


  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }

  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */


  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return 'none';
    }

    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }
  /** Whether the arrow inside the sort header should be rendered. */


  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }

  _updateSortActionDescription(newDescription) {
    // We use AriaDescriber for the sort button instead of setting an `aria-label` because some
    // screen readers (notably VoiceOver) will read both the column header *and* the button's label
    // for every *cell* in the table, creating a lot of unnecessary noise.
    // If _sortButton is undefined, the component hasn't been initialized yet so there's
    // nothing to update in the DOM.
    if (this._sortButton) {
      // removeDescription will no-op if there is no existing message.
      // TODO(jelbourn): remove optional chaining when AriaDescriber is required.
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }

    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */


  _handleStateChanges() {
    this._rerenderSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection(); // Do not show the animation if the header was already shown in the right position.


        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
          this._disableViewStateAnimation = true;
        }

        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'active'
        });

        this._showIndicatorHint = false;
      } // If this header was recently active and now no longer sorted, animate away the arrow.


      if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
        this._disableViewStateAnimation = false;

        this._setAnimationTransitionState({
          fromState: 'active',
          toState: this._arrowDirection
        });
      }

      this._changeDetectorRef.markForCheck();
    });
  }

}

MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
  return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
};

MatSortHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSortHeader,
  selectors: [["", "mat-sort-header", ""]],
  hostAttrs: [1, "mat-sort-header"],
  hostVars: 3,
  hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
        return ctx._handleClick();
      })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(true);
      })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(false);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
    }
  },
  inputs: {
    disabled: "disabled",
    id: ["mat-sort-header", "id"],
    arrowPosition: "arrowPosition",
    start: "start",
    sortActionDescription: "sortActionDescription",
    disableClear: "disableClear"
  },
  exportAs: ["matSortHeader"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 7,
  consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
  template: function MatSortHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
  encapsulation: 2,
  data: {
    animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-sort-header]',
      exportAs: 'matSortHeader',
      host: {
        'class': 'mat-sort-header',
        '(click)': '_handleClick()',
        '(keydown)': '_handleKeydown($event)',
        '(mouseenter)': '_setIndicatorHintVisible(true)',
        '(mouseleave)': '_setIndicatorHintVisible(false)',
        '[attr.aria-sort]': '_getAriaSortAttribute()',
        '[class.mat-sort-header-disabled]': '_isDisabled()'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition === 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     [attr.role]=\"_isDisabled() ? null : 'button'\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }], function () {
    return [{
      type: MatSortHeaderIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatSort,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['MAT_SORT_HEADER_COLUMN_DEF']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SORT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-sort-header']
    }],
    arrowPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortActionDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSortModule {}

MatSortModule.ɵfac = function MatSortModule_Factory(t) {
  return new (t || MatSortModule)();
};

MatSortModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSortModule
});
MatSortModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      exports: [MatSort, MatSortHeader],
      declarations: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_Pages_Competencia_competencia_module_ts.js.map