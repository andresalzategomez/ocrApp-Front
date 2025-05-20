"use strict";
(self["webpackChunkembryo"] = self["webpackChunkembryo"] || []).push([["common"],{

/***/ 25067:
/*!*********************************************************!*\
  !*** ./src/app/Pages/Atleta/services/atleta.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtletaService": () => (/* binding */ AtletaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);




class AtletaService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_destino + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_OCR;
    }
    saveAtleta(parameter) {
        return this._httpClient.post(`${this.apiUrl}/createAtleta`, {
            "nombre_atleta": parameter.nombre_atleta,
            "id_categoria": parameter.id_categoria,
            "id_competencia": parameter.id_competencia,
            "no_atleta": parameter.no_atleta,
            "no_oleada": parameter.no_oleada,
            "id_usuario": parameter.id_usuario,
            "estado": parameter.estado,
            "talla": parameter.talla,
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
    enviarEmail(usuario, parameter, competencia, categoria, isRegistro, subject) {
        return this._httpClient.post(`${this.apiUrl}/enviarEmail`, {
            "atleta": parameter,
            "usuario": usuario,
            "competencia": competencia,
            "categoria": categoria,
            "subject": subject,
            "isRegistro": isRegistro,
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
    updateAtleta(parameter) {
        return this._httpClient.post(`${this.apiUrl}/updateAtleta`, {
            "id": parameter.id,
            "nombre_atleta": parameter.nombre_atleta,
            "id_categoria": parameter.id_categoria,
            "id_competencia": parameter.id_competencia,
            "no_atleta": parameter.no_atleta,
            "no_oleada": parameter.no_oleada,
            "estado": parameter.estado,
            "talla": parameter.talla,
            "tiempo_competencia": parameter.tiempo_competencia,
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
    asignarTiempoAtleta(parameter) {
        return this._httpClient.post(`${this.apiUrl}/asignarTiempoAtleta`, {
            "id": parameter.id,
            "tiempo_competencia": parameter.tiempo_competencia,
            "estado": parameter.estado,
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
    getCategoriaByCompetenciaId(idCompetencia) {
        return this._httpClient.post(`${this.apiUrl}/getCategoriaByCompetenciaId`, {
            "idCompetencia": idCompetencia,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.categoria;
        }));
    }
    getCountAtletasByCompetencia(idCompetencia) {
        return this._httpClient.post(`${this.apiUrl}/getCountAtletasByCompetencia`, {
            "idCompetencia": idCompetencia,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.atletas;
        }));
    }
    getAtletaByCompetencia(idCompetencia) {
        return this._httpClient.post(`${this.apiUrl}/getAtletaByCompetencia`, {
            "id": idCompetencia,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.atleta;
        }));
    }
}
AtletaService.ɵfac = function AtletaService_Factory(t) { return new (t || AtletaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AtletaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AtletaService, factory: AtletaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 22390:
/*!***************************************************************!*\
  !*** ./src/app/Pages/Categoria/services/categoria.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaService": () => (/* binding */ CategoriaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);




class CategoriaService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_destino + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_OCR;
    }
    saveCategoria(parameter) {
        return this._httpClient.post(`${this.apiUrl}/createCategoria`, {
            "nombre": parameter.nombre,
            "descripcion": parameter.descripcion,
            "idCompetencia": parameter.id_competencia,
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
    updateCategoria(parameter) {
        return this._httpClient.post(`${this.apiUrl}/updateCategoria`, {
            "id": parameter.id,
            "nombre": parameter.nombre,
            "descripcion": parameter.descripcion,
            "no_oleada": parameter.no_oleada,
            "idCompetencia": parameter.id_competencia,
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
    getCompetenciasInicio() {
        return this._httpClient.post(`${this.apiUrl}/getCompetenciasInicio`, {
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
    getCompetenciasPorAprobar() {
        return this._httpClient.post(`${this.apiUrl}/getCompetenciasPorAprobar`, {
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
    getCompetenciasPorAprobarLiga() {
        return this._httpClient.post(`${this.apiUrl}/getCompetenciasPorAprobarLiga`, {
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
    getCompetenciasFinalizadas() {
        return this._httpClient.post(`${this.apiUrl}/getCompetenciasFinalizadas`, {
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
    getCategoria() {
        return this._httpClient.post(`${this.apiUrl}/getCategoria`, {
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.categoria;
        }));
    }
    getCategoriaByCompetencia(idCompetencia) {
        return this._httpClient.post(`${this.apiUrl}/getCategoriaByCompetencia`, {
            "idCompetencia": idCompetencia,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.categoria;
        }));
    }
    cambiarAprobadoLiga(aprobado, id) {
        return this._httpClient.post(`${this.apiUrl}/cambiarAprobadoLiga`, {
            "id": id,
            "aprobado": aprobado,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.categoria;
        }));
    }
    cambiarAprobado(aprobado, id) {
        return this._httpClient.post(`${this.apiUrl}/cambiarAprobado`, {
            "id": id,
            "aprobado": aprobado,
            "tenant": _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tenant
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.response === 'OK')
                return data.categoria;
        }));
    }
}
CategoriaService.ɵfac = function CategoriaService_Factory(t) { return new (t || CategoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
CategoriaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoriaService, factory: CategoriaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35041:
/*!*********************************************************************!*\
  !*** ./src/app/Pages/Competencia/services/departamentos.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartamentosService": () => (/* binding */ DepartamentosService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);




class DepartamentosService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_api_colombia;
    }
    getDepartamento() {
        return this._httpClient.get(`${this.apiUrl}/Department`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.length > 0)
                return data;
        }));
    }
    getMunicipios() {
        return this._httpClient.get(`${this.apiUrl}/City`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            console.error('error', error);
            if (error.status === 200)
                return error.message;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            if (data.length > 0)
                return data;
        }));
    }
}
DepartamentosService.ɵfac = function DepartamentosService_Factory(t) { return new (t || DepartamentosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
DepartamentosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DepartamentosService, factory: DepartamentosService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map