(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(swUpdate) {
        this.swUpdate = swUpdate;
        this.title = 'opentiktokapp';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(function () {
                if (confirm("New version available. Load New Version?")) {
                    window.location.reload();
                }
            });
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_Opentok_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/Opentok.service */ "./src/app/service/Opentok.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/form/form.component */ "./src/app/home/form/form.component.ts");
/* harmony import */ var _home_form_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/form/form-builder/form-builder.component */ "./src/app/home/form/form-builder/form-builder.component.ts");
/* harmony import */ var _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/chat/chat.component */ "./src/app/home/chat/chat.component.ts");
/* harmony import */ var _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/graphic/graphic.component */ "./src/app/home/graphic/graphic.component.ts");
/* harmony import */ var _service_APIService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/APIService */ "./src/app/service/APIService.ts");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/ProjectService */ "./src/app/service/ProjectService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pop-up/pop-up.component */ "./src/app/pop-up/pop-up.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _home_response_response_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/response/response.component */ "./src/app/home/response/response.component.ts");
/* harmony import */ var _home_backupcomponent_backupcomponent_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/backupcomponent/backupcomponent.component */ "./src/app/home/backupcomponent/backupcomponent.component.ts");
/* harmony import */ var _home_chat_dial_dial_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/chat/dial/dial.component */ "./src/app/home/chat/dial/dial.component.ts");
/* harmony import */ var _pop_up_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pop-up/publisher/publisher.component */ "./src/app/pop-up/publisher/publisher.component.ts");
/* harmony import */ var _pop_up_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pop-up/subscriber/subscriber.component */ "./src/app/pop-up/subscriber/subscriber.component.ts");
/* harmony import */ var _home_response_schedule_graph_schedule_graph_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/response/schedule-graph/schedule-graph.component */ "./src/app/home/response/schedule-graph/schedule-graph.component.ts");
/* harmony import */ var _home_response_schedule_data_schedule_data_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/response/schedule-data/schedule-data.component */ "./src/app/home/response/schedule-data/schedule-data.component.ts");
/* harmony import */ var _home_response_live_assesment_live_assesment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/response/live-assesment/live-assesment.component */ "./src/app/home/response/live-assesment/live-assesment.component.ts");
/* harmony import */ var _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/profile/profile.component */ "./src/app/home/profile/profile.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



















//import { MatFileUploadModule } from 'angular-material-fileupload';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _home_backupcomponent_backupcomponent_component__WEBPACK_IMPORTED_MODULE_23__["BackupcomponentComponent"],
                _home_form_form_component__WEBPACK_IMPORTED_MODULE_13__["FormComponent"],
                _home_form_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_14__["FormBuilderComponent"],
                _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
                _home_response_response_component__WEBPACK_IMPORTED_MODULE_22__["ResponseComponent"],
                _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_16__["GraphicComponent"],
                _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_20__["PopUpComponent"],
                _home_chat_dial_dial_component__WEBPACK_IMPORTED_MODULE_24__["DialComponent"],
                _pop_up_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_25__["PublisherComponent"],
                _pop_up_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_26__["SubscriberComponent"],
                _home_response_schedule_graph_schedule_graph_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleGraphComponent"],
                _home_response_schedule_data_schedule_data_component__WEBPACK_IMPORTED_MODULE_28__["ScheduleDataComponent"],
                _home_response_live_assesment_live_assesment_component__WEBPACK_IMPORTED_MODULE_29__["LiveAssesmentComponent"],
                _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_30__["ProfileComponent"]
            ],
            entryComponents: [_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_20__["PopUpComponent"], _home_profile_profile_component__WEBPACK_IMPORTED_MODULE_30__["ProfileComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_7__["WebcamModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["routes"], { useHash: true }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__["ServiceWorkerModule"].register("ngsw-worker.js", {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].production
                })
            ],
            providers: [_service_APIService__WEBPACK_IMPORTED_MODULE_17__["APIService"], _service_ProjectService__WEBPACK_IMPORTED_MODULE_18__["ProjectService"], _service_Opentok_service__WEBPACK_IMPORTED_MODULE_10__["OpentokService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/chat/chat.component */ "./src/app/home/chat/chat.component.ts");
/* harmony import */ var _home_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/form/form.component */ "./src/app/home/form/form.component.ts");
/* harmony import */ var _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/graphic/graphic.component */ "./src/app/home/graphic/graphic.component.ts");
/* harmony import */ var _home_response_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/response/response.component */ "./src/app/home/response/response.component.ts");
/* harmony import */ var _home_backupcomponent_backupcomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/backupcomponent/backupcomponent.component */ "./src/app/home/backupcomponent/backupcomponent.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], children: [
            { path: '', component: _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"] },
            { path: 'form', component: _home_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] },
            { path: 'chat', component: _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"] },
            { path: 'graphic', component: _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__["GraphicComponent"] },
            { path: 'response', component: _home_response_response_component__WEBPACK_IMPORTED_MODULE_4__["ResponseComponent"] },
            { path: 'backup', component: _home_backupcomponent_backupcomponent_component__WEBPACK_IMPORTED_MODULE_5__["BackupcomponentComponent"] },
        ] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: '**', redirectTo: '/login' }
];


/***/ }),

/***/ "./src/app/home/backupcomponent/backupcomponent.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/backupcomponent/backupcomponent.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  backupcomponent works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/backupcomponent/backupcomponent.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/backupcomponent/backupcomponent.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmFja3VwY29tcG9uZW50L2JhY2t1cGNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/backupcomponent/backupcomponent.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/backupcomponent/backupcomponent.component.ts ***!
  \*******************************************************************/
/*! exports provided: BackupcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupcomponentComponent", function() { return BackupcomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackupcomponentComponent = /** @class */ (function () {
    function BackupcomponentComponent() {
    }
    BackupcomponentComponent.prototype.ngOnInit = function () {
    };
    BackupcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backupcomponent',
            template: __webpack_require__(/*! ./backupcomponent.component.html */ "./src/app/home/backupcomponent/backupcomponent.component.html"),
            styles: [__webpack_require__(/*! ./backupcomponent.component.scss */ "./src/app/home/backupcomponent/backupcomponent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackupcomponentComponent);
    return BackupcomponentComponent;
}());



/***/ }),

/***/ "./src/app/home/chat/chat.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/chat/chat.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"clatCon\">\n  <div class=\"container\">\n    <div *ngIf=\"!dialUser\">\n      <ul class=\"list-group padding15\" *ngFor=\"let chatUser of chatUsers\">\n        <li class=\"list-group-item  row\">\n          <div class=\"seperate col-6\">\n            <strong>\n              <a class=\"float-left phone-no\"\n                >{{ chatUser.user_name }} {{ checkForFormID(chatUser) }}</a\n              >\n            </strong>\n          </div>\n          <div class=\"seperate text-right col-6\">\n            <span\n              class=\"call\"\n              mat-raised-button\n              (click)=\"contactThisUser(chatUser)\"\n              *ngIf=\"chatUser.status == 'online'\"\n              class=\"online\"\n              ><i class=\"fa fa-phone \" aria-hidden=\"true\"></i\n            ></span>\n\n            <span *ngIf=\"chatUser.status == 'offline'\" class=\"offline\"\n              ><i class=\"fa fa-phone \" aria-hidden=\"true\"></i\n            ></span>\n\n            <span\n              *ngIf=\"chatUser.status == 'calling'\"\n              class=\"calling\"\n              (click)=\"receiveCall(chatUser)\"\n              ><i class=\"fa fa-phone \" aria-hidden=\"true\"></i\n            ></span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div *ngIf=\"dialUser\">\n    <br />\n    <app-dial [user]=\"contactUser\"></app-dial>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/home/chat/chat.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/chat/chat.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/chat/chat.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pop-up/pop-up.component */ "./src/app/pop-up/pop-up.component.ts");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/ProjectService */ "./src/app/service/ProjectService.ts");





var ChatComponent = /** @class */ (function () {
    function ChatComponent(projectService, bottomSheet) {
        var _this = this;
        this.projectService = projectService;
        this.bottomSheet = bottomSheet;
        this.chatUsers = [];
        this.dialUser = false;
        this.contactUser = {};
        this.chatUser = {};
        this.projectService.emitChatUsers.subscribe(function (res) {
            _this.chatUsers = res.chatUsers.all_user_data;
            _this.dialUser = res.dialUser;
            console.log(res);
        });
        this.projectService.emitDialUser.subscribe(function (res) {
            _this.dialUser = res.dialUser;
        });
        this.projectService.emitDismissPopup.subscribe(function (res) {
            if (res.dismiss === "true") {
                _this.projectService.emitUserDial(true);
                _this.projectService.emitDialUserDetailsTOComponent(_this.chatUser);
                _this.bottomSheet.dismiss();
            }
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.projectService.getChatUsers();
    };
    ChatComponent.prototype.checkForFormID = function (chatUser) {
        if (chatUser.form_id)
            localStorage.setItem("form_id", "" + chatUser.form_id);
    };
    ChatComponent.prototype.contactThisUser = function (chatUser) {
        console.log(chatUser);
        this.chatUser = chatUser;
        this.contactUser = chatUser;
        this.bottomSheet.open(_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"]);
        var form_id = "";
        if (localStorage.getItem('form_id')) {
            form_id = "" + localStorage.getItem('form_id');
        }
        var data = {
            calling_user_id: chatUser.user_id,
            chat_time: chatUser.chat_time,
            // chat_id: "chat_id_"+Math.floor(Math.random() * (9999 - 1000)) + 1000,
            form_id: form_id
        };
        this.projectService.initiateSession(data);
        // setTimeout(()=>{
        //
        //   this.projectService.emitUserDial(true)
        //   this.projectService.emitDialUserDetailsTOComponent(chatUser)
        //   this.bottomSheet.dismiss()
        //
        // }, 2000)
    };
    ChatComponent.prototype.receiveCall = function (user) {
        this.projectService.setOpenTokCredentials(user);
        this.projectService.emitUserDial(true);
        this.projectService.emitDialUserDetailsTOComponent(user);
    };
    ChatComponent.prototype.userCalling = function () {
        this.bottomSheet.open(_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["PopUpComponent"]);
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-chat",
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/home/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/home/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ProjectService__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/home/chat/dial/dial.component.html":
/*!****************************************************!*\
  !*** ./src/app/home/chat/dial/dial.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!connected\">Dailling {{ userToBeDialed.name }}</p>\n\n<div *ngIf=\"connected\" class=\"conToggle\">\n  <p class=\"alert-success text-left\">\n    Call is now connected with {{ userToBeDialed.user_name }}\n  </p>\n\n  <button (click)=\"endSession()\" class=\"btn btn-danger\" >\n    <i aria-hidden=\"true\" class=\"fa fa-phone \" ></i>\n  </button>\n  <button (click)=\"cycleVideo()\" class=\"btn btn-danger\" style=\"margin-top:20px\">\n    <i aria-hidden=\"true\" class=\"fa fa-refresh \" ></i>\n  </button>\n</div>\n\n<br />\n\n<div *ngIf=\"checkForExistingSession()\">\n  <webcam [height]=\"250\"></webcam>\n</div>\n<div *ngIf=\"session\">\n  <app-publisher\n    [session]=\"session\"\n    [alreadyPublishing]=\"alreadyPublishing\"\n  ></app-publisher>\n  <app-subscriber\n    *ngFor=\"let stream of streams\"\n    [stream]=\"stream\"\n    [session]=\"session\"\n  ></app-subscriber>\n</div>\n"

/***/ }),

/***/ "./src/app/home/chat/dial/dial.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home/chat/dial/dial.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hhdC9kaWFsL2RpYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/chat/dial/dial.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home/chat/dial/dial.component.ts ***!
  \**************************************************/
/*! exports provided: DialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialComponent", function() { return DialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/ProjectService */ "./src/app/service/ProjectService.ts");
/* harmony import */ var _service_Opentok_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/Opentok.service */ "./src/app/service/Opentok.service.ts");





var DialComponent = /** @class */ (function () {
    function DialComponent(ref, opentokService, bottomSheet, projectService) {
        this.ref = ref;
        this.opentokService = opentokService;
        this.bottomSheet = bottomSheet;
        this.projectService = projectService;
        this.streams = [];
        this.connected = true;
        this.alreadyPublishing = false;
        this.userToBeDialed = projectService.userToBeDialed;
        localStorage.setItem("form_id", "" + this.userToBeDialed.form_id);
        console.log(this.userToBeDialed);
        this.changeDetectorRef = ref;
    }
    DialComponent.prototype.checkForExistingSession = function () {
        if (!this.session && this.projectService.storeCopyOfSession) {
            this.copyOfSession = this.projectService.storeCopyOfSession;
            this.alreadyPublishing = true;
            // console.log(true)
            return true;
        }
    };
    DialComponent.prototype.cycleVideo = function () {
        this.projectService.getCycleVideo();
    };
    DialComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.alreadyPublishing);
        console.log(this.session);
        if (!this.projectService.sessionConnected) {
            document.body.className = "bodyActive";
            this.opentokService
                .initSession()
                .then(function (session) {
                _this.session = session;
                _this.projectService.storeCopyOfSession = session;
                session.on("streamCreated", function (event) {
                    session.subscribe(event.stream);
                    this.connected = true;
                });
                _this.session.on("streamDestroyed", function (event) {
                    var idx = _this.streams.indexOf(event.stream);
                    if (idx > -1) {
                        _this.streams.splice(idx, 1);
                        _this.changeDetectorRef.detectChanges();
                    }
                });
            })
                .then(function () {
                _this.projectService.sessionConnected = true;
                _this.opentokService.connect();
            })
                .catch(function (err) {
                console.error(err);
                alert("Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.");
            });
        }
    };
    DialComponent.prototype.ngAfterViewInit = function () {
        this.connected = true;
        var tabElements1 = document.getElementsByClassName("OT_subscriber")[0];
        if (tabElements1)
            tabElements1.style.display = "block";
        var tabElements2 = document.getElementsByClassName("OT_publisher")[0];
        if (tabElements2)
            tabElements2.style.display = "block";
    };
    DialComponent.prototype.ngOnDestroy = function () {
        console.log("called");
        var tabElements = document.getElementsByClassName("OT_subscriber")[0];
        if (tabElements)
            tabElements.style.display = "none";
    };
    DialComponent.prototype.endSession = function () {
        var _this = this;
        setTimeout(function () {
            document.body.className = "";
        }, 500);
        setTimeout(function () {
            _this.opentokService.disconnect();
            _this.connected = false;
            _this.projectService.emitUserDial(false);
            var form_id = "";
            if (localStorage.getItem("form_id")) {
                form_id = "" + localStorage.getItem("form_id");
            }
            var data = {
                session_id: _this.projectService.openTokCreds.SESSION_ID,
                epoch: new Date().getTime(),
                form_id: form_id
            };
            _this.alreadyPublishing = false;
            _this.projectService.storeCopyOfSession = null;
            _this.projectService.endSession(data);
            var creds = {
                api_key: "",
                session_id: "",
                token: "",
            };
            _this.projectService.setOpenTokCredentials(creds);
        }, 600);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialComponent.prototype, "user", void 0);
    DialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dial",
            template: __webpack_require__(/*! ./dial.component.html */ "./src/app/home/chat/dial/dial.component.html"),
            styles: [__webpack_require__(/*! ./dial.component.scss */ "./src/app/home/chat/dial/dial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _service_Opentok_service__WEBPACK_IMPORTED_MODULE_4__["OpentokService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            _service_ProjectService__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], DialComponent);
    return DialComponent;
}());



/***/ }),

/***/ "./src/app/home/form/form-builder/form-builder.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/form/form-builder/form-builder.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form-builder works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/form/form-builder/form-builder.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/form/form-builder/form-builder.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9ybS9mb3JtLWJ1aWxkZXIvZm9ybS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/form/form-builder/form-builder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/form/form-builder/form-builder.component.ts ***!
  \******************************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent() {
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
    };
    FormBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-builder',
            template: __webpack_require__(/*! ./form-builder.component.html */ "./src/app/home/form/form-builder/form-builder.component.html"),
            styles: [__webpack_require__(/*! ./form-builder.component.scss */ "./src/app/home/form/form-builder/form-builder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());



/***/ }),

/***/ "./src/app/home/form/form.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/form/form.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <mat-progress-bar mode=\"buffer\" *ngIf=\"!sync\"></mat-progress-bar>\n  <div class=\"pl-2 pr-2\">\n    <div class=\"row mt-2\">\n      <div class=\"col\">\n        <!--<mat-list>\n        <mat-list-item><small>1. Select a paramater from dropdown menu.</small></mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item><small>2. Fill all the details corresponding to the selected parameter.</small></mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item><small>3. Navigate to next parameter to sync/save data.</small></mat-list-item>\n      </mat-list>-->\n        <div class=\"col-sm-12 p-2 rounded-top\">\n          <mat-form-field class=\"col-sm-5 mt-2\">\n            <mat-label class=\"\">Select parameter</mat-label>\n            <mat-select\n              [(value)]=\"parameter\"\n              (selectionChange)=\"checkAndUpdate(parameter)\"\n            >\n              <mat-option>None</mat-option>\n              <mat-option\n                *ngFor=\"let parameter of para_array; let i = index\"\n                value=\"{{ parameter }}\"\n                ><strong>{{ i + 1 }}.&nbsp;</strong>{{ parameter }}</mat-option\n              >\n            </mat-select>\n          </mat-form-field>\n          <div class=\"\" *ngIf=\"showSubQuestions\">\n            <mat-card\n              class=\"mb-2\"\n              *ngFor=\"let subques of subquestions; let i = index\"\n            >\n              <label id=\"example-radio-group-label\" class=\"col-sm-12 p-0 mb-3\"\n                ><strong>{{ i + 1 }}</strong\n                >.&nbsp;{{ subques.question }}</label\n              >\n\n              <div *ngIf=\"subques.options == 'Yes/No'\">\n                <mat-radio-group\n                  aria-labelledby=\"example-radio-group-label\"\n                  class=\"example-radio-group\"\n                >\n                  <mat-radio-button\n                    class=\"example-radio-button mr-3 ml-3\"\n                    *ngFor=\"let condition of conditions\"\n                    [value]=\"condition\"\n                    (change)=\"saveRadioWithSubQues(subques.id, $event, index)\"\n                  >\n                    {{ condition }}\n                  </mat-radio-button>\n                </mat-radio-group>\n              </div>\n\n              <div *ngIf=\"subques.options == 'photo'\">\n                <div class=\"example-full-width col-sm-12 p-0\">\n                  <input\n                    class=\"col-sm-12 p-0\"\n                    type=\"file\"\n                    accept=\"image/*;capture=camera\"\n                    (change)=\"browseImages(subques.id, $event, i)\"\n                  />\n                  <img\n                    class=\"col-6 pt-2 pb-2\"\n                    src=\"{{ subquestions[i].src }}\"\n                    alt=\"\"\n                    height=\"200px\"\n                    width=\"200px\"\n                  />\n                </div>\n              </div>\n\n              <div *ngIf=\"subques.options == 'Text'\">\n                <mat-form-field class=\"example-full-width col-sm-6 p-0\">\n                  <input\n                    id=\"{{ subques.id }}\"\n                    matInput\n                    #message\n                    placeholder=\"Enter details here...\"\n                    (change)=\"textDetails(subques.id, $event, i)\"\n                    value=\"\"\n                  />\n                </mat-form-field>\n              </div>\n              <!-- <div *ngIf=\"subques.options == 'video+image'\">\n              <mat-form-field class=\"example-full-width col-sm-6 p-0\">\n                <input matInput #message placeholder=\"Upload Video\" value=\"{{videoName}}\" (click)=\"uploadVideo(subques.id,$event)\" />\n                <input id=\"{{subques.id}}\" type=\"file\" class=\"d-none\" accept=\"image/*\" (change)=\"browseVideo(subques.id, $event)\" />\n                <mat-hint align=\"start\" class=\"displayText\">{{videoName}}</mat-hint>\n              </mat-form-field>\n            </div> -->\n            </mat-card>\n            <button mat-raised-button *ngIf=\"!showFreeze\" (click)=\"freeze()\">\n              Freeze Response\n            </button>\n            <strong class=\"d-block text-center mt-3\"\n              >Change parameters to save/sync this data</strong\n            >\n          </div>\n        </div>\n        <div class=\"col-sm-12 p-2\" *ngIf=\"!showSubQuestions\">\n          <mat-card>\n            <h5 class=\"p-5 text-muted\">\n              No parameters is selected. Please select parameter from above\n              options.\n            </h5>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/home/form/form.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/form/form.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/form/form.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/form/form.component.ts ***!
  \*********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ProjectService */ "./src/app/service/ProjectService.ts");



var FormComponent = /** @class */ (function () {
    function FormComponent(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.conditions = ['Yes', 'No'];
        this.showSubQuestions = false;
        this.sync = true;
        this.imgPreview = true;
        this.showFreeze = true;
        this.ProjectService.emitQuestions.subscribe(function (res) {
            _this.response = res;
            _this.para_array = Object.keys(res);
            // this.form_id
        });
        this.ProjectService.emitData_id.subscribe(function (res) {
            console.log(res);
            // this.response = res
            // this.para_array = Object.keys(res)
            // this.form_id
        });
        // this.para_array = ["physical_location", "basic_information", "process_capability", "suppliers","production_capability", "research_and_development"]
        // this.subquestions = [
        //   {
        //     "research_and_development":[
        //         {
        //             "id":"fddfahjdashj",
        //             "question":"Show the R&D facility.",
        //             "options":"photo"
        //         },
        //         {
        //             "id":"bmbahjdashj",
        //             "question":"Show the products/processes for which patents have been obtained.",
        //             "options":"photo"
        //         },
        //         {
        //             "id":"zxczahjdashj",
        //             "question":"Show prototype if any.",
        //             "options":"photo"
        //         }
        //     ]
        //   }
        // ]
    }
    FormComponent.prototype.ngOnInit = function () {
        this.ProjectService.get_admin_ui();
    };
    FormComponent.prototype.checkAndUpdate = function (i) {
        // Hit api
        var temp = {
            "form_id": "something",
            "parameter_id": "something",
            "question_id": "something",
            "response": "something"
        };
        // this.ProjectService.updateParameterResponse(this.images)
        this.images = '';
        for (var j = 0; j < this.para_array.length; j++) {
            if (i == this.para_array[j]) {
                if (j + 1 == this.para_array.length)
                    this.showFreeze = false;
                else
                    this.showFreeze = true;
                // this.param_id = set it to a value
                this.showSubQuestions = true;
                this.subquestions = this.response[i];
                this.param_name = i;
                // console.log(this.subquestions)
                return this.subquestions;
            }
            else {
                this.param_name = null;
                this.showSubQuestions = false;
            }
        }
    };
    FormComponent.prototype.freeze = function () {
        var temp = {
            "some data": "1",
            "somedata": "1",
            "sodata": "2",
            "somata": "3",
            "somta": "3"
        };
        // this.ProjectService.freeze(temp)
    };
    FormComponent.prototype.saveRadioWithSubQues = function (id, event) {
        // this.sync = false
        // this.param_ques_index = id
        var temp = {
            form_id: 'form_id_01',
            question_id: id,
            file_data: event.value,
            is_submit: false,
            data_id: null
        };
        this.ProjectService.postFormDetails(temp);
        this.sync = true;
    };
    FormComponent.prototype.textDetails = function (id, $event) {
        var temp = {
            form_id: 'form_id_01',
            question_id: id,
            file_data: $event.target.value,
            is_submit: false,
            data_id: null
        };
        this.ProjectService.postFormDetails(temp);
        console.log(localStorage.getItem("formResponse"));
    };
    FormComponent.prototype.browseImages = function (id, $event, pos) {
        var _this = this;
        this.imgPreview = true;
        var files = $event.target.files || $event.srcElement.files;
        var src;
        var data_id = localStorage.getItem(id);
        console.log(data_id);
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (event) {
            _this.images = reader.result;
            _this.subquestions[pos].src = reader.result;
            var temp = {
                form_id: 'form_id_01',
                question_id: id,
                file_data: _this.images,
                is_submit: false,
                data_id: data_id
            };
            _this.ProjectService.postFormDetails(temp);
            console.log(localStorage.getItem("formResponse"));
        };
        // console.log(this.subquestions[pos].src)
        this.imgPreview = false;
        // console.log(this.subquestions[pos].src)
        if (this.subquestions[0].quantity) {
            // if ((this.images.length+1) == this.subquestions[0].quantity ) alert("Uploaded "+this.subquestions[0].quantity+ " images.")
            // alert("upload only "+this.subquestions[0].quantity+" images.")
        }
        // this.ProjectService.sendImages(temp)
        // return this.images
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/home/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/home/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ProjectService__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/graphic/graphic.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/graphic/graphic.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <p>\n    graphic works!\n  </p>\n</main>\n"

/***/ }),

/***/ "./src/app/home/graphic/graphic.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/graphic/graphic.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ3JhcGhpYy9ncmFwaGljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/graphic/graphic.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/graphic/graphic.component.ts ***!
  \***************************************************/
/*! exports provided: GraphicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicComponent", function() { return GraphicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphicComponent = /** @class */ (function () {
    function GraphicComponent() {
    }
    GraphicComponent.prototype.ngOnInit = function () {
    };
    GraphicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graphic',
            template: __webpack_require__(/*! ./graphic.component.html */ "./src/app/home/graphic/graphic.component.html"),
            styles: [__webpack_require__(/*! ./graphic.component.scss */ "./src/app/home/graphic/graphic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphicComponent);
    return GraphicComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid navBar text-center\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-8 float-left text-left top-m\">\n      <strong class=\"email\" *ngIf=\"isEmail\">{{ email }}</strong>\n    </div>\n    <div class=\"col-4 float-left text-right top-m\">\n      <button mat-fab (click)=\"profileComponent()\" class=\"logout\">\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf=\"user_role==='assessor'\" >\n    <div class=\"row\">\n      <a\n        [routerLink]=\"['/chat']\"\n        class=\"col\"\n        routerLinkActive=\"active\"\n        mat-flat-button\n      >\n        Chat\n      </a>\n      <a\n        [routerLink]=\"['/response']\"\n        class=\"col\"\n        routerLinkActive=\"active\"\n        mat-flat-button\n      >\n        Response\n      </a>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"user_role==='vendor'\" >\n    <div class=\"row\">\n      <a\n        [routerLink]=\"['/form']\"\n        class=\"col\"\n        routerLinkActive=\"active\"\n        mat-flat-button\n      >\n        Form\n      </a>\n      <a\n        [routerLink]=\"['/chat']\"\n        class=\"col\"\n        routerLinkActive=\"active\"\n        mat-flat-button\n      >\n        Chat\n      </a>\n    </div>\n\n  </div>\n\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/home/profile/profile.component.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, bottomSheet) {
        this.router = router;
        this.bottomSheet = bottomSheet;
        this.isEmail = false;
        this.email = "";
        this.user_role = "";
    }
    HomeComponent.prototype.profileComponent = function () {
        this.bottomSheet.open(_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem("email") + "";
        if (this.email == null || this.email == 'null')
            this.isEmail = false;
        else
            this.isEmail = true;
        if (localStorage.getItem("role")) {
            this.user_role = localStorage.getItem("role") + "";
            console.log(this.user_role);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:55vh\">\n  <div class=\"form-group clearfix text-center profilePopup\">\n    <button mat-fab class=\"admin\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n    </button>\n\n    <p>\n      <strong>{{ user_name }}</strong>\n    </p>\n\n    <button mat-fab (click)=\"dismiss()\" class=\"cross pull-right\">\n      <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <button mat-fab (click)=\"logout()\" class=\"logout pull-right\">\n      <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <hr />\n  <form class=\"example-form\">\n    <h2 class=\"change-password text-center\">Change Password</h2>\n    <mat-form-field class=\"example-full-width\">\n      <input\n        matInput\n        type=\"password\"\n        id=\"password\"\n        placeholder=\"current Password\"\n        name=\"password\"\n      />\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input\n        matInput\n        type=\"password\"\n        id=\"pwd\"\n        placeholder=\"New Password\"\n        name=\"pswd\"\n      />\n    </mat-form-field>\n    <button mat-flat-button color=\"primary\" class=\"login\">Change</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/home/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL1FDSS1TQU0vd29ya3NwYWNlL2FuZ3VsYXIvb3BlbnRpa3Rva2FwcC9zcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0saUJBQWUsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7Zm9udC13ZWlnaHQ6NjAwO30iXX0= */"

/***/ }),

/***/ "./src/app/home/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, bottomSheet) {
        this.router = router;
        this.bottomSheet = bottomSheet;
        this.user_name = "";
        this.user_name = localStorage.getItem("email");
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/login"]);
        this.bottomSheet.dismiss();
    };
    ProfileComponent.prototype.dismiss = function () {
        this.bottomSheet.dismiss();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/home/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/home/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/home/response/live-assesment/live-assesment.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/response/live-assesment/live-assesment.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"displayLiveAssesment\" >\n\n  <div class=\"liveAssesmentStrip row align-items-center\">\n    <h4 class=\"live-assesment col-9 \">\n      <span class=\"animated infinite pulse live-assesment-danger\"></span> Live\n      Assesment\n    </h4>\n    <div class=\"col-3 text-right\">\n      <button class=\"btn btn-primary refresh\">\n        <i\n        class=\"fa fa-refresh rotateIn animated infinite\"\n        aria-hidden=\"true\"\n        (click)=refreshData()\n\n        ></i>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"tableContainer table-responsive\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of tableHeader\" [attr.colspan]=\"head.colspan\">\n            {{ head.data }}\n          </th>\n        </tr>\n\n        <tr>\n          <th *ngFor=\"let header of tableSubHeaders\" title=\"{{ header.name }}\">\n            {{ trimTableHeader(header.name) }}\n          </th>\n        </tr>\n\n        <tr *ngFor=\"let rd of tableResponse\">\n          <td *ngFor=\"let response of rd.responseData\">\n            <span *ngFor=\"let data of response.data\">\n              <span *ngIf=\"data.type === 'text'\">\n                {{ data.value }}\n              </span>\n\n              <span *ngIf=\"data.type === 'image'\">\n                <div style=\"margin:2px; margin-right:0px; margin-left:0px\">\n                  <img src=\"{{ data.src }}\" alt=\"\" width=\"80px\" height=\"100px\" />\n                </div>\n              </span>\n            </span>\n          </td>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    </table>\n  </div>\n\n</div>\n\n<div *ngIf=\"!displayLiveAssesment\" >\n  <h4>Live preview not available</h4>\n</div>\n"

/***/ }),

/***/ "./src/app/home/response/live-assesment/live-assesment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/response/live-assesment/live-assesment.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzcG9uc2UvbGl2ZS1hc3Nlc21lbnQvbGl2ZS1hc3Nlc21lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/response/live-assesment/live-assesment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/response/live-assesment/live-assesment.component.ts ***!
  \**************************************************************************/
/*! exports provided: LiveAssesmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAssesmentComponent", function() { return LiveAssesmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/ProjectService */ "./src/app/service/ProjectService.ts");



var LiveAssesmentComponent = /** @class */ (function () {
    //  +++++++++++++++original++++++++++++++++++++++++
    // tableHeader  = [
    //   { colspan:"1", data:"Assessor" },
    //   { colspan:"1", data:"Vendor" },
    //   { colspan:"1", data:"Physical Location" },
    //   { colspan:"2", data: "Basic Information" },
    //   { colspan:"1", data: "Process capability" },
    //   { colspan:"1", data: "Production Capacity" },
    //   { colspan:"1", data: "Suppliers" },
    //   { colspan:"1", data: "Transportation" },
    //   { colspan:"2", data: "Safety" },
    //   { colspan:"3", data: "Research & Development" }
    //   { colspan:"1", data:"Video link" }
    // ]
    //  +++++++++++++++original++++++++++++++++++++++++
    //  +++++++++++++++original++++++++++++++++++++++++
    // tableSubHeaders= [
    //   {name:"Geotagged Assessor"},
    //   {name:"Geotagged Vendor"},
    //   {name:"Geotagged Assessment"},
    //   {name:"What is the name of the official taking part in the assessment"},
    //   {name:"Designation of the official in the firm"},
    //   {name:"Show the process of production of the product"},
    //   {name:"Show the machines critical for production for the product"},
    //   {name:"What key aspects are focussed while selecting suppliers"},
    //   {name:"Show the transport facility"},
    //   {name:"Are there any effective signs and labels for safety"},
    //   {name:"Are there any fire extinguisher and other safety equipment in sight"},
    //   {name:"Show the R&D facility"},
    //   {name:"Show the products/processes for which patents have been obtained"},
    //   {name:"Show prototype if any"}
    //   {name:"Video link"}
    // ]
    //  +++++++++++++++original++++++++++++++++++++++++
    //  +++++++++++++++original++++++++++++++++++++++++
    // tableResponse=[
    //   {
    //     responseData : [
    //     {
    //         data : [
    //           {type:"text", value:"Assessor_NAme"},
    //         ]
    //       },
    //     {
    //         data : [
    //           {type:"text", value:"Vendor_NAme"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/1.jpg", id:""},
    //           {type:"image", src:"assets/images/2.jpg", id:""},
    //           {type:"image", src:"assets/images/3.jpg", id:""},
    //           {type:"image", src:"assets/images/4.jpg", id:""},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"text", value:"Some Name"},
    //           {type:"image", src:"assets/images/5.jpg"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"text", value:"Some Name"},
    //           {type:"image", src:"assets/images/5.jpg"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/5.jpg"},
    //           {type:"image", src:"assets/images/6.jpg"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/5.jpg"},
    //           {type:"image", src:"assets/images/6.jpg"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"text", value:"Some value goes here"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/7.jpg"},
    //           {type:"image", src:"assets/images/8.jpg"},
    //           {type:"image", src:"assets/images/9.jpg"},
    //           {type:"image", src:"assets/images/10.jpg"}
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"text", value:"Some Name"},
    //           {type:"image", src:"assets/images/11.jpg"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"text", value:"Some Name"},
    //           {type:"image", src:"assets/images/12.jpg"},
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/13.jpg"},
    //           {type:"image", src:"assets/images/14.jpg"},
    //           {type:"image", src:"assets/images/15.jpg"},
    //           {type:"image", src:"assets/images/16.jpg"}
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/17.jpg"},
    //           {type:"image", src:"assets/images/18.jpg"},
    //           {type:"image", src:"assets/images/19.jpg"},
    //           {type:"image", src:"assets/images/20.jpg"}
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"image", src:"assets/images/21.jpg"},
    //           {type:"image", src:"assets/images/8.jpg"},
    //           {type:"image", src:"assets/images/9.jpg"},
    //           {type:"image", src:"assets/images/10.jpg"}
    //         ]
    //       },
    //       {
    //         data : [
    //           {type:"Video", src:"assets/images/21.jpg"},
    //           {type:"video", src:"assets/images/8.jpg"},
    //           {type:"video", src:"assets/images/9.jpg"},
    //           {type:"video", src:"assets/images/10.jpg"}
    //         ]
    //       }
    //
    //     ]
    //   }
    // ]
    //  +++++++++++++++original++++++++++++++++++++++++
    function LiveAssesmentComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.tableHeader = [];
        this.tableSubHeaders = [];
        this.tableResponse = [];
        this.displayLiveAssesment = false;
        this.data = {};
        this.projectService.emitLiveResponse.subscribe(function (res) {
            console.log(res);
            if (res.response.tableHeader) {
                _this.tableHeader = res.response.tableHeader;
                _this.tableSubHeaders = res.response.tableSubHeader;
                _this.tableResponse = res.response.totalResponse;
                console.log(_this.tableHeader);
                console.log(_this.tableSubHeaders);
                console.log(_this.tableResponse);
                _this.displayLiveAssesment = true;
            }
        });
    }
    LiveAssesmentComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("form_id")) {
            var form_id = localStorage.getItem("form_id");
            this.data = {
                form_id: form_id
                // form_id: "form_id_01"
            };
            this.projectService.getLiveAssesment(this.data);
        }
    };
    LiveAssesmentComponent.prototype.trimTableHeader = function (header) {
        return (header.substring(14, 0) + "...");
    };
    LiveAssesmentComponent.prototype.refreshData = function () {
        this.projectService.getLiveAssesment(this.data);
    };
    LiveAssesmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-assesment',
            template: __webpack_require__(/*! ./live-assesment.component.html */ "./src/app/home/response/live-assesment/live-assesment.component.html"),
            styles: [__webpack_require__(/*! ./live-assesment.component.scss */ "./src/app/home/response/live-assesment/live-assesment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ProjectService__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], LiveAssesmentComponent);
    return LiveAssesmentComponent;
}());



/***/ }),

/***/ "./src/app/home/response/response.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/response/response.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-fluid\">\n    <div class=\"row align-items-center\" style=\"margin-top:2vh\">\n      <div class=\"col-lg-3 col-md-4 col-sm-12 \">\n        <app-schedule-graph></app-schedule-graph>\n      </div>\n\n      <div class=\"col-lg-9 col-md-8 col-sm-12\">\n        <app-schedule-data></app-schedule-data>\n      </div>\n\n      <div class=\"col-12\">\n        <app-live-assesment></app-live-assesment>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/home/response/response.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/response/response.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table thead th div, table tbody td div {\n  min-width: 24%;\n  max-width: 24%;\n  padding: 5px;\n  box-sizing: border-box;\n  height: 48px;\n  max-height: 48px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-height: 18px;\n  overflow: hidden;\n  color: #424342; }\n\ntable thead th div:first-child, table tbody td div:first-child {\n  min-width: 4%;\n  max-width: 4%; }\n\ntable tbody tr td {\n  cursor: pointer;\n  transition: all 250ms linear 50ms;\n  height: 48px; }\n\ntable tbody tr td .extra-details {\n    transition: all 250ms linear 50ms;\n    display: none; }\n\ntable tbody tr td .extra-details div {\n      min-width: 25%;\n      max-width: 25%;\n      padding: 5px;\n      box-sizing: border-box;\n      height: 48px;\n      max-height: 48px;\n      font-size: 14px;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-height: 18px;\n      overflow: hidden;\n      color: #424342; }\n\ntable tbody tr.active td {\n  transition: all 250ms linear 50ms;\n  height: 96px; }\n\ntable tbody tr.active td .extra-details {\n    transition: all 250ms linear 50ms;\n    display: block; }\n\n.extra-details {\n  position: absolute;\n  top: 48px;\n  left: 0;\n  width: 100%;\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL1FDSS1TQU0vd29ya3NwYWNlL2FuZ3VsYXIvb3BlbnRpa3Rva2FwcC9zcmMvYXBwL2hvbWUvcmVzcG9uc2UvcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsZUFBYztFQUNkLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixxQkFBb0I7RUFDcEIsc0JBQW9CO0VBQ3BCLGtCQUFpQjtFQUVqQixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGNBQWE7RUFDYixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixrQ0FBaUM7RUFDakMsYUFBWSxFQXFCZjs7QUF4QkQ7SUFLUSxrQ0FBaUM7SUFDakMsY0FBYSxFQWlCaEI7O0FBdkJMO01BUVksZUFBYztNQUNkLGVBQWM7TUFDZCxhQUFZO01BQ1osdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixpQkFBZ0I7TUFDaEIsZ0JBQWU7TUFDZix3QkFBdUI7TUFDdkIscUJBQW9CO01BQ3BCLHNCQUFvQjtNQUNwQixrQkFBaUI7TUFFakIsaUJBQWdCO01BQ2hCLGVBQWMsRUFDakI7O0FBR1Q7RUFDSSxrQ0FBaUM7RUFDakMsYUFBWSxFQUtmOztBQVBEO0lBSVEsa0NBQWlDO0lBQ2pDLGVBQWMsRUFDakI7O0FBRUw7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFFBQU87RUFDUCxZQUFXO0VBQ1gsMkJBQTBCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXNwb25zZS9yZXNwb25zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRoZWFkIHRoIGRpdiwgdGFibGUgdGJvZHkgdGQgZGl2IHtcbiAgICBtaW4td2lkdGg6IDI0JTtcbiAgICBtYXgtd2lkdGg6IDI0JTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWF4LWhlaWdodDogNDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOjI7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6ICM0MjQzNDI7XG59XG50YWJsZSB0aGVhZCB0aCBkaXY6Zmlyc3QtY2hpbGQsIHRhYmxlIHRib2R5IHRkIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgbWluLXdpZHRoOiA0JTtcbiAgICBtYXgtd2lkdGg6IDQlO1xufVxudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgbGluZWFyIDUwbXM7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgICYgLmV4dHJhLWRldGFpbHMge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgbGluZWFyIDUwbXM7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICYgZGl2IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6MjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjNDI0MzQyO1xuICAgICAgICB9XG4gICAgfVxufVxudGFibGUgdGJvZHkgdHIuYWN0aXZlIHRkIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgbGluZWFyIDUwbXM7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICAgICYgLmV4dHJhLWRldGFpbHMge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgbGluZWFyIDUwbXM7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICBcbiAgICB9XG59XG4uZXh0cmEtZGV0YWlscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/response/response.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/response/response.component.ts ***!
  \*****************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ProjectService */ "./src/app/service/ProjectService.ts");



var ResponseComponent = /** @class */ (function () {
    function ResponseComponent(projectService) {
        this.projectService = projectService;
    }
    ResponseComponent.prototype.ngOnInit = function () { };
    ResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-response',
            template: __webpack_require__(/*! ./response.component.html */ "./src/app/home/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.scss */ "./src/app/home/response/response.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ProjectService__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/home/response/schedule-data/schedule-data.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/response/schedule-data/schedule-data.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scheduleData row\">\n  <h4 class=\"col\">Scheduled sessions</h4>\n\n  <div class=\"boxContainer\">\n    <div *ngFor=\"let sData of scheduledData\" class=\"box1 col-lg-4 col\">\n      <mat-card *ngIf=\"sData.status === 'online'\" class=\"onlineBox1\">\n        <span class=\"time\">{{ sData.time }}</span>\n\n        <span class=\"date\">{{ sData.date }}</span>\n\n        <span class=\"status\">\n          <div class=\"progress\">\n            <div\n              class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\"\n              role=\"progressbar\"\n              aria-valuenow=\"75\"\n              aria-valuemin=\"0\"\n              aria-valuemax=\"100\"\n              style=\"width: 100%\"\n            >\n              {{ sData.status }}\n            </div>\n          </div>\n        </span>\n      </mat-card>\n\n      <mat-card *ngIf=\"sData.status === 'offline'\" class=\"offlineBox1\">\n        <span class=\"time\">{{ sData.time }}</span>\n\n        <span class=\"date\">{{ sData.date }}</span>\n\n        <span class=\"status\">\n          <div class=\"progress\">\n            <div\n              class=\"progress-bar progress-bar-striped  bg-danger\"\n              role=\"progressbar\"\n              aria-valuenow=\"75\"\n              aria-valuemin=\"0\"\n              aria-valuemax=\"100\"\n              style=\"width: 100%\"\n            >\n              {{ sData.status }}\n            </div>\n          </div>\n        </span>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/response/schedule-data/schedule-data.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/response/schedule-data/schedule-data.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzcG9uc2Uvc2NoZWR1bGUtZGF0YS9zY2hlZHVsZS1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/response/schedule-data/schedule-data.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/response/schedule-data/schedule-data.component.ts ***!
  \************************************************************************/
/*! exports provided: ScheduleDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDataComponent", function() { return ScheduleDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleDataComponent = /** @class */ (function () {
    function ScheduleDataComponent() {
        this.scheduledData = [
            {
                time: "10:30AM",
                date: "14/05/2019",
                status: "online"
            },
            {
                time: "11:30AM",
                date: "14/05/2019",
                status: "offline"
            },
            {
                time: "1:00PM",
                date: "14/05/2019",
                status: "offline"
            }
        ];
    }
    ScheduleDataComponent.prototype.ngOnInit = function () {
    };
    ScheduleDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-data',
            template: __webpack_require__(/*! ./schedule-data.component.html */ "./src/app/home/response/schedule-data/schedule-data.component.html"),
            styles: [__webpack_require__(/*! ./schedule-data.component.scss */ "./src/app/home/response/schedule-data/schedule-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleDataComponent);
    return ScheduleDataComponent;
}());



/***/ }),

/***/ "./src/app/home/response/schedule-graph/schedule-graph.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/home/response/schedule-graph/schedule-graph.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scheduleGraph row\">\n  <h4 class=\"col-12\" style=\"margin-bottom:15px;\">Session Summary</h4>\n  <div class=\"box1 col-12 text-left\">\n    <div class=\"session-summary\">\n      <strong>Total Session:10</strong>\n      <span>Today:1</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/response/schedule-graph/schedule-graph.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/response/schedule-graph/schedule-graph.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzcG9uc2Uvc2NoZWR1bGUtZ3JhcGgvc2NoZWR1bGUtZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/response/schedule-graph/schedule-graph.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/response/schedule-graph/schedule-graph.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScheduleGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleGraphComponent", function() { return ScheduleGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleGraphComponent = /** @class */ (function () {
    function ScheduleGraphComponent() {
    }
    ScheduleGraphComponent.prototype.ngOnInit = function () {
    };
    ScheduleGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-graph',
            template: __webpack_require__(/*! ./schedule-graph.component.html */ "./src/app/home/response/schedule-graph/schedule-graph.component.html"),
            styles: [__webpack_require__(/*! ./schedule-graph.component.scss */ "./src/app/home/response/schedule-graph/schedule-graph.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleGraphComponent);
    return ScheduleGraphComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <br />\n  <br />\n  <br />\n  <br />\n  <h4 class=\"text-center\">\n    GEM Assesment App\n  </h4>\n  <br />\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"form-group\">\n          <!-- <label for=\"email\"><strong>Username:</strong></label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"email\"\n            [(ngModel)]=\"email\"\n          /> -->\n          <mat-form-field class=\"example-full-width\">\n            <input\n              matInput\n              placeholder=\"Username\"\n              id=\"email\"\n              [(ngModel)]=\"email\"\n            />\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"example-full-width\">\n            <input\n              matInput\n              placeholder=\"Password\"\n              id=\"pwd\"\n              [(ngModel)]=\"password\"\n              type=\"password\"\n            />\n          </mat-form-field>\n        </div>\n        <div class=\"form-group \">\n          <label class=\"form-check-label\">\n            <mat-checkbox>Remember me</mat-checkbox>\n          </label>\n        </div>\n        <button\n          mat-flat-button\n          color=\"primary\"\n          type=\"submit\"\n          class=\"login\"\n          (click)=\"login()\"\n        >\n          Login\n        </button>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-layout {\n  align-items: center;\n  justify-content: center; }\n\n.mdl-layout__content {\n  padding: 1vh;\n  flex: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoYXNoYW5rL1FDSS1TQU0vd29ya3NwYWNlL2FuZ3VsYXIvb3BlbnRpa3Rva2FwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQW1CO0VBQ2xCLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNDLGFBQVk7RUFDWixXQUFVLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZGwtbGF5b3V0IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWRsLWxheW91dF9fY29udGVudCB7XG5cdHBhZGRpbmc6IDF2aDtcblx0ZmxleDogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ProjectService */ "./src/app/service/ProjectService.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.email = "";
        this.password = "";
        this.projectService.checkLogin();
        this.projectService.emitUserLogin.subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.email);
        console.log(this.password);
        var data = {
            user_name: this.email,
            password: this.password
        };
        this.projectService.login(data);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ProjectService__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pop-up/pop-up.component.html":
/*!**********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\" style=\"height:25vh; width:100vh\" >\n      Dialling ...\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pop-up/pop-up.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC9wb3AtdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pop-up/pop-up.component.ts":
/*!********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.ts ***!
  \********************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopUpComponent = /** @class */ (function () {
    function PopUpComponent() {
    }
    PopUpComponent.prototype.ngOnInit = function () { };
    PopUpComponent.prototype.ngOnDestroy = function () { };
    PopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pop-up",
            template: __webpack_require__(/*! ./pop-up.component.html */ "./src/app/pop-up/pop-up.component.html"),
            styles: [__webpack_require__(/*! ./pop-up.component.scss */ "./src/app/pop-up/pop-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopUpComponent);
    return PopUpComponent;
}());



/***/ }),

/***/ "./src/app/pop-up/publisher/publisher.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pop-up/publisher/publisher.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n<!-- <div #publisherDiv></div> -->\n"

/***/ }),

/***/ "./src/app/pop-up/publisher/publisher.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pop-up/publisher/publisher.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC9wdWJsaXNoZXIvcHVibGlzaGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pop-up/publisher/publisher.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pop-up/publisher/publisher.component.ts ***!
  \*********************************************************/
/*! exports provided: PublisherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherComponent", function() { return PublisherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_Opentok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/Opentok.service */ "./src/app/service/Opentok.service.ts");
/* harmony import */ var _service_ProjectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/ProjectService */ "./src/app/service/ProjectService.ts");




var publish = function () {
};
var PublisherComponent = /** @class */ (function () {
    function PublisherComponent(opentokService, projectService) {
        var _this = this;
        this.opentokService = opentokService;
        this.projectService = projectService;
        this.alreadyPublishing = false;
        this.publishing = false;
        this.projectService.emitCycleVideo.subscribe(function (res) {
            console.log(res);
            _this.cycleVideo();
        });
    }
    PublisherComponent.prototype.ngOnInit = function () {
        console.log(1);
    };
    PublisherComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.alreadyPublishing) {
            var OT_1 = this.opentokService.getOT();
            this.publisher = OT_1.initPublisher(this.publisherDiv.nativeElement, { insertMode: 'append' });
            if (this.session) {
                if (this.session['isConnected']()) {
                    this.publish();
                }
                this.session.on('sessionConnected', function () { return _this.publish(); });
            }
        }
    };
    PublisherComponent.prototype.cycleVideo = function () {
        this.publisher.cycleVideo();
    };
    PublisherComponent.prototype.publish = function () {
        var _this = this;
        this.session.publish(this.publisher, function (err) {
            if (err) {
                alert(err.message);
            }
            else {
                _this.publishing = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publisherDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PublisherComponent.prototype, "publisherDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", OT.Session)
    ], PublisherComponent.prototype, "session", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PublisherComponent.prototype, "alreadyPublishing", void 0);
    PublisherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publisher',
            template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/pop-up/publisher/publisher.component.html"),
            styles: [__webpack_require__(/*! ./publisher.component.scss */ "./src/app/pop-up/publisher/publisher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_Opentok_service__WEBPACK_IMPORTED_MODULE_2__["OpentokService"], _service_ProjectService__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], PublisherComponent);
    return PublisherComponent;
}());



/***/ }),

/***/ "./src/app/pop-up/subscriber/subscriber.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pop-up/subscriber/subscriber.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{someTestData}}\n<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/pop-up/subscriber/subscriber.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pop-up/subscriber/subscriber.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC9zdWJzY3JpYmVyL3N1YnNjcmliZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pop-up/subscriber/subscriber.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pop-up/subscriber/subscriber.component.ts ***!
  \***********************************************************/
/*! exports provided: SubscriberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberComponent", function() { return SubscriberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_2__);



var SubscriberComponent = /** @class */ (function () {
    function SubscriberComponent() {
        this.someTestData = "321";
        // const subscriber1 = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, (err) => {
        //   if (err) {
        //     alert(err.message);
        //   }
        // });
    }
    SubscriberComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, {}, function (err) {
            _this.someTestData = "123";
            if (err) {
                alert(err.message);
            }
        });
    };
    SubscriberComponent.prototype.ngOnDestroy = function () {
        // this.session.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subscriberDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubscriberComponent.prototype, "subscriberDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _opentok_client__WEBPACK_IMPORTED_MODULE_2__["Session"])
    ], SubscriberComponent.prototype, "session", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _opentok_client__WEBPACK_IMPORTED_MODULE_2__["Stream"])
    ], SubscriberComponent.prototype, "stream", void 0);
    SubscriberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscriber',
            template: __webpack_require__(/*! ./subscriber.component.html */ "./src/app/pop-up/subscriber/subscriber.component.html"),
            styles: [__webpack_require__(/*! ./subscriber.component.scss */ "./src/app/pop-up/subscriber/subscriber.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubscriberComponent);
    return SubscriberComponent;
}());



/***/ }),

/***/ "./src/app/service/APIService.ts":
/*!***************************************!*\
  !*** ./src/app/service/APIService.ts ***!
  \***************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
        this.projectURL = '../assets/APIData/';
        this.UI_JSON = '../assets/UI_JSON/';
        this.localURL = 'http://localhost:3000';
        this.localURL2 = 'https://assessment.qcin.org';
        // localURL2: string = 'http://192.168.15.146:5000';
        // localURL2: string = 'http://192.168.15.161:5000';
        //  localURL2: string = 'http://192.168.15.221:5000';
        this.current_URL = this.localURL;
        this.appHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "true" });
    }
    APIService.prototype.setHeader = function () {
        var token = localStorage.getItem("token");
        // console.log(token);
        this.appHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "" + token });
        this.appHeader.append({ "Content-Type": "application/json" });
        // console.log(token);
    };
    APIService.prototype.Login = function (data) {
        console.log('s');
        data = JSON.stringify(data);
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("POST", this.localURL2 + "/opentok/login", data, { reportProgress: true });
        return this.http.request(request);
    };
    APIService.prototype.GetChatUsers = function () {
        this.setHeader();
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("GET", this.localURL2 + "/opentok/getUsers", { reportProgress: true, headers: this.appHeader });
        return this.http.request(request);
    };
    APIService.prototype.StartArchive = function (data) {
        this.setHeader();
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("POST", this.localURL2 + "/opentok/archive", data, { reportProgress: true, headers: this.appHeader });
        return this.http.request(request);
    };
    APIService.prototype.GetLiveAssesment = function (data) {
        this.setHeader();
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.localURL2 + "/opentok/filleddetails", data, { reportProgress: true, headers: this.appHeader });
        console.log(this.http.request(request));
        return this.http.request(request);
    };
    APIService.prototype.Get_Admin_UI = function () {
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.localURL2 + "/opentok/getform", { reportProgress: true }); //, headers: this.appHeader
        return this.http.request(request);
    };
    APIService.prototype.updateParameterResponse = function (data) {
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', "API", JSON.stringify(data), { reportProgress: true, headers: this.appHeader });
        return this.http.request(request);
    };
    APIService.prototype.postFormDetails = function (data) {
        // console.log(data)
        this.setHeader();
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.localURL2 + "/opentok/submitresponse", data, { reportProgress: true, headers: this.appHeader }); //, headers: this.appHeader
        console.log(this.http.request(request));
        return this.http.request(request);
    };
    APIService.prototype.InitiateSession = function (data) {
        this.setHeader();
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("POST", this.localURL2 + "/opentok/createSession", data, { reportProgress: true, headers: this.appHeader });
        return this.http.request(request);
    };
    APIService.prototype.EndSession = function (data) {
        this.setHeader();
        var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]("POST", this.localURL2 + "/opentok/disconnectSession", data, { reportProgress: true, headers: this.appHeader });
        return this.http.request(request);
    };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/service/Opentok.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/Opentok.service.ts ***!
  \********************************************/
/*! exports provided: OpentokService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpentokService", function() { return OpentokService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProjectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectService */ "./src/app/service/ProjectService.ts");




var OpentokService = /** @class */ (function () {
    function OpentokService(projectService) {
        this.projectService = projectService;
        this.API_KEY = '';
        this.SESSION_ID = '';
        this.TOKEN = '';
    }
    OpentokService.prototype.getOT = function () {
        return _opentok_client__WEBPACK_IMPORTED_MODULE_2__;
    };
    OpentokService.prototype.initSession = function () {
        this.API_KEY = this.projectService.openTokCreds.API;
        this.SESSION_ID = this.projectService.openTokCreds.SESSION_ID;
        this.TOKEN = this.projectService.openTokCreds.TOKEN;
        if (this.API_KEY && this.TOKEN && this.SESSION_ID) {
            this.session = this.getOT().initSession(this.API_KEY, this.SESSION_ID);
            this.token = this.TOKEN;
            return Promise.resolve(this.session);
        }
    };
    OpentokService.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.session.connect(_this.token, function (err) {
                if (err) {
                    console.log(err + "");
                    reject(err);
                }
                else {
                    console.log(_this.session);
                    resolve(_this.session);
                }
            });
        });
    };
    OpentokService.prototype.disconnect = function () {
        console.log(this.session);
        if (this.session) {
            console.log("________________");
            this.session.disconnect();
            this.session = undefined;
            console.log("Disconnected");
            console.log("________________");
        }
    };
    OpentokService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ProjectService__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], OpentokService);
    return OpentokService;
}());



/***/ }),

/***/ "./src/app/service/ProjectService.ts":
/*!*******************************************!*\
  !*** ./src/app/service/ProjectService.ts ***!
  \*******************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _APIService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./APIService */ "./src/app/service/APIService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// import { Socket } from 'ngx-socket-io';
// import { map } from 'rxjs/operators';
// import { Observable, throwError } from "rxjs";
var ProjectService = /** @class */ (function () {
    function ProjectService(APIService, route, router) {
        this.APIService = APIService;
        this.route = route;
        this.router = router;
        this.emitResponses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitQuestions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dialUser = false;
        this.userToBeDialed = {};
        this.openTokCreds = {
            API: "",
            SESSION_ID: "",
            TOKEN: ""
        };
        this.sessionConnected = false;
        this.emitUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitData_id = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitDialUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitUserLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitChatUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitLiveResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitDismissPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitDialUserDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitCycleVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProjectService.prototype.HttpEventResponse = function (event) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Sent:
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].ResponseHeader:
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].DownloadProgress:
                var loaded = Math.round(event.loaded / 1024);
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return event.body;
        }
    };
    ProjectService.prototype.get_admin_ui = function () {
        var _this = this;
        this.APIService.Get_Admin_UI().subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                _this.emitQuestions.emit(response.data);
            }
            else {
                // alert('else tru while emitQuestions')
                // Some info to user;
            }
        }, function (err) {
            // alert('err tru while emitQuestions')
            // Some info to users;
        });
    };
    ProjectService.prototype.postFormDetails = function (temp) {
        var _this = this;
        this.APIService.postFormDetails(temp).subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            console.log(response);
            if (response) {
                localStorage.setItem(response.question_id, response.data_id);
                // this.emitData_id.emit(response)
            }
            else {
                // Some info to user;
            }
        }, function (err) {
            // Some info to users;
        });
    };
    ProjectService.prototype.login = function (data) {
        var _this = this;
        this.APIService.Login(data).subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                console.log(response);
                if (response.success) {
                    localStorage.setItem("token", response.token + "");
                    localStorage.setItem("role", response.role + "");
                    localStorage.setItem("email", data.user_name + "");
                    _this.emitUserLogin.emit({ login: 'true' });
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.checkLogin = function () {
        if (localStorage.getItem('token'))
            this.router.navigate(['/']);
    };
    ProjectService.prototype.getChatUsers = function () {
        var _this = this;
        this.APIService.GetChatUsers().subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                console.log(response);
                _this.emitChatUsers.emit({
                    chatUsers: response,
                    dialUser: _this.dialUser
                });
            }
        });
    };
    ProjectService.prototype.emitUserDial = function (flag) {
        this.dialUser = flag;
        this.emitDialUser.emit({ dialUser: this.dialUser });
    };
    ProjectService.prototype.emitDialUserDetailsTOComponent = function (user) {
        this.userToBeDialed = user;
        this.emitDialUserDetails.emit({
            user: this.userToBeDialed
        });
    };
    ProjectService.prototype.startArchive = function (data) {
        var _this = this;
        this.APIService.StartArchive(data).subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                console.log("Archive video");
                console.log(response);
            }
        });
    };
    ProjectService.prototype.initiateSession = function (data) {
        var _this = this;
        this.APIService.InitiateSession(data).subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                console.log(response);
                if (response.success) {
                    if (response.form_id) {
                        localStorage.setItem('form_id', "" + response.form_id);
                    }
                    _this.setOpenTokCredentials(response);
                    _this.emitDismissPopupFunction();
                    var archiveData = {
                        session_id: response.session_id,
                        form_id: response.form_id,
                        has_video: true,
                        has_audio: true
                    };
                    setTimeout(function () {
                        //  this.startArchive(archiveData)
                    }, 4000);
                }
            }
        });
    };
    ProjectService.prototype.setOpenTokCredentials = function (response) {
        this.openTokCreds = {
            API: response.api_key,
            SESSION_ID: response.session_id,
            TOKEN: response.token
        };
        localStorage.setItem('form_id', "" + response.form_id);
    };
    ProjectService.prototype.emitDismissPopupFunction = function () {
        this.emitDismissPopup.emit({
            dismiss: "true"
        });
    };
    ProjectService.prototype.endSession = function (data) {
        var _this = this;
        this.APIService.EndSession(data).subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                _this.sessionConnected = false;
                console.log(response);
                _this.getChatUsers();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.emitLiveResponseFun = function (response) {
        this.emitLiveResponse.emit({
            response: response
        });
    };
    ProjectService.prototype.getLiveAssesment = function (data) {
        var _this = this;
        this.APIService.GetLiveAssesment(data).subscribe(function (event) {
            var response = _this.HttpEventResponse(event);
            if (response) {
                // console.log(response)
                _this.emitLiveResponseFun(response);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getCycleVideo = function () {
        this.emitCycleVideo.emit({
            cycle: "video"
        });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_APIService__WEBPACK_IMPORTED_MODULE_3__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shashank/QCI-SAM/workspace/angular/opentiktokapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map