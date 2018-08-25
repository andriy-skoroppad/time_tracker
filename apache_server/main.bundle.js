webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head{\r\n\theight: auto;\r\n  min-height: 60px;\r\n\tborder-bottom: 1px solid black;\r\n\tpadding: 5px;\r\n  -webkit-box-ordinal-group: 2;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\t.head_setting{\r\n    -webkit-box-ordinal-group: 4;\r\n        -ms-flex-order: 3;\r\n            order: 3;\r\n    height: 42px;\r\n    width: 42px;\r\n    margin: 10px;\r\n\t}\r\n\t.head_setting .large{\r\n    font-size: 40px;\r\n    width: 100%;\r\n\t}\r\n\t.head_main{\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    font-size: 20px;\r\n    line-height: 62px;\r\n\t}\r\n\t.head_info-time{\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n    display: inline-block;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\t.main-content{\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\t.main-content > router-outlet + *{\r\n    height: 100%;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"head\">\r\n  <a mat-button routerLink=\"\" class=\"head_main\">Main</a>\r\n  <timer-value class=\"head_info-time\"></timer-value>\r\n  <a class=\"head_setting\" mat-icon-button routerLink=\"/setting\"><mat-icon class=\"large\">settings</mat-icon></a>\r\n</div>\r\n<div class=\"main-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!-- <div class=\"footer\">\r\n  Some Footer\r\n</div> -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(TimerService) {
        this.TimerService = TimerService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.TimerService.startTimer();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__timer_timer_service__["a" /* TimerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setting_main_setting_main_component__ = __webpack_require__("../../../../../src/app/setting-main/setting-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popups_delete_popup_delete_component__ = __webpack_require__("../../../../../src/app/popups/delete/popup-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popups_edit_popup_edit_component__ = __webpack_require__("../../../../../src/app/popups/edit/popup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popups_edit_quick_task_popup_edit_quick_task_component__ = __webpack_require__("../../../../../src/app/popups/edit-quick-task/popup-edit-quick-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popups_edit_description_popup_edit_description_component__ = __webpack_require__("../../../../../src/app/popups/edit-description/popup-edit-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popups_edit_project_popup_edit_project_component__ = __webpack_require__("../../../../../src/app/popups/edit-project/popup-edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__setting_main_user_setting_user_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/user-setting/user-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__setting_main_user_setting_popup_popup_component__ = __webpack_require__("../../../../../src/app/setting-main/user-setting/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setting_main_task_setting_task_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/task-setting/task-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__setting_main_projects_setting_projects_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/projects-setting/projects-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__setting_main_colleges_setting_colleges_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__timer_timer_component__ = __webpack_require__("../../../../../src/app/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_icon_canvas_service__ = __webpack_require__("../../../../../src/app/service/icon-canvas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__popups_conection_popup_conection_component__ = __webpack_require__("../../../../../src/app/popups/conection/popup-conection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__popups_edit_time_popup_edit_time_component__ = __webpack_require__("../../../../../src/app/popups/edit-time/popup-edit-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularx_qrcode__ = __webpack_require__("../../../../angularx-qrcode/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__popups_qrcode_popup_qrcode_component__ = __webpack_require__("../../../../../src/app/popups/qrcode/popup-qrcode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_sinc_service__ = __webpack_require__("../../../../../src/app/service/sinc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__sinc_page_sinc_page_component__ = __webpack_require__("../../../../../src/app/sinc-page/sinc-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__setting_main_setting_main_component__["a" /* SettingMainComponent */],
                __WEBPACK_IMPORTED_MODULE_14__setting_main_user_setting_user_setting_component__["a" /* UserSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__setting_main_task_setting_task_setting_component__["a" /* TaskSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__setting_main_projects_setting_projects_setting_component__["a" /* ProjectsSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__setting_main_colleges_setting_colleges_setting_component__["a" /* CollegesSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__setting_main_user_setting_popup_popup_component__["a" /* EditNamePopup */],
                __WEBPACK_IMPORTED_MODULE_9__popups_delete_popup_delete_component__["a" /* DeletePopup */],
                __WEBPACK_IMPORTED_MODULE_10__popups_edit_popup_edit_component__["a" /* EditPopup */],
                __WEBPACK_IMPORTED_MODULE_11__popups_edit_quick_task_popup_edit_quick_task_component__["a" /* EditQuickTaskPopup */],
                __WEBPACK_IMPORTED_MODULE_12__popups_edit_description_popup_edit_description_component__["a" /* EditDescriptionPopup */],
                __WEBPACK_IMPORTED_MODULE_13__popups_edit_project_popup_edit_project_component__["a" /* EditProjectPopup */],
                __WEBPACK_IMPORTED_MODULE_23__popups_conection_popup_conection_component__["a" /* ConnectionPopup */],
                __WEBPACK_IMPORTED_MODULE_24__popups_edit_time_popup_edit_time_component__["a" /* EditTimePopup */],
                __WEBPACK_IMPORTED_MODULE_28__popups_qrcode_popup_qrcode_component__["a" /* QrcodePopup */],
                __WEBPACK_IMPORTED_MODULE_19__timer_timer_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__sinc_page_sinc_page_component__["a" /* SincPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27_angularx_qrcode__["a" /* QRCodeModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__setting_main_user_setting_popup_popup_component__["a" /* EditNamePopup */],
                __WEBPACK_IMPORTED_MODULE_9__popups_delete_popup_delete_component__["a" /* DeletePopup */],
                __WEBPACK_IMPORTED_MODULE_10__popups_edit_popup_edit_component__["a" /* EditPopup */],
                __WEBPACK_IMPORTED_MODULE_11__popups_edit_quick_task_popup_edit_quick_task_component__["a" /* EditQuickTaskPopup */],
                __WEBPACK_IMPORTED_MODULE_12__popups_edit_description_popup_edit_description_component__["a" /* EditDescriptionPopup */],
                __WEBPACK_IMPORTED_MODULE_13__popups_edit_project_popup_edit_project_component__["a" /* EditProjectPopup */],
                __WEBPACK_IMPORTED_MODULE_23__popups_conection_popup_conection_component__["a" /* ConnectionPopup */],
                __WEBPACK_IMPORTED_MODULE_24__popups_edit_time_popup_edit_time_component__["a" /* EditTimePopup */],
                __WEBPACK_IMPORTED_MODULE_28__popups_qrcode_popup_qrcode_component__["a" /* QrcodePopup */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_21__timer_timer_service__["a" /* TimerService */], __WEBPACK_IMPORTED_MODULE_22__service_icon_canvas_service__["a" /* IconCanvasService */], __WEBPACK_IMPORTED_MODULE_25__service_api_service__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_29__service_sinc_service__["a" /* Sinc */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order-class{\r\n  -webkit-box-ordinal-group: 2;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n}\r\n.title-text{\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n.list-task{\r\n\r\n  position: relative;\r\n}\r\n.list-task_row__with-date{\r\n  margin-top: 25px;\r\n}\r\n.list-task_date{\r\n  display: none;\r\n}\r\n.list-task_row__border-bottom{\r\n  border-bottom: 1px solid black;\r\n}\r\n.list-task_row__with-date .list-task_date{\r\n  display: block;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: 20px;\r\n  font-style: italic;\r\n}\r\n.list-task+.list-task{\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.list-task_row__head{\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.head-list .mat-list-item{\r\n  border-left: 1px solid black;\r\n}\r\n.head-list .list-task_start{\r\n  text-decoration: none;\r\n}\r\n.scroll-list{\r\n  border-width: 1px 0 1px 1px;\r\n  border-color: black;\r\n  border-style: solid;\r\n  -webkit-box-shadow: 0px 14px 23px -4px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 14px 23px -4px rgba(0,0,0,0.75);\r\n}\r\n.list-task_row{\r\n\ttext-align: center;\r\n\tborder-top: 1px solid black;\r\n}\r\n.list-task_time{\r\n\tdisplay: inline-block;\r\n\twidth: 33%\r\n}\r\n.list-task_times{\r\n\tdisplay: inline-block;\r\n\twidth: 66%;\r\n}\r\n.list-task_tasks{\r\n\tdisplay: inline-block;\r\n\twidth: 33%;\r\n}\r\n.list-task_row__cheked{\r\n  background-color: beige;\r\n}\r\n.list-task_deskription{\r\n\tdisplay: inline-block;\r\n\twidth: 32%;\r\n  cursor: pointer;\r\n}\r\n.list-task_start{\r\n\twhite-space: nowrap;\r\n  \toverflow: hidden;\r\n  \ttext-overflow: ellipsis;\r\n\tdisplay: inline-block;\r\n\twidth: 48%;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n.list-task_end{\r\n\twhite-space: nowrap;\r\n  \toverflow: hidden;\r\n  \ttext-overflow: ellipsis;\r\n\tdisplay: inline-block;\r\n\twidth: 48%\r\n}\r\n.list-task_spend{\r\n\tdisplay: inline-block;\r\n\twidth: 32%;\r\n  cursor: pointer;\r\n}\r\n.bold{\r\n  font-weight: bold;\r\n}\r\n.list-task_project{\r\n\twhite-space: nowrap;\r\n  \toverflow: hidden;\r\n  \ttext-overflow: ellipsis;\r\n\tdisplay: inline-block;\r\n\twidth: 48%;\r\n  cursor: pointer;\r\n}\r\n.list-task_task{\r\n\tdisplay: inline-block;\r\n\twidth: 48%;\r\n  cursor: pointer;\r\n}\r\n@media (max-width:800px){\r\n   .list-task_time{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 40%\r\n\t}\r\n\t.list-task_times{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 48%\r\n\t}\r\n\r\n\t.list-task_task{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 25%\r\n\t}\r\n\t.list-task_deskription{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 30%\r\n\t}\r\n\r\n\t.list-task_start{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 100%\r\n\t}\r\n\t.list-task_end{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 100%\r\n\t}\r\n\t.list-task_spend{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 45%\r\n\t}\r\n\t.list-task_project{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 100%\r\n\t}\r\n\t.list-task_task{\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 100%\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"order-class title-text\">List of time track</p>\r\n<div class=\"order-class\">\r\n\t<button mat-raised-button\r\n          color=\"primary\"\r\n          (click)=\"startNewTask()\">Start</button>\r\n  <!--<button mat-raised-button (click)=\"synchronization()\">Synchronization</button>-->\r\n  <button mat-raised-button\r\n          color=\"warn\"\r\n          class=\"right\"\r\n          (click)=\"getData()\">Get Data</button>\r\n  <button mat-raised-button\r\n          color=\"warn\"\r\n          class=\"right\"\r\n          (click)=\"openQrcodePopup()\">sinc</button>\r\n  <button mat-raised-button\r\n          color=\"warn\"\r\n          class=\"right\"\r\n          (click)=\"cleareLocalSroreTrack()\">Clear All</button>\r\n</div>\r\n\r\n<mat-list role=\"list\" class=\"order-class list-task head-list\">\r\n  <mat-list-item class=\"list-task_row\" role=\"listitem\">\r\n    <div class=\"list-task_time\">\r\n      <div class=\"list-task_times\">\r\n        <span class=\"list-task_start\">Start</span>\r\n        <span class=\"list-task_end\">End</span>\r\n      </div>\r\n      <span class=\"list-task_spend\">Spend</span>\r\n    </div>\r\n    <div class=\"list-task_tasks\">\r\n      <span class=\"list-task_project\">Project</span>\r\n      <span class=\"list-task_task\">Task</span>\r\n    </div>\r\n    <div class=\"list-task_deskription\">\r\n      Description\r\n    </div>\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n<mat-list role=\"list\" class=\"order-class list-task scroll-list\">\r\n\r\n  <mat-list-item class=\"list-task_row\"\r\n                 role=\"listitem\"\r\n                 *ngFor=\"let task of list; index as i\"\r\n                 [ngClass]=\"{'list-task_row__cheked': task.isMarked,\r\n                              'list-task_row__with-date': ( i=== 0 || task.date !== list[i-1].date),\r\n                              'list-task_row__border-bottom': ( i + 1 !== list.length && task.date !== list[i+1].date)}\">\r\n    <div class=\"list-task_date\">\r\n      {{task.date}}\r\n    </div>\r\n  \t<div class=\"list-task_time\">\r\n  \t\t<div class=\"list-task_times\">\r\n  \t\t\t<span class=\"list-task_start\" (click)=\"editStartTime(task, list[i - 1] )\" >{{task.startString}}</span>\r\n\t\t\t<span class=\"list-task_end\" >{{task.endString}}</span>\r\n  \t\t</div>\r\n\t\t<span class=\"list-task_spend bold\" (click)=\"checkAsMarked(task)\" >{{task.spendString}}</span>\r\n  \t</div>\r\n  \t<div class=\"list-task_tasks\">\r\n\t\t<span class=\"list-task_project\" (click)=\"editProject(task)\">{{task.project}}</span>\r\n\t\t<span class=\"list-task_task\" (click)=\"editTask(task)\">{{task.tasck}}</span>\r\n  \t</div>\r\n  \t<div class=\"list-task_deskription\" (click)=\"editDescription(task)\">\r\n\t\t  {{task.description}}\r\n  \t</div>\r\n  </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__ = __webpack_require__("../../../../../src/app/popups/edit/popup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_edit_description_popup_edit_description_component__ = __webpack_require__("../../../../../src/app/popups/edit-description/popup-edit-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_edit_project_popup_edit_project_component__ = __webpack_require__("../../../../../src/app/popups/edit-project/popup-edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popups_conection_popup_conection_component__ = __webpack_require__("../../../../../src/app/popups/conection/popup-conection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popups_edit_time_popup_edit_time_component__ = __webpack_require__("../../../../../src/app/popups/edit-time/popup-edit-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popups_qrcode_popup_qrcode_component__ = __webpack_require__("../../../../../src/app/popups/qrcode/popup-qrcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(Localstore, api, dialog, TimerService) {
        this.Localstore = Localstore;
        this.api = api;
        this.dialog = dialog;
        this.TimerService = TimerService;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.list = this.Localstore.getAllList() || [];
    };
    MainPageComponent.prototype.startNewTask = function () {
        var timeConfig = this.TimerService.timeConfig;
        var dayDateConfig = { year: 'numeric', month: 'numeric', day: 'numeric' };
        if (this.list.length) {
            this.list[this.list.length - 1].end = +(new Date());
            this.list[this.list.length - 1].spend = this.list[this.list.length - 1].end - this.list[this.list.length - 1].start;
            this.list[this.list.length - 1].endString = (new Date(this.list[this.list.length - 1].end)).toLocaleString("ru", timeConfig);
            this.list[this.list.length - 1].spendString = this.TimerService.toTime(this.list[this.list.length - 1].spend / 1000).string;
            this.list.push({
                id: +(new Date()),
                start: +(new Date()),
                startString: (new Date()).toLocaleString("ru", timeConfig),
                end: null,
                endString: "-",
                spend: 0,
                spendString: "-",
                project: "-",
                tasck: "-",
                description: "-",
                date: (new Date()).toLocaleString("ru", dayDateConfig),
                isMarked: false,
                lastUpdate: +(new Date())
            });
        }
        else {
            this.list.push({
                id: +(new Date()),
                start: +(new Date()),
                startString: (new Date()).toLocaleString("ru", timeConfig),
                end: null,
                endString: "-",
                spend: 0,
                spendString: "-",
                project: "-",
                tasck: "-",
                description: "-",
                date: (new Date()).toLocaleString("ru", dayDateConfig),
                isMarked: false,
                lastUpdate: +(new Date())
            });
        }
        this.TimerService.clearTimer();
        this.TimerService.startTimer(this.list);
        this.Localstore.setAllList(this.list);
    };
    MainPageComponent.prototype.editTask = function (listItem) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__["a" /* EditPopup */], {
            // width: '300px',
            data: { text: "Enter task", value: (listItem.tasck !== "-" ? listItem.tasck : "") }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                listItem.tasck = result || "-";
                listItem.lastUpdate = +(new Date());
                _this.Localstore.setAllList(_this.list);
            }
        });
    };
    MainPageComponent.prototype.editDescription = function (listItem) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popups_edit_description_popup_edit_description_component__["a" /* EditDescriptionPopup */], {
            // width: '300px',
            data: { value: (listItem.description !== "-" ? listItem.description : "") }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                listItem.description = result || "-";
                listItem.lastUpdate = +(new Date());
                _this.Localstore.setAllList(_this.list);
            }
        });
    };
    MainPageComponent.prototype.editProject = function (listItem) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__popups_edit_project_popup_edit_project_component__["a" /* EditProjectPopup */], {
            // width: '300px',
            data: { value: (listItem.project !== "-" ? listItem.project : "") }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                listItem.project = result || "-";
                listItem.lastUpdate = +(new Date());
                _this.Localstore.setAllList(_this.list);
            }
        });
    };
    MainPageComponent.prototype.checkAsMarked = function (listItem) {
        listItem.isMarked = !listItem.isMarked;
        listItem.lastUpdate = +(new Date());
        this.Localstore.setAllList(this.list);
    };
    MainPageComponent.prototype.cleareLocalSroreTrack = function () {
        this.list = [];
        this.Localstore.clear("track");
        this.TimerService.clearTimer();
    };
    MainPageComponent.prototype.synchronization = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__popups_conection_popup_conection_component__["a" /* ConnectionPopup */], {
            // width: '300px',
            data: ""
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    MainPageComponent.prototype.editStartTime = function (listItem, prewListItem) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__popups_edit_time_popup_edit_time_component__["a" /* EditTimePopup */], {
            // width: '300px',
            data: {
                timeConfig: this.TimerService.timeConfig,
                thisStart: listItem.start,
                prewStart: (prewListItem ? prewListItem.start : 0)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
                listItem.start = +result;
                listItem.startString = result.toLocaleString("ru", _this.TimerService.timeConfig);
                _this.recalculationTable();
                _this.Localstore.setAllList(_this.list);
                _this.TimerService.clearTimer();
                _this.TimerService.startTimer(_this.list);
            }
        });
    };
    MainPageComponent.prototype.recalculationTable = function () {
        for (var i = 0; i < this.list.length; i++) {
            if (i > 0) {
                this.list[i - 1].end = this.list[i].start;
                this.list[i - 1].spend = this.list[i - 1].end - this.list[i - 1].start;
                this.list[i - 1].endString = (new Date(this.list[i - 1].end)).toLocaleString("ru", this.TimerService.timeConfig);
                this.list[i - 1].spendString = this.TimerService.toTime(this.list[i - 1].spend / 1000).string;
            }
        }
        console.log(this.list);
    };
    MainPageComponent.prototype.openQrcodePopup = function () {
        var _this = this;
        // this.api.setData(21589, {dsd: 12});
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__popups_qrcode_popup_qrcode_component__["a" /* QrcodePopup */], {
            // width: '300px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.list = _this.Localstore.getAllList() || [];
        });
    };
    MainPageComponent.prototype.getData = function () {
        this.api.getDataById(1);
    };
    MainPageComponent.prototype.ngOnDestroy = function () {
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_9__service_api_service__["a" /* Api */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__["a" /* EditPopup */],
                __WEBPACK_IMPORTED_MODULE_4__popups_edit_description_popup_edit_description_component__["a" /* EditDescriptionPopup */],
                __WEBPACK_IMPORTED_MODULE_5__popups_edit_project_popup_edit_project_component__["a" /* EditProjectPopup */],
                __WEBPACK_IMPORTED_MODULE_7__popups_conection_popup_conection_component__["a" /* ConnectionPopup */],
                __WEBPACK_IMPORTED_MODULE_8__popups_edit_time_popup_edit_time_component__["a" /* EditTimePopup */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_9__service_api_service__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__timer_timer_service__["a" /* TimerService */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popups/conection/popup-conection.component.html":
/***/ (function(module, exports) {

module.exports = " <h1 mat-dialog-title>Synchronization</h1>\r\n<div mat-dialog-content>\r\n  <div>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Enter description\" cdkFocusInitial [(ngModel)]=\"yorSertificate\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <button mat-raised-button (click)=\"init()\">Start</button>\r\n  <button mat-raised-button (click)=\"init2()\">aaaa</button>\r\n  <button mat-raised-button (click)=\"closeDataChannels()\">close</button>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/popups/conection/popup-conection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConnectionPopup = /** @class */ (function () {
    function ConnectionPopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.yorSertificate = "";
    }
    ConnectionPopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    // myPeerConnection: any = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    ConnectionPopup.prototype.init = function () {
        // createConnection();
    };
    ConnectionPopup.prototype.init2 = function () {
        // sendData(this.yorSertificate)
    };
    ConnectionPopup.prototype.closeDataChannels = function () {
        // closeDataChannels()
    };
    ConnectionPopup.prototype.ngOnInit = function () {
        console.log("on init popup");
    };
    ConnectionPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-conection-component',
            template: __webpack_require__("../../../../../src/app/popups/conection/popup-conection.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], ConnectionPopup);
    return ConnectionPopup;
}());

/*


var localConnection;
var remoteConnection;
var sendChannel;
var receiveChannel;
var dataConstraint;
// var dataChannelSend = document.querySelector('textarea#dataChannelSend');
// var dataChannelReceive = document.querySelector('textarea#dataChannelReceive');
// var startButton = document.querySelector('button#startButton');
// var sendButton = document.querySelector('button#sendButton');
// var closeButton = document.querySelector('button#closeButton');
function trace(text){
  console.log(text)
}
// startButton.onclick = createConnection;
// sendButton.onclick = sendData;
// closeButton.onclick = closeDataChannels;

// function enableStartButton() {
//   startButton.disabled = false;
// }

// function disableSendButton() {
//   sendButton.disabled = true;
// }

function createConnection() {
  // dataChannelSend.placeholder = '';
  var servers = null;
  dataConstraint = null;
  trace('Using SCTP based data channels');
  // SCTP is supported from Chrome 31 and is supported in FF.
  // No need to pass DTLS constraint as it is on by default in Chrome 31.
  // For SCTP, reliable and ordered is true by default.
  // Add localConnection to global scope to make it visible
  // from the browser console.
  window.localConnection = localConnection =
    new RTCPeerConnection(servers);
  trace('Created local peer connection object localConnection');

  sendChannel = localConnection.createDataChannel('sendDataChannel',
    dataConstraint);
  trace('Created send data channel');

  localConnection.onicecandidate = function(e) {
    onIceCandidate(localConnection, e);
  };
  sendChannel.onopen = onSendChannelStateChange;
  sendChannel.onclose = onSendChannelStateChange;

  // Add remoteConnection to global scope to make it visible
  // from the browser console.
  window.remoteConnection = remoteConnection =
    new RTCPeerConnection(servers);
  trace('Created remote peer connection object remoteConnection');

  remoteConnection.onicecandidate = function(e) {
    onIceCandidate(remoteConnection, e);
  };
  remoteConnection.ondatachannel = receiveChannelCallback;

  localConnection.createOffer().then(
    gotDescription1,
    onCreateSessionDescriptionError
  );
  // startButton.disabled = true;
  // closeButton.disabled = false;
}

function onCreateSessionDescriptionError(error) {
  trace('Failed to create session description: ' + error.toString());
}

function sendData(data) {
  // var data = dataChannelSend.value;
  sendChannel.send(data);
  trace('Sent Data: ' + data);
}

function closeDataChannels() {
  trace('Closing data channels');
  sendChannel.close();
  trace('Closed data channel with label: ' + sendChannel.label);
  receiveChannel.close();
  trace('Closed data channel with label: ' + receiveChannel.label);
  localConnection.close();
  remoteConnection.close();
  localConnection = null;
  remoteConnection = null;
  trace('Closed peer connections');
  // startButton.disabled = false;
  // sendButton.disabled = true;
  // closeButton.disabled = true;
  // dataChannelSend.value = '';
  // dataChannelReceive.value = '';
  // dataChannelSend.disabled = true;
  // disableSendButton();
  // enableStartButton();
}

function gotDescription1(desc) {
  localConnection.setLocalDescription(desc);
  trace('Offer from localConnection \n' + desc.sdp);
  remoteConnection.setRemoteDescription(desc);
  remoteConnection.createAnswer().then(
    gotDescription2,
    onCreateSessionDescriptionError
  );
}

function gotDescription2(desc) {
  remoteConnection.setLocalDescription(desc);
  trace('Answer from remoteConnection \n' + desc.sdp);
  localConnection.setRemoteDescription(desc);
}

function getOtherPc(pc) {
  return (pc === localConnection) ? remoteConnection : localConnection;
}

function getName(pc) {
  return (pc === localConnection) ? 'localPeerConnection' :
    'remotePeerConnection';
}

function onIceCandidate(pc, event) {
  getOtherPc(pc).addIceCandidate(event.candidate)
    .then(
      function() {
        // onAddIceCandidateSuccess(pc);
      },
      function(err) {
        // onAddIceCandidateError(pc, err);
      }
    );
  trace(getName(pc) + ' ICE candidate: \n' + (event.candidate ?
    event.candidate.candidate : '(null)'));
}

function onAddIceCandidateSuccess() {
  trace('AddIceCandidate success.');
}

function onAddIceCandidateError(error) {
  trace('Failed to add Ice Candidate: ' + error.toString());
}

function receiveChannelCallback(event) {
  trace('Receive Channel Callback');
  receiveChannel = event.channel;
  receiveChannel.onmessage = onReceiveMessageCallback;
  receiveChannel.onopen = onReceiveChannelStateChange;
  receiveChannel.onclose = onReceiveChannelStateChange;
}

function onReceiveMessageCallback(event) {
  trace('Received Message');
  console.log(event);
  // dataChannelReceive.value = event.data;
}

function onSendChannelStateChange() {
  var readyState = sendChannel.readyState;
  trace('Send channel state is: ' + readyState);
  if (readyState === 'open') {
    // dataChannelSend.disabled = false;
    // dataChannelSend.focus();
    // sendButton.disabled = false;
    // closeButton.disabled = false;
  } else {
    // dataChannelSend.disabled = true;
    // sendButton.disabled = true;
    // closeButton.disabled = true;
  }
}

function onReceiveChannelStateChange() {
  var readyState = receiveChannel.readyState;
  trace('Receive channel state is: ' + readyState);
};*/


/***/ }),

/***/ "../../../../../src/app/popups/delete/popup-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <h1 mat-dialog-title>{{data.text}}</h1>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popups/delete/popup-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeletePopup = /** @class */ (function () {
    function DeletePopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeletePopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeletePopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-delete-component',
            template: __webpack_require__("../../../../../src/app/popups/delete/popup-delete.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], DeletePopup);
    return DeletePopup;
}());



/***/ }),

/***/ "../../../../../src/app/popups/edit-description/popup-edit-description.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <!--<h1 mat-dialog-title>{{data.text}}</h1>-->\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select quick description\" [(ngModel)]=\"selected\" (change)=\"selectQDescr()\">\r\n        <mat-option [value]=\"desc\" *ngFor=\"let desc of listOfDescriptions\">{{desc.task}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div *ngIf=\"selected.isNeedColleagues\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select Сolleagues\" [(ngModel)]=\"colleaguesSelected\" (change)=\"selectQName()\">\r\n        <mat-option [value]=\"coll\" *ngFor=\"let coll of colleagues\">{{coll.name}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Enter description\" cdkFocusInitial [(ngModel)]=\"data.value\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"data.value\" >Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/popups/edit-description/popup-edit-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDescriptionPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditDescriptionPopup = /** @class */ (function () {
    function EditDescriptionPopup(Localstore, dialogRef, data) {
        this.Localstore = Localstore;
        this.dialogRef = dialogRef;
        this.data = data;
        this.selected = {};
        this.colleaguesSelected = {};
        this.listOfDescriptions = this.Localstore.getTasks();
        this.colleagues = this.Localstore.getColleagues();
    }
    EditDescriptionPopup.prototype.generateTextForDescription = function () {
        var text = "";
        text += this.selected.task;
        if (this.colleaguesSelected.name) {
            text += " with " + this.colleaguesSelected.name;
        }
        return text;
    };
    EditDescriptionPopup.prototype.selectQDescr = function () {
        this.data.value = this.generateTextForDescription();
    };
    EditDescriptionPopup.prototype.selectQName = function () {
        this.data.value = this.generateTextForDescription();
    };
    EditDescriptionPopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDescriptionPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-edit-description-component',
            template: __webpack_require__("../../../../../src/app/popups/edit-description/popup-edit-description.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */]],
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], EditDescriptionPopup);
    return EditDescriptionPopup;
}());



/***/ }),

/***/ "../../../../../src/app/popups/edit-project/popup-edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <!--<h1 mat-dialog-title>{{data.text}}</h1>-->\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Select quick description\" [(ngModel)]=\"selected\" (change)=\"selectQDescr()\">\r\n        <mat-option [value]=\"desc\" *ngFor=\"let desc of listOfProject\">{{desc.name}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Enter description\" cdkFocusInitial [(ngModel)]=\"data.value\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"data.value\" >Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/popups/edit-project/popup-edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditProjectPopup = /** @class */ (function () {
    function EditProjectPopup(Localstore, dialogRef, data) {
        this.Localstore = Localstore;
        this.dialogRef = dialogRef;
        this.data = data;
        this.selected = {};
        this.listOfProject = this.Localstore.getProjects();
    }
    EditProjectPopup.prototype.generateTextForDescription = function () {
        var text = "";
        text += this.selected.name;
        return text;
    };
    EditProjectPopup.prototype.selectQDescr = function () {
        this.data.value = this.generateTextForDescription();
    };
    EditProjectPopup.prototype.selectQName = function () {
        this.data.value = this.generateTextForDescription();
    };
    EditProjectPopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditProjectPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-edit-project-component',
            template: __webpack_require__("../../../../../src/app/popups/edit-project/popup-edit-project.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */]],
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], EditProjectPopup);
    return EditProjectPopup;
}());



/***/ }),

/***/ "../../../../../src/app/popups/edit-quick-task/popup-edit-quick-task.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.task\" placeholder=\"Enter task text\">\r\n  </mat-form-field>\r\n  <p>\r\n  \t<mat-checkbox [(ngModel)]=\"data.isNeedColleagues\">Use Сolleagues</mat-checkbox>\r\n  </p>\r\n  \r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popups/edit-quick-task/popup-edit-quick-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQuickTaskPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditQuickTaskPopup = /** @class */ (function () {
    function EditQuickTaskPopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditQuickTaskPopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditQuickTaskPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-edit-quick-task-component',
            template: __webpack_require__("../../../../../src/app/popups/edit-quick-task/popup-edit-quick-task.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], EditQuickTaskPopup);
    return EditQuickTaskPopup;
}());



/***/ }),

/***/ "../../../../../src/app/popups/edit-time/popup-edit-time.component.html":
/***/ (function(module, exports) {

module.exports = " <h1 mat-dialog-title *ngIf=\"data.prewStart\">You can't set time less than {{prewTime}}</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input cdkFocusInitial matInput [(ngModel)]=\"thisTime\" placeholder=\"HH:MM\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"returnValidValue()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/popups/edit-time/popup-edit-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTimePopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditTimePopup = /** @class */ (function () {
    function EditTimePopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditTimePopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditTimePopup.prototype.returnValidValue = function () {
        var arrayOfTime = this.thisTime.split(":");
        if (arrayOfTime.length > 1) {
            var date = new Date(this.data.thisStart);
            date.setHours(+arrayOfTime[0] > 24 ? 24 : +arrayOfTime[0]);
            date.setMinutes(+arrayOfTime[1] > 60 ? 60 : +arrayOfTime[1]);
            return date;
        }
        else {
            return this.data.thisStart;
        }
    };
    EditTimePopup.prototype.ngOnInit = function () {
        this.prewTime = (new Date(this.data.prewStart)).toLocaleString("ru", this.data.timeConfig);
        this.thisTime = (new Date(this.data.thisStart)).toLocaleString("ru", this.data.timeConfig);
        console.log(this.thisTime);
    };
    EditTimePopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-edit-time-component',
            template: __webpack_require__("../../../../../src/app/popups/edit-time/popup-edit-time.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], EditTimePopup);
    return EditTimePopup;
}());



/***/ }),

/***/ "../../../../../src/app/popups/edit/popup-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input cdkFocusInitial matInput [(ngModel)]=\"data.value\" [placeholder]=\"data.text\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"data.value\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/popups/edit/popup-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditPopup = /** @class */ (function () {
    function EditPopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditPopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-edit-component',
            template: __webpack_require__("../../../../../src/app/popups/edit/popup-edit.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], EditPopup);
    return EditPopup;
}());



/***/ }),

/***/ "../../../../../src/app/popups/qrcode/popup-qrcode.component.html":
/***/ (function(module, exports) {

module.exports = " <h1 mat-dialog-title>Please scan</h1>\r\n<div mat-dialog-content>\r\n  <qrcode [qrdata]=\"url\" [size]=\"128\" [level]=\"'M'\"></qrcode>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">Cancele</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"returnValidValue()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/popups/qrcode/popup-qrcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_sinc_service__ = __webpack_require__("../../../../../src/app/service/sinc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var QrcodePopup = /** @class */ (function () {
    function QrcodePopup(sinc, api, localstore, dialogRef, data) {
        this.sinc = sinc;
        this.api = api;
        this.localstore = localstore;
        this.dialogRef = dialogRef;
        this.data = data;
        this.bathePath = "sinc/";
    }
    QrcodePopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    QrcodePopup.prototype.returnValidValue = function () {
        // let arrayOfTime = this.thisTime.split(":");
        // if(arrayOfTime.length > 1){
        //   let date = new Date(this.data.thisStart);
        //   date.setHours(+arrayOfTime[0] > 24 ? 24 : +arrayOfTime[0]   );
        //   date.setMinutes(+arrayOfTime[1] > 60 ? 60 : +arrayOfTime[1]);
        //   return date;
        // } else {
        //   return this.data.thisStart;
        // }
    };
    QrcodePopup.prototype.whaiteDataWithUpdate = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var counter = 0;
            var interval = setInterval(function () {
                if (counter > 30) {
                    clearInterval(interval);
                    reject("Long time");
                }
                else {
                    _this.api.getDataById(_this.sinc.getUpdateId(id)).then(function (data) {
                        if (data.messege) {
                            reject(data);
                        }
                        else if (data[0]) {
                            clearInterval(interval);
                            resolve(data[0]);
                        }
                    });
                }
                counter++;
            }, 5000);
        });
    };
    QrcodePopup.prototype.ngOnInit = function () {
        var _this = this;
        var domain;
        window.location.href.replace(/(?:.+\/\/)?.+\//, function (mach) {
            domain = mach;
            return mach;
        });
        this.unicId = this.sinc.getUnicId();
        this.url = domain + this.bathePath + this.unicId;
        this.api.setData(this.unicId, this.localstore.getAllList()).then(function (data) {
            if (data && data.data) {
                _this.whaiteDataWithUpdate(_this.unicId)
                    .then(function (data) {
                    _this.localstore.setAllList(data["data"]);
                    _this.dialogRef.close();
                })
                    .catch(function (error) {
                    console.error(error);
                    _this.dialogRef.close();
                });
            }
            else {
                console.error(data);
                _this.dialogRef.close();
            }
        });
        console.log(this.url);
    };
    QrcodePopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-qrcode-component',
            template: __webpack_require__("../../../../../src/app/popups/qrcode/popup-qrcode.component.html"),
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_sinc_service__["a" /* Sinc */],
            __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__service_localstore_service__["a" /* Localstore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], QrcodePopup);
    return QrcodePopup;
}());



/***/ }),

/***/ "../../../../../src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_main_setting_main_component__ = __webpack_require__("../../../../../src/app/setting-main/setting-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_main_colleges_setting_colleges_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_main_projects_setting_projects_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/projects-setting/projects-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_main_task_setting_task_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/task-setting/task-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__setting_main_user_setting_user_setting_component__ = __webpack_require__("../../../../../src/app/setting-main/user-setting/user-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sinc_page_sinc_page_component__ = __webpack_require__("../../../../../src/app/sinc-page/sinc-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_3__setting_main_setting_main_component__["a" /* SettingMainComponent */] },
    { path: 'setting/colleges', component: __WEBPACK_IMPORTED_MODULE_4__setting_main_colleges_setting_colleges_setting_component__["a" /* CollegesSettingComponent */] },
    { path: 'setting/projects', component: __WEBPACK_IMPORTED_MODULE_5__setting_main_projects_setting_projects_setting_component__["a" /* ProjectsSettingComponent */] },
    { path: 'setting/tasks', component: __WEBPACK_IMPORTED_MODULE_6__setting_main_task_setting_task_setting_component__["a" /* TaskSettingComponent */] },
    { path: 'setting/user', component: __WEBPACK_IMPORTED_MODULE_7__setting_main_user_setting_user_setting_component__["a" /* UserSettingComponent */] },
    { path: 'sinc/:id', component: __WEBPACK_IMPORTED_MODULE_8__sinc_page_sinc_page_component__["a" /* SincPageComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.basePath = "";
    }
    Api.prototype.getDataById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.basePath + "/send.php", { params: { id: id + "" } })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (res) {
                console.log(res);
                return res.json();
            })).subscribe(function (data) {
                if (data[0] && data[0].data) {
                    try {
                        data[0].data = JSON.parse(data[0].data);
                    }
                    catch (error) {
                        console.error(error);
                        data[0].data = [];
                    }
                }
                console.log(data);
                resolve(data);
            });
        });
    };
    Api.prototype.setData = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var jsonData;
            var stringId = id.toString();
            console.log(stringId);
            try {
                jsonData = JSON.stringify(data);
            }
            catch (error) {
                console.error(error);
                jsonData = "[]";
            }
            _this.http.post(_this.basePath + "/send.php", { id: stringId, data: jsonData })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (res) {
                return res.json();
            })).subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], Api);
    return Api;
}());



/***/ }),

/***/ "../../../../../src/app/service/file-local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileLocalService = /** @class */ (function () {
    function FileLocalService() {
        this.link = document.createElement("a");
        this.openFile = document.createElement("input");
    }
    FileLocalService.prototype.openLocalFile = function () {
        var _this = this;
        this.openFile.type = "file";
        this.openFile.click();
        var openFile = this.openFile;
        var promise = new Promise(function (resolve, reject) {
            var onFileLoad = function (e) {
                openFile.removeEventListener('change', onFileLoad);
                var file = openFile.files[0];
                var textType = /.*.*/;
                if (file.type.match(textType)) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var text = reader.result;
                        openFile.value = '';
                        resolve(JSON.parse(text));
                    };
                    reader.readAsText(file);
                }
                else {
                    reject();
                    //console.log("File not supported!");
                }
                ;
            };
            _this.openFile.addEventListener('change', onFileLoad);
        });
        return promise;
    };
    FileLocalService.prototype.prepareFileForDownload = function (data, name, isNotJson) {
        var text;
        if (isNotJson) {
            text = data;
        }
        else {
            text = JSON.stringify(data);
        }
        if (this.link) {
            this.link.download = name || "file.json";
            this.link.href = 'data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text);
            this.link.click();
        }
    };
    FileLocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FileLocalService);
    return FileLocalService;
}());



/***/ }),

/***/ "../../../../../src/app/service/icon-canvas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconCanvasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconCanvasService = /** @class */ (function () {
    function IconCanvasService() {
        this.canvas = document.createElement("canvas");
    }
    IconCanvasService.prototype.generateCanvasURL = function (top, bottom) {
        this.canvas.height = 16;
        this.canvas.width = 16;
        var ctx = this.canvas.getContext('2d');
        ctx.font = '10px serif';
        ctx.fillText(top, 0, 7);
        ctx.fillStyle = "#565656";
        ctx.font = '10.5px serif';
        ctx.fillStyle = "#000";
        ctx.fillText(bottom, 3, 16);
        return this.canvas.toDataURL();
    };
    IconCanvasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], IconCanvasService);
    return IconCanvasService;
}());



/***/ }),

/***/ "../../../../../src/app/service/localstore.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Localstore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Localstore = /** @class */ (function () {
    function Localstore() {
        this.saveTo = function (name, data) {
            var text;
            if (typeof data !== "string") {
                text = JSON.stringify(data);
            }
            else {
                text = data;
            }
            localStorage.setItem(name, text);
        };
        this.getFrom = function (name) {
            if (localStorage[name]) {
                if (localStorage[name][0] === '{' || localStorage[name][0] === '[') {
                    return JSON.parse(localStorage[name]);
                }
                else {
                    return localStorage[name];
                }
            }
            return null;
        };
        this.convertToCsv = function (data) {
            var separator = "\t";
            var nextRow = "\r\n";
            var stringData = "";
            if (data.length && data[0]) {
                var listOfName = [];
                for (var key in data[0]) {
                    if (data[0].hasOwnProperty(key)) {
                        listOfName.push(key);
                    }
                }
                for (var i = 0; i < listOfName.length; i++) {
                    stringData += listOfName[i] + (listOfName.length === i + 1 ? nextRow : separator);
                }
                for (var j = 0; j < data.length; j++) {
                    for (var i = 0; i < listOfName.length; i++) {
                        stringData += data[j][listOfName[i]] + (listOfName.length === i + 1 ? nextRow : separator);
                    }
                }
            }
            return stringData;
        };
        this.fromCsvToArray = function (data) {
            var allData = [];
            var separator = "\t";
            var nextRow = "\r\n";
            var splitRow = data.split(nextRow);
            var listOfName = splitRow[0].split(separator);
            for (var i = 1; i < splitRow.length - 1; i++) {
                var arrayOfValue = splitRow[i].split(separator);
                var objWithData = {};
                for (var j = 0; j < arrayOfValue.length; j++) {
                    objWithData[listOfName[j]] = arrayOfValue[j];
                }
                allData.push(objWithData);
            }
            return allData;
        };
        this.getUser = function () {
            return this.getFrom("user");
        };
        this.setUser = function (data) {
            this.saveTo("user", data);
        };
        this.getColleagues = function () {
            return this.getFrom("collegs");
        };
        this.setColleagues = function (data) {
            this.saveTo("collegs", data);
        };
        this.getProjects = function () {
            return this.getFrom("projects");
        };
        this.setProjects = function (data) {
            this.saveTo("projects", data);
        };
        this.getTasks = function () {
            return this.getFrom("tasks");
        };
        this.setTasks = function (data) {
            this.saveTo("tasks", data);
        };
        this.getAllList = function () {
            var list = this.getFrom("track");
            if (typeof list !== "object") {
                this.saveTo("track", []);
                return [];
            }
            return this.getFrom("track");
        };
        this.setAllList = function (data) {
            this.saveTo("track", data || []);
        };
        this.clear = function (name) {
            switch (name) {
                case "track":
                    localStorage.removeItem("track");
                    break;
                case "tasks":
                    localStorage.removeItem("tasks");
                    break;
                case "projects":
                    localStorage.removeItem("projects");
                    break;
                case "collegs":
                    localStorage.removeItem("collegs");
                    break;
                case "user":
                    localStorage.removeItem("user");
                    break;
                case "all":
                    localStorage.clear();
                    break;
            }
        };
        this.add = function (name, data) {
        };
    }
    Localstore.prototype.saveAllSeting = function (data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                switch (key) {
                    case "track":
                        this.saveTo("track", data[key]);
                        break;
                    case "tasks":
                        this.saveTo("tasks", data[key]);
                        break;
                    case "projects":
                        this.saveTo("projects", data[key]);
                        break;
                    case "collegs":
                        this.saveTo("collegs", data[key]);
                        break;
                    case "user":
                        this.saveTo("user", data[key]);
                        break;
                }
            }
        }
    };
    Localstore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Localstore);
    return Localstore;
}());



/***/ }),

/***/ "../../../../../src/app/service/sinc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sinc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sinc = /** @class */ (function () {
    function Sinc(TimerService) {
        this.TimerService = TimerService;
    }
    Sinc.prototype.getUnicId = function () {
        var unicNumber = getRandomInt(1000, 9999) + "";
        var ms = +(new Date()) + "";
        var dateInMs = (ms).slice(ms.length - 4); //4 number
        return +(dateInMs + unicNumber);
    };
    Sinc.prototype.getUpdateId = function (id) {
        return +(id.toString() + "1");
    };
    Sinc.prototype.mergeTwoTimeLists = function (firstList, secondList) {
        var _this = this;
        var newList = [];
        var allList = firstList.concat(secondList);
        var mapOfIds = {};
        allList.forEach(function (el) {
            if (!mapOfIds[el.id]) {
                mapOfIds[el.id] = el;
            }
            else {
                if (mapOfIds[el.id].lastUpdate < el.lastUpdate) {
                    mapOfIds[el.id] = el;
                }
            }
        });
        for (var key in mapOfIds) {
            if (mapOfIds.hasOwnProperty(key)) {
                newList.push(mapOfIds[key]);
            }
        }
        newList.sort(function (a, b) {
            return a.start - b.start;
        });
        newList.forEach(function (el, i, all) {
            if (i) {
                updateTwoElement(el, all[i - 1]);
            }
        });
        var recalculationTable = function (list) {
            for (var i = 0; i < list.length; i++) {
                if (i > 0) {
                    list[i - 1].end = list[i].start;
                    list[i - 1].spend = list[i - 1].end - list[i - 1].start;
                    list[i - 1].endString = (new Date(list[i - 1].end)).toLocaleString("ru", _this.TimerService.timeConfig);
                    list[i - 1].spendString = _this.TimerService.toTime(list[i - 1].spend / 1000).string;
                }
            }
        };
        recalculationTable(newList);
        mapOfIds = null;
        allList = null;
        return newList;
        //helper functionality
        function updateTwoElement(main, prew) {
            if (main.lastUpdate >= prew.lastUpdate) {
                prew.end = main.start;
            }
            else {
                main.start = prew.end;
            }
        }
    };
    Sinc = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__timer_timer_service__["a" /* TimerService */]])
    ], Sinc);
    return Sinc;
}());

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 
}


/***/ }),

/***/ "../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collegs-setting_title{\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collegs-setting\">\r\n\t<div class=\"collegs-setting_title\">Сolleagues</div>\r\n\t<mat-list >\r\n\t  \t<mat-list-item *ngFor=\"let colleague of colleagues\">\r\n\t\t \t<a matLine>{{colleague.name}}</a>\r\n\t\t \t<button mat-icon-button (click)=\"openDialog(colleague)\">\r\n        \t\t<mat-icon>edit</mat-icon>\r\n     \t\t</button>\r\n     \t\t<button mat-icon-button (click)=\"deletePopup(colleague)\">\r\n        \t\t<mat-icon>delete</mat-icon>\r\n     \t\t</button>\r\n\t \t</mat-list-item>\r\n\t\t\r\n\t</mat-list>\r\n\t<a mat-raised-button (click)=\"openDialog()\">Create</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollegesSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__ = __webpack_require__("../../../../../src/app/popups/edit/popup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__ = __webpack_require__("../../../../../src/app/popups/delete/popup-delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollegesSettingComponent = /** @class */ (function () {
    function CollegesSettingComponent(Localstore, dialog) {
        this.Localstore = Localstore;
        this.dialog = dialog;
    }
    CollegesSettingComponent.prototype.ngOnInit = function () {
        this.colleagues = this.Localstore.getColleagues() || [];
    };
    CollegesSettingComponent.prototype.deletePopup = function (colleague) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */], {
            // width: '300px',
            data: { text: "Delete From List" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                var newList = [];
                for (var i = 0; i < _this.colleagues.length; i++) {
                    if (_this.colleagues[i] !== colleague) {
                        newList.push(_this.colleagues[i]);
                    }
                }
                _this.colleagues = newList;
                _this.Localstore.setColleagues(_this.colleagues);
            }
        });
    };
    CollegesSettingComponent.prototype.openDialog = function (colleague) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__["a" /* EditPopup */], {
            // width: '300px',
            data: { value: (colleague ? colleague.name : ''), text: "Enter name" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (colleague) {
                    colleague.name = result;
                }
                else {
                    _this.colleagues.push({ name: result });
                }
                _this.Localstore.setColleagues(_this.colleagues);
            }
        });
    };
    CollegesSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-colleges-setting',
            template: __webpack_require__("../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting-main/colleges-setting/colleges-setting.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__["a" /* EditPopup */],
                __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], CollegesSettingComponent);
    return CollegesSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setting-main/projects-setting/projects-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collegs-setting_title{\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting-main/projects-setting/projects-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collegs-setting\">\r\n\t<div class=\"collegs-setting_title\">Projects</div>\r\n\t<mat-list >\r\n\t  \t<mat-list-item *ngFor=\"let project of projects\">\r\n\t\t \t<a matLine>{{project.name}}</a>\r\n\t\t \t<button mat-icon-button (click)=\"openDialog(project)\">\r\n        \t\t<mat-icon>edit</mat-icon>\r\n     \t\t</button>\r\n     \t\t<button mat-icon-button (click)=\"deletePopup(project)\">\r\n        \t\t<mat-icon>delete</mat-icon>\r\n     \t\t</button>\r\n\t \t</mat-list-item>\r\n\t\t\r\n\t</mat-list>\r\n\t<a mat-raised-button (click)=\"openDialog()\">Create</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/setting-main/projects-setting/projects-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__ = __webpack_require__("../../../../../src/app/popups/edit/popup-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__ = __webpack_require__("../../../../../src/app/popups/delete/popup-delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsSettingComponent = /** @class */ (function () {
    function ProjectsSettingComponent(Localstore, dialog) {
        this.Localstore = Localstore;
        this.dialog = dialog;
    }
    ProjectsSettingComponent.prototype.ngOnInit = function () {
        this.projects = this.Localstore.getProjects() || [];
    };
    ProjectsSettingComponent.prototype.deletePopup = function (project) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */], {
            // width: '300px',
            data: { text: "Delete From List" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                var newList = [];
                for (var i = 0; i < _this.projects.length; i++) {
                    if (_this.projects[i] !== project) {
                        newList.push(_this.projects[i]);
                    }
                }
                _this.projects = newList;
                _this.Localstore.setProjects(_this.projects);
            }
        });
    };
    ProjectsSettingComponent.prototype.openDialog = function (project) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__["a" /* EditPopup */], {
            // width: '300px',
            data: { value: (project ? project.name : ''), text: "Enter name" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (project) {
                    project.name = result;
                }
                else {
                    _this.projects.push({ name: result });
                }
                _this.Localstore.setProjects(_this.projects);
            }
        });
    };
    ProjectsSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects-setting',
            template: __webpack_require__("../../../../../src/app/setting-main/projects-setting/projects-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting-main/projects-setting/projects-setting.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__popups_edit_popup_edit_component__["a" /* EditPopup */],
                __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], ProjectsSettingComponent);
    return ProjectsSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setting-main/setting-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-setting{\r\n\tpadding: 10px 5px;\r\n}\r\n.main-setting_title{\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting-main/setting-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-setting\">\r\n  <div class=\"main-setting_title\">Setting</div>\r\n  <mat-nav-list>\r\n    <mat-list-item routerLink=\"/setting/user\">\r\n      <a matLine> User</a>\r\n    </mat-list-item>\r\n    <mat-list-item routerLink=\"/setting/tasks\">\r\n      <a matLine>Tascks</a>\r\n    </mat-list-item>\r\n    <mat-list-item routerLink=\"/setting/projects\">\r\n      <a matLine>Projects</a>\r\n    </mat-list-item>\r\n    <mat-list-item routerLink=\"/setting/colleges\">\r\n      <a matLine>Colleagues</a>\r\n    </mat-list-item>\r\n\r\n    <mat-list-item (click)=\"saveAllSettinfToFile()\">\r\n      <a matLine> Save to file</a>\r\n    </mat-list-item>\r\n    <mat-list-item (click)=\"loadAllSettingFromFile()\">\r\n      <a matLine> Load from file</a>\r\n    </mat-list-item>\r\n\r\n  </mat-nav-list>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/setting-main/setting-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_file_local_service__ = __webpack_require__("../../../../../src/app/service/file-local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timer_timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingMainComponent = /** @class */ (function () {
    function SettingMainComponent(Localstore, FileLocalService, timerService) {
        this.Localstore = Localstore;
        this.FileLocalService = FileLocalService;
        this.timerService = timerService;
    }
    SettingMainComponent.prototype.ngOnInit = function () {
    };
    SettingMainComponent.prototype.cleareLocalSroreTrack = function () {
        this.Localstore.clear("track");
        this.timerService.clearTimer();
    };
    SettingMainComponent.prototype.saveAllSettinfToFile = function () {
        var forSave = {
            user: this.Localstore.getUser(),
            collegs: this.Localstore.getColleagues(),
            projects: this.Localstore.getProjects(),
            tasks: this.Localstore.getTasks()
        };
        this.FileLocalService.prepareFileForDownload(forSave, "settingAll.json");
    };
    SettingMainComponent.prototype.loadAllSettingFromFile = function () {
        var _this = this;
        this.FileLocalService.openLocalFile().then(function (response) {
            _this.Localstore.saveAllSeting(response);
        });
    };
    SettingMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setting-main',
            template: __webpack_require__("../../../../../src/app/setting-main/setting-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting-main/setting-main.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_2__service_file_local_service__["a" /* FileLocalService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_2__service_file_local_service__["a" /* FileLocalService */], __WEBPACK_IMPORTED_MODULE_3__timer_timer_service__["a" /* TimerService */]])
    ], SettingMainComponent);
    return SettingMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setting-main/task-setting/task-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collegs-setting_title{\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting-main/task-setting/task-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collegs-setting\">\r\n\t<div class=\"collegs-setting_title\">quick task edit list</div>\r\n\t<mat-list >\r\n\t  \t<mat-list-item *ngFor=\"let task of tasks\">\r\n\t\t \t<a matLine>{{task.task}} {{task.isNeedColleagues? 'with Colleagues' : ''}}</a>\r\n\t\t \t<button mat-icon-button (click)=\"openDialog(task)\">\r\n        \t\t<mat-icon>edit</mat-icon>\r\n     \t\t</button>\r\n     \t\t<button mat-icon-button (click)=\"deletePopup(task)\">\r\n        \t\t<mat-icon>delete</mat-icon>\r\n     \t\t</button>\r\n\t \t</mat-list-item>\r\n\t\t\r\n\t</mat-list>\r\n\t<a mat-raised-button (click)=\"openDialog()\">Create</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/setting-main/task-setting/task-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_edit_quick_task_popup_edit_quick_task_component__ = __webpack_require__("../../../../../src/app/popups/edit-quick-task/popup-edit-quick-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__ = __webpack_require__("../../../../../src/app/popups/delete/popup-delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskSettingComponent = /** @class */ (function () {
    function TaskSettingComponent(Localstore, dialog) {
        this.Localstore = Localstore;
        this.dialog = dialog;
    }
    TaskSettingComponent.prototype.ngOnInit = function () {
        this.tasks = this.Localstore.getTasks() || [];
    };
    TaskSettingComponent.prototype.deletePopup = function (task) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */], {
            // width: '300px',
            data: { text: "Delete From List" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                var newList = [];
                for (var i = 0; i < _this.tasks.length; i++) {
                    if (_this.tasks[i] !== task) {
                        newList.push(_this.tasks[i]);
                    }
                }
                _this.tasks = newList;
                _this.Localstore.setTasks(_this.tasks);
            }
        });
    };
    TaskSettingComponent.prototype.openDialog = function (task) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__popups_edit_quick_task_popup_edit_quick_task_component__["a" /* EditQuickTaskPopup */], {
            // width: '300px',
            data: { task: (task ? task.task : ''), isNeedColleagues: (task ? task.isNeedColleagues : false) }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (task) {
                    task.task = result.task;
                    task.isNeedColleagues = result.isNeedColleagues;
                }
                else {
                    _this.tasks.push({ task: result.task, isNeedColleagues: result.isNeedColleagues });
                }
                _this.Localstore.setTasks(_this.tasks);
            }
        });
    };
    TaskSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-setting',
            template: __webpack_require__("../../../../../src/app/setting-main/task-setting/task-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting-main/task-setting/task-setting.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__popups_edit_quick_task_popup_edit_quick_task_component__["a" /* EditQuickTaskPopup */],
                __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], TaskSettingComponent);
    return TaskSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setting-main/user-setting/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.name\" placeholder=\"enter your name\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-raised-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/setting-main/user-setting/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNamePopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditNamePopup = /** @class */ (function () {
    function EditNamePopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditNamePopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditNamePopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'popup-component',
            template: __webpack_require__("../../../../../src/app/setting-main/user-setting/popup/popup.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], EditNamePopup);
    return EditNamePopup;
}());



/***/ }),

/***/ "../../../../../src/app/setting-main/user-setting/user-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-text{\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting-main/user-setting/user-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-setting\">\r\n\t<div class=\"user-setting_title\">User</div>\r\n\t<mat-list *ngIf=\"user\">\r\n\t  \t<mat-list-item>\r\n\t\t \t<a matLine>{{user}}</a>\r\n\t\t \t<button mat-icon-button (click)=\"openDialog()\">\r\n        \t\t<mat-icon>edit</mat-icon>\r\n     \t\t</button>\r\n     \t\t<button mat-icon-button (click)=\"deletePopup()\">\r\n        \t\t<mat-icon>delete</mat-icon>\r\n     \t\t</button>\r\n\t \t</mat-list-item>\r\n\t\t\r\n\t</mat-list>\r\n\t<a *ngIf=\"!user\" mat-raised-button (click)=\"openDialog()\">Create</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/setting-main/user-setting/user-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_popup_component__ = __webpack_require__("../../../../../src/app/setting-main/user-setting/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__ = __webpack_require__("../../../../../src/app/popups/delete/popup-delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserSettingComponent = /** @class */ (function () {
    function UserSettingComponent(Localstore, dialog) {
        this.Localstore = Localstore;
        this.dialog = dialog;
    }
    UserSettingComponent.prototype.ngOnInit = function () {
        this.user = this.Localstore.getUser();
    };
    UserSettingComponent.prototype.deletePopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */], {
            // width: '300px',
            data: { text: "Delete User" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                _this.user = '';
                _this.Localstore.setUser(_this.user);
            }
        });
    };
    UserSettingComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__popup_popup_component__["a" /* EditNamePopup */], {
            // width: '300px',
            data: { name: this.user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.user = result;
                _this.Localstore.setUser(_this.user);
            }
        });
    };
    UserSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-setting',
            template: __webpack_require__("../../../../../src/app/setting-main/user-setting/user-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting-main/user-setting/user-setting.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__popup_popup_component__["a" /* EditNamePopup */],
                __WEBPACK_IMPORTED_MODULE_4__popups_delete_popup_delete_component__["a" /* DeletePopup */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], UserSettingComponent);
    return UserSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sinc-page/sinc-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sinc-page/sinc-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  loading...\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/sinc-page/sinc-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SincPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_sinc_service__ = __webpack_require__("../../../../../src/app/service/sinc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SincPageComponent = /** @class */ (function () {
    function SincPageComponent(sinc, api, localstore, route, router) {
        this.sinc = sinc;
        this.api = api;
        this.localstore = localstore;
        this.route = route;
        this.router = router;
    }
    SincPageComponent.prototype.startSinc = function (id) {
        var _this = this;
        this.api.getDataById(id)
            .then(function (response) {
            if (response[0]) {
                _this.updateLocalData(response[0].data);
                _this.endSinc(id);
            }
            else {
                console.error("no such id in DB - " + id);
                _this.router.navigate([""]);
            }
        });
        ;
    };
    SincPageComponent.prototype.updateLocalData = function (serverList) {
        this.localstore.setAllList(this.sinc.mergeTwoTimeLists(serverList, this.localstore.getAllList()));
    };
    SincPageComponent.prototype.endSinc = function (id) {
        var _this = this;
        this.api.setData(this.sinc.getUpdateId(id), this.localstore.getAllList()).then(function (data) {
            _this.router.navigate([""]);
        });
    };
    SincPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramMaps = this.route.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* switchMap */])(function (params) {
            console.log(params.get('id'));
            _this.startSinc(params.get('id'));
            return params.get('id');
        })).subscribe(function (id) { });
    };
    SincPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sinc-page',
            template: __webpack_require__("../../../../../src/app/sinc-page/sinc-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sinc-page/sinc-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_sinc_service__["a" /* Sinc */],
            __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__service_localstore_service__["a" /* Localstore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SincPageComponent);
    return SincPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timer-header{\r\n  font-size: 30px;\r\n  line-height: 32px;\r\n}\r\n.timer-header__small{\r\n  font-size: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"timer-header\">\r\n    {{time}}\r\n  </div>\r\n  <div class=\"timer-header timer-header__small\">\r\n    For this Day: {{allDay}}\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_service__ = __webpack_require__("../../../../../src/app/timer/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent(timerServis) {
        this.timerServis = timerServis;
        // time = this.timerServis.timeEvent.getValue().string;
        this.time = '';
        this.allDay = '';
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerServis.timeEvent.subscribe(function (value) {
            _this.time = value.time.string;
            _this.allDay = value.deyTime.string;
        });
    };
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'timer-value',
            template: __webpack_require__("../../../../../src/app/timer/timer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__timer_service__["a" /* TimerService */]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timer/timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_localstore_service__ = __webpack_require__("../../../../../src/app/service/localstore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_icon_canvas_service__ = __webpack_require__("../../../../../src/app/service/icon-canvas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerService = /** @class */ (function () {
    function TimerService(localstore, IconCanvasService) {
        this.localstore = localstore;
        this.IconCanvasService = IconCanvasService;
        this.timeEvent = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]({ time: this.toTime(0), deyTime: this.toTime(0) });
        this.timeConfig = {
            hour: 'numeric',
            minute: 'numeric',
        };
    }
    TimerService.prototype.toTime = function (spend) {
        if (!spend) {
            return {
                string: "",
                h: 0,
                min: 0,
                sec: 0
            };
        }
        var h = Math.floor(spend / 3600);
        var min = Math.floor((spend - (h * 3600)) / 60);
        var sec = Math.floor((spend - (h * 3600) - (min * 60)));
        return {
            string: (h + ":" + this.toTwoNumber(min) + ":" + this.toTwoNumber(sec)),
            h: h,
            min: min,
            sec: sec
        };
    };
    TimerService.prototype.toTwoNumber = function (val) {
        if (val < 10) {
            return "0" + val;
        }
        else {
            return "" + val;
        }
    };
    TimerService.prototype.clearTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    TimerService.prototype.thisTimeTreck = function () {
        var list = this.localstore.getAllList();
        var date = "";
        var spendTime = 0;
        for (var i = list.length - 1; i > -1; i--) {
            if (!date) {
                date = list[i].date;
            }
            if (list[i].date !== date) {
                break;
            }
            spendTime += list[i].spend;
        }
        return spendTime;
    };
    TimerService.prototype.startTimer = function (listFromComponent) {
        var _this = this;
        var list = listFromComponent || this.localstore.getAllList();
        if (!list) {
            this.clearTimer();
            return false;
        }
        this.timer = setInterval(function () {
            if (list.length) {
                var time = _this.toTime((+(new Date()) - list[list.length - 1].start) / 1000);
                var deyTime = _this.toTime((_this.thisTimeTreck() + +(new Date()) - list[list.length - 1].start) / 1000);
                if (time.h) {
                    document.querySelector('[rel="icon"]').href = _this.IconCanvasService.generateCanvasURL("" + time.h, "" + time.min);
                }
                else {
                    document.querySelector('[rel="icon"]').href = _this.IconCanvasService.generateCanvasURL("" + time.min, "" + time.sec);
                }
                document.title = time.string;
                _this.timeEvent.next({ time: time, deyTime: deyTime });
            }
            else {
                document.title = "Stop";
                document.querySelector('[rel="icon"]').href = _this.IconCanvasService.generateCanvasURL("0", "0");
            }
        }, 1000);
        return true;
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_localstore_service__["a" /* Localstore */], __WEBPACK_IMPORTED_MODULE_2__service_icon_canvas_service__["a" /* IconCanvasService */]])
    ], TimerService);
    return TimerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map