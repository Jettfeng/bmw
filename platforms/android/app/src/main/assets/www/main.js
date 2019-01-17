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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _pages_dealer_dealer_list_dealer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dealer/dealer-list/dealer-list.component */ "./src/app/pages/dealer/dealer-list/dealer-list.component.ts");
/* harmony import */ var _pages_dealer_dealer_edit_dealer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dealer/dealer-edit/dealer-edit.component */ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.ts");
/* harmony import */ var _pages_dealer_dealer_create_dealer_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dealer/dealer-create/dealer-create.component */ "./src/app/pages/dealer/dealer-create/dealer-create.component.ts");
/* harmony import */ var _pages_dealer_dealer_information_dealer_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dealer/dealer-information/dealer-information.component */ "./src/app/pages/dealer/dealer-information/dealer-information.component.ts");
/* harmony import */ var _pages_dealer_dealer_config_notification_dealer_config_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dealer/dealer-config-notification/dealer-config-notification.component */ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.ts");
/* harmony import */ var _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user/user-list/user-list.component */ "./src/app/pages/user/user-list/user-list.component.ts");
/* harmony import */ var _pages_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user/user-create/user-create.component */ "./src/app/pages/user/user-create/user-create.component.ts");
/* harmony import */ var _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/user/user-edit/user-edit.component */ "./src/app/pages/user/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_dashboard_car_dashboard_car_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/car-dashboard/car-dashboard.component */ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.ts");
/* harmony import */ var _pages_dashboard_car_timeline_car_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dashboard/car-timeline/car-timeline.component */ "./src/app/pages/dashboard/car-timeline/car-timeline.component.ts");
/* harmony import */ var _pages_dashboard_car_config_notification_car_config_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/dashboard/car-config-notification/car-config-notification.component */ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.ts");
/* harmony import */ var _pages_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/menu/menu/menu.component */ "./src/app/pages/menu/menu/menu.component.ts");
/* harmony import */ var _pages_data_data_export_data_export_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/data/data-export/data-export.component */ "./src/app/pages/data/data-export/data-export.component.ts");
/* harmony import */ var _pages_beacon_beacon_list_beacon_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/beacon/beacon-list/beacon-list.component */ "./src/app/pages/beacon/beacon-list/beacon-list.component.ts");
/* harmony import */ var _pages_beacon_beacon_register_beacon_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/beacon/beacon-register/beacon-register.component */ "./src/app/pages/beacon/beacon-register/beacon-register.component.ts");
/* harmony import */ var _pages_beacon_beacon_edit_beacon_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/beacon/beacon-edit/beacon-edit.component */ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.ts");
/* harmony import */ var _pages_car_car_register_car_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/car/car-register/car-register.component */ "./src/app/pages/car/car-register/car-register.component.ts");
/* harmony import */ var _pages_car_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/car/car-list/car-list.component */ "./src/app/pages/car/car-list/car-list.component.ts");
/* harmony import */ var _pages_car_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/car/car-edit/car-edit.component */ "./src/app/pages/car/car-edit/car-edit.component.ts");
/* harmony import */ var _pages_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/profile/profile-edit/profile-edit.component */ "./src/app/pages/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var _pages_profile_profile_pwd_profile_pwd_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/profile/profile-pwd/profile-pwd.component */ "./src/app/pages/profile/profile-pwd/profile-pwd.component.ts");
/* harmony import */ var _pages_station_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/station/station-edit/station-edit.component */ "./src/app/pages/station/station-edit/station-edit.component.ts");
/* harmony import */ var _pages_node_node_edit_node_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/node/node-edit/node-edit.component */ "./src/app/pages/node/node-edit/node-edit.component.ts");
/* harmony import */ var _pages_station_station_config_station_config_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/station/station-config/station-config.component */ "./src/app/pages/station/station-config/station-config.component.ts");
/* harmony import */ var _pages_node_node_config_node_config_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/node/node-config/node-config.component */ "./src/app/pages/node/node-config/node-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    }, {
        path: 'login',
        component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
        path: 'menu',
        component: _pages_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
        path: 'dealer',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'list', component: _pages_dealer_dealer_list_dealer_list_component__WEBPACK_IMPORTED_MODULE_4__["DealerListComponent"] },
            { path: 'create', component: _pages_dealer_dealer_create_dealer_create_component__WEBPACK_IMPORTED_MODULE_6__["DealerCreateComponent"] },
            { path: 'edit/:dealerId', component: _pages_dealer_dealer_edit_dealer_edit_component__WEBPACK_IMPORTED_MODULE_5__["DealerEditComponent"] },
            { path: 'information/:dealerId', component: _pages_dealer_dealer_information_dealer_information_component__WEBPACK_IMPORTED_MODULE_7__["DealerInformationComponent"] },
            {
                path: 'config',
                children: [
                    { path: 'notification/:dealerId', component: _pages_dealer_dealer_config_notification_dealer_config_notification_component__WEBPACK_IMPORTED_MODULE_8__["DealerConfigNotificationComponent"] },
                    { path: 'beacon/:dealerId', component: _pages_beacon_beacon_list_beacon_list_component__WEBPACK_IMPORTED_MODULE_17__["BeaconListComponent"] },
                ]
            }
        ]
    }, {
        path: 'station',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'config/:dealerId', component: _pages_station_station_config_station_config_component__WEBPACK_IMPORTED_MODULE_27__["StationConfigComponent"] },
            { path: 'edit/:dealerId/:stationId', component: _pages_station_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_25__["StationEditComponent"] },
        ]
    }, {
        path: 'node',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'config/:dealerId', component: _pages_node_node_config_node_config_component__WEBPACK_IMPORTED_MODULE_28__["NodeConfigComponent"] },
            { path: 'edit/:dealerId/:nodeId', component: _pages_node_node_edit_node_edit_component__WEBPACK_IMPORTED_MODULE_26__["NodeEditComponent"] },
        ]
    }, {
        path: 'user',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'list/:dealerId', component: _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"] },
            { path: 'create/:dealerId', component: _pages_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_10__["UserCreateComponent"] },
            { path: 'edit/:dealerId/:userId', component: _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"] },
        ]
    }, {
        path: 'dashboard',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'car/:dealerId', component: _pages_dashboard_car_dashboard_car_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["CarDashboardComponent"] },
            { path: 'timeline/:dealerId/:carId', component: _pages_dashboard_car_timeline_car_timeline_component__WEBPACK_IMPORTED_MODULE_13__["CarTimelineComponent"] },
            {
                path: 'config',
                children: [
                    { path: 'notification/:dealerId', component: _pages_dashboard_car_config_notification_car_config_notification_component__WEBPACK_IMPORTED_MODULE_14__["CarConfigNotificationComponent"] },
                ]
            }
        ]
    }, {
        path: 'data',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'export/:dealerId', component: _pages_data_data_export_data_export_component__WEBPACK_IMPORTED_MODULE_16__["DataExportComponent"] },
        ]
    }, {
        path: 'beacon',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'list/:dealerId', component: _pages_beacon_beacon_list_beacon_list_component__WEBPACK_IMPORTED_MODULE_17__["BeaconListComponent"] },
            { path: 'register/:dealerId', component: _pages_beacon_beacon_register_beacon_register_component__WEBPACK_IMPORTED_MODULE_18__["BeaconRegisterComponent"] },
            { path: 'edit/:dealerId/:beaconId', component: _pages_beacon_beacon_edit_beacon_edit_component__WEBPACK_IMPORTED_MODULE_19__["BeaconEditComponent"] },
        ]
    }, {
        path: 'car',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'list/:dealerId', component: _pages_car_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_21__["CarListComponent"] },
            { path: 'register/:dealerId', component: _pages_car_car_register_car_register_component__WEBPACK_IMPORTED_MODULE_20__["CarRegisterComponent"] },
            { path: 'edit/:dealerId/:carId', component: _pages_car_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_22__["CarEditComponent"] },
        ]
    }, {
        path: 'profile',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'edit', component: _pages_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_23__["ProfileEditComponent"] },
            { path: 'pwd', component: _pages_profile_profile_pwd_profile_pwd_component__WEBPACK_IMPORTED_MODULE_24__["ProfilePwdComponent"] }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'app';
        this.en = true;
        this.zh = false;
        translate.addLangs(['en', 'zh']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
    }
    //切换语言
    AppComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var _app_interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/interceptors/header.interceptor */ "./src/app/interceptors/header.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _pages_dealer_dealer_list_dealer_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dealer/dealer-list/dealer-list.component */ "./src/app/pages/dealer/dealer-list/dealer-list.component.ts");
/* harmony import */ var _pages_dealer_dealer_edit_dealer_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dealer/dealer-edit/dealer-edit.component */ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.ts");
/* harmony import */ var _pages_dealer_dealer_create_dealer_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/dealer/dealer-create/dealer-create.component */ "./src/app/pages/dealer/dealer-create/dealer-create.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_header_n_header_n_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header_n/header_n.component */ "./src/app/components/header_n/header_n.component.ts");
/* harmony import */ var _pages_dealer_dealer_information_dealer_information_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/dealer/dealer-information/dealer-information.component */ "./src/app/pages/dealer/dealer-information/dealer-information.component.ts");
/* harmony import */ var _pages_dealer_dealer_config_notification_dealer_config_notification_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/dealer/dealer-config-notification/dealer-config-notification.component */ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.ts");
/* harmony import */ var _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user/user-list/user-list.component */ "./src/app/pages/user/user-list/user-list.component.ts");
/* harmony import */ var _pages_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user/user-create/user-create.component */ "./src/app/pages/user/user-create/user-create.component.ts");
/* harmony import */ var _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/user/user-edit/user-edit.component */ "./src/app/pages/user/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_dashboard_car_dashboard_car_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/dashboard/car-dashboard/car-dashboard.component */ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.ts");
/* harmony import */ var _pages_dashboard_car_timeline_car_timeline_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/dashboard/car-timeline/car-timeline.component */ "./src/app/pages/dashboard/car-timeline/car-timeline.component.ts");
/* harmony import */ var _pages_dashboard_car_config_notification_car_config_notification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/dashboard/car-config-notification/car-config-notification.component */ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.ts");
/* harmony import */ var _pages_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/menu/menu/menu.component */ "./src/app/pages/menu/menu/menu.component.ts");
/* harmony import */ var _pages_data_data_export_data_export_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/data/data-export/data-export.component */ "./src/app/pages/data/data-export/data-export.component.ts");
/* harmony import */ var _pages_beacon_beacon_list_beacon_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/beacon/beacon-list/beacon-list.component */ "./src/app/pages/beacon/beacon-list/beacon-list.component.ts");
/* harmony import */ var _pages_beacon_beacon_register_beacon_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/beacon/beacon-register/beacon-register.component */ "./src/app/pages/beacon/beacon-register/beacon-register.component.ts");
/* harmony import */ var _pages_beacon_beacon_edit_beacon_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/beacon/beacon-edit/beacon-edit.component */ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.ts");
/* harmony import */ var _pages_car_car_register_car_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/car/car-register/car-register.component */ "./src/app/pages/car/car-register/car-register.component.ts");
/* harmony import */ var _pages_car_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/car/car-list/car-list.component */ "./src/app/pages/car/car-list/car-list.component.ts");
/* harmony import */ var _pages_car_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/car/car-edit/car-edit.component */ "./src/app/pages/car/car-edit/car-edit.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/confirm-delete-modal/confirm-delete-modal.component */ "./src/app/components/confirm-delete-modal/confirm-delete-modal.component.ts");
/* harmony import */ var _pages_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/profile/profile-edit/profile-edit.component */ "./src/app/pages/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var _pages_profile_profile_pwd_profile_pwd_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/profile/profile-pwd/profile-pwd.component */ "./src/app/pages/profile/profile-pwd/profile-pwd.component.ts");
/* harmony import */ var _pages_station_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/station/station-edit/station-edit.component */ "./src/app/pages/station/station-edit/station-edit.component.ts");
/* harmony import */ var _pages_node_node_edit_node_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/node/node-edit/node-edit.component */ "./src/app/pages/node/node-edit/node-edit.component.ts");
/* harmony import */ var _pages_station_station_config_station_config_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/station/station-config/station-config.component */ "./src/app/pages/station/station-config/station-config.component.ts");
/* harmony import */ var _pages_node_node_config_node_config_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/node/node-config/node-config.component */ "./src/app/pages/node/node-config/node-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_dealer_dealer_list_dealer_list_component__WEBPACK_IMPORTED_MODULE_12__["DealerListComponent"],
                _pages_dealer_dealer_edit_dealer_edit_component__WEBPACK_IMPORTED_MODULE_13__["DealerEditComponent"],
                _pages_dealer_dealer_create_dealer_create_component__WEBPACK_IMPORTED_MODULE_14__["DealerCreateComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _components_header_n_header_n_component__WEBPACK_IMPORTED_MODULE_16__["Header_nComponent"],
                _pages_dealer_dealer_information_dealer_information_component__WEBPACK_IMPORTED_MODULE_17__["DealerInformationComponent"],
                _pages_dealer_dealer_config_notification_dealer_config_notification_component__WEBPACK_IMPORTED_MODULE_18__["DealerConfigNotificationComponent"],
                _pages_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
                _pages_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_20__["UserCreateComponent"],
                _pages_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_21__["UserEditComponent"],
                _pages_dashboard_car_dashboard_car_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["CarDashboardComponent"],
                _pages_dashboard_car_timeline_car_timeline_component__WEBPACK_IMPORTED_MODULE_23__["CarTimelineComponent"],
                _pages_dashboard_car_config_notification_car_config_notification_component__WEBPACK_IMPORTED_MODULE_24__["CarConfigNotificationComponent"],
                _pages_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"],
                _pages_data_data_export_data_export_component__WEBPACK_IMPORTED_MODULE_26__["DataExportComponent"],
                _pages_beacon_beacon_list_beacon_list_component__WEBPACK_IMPORTED_MODULE_27__["BeaconListComponent"],
                _pages_beacon_beacon_register_beacon_register_component__WEBPACK_IMPORTED_MODULE_28__["BeaconRegisterComponent"],
                _pages_beacon_beacon_edit_beacon_edit_component__WEBPACK_IMPORTED_MODULE_29__["BeaconEditComponent"],
                _pages_car_car_register_car_register_component__WEBPACK_IMPORTED_MODULE_30__["CarRegisterComponent"],
                _pages_car_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_31__["CarListComponent"],
                _pages_car_car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_32__["CarEditComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmModalComponent"],
                _components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmDeleteModalComponent"],
                _pages_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_36__["ProfileEditComponent"],
                _pages_station_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_38__["StationEditComponent"],
                _pages_node_node_edit_node_edit_component__WEBPACK_IMPORTED_MODULE_39__["NodeEditComponent"],
                _pages_station_station_config_station_config_component__WEBPACK_IMPORTED_MODULE_40__["StationConfigComponent"],
                _pages_node_node_config_node_config_component__WEBPACK_IMPORTED_MODULE_41__["NodeConfigComponent"],
                _pages_profile_profile_pwd_profile_pwd_component__WEBPACK_IMPORTED_MODULE_37__["ProfilePwdComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            providers: [
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _app_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _app_interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_5__["HeaderInterceptor"],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirm-delete-modal/confirm-delete-modal.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/confirm-delete-modal/confirm-delete-modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"confirm-delete-modal\" uk-modal=\"bg-close:false; esc-close=false;\">\r\n    <div class=\"uk-modal-dialog\">\r\n        <div class=\"uk-modal-body\">\r\n            <p>{{detail}}</p>\r\n        </div>\r\n        <div class=\"uk-modal-footer uk-text-right\">\r\n          <button class=\"uk-button uk-button-primary uk-border-rounded\" type=\"button\" (click)=\"clickConfirm()\">{{confirm}}</button>\r\n          <button class=\"uk-button uk-button-default uk-modal-close uk-margin-left uk-border-rounded\" type=\"button\" (click)=\"clickCancel()\">{{cancel}}</button>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/confirm-delete-modal/confirm-delete-modal.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/confirm-delete-modal/confirm-delete-modal.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/confirm-delete-modal/confirm-delete-modal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/confirm-delete-modal/confirm-delete-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfirmDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteModalComponent", function() { return ConfirmDeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmDeleteModalComponent = /** @class */ (function () {
    function ConfirmDeleteModalComponent() {
        this.header = "Confirm";
        this.detail = "Are you confirm?";
        this.confirm = "Confirm";
        this.cancel = "Cancel";
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmDeleteModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeleteModalComponent.prototype.clickConfirm = function () {
        this.onClick.emit(true);
    };
    ConfirmDeleteModalComponent.prototype.clickCancel = function () {
        this.onClick.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDeleteModalComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDeleteModalComponent.prototype, "detail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDeleteModalComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDeleteModalComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmDeleteModalComponent.prototype, "onClick", void 0);
    ConfirmDeleteModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-delete-modal',
            template: __webpack_require__(/*! ./confirm-delete-modal.component.html */ "./src/app/components/confirm-delete-modal/confirm-delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete-modal.component.scss */ "./src/app/components/confirm-delete-modal/confirm-delete-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmDeleteModalComponent);
    return ConfirmDeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/components/confirm-modal/confirm-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-modal/confirm-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div attr.id=\"{{elementId}}\"  uk-modal=\"bg-close:false; esc-close=false;\">\r\n  <div class=\"uk-modal-dialog\">\r\n      <div class=\"uk-modal-body\">\r\n          <p>{{detail}}</p>\r\n      </div>\r\n      <div class=\"uk-modal-footer uk-text-right\">\r\n        <button class=\"uk-button uk-button-primary uk-border-rounded\" type=\"button\" (click)=\"clickConfirm()\" [translate]=\"confirm\"></button>\r\n        <button class=\"uk-button uk-button-default uk-modal-close uk-margin-left uk-border-rounded\" type=\"button\" (click)=\"clickCancel()\" [translate]=\"cancel\"></button>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/confirm-modal/confirm-modal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-modal/confirm-modal.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/confirm-modal/confirm-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirm-modal/confirm-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
        this.header = "Confirm";
        this.detail = "Are you confirm?";
        this.confirm = "Confirm";
        this.cancel = "Cancel";
        this.elementId = "confirm-modal";
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.clickConfirm = function () {
        this.onClick.emit(true);
    };
    ConfirmModalComponent.prototype.clickCancel = function () {
        this.onClick.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "detail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "elementId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmModalComponent.prototype, "onClick", void 0);
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/components/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/components/confirm-modal/confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"uk-navbar-container uk-margin footer-bottom\" uk-navbar>\r\n  <div class=\"uk-navbar-left\">\r\n    xcvxcvvs\r\n  </div>\r\n  <div class=\"uk-navbar-right\">\r\n  </div>\r\n</nav> -->\r\n\r\n<!-- <div class=\"footer-bottom uk-margin-top\"></div> -->\r\n\r\n<!-- <div class=\"footer-padding \" ></div> -->\r\n \r\n<!-- <ul class=\"uk-subnav uk-subnav-divider uk-child-width-1-3 uk-text-center  uk-margin-remove  footer-bottom\" >\r\n  <li><a class=\"uk-text-emphasis\" href=\"javascript:void(0)\" (click)=\"dashboard()\">{{'DashBoard'|translate}} {{'Management'|translate}}</a></li>\r\n  <li><a class=\"uk-text-emphasis\" href=\"javascript:void(0)\" (click)=\"carManagement()\">{{'Car'|translate}} {{'Management'|translate}}</a></li>\r\n  <li><a class=\"uk-text-emphasis\" href=\"javascript:void(0)\" (click)=\"profileManagement()\">{{'Profile'|translate}} {{'Management'|translate}}</a></li>\r\n</ul> -->\r\n\r\n<ul class=\"footer-bottom\" >\r\n    <li>\r\n      <a class=\"uk-text-emphasis\" href=\"javascript:void(0)\" (click)=\"dashboard()\">\r\n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"72px\" height=\"52px\" viewBox=\"0 0 72 52\" enable-background=\"new 0 0 72 52\" xml:space=\"preserve\">  <image id=\"image0\" width=\"72\" height=\"52\" x=\"0\" y=\"0\"\r\n            href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA0CAQAAACDBLZ2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r\n        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN\r\n        RQfjARASCzDr8iPaAAAEt0lEQVRYw72Zf0yVVRjHP+deYP3AfjDLomYqkUoaA8tN+6Mt2zJRY6u2\r\n        SM1Ya2ZJbS0xt9YfrdmYOWtJ5ZqWIGSuX0orWXNWLisRrJShKaSsH0iiMqklcu+3Pzi8u9x7gfe+\r\n        77089w+e97znPO/nfZ7nvOecByO8SqdO0E0HZ+mlF8gggyzGcQWTuMZ4tWoSB+rQzzTTzCnaiTfa\r\n        MJ7ryGMyBWQnDJYQ0CF9y16OEHJrnKncyRxuTQDLJdAZ1fMFPxEAQri1L4JAiNsoYh5XuxrmAqhd\r\n        teygx/1LxpVMFrKI8SNCjQB0RpvZGjdEl5PDeK5nEkfYYtuWMoU2OjhJK//EGRNkCaVkDQs1LFCt\r\n        3qI7qi2dQmYxnTwyreGDetTeq6LAtp1XC4f4niYuRo2/iuU8MgzSkEAtquCAky0GATO5l7sYF2Wu\r\n        Xs9bbS1zo+6d0jfU8yPGWgAQt/MCU4aAGgJom16JSF0DLOBhpsc10qF7AIPhqxjYfjmsD6gDwhEv\r\n        uJqSuH3jAq3ULkcPYCimhMnDuLlJlYgVFA7T56hq2YEIO0j3URGnfwxQh8o4EnFdyLPDPigR+UXr\r\n        aIq4nkplzDc9CqhNj3HW6sJQzpIkwQxItdbT5+RTNm9EZdMgoBY9wTkbZ5HHq+QkGQfgmMpptUgG\r\n        w4eDkCKAjqmEC87VPNYQTAEOQFgvUmdfO8BlbI/4YDpAp/UQXc48WMaKFMEMSKXesT4KM4Y6xpoo\r\n        oAf1q3WjWMnSFOMAbFWFo9/Cx/aJgf4/T+u4xbmUtaOCA4vNOi6xeitligDapAP0OR3vGA0aAAod\r\n        rY/9bBaAEa0qjugU5lp2ExgFH4U1h86BEAGGT7jZBKBsULcgnbw5Kv7ZQCfBQS3PAOZlbbd8ISCI\r\n        gAB7Rtgk+Jcu3W2XEYHz7SshLZdy0oCLzKSGTzEI0U1WEh/eo8yY1+tGCIMoopQG0oA+0kERvw4V\r\n        aJry9ZRE8n4bNFtF2h9jc7nyNU0z9NegO1FrWbt2MWaIjYE3qVYFBkhnD1dG2a3RORZEbWs9HIMS\r\n        kaMqJmgz5DNXK2Ng5C7epU9PkoGh/0A0wdWYtFQCreK01cKsd7lUp9BDVfraeUgFN7jMy5QBHdZG\r\n        ZzNTTJHraZKipA5pPr9bfSI7E5i1KfLQc5xy9LcTGpkSoK36gV4AxFrX2dMvKZhlR/U6F+xkfyDm\r\n        6DiSJD2HQprL34QAMYHPE/7mJz1k5XTRB4hMKj2MT3LItmm3rR+lsZqbPKyJSQVq0RqrGYq539MS\r\n        nYQc+leNnCSDbF6jlf66WS4fedwx+AZ6V7V0DSp+BjDsdFEriy8+Q7ZM+yIqPwCGdF7yjONzlq3S\r\n        dxBTGs5loY8Nng+gRn1pt16RPhLHafGRBz6Atth4i3ze5z0KLN5/ThHUi/jIoTZ6MYgbqTYAVczV\r\n        HwA0+wDy7KGQejCAmOG0FdjQnSfsOWiegYIm0x4qDzhtBy1ipo+juI8cyiEDgD9ZrAY1qNQGLIMc\r\n        70b9fBgbVeoU5uQciA1ii48yqQ8PzTBFTomrv1oIEGKhr6qtz6VjufZG/W9oNht9nXt9r2WbVMNp\r\n        66OxLOJxn8fwJKz2v2kfJxCTmMVE31WB/wE6u8IP2TWeIAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAx\r\n        OS0wMS0xNlQxMDoxMTo0OCswODowMBaVAgoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDEtMTZU\r\n        MTA6MTE6NDgrMDg6MDBnyLq2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAA\r\n        AABJRU5ErkJggg==\" />\r\n        </svg>\r\n        <span class=\"uk-text-small\">{{'DashBoard'|translate}}</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a class=\"uk-text-emphasis\" href=\"javascript:void(0)\" (click)=\"carManagement()\">\r\n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"66px\" height=\"49px\" viewBox=\"0 0 66 49\" enable-background=\"new 0 0 66 49\" xml:space=\"preserve\">  <image id=\"image0\" width=\"66\" height=\"49\" x=\"0\" y=\"0\"\r\n            href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAxCAQAAADE67cMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r\n        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN\r\n        RQfjARASDAH1bbUnAAADsklEQVRYw82YTWhcVRTHf/dlJrZi29iiDWKaVJoIVbQI/aBoiIsGEpeG\r\n        LAxKsdQiQmM3saBURfBjVbIRuulCA4q6yEZFBWktEtsKURcKImmDLX4k6cekNE4yyd/F3Pdmkrlv\r\n        +mbmTvTcxfvfj3fO/51z3v0yopyc1zh/AobqZInbuY8uNpVXoNgyqt3CS9mgQWUUPyC244gnAmFp\r\n        1bgqJDHomQJCt+lCDA3jyonT6iqqra8yH/IyS8HCo5xx5oaTRLe+il57g0dqIjHDCMei2jg7XDRK\r\n        nXNVaQsfkp9InIzga06NjqaPInjCEwmxyYJdTo1BqW8+i9C+mgKxLMD2eY7fHfF3kPjCPh9ma7Vz\r\n        VIn0lGgvS2JMf1jU680P0E2DRZ8mIVEY5JPEZrPXoq+ZKwlILIlm9uJTnrDPDGMlfSmAs7pCI9DA\r\n        ZX6wHd0E3jICoJejFg0TaBGAHGvpNEBGPc6/6kNvv2dYtjmbt+uieNvZ1agZ7yTi1qNnFSw5ndfJ\r\n        Rq/BKM6KlbIEV7XPwe64dz+IrO50NHdoQkbAGf3DXazlMF8CsIYMae+egBc1DIDhY7azyDQ5HqfB\r\n        pAAeMwDTumwHt/ArWVVnKF4CNlokbnAva3jQRA1iVLvUUOSilP9YOMs2G3bE+6tk0l2OSJhJteHd\r\n        8xXJGMHof0wBPiD1d1R5hxby02mab3jXtvbxJLmqDaT4nPcs3k8P8xYHzDPEFABTcCyKzlzR3HAo\r\n        gpM1zhjXI9i3QlO7BU+raJWai9CMTli0ky01zhfrTbg/+4SJZZEPKya/iublFB3KAekoFHCwNgYA\r\n        PEe4d3+dIeVsOLLcLAx5tYwvG8se3pKWBTWVHfCMgnLfMMA6D5N3yhy41Yj4rnW8GdOTkXHtkBE5\r\n        mhy0X2GEv6ohsZuTNDsUTuoAPxLEXBYssEXD+d1SkTSZ77Sf00lIvMU9Ee5gT0wgBvi2nGe5Qi+X\r\n        tNIfbeYU3+vnopZFhpgOK4XEnE+UhHckGDSRSFO7KzF/I4kcveWIvkSHpnktuMKRTF427TpHKiYx\r\n        s9zPoYr/qIpJQL/pr/ylshLUrsIriZZVNdxoCkEoCscIW1X9ol3pt2eZdZF4flU9sZzS/0BiTmCr\r\n        KYsEN2vXUqPcwFzQRQAG+QmAHRyvs9FZBmxS9vECsJlUm2kD4G6722qmqw4HwOWStrYesLaixAxX\r\n        tKl6M+C6MhaFt2MRifDedmfdSWwwHRbtCZvChfWa+tWqpzRbh0uBleUXdapVL0WW/gXMGmWFz2Wp\r\n        dwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMS0xNlQxMDoxMjowMSswODowMOxw8iAAAAAldEVY\r\n        dGRhdGU6bW9kaWZ5ADIwMTktMDEtMTZUMTA6MTI6MDErMDg6MDCdLUqcAAAAGXRFWHRTb2Z0d2Fy\r\n        ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==\" />\r\n        </svg>\r\n        <span class=\"uk-text-small\">{{'Car'|translate}}</span>\r\n    </a>\r\n  </li>\r\n    <li>\r\n      <a class=\"uk-text-emphasis\" href=\"javascript:void(0)\" (click)=\"profileManagement()\">\r\n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"49px\" height=\"51px\" viewBox=\"0 0 49 51\" enable-background=\"new 0 0 49 51\" xml:space=\"preserve\">  <image id=\"image0\" width=\"49\" height=\"51\" x=\"0\" y=\"0\"\r\n            href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAQAAACUXSicAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\r\n        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN\r\n        RQfjARASDApiv2yvAAADs0lEQVRYw92YXWgUVxTHf2d2NJtgg+Qh0bQW4xdqg6UqjR8pfRBpxY/Q\r\n        KuiDoDZVidoHpQ+CQtOCpBTU0vqJYlVUMEofUigthVaISoSIRKVQpCVUg20NqVpWY7KZ0wdnrzOz\r\n        M8lmsnnQM7Dce+6Z87/3f865c/eK0qJtOFjkT9KM5X3J9OwW/RAZir8I+VvrXLfWpWEBgF9MyyrI\r\n        s2txpzzKaOynMVD2MjkvEA5b6PDF1s5gz6coT4yV6h1f34D9kzeq0mg4RP5EA/1hgAjKiwFhBxWO\r\n        dg8aVynsJxsDEOf0ED0x6r1EG5gW8ZoP4qHWY+PEIONf6jkbMebjpIDSGO4B0szIjagCOa1nSA2a\r\n        KKWM9blBQLl8HHMd0fJi1MXzCdEHQHo4IR6jwKPhhHiPkSirTD9rjzqv90LrQqngXQFHG7kPCEt4\r\n        ObSA1spMVV6XCIhdes7lMkxSulx28p3b+4bvtSQUZIZPGyCquV/mWoGLZlVP6MqJuIDHzxiNhZ31\r\n        JLCYQC3wCSVYWBSzhEk57TQBot6UH7UTKysaijJGABbIfO0CihjtGrVqI50cc3urdSormCqREDBC\r\n        xg4wq6SUm/bvuptmBNihH9HN51yjjUZqdAPjJAJicNJJM0/PHE00ARYWoDSxMSoWg5UqKfKQifs5\r\n        U17lFUPVECF+0GdVLJ5WOzfMcSo2UYd1FA84GDleS53aFFMjMSH+0P1kn/vEo3vEbkB4R0MOOfew\r\n        Q5K2j1KP8mvEd4woZBNz6eVnjrm7g7i/p4JEteoO/mJE1qyVNBN1D+NdmGISHogCzlIhAJXM03W+\r\n        96xguHfRgcOTrKcHh1vsM3afSq2HnloXAGC2LDMc2NTzgQQgqvqNwExPe7MkXVcO1T6rt02rnOWS\r\n        lVHbpUJvkwhxn2Y6iz3RSGnmf0SClM8yZUL+0F1LQFbmtLW1awO97ioSnGSOZ+y8ad1nq26PW3r1\r\n        tBjGe7jIUZO/e/S6x+4njsctvWraTEYJsI8LOhflAr95rAThrbgQq/nSUztKHzdoy7JSJjAvbnUn\r\n        Za/+SRcnjSZ4nh/JWgqZxRD2qIUCMEV3ho5a7GdO5oIio4x37K+RZzuBNxXLDIBZhXKJydq/u/Eh\r\n        6dyuvWQ8VOLwq9u7y3/6Uuar57gz2DbgjKfoAcoCMGP4ghPcRGhgqcAR/QqoZg1JY2N350zKLb6l\r\n        LqBLyiIWcVk7WCoA66VYK3nNNxG5rBsQNAcI4QRvxLgnEeWKXiU9QJk7JJhNVayLmP8BKtoH80s8\r\n        KSMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMTZUMTA6MTI6MTArMDg6MDCGrfkKAAAAJXRF\r\n        WHRkYXRlOm1vZGlmeQAyMDE5LTAxLTE2VDEwOjEyOjEwKzA4OjAw9/BBtgAAABl0RVh0U29mdHdh\r\n        cmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=\" />\r\n        </svg>\r\n        <span class=\"uk-text-small\">{{'Profile'|translate}}</span>\r\n      </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* new class */\n.footer-bottom {\n  bottom: 0;\n  width: 100%;\n  height: 62px;\n  /* Height of the footer */\n  background: #f8f8f8;\n  position: fixed;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n.footer-bottom > li {\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  text-align: center !important;\n  position: relative; }\n.footer-bottom > li:not(:first-child) a::after {\n  content: '';\n  display: block;\n  width: 1px;\n  height: 20px;\n  background: #3d3d3d;\n  position: absolute;\n  left: 0;\n  top: 14px;\n  z-index: 100; }\n.footer-bottom > li a {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto !important;\n  position: relative; }\n.footer-bottom > li a svg {\n  display: block;\n  margin: 10px auto 0;\n  width: 30px !important;\n  height: 22px !important; }\n@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .footer-bottom {\n    height: 96px; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, translate) {
        this.router = router;
        this.translate = translate;
        this.dealerId = '';
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.dealerId = localStorage.getItem('dealerId');
        var userType = localStorage.getItem('userType');
        this.role[userType] = true;
    };
    FooterComponent.prototype.userManagement = function () {
        this.router.navigate(['user', 'list', this.dealerId]);
    };
    FooterComponent.prototype.dashboard = function () {
        this.router.navigate(['dashboard', 'car', this.dealerId]);
    };
    FooterComponent.prototype.carManagement = function () {
        this.router.navigate(['car', 'list', this.dealerId]);
    };
    FooterComponent.prototype.profileManagement = function () {
        this.router.navigate(['profile', 'edit']);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            //encapsulation: ViewEncapsulation.Native
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container uk-margin\" style=\"padding-top:1em;\" uk-navbar>\r\n  <div class=\"uk-navbar-left\">\r\n    <div class=\"uk-navbar-item\" *ngIf=\"button.back\">\r\n      <a class=\"uk-button uk-button-default uk-button-small uk-border-rounded\" (click)=\"onClick('back')\"><span uk-icon=\"chevron-left\"></span>{{'back'|translate}}</a>\r\n    </div>\r\n    <!-- <div class=\"uk-navbar-item\" *ngIf=\"role.admin\">\r\n      <a class=\"uk-button uk-button-default uk-border-rounded\"  routerLink=\"/dealer/list\">{{'dealer'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-item\" *ngIf=\"role.supervisor\">\r\n      <a class=\"uk-button uk-button-default uk-border-rounded\" routerLink=\"/user/list\">{{'user'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-item\" *ngIf=\"role.supervisor\">\r\n      <a class=\"uk-button uk-button-default uk-border-rounded\" routerLink=\"/dashboard/car\">{{'dashboard'|translate}}</a>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"uk-navbar-right\">\r\n<!--    <div class=\"uk-navbar-item\">\r\n        <div>{{'username'|translate}}: {{account.username}}</div>\r\n    </div>\r\n    <div class=\"uk-navbar-item\">\r\n        <div>{{'position'|translate}}: {{account.role}}</div>\r\n    </div>-->\r\n    <div class=\"uk-navbar-item\">\r\n      <a class=\"uk-button uk-button-default uk-button-small uk-border-rounded\"  (click)=\"onClick('logout'); logout();\">{{'logout'|translate}}</a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authen/authen.service */ "./src/app/services/authen/authen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, location, auth) {
        this.router = router;
        this.location = location;
        this.auth = auth;
        this.backPath = false;
        this.onClickButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.account = {
            username: "",
            role: "",
        };
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
        this.button = {
            back: false,
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.button.back = this.backPath;
        var userType = localStorage.getItem('userType');
        var userName = localStorage.getItem('userName');
        this.role[userType] = true;
        this.account.username = userName;
        this.account.role = userType;
    };
    HeaderComponent.prototype.onClick = function (button) {
        this.onClickButton.emit(button);
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.auth.userLogout().then(function (res) {
            _this.router.navigate(['login']);
            //window.location.href = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/tracking/#/login";
        }).catch(function (err) {
            _this.router.navigate(['login']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "backPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "onClickButton", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header_n/header_n.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/header_n/header_n.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container uk-margin\" style=\"padding-top:1em;\" uk-navbar>\r\n  <div class=\"uk-navbar-left\">\r\n    <div class=\"uk-navbar-item\" *ngIf=\"button.back\">\r\n      <a class=\"uk-button uk-button-default uk-button-small uk-border-rounded\" (click)=\"onClick('back')\"><span uk-icon=\"chevron-left\"></span>{{'back'|translate}}</a>\r\n    </div>\r\n   \r\n  </div>\r\n  <div class=\"uk-navbar-right\">\r\n \r\n    <div class=\"uk-navbar-item\">\r\n      新版头部，只是为了方便退出系统而已  <a class=\"uk-button uk-button-default uk-button-small uk-border-rounded\"  (click)=\"onClick('logout'); logout();\">{{'logout'|translate}}</a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header_n/header_n.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/header_n/header_n.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header_n/header_n.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/header_n/header_n.component.ts ***!
  \***********************************************************/
/*! exports provided: Header_nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header_nComponent", function() { return Header_nComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authen/authen.service */ "./src/app/services/authen/authen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Header_nComponent = /** @class */ (function () {
    function Header_nComponent(router, location, auth) {
        this.router = router;
        this.location = location;
        this.auth = auth;
        this.backPath = false;
        this.onClickButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.account = {
            username: "",
            role: "",
        };
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
        this.button = {
            back: false,
        };
    }
    Header_nComponent.prototype.ngOnInit = function () {
        this.button.back = this.backPath;
        var userType = localStorage.getItem('userType');
        var userName = localStorage.getItem('userName');
        this.role[userType] = true;
        this.account.username = userName;
        this.account.role = userType;
    };
    Header_nComponent.prototype.onClick = function (button) {
        this.onClickButton.emit(button);
    };
    Header_nComponent.prototype.logout = function () {
        var _this = this;
        this.auth.userLogout().then(function (res) {
            _this.router.navigate(['login']);
            //window.location.href = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/tracking/#/login";
        }).catch(function (err) {
            _this.router.navigate(['login']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Header_nComponent.prototype, "backPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Header_nComponent.prototype, "onClickButton", void 0);
    Header_nComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header_n',
            template: __webpack_require__(/*! ./header_n.component.html */ "./src/app/components/header_n/header_n.component.html"),
            styles: [__webpack_require__(/*! ./header_n.component.scss */ "./src/app/components/header_n/header_n.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_3__["AuthenService"]])
    ], Header_nComponent);
    return Header_nComponent;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = {
    //server_url: "http://139.59.234.153/tracking/services/public/api",
    server_url: "http://52.231.153.79/services/public/api",
};


/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authen/authen.service */ "./src/app/services/authen/authen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authService.clear();
                _this.router.navigate(['login']);
                //window.location.href = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/tracking/view/#/login";
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/header.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor() {
    }
    HeaderInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var token = localStorage.getItem('authToken');
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(request);
    };
    HeaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-background-muted uk-panel\" style=\"background-color: #dedfe4; background-size:cover;  height: 100vh;background-repeat: no-repeat; background-position: center right; \"  data-src=\"assets/images/bglogin.jpg\" uk-img>\r\n   \r\n  \r\n  <div class=\"uk-position-large uk-position-center uk-overlay  uk-overlay-new\">\r\n      <div class=\"uk-position-large  uk-margin-xlarge-bottom uk-position-large-new\">\r\n      <h3 class=\"uk-card-title uk-text-center uk-card-title-new\">{{'appname' |translate}}</h3>\r\n       \r\n      </div>\r\n    <div class=\"uk-card   uk-card-default uk-card-body uk-width-1-1  uk-border-rounded  uk-margin-remove \" style=\"opacity:0.9;\">\r\n      <div class=\"uk-alert-danger\" *ngIf=\"alert.show\" uk-alert>{{alert.message}}</div>\r\n        <div class=\"uk-margin-bottom\"></div>\r\n        <div class=\"uk-margin uk-width-1-1 uk-grid uk-grid-new uk-margin-remove  \"    >\r\n            <label  class=\"uk-width-2-5  uk-width-2-5-new uk-text uk-text-left uk-padding-remove uk-margin-remove\">{{'username' |translate}}</label>\r\n            <input class=\"uk-input uk-input-new  uk-width-3-5  uk-fb-input\"    name=\"username\"  type=\"text\"   [(ngModel)]=\"form.username\" (keyup.enter)=\"login()\">\r\n            \r\n        </div>\r\n        <div class=\"uk-margin-xlarge-bottom uk-margin-xlarge-bottom-new\"></div>\r\n        <div class=\"uk-margin uk-width-1-1 uk-grid uk-grid-new uk-margin-remove \"   >\r\n            <label  class=\"uk-width-2-5 uk-width-2-5-new  uk-text-left   uk-padding-remove uk-margin-remove\">{{'password' |translate}}</label>\r\n            <input class=\"uk-input uk-input-new uk-width-3-5  uk-fb-input\"   name=\"password\"  type=\"text\"   [(ngModel)]=\"form.password\" (keyup.enter)=\"login()\">\r\n            \r\n        </div>\r\n        <div class=\"uk-margin-large-bottom\"></div>\r\n        <div class=\"uk-margin-top uk-text-center \">\r\n        <button (click)=\"changeLang()\" class=\"uk-button uk-button-new uk-button-link\">{{ changemessage }}</button>\r\n      </div>\r\n    \r\n  \r\n    <!-- <div class=\"uk-margin-top\">\r\n      <button (click)=\"changeLang()\" class=\"uk-button uk-button-link\">{{ changemessage }}</button>\r\n    </div> -->\r\n      <!-- <form class=\" uk-overlay-default\">\r\n          <div class=\"uk-alert-danger\" *ngIf=\"alert.show\" uk-alert>{{alert.message}}</div>\r\n        <div class=\"uk-margin\">\r\n          <input class=\"uk-input\" name=\"username\" type=\"text\" placeholder=\"{{'username' |translate}}\" [(ngModel)]=\"form.username\" (keyup.enter)=\"login()\">\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n          <input class=\"uk-input\" name=\"password\" type=\"password\" placeholder=\"{{'password' |translate}}\" [(ngModel)]=\"form.password\" (keyup.enter)=\"login()\">\r\n        </div>\r\n      </form> -->\r\n      <!-- <div class=\"uk-margin\">\r\n        <button class=\"uk-button uk-button-primary uk-width-1-1\" (click)=\"login()\">\r\n          {{'login'|translate}}\r\n        </button>\r\n      </div>\r\n      <div class=\"uk-margin-top\">\r\n        <button (click)=\"changeLang()\" class=\"uk-button uk-button-link\">{{ changemessage }}</button>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"uk-margin-large-bottom\"></div>\r\n    \r\n    <div class=\"uk-margin login-btn\">\r\n        <button class=\"uk-button login-btn-inner uk-button-primary uk-width-1-1\" (click)=\"login()\" style=\"background-color: #4259a9;\">\r\n          {{'login'|translate}}\r\n        </button>\r\n  \r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n<div class=\"loading\" *ngIf=\"loading\"><span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span></div>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-fb-input {\n  background-color: #d4d5d6; }\n\n.uk-width-2-5-new {\n  width: 32%;\n  color: #000000;\n  font-size: 18px; }\n\n.uk-card-title-new {\n  font-size: 26px; }\n\n.uk-overlay-new {\n  padding: 0; }\n\n.uk-position-large-new {\n  margin: 0 0 64px 0; }\n\n.uk-input-new {\n  width: 68%;\n  height: 26px;\n  padding-left: 10px; }\n\n.uk-grid-new {\n  height: 26px;\n  align-items: center; }\n\n.uk-margin-xlarge-bottom {\n  margin-bottom: 60px !important; }\n\n.uk-button-new {\n  text-decoration: underline; }\n\n.login-btn {\n  width: 75%;\n  margin: 0 auto; }\n\n.login-btn-inner {\n  background: rgba(66, 90, 169, 0.9) !important;\n  border-radius: 6px !important;\n  margin-top: 8px; }\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authen/authen.service */ "./src/app/services/authen/authen.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var UIkit: any;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth, translate) {
        this.router = router;
        this.auth = auth;
        this.translate = translate;
        this.loading = false;
        this.language = this.translate.currentLang;
        this.nextlang = '';
        this.changemessage = '';
        this.alert = {
            show: false,
            message: "",
        };
        this.form = {
            username: '',
            password: '',
        };
    }
    LoginComponent.prototype.changeLang = function () {
        this.translate.use(this.nextlang);
        this.language = this.nextlang;
        this.langmassage();
    };
    LoginComponent.prototype.langmassage = function () {
        if (this.language == 'en') {
            this.nextlang = 'zh';
            this.changemessage = '切换为中文';
        }
        else {
            this.nextlang = 'en';
            this.changemessage = 'Show in English';
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.langmassage();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.alert.show = false;
        this.loading = true;
        this.auth.userLogin(this.form.username, this.form.password).then(function (res) {
            _this.loading = false;
            console.log(res.user);
            if (res.user.user_role_id != "") {
                localStorage.setItem('userType', res.user.user_role_id);
                localStorage.setItem('userName', res.user.username);
                localStorage.setItem('userId', res.user.id);
                localStorage.setItem('dealerId', res.user.dealer_id);
                _this.router.navigate(['menu']);
                // this.router.navigate(['menu']);
                _this.router.navigate(['dashboard', 'car', res.user.dealer_id]);
            }
        }).catch(function (err) {
            _this.alert.show = true;
            _this.alert.message = _this.translate.instant('Username or Password Incorrect');
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_2__["AuthenService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-edit/beacon-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\">{{'edit'|translate}} {{'beacon'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">*{{'uuid'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"uuid\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"beacon.uuid\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">*{{'name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"name\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"beacon.name\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"editBeacon()\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelBeacon()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-edit/beacon-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-edit/beacon-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: BeaconEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconEditComponent", function() { return BeaconEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_beacon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/beacon.service */ "./src/app/pages/beacon/services/beacon.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeaconEditComponent = /** @class */ (function () {
    function BeaconEditComponent(router, activeRoute, beaconService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.beaconService = beaconService;
        this.translate = translate;
        this.dealerId = '';
        this.beaconId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "beacon-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update User?"),
            state: "",
        };
        this.beacon = {
            uuid: '',
            name: '',
        };
        this.beaconId = activeRoute.snapshot.params['beaconId'];
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    BeaconEditComponent.prototype.ngOnInit = function () {
        this.loadBeacon();
    };
    BeaconEditComponent.prototype.loadBeacon = function () {
        var _this = this;
        this.beaconService.get(this.beaconId).then(function (res) {
            _this.loading = false;
            _this.beacon = res.data.beacon;
        }).catch(function (err) {
            _this.loading = false;
            UIkit.notification({
                message: err,
                status: 'warning',
                timeout: 1000
            });
        });
    };
    BeaconEditComponent.prototype.editBeacon = function () {
        if (this.beacon.uuid == "") {
            UIkit.notification({
                message: this.translate.instant("Beacon UUID cannot emptry"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.beacon.name == "") {
            UIkit.notification({
                message: this.translate.instant("Beacon Name cannot emptry"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        this.beacon.uuid = this.beacon.uuid.toLowerCase();
        var _elementId = "#" + this.confirmModal.elementId;
        this.confirmModal.detail = this.translate.instant("Do you confirm to update") + " " + this.beacon.name + " " + this.translate.instant("Beacon") + "?";
        UIkit.modal(_elementId).show();
    };
    BeaconEditComponent.prototype.cancelBeacon = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['beacon', 'list', this.dealerId]);
    };
    BeaconEditComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.beaconService.edit(this.beacon).then(function (res) {
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['beacon', 'list', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    BeaconEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon-edit',
            template: __webpack_require__(/*! ./beacon-edit.component.html */ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.html"),
            styles: [__webpack_require__(/*! ./beacon-edit.component.scss */ "./src/app/pages/beacon/beacon-edit/beacon-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_beacon_service__WEBPACK_IMPORTED_MODULE_2__["BeaconService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], BeaconEditComponent);
    return BeaconEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/beacon/beacon-list/beacon-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-list/beacon-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'beacon'|translate}} {{'configuration'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n    </div>\r\n  </nav>\r\n  <fieldset class=\"uk-fieldset uk-background-muted uk-padding-small\">\r\n\t<div class=\"uk-margin\">\r\n        <input class=\"uk-input\" type=\"text\" placeholder=\"*{{'name'|translate}}\" [(ngModel)]=\"beacon.name\">\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <input class=\"uk-input\" type=\"text\" placeholder=\"*{{'uuid'|translate}}\" [(ngModel)]=\"beacon.uuid\">\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <button class=\"uk-button uk-button-primary uk-border-rounded\" (click)=\"registerBeacon()\">{{'register'|translate}} {{'beacon'|translate}}</button>\r\n\t</div>\r\n  </fieldset>\r\n\r\n  <div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\"  *ngFor=\"let bc of beacons; let i = index\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t\t<h3 class=\"uk-card-title uk-margin-remove-bottom\">{{bc.name}}</h3>\r\n\t\t\t<p class=\"uk-text-meta uk-margin-remove-top\">{{'id' |translate}}: {{bc.id}}</p>\r\n\t\t\t<!-- <p>{{'uuid' |translate}}:  {{bc.uuid}}</p> -->\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n          <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded\" (click)=\"editBeacon(bc.id)\">{{'edit'|translate}}</button>\r\n          <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded uk-margin-left\" (click)=\"deleteBeacon(bc.id, bc.name)\">{{'delete'|translate}}</button>\r\n\t</div>\r\n  </div>  \r\n\r\n  <div class=\" uk-margin\">\r\n    <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n      <li *ngIf=\"pageController.pageIndex != 1\">\r\n        <a (click)=\"changePageonClick(false,-1)\">\r\n          <span uk-pagination-previous></span>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\">\r\n        <span>...</span>\r\n      </li>\r\n      <li *ngFor=\"let index of pageController.pageArray\" [class.uk-active]=\"index==pageController.pageIndex\">\r\n        <a (click)=\"changePageonClick(true,index)\">{{index}}</a>\r\n      </li>\r\n      <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n      <li *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\" class=\"uk-disabled\">\r\n        <span>...</span>\r\n      </li>\r\n      <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\">\r\n        <a (click)=\"changePageonClick(false,1)\">\r\n          <span uk-pagination-next></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/beacon/beacon-list/beacon-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-list/beacon-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/beacon/beacon-list/beacon-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-list/beacon-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: BeaconListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconListComponent", function() { return BeaconListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_beacon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/beacon.service */ "./src/app/pages/beacon/services/beacon.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeaconListComponent = /** @class */ (function () {
    //mockup
    function BeaconListComponent(router, activeRoute, beaconService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.beaconService = beaconService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "beacon-list-confirm-modal",
            detail: this.translate.instant("Do you confirm to update information?"),
            state: "",
        };
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.beacon = {
            name: "",
            uuid: "",
        };
        this.beacons = [];
        //mockup
        this.deleteIndex = 0;
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    BeaconListComponent.prototype.ngOnInit = function () {
        this.loadBeacon();
    };
    BeaconListComponent.prototype.loadBeacon = function () {
        var _this = this;
        this.loading = true;
        this.beaconService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            _this.beacons = res.data.beacon;
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Beacon'),
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    BeaconListComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.loadBeacon();
    };
    BeaconListComponent.prototype.registerBeacon = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.beacon.name != '' && this.beacon.uuid != '') {
            this.confirmModal.detail = this.translate.instant("Do you confirm to register") + " " + this.beacon.name + " " + this.translate.instant("beacon") + "?";
            this.confirmModal.state = "add";
            UIkit.modal(_elementId).show();
        }
        else {
            if (this.beacon.name == '') {
                UIkit.notification({
                    message: this.translate.instant('name') + " " + this.translate.instant('cannot emtry!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            }
            if (this.beacon.uuid == '') {
                UIkit.notification({
                    message: this.translate.instant('uuid') + " " + this.translate.instant('cannot emtry!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            }
        }
    };
    BeaconListComponent.prototype.editBeacon = function (beaconId) {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['beacon', 'edit', this.dealerId, beaconId]);
    };
    BeaconListComponent.prototype.deleteBeacon = function (index, name) {
        var _elementId = "#" + this.confirmModal.elementId;
        this.deleteIndex = index;
        this.confirmModal.detail = this.translate.instant("Do you confirm to delete") + " " + name + " " + this.translate.instant("beacon") + "?";
        this.confirmModal.state = "delete";
        UIkit.modal(_elementId).show();
    };
    BeaconListComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            if (this.confirmModal.state == "add") {
                if (this.beacon.uuid == "") {
                    UIkit.notification({
                        message: this.translate.instant("Beacon UUID cannot emptry"),
                        status: 'warning',
                        timeout: 1000
                    });
                    return;
                }
                if (this.beacon.name == "") {
                    UIkit.notification({
                        message: this.translate.instant("Beacon Name cannot emptry"),
                        status: 'warning',
                        timeout: 1000
                    });
                    return;
                }
                this.beacon.uuid = this.beacon.uuid.toLowerCase();
                this.beaconService.create(this.dealerId, this.beacon).then(function (res) {
                    _this.beacon.name = '';
                    _this.beacon.uuid = '';
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadBeacon();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: _this.translate.instant('Cannot create Beacon!!!'),
                        status: 'warning',
                        timeout: 1000
                    });
                });
            }
            else if (this.confirmModal.state == "delete") {
                this.beaconService.delete(this.deleteIndex).then(function (res) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadBeacon();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: _this.translate.instant('Cannot delete Beacon!!!'),
                        status: 'warning',
                        timeout: 1000
                    });
                });
                UIkit.modal(_elementId).hide();
                this.loading = false;
            }
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    BeaconListComponent.prototype.onHeaderClick = function (event) {
        var _elementId = "#" + this.confirmModal.elementId;
        if (event == 'back') {
            UIkit.modal(_elementId).$destroy(true);
            this.router.navigate(['menu']);
        }
    };
    BeaconListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon-list',
            template: __webpack_require__(/*! ./beacon-list.component.html */ "./src/app/pages/beacon/beacon-list/beacon-list.component.html"),
            styles: [__webpack_require__(/*! ./beacon-list.component.scss */ "./src/app/pages/beacon/beacon-list/beacon-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_beacon_service__WEBPACK_IMPORTED_MODULE_2__["BeaconService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], BeaconListComponent);
    return BeaconListComponent;
}());



/***/ }),

/***/ "./src/app/pages/beacon/beacon-register/beacon-register.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-register/beacon-register.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\" >{{'register beacon'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n            <div class=\"uk-navbar-item\">\r\n                <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"registerBeacon()\">{{'register'|translate}}</button>\r\n                <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelBeacon()\">{{'cancel'|translate}}</button>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">*{{'id'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"id\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.id\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"name\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">*{{'uuid'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"uuid\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.uuid\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div id=\"modal-confirm\" uk-modal>\r\n    <div class=\"uk-modal-dialog uk-modal-body\">\r\n        <p>{{'register beacon'|translate}}?</p>\r\n        <p class=\"uk-text-right\">\r\n            <button class=\"uk-button uk-button-primary uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"modalConfirm()\">{{'confirm'|translate}}</button>\r\n            <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"modalCancel()\">{{'cancel'|translate}}</button>\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/beacon/beacon-register/beacon-register.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-register/beacon-register.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/beacon/beacon-register/beacon-register.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/beacon/beacon-register/beacon-register.component.ts ***!
  \***************************************************************************/
/*! exports provided: BeaconRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconRegisterComponent", function() { return BeaconRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeaconRegisterComponent = /** @class */ (function () {
    function BeaconRegisterComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dealerId = '';
        this.loading = false;
        this.form = {
            id: '',
            uuid: '',
            name: '',
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    BeaconRegisterComponent.prototype.ngOnInit = function () {
        UIkit.util.on('#modal-confirm', 'shown', function () {
        });
    };
    BeaconRegisterComponent.prototype.registerBeacon = function () {
        UIkit.modal('#modal-confirm').show();
    };
    BeaconRegisterComponent.prototype.cancelBeacon = function () {
        this.router.navigate(['beacon', 'list', this.dealerId]);
        UIkit.modal('#modal-confirm').$destroy(true);
    };
    BeaconRegisterComponent.prototype.modalConfirm = function () {
        UIkit.util.on('#modal-confirm', 'hidden', function () {
            UIkit.modal('#modal-confirm').$destroy(true);
        });
        UIkit.modal('#modal-confirm').hide();
        this.router.navigate(['beacon', 'list', this.dealerId]);
    };
    BeaconRegisterComponent.prototype.modalCancel = function () {
        UIkit.modal('#modal-confirm').hide();
    };
    BeaconRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon-register',
            template: __webpack_require__(/*! ./beacon-register.component.html */ "./src/app/pages/beacon/beacon-register/beacon-register.component.html"),
            styles: [__webpack_require__(/*! ./beacon-register.component.scss */ "./src/app/pages/beacon/beacon-register/beacon-register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeaconRegisterComponent);
    return BeaconRegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/beacon/services/beacon.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/beacon/services/beacon.service.ts ***!
  \*********************************************************/
/*! exports provided: BeaconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconService", function() { return BeaconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeaconService = /** @class */ (function () {
    function BeaconService(http) {
        this.http = http;
    }
    BeaconService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/beacon/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    BeaconService.prototype.list = function (dealer_id, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/beacon/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    BeaconService.prototype.create = function (dealer_id, beacon) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/beacon/create";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                name: beacon.name,
                uuid: beacon.uuid,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    BeaconService.prototype.edit = function (beacon) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/beacon/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            _this.http.post(apiURL, beacon, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    BeaconService.prototype.delete = function (beacon_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/beacon/delete";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: beacon_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    BeaconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeaconService);
    return BeaconService;
}());



/***/ }),

/***/ "./src/app/pages/car/car-edit/car-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/car/car-edit/car-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container register-wrap\">\r\n        <div class=\"uk-margin-top\" uk-grid>\r\n          <div class=\"uk-width-1-3 uk-text-center uk-text-emphasis\"  (click)=\"cancelCar()\">{{'cancel'|translate}}</div>\r\n          \r\n          <div class=\"uk-width-1-3\"></div>\r\n          <div class=\"uk-width-1-3 uk-text-center\">\r\n            <button class=\"uk-button-primary save-btn\" (click)=\"editCar()\">{{'save'|translate}}</button>\r\n          </div>\r\n       \r\n        </div>\r\n        <div\r\n          class=\"uk-width-1-1 register-padding uk-text-emphasis uk-margin-large-top uk-text-large\"\r\n        >\r\n        {{'edit'|translate}} {{'car'|translate}} \r\n        </div>\r\n        <div class=\"uk-margin-top\" uk-grid>\r\n          <div class=\"uk-width-1-2 uk-padding-right\">\r\n            <input class=\"uk-search-input grayBg input-padding-left uk-text-emphasis\" type=\"text\" name=\"licensePlate\" id=\"licensePlate\" type=\"text\" [(ngModel)]=\"car.license_plate\" placeholder=\"*{{'license plate'|translate}}\" />\r\n          </div>\r\n          \r\n          <div class=\"uk-form-controls uk-width-1-2\">\r\n            \r\n            <select  class=\"uk-select uk-form-small grayBg uk-text-emphasis\" id=\"beacon\" name=\"beacon\"  [(ngModel)]=\"car.beacon_name\"  >\r\n                <option class=\"uk-form-small grayBg uk-text-emphasis\" *ngFor=\"let beacon of beacons\" value=\"{{beacon.name}}\">{{beacon.name}}</option>\r\n            </select>\r\n          </div>\r\n           \r\n        </div>\r\n       \r\n      </div>\r\n      \r\n      <app-confirm-modal\r\n        [elementId]=\"confirmModal.elementId\"\r\n        [detail]=\"confirmModal.detail\"\r\n        (onClick)=\"onClickConfirmModal($event)\"\r\n      ></app-confirm-modal>\r\n      \r\n      <div class=\"loading\" *ngIf=\"loading\">\r\n        <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n      </div>\r\n<!--       \r\n \r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\">{{'car'|translate}} {{'edit'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"licensePlate\">*{{'license plate'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"licensePlate\" id=\"licensePlate\" type=\"text\" [(ngModel)]=\"car.license_plate\">\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"beacont\">*{{'beacon'|translate}}{{'name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n               \r\n\t\t\t\t<select class=\"uk-select\"  name=\"beacon\" id=\"beacon\" [(ngModel)]=\"car.beacon_name\">\r\n                        <option *ngFor=\"let beacon of beacons\" value=\"{{beacon.name}}\">{{beacon.name}}</option>\r\n                    </select>\r\n                </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"editCar()\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelCar()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div> -->"

/***/ }),

/***/ "./src/app/pages/car/car-edit/car-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/car/car-edit/car-edit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-wrap {\n  height: 100%;\n  background: #f2f2f3; }\n\n.save-btn {\n  width: 80%;\n  height: 100%;\n  background: #405ab2;\n  border-radius: 6px; }\n\n.register-padding {\n  padding-left: 10px; }\n\n.grayBg {\n  background: #d9d9da; }\n\n.input-padding-left {\n  padding: 2px 0 2px 6px; }\n"

/***/ }),

/***/ "./src/app/pages/car/car-edit/car-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/car/car-edit/car-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: CarEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditComponent", function() { return CarEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/car.service */ "./src/app/pages/car/services/car.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarEditComponent = /** @class */ (function () {
    function CarEditComponent(router, activeRoute, carService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.carService = carService;
        this.translate = translate;
        this.dealerId = '';
        this.carId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "car-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update information?"),
            state: "",
        };
        this.def_beacon_name = '*' + this.translate.instant("Select Beacon");
        this.car = {
            license_plate: '',
            brand: '',
            model: '',
            color: '',
            beacon_name: ('*' + this.translate.instant("Select Beacon")),
            dealer_id: '',
            beacon: [],
            timeline: [],
        };
        this.beacons = [];
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
        this.car.dealer_id = activeRoute.snapshot.params['dealerId'];
        this.carId = activeRoute.snapshot.params['carId'];
    }
    CarEditComponent.prototype.ngOnInit = function () {
        var userType = localStorage.getItem('userType');
        this.role[userType] = true;
        this.loadCar();
    };
    CarEditComponent.prototype.loadCar = function () {
        var _this = this;
        this.loading = true;
        this.carService.beaconlist(this.dealerId, 0, 1000)
            .then(function (res) {
            var de_car = {
                name: _this.car.beacon_name
            };
            _this.beacons = res.data.beacon;
            _this.beacons.unshift(de_car);
            console.log('aaa');
            console.log(_this.beacons);
        })
            .catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Beacon'),
                status: 'warning',
                timeout: 1000
            });
        });
        this.carService.get(this.carId).then(function (res) {
            _this.car = res.data.car;
            _this.car.beacon_name = res.data.car.beacon.name;
            _this.car.beacon = [];
            _this.car.timeline = [];
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
            UIkit.notification({
                message: _this.translate.instant('Cannot load Car'),
                status: 'warning',
                timeout: 1000
            });
        });
    };
    CarEditComponent.prototype.editCar = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.car.license_plate == "") {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("license plate cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.car.brand == "") {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("brand cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.car.model == "") {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("Model cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.car.color == "") {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("Color cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.car.beacon_name == "") {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("Beacon Name cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        this.confirmModal.detail = this.translate.instant("Do you confirm to update car information?");
        UIkit.modal(_elementId).show();
    };
    CarEditComponent.prototype.cancelCar = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['car', 'list', this.dealerId]);
    };
    CarEditComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.carService.edit(this.car).then(function (res) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['car', 'list', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    CarEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-edit',
            template: __webpack_require__(/*! ./car-edit.component.html */ "./src/app/pages/car/car-edit/car-edit.component.html"),
            styles: [__webpack_require__(/*! ./car-edit.component.scss */ "./src/app/pages/car/car-edit/car-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CarEditComponent);
    return CarEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/car/car-list/car-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/car/car-list/car-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container container-bg\">\r\n  <nav\r\n    class=\"uk-navbar-container uk-margin\"\r\n    uk-navbar\r\n    style=\" background:none;\"\r\n  >\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\"\r\n        >{{ \"car\" | translate }} {{ \"management\" | translate }}</a\r\n      >\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <button\r\n        class=\"uk-button uk-button-small uk-button-primary uk-border-rounded bluebg\"\r\n        (click)=\"registerCar()\"\r\n      >\r\n        {{ \"register\" | translate }} {{ \"car\" | translate }}\r\n      </button>\r\n    </div>\r\n  </nav>\r\n  <div class=\"uk-contain\"  >\r\n\r\n\r\n  <!-- <table class=\"uk-table uk-table-divider table-style thead-style uk-padding-remove-bottom uk-margin-remove-bottom\">\r\n    <thead class=\"thead-style\">\r\n      <tr>\r\n        <th class=\"uk-text-emphasis uk-width-1-2\">License plate</th>\r\n        <th class=\"uk-text-emphasis uk-width-1-2\">Beacon Name</th>\r\n        <th class=\"uk-text-emphasis uk-width-1-2\">Beacon Name</th>\r\n      </tr>\r\n    </thead>\r\n  </table> -->\r\n  <table class=\"uk-table uk-table-divider table-style thead-style uk-table-middle uk-margin-remove-top\">\r\n    <thead class=\"thead-style\">\r\n      <tr>\r\n        <th class=\"uk-text-emphasis uk-width-1-3\">{{'license plate'|translate}}</th>\r\n\t\t\t\t<th class=\"uk-text-emphasis uk-width-1-3\">{{'beacon'|translate}} {{'name'|translate}}</th>\r\n\t\t\t\t<th class=\"uk-text-emphasis uk-width-1-3\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"addLine\">\r\n      <tr *ngFor=\"let car of cars\" style=\"border-color: #ffffff;\" >\r\n        <td>{{car.license_plate}}</td>\r\n        <td>{{car.beacon.name}}</td>\r\n        <td>\r\n          <button class=\"uk-button uk-button-default uk-button-small uk-border-rounded\" style=\"background-color:#f7f7f7;border:1px solid #e0dede;\" type=\"button\"   (click)=\"editCar(car.id)\">\r\n              {{'edit'|translate}}\r\n          </button>\r\n          <button class=\"uk-button uk-button-default uk-button-small   uk-border-rounded\" style=\" background-color:#f7f7f7;border:1px solid #e0dede; margin-top: 3px;\" type=\"button\" (click)=\"deregisterCar(car.id, car.license_plate, car.beacon.name)\" >\r\n              {{'deregister'|translate}}\r\n          </button>\r\n        </td>\r\n      </tr> \r\n    </tbody>\r\n  </table>\r\n</div>\r\n  <div class=\" uk-margin\">\r\n    <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n      <li *ngIf=\"pageController.pageIndex != 1\">\r\n        <a (click)=\"changePageonClick(false, -1)\">\r\n          <span uk-pagination-previous></span>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\">\r\n        <span>...</span>\r\n      </li>\r\n      <li\r\n        *ngFor=\"let index of pageController.pageArray\"\r\n        [class.uk-active]=\"index == pageController.pageIndex\"\r\n      >\r\n        <a (click)=\"changePageonClick(true, index)\">{{ index }}</a>\r\n      </li>\r\n      <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n      <li\r\n        *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\"\r\n        class=\"uk-disabled\"\r\n      >\r\n        <span>...</span>\r\n      </li>\r\n      <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\">\r\n        <a (click)=\"changePageonClick(false, 1)\">\r\n          <span uk-pagination-next></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n<!-- <fieldset class=\"uk-fieldset uk-background-muted uk-padding-small uk-margin\">\r\n\t\t<ul uk-accordion>\r\n\t    <li *ngFor=\"let car of cars\">\r\n        <a class=\"uk-accordion-title\" href=\"#\">{{car.license_plate}}</a>\r\n        <div class=\"uk-accordion-content\">\r\n            <p>{{'beacon'|translate}} {{'name'|translate}}: {{car.beacon.name}}</p>\r\n\t\t\t\t\t\t<button class=\"uk-button uk-button-default uk-button-small uk-border-rounded\" (click)=\"editCar(car.id)\">{{'edit'|translate}}</button>\r\n\t\t\t\t\t\t<button class=\"uk-button uk-button-danger uk-button-small uk-border-rounded uk-margin-left\" (click)=\"deregisterCar(car.id, car.license_plate, car.beacon.name)\">{{'deregister'|translate}}</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n    </li>\r\n\t</ul>\r\n</fieldset> -->\r\n\r\n<!-- <div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\"  *ngFor=\"let car of cars\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t\t<h3 class=\"uk-card-title uk-margin-remove-bottom\">{{car.license_plate}}</h3>\r\n\t\t\t<p>{{'brand'|translate}}: {{car.brand}}</p>\r\n\t\t\t<p>{{'model'|translate}}: {{car.model}}</p>\r\n\t\t\t<p>{{'color'|translate}}: {{car.color}}</p>\r\n\t\t\t<p>{{'beacon'|translate}} {{'name'|translate}}: {{car.beacon.name}}</p>\r\n\t\t\t<p *ngIf=\"car.timeline && car.timeline[0].station_id != '0'\">{{'station'|translate}}: {{car.timeline[0].station.name}}</p>\r\n\t\t\t<p *ngIf=\"!car.timeline || (car.timeline && car.timeline[0].station_id == '0')\">{{'station'|translate}}: -</p>\r\n\t\t\t<p>{{'status'|translate}}: -</p>\r\n\t\t\t<p class=\"uk-text-meta uk-margin-remove-top\">\r\n\t\t\t  <ng-container *ngFor=\"let noti of car.notification\">\r\n\t\t\t\t<p *ngIf=\"noti.dealer_notification_config_id != 0\">\r\n\t\t\t\t  {{noti.dealer_notification.name}}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p *ngIf=\"noti.station_notification_config_id != 0\"> \r\n\t\t\t\t  {{noti.station_notification.name}}\r\n\t\t\t\t</p>\r\n\t\t\t  </ng-container>\r\n\t\t\t</p>\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n          <button class=\"uk-button uk-button-default uk-button-small uk-border-rounded\" (click)=\"editCar(car.id)\">{{'edit'|translate}}</button>\r\n          <button class=\"uk-button uk-button-danger uk-button-small uk-border-rounded uk-margin-left\" (click)=\"deregisterCar(car.id, car.license_plate, car.beacon.name)\">{{'deregister'|translate}}</button>\r\n\t\t</div>\r\n  </div>  -->\r\n\r\n<app-confirm-modal\r\n  [elementId]=\"confirmModal.elementId\"\r\n  [detail]=\"confirmModal.detail\"\r\n  (onClick)=\"onClickConfirmModal($event)\"\r\n></app-confirm-modal>\r\n\r\n \r\n<div id=\"modal-deregister\" uk-modal>\r\n  <div class=\"uk-modal-dialog uk-modal-body\">\r\n    <h2 class=\"uk-modal-title\">\r\n          {{'Are you confirm to'|translate}} {{'deregister car'|translate}}: {{modalDeregister.title}} {{'?'}}\r\n     </h2>\r\n   \r\n    <p class=\"uk-text-right\">\r\n      <button class=\"uk-button uk-button-primary uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"deregister()\">{{'deregister'|translate}}</button>\r\n      <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"cancelDeregister()\">{{'cancel'|translate}}</button>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>\r\n "

/***/ }),

/***/ "./src/app/pages/car/car-list/car-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/car/car-list/car-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bluebg {\n  background: #405AB2; }\n\n.container-bg {\n  height: 100%;\n  background: #e9e9ea; }\n\n.table-style {\n  border-radius: 6px !important;\n  background: #f5f5f5 !important;\n  overflow: hidden !important; }\n\n.thead-style {\n  background: #fff;\n  border-radius: 6px !important; }\n"

/***/ }),

/***/ "./src/app/pages/car/car-list/car-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/car/car-list/car-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/car.service */ "./src/app/pages/car/services/car.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarListComponent = /** @class */ (function () {
    function CarListComponent(router, activeRoute, carService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.carService = carService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "car-list-confirm-modal",
            detail: "",
            state: "",
        };
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.car = {
            license_plate: '',
            brand: '',
            model: '',
            color: '',
            beacon_name: '',
            dealer_id: ','
        };
        this.cars = [];
        this.beacons = [];
        this.modalDeregister = {
            id: '',
            title: '',
            beaconName: '',
            form: {
                beaconId: '',
            }
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
        this.car.dealer_id = activeRoute.snapshot.params['dealerId'];
    }
    CarListComponent.prototype.ngOnInit = function () {
        this.loadCar();
    };
    CarListComponent.prototype.loadCar = function () {
        var _this = this;
        this.loading = true;
        this.carService.beaconlist(this.dealerId, 0, 1000)
            .then(function (res) {
            _this.beacons = res.data.beacon;
        })
            .catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Beacon'),
                status: 'warning',
                timeout: 1000
            });
        });
        this.carService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage)
            .then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            _this.cars = res.data.car;
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Car'),
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    CarListComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.loadCar();
    };
    CarListComponent.prototype.registerCar = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal('#modal-deregister').$destroy(true);
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['car', 'register', this.dealerId]);
        // let _elementId = "#"+this.confirmModal.elementId;
        // if(this.car.license_plate !='' && this.car.brand  !=''&& this.car.model  !=''&& this.car.color  !=''&& this.car.beacon_name  !=''){
        //   this.confirmModal.detail=this.translate.instant("Do you confirm to register")+" " + this.car.license_plate + " "+this.translate.instant("car")+"?";
        //   this.confirmModal.state="add";
        //   UIkit.modal(_elementId).show();
        // } else { 
        //   UIkit.notification({
        //   message: this.translate.instant('* Cannot emptry!!!'),
        //   status: 'warning',
        //   timeout: 1000
        // });
        // }
    };
    CarListComponent.prototype.editCar = function (carId) {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal('#modal-deregister').$destroy(true);
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['car', 'edit', this.dealerId, carId]);
    };
    CarListComponent.prototype.deregisterCar = function (id, licensePlate, beaconName) {
        this.modalDeregister.id = id;
        this.modalDeregister.title = licensePlate;
        this.modalDeregister.beaconName = beaconName;
        console.log(this.modalDeregister.title);
        UIkit.modal('#modal-deregister').show();
    };
    CarListComponent.prototype.deregister = function () {
        var _this = this;
        if (this.modalDeregister.form.beaconId == this.modalDeregister.beaconName) {
            this.loading = true;
            this.carService.deregister(this.modalDeregister.id).then(function (res) {
                UIkit.modal('#modal-deregister').hide();
                _this.loading = false;
                _this.loadCar();
            }).catch(function (err) {
                UIkit.modal('#modal-deregister').hide();
                _this.loading = false;
                UIkit.notification({
                    message: _this.translate.instant('Cannot deregister Car!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            this.modalDeregister.form.beaconId = "";
            UIkit.modal('#modal-deregister').hide();
            UIkit.notification({
                message: this.translate.instant('Beacon name not match'),
                status: 'warning',
                timeout: 1000
            });
        }
    };
    CarListComponent.prototype.cancelDeregister = function () {
        UIkit.modal('#modal-deregister').hide();
    };
    CarListComponent.prototype.onHeaderClick = function (event) {
        var _elementId = "#" + this.confirmModal.elementId;
        if (event == 'back') {
            UIkit.modal('#modal-deregister').$destroy(true);
            UIkit.modal(_elementId).$destroy(true);
            this.router.navigate(['menu']);
        }
    };
    CarListComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            if (this.confirmModal.state == "add") {
                this.carService.create(this.car).then(function (res) {
                    _this.car.license_plate = '';
                    _this.car.brand = '';
                    _this.car.model = '';
                    _this.car.color = '';
                    _this.car.beacon_name = '';
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadCar();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: err,
                        status: 'warning',
                        timeout: 1000
                    });
                });
            }
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./car-list.component.html */ "./src/app/pages/car/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.scss */ "./src/app/pages/car/car-list/car-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/pages/car/car-register/car-register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/car/car-register/car-register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 切片car-register汽车页面代码 -->\r\n\r\n<!-- <app-header>\r\n</app-header> -->\r\n<div class=\"uk-container register-wrap\">\r\n  <div class=\"uk-margin-top\" uk-grid>\r\n    <div class=\"uk-width-1-3 uk-text-center uk-text-emphasis\"  (click)=\"cancelCar()\">{{'cancel'|translate}}</div>\r\n    \r\n    <div class=\"uk-width-1-3\"></div>\r\n    <div class=\"uk-width-1-3 uk-text-center\">\r\n      <button class=\"uk-button-primary save-btn\" (click)=\"registerCar()\">{{'register'|translate}}</button>\r\n    </div>\r\n \r\n  </div>\r\n  <div\r\n    class=\"uk-width-1-1 register-padding uk-text-emphasis uk-margin-large-top uk-text-large\"\r\n  >\r\n   {{'register'|translate}} {{'car'|translate}}\r\n  </div>\r\n  <div class=\"uk-margin-top\" uk-grid>\r\n    <div class=\"uk-width-1-2 uk-padding-right\">\r\n      <input class=\"uk-search-input grayBg input-padding-left uk-text-emphasis\" type=\"text\" name=\"licensePlate\" id=\"licensePlate\" type=\"text\" [(ngModel)]=\"car.license_plate\" placeholder=\"*{{'license plate'|translate}}\" />\r\n    </div>\r\n    \r\n    <div class=\"uk-form-controls uk-width-1-2\">\r\n      \r\n      <select  class=\"uk-select uk-form-small grayBg uk-text-emphasis\" id=\"beacon\" name=\"beacon\"  [(ngModel)]=\"car.beacon_name\"  >\r\n          <option class=\"uk-form-small grayBg uk-text-emphasis\" *ngFor=\"let beacon of beacons\" value=\"{{beacon.name}}\">{{beacon.name}}</option>\r\n      </select>\r\n    </div>\r\n     \r\n  </div>\r\n \r\n</div>\r\n\r\n<app-confirm-modal\r\n  [elementId]=\"confirmModal.elementId\"\r\n  [detail]=\"confirmModal.detail\"\r\n  (onClick)=\"onClickConfirmModal($event)\"\r\n></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/car/car-register/car-register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/car/car-register/car-register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-wrap {\n  height: 100%;\n  background: #f2f2f3; }\n\n.save-btn {\n  width: 80%;\n  height: 100%;\n  background: #405ab2;\n  border-radius: 6px; }\n\n.register-padding {\n  padding-left: 10px; }\n\n.grayBg {\n  background: #d9d9da; }\n\n.input-padding-left {\n  padding: 2px 0 2px 6px; }\n"

/***/ }),

/***/ "./src/app/pages/car/car-register/car-register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/car/car-register/car-register.component.ts ***!
  \******************************************************************/
/*! exports provided: CarRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRegisterComponent", function() { return CarRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/car.service */ "./src/app/pages/car/services/car.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarRegisterComponent = /** @class */ (function () {
    function CarRegisterComponent(router, activeRoute, carService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.carService = carService;
        this.translate = translate;
        this.confirmModal = {
            elementId: "car-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to create information?"),
            state: "",
        };
        this.dealerId = '';
        this.loading = false;
        this.def_beacon_name = '*' + this.translate.instant("Select Beacon");
        this.beacons = [];
        this.car = {
            license_plate: '',
            brand: '',
            model: '',
            color: '',
            beacon_name: ('*' + this.translate.instant("Select Beacon")),
            dealer_id: ','
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
        this.car.dealer_id = activeRoute.snapshot.params['dealerId'];
    }
    CarRegisterComponent.prototype.ngOnInit = function () {
        this.loadCar();
    };
    CarRegisterComponent.prototype.loadCar = function () {
        var _this = this;
        console.log(this.car);
        this.loading = true;
        this.carService.beaconlist(this.dealerId, 0, 1000)
            .then(function (res) {
            console.log(res.data.beacon);
            var de_car = {
                name: _this.car.beacon_name
            };
            _this.beacons = res.data.beacon;
            _this.beacons.unshift(de_car);
            //   new Object(){name:this.translate.instant("Select Beacon")
            //  this.beacons.shift(},0)//serviceagent1
            _this.loading = false;
        })
            .catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Beacon'),
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
        // this.loading=true;
        // this.carService.beaconlist(this.dealerId,0,1000)
        // .then((res:any)=>{
        //   this.beacons = res.data.beacon;
        // })
        // .catch((err:any)=>{
        //   UIkit.notification({
        //     message: this.translate.instant('Cannot load Beacon'),
        //     status: 'warning',
        //     timeout: 1000
        //   });
        // });
        // this.carService.get(this.carId).then((res:any)=>{
        //   this.car = res.data.car;
        //   this.car.beacon_name = res.data.car.beacon.name;
        //   this.car.beacon = [];
        //   this.car.timeline = [];
        //   this.loading=false;
        // }).catch((err:any)=>{
        //   this.loading=false;
        //   UIkit.notification({
        //     message: this.translate.instant('Cannot load Car'),
        //     status: 'warning',
        //     timeout: 1000
        //   })
        // })
    };
    CarRegisterComponent.prototype.registerCar = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.car.license_plate == "") {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("license plate cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.car.beacon_name == "" || this.car.beacon_name == this.def_beacon_name) {
            UIkit.modal(_elementId).hide();
            this.loading = false;
            UIkit.notification({
                message: this.translate.instant("Beacon Name cannot empty"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        this.confirmModal.detail = this.translate.instant("Do you confirm to create car information?");
        UIkit.modal(_elementId).show();
    };
    CarRegisterComponent.prototype.cancelCar = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['car', 'list', this.dealerId]);
    };
    CarRegisterComponent.prototype.modalConfirm = function () {
        UIkit.util.on('#modal-confirm', 'hidden', function () {
            UIkit.modal('#modal-confirm').$destroy(true);
        });
        UIkit.modal('#modal-confirm').hide();
        this.router.navigate(['car', 'list', this.dealerId]);
    };
    CarRegisterComponent.prototype.modalCancel = function () {
        UIkit.modal('#modal-confirm').hide();
    };
    CarRegisterComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.carService.create(this.car).then(function (res) {
                console.log('=============');
                console.log(res);
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['car', 'list', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    CarRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-register',
            template: __webpack_require__(/*! ./car-register.component.html */ "./src/app/pages/car/car-register/car-register.component.html"),
            styles: [__webpack_require__(/*! ./car-register.component.scss */ "./src/app/pages/car/car-register/car-register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CarRegisterComponent);
    return CarRegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/car/services/car.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/car/services/car.service.ts ***!
  \***************************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/car/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CarService.prototype.list = function (dealer_id, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/car/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
                direct_sort: "acs",
                title_sort: "license_plate"
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CarService.prototype.create = function (car) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/car/create";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, car, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CarService.prototype.edit = function (car) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/car/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, car, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CarService.prototype.delete = function (node_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/car/delete";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: node_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    //Extend 
    CarService.prototype.deregister = function (car_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/car/deregister";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: car_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CarService.prototype.beaconlist = function (dealer_id, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/beacon/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-config-notification/car-config-notification.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 切片car-config-notification页面代码 内容就是下面的，数据绑定好了-->\r\n<div class=\"uk-container\" style=\" background:none;\">\r\n  <div class=\"uk-margin-top\" uk-grid>\r\n    <div class=\"uk-width-1-3 uk-text-center uk-text-emphasis\" (click)=\"cancel()\">\r\n      {{ \"Cancel\" | translate }}\r\n    </div>\r\n    <!-- <div class=\"uk-width-1-4\"></div> -->\r\n    <div class=\"uk-width-1-3\"></div>\r\n    <div class=\"uk-width-1-3 uk-text-center\">\r\n      <button class=\"uk-button-primary save-btn\" (click)=\"save()\">\r\n        {{ \"Save\" | translate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <!-- <button class=\"uk-button uk-button-primary  uk-margin-small-right\" (click)=\"cancel()\">{{'Cancel'|translate}}</button>\r\n    <button class=\"uk-button uk-button-primary\" (click)=\"save()\">{{'Save'|translate}}</button> -->\r\n</div>\r\n<div class=\"uk-container\" style=\" background:none;\">\r\n  <nav\r\n    class=\"uk-navbar-container uk-margin\"\r\n    uk-navbar\r\n    style=\" background:none;\"\r\n  >\r\n    <div class=\"uk-navbar-center\">\r\n      <a class=\"uk-navbar-item uk-logo\"\r\n        >{{ \"Configure\" | translate }} {{ \"notification\" | translate }}\r\n        {{ \"condition\" | translate }}</a\r\n      >\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"uk-container  uk-padding uk-padding-remove-top\">\r\n  <form\r\n    class=\"uk-form-stacked uk-margin-top uk-padding-small uk-margin-remove-top shadow\"\r\n    style=\" background-color: #fff; box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.08);\"\r\n  >\r\n    <div class=\"uk-margin\" *ngFor=\"let dealer of form.dealer_noti_config\">\r\n      <label class=\"uk-form-label\" for=\"{{ dealer.name }}\"\r\n        >{{ dealer.name }} ({{ dealer.unit }})</label\r\n      >\r\n      <div class=\"uk-form-controls\">\r\n        <input\r\n          class=\"uk-input uk-form-small\"\r\n          id=\"{{ dealer.name }}\"\r\n          name=\"{{ dealer.name }}\"\r\n          type=\"number\"\r\n          placeholder=\"\"\r\n          [(ngModel)]=\"dealer.value\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"uk-margin\" *ngFor=\"let station of form.station_noti_config\">\r\n      <label class=\"uk-form-label\" for=\"{{ station.name }}\"\r\n        >{{ station.name }} {{ station.station.name }} ({{\r\n          station.unit\r\n        }})</label\r\n      >\r\n      <div class=\"uk-form-controls\">\r\n        <input\r\n          class=\"uk-input uk-form-small\"\r\n          id=\"{{ station.name }}\"\r\n          name=\"{{ station.name }}\"\r\n          type=\"number\"\r\n          placeholder=\"\"\r\n          [(ngModel)]=\"station.value\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<app-confirm-modal\r\n  [elementId]=\"confirmModal.elementId\"\r\n  [detail]=\"confirmModal.detail\"\r\n  (onClick)=\"onClickConfirmModal($event)\"\r\n></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-config-notification/car-config-notification.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f2f2f3; }\n\n.save-btn {\n  width: 80%;\n  height: 100%;\n  background: #405ab2;\n  border-radius: 6px; }\n\n.shadow {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1) !important; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-config-notification/car-config-notification.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CarConfigNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarConfigNotificationComponent", function() { return CarConfigNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/pages/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarConfigNotificationComponent = /** @class */ (function () {
    function CarConfigNotificationComponent(router, activeRoute, dashboardService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dashboardService = dashboardService;
        this.dealerId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "dashboard-config-edit-confirm-modal",
            detail: "Do you confirm to update notification condition?",
            state: "",
        };
        this.form = {
            dealer_noti_config: [],
            station_noti_config: [],
        };
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    CarConfigNotificationComponent.prototype.ngOnInit = function () {
        var userType = localStorage.getItem('userType');
        this.role[userType] = true;
        this.loadNotification();
    };
    CarConfigNotificationComponent.prototype.loadNotification = function () {
        var _this = this;
        this.loading = true;
        this.dashboardService.notificationList(this.dealerId).then(function (res) {
            _this.form.dealer_noti_config = res.data.dealer_noti_config;
            _this.form.station_noti_config = res.data.station_noti_config;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    CarConfigNotificationComponent.prototype.save = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).show();
    };
    CarConfigNotificationComponent.prototype.cancel = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['dashboard', 'car', this.dealerId]);
    };
    CarConfigNotificationComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.dashboardService.notificationEdit(this.form).then(function (res) {
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                _this.router.navigate(['dashboard', 'car', _this.dealerId]);
            }).catch(function (err) {
                _this.loading = false;
                UIkit.modal(_elementId).hide();
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    CarConfigNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-car-config-notification',
            template: __webpack_require__(/*! ./car-config-notification.component.html */ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.html"),
            styles: [__webpack_require__(/*! ./car-config-notification.component.scss */ "./src/app/pages/dashboard/car-config-notification/car-config-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], CarConfigNotificationComponent);
    return CarConfigNotificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-dashboard/car-dashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container container-fixed uk-margin uk-margin-remove-bottom\" uk-navbar>\r\n      <div class=\"uk-navbar-left\">\r\n        <a class=\"uk-navbar-item uk-logo\" >{{'Dashboard'|translate}} {{'management'|translate}}</a>\r\n      </div>\r\n      <div class=\"uk-navbar-right uk-padding uk-padding-remove-left\">\r\n          <button class=\"uk-button uk-button-small uk-button-primary uk-border-rounded\" (click)=\"configNotification()\">{{'notification'|translate}}</button>\r\n      </div>\r\n    </nav>\r\n    <div class=\"uk-medium-large\">&nbsp;</div>\r\n    <table class=\"uk-table  uk-table-divider uk-margin-remove-top uk-table-middle \"  style=\"background-color: #f5f5f5; \">\r\n        <thead    >\r\n            <tr  style=\"background-color:#f7f7f7; \">\r\n                <th  >{{'license plate'|translate}}</th>\r\n                <th >{{'current'|translate}} {{'station'|translate}}</th>\r\n                <th >{{'time in station'|translate}}</th>\r\n                 <th  >{{'total time from arrival'|translate}}</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let car of cars; let i = index\"> \r\n            <tr style=\"border-top: none;border-bottom: 1px solid #ffffff;\" >\r\n                <td>{{car.license_plate}} </td>\r\n                <td>{{'current'|translate}} {{'station'|translate}}</td>\r\n                <td>{{car.stationTime}} {{'minutes'|translate}}</td>\r\n                <td>{{car.totalTime}} {{'minutes'|translate}}</td>\r\n            </tr>\r\n            <tr  style=\" border-top: none;border-bottom: 1px solid #ffffff;\" >\r\n                <td colspan=\"4\"><button class=\"uk-button uk-button-default\" type=\"button\" (click)=\"timeline(car.id)\" >{{'view'|translate}} {{'timeline'|translate}}</button> </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"uk-margin-large\">&nbsp;</div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n\r\n<!-- <app-header  [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div    class=\"uk-container uk-margin-xlarge-bottom\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\">{{'dashboard'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <div class=\"uk-navbar-item\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"configNotification()\">{{'config'|translate}} {{'notification'|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\" *ngFor=\"let car of cars; let i = index\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t\t<h3 class=\"uk-card-title uk-margin-remove-bottom\">{{car.license_plate}}</h3>\r\n\t\t\t  <table class=\"uk-table uk-table-striped uk-margin-remove-bottom\">\r\n\t\t\t\t  <tr>\r\n\t\t\t\t \r\n\t\t\t\t  </tr>\r\n\t\t\t\t  <tr>\r\n\t\t\t\t\t<td>{{'current'|translate}} {{'station'|translate}}</td>\r\n\t\t\t\t\t<td>{{car.currentStation}}</td>\r\n\t\t\t\t  </tr>\r\n\t\t\t\t  <tr>\r\n\t\t\t\t\t<td>{{'time in station'|translate}}</td>\r\n\t\t\t\t\t<td>{{car.stationTime}} {{'minutes'|translate}}</td>\r\n\t\t\t\t  </tr>\r\n\t\t\t\t  <tr>\r\n\t\t\t\t\t<td>{{'total time from arrival'|translate}}</td>\r\n\t\t\t\t\t<td>{{car.totalTime}} {{'minutes'|translate}}</td>\r\n\t\t\t\t  </tr>\r\n\t\t\t  </table>\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n          <span *ngIf=\"car.currentStatus != ''\">\r\n            <button class=\"uk-button uk-button-danger uk-button-small\" style=\"width: 100px;\">\r\n\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t<!-- <span uk-icon=\"warning\" style=\"position: relative;color:red; bottom: 2px;\"></span>\r\n          </span>\r\n          <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded uk-margin-left\" (click)=\"timeline(car.id)\">{{'view'|translate}} {{'timeline'|translate}}</button>\r\n\t</div>\r\n  </div> \r\n</div> -->  \r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-dashboard/car-dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fixed {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #ffffff; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-dashboard/car-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: CarDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDashboardComponent", function() { return CarDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/pages/dashboard/services/dashboard.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarDashboardComponent = /** @class */ (function () {
    function CarDashboardComponent(router, activeRoute, dashboardService, translate) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.dashboardService = dashboardService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.car = {
            currentStatus: false,
            license_plate: '',
            brand: '',
            model: '',
            color: '',
            currentStation: '',
            stationTime: 0,
            totalTime: 0,
        };
        this.cars = [];
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
        // secondsCounter = interval(5000);
        this.interval = setInterval(function () {
            _this.refreshCar();
        }, 5000);
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    CarDashboardComponent.prototype.ngOnInit = function () {
        var userType = localStorage.getItem('userType');
        this.role[userType] = true;
        this.loadCar();
    };
    CarDashboardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    CarDashboardComponent.prototype.loadCar = function () {
        var _this = this;
        this.loading = true;
        this.dashboardService.list(this.dealerId).then(function (res) {
            var carTmp = [];
            res.data.car.forEach(function (item) {
                if (item.dashboard.length > 0) {
                    /// find current station
                    if (item.dashboard[0].station_id != 0) {
                        item.currentStation = item.dashboard[0].station.name;
                    }
                    else {
                        item.currentStation = "-";
                    }
                    /// find current station time
                    item.stationTime = 0;
                    item.dashboard.forEach(function (element) {
                        if (item.dashboard[0].station_id == element.station_id) {
                            item.stationTime += element.def_time;
                        }
                    });
                    /// find current total time
                    var maxStationTime = new Date(res.data.time).getTime();
                    var registerTime = new Date(item.dashboard[item.dashboard.length - 1].arrival_at).getTime();
                    item.totalTime = Math.floor((maxStationTime - registerTime) / 60000);
                    /// find status notificaiton
                    item.currentStatus = false;
                    if (item.notification.length > 0) {
                        item.currentStatus = true;
                    }
                }
                else {
                    item.currentStation = "-";
                    item.stationTime = 0;
                    item.totalTime = 0;
                    item.currentStatus = false;
                }
                carTmp.push(item);
            });
            _this.cars = carTmp;
            _this.loading = false;
        }).catch(function (err) {
            console.log(err);
            UIkit.notification({
                message: _this.translate.instant('Cannot load Car'),
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    CarDashboardComponent.prototype.refreshCar = function () {
        var _this = this;
        this.dashboardService.list(this.dealerId).then(function (res) {
            var carTmp = [];
            res.data.car.forEach(function (item) {
                if (item.dashboard.length > 0) {
                    /// find current station
                    if (item.dashboard[0].station_id != 0) {
                        item.currentStation = item.dashboard[0].station.name;
                    }
                    else {
                        item.currentStation = "-";
                    }
                    /// find current station time
                    item.stationTime = 0;
                    item.dashboard.forEach(function (element) {
                        if (item.dashboard[0].station_id == element.station_id) {
                            item.stationTime += element.def_time;
                        }
                    });
                    /// find current total time
                    var maxStationTime = new Date(res.data.time).getTime();
                    var registerTime = new Date(item.dashboard[item.dashboard.length - 1].arrival_at).getTime();
                    item.totalTime = Math.floor((maxStationTime - registerTime) / 60000);
                    /// find status notificaiton
                    item.currentStatus = false;
                    if (item.notification.length > 0) {
                        item.currentStatus = true;
                    }
                }
                else {
                    item.currentStation = "-";
                    item.stationTime = 0;
                    item.totalTime = 0;
                    item.currentStatus = false;
                }
                carTmp.push(item);
            });
            _this.cars = carTmp;
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Car'),
                status: 'warning',
                timeout: 1000
            });
        });
    };
    CarDashboardComponent.prototype.configNotification = function () {
        clearInterval(this.interval);
        this.router.navigate(['dashboard', 'config', 'notification', this.dealerId]);
    };
    CarDashboardComponent.prototype.timeline = function (carId) {
        clearInterval(this.interval);
        this.router.navigate(['dashboard', 'timeline', this.dealerId, carId]);
    };
    CarDashboardComponent.prototype.onHeaderClick = function (event) {
        clearInterval(this.interval);
        if (event == 'back') {
            this.router.navigate(['menu']);
        }
    };
    CarDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-dashboard',
            template: __webpack_require__(/*! ./car-dashboard.component.html */ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./car-dashboard.component.scss */ "./src/app/pages/dashboard/car-dashboard/car-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CarDashboardComponent);
    return CarDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/car-timeline/car-timeline.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-timeline/car-timeline.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timelinewrap\">\r\n  <div class=\"uk-padding-small uk-padding-remove-bottom\">\r\n    <span class=\"uk-margin-small-right uk-icon\" uk-icon=\"chevron-left\" (click)=\"cancelTime()\"\r\n      ><svg\r\n        width=\"20\"\r\n        height=\"20\"\r\n        viewBox=\"0 0 20 20\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        data-svg=\"chevron-left\"\r\n      ></svg></span>\r\n  </div>\r\n  <div class=\"uk-text-emphasis uk-padding uk-text-large\">{{'timeline'|translate}}</div>\r\n  <div class=\"uk-container uk-padding-small uk-padding-remove-top uk-padding-remove-bottom\">\r\n    <div class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m uk-padding-small topcontainer\">\r\n      <button class=\"uk-button uk-button-default uk-button-small btn-style uk-margin-small-bottom\">Information</button>\r\n      <dl class=\"uk-description-list uk-margin-remove-top\">\r\n        <dt class=\"uk-text-emphasis uk-margin-small-bottom\">{{'status'|translate}}</dt>\r\n        <dd class=\"uk-text-emphasis uk-margin-small-bottom\" *ngFor=\"let status of car.status\"  > {{status}}</dd>\r\n        <dd class=\"uk-text-emphasis uk-margin-small-bottom\">{{'license plate'|translate}}</dd>\r\n        <dd class=\"uk-text-emphasis uk-margin-small-bottom\" *ngIf=\"car.license_plate\" >{{car.license_plate}}</dd>\r\n        <dt class=\"uk-text-emphasis uk-margin-small-bottom\">{{'brand'|translate}}</dt>\r\n        <dd class=\"uk-text-emphasis uk-margin-small-bottom\" *ngIf=\"car.brand\" >{{car.brand}}</dd>\r\n        <dt class=\"uk-text-emphasis uk-margin-small-bottom\">{{'model'|translate}}</dt>\r\n        <dd class=\"uk-text-emphasis uk-margin-small-bottom\" *ngIf=\"car.model\" >{{car.model}}</dd>\r\n        <dt class=\"uk-text-emphasis uk-margin-small-bottom\">{{'color'|translate}}</dt>\r\n        <dd class=\"uk-text-emphasis  \"   *ngIf=\"car.color\">{{car.color}}</dd>\r\n         \r\n       \r\n\r\n      </dl>\r\n    </div>\r\n  </div>\r\n\r\n   \r\n\r\n  <div class=\"uk-text-emphasis uk-padding uk-text-large\">{{'timeline'|translate}}</div>\r\n  <div class=\"uk-container uk-padding-small uk-padding-remove-top uk-padding-remove-bottom\">\r\n    <div class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m uk-padding-small bottomcontainer\">\r\n      <table class=\"uk-table uk-table-middle uk-table-divider table-style thead-style uk-table-middle uk-margin-remove-top\">\r\n        <thead class=\"thead-style\">\r\n          <tr>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">{{'station'|translate}}</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\"> {{'arrival time'|translate}}</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">{{'departure time'|translate}}</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">{{'used time'|translate}} <br/> ({{'minutes'|translate}})</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">{{'status'|translate}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- <tr *ngFor=\"let timeline of car.timeline\">\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">Station</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\"> Arrival</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">Departure</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">Use time</th>\r\n            <th class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">Status</th>\r\n         \r\n          </tr> -->\r\n          <tr *ngFor=\"let timeline of car.timeline\" >\r\n            <ng-container *ngIf=\"timeline.station_id != 0\">\r\n              <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                {{timeline.station.name}}\r\n              </td>\r\n              <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                {{timeline.arrival_at}}\r\n              </td>\r\n              <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                {{timeline.departure_at}}\r\n              </td>\r\n              <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                {{timeline.stationTime}}\r\n              </td>\r\n              <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                <div *ngIf=\"timeline.status != ''\">\r\n                  <button class=\"uk-button uk-button-danger uk-button-small\" style=\"width: 100px;\">\r\n                    {{timeline.status}}\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"timeline.status == ''\">\r\n                    OK\r\n                </div>\r\n              </td>\r\n            </ng-container>\r\n            \r\n            <ng-container *ngIf=\"timeline.station_id == 0\">\r\n                <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                  {{\"Register\"|translate}}\r\n                </td>\r\n                <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                  {{timeline.arrival_at}}\r\n                </td>\r\n                <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                  -\r\n                </td>\r\n                <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                  -\r\n                </td>\r\n                <td class=\"uk-text-small uk-text-emphasis uk-width-1-3 uk-padding-small uk-padding-remove-left uk-padding-remove-right uk-text-center\">\r\n                  -\r\n                </td>\r\n              </ng-container>\r\n          </tr>\r\n\r\n\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div *ngIf=\"role.service_agent\" >\r\n  切片timeline页面代码\r\n<app-footer></app-footer>\r\n</div> -->\r\n\r\n<!-- \r\n<app-header   [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div *ngIf=\"!role.service_agent\"  class=\"uk-container uk-margin-xlarge-bottom\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'timeline'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <div class=\"uk-navbar-item\">\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <h2 class=\"uk-heading-line\"><span>{{'information'|translate}}</span></h2>\r\n  <dl class=\"uk-description-list\">\r\n      <dt>{{'status'|translate}}</dt>\r\n      <dd>\r\n        <button *ngFor=\"let status of car.status\" class=\"uk-button uk-button-danger uk-button-small\">\r\n          {{status}}\r\n        </button>\r\n      </dd>\r\n      <dt>{{'license plate'|translate}}</dt>\r\n      <dd>{{car.license_plate}}</dd>\r\n      <dt>{{'brand'|translate}}</dt>\r\n      <dd>{{car.brand}}</dd>\r\n      <dt>{{'model'|translate}}</dt>\r\n      <dd>{{car.model}}</dd>\r\n      <dt>{{'color'|translate}}</dt>\r\n      <dd>{{car.color}}</dd>\r\n  </dl>\r\n\r\n  <h2 class=\"uk-heading-line\"><span>{{'timeline'|translate}}</span></h2>\r\n  <div class=\"uk-overflow-auto\">\r\n  <table class=\"uk-table uk-table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"uk-text-nowrap\">{{'station'|translate}}</th>\r\n        <th class=\"uk-text-nowrap\">{{'arrival time'|translate}}</th>\r\n        <th class=\"uk-text-nowrap\">{{'departure time'|translate}}</th>\r\n        <th class=\"uk-text-nowrap\">{{'used time'|translate}} ({{'minutes'|translate}})</th>\r\n        <th class=\"uk-text-nowrap\">{{'status'|translate}}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let timeline of car.timeline\" >\r\n        <ng-container *ngIf=\"timeline.station_id != 0\">\r\n          <td class=\"uk-text-nowrap\">\r\n            {{timeline.station.name}}\r\n          </td>\r\n          <td class=\"uk-text-nowrap\">\r\n            {{timeline.arrival_at}}\r\n          </td>\r\n          <td class=\"uk-text-nowrap\">\r\n            {{timeline.departure_at}}\r\n          </td>\r\n          <td class=\"uk-text-nowrap\">\r\n            {{timeline.stationTime}}\r\n          </td>\r\n          <td class=\"uk-text-nowrap\">\r\n            <div *ngIf=\"timeline.status != ''\">\r\n              <button class=\"uk-button uk-button-danger uk-button-small\" style=\"width: 100px;\">\r\n                {{timeline.status}}\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"timeline.status == ''\">\r\n                OK\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngIf=\"timeline.station_id == 0\">\r\n            <td>\r\n              {{\"Register\"|translate}}\r\n            </td>\r\n            <td>\r\n              {{timeline.arrival_at}}\r\n            </td>\r\n            <td>\r\n              -\r\n            </td>\r\n            <td>\r\n              -\r\n            </td>\r\n            <td>\r\n              -\r\n            </td>\r\n          </ng-container>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n</div> -->\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/car-timeline/car-timeline.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-timeline/car-timeline.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timelinewrap {\n  width: 100%;\n  min-height: 100%;\n  background: #f2f2f3; }\n\n.btn-style {\n  border: none;\n  background: #dcdcdc; }\n\n.topcontainer {\n  border-radius: 6px !important;\n  overflow: hidden;\n  background: #f5f5f5; }\n\n.bottomcontainer {\n  padding: 0 !important;\n  border-radius: 6px !important;\n  background: #f5f5f5;\n  overflow: hidden; }\n\n.bottomcontainer thead {\n  background: #fff;\n  border-radius: 6px !important;\n  overflow: hidden;\n  box-shadow: 0 6px 60px 7px rgba(0, 0, 0, 0.1); }\n\n.bottomcontainer tr {\n  display: flex !important; }\n\n.bottomcontainer tr td {\n  line-height: 100% !important; }\n\n.bottomcontainer tbody tr {\n  position: relative;\n  border: none !important; }\n\n.bottomcontainer tbody tr:not(:last-child)::after {\n  content: '';\n  display: block;\n  width: 96%;\n  height: 2px;\n  background: #ffffff;\n  position: absolute;\n  left: 2%;\n  bottom: 0; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/car-timeline/car-timeline.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/car-timeline/car-timeline.component.ts ***!
  \************************************************************************/
/*! exports provided: CarTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarTimelineComponent", function() { return CarTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/pages/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarTimelineComponent = /** @class */ (function () {
    function CarTimelineComponent(router, activeRoute, dashboardService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dashboardService = dashboardService;
        this.dealerId = '';
        this.carId = '';
        this.loading = false;
        this.car = {
            license_plate: '',
            brand: '',
            model: '',
            color: '',
            status: [],
            timeline: [],
        };
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
        this.carId = activeRoute.snapshot.params['carId'];
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    CarTimelineComponent.prototype.ngOnInit = function () {
        var userType = localStorage.getItem('userType');
        this.role[userType] = true;
        this.loadCar();
    };
    CarTimelineComponent.prototype.loadCar = function () {
        var _this = this;
        this.loading = true;
        this.dashboardService.timeline(this.carId).then(function (res) {
            console.log(res.data);
            _this.car = res.data.car[0];
            var tmpTimeline = res.data.car[0].dashboard;
            tmpTimeline.forEach(function (cartime) {
                ///calcurate time
                cartime.stationTime = cartime.def_time;
                /// find station status
                cartime.status = "";
                res.data.car[0].notification.forEach(function (noti) {
                    if (noti.station_notification_config_id != 0) {
                        if (cartime.station != null) {
                            if (noti.station_notification.station_id == cartime.station.id) {
                                cartime.status = noti.station_notification.alert_message;
                            }
                        }
                    }
                });
            });
            _this.car.timeline = tmpTimeline;
            /// find dealer status
            var tmpStatus = [];
            res.data.car[0].notification.forEach(function (noti) {
                if (noti.dealer_notification_config_id != 0) {
                    tmpStatus.push(noti.dealer_notification.name);
                }
            });
            _this.car.status = tmpStatus;
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: err,
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    CarTimelineComponent.prototype.cancelTime = function () {
        console.log('hhhhhhhhhhhhhhhhhhh');
        this.router.navigate(['dashboard', 'car', this.dealerId]);
    };
    CarTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-timeline',
            template: __webpack_require__(/*! ./car-timeline.component.html */ "./src/app/pages/dashboard/car-timeline/car-timeline.component.html"),
            styles: [__webpack_require__(/*! ./car-timeline.component.scss */ "./src/app/pages/dashboard/car-timeline/car-timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], CarTimelineComponent);
    return CarTimelineComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/services/dashboard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/services/dashboard.service.ts ***!
  \***************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.timeline = function (car_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/dashboard/car/timeline";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': car_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DashboardService.prototype.list = function (dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/dashboard/car/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ///Extend
    DashboardService.prototype.notificationList = function (dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/notification/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DashboardService.prototype.notificationEdit = function (notification) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/notification/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, notification, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/pages/data/data-export/data-export.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data/data-export/data-export.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\">{{'data'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      \r\n    </div>\r\n  </nav>\r\n\r\n  <fieldset class=\"uk-fieldset uk-background-muted uk-padding-small\">\r\n\t<div class=\"uk-margin\">\r\n        <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'start date'|translate}}: </label>\r\n        <div class=\"uk-form-controls\">\r\n          <input class=\"uk-input\" type=\"date\" [(ngModel)]=\"filter.start_date\">\r\n        </div>\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'end date'|translate}}: </label>\r\n        <div class=\"uk-form-controls\">\r\n          <input class=\"uk-input\" type=\"date\" [(ngModel)]=\"filter.end_date\">\r\n        </div>\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"onClickFilter()\">{{'apply'|translate}} {{'filter'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-left\" (click)=\"onClickExport()\">{{'download as excel'|translate}}</button>\r\n\t</div>\r\n  </fieldset>\r\n\r\n  <div class=\"uk-overflow-auto\">\r\n    <table class=\"uk-table uk-table-striped uk-table-small\">\r\n      <thead>\r\n        <tr>\r\n          <th rowspan=\"2\">{{'date'|translate}}</th>\r\n          <th colspan=\"4\">{{'car'|translate}} {{'detail'|translate}}</th>\r\n          <th colspan=\"4\">{{'summary'|translate}}</th>\r\n          <th colspan=\"4\" *ngFor=\"let station of stations\">{{station.name}}</th>\r\n        </tr>\r\n        <tr>\r\n          <th class=\"uk-text-nowrap\">{{'license plate'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'brand'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'model'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'color'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'arrival'|translate}} {{'time'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'departure'|translate}} {{'time'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'total'|translate}} {{'time'|translate}}</th>\r\n          <th class=\"uk-text-nowrap\">{{'status'|translate}}</th>\r\n          <ng-container *ngFor=\"let station of stations\">\r\n            <th class=\"uk-text-nowrap\">{{'arrival'|translate}} {{'time'|translate}}</th>\r\n            <th class=\"uk-text-nowrap\">{{'departure'|translate}} {{'time'|translate}}</th>\r\n            <th class=\"uk-text-nowrap\">{{'total'|translate}} {{'time'|translate}}</th>\r\n            <th class=\"uk-text-nowrap\">{{'status'|translate}}</th>\r\n          </ng-container>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of datas\">\r\n          <td class=\"uk-text-nowrap\">{{data.created_at}}</td>\r\n          <td class=\"uk-text-nowrap\">{{data.license_plate}}</td>\r\n          <td class=\"uk-text-nowrap\">{{data.brand}}</td>\r\n          <td class=\"uk-text-nowrap\">{{data.model}}</td>\r\n          <td class=\"uk-text-nowrap\">{{data.color}}</td>\r\n          <ng-container>\r\n            <td class=\"uk-text-nowrap\">{{data.timeline[0].min_time}}</td>\r\n            <td class=\"uk-text-nowrap\">{{data.timeline[0].max_time}}</td>\r\n            <td class=\"uk-text-nowrap\">{{data.timeline[0].def_time}}</td>\r\n            <td class=\"uk-text-nowrap\">\r\n              <ng-container *ngFor=\"let timeline of data.timeline\">\r\n                <ng-container *ngIf=\"timeline.station_id == 0\">\r\n                  {{timeline.dealer_noti_name}},\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!data.timeline[0].dealer_noti_name\">\r\n                OK\r\n              </ng-container>\r\n            </td>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let timeline of data.timeline;\">\r\n            <ng-container *ngIf=\"timeline.station_id != 0\">\r\n              <td class=\"uk-text-nowrap\">{{timeline.min_time}}</td>\r\n              <td class=\"uk-text-nowrap\">{{timeline.max_time}}</td>\r\n              <td class=\"uk-text-nowrap\">{{timeline.def_time}}</td>\r\n              <td class=\"uk-text-nowrap\">\r\n                <ng-container *ngIf=\"timeline.station_noti_name\">\r\n                  {{timeline.station_noti_name}}\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!timeline.station_noti_name\">\r\n                  OK\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n          </ng-container>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n<div class=\"uk-margin\">\r\n  <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n    <li *ngIf=\"pageController.pageIndex != 1\">\r\n      <a (click)=\"changePageonClick(false,-1)\">\r\n        <span uk-pagination-previous></span>\r\n      </a>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngFor=\"let index of pageController.pageArray\" [class.uk-active]=\"index==pageController.pageIndex\">\r\n      <a (click)=\"changePageonClick(true,index)\">{{index}}</a>\r\n    </li>\r\n    <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n    <li *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\">\r\n      <a (click)=\"changePageonClick(false,1)\">\r\n        <span uk-pagination-next></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</div>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/data/data-export/data-export.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data/data-export/data-export.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  border: 1px solid; }\n\n.uk-table th {\n  text-align: center;\n  vertical-align: middle; }\n\n.uk-table td {\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/pages/data/data-export/data-export.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/data/data-export/data-export.component.ts ***!
  \*****************************************************************/
/*! exports provided: DataExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExportComponent", function() { return DataExportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/pages/data/services/data.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/excel.service */ "./src/app/pages/data/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataExportComponent = /** @class */ (function () {
    function DataExportComponent(router, activeRoute, dataService, excelService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dataService = dataService;
        this.excelService = excelService;
        this.dealerId = "";
        this.loading = false;
        this.filter = {
            start_date: "2018-08-30",
            end_date: "2018-08-30",
        };
        this.stations = [];
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.datas = [];
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    DataExportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.filter.start_date = this.nowDateFormat();
        this.filter.end_date = this.nowDateFormat();
        this.dataService.allStation(this.dealerId).then(function (res) {
            _this.stations = res.data.station;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    DataExportComponent.prototype.onClickExport = function () {
        var _this = this;
        this.loading = true;
        this.dataService.list(this.dealerId, this.filter, 0, 100).then(function (res) {
            var xlsx = [];
            // create header
            var rowheader = [];
            rowheader.push("date");
            rowheader.push("Car License Plate");
            rowheader.push("Car Brand");
            rowheader.push("Car Model");
            rowheader.push("Car Color");
            rowheader.push("Summary Arrival Time");
            rowheader.push("Summary Deperture Time");
            rowheader.push("Summary Total Time");
            rowheader.push("Summary Status");
            _this.stations.forEach(function (element) {
                rowheader.push(element.name + " Arrival Time");
                rowheader.push(element.name + " Deperture Time");
                rowheader.push(element.name + " Total Time");
                rowheader.push(element.name + " Status");
            });
            xlsx.push(rowheader);
            var tmpCar = res.data.car;
            tmpCar.forEach(function (carElement) {
                rowheader = [];
                rowheader.push(carElement.created_at);
                rowheader.push(carElement.license_plate);
                rowheader.push(carElement.brand);
                rowheader.push(carElement.model);
                rowheader.push(carElement.color);
                var stationIndex = 0;
                var count = 0;
                while (count < carElement.timeline.length || stationIndex < _this.stations.length) {
                    if (count == carElement.timeline.length) {
                        count--;
                    }
                    if (stationIndex == _this.stations.length) {
                        stationIndex--;
                    }
                    if (carElement.timeline[count].station_id != 0) {
                        if (carElement.timeline[count].station_id == _this.stations[stationIndex].id) {
                            rowheader.push(carElement.timeline[count].min_time);
                            rowheader.push(carElement.timeline[count].max_time);
                            rowheader.push(carElement.timeline[count].def_time);
                            if (carElement.timeline[count].station_noti_name) {
                                rowheader.push(carElement.timeline[count].station_noti_name);
                            }
                            else {
                                rowheader.push("OK");
                            }
                            stationIndex++;
                            count++;
                        }
                        else {
                            rowheader.push(" ");
                            rowheader.push(" ");
                            rowheader.push(" ");
                            rowheader.push(" ");
                            stationIndex++;
                            count++;
                        }
                    }
                    else {
                        ///check if these is 2 zero station id
                        if (rowheader.length > 8) {
                            rowheader[8] = rowheader[8] + ", " + carElement.timeline[count].dealer_noti_name;
                        }
                        else {
                            rowheader.push(carElement.timeline[count].min_time);
                            rowheader.push(carElement.timeline[count].max_time);
                            rowheader.push(carElement.timeline[count].def_time);
                            if (carElement.timeline[count].dealer_noti_name != null) {
                                rowheader.push(carElement.timeline[count].dealer_noti_name);
                            }
                            else {
                                rowheader.push("OK");
                            }
                        }
                        count++;
                    }
                }
                ;
                xlsx.push(rowheader);
            });
            _this.excelService.arrayExportAsExcelFile(xlsx, 'car');
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: err,
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    DataExportComponent.prototype.onClickFilter = function () {
        this.pageController.pageIndex = 1;
        this.filterCar();
    };
    DataExportComponent.prototype.filterCar = function () {
        var _this = this;
        this.loading = true;
        this.dataService.list(this.dealerId, this.filter, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            var tmpCar = res.data.car;
            tmpCar.forEach(function (carElement) {
                var tmpTimeline = [];
                var stationIndex = 0;
                var count = 0;
                while (count < carElement.timeline.length || stationIndex < _this.stations.length) {
                    if (count == carElement.timeline.length) {
                        count--;
                    }
                    if (stationIndex == _this.stations.length) {
                        stationIndex--;
                    }
                    if (carElement.timeline[count].station_id != 0) {
                        if (carElement.timeline[count].station_id == _this.stations[stationIndex].id) {
                            tmpTimeline.push(carElement.timeline[count]);
                            stationIndex++;
                            count++;
                        }
                        else {
                            tmpTimeline.push({
                                station_noti_name: " ",
                                def_time: "",
                                max_time: "",
                                min_time: "",
                            });
                            stationIndex++;
                            count++;
                        }
                    }
                    else {
                        ///check if these is 2 zero station id
                        if (tmpTimeline.length > 0) {
                            tmpTimeline[0].dealer_noti_name = tmpTimeline[0].dealer_noti_name + ", " + carElement.timeline[count].dealer_noti_name;
                        }
                        else {
                            tmpTimeline.push(carElement.timeline[count]);
                        }
                        count++;
                    }
                }
                ;
                carElement.timeline = tmpTimeline;
            });
            _this.datas = tmpCar;
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: err,
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    DataExportComponent.prototype.onHeaderClick = function (event) {
        if (event == 'back') {
            this.router.navigate(['menu']);
        }
    };
    DataExportComponent.prototype.nowDateFormat = function () {
        var x = new Date();
        var y = x.getFullYear().toString();
        var m = (x.getMonth() + 1).toString();
        var d = x.getDate().toString();
        (d.length == 1) && (d = '0' + d);
        (m.length == 1) && (m = '0' + m);
        var dataNow = y + "-" + m + "-" + d;
        return dataNow;
    };
    DataExportComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.filterCar();
    };
    DataExportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-export',
            template: __webpack_require__(/*! ./data-export.component.html */ "./src/app/pages/data/data-export/data-export.component.html"),
            styles: [__webpack_require__(/*! ./data-export.component.scss */ "./src/app/pages/data/data-export/data-export.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], DataExportComponent);
    return DataExportComponent;
}());



/***/ }),

/***/ "./src/app/pages/data/services/data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/data/services/data.service.ts ***!
  \*****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.list = function (dealer_id, filter, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/data/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
                filter: filter,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    //Extend 
    DataService.prototype.export = function (dealer_id, filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/data/export";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                filter: filter,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DataService.prototype.allStation = function (dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/all";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/pages/data/services/excel.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/data/services/excel.service.ts ***!
  \******************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.jsonExportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.arrayExportAsExcelFile = function (arr, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(arr);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'Configure'|translate}} {{'notification'|translate}} {{'condition'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"uk-container\">\r\n  <form class=\"uk-form-stacked uk-margin-top\">\r\n\r\n    <div class=\"uk-margin\" *ngFor=\"let dealer of form.dealer_noti_config\">\r\n      <label class=\"uk-form-label\" for=\"{{dealer.name}}\"><span [translate]=\"dealer.name\"></span> (<span [translate]=\"dealer.unit\"></span>)</label>\r\n      <div class=\"uk-form-controls\">\r\n        <input class=\"uk-input\" id=\"{{dealer.name}}\" name=\"{{dealer.name}}\" type=\"number\" placeholder=\"\" [(ngModel)]=\"dealer.value\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"uk-margin\" *ngFor=\"let station of form.station_noti_config\">\r\n        <label class=\"uk-form-label\" for=\"{{station.name}}\"><span [translate]=\"station.name\"></span> {{station.station.name}} (<span [translate]=\"station.unit\"></span>)</label>\r\n        <div class=\"uk-form-controls\">\r\n\t\t  <div class=\"uk-form-label\" style=\"float:right;margin-top:-1.8em;\"></div>\r\n          <input class=\"uk-input\" id=\"{{station.name}}\" name=\"{{station.name}}\" type=\"number\" placeholder=\"\" [(ngModel)]=\"station.value\">\r\n        </div>\r\n      </div>\r\n\r\n  </form>\r\n  <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n    <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"save()\">{{'save'|translate}}</button>\r\n    <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancel()\">{{'cancel'|translate}}</button>\r\n  <div>    \r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DealerConfigNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerConfigNotificationComponent", function() { return DealerConfigNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/pages/dealer/services/dealer.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DealerConfigNotificationComponent = /** @class */ (function () {
    function DealerConfigNotificationComponent(router, activeRoute, dealerService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dealerService = dealerService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "notification-config-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update notification condition?"),
            state: "",
        };
        this.form = {
            dealer_noti_config: [],
            station_noti_config: [],
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    DealerConfigNotificationComponent.prototype.ngOnInit = function () {
        this.loadNotification();
    };
    DealerConfigNotificationComponent.prototype.loadNotification = function () {
        var _this = this;
        this.loading = true;
        this.dealerService.notificationList(this.dealerId).then(function (res) {
            _this.form.dealer_noti_config = res.data.dealer_noti_config;
            _this.form.station_noti_config = res.data.station_noti_config;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    DealerConfigNotificationComponent.prototype.save = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).show();
    };
    DealerConfigNotificationComponent.prototype.cancel = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['dealer', 'information', this.dealerId]);
    };
    DealerConfigNotificationComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.dealerService.notificationEdit(this.form).then(function (res) {
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                _this.router.navigate(['dealer', 'information', _this.dealerId]);
            }).catch(function (err) {
                _this.loading = false;
                UIkit.modal(_elementId).hide();
                UIkit.notification({
                    message: _this.translate.instant('Cannot edit Notification'),
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    DealerConfigNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealer-config-notification',
            template: __webpack_require__(/*! ./dealer-config-notification.component.html */ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.html"),
            styles: [__webpack_require__(/*! ./dealer-config-notification.component.scss */ "./src/app/pages/dealer/dealer-config-notification/dealer-config-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DealerConfigNotificationComponent);
    return DealerConfigNotificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/dealer/dealer-create/dealer-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-create/dealer-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\" >{{'dealer create'|translate}}</a>\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-alert-danger\" *ngIf=\"alert.show\" uk-alert>{{alert.message}}</div>\r\n        <h4 class=\"uk-heading-line\"><span>{{'dealer'|translate}}</span></h4>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">*{{'dealer name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"dealername\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.name\">\r\n            </div>\r\n        </div>\r\n        \r\n        <h4 class=\"uk-heading-line\"><span>{{'location'|translate}}</span></h4>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'address'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"phoaddressne\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.address\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'street'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"street\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.street\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'city'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"city\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.city\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'state'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"state\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.state\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'country'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"country\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.country\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'zipcode'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"zipcode\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.zipcode\">\r\n            </div>\r\n        </div>\r\n        \r\n        <h4 class=\"uk-heading-line\"><span>{{'contact person'|translate}}</span></h4>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"name\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'position'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"position\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_position\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'email'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"email\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'tel'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"tel\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_tel\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"create()\">{{'create'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancel()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<!-- <div id=\"modal-confirm\" uk-modal>\r\n    <div class=\"uk-modal-dialog uk-modal-body\">\r\n        <p>{{'Do you confirm to create new Dealer'}}?</p>\r\n        <p class=\"uk-text-right\">\r\n            <button class=\"uk-button uk-button-primary uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"modalConfirm()\">{{'confirm'|translate}}</button>\r\n            <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"modalCancel()\">{{'cancel'|translate}}</button>\r\n        </p>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dealer/dealer-create/dealer-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-create/dealer-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dealer/dealer-create/dealer-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-create/dealer-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: DealerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerCreateComponent", function() { return DealerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/pages/dealer/services/dealer.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DealerCreateComponent = /** @class */ (function () {
    function DealerCreateComponent(router, dealerService, translate) {
        this.router = router;
        this.dealerService = dealerService;
        this.translate = translate;
        this.loading = false;
        this.elementId = {
            confirmModal: "dealer-create-confirm-modal",
        };
        this.confirmModal = {
            elementId: "dealer-create-confirm-modal",
            detail: this.translate.instant("Do you confirm to create new Dealer?"),
            state: "",
        };
        this.alert = {
            show: false,
            message: "",
        };
        this.form = {
            name: '',
            address: '',
            street: '',
            state: '',
            city: '',
            country: '',
            zipcode: '',
            contact_name: '',
            contact_position: '',
            contact_email: '',
            contact_tel: '',
        };
    }
    DealerCreateComponent.prototype.ngOnInit = function () {
    };
    DealerCreateComponent.prototype.create = function () {
        if (this.form.name != '') {
            var _elementId = "#" + this.confirmModal.elementId;
            UIkit.modal(_elementId).show();
        }
        else {
            UIkit.notification({
                message: this.translate.instant('Dealer name cannot emtry!!!'),
                status: 'warning',
                timeout: 1000
            });
        }
    };
    DealerCreateComponent.prototype.cancel = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['dealer', 'list']);
    };
    DealerCreateComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.alert.show = false;
            this.loading = true;
            this.dealerService.create(this.form).then(function (res) {
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                _this.router.navigate(['dealer', 'list']);
            }).catch(function (err) {
                _this.loading = false;
                UIkit.modal(_elementId).hide();
                console.log(err);
                _this.alert.show = true;
                _this.alert.message = err;
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    DealerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealer-create',
            template: __webpack_require__(/*! ./dealer-create.component.html */ "./src/app/pages/dealer/dealer-create/dealer-create.component.html"),
            styles: [__webpack_require__(/*! ./dealer-create.component.scss */ "./src/app/pages/dealer/dealer-create/dealer-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DealerCreateComponent);
    return DealerCreateComponent;
}());



/***/ }),

/***/ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-edit/dealer-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\" >{{'dealer edit'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-alert-danger\" *ngIf=\"alert.show\" uk-alert>{{alert.message}}</div>\r\n        <h4 class=\"uk-heading-line\">\r\n            <span>{{'dealer'|translate}}</span>\r\n        </h4>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">*{{'dealer name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"dealername\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.name\">\r\n            </div>\r\n        </div>\r\n\r\n        <h4 class=\"uk-heading-line\">\r\n            <span>{{'location'|translate}}</span>\r\n        </h4>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'address'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"phoaddressne\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.address\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'street'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"street\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.street\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'city'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"city\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.city\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'state'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"state\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.state\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'country'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"country\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.country\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'zipcode'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"zipcode\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.zipcode\">\r\n            </div>\r\n        </div>\r\n\r\n        <h4 class=\"uk-heading-line\">\r\n            <span>{{'contact person'|translate}}</span>\r\n        </h4>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"name\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'position'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"position\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_position\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'email'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"email\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"form-stacked-text\">{{'tel'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"tel\" id=\"form-stacked-text\" type=\"text\" [(ngModel)]=\"form.contact_tel\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"edit()\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancel()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-edit/dealer-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-edit/dealer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: DealerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerEditComponent", function() { return DealerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/pages/dealer/services/dealer.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DealerEditComponent = /** @class */ (function () {
    function DealerEditComponent(router, activeRoute, dealerService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dealerService = dealerService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "dealer-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update information?"),
            state: "",
        };
        this.form = {
            name: '',
            address: '',
            street: '',
            state: '',
            city: '',
            country: '',
            zipcode: '',
            contact_name: '',
            contact_position: '',
            contact_email: '',
            contact_tel: '',
        };
        this.alert = {
            show: false,
            message: "",
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    DealerEditComponent.prototype.ngOnInit = function () {
        this.loadDealer();
    };
    DealerEditComponent.prototype.loadDealer = function () {
        var _this = this;
        this.loading = true;
        this.dealerService.get(this.dealerId).then(function (res) {
            _this.form = res.data.dealer;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    DealerEditComponent.prototype.edit = function () {
        if (this.form.name != '') {
            var _elementId = "#" + this.confirmModal.elementId;
            UIkit.modal(_elementId).show();
        }
        else {
            UIkit.notification({
                message: this.translate.instant('Dealer name cannot emtry!!!'),
                status: 'warning',
                timeout: 1000
            });
        }
    };
    DealerEditComponent.prototype.cancel = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['dealer', 'information', this.dealerId]);
    };
    DealerEditComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.alert.show = false;
            this.loading = true;
            this.dealerService.edit(this.form).then(function (res) {
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                _this.router.navigate(['dealer', 'information', _this.dealerId]);
            }).catch(function (err) {
                _this.loading = false;
                UIkit.modal(_elementId).hide();
                _this.alert.show = true;
                _this.alert.message = err;
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    DealerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealer-edit',
            template: __webpack_require__(/*! ./dealer-edit.component.html */ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.html"),
            styles: [__webpack_require__(/*! ./dealer-edit.component.scss */ "./src/app/pages/dealer/dealer-edit/dealer-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DealerEditComponent);
    return DealerEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/dealer/dealer-information/dealer-information.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-information/dealer-information.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'dealer information'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n\t\t<button class=\"uk-button uk-button-mute uk-margin-right uk-button-small\" type=\"button\"><span uk-icon=\"more\"></span></button>\r\n\t\t<div uk-dropdown=\"pos: bottom-right\">\r\n\t\t\t<ul class=\"uk-nav uk-dropdown-nav\">\r\n\t\t\t\t<li class=\" uk-margin\" (click)=\"editDealer()\">{{'edit'|translate}} {{ 'dealer'|translate}}</li>\r\n\t\t\t\t<li class=\"uk-nav-divider\"></li>\r\n\t\t\t\t<li class=\" uk-margin\" (click)=\"configStation()\">{{'config'|translate}} {{'station'|translate}}</li>\r\n\t\t\t\t<li class=\" uk-margin\" (click)=\"configNode()\">{{'config'|translate}} {{'blenode'|translate}}</li>\r\n\t\t\t\t<li class=\" uk-margin\" (click)=\"configBeacon()\">{{'config'|translate}} {{'beacon'|translate}} </li>\r\n\t\t\t\t<li class=\" uk-margin\" (click)=\"configNotification()\">{{'config'|translate}} {{'notification'|translate}}</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n    </div>\r\n  </nav>\r\n\r\n  <h2 class=\"uk-heading-line\"><span>{{'information'|translate}}</span></h2>\r\n  <dl class=\"uk-description-list\">\r\n      <dt>{{'dealer name'|translate}}</dt>\r\n      <dd>{{dealer.name}}</dd>\r\n      <dt>{{'address'|translate}}</dt>\r\n      <dd>{{dealer.address}} {{dealer.street}} {{dealer.state}} {{dealer.city}} {{dealer.country}} {{dealer.zipcode}}</dd>\r\n  </dl>\r\n\r\n  <h2 class=\"uk-heading-line\"><span>{{'contact'|translate}} {{'person'|translate}}</span></h2>\r\n  <dl class=\"uk-description-list\">\r\n      <dt>{{'name'|translate}}</dt>\r\n      <dd>{{dealer.contact_name}}</dd>\r\n      <dt>{{'position'|translate}}</dt>\r\n      <dd>{{dealer.contact_position}}</dd>\r\n      <dt>{{'email'|translate}}</dt>\r\n      <dd>{{dealer.contact_email}}</dd>\r\n      <dt>{{'tel'|translate}}</dt>\r\n      <dd>{{dealer.contact_tel}}</dd>\r\n  </dl>\r\n  <h2 class=\"uk-heading-line\"><span>{{'stations'|translate}}</span></h2>\r\n  <div class=\"uk-overflow-auto\">\r\n\t  <table class=\"uk-table uk-table-striped\">\r\n\t\t<thead>\r\n\t\t  <tr>\r\n\t\t\t<th>{{'id'|translate}}</th>\r\n\t\t\t<th>{{'name'|translate}}</th>\r\n\t\t\t<th>{{'status'|translate}}</th>\r\n\t\t  </tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t  <tr *ngFor=\"let station of dealer.station; let i = index\">\r\n\t\t\t<td>{{station.id}}</td>\r\n\t\t\t<td class=\"uk-text-nowrap\">{{station.name}}</td>\r\n\t\t\t<td class=\"uk-text-nowrap\" [translate]=\"station.status\"></td>\r\n\t\t  </tr>\r\n\t\t</tbody>\r\n\t  </table>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\"><span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span></div>"

/***/ }),

/***/ "./src/app/pages/dealer/dealer-information/dealer-information.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-information/dealer-information.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dealer/dealer-information/dealer-information.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-information/dealer-information.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DealerInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerInformationComponent", function() { return DealerInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/pages/dealer/services/dealer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DealerInformationComponent = /** @class */ (function () {
    function DealerInformationComponent(router, activeRoute, dealerService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.dealerService = dealerService;
        this.dealerId = '';
        this.loading = false;
        this.dealer = {
            name: '',
            address: '',
            city: '',
            street: '',
            state: '',
            country: '',
            zipcode: '',
            contact_name: '',
            contact_position: '',
            contact_email: '',
            contact_tel: '',
            station: [],
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    DealerInformationComponent.prototype.ngOnInit = function () {
        this.loadDealer();
    };
    DealerInformationComponent.prototype.loadDealer = function () {
        var _this = this;
        this.loading = true;
        this.dealerService.get(this.dealerId).then(function (res) {
            _this.dealer = res.data.dealer;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    DealerInformationComponent.prototype.editDealer = function () {
        this.router.navigate(['dealer', 'edit', this.dealerId]);
    };
    DealerInformationComponent.prototype.configStation = function () {
        this.router.navigate(['station', 'config', this.dealerId]);
    };
    DealerInformationComponent.prototype.configNode = function () {
        this.router.navigate(['node', 'config', this.dealerId]);
    };
    DealerInformationComponent.prototype.configNotification = function () {
        this.router.navigate(['dealer', 'config', 'notification', this.dealerId]);
    };
    DealerInformationComponent.prototype.configBeacon = function () {
        this.router.navigate(['dealer', 'config', 'beacon', this.dealerId]);
    };
    DealerInformationComponent.prototype.onHeaderClick = function (event) {
        if (event == 'back') {
            this.router.navigate(['dealer', 'list']);
        }
    };
    DealerInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealer-information',
            template: __webpack_require__(/*! ./dealer-information.component.html */ "./src/app/pages/dealer/dealer-information/dealer-information.component.html"),
            styles: [__webpack_require__(/*! ./dealer-information.component.scss */ "./src/app/pages/dealer/dealer-information/dealer-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"]])
    ], DealerInformationComponent);
    return DealerInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/dealer/dealer-list/dealer-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-list/dealer-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'dealer list'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <div class=\"uk-navbar-item\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"create()\">{{'create dealer'|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  \r\n<div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\" *ngFor=\"let dealer of dealers; let i = index\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t\t<h3 class=\"uk-card-title uk-margin-remove-bottom\">{{dealer.name}}</h3>\r\n\t\t<p class=\"uk-text-meta uk-margin-remove-top\">{{'id' |translate}}: {{dealer.id}}</p>\r\n\t\t<p>{{'address' |translate}}: {{dealer.address}} {{dealer.street}} {{dealer.state}} {{dealer.city}} {{dealer.country}}</p>\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n\t\t<div class=\"uk-label\" [translate]=\"dealer.status\"></div>\r\n\t\t<button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded uk-margin-left\" (click)=\"view(dealer.id)\">{{'enter'|translate}}</button>\r\n\t</div>\r\n</div>\r\n<div class=\" uk-margin\">\r\n  <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n      <li *ngIf=\"pageController.pageIndex != 1\"><a (click)=\"changePageonClick(false,-1)\"><span uk-pagination-previous></span></a></li>\r\n      <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\"><span>...</span></li>\r\n      <li *ngFor=\"let index of pageController.pageArray\" [class.uk-active]=\"index==pageController.pageIndex\"><a (click)=\"changePageonClick(true,index)\">{{index}}</a></li>\r\n      <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n      <li *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\" class=\"uk-disabled\"><span>...</span></li>\r\n      <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\"><a (click)=\"changePageonClick(false,1)\"><span uk-pagination-next></span></a></li>\r\n  </ul>\r\n</div>\r\n</div>\r\n<div class=\"loading\" *ngIf=\"loading\"><span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span></div>"

/***/ }),

/***/ "./src/app/pages/dealer/dealer-list/dealer-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-list/dealer-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dealer/dealer-list/dealer-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dealer/dealer-list/dealer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: DealerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerListComponent", function() { return DealerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dealer.service */ "./src/app/pages/dealer/services/dealer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DealerListComponent = /** @class */ (function () {
    function DealerListComponent(router, dealerService) {
        this.router = router;
        this.dealerService = dealerService;
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.loading = false;
        this.dealers = [];
    }
    DealerListComponent.prototype.ngOnInit = function () {
        this.loadDealer();
    };
    DealerListComponent.prototype.loadDealer = function () {
        var _this = this;
        this.loading = true;
        this.dealerService.list((this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            _this.dealers = res.data.dealer;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    DealerListComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.loadDealer();
    };
    DealerListComponent.prototype.create = function () {
        this.router.navigate(['dealer', 'create']);
    };
    DealerListComponent.prototype.view = function (hid) {
        this.router.navigate(['dealer', 'information', hid]);
    };
    DealerListComponent.prototype.onHeaderClick = function (event) {
        if (event == 'back') {
            this.router.navigate(['menu']);
        }
    };
    DealerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealer-list',
            template: __webpack_require__(/*! ./dealer-list.component.html */ "./src/app/pages/dealer/dealer-list/dealer-list.component.html"),
            styles: [__webpack_require__(/*! ./dealer-list.component.scss */ "./src/app/pages/dealer/dealer-list/dealer-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"]])
    ], DealerListComponent);
    return DealerListComponent;
}());



/***/ }),

/***/ "./src/app/pages/dealer/services/dealer.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/dealer/services/dealer.service.ts ***!
  \*********************************************************/
/*! exports provided: DealerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerService", function() { return DealerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DealerService = /** @class */ (function () {
    function DealerService(http) {
        this.http = http;
    }
    DealerService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/dealer/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DealerService.prototype.list = function (offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/dealer/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                limit: limit,
                offset: offset,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DealerService.prototype.create = function (dealer) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/dealer/create";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            // let params  = {
            //   limit: limit,
            //   offset: offset,
            // };
            _this.http.post(apiURL, dealer, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DealerService.prototype.edit = function (dealer) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/dealer/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            // let params  = {
            //   limit: limit,
            //   offset: offset,
            // };
            _this.http.post(apiURL, dealer, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ///Extend
    DealerService.prototype.notificationList = function (dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/notification/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DealerService.prototype.notificationEdit = function (notification) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/notification/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, notification, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DealerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DealerService);
    return DealerService;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"role.service_agent\" >\r\n  <app-header_n ></app-header_n>\r\n  <app-footer></app-footer>\r\n</div>\r\n<app-header *ngIf=\"!role.service_agent\"></app-header>\r\n<div *ngIf=\"!role.service_agent\" class=\"uk-container\" >\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'Menu'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <div class=\"uk-navbar-item\">\r\n          <button (click)=\"changeLang()\" class=\"uk-button uk-button-link\">{{ changemessage }}</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s\" uk-grid>\r\n    <div *ngIf=\"role.admin\" >\r\n        <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"dealerManagement()\">{{'dealer'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.admin\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"beaconManagement()\">{{'beacon'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.supervisor\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"carManagement()\">{{'car'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.supervisor\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"beaconManagement()\">{{'beacon'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.supervisor\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"userManagement()\">{{'user'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.supervisor\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"dashboard()\">{{'dashboard'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.analyst\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"exportData()\">{{'export'|translate}} {{'data'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.technician\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"dashboard()\">{{'dashboard'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.technician\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"carManagement()\">{{'car'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n\r\n    <!-- <div *ngIf=\"role.service_agent\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"carManagement()\">{{'car'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n    <div *ngIf=\"role.service_agent\" >\r\n      <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"dashboard()\">{{'dashboard'|translate}}</button>\r\n    </div> -->\r\n\r\n    <div>\r\n        <button class=\"uk-button uk-button-default uk-button-large uk-border-rounded uk-width-1-1 uk-margin-small-bottom uk-text-center\" (click)=\"profileManagement()\">{{'profile'|translate}} {{'management'|translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/menu/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/menu/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, translate) {
        this.router = router;
        this.translate = translate;
        this.dealerId = '';
        this.language = this.translate.currentLang;
        this.nextlang = '';
        this.changemessage = '';
        this.role = {
            admin: false,
            supervisor: false,
            technician: false,
            analyst: false,
        };
    }
    MenuComponent.prototype.changeLang = function () {
        this.translate.use(this.nextlang);
        this.language = this.nextlang;
        this.langmassage();
    };
    MenuComponent.prototype.langmassage = function () {
        if (this.language == 'en') {
            this.nextlang = 'zh';
            this.changemessage = '切换为中文';
        }
        else {
            this.nextlang = 'en';
            this.changemessage = 'Show in English';
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.dealerId = localStorage.getItem('dealerId');
        var userType = localStorage.getItem('userType');
        this.role[userType] = true;
        console.log(this.role);
        this.langmassage();
    };
    MenuComponent.prototype.dealerManagement = function () {
        this.router.navigate(['dealer', 'list']);
    };
    MenuComponent.prototype.userManagement = function () {
        this.router.navigate(['user', 'list', this.dealerId]);
    };
    MenuComponent.prototype.dashboard = function () {
        this.router.navigate(['dashboard', 'car', this.dealerId]);
    };
    MenuComponent.prototype.exportData = function () {
        this.router.navigate(['data', 'export', this.dealerId]);
    };
    MenuComponent.prototype.beaconManagement = function () {
        this.router.navigate(['beacon', 'list', this.dealerId]);
    };
    MenuComponent.prototype.carManagement = function () {
        this.router.navigate(['car', 'list', this.dealerId]);
    };
    MenuComponent.prototype.profileManagement = function () {
        this.router.navigate(['profile', 'edit']);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/pages/menu/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/pages/menu/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/node/node-config/node-config.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/node/node-config/node-config.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'blenode'|translate}} {{'configuration'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n    </div>\r\n  </nav>\r\n\r\n  <fieldset class=\"uk-fieldset uk-background-muted uk-padding-small\">\r\n\t<div class=\"uk-margin\">\r\n        <input class=\"uk-input\" type=\"text\" placeholder=\"*{{'dev'|translate}} {{'eui'|translate}}\" [(ngModel)]=\"node.dev_eui\">\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <input class=\"uk-input\" type=\"text\" placeholder=\"*{{'blenode'|translate}} {{'name'|translate}}\" [(ngModel)]=\"node.name\">\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n          <select class=\"uk-select\" id=\"form-stacked-select\" [(ngModel)]=\"node.station_id\">\r\n            <option value=\"0\" selected>*{{'please Select Station' |translate}}</option>\r\n            <option value=\"{{station.id}}\" *ngFor=\"let station of stations\">{{station.name}}</option>\r\n          </select>\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <button class=\"uk-button uk-button-primary uk-border-rounded\" (click)=\"addNode()\">{{'add'|translate}} {{'node'|translate}}</button>\r\n\t</div>\r\n  </fieldset>\r\n\r\n  <div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\"  *ngFor=\"let node of nodes; let i = index\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t\t<h3 class=\"uk-card-title uk-margin-remove-bottom\">{{node.name}}\r\n\t\t\t\t<span class=\"uk-label\">{{node.station.name}}</span>\r\n\t\t\t</h3>\r\n\t\t\t<p class=\"uk-text-meta uk-margin-remove-top\">{{'id' |translate}}:  {{node.id}}</p>\r\n\t\t\t<p>{{'dev'|translate}} {{'eui'|translate}}:  {{node.dev_eui}}</p>\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n        <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded\" (click)=\"editNode(node.id)\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded uk-margin-left\" (click)=\"deleteNode(node.id, node.name)\">{{'delete'|translate}}</button>\r\n\t</div>\r\n  </div>  \r\n\r\n<div class=\" uk-margin\">\r\n  <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n    <li *ngIf=\"pageController.pageIndex != 1\">\r\n      <a (click)=\"changePageonClick(false,-1)\">\r\n        <span uk-pagination-previous></span>\r\n      </a>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngFor=\"let index of pageController.pageArray\" [class.uk-active]=\"index==pageController.pageIndex\">\r\n      <a (click)=\"changePageonClick(true,index)\">{{index}}</a>\r\n    </li>\r\n    <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n    <li *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\">\r\n      <a (click)=\"changePageonClick(false,1)\">\r\n        <span uk-pagination-next></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/node/node-config/node-config.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/node/node-config/node-config.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/node/node-config/node-config.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/node/node-config/node-config.component.ts ***!
  \*****************************************************************/
/*! exports provided: NodeConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeConfigComponent", function() { return NodeConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/node.service */ "./src/app/pages/node/services/node.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NodeConfigComponent = /** @class */ (function () {
    //mockup
    function NodeConfigComponent(router, activeRoute, nodeService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.nodeService = nodeService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.devEUI = '';
        this.nodeName = '';
        this.stations = [];
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.nodes = [];
        this.node = {
            "name": '',
            "dev_eui": '',
            "station_id": 0,
        };
        this.confirmModal = {
            elementId: "node-config-confirm-modal",
            detail: "",
            state: "",
        };
        //mockup
        this.deleteIndex = 0;
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    NodeConfigComponent.prototype.ngOnInit = function () {
        this.loadNode();
    };
    NodeConfigComponent.prototype.loadNode = function () {
        var _this = this;
        this.loading = true;
        this.nodeService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            _this.nodes = res.data.blenode;
            _this.nodeService.allStation(_this.dealerId).then(function (res) {
                _this.stations = res.data.station;
                _this.loading = false;
            }).catch(function (err) {
                _this.loading = false;
            });
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    NodeConfigComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.loadNode();
    };
    NodeConfigComponent.prototype.addNode = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.node.dev_eui != '' && this.node.name != '' && this.node.station_id != 0) {
            this.confirmModal.detail = this.translate.instant("Do you confirm to add") + " " + this.node.name + " " + this.translate.instant("blenode") + "?";
            this.confirmModal.state = "add";
            UIkit.modal(_elementId).show();
        }
        else {
            if (this.node.dev_eui == '') {
                UIkit.notification({
                    message: this.translate.instant('devEUI cannot emtry!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            }
            if (this.node.name == '') {
                UIkit.notification({
                    message: this.translate.instant('Node name cannot emtry!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            }
            if (this.node.station_id == 0) {
                UIkit.notification({
                    message: this.translate.instant('Please select station'),
                    status: 'warning',
                    timeout: 1000
                });
            }
        }
    };
    NodeConfigComponent.prototype.editNode = function (nodeId) {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['node', 'edit', this.dealerId, nodeId]);
    };
    NodeConfigComponent.prototype.deleteNode = function (index, name) {
        var _elementId = "#" + this.confirmModal.elementId;
        this.deleteIndex = index;
        this.confirmModal.detail = this.translate.instant("Do you confirm to delete") + " " + name + " " + this.translate.instant("blenode") + "?";
        this.confirmModal.state = "delete";
        UIkit.modal(_elementId).show();
    };
    NodeConfigComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            if (this.confirmModal.state == "add") {
                this.nodeService.create(this.dealerId, this.node).then(function (res) {
                    _this.node.dev_eui = '';
                    _this.node.name = '';
                    _this.node.station_id = 0;
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadNode();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: err,
                        status: 'warning',
                        timeout: 1000
                    });
                });
            }
            else if (this.confirmModal.state == "delete") {
                this.nodeService.delete(this.deleteIndex).then(function (res) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadNode();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: err,
                        status: 'warning',
                        timeout: 1000
                    });
                });
                UIkit.modal(_elementId).hide();
                this.loading = false;
            }
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    NodeConfigComponent.prototype.onHeaderClick = function (event) {
        var _elementId = "#" + this.confirmModal.elementId;
        if (event == 'back') {
            UIkit.modal(_elementId).$destroy(true);
            this.router.navigate(['dealer', 'information', this.dealerId]);
        }
    };
    NodeConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node-config',
            template: __webpack_require__(/*! ./node-config.component.html */ "./src/app/pages/node/node-config/node-config.component.html"),
            styles: [__webpack_require__(/*! ./node-config.component.scss */ "./src/app/pages/node/node-config/node-config.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], NodeConfigComponent);
    return NodeConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/node/node-edit/node-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/node/node-edit/node-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\">{{'blenode'|translate}} {{'edit'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n    </div>\r\n  </nav>\r\n  <form class=\"uk-form-stacked\">\r\n    <div class=\"uk-margin\">\r\n      <label class=\"uk-form-label\" for=\"deveui\">*{{'dev'|translate}}{{'eui'|translate}}</label>\r\n      <div class=\"uk-form-controls\">\r\n        <input class=\"uk-input\" name=\"deveui\" id=\"deveui\" type=\"text\" [(ngModel)]=\"node.dev_eui\">\r\n      </div>\r\n    </div>\r\n    <div class=\"uk-margin\">\r\n      <label class=\"uk-form-label\" for=\"name\">*{{'blenode'|translate}} {{'name'|translate}}</label>\r\n      <div class=\"uk-form-controls\">\r\n        <input class=\"uk-input\" name=\"name\" id=\"name\" type=\"text\" [(ngModel)]=\"node.name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"uk-margin\">\r\n      <label class=\"uk-form-label\" for=\"station\">*{{'station'|translate}}</label>\r\n      <div class=\"uk-form-controls\">\r\n\r\n        <select class=\"uk-select\" id=\"station\" name=\"station\" [(ngModel)]=\"node.station_id\" >\r\n            <option value=\"{{station.id}}\" *ngFor=\"let station of stations\">{{station.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n    <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"editStation()\">{{'edit'|translate}}</button>\r\n    <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelStation()\">{{'cancel'|translate}}</button>\r\n  </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/node/node-edit/node-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/node/node-edit/node-edit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/node/node-edit/node-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/node/node-edit/node-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: NodeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeEditComponent", function() { return NodeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/node.service */ "./src/app/pages/node/services/node.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NodeEditComponent = /** @class */ (function () {
    function NodeEditComponent(router, activeRoute, nodeService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.nodeService = nodeService;
        this.translate = translate;
        this.dealerId = '';
        this.nodeId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "node-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update BLENode?"),
            state: "",
        };
        this.node = {
            dev_eui: '',
            name: '',
            station_id: '',
        };
        this.stations = [];
        this.nodeId = activeRoute.snapshot.params['nodeId'];
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    NodeEditComponent.prototype.ngOnInit = function () {
        this.loadStation();
    };
    NodeEditComponent.prototype.loadStation = function () {
        var _this = this;
        this.loading = true;
        this.nodeService.get(this.nodeId).then(function (res) {
            _this.nodeService.allStation(_this.dealerId).then(function (res) {
                _this.stations = res.data.station;
                _this.loading = false;
            }).catch(function (err) {
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
                _this.loading = false;
            });
            _this.node = res.data.blenode;
        }).catch(function (err) {
            _this.loading = false;
            UIkit.notification({
                message: err,
                status: 'warning',
                timeout: 1000
            });
        });
    };
    NodeEditComponent.prototype.editStation = function () {
        if (this.node.dev_eui == "") {
            UIkit.notification({
                message: this.translate.instant("Dev EUI cannot emptry"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        if (this.node.name == "") {
            UIkit.notification({
                message: this.translate.instant("Name cannot emptry"),
                status: 'warning',
                timeout: 1000
            });
            return;
        }
        this.node.dev_eui = this.node.dev_eui.toUpperCase();
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).show();
    };
    NodeEditComponent.prototype.cancelStation = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['node', 'config', this.dealerId]);
    };
    NodeEditComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.nodeService.edit(this.node, this.dealerId).then(function (res) {
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['node', 'config', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    NodeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node-edit',
            template: __webpack_require__(/*! ./node-edit.component.html */ "./src/app/pages/node/node-edit/node-edit.component.html"),
            styles: [__webpack_require__(/*! ./node-edit.component.scss */ "./src/app/pages/node/node-edit/node-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], NodeEditComponent);
    return NodeEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/node/services/node.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/node/services/node.service.ts ***!
  \*****************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/blenode/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    NodeService.prototype.list = function (dealer_id, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/blenode/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    NodeService.prototype.create = function (dealer_id, blenode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/blenode/create";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                name: blenode.name,
                dev_eui: blenode.dev_eui,
                station_id: blenode.station_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    NodeService.prototype.edit = function (blenode, dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/blenode/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: blenode.id,
                name: blenode.name,
                station_id: blenode.station_id,
                dealer_id: dealer_id,
                dev_eui: blenode.dev_eui,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    NodeService.prototype.delete = function (node_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/blenode/delete";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: node_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    /// Extend
    NodeService.prototype.allStation = function (dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/all";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    NodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-edit/profile-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-edit/profile-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container uk-block-wrap\">\r\n  <div class=\"uk-margin-large-bottom\" uk-grid>\r\n    <div class=\"uk-width-4-5 uk-text-large uk-text-emphasis\">\r\n        {{'Profile'|translate}} {{'Management'|translate}}\r\n    </div>\r\n    <div\r\n      class=\"uk-width-1-5 uk-width-padding uk-text-center uk-text-middle en uk-text-primary language\"\r\n    >\r\n    <span (click)=\"changeLang()\">EN</span><span style=\"padding-left:3px;padding-right:3px;\">|</span><span (click)=\"changeLang()\">中</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"uk-margin-top\">&nbsp;</div>\r\n  <div\r\n    class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m uk-margin-top uk-margin-remove-top middleBg\"\r\n  >\r\n  <div class=\"uk-margin-top\">&nbsp;</div>\r\n    <div uk-grid>\r\n      <div class=\"uk-width-1-2 uk-text-emphasis\">{{'username'|translate}}</div>\r\n      <div class=\"uk-width-1-2 uk-padding-remove\">\r\n        <input\r\n          class=\"uk-search-input uk-text-emphasis pad4\" style=\"background-color:#fff;\"\r\n     type=\"text\" name=\"username\" id=\"username\"  [(ngModel)]=\"user.username\" disabled\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n     \r\n\r\n\r\n    <div uk-grid class=\"uk-margin-large-bottom\">\r\n      <div class=\"uk-width-1-2 uk-text-emphasis\">{{'position'|translate}}</div>\r\n      <div class=\"uk-width-1-2 uk-padding-remove\">\r\n        <input\r\n          class=\"uk-search-input uk-text-emphasis pad4\"\r\n          type=\"text\"\r\n          [(ngModel)]=\"user.user_role_name\" disabled  style=\"background-color:#fff;\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"uk-margin-top\">&nbsp;</div>\r\n    <div class=\"uk-container uk-text-center uk-margin-top\">\r\n      <button class=\"uk-button uk-button-primary uk-width-4-5 uk-margin-top   btn-bg\" (click)=\"pwdprofile()\">{{'password'|translate}}\r\n      </button>\r\n      <button class=\"uk-button uk-button-primary uk-width-4-5 uk-margin-top btn-bg\" (click)=\"logout()\">\r\n        {{'logout'|translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"uk-margin-large-bottom\">&nbsp;</div>\r\n  <!-- <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\"\r\n        >{{ \"car\" | translate }} {{ \"management\" | translate }}</a\r\n      >\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <button\r\n        class=\"uk-button uk-button-small uk-button-primary uk-border-rounded\"\r\n        (click)=\"registerCar()\"\r\n      >\r\n        {{ \"register\" | translate }} {{ \"car\" | translate }}\r\n      </button>\r\n    </div>\r\n  </nav> -->\r\n  <!-- <div class=\"uk-container\"> -->\r\n  <!-- <div uk-grid>\r\n    <div class=\"uk-width-3-4 uk-text-large\">Profile Management</div>\r\n    <div class=\"uk-width-1-4\">\r\n        <span>En|中</span>\r\n    </div>\r\n  </div> -->\r\n  <!-- <div class=\"uk-flex ul-flex-new uk-flex-wrap-space-between\">\r\n    <div class=\"left uk-text-large\">Profile Management</div>\r\n    <div class=\"right uk-flex-right uk-text-small\">En|中</div>\r\n  </div>\r\n  <div class=\"uk-card uk-card-default uk-card-large uk-card-body\">sefsd</div> -->\r\n  <!-- </div> -->\r\n  <!-- \r\nprofile manager 切片代码\r\n<app-header>\r\n  </app-header>\r\n  <div class=\"uk-container\">\r\n      <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n          <div class=\"uk-navbar-left\">\r\n              <a class=\"uk-navbar-item uk-logo\">{{'profile'|translate}} {{'edit'|translate}}</a>\r\n          </div>\r\n          <div class=\"uk-navbar-right\">\r\n          </div>\r\n      </nav>\r\n      <form class=\"uk-form-stacked\">\r\n          <div class=\"uk-margin\">\r\n              <label class=\"uk-form-label\" for=\"username\">*{{'username'|translate}}</label>\r\n              <div class=\"uk-form-controls\">\r\n                  <input class=\"uk-input\" name=\"username\" id=\"username\" type=\"text\" [(ngModel)]=\"user.username\" disabled>\r\n              </div>\r\n          </div>\r\n\r\n          \r\n          <div class=\"uk-margin\">\r\n              <label class=\"uk-form-label\" for=\"position\">*{{'position'|translate}}</label>\r\n              <div class=\"uk-form-controls\">\r\n                  <select class=\"uk-select\" id=\"position\" name=\"position\" [(ngModel)]=\"user.user_role_id\" disabled>\r\n                      <option value=\"admin\">Admin</option>\r\n                      <option value=\"supervisor\">Supervisor</option>\r\n                      <option value=\"analyst\">Analyst</option>\r\n                      <option value=\"technician\">Technician</option>\r\n                  </select>\r\n              </div>\r\n          </div>\r\n           \r\n      </form>\r\n      <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n          <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"pwdprofile()\">{{'password'|translate}}</button>\r\n          <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"logout()\">{{'logout'|translate}}</button>\r\n      </div>\r\n  </div>\r\n   -->\r\n  <app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n \r\n  <div class=\"loading\" *ngIf=\"loading\">\r\n      <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n  </div> \r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-edit/profile-edit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/profile-edit/profile-edit.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uk-block-wrap {\n  width: 100%;\n  height: 100%;\n  background: #f2f2f3;\n  box-sizing: border-box;\n  padding-top: 16px !important; }\n\n.uk-width-padding {\n  padding: 0; }\n\n.en {\n  line-height: 36px;\n  background: #fff; }\n\n.middleBg {\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  background: #f5f5f5; }\n\n.btn-bg {\n  background: #405AB2;\n  border-radius: 6px; }\n\n.pad4 {\n  padding-left: 4px; }\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-edit/profile-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/profile-edit/profile-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/pages/profile/services/profile.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authen/authen.service */ "./src/app/services/authen/authen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(router, activeRoute, profileService, translate, auth) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.profileService = profileService;
        this.translate = translate;
        this.auth = auth;
        this.loading = false;
        this.userId = '';
        this.confirmModal = {
            elementId: "profile-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update Profile?"),
            state: "",
        };
        this.user = {
            id: '',
            username: '',
            fullname: '',
            password: '',
            passwordReply: '',
            position: '',
            email: '',
            user_role_id: '',
            tel: '',
            user_role_name: ""
        };
        this.language = this.translate.currentLang;
        this.nextlang = '';
        this.changemessage = '';
        this.userId = localStorage.getItem('userId');
        this.langmassage();
    }
    ProfileEditComponent.prototype.changeLang = function () {
        this.translate.use(this.nextlang);
        this.language = this.nextlang;
        console.log('fb:' + this.nextlang);
        this.langmassage();
        console.log('fb:' + this.nextlang);
    };
    ProfileEditComponent.prototype.langmassage = function () {
        if (this.language == 'en') {
            this.nextlang = 'zh';
        }
        else {
            this.nextlang = 'en';
        }
    };
    ProfileEditComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileEditComponent.prototype.loadProfile = function () {
        var _this = this;
        this.profileService.get(this.userId).then(function (res) {
            _this.user = res.data.user;
            switch (_this.user.user_role_id) {
                case 'admin':
                    _this.user.user_role_name = "Admin";
                    break;
                case 'supervisor':
                    _this.user.user_role_name = "Supervisor";
                    break;
                case 'analyst':
                    _this.user.user_role_name = "Analyst";
                    break;
                case 'technician':
                    _this.user.user_role_name = "Technician";
                    break;
                case 'service_agent':
                    _this.user.user_role_name = "ServiceAgent";
                    break;
            }
            console.log(_this.user);
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Profile'),
                status: 'warning',
                timeout: 1000
            });
        });
    };
    ProfileEditComponent.prototype.pwdprofile = function () {
        this.router.navigate(['profile', 'pwd']);
    };
    ProfileEditComponent.prototype.logout = function () {
        var _this = this;
        this.auth.userLogout().then(function (res) {
            _this.router.navigate(['login']);
            //window.location.href = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/tracking/#/login";
        }).catch(function (err) {
            _this.router.navigate(['login']);
        });
    };
    ProfileEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.component.html */ "./src/app/pages/profile/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-edit.component.scss */ "./src/app/pages/profile/profile-edit/profile-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_authen_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile-pwd/profile-pwd.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/profile-pwd/profile-pwd.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- profile-pwd 密码设置切片代码 -->\r\n<!-- <app-header>\r\n  </app-header> -->\r\n<div class=\"uk-container register-wrap\">\r\n  <div class=\"uk-margin-top\" uk-grid>\r\n    <div class=\"uk-width-1-3 uk-text-left uk-text-emphasis\" (click)=\"cancelProfile()\">{{'cancel'|translate}}</div>\r\n    <!-- <div class=\"uk-width-1-4\"></div> -->\r\n    <div class=\"uk-width-1-3\"></div>\r\n    <div class=\"uk-width-1-3 uk-text-center\">\r\n      <button class=\"uk-button-primary save-btn\" (click)=\"editProfile()\">{{'Save'|translate}}</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"uk-width-1-1 register-padding uk-text-emphasis uk-margin-small-top uk-text-large\">\r\n    Set Password\r\n  </div>\r\n  <div class=\"uk-margin-top\"></div>\r\n  <div class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m middleBg\">\r\n    <div class=\"uk-margin-top\">&nbsp;</div>\r\n    <div uk-grid>\r\n      <div class=\"uk-width-1-2 uk-text-emphasis left\" for=\"username\">*{{'username'|translate}}</div>\r\n      <div class=\"uk-width-1-2 uk-padding-remove\">\r\n        <input class=\"uk-search-input uk-text-emphasis pad4\" style=\"background-color:#fff;\" type=\"text\" name=\"username\" id=\"username\" type=\"text\"\r\n          [(ngModel)]=\"user.username\" disabled />\r\n      </div>\r\n    </div>\r\n    <div uk-grid class=\"uk-margin-large-bottom\">\r\n      <div class=\"uk-width-1-2 uk-text-emphasis left\" for=\"password\">{{'new'|translate}} {{'password'|translate}}</div>\r\n      <div class=\"uk-width-1-2 uk-padding-remove\">\r\n        <input class=\"uk-search-input uk-text-emphasis pad4\" type=\"text\" name=\"password\" id=\"password\" type=\"password\"\r\n          [(ngModel)]=\"user.password\" placeholder=\"{{'Enter'|translate}} {{'New'|translate}} {{'password'|translate}}\">\r\n          \r\n      </div>\r\n    </div>\r\n    <div uk-grid class=\"uk-margin-large-bottom\">\r\n      <div class=\"uk-width-1-2 uk-text-emphasis left\">*{{'Confirm'|translate}}</div>\r\n      <div class=\"uk-width-1-2 uk-padding-remove\">\r\n        <input class=\"uk-search-input uk-text-emphasis pad4\" type=\"text\" name=\"password-reply\" id=\"password-reply\" type=\"password\"\r\n          [(ngModel)]=\"user.passwordReply\"  placeholder=\"{{'reply'|translate}} {{'new'|translate}} {{'password'|translate}}\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"uk-margin-top\">&nbsp;</div>\r\n    <div class=\"uk-margin-top\">&nbsp;</div>\r\n    <div class=\"uk-margin-top\">&nbsp;</div>\r\n  </div>\r\n  <!-- <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n          <div class=\"uk-navbar-left\">\r\n              <a class=\"uk-navbar-item uk-logo\">{{'profile'|translate}} {{'edit'|translate}}</a>\r\n          </div>\r\n          <div class=\"uk-navbar-right\">\r\n          </div>\r\n      </nav>\r\n      <form class=\"uk-form-stacked\">\r\n          <div class=\"uk-margin\">\r\n              <label class=\"uk-form-label\" for=\"username\">*{{'username'|translate}}</label>\r\n              <div class=\"uk-form-controls\">\r\n                  <input class=\"uk-input\" name=\"username\" id=\"username\" type=\"text\" [(ngModel)]=\"user.username\" disabled>\r\n              </div>\r\n          </div>\r\n \r\n          <div class=\"uk-margin\">\r\n              <label class=\"uk-form-label\" for=\"position\">*{{'position'|translate}}</label>\r\n              <div class=\"uk-form-controls\">\r\n                  <select class=\"uk-select\"  id=\"position\" name=\"position\" [(ngModel)]=\"user.user_role_id\" disabled>\r\n                      <option value=\"admin\">Admin</option>\r\n                      <option value=\"supervisor\">Supervisor</option>\r\n                      <option value=\"analyst\">Analyst</option>\r\n                      <option value=\"technician\">Technician</option>\r\n                  </select>\r\n              </div>\r\n          </div>\r\n          \r\n          <hr>\r\n          <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"password\">{{'new'|translate}} {{'password'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"password\" id=\"password\" type=\"password\" [(ngModel)]=\"user.password\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"password-reply\"> {{'reply'|translate}} {{'new'|translate}} {{'password'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"password-reply\" id=\"password-reply\" type=\"password\" [(ngModel)]=\"user.passwordReply\">\r\n            </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n          <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"editProfile()\">{{'edit'|translate}}</button>\r\n          <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelProfile()\">{{'cancel'|translate}}</button>\r\n      </div> -->\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-pwd/profile-pwd.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/profile-pwd/profile-pwd.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-wrap {\n  min-height: 100%;\n  background: #f2f2f3; }\n\n.save-btn {\n  width: 80%;\n  height: 100%;\n  background: #405ab2;\n  border-radius: 6px; }\n\n.uk-width-padding {\n  padding: 0; }\n\n.en {\n  line-height: 36px;\n  background: #fff; }\n\n.middleBg {\n  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  background: #f5f5f5; }\n\n.pad4 {\n  padding-left: 4px; }\n\n@media screen and (max-width: 320px) {\n  .middleBg {\n    padding: 15px !important; }\n  .middleBg .left {\n    padding-left: 24px !important; } }\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-pwd/profile-pwd.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/profile-pwd/profile-pwd.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfilePwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePwdComponent", function() { return ProfilePwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/pages/profile/services/profile.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePwdComponent = /** @class */ (function () {
    function ProfilePwdComponent(router, activeRoute, profileService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.profileService = profileService;
        this.translate = translate;
        this.loading = false;
        this.userId = '';
        this.confirmModal = {
            elementId: "profile-pwd-confirm-modal",
            detail: this.translate.instant("Do you confirm to update Profile?"),
            state: "",
        };
        this.user = {
            id: '',
            username: '',
            fullname: '',
            password: '',
            passwordReply: '',
            position: '',
            email: '',
            user_role_id: '',
            tel: '',
        };
        this.userId = localStorage.getItem('userId');
    }
    ProfilePwdComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfilePwdComponent.prototype.loadProfile = function () {
        var _this = this;
        this.profileService.get(this.userId).then(function (res) {
            _this.user = res.data.user;
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Profile'),
                status: 'warning',
                timeout: 1000
            });
        });
    };
    ProfilePwdComponent.prototype.editProfile = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.user.password == "") {
            UIkit.modal(_elementId).show();
        }
        else {
            if (this.user.password == this.user.passwordReply) {
                UIkit.modal(_elementId).show();
            }
            else {
                UIkit.notification({
                    message: this.translate.instant('password and re-password not match'),
                    status: 'warning',
                    timeout: 1000
                });
            }
        }
    };
    ProfilePwdComponent.prototype.cancelProfile = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['profile', 'edit']); // this.router.navigate(['menu']);
    };
    ProfilePwdComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.profileService.edit(this.user).then(function (res) {
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                //  this.router.navigate(['menu']);
                _this.router.navigate(['profile', 'edit']);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: _this.translate.instant('Cannot edit Profile'),
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    ProfilePwdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-pwd',
            template: __webpack_require__(/*! ./profile-pwd.component.html */ "./src/app/pages/profile/profile-pwd/profile-pwd.component.html"),
            styles: [__webpack_require__(/*! ./profile-pwd.component.scss */ "./src/app/pages/profile/profile-pwd/profile-pwd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ProfilePwdComponent);
    return ProfilePwdComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/services/profile.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/services/profile.service.ts ***!
  \***********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ProfileService.prototype.edit = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            // let params  = {
            //   limit: limit,
            //   offset: offset,
            // };
            _this.http.post(apiURL, user, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ///Extend
    ProfileService.prototype.notificationList = function (dealer_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/notification/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ProfileService.prototype.notificationEdit = function (notification) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/notification/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, notification, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/pages/station/services/station.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/station/services/station.service.ts ***!
  \***********************************************************/
/*! exports provided: StationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationService", function() { return StationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationService = /** @class */ (function () {
    function StationService(http) {
        this.http = http;
    }
    StationService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    StationService.prototype.list = function (dealer_id, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    StationService.prototype.create = function (dealer_id, station) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/create";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                name: station.name,
                detail: station.detail,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    StationService.prototype.edit = function (station) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: station.id,
                name: station.name,
                detail: station.detail,
                dealer_id: station.dealer_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    StationService.prototype.delete = function (station_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/station/delete";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: station_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    StationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StationService);
    return StationService;
}());



/***/ }),

/***/ "./src/app/pages/station/station-config/station-config.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/station/station-config/station-config.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n      <a class=\"uk-navbar-item uk-logo\">{{'station'|translate}} {{'configuration'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n    </div>\r\n  </nav>\r\n\r\n  <fieldset class=\"uk-fieldset uk-background-muted uk-padding-small\">\r\n\t<div class=\"uk-margin\">\r\n        <input class=\"uk-input\" type=\"text\" placeholder=\"*{{'station'|translate}} {{'name'|translate}}\" [(ngModel)]=\"station.name\">\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <input class=\"uk-input\" type=\"text\" placeholder=\"{{'detail'|translate}}\" [(ngModel)]=\"station.detail\">\r\n\t</div>\r\n\t<div class=\"uk-margin\">\r\n        <button class=\"uk-button uk-button-primary uk-border-rounded\" (click)=\"createStation()\">{{'create'|translate}} {{'station'|translate}}</button>\r\n\t</div>\r\n  </fieldset>\r\n\r\n<div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\" *ngFor=\"let station of stations; let i = index\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t\t<h3 class=\"uk-card-title uk-margin-remove-bottom\">{{station.name}}</h3>\r\n\t\t\t<p class=\"uk-text-meta uk-margin-remove-top\">{{'id' |translate}}: {{station.id}}</p>\r\n\t\t\t<p>{{'detail' |translate}}: {{station.detail}}</p>\r\n\t\t\t<p *ngFor=\"let node of station.nodes;\">\r\n\t\t\t\t{{node}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n        <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded\" (click)=\"editStation(station.id)\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded uk-margin-left\" (click)=\"deleteStation(station.id, station.name)\">{{'delete'|translate}}</button>\r\n\t</div>\r\n</div>  \r\n  \r\n<div class=\" uk-margin\">\r\n  <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n    <li *ngIf=\"pageController.pageIndex != 1\">\r\n      <a (click)=\"changePageonClick(false,-1)\">\r\n        <span uk-pagination-previous></span>\r\n      </a>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngFor=\"let index of pageController.pageArray\" [class.uk-active]=\"index==pageController.pageIndex\">\r\n      <a (click)=\"changePageonClick(true,index)\">{{index}}</a>\r\n    </li>\r\n    <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n    <li *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\">\r\n      <a (click)=\"changePageonClick(false,1)\">\r\n        <span uk-pagination-next></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>  \r\n\r\n</div>\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<!-- <div id=\"modal-confirm\" uk-modal>\r\n  <div class=\"uk-modal-dialog uk-modal-body\">\r\n    <p>{{'save configuration'}}?</p>\r\n    <p class=\"uk-text-right\">\r\n      <button class=\"uk-button uk-button-primary uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"modalConfirm()\">{{'confirm'|translate}}</button>\r\n      <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" type=\"button\" (click)=\"modalCancel()\">{{'cancel'|translate}}</button>\r\n    </p>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n  <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/station/station-config/station-config.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/station/station-config/station-config.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/station/station-config/station-config.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/station/station-config/station-config.component.ts ***!
  \**************************************************************************/
/*! exports provided: StationConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationConfigComponent", function() { return StationConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_station_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/station.service */ "./src/app/pages/station/services/station.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationConfigComponent = /** @class */ (function () {
    //moclup
    function StationConfigComponent(router, activeRoute, stationService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.stationService = stationService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.station = {
            name: "",
            detail: "",
        };
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.stations = [];
        this.confirmModal = {
            elementId: "station-config-confirm-modal",
            detail: "",
            state: "",
        };
        //mockup
        this.deleteIndex = 0;
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    StationConfigComponent.prototype.ngOnInit = function () {
        this.loadStation();
    };
    StationConfigComponent.prototype.loadStation = function () {
        var _this = this;
        this.loading = true;
        this.stationService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            _this.stations = res.data.station;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
        });
    };
    StationConfigComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.loadStation();
    };
    StationConfigComponent.prototype.createStation = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.station.name != '') {
            this.confirmModal.detail = this.translate.instant("Do you confirm to create") + " " + this.station.name + " " + this.translate.instant("station") + "?";
            this.confirmModal.state = "create";
            UIkit.modal(_elementId).show();
        }
        else {
            UIkit.notification({
                message: this.translate.instant('Station name cannot emtry!!!'),
                status: 'warning',
                timeout: 1000
            });
        }
    };
    StationConfigComponent.prototype.editStation = function (stationId) {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['station', 'edit', this.dealerId, stationId]);
    };
    StationConfigComponent.prototype.deleteStation = function (id, name) {
        var _elementId = "#" + this.confirmModal.elementId;
        this.deleteIndex = id;
        this.confirmModal.detail = this.translate.instant("Do you confirm to delete") + " " + name + " " + this.translate.instant("station") + "?";
        this.confirmModal.state = "delete";
        UIkit.modal(_elementId).show();
    };
    StationConfigComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            if (this.confirmModal.state == "create") {
                this.loading = true;
                this.stationService.create(this.dealerId, this.station).then(function (res) {
                    _this.station.name = '';
                    _this.station.detail = '';
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadStation();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: err,
                        status: 'warning',
                        timeout: 1000
                    });
                });
            }
            else if (this.confirmModal.state == "delete") {
                this.loading = true;
                this.stationService.delete(this.deleteIndex).then(function (res) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    _this.loadStation();
                }).catch(function (err) {
                    UIkit.modal(_elementId).hide();
                    _this.loading = false;
                    UIkit.notification({
                        message: err,
                        status: 'warning',
                        timeout: 1000
                    });
                });
            }
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    StationConfigComponent.prototype.onHeaderClick = function (event) {
        var _elementId = "#" + this.confirmModal.elementId;
        if (event == 'back') {
            UIkit.modal(_elementId).$destroy(true);
            this.router.navigate(['dealer', 'information', this.dealerId]);
        }
    };
    StationConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-station-config',
            template: __webpack_require__(/*! ./station-config.component.html */ "./src/app/pages/station/station-config/station-config.component.html"),
            styles: [__webpack_require__(/*! ./station-config.component.scss */ "./src/app/pages/station/station-config/station-config.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_station_service__WEBPACK_IMPORTED_MODULE_2__["StationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], StationConfigComponent);
    return StationConfigComponent;
}());



/***/ }),

/***/ "./src/app/pages/station/station-edit/station-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/station/station-edit/station-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\">{{'station'|translate}} {{'edit'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"name\">*{{'station'|translate}} {{'name'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"name\" type=\"text\" [(ngModel)]=\"station.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"detail\">*{{'detail'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"detail\" type=\"text\" [(ngModel)]=\"station.detail\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"editStation()\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelStation()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/station/station-edit/station-edit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/station/station-edit/station-edit.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/station/station-edit/station-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/station/station-edit/station-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: StationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationEditComponent", function() { return StationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_station_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/station.service */ "./src/app/pages/station/services/station.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationEditComponent = /** @class */ (function () {
    function StationEditComponent(router, activeRoute, stationService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.stationService = stationService;
        this.translate = translate;
        this.dealerId = '';
        this.stationId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "station-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update Station?"),
            state: "",
        };
        this.station = {
            name: '',
            detail: '',
        };
        this.stationId = activeRoute.snapshot.params['stationId'];
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    StationEditComponent.prototype.ngOnInit = function () {
        this.loadStation();
    };
    StationEditComponent.prototype.loadStation = function () {
        var _this = this;
        this.loading = true;
        this.stationService.get(this.stationId).then(function (res) {
            _this.station = res.data.station;
            _this.loading = false;
        }).catch(function (err) {
            _this.loading = false;
            UIkit.notification({
                message: _this.translate.instant('Cannot load Station'),
                status: 'warning',
                timeout: 1000
            });
        });
    };
    StationEditComponent.prototype.editStation = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).show();
    };
    StationEditComponent.prototype.cancelStation = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['station', 'config', this.dealerId]);
    };
    StationEditComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.stationService.edit(this.station).then(function (res) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['station', 'config', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: _this.translate.instant('Cannot edit station'),
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    StationEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-station-edit',
            template: __webpack_require__(/*! ./station-edit.component.html */ "./src/app/pages/station/station-edit/station-edit.component.html"),
            styles: [__webpack_require__(/*! ./station-edit.component.scss */ "./src/app/pages/station/station-edit/station-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_station_service__WEBPACK_IMPORTED_MODULE_2__["StationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], StationEditComponent);
    return StationEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/services/user.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user/services/user.service.ts ***!
  \*****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.get = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                'id': id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService.prototype.list = function (dealer_id, offset, limit) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/list";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                dealer_id: dealer_id,
                limit: limit,
                offset: offset,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService.prototype.create = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/create";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, user, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService.prototype.edit = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/edit";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, user, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService.prototype.delete = function (station_id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/delete";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                id: station_id,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    //Extend
    UserService.prototype.roleList = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/user/role";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/pages/user/user-create/user-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-create/user-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\">{{'user'|translate}} {{'create'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"username\">*{{'username'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"username\" id=\"username\" type=\"text\" [(ngModel)]=\"user.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"password\">*{{'password'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"password\" id=\"password\" type=\"password\" [(ngModel)]=\"user.password\">\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"fullname\">{{'fullname'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"fullname\" id=\"fullname\" type=\"text\" [(ngModel)]=\"user.fullname\">\r\n            </div>\r\n        </div> -->\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"position\">*{{'position'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-select\" id=\"position\" name=\"position\" [(ngModel)]=\"user.user_role_id\">\r\n                    <option value=\"0\" selected>{{'Please select user role'|translate}}</option>\r\n                    <option value=\"supervisor\">{{'Supervisor'|translate}}</option>\r\n                    <option value=\"analyst\">{{'Analyst'|translate}}</option>\r\n                    <option value=\"technician\">{{'Technician'|translate}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"email\">{{'email'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"email\" id=\"email\" type=\"text\" [(ngModel)]=\"user.email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"tel\">{{'tel'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"tel\" id=\"tel\" type=\"text\" [(ngModel)]=\"user.tel\">\r\n            </div>\r\n        </div> -->\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"createUser()\">{{'create'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelUser()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/user/user-create/user-create.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-create/user-create.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user/user-create/user-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user/user-create/user-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/pages/user/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(router, activeRoute, userService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.translate = translate;
        this.dealerId = '';
        this.loading = false;
        this.user = {
            username: '',
            fullname: '',
            password: '',
            user_role_id: 0,
            email: '',
            tel: '',
            dealer_id: '',
        };
        this.roles = [];
        this.confirmModal = {
            elementId: "user-create-confirm-modal",
            detail: this.translate.instant("Do you confirm to create new User?"),
            state: "",
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
        this.user.dealer_id = this.dealerId;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    UserCreateComponent.prototype.loadUser = function () {
        var _this = this;
        this.loading = true;
        this.userService.roleList().then(function (res) {
            _this.roles = res.data.role;
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load user role'),
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    UserCreateComponent.prototype.createUser = function () {
        if (this.user.username != "" && this.user.password != "" && this.user.user_role_id != 0) {
            var _elementId = "#" + this.confirmModal.elementId;
            UIkit.modal(_elementId).show();
        }
        else {
            if (this.user.username == "") {
                UIkit.notification({
                    message: this.translate.instant('Username cannot empty!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            }
            if (this.user.password == "") {
                UIkit.notification({
                    message: this.translate.instant('Password cannot empty!!!'),
                    status: 'warning',
                    timeout: 1000
                });
            }
            if (this.user.user_role_id == 0) {
                UIkit.notification({
                    message: this.translate.instant('Please select position'),
                    status: 'warning',
                    timeout: 1000
                });
            }
        }
    };
    UserCreateComponent.prototype.cancelUser = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['user', 'list', this.dealerId]);
    };
    UserCreateComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.userService.create(this.user).then(function (res) {
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['user', 'list', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/pages/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/pages/user/user-create/user-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-edit/user-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/user-edit/user-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n    <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n        <div class=\"uk-navbar-left\">\r\n            <a class=\"uk-navbar-item uk-logo\">{{'user edit'|translate}}</a>\r\n        </div>\r\n        <div class=\"uk-navbar-right\">\r\n        </div>\r\n    </nav>\r\n    <form class=\"uk-form-stacked\">\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"username\">*{{'username'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"username\" id=\"username\" type=\"text\" [(ngModel)]=\"user.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"fullname\">{{'fullname'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"fullname\" id=\"fullname\" type=\"text\" [(ngModel)]=\"user.fullname\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"position\">*{{'position'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-select\" id=\"position\" name=\"position\" [(ngModel)]=\"user.user_role_id\" disabled>\r\n                        <option value=\"0\" selected>Please select user role</option>\r\n                        <option value=\"supervisor\">Supervisor</option>\r\n                        <option value=\"analyst\">Analyst</option>\r\n                        <option value=\"technician\">Technician</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"email\">{{'email'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"email\" id=\"email\" type=\"text\" [(ngModel)]=\"user.email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"tel\">{{'tel'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"tel\" id=\"tel\" type=\"text\" [(ngModel)]=\"user.tel\">\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"password\">{{'new'|translate}} {{'password'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"password\" id=\"password\" type=\"password\" [(ngModel)]=\"user.password\">\r\n            </div>\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n            <label class=\"uk-form-label\" for=\"password-reply\"> {{'reply'|translate}} {{'new'|translate}} {{'password'|translate}}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input class=\"uk-input\" name=\"password-reply\" id=\"password-reply\" type=\"password\" [(ngModel)]=\"user.passwordReply\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"uk-container uk-text-right uk-margin-large-bottom\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"editUser()\">{{'edit'|translate}}</button>\r\n        <button class=\"uk-button uk-button-default uk-border-rounded uk-margin-small-left\" (click)=\"cancelUser()\">{{'cancel'|translate}}</button>\r\n    </div>\r\n</div>\r\n\r\n<app-confirm-modal [elementId]=\"confirmModal.elementId\" [detail]=\"confirmModal.detail\" (onClick)=\"onClickConfirmModal($event)\"></app-confirm-modal>\r\n\r\n<div class=\"loading\" *ngIf=\"loading\">\r\n    <span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/user/user-edit/user-edit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/user-edit/user-edit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/pages/user/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(router, activeRoute, userService, translate) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.translate = translate;
        this.dealerId = '';
        this.userId = '';
        this.loading = false;
        this.confirmModal = {
            elementId: "user-edit-confirm-modal",
            detail: this.translate.instant("Do you confirm to update User?"),
            state: "",
        };
        this.user = {
            id: '',
            passwordReply: '',
            username: '',
            fullname: '',
            password: '',
            user_role_id: '',
            email: '',
            tel: '',
            dealer_id: '',
        };
        this.userId = activeRoute.snapshot.params['userId'];
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    UserEditComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.get(this.userId).then(function (res) {
            _this.user = res.data.user;
        }).catch(function (err) {
            UIkit.notification({
                message: _this.translate.instant('Cannot load Profile'),
                status: 'warning',
                timeout: 1000
            });
        });
    };
    UserEditComponent.prototype.editUser = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        if (this.user.password == "") {
            UIkit.modal(_elementId).show();
        }
        else {
            if (this.user.password == this.user.passwordReply) {
                UIkit.modal(_elementId).show();
            }
            else {
                UIkit.notification({
                    message: this.translate.instant('password and re-password not match'),
                    status: 'warning',
                    timeout: 1000
                });
            }
        }
    };
    UserEditComponent.prototype.cancelUser = function () {
        var _elementId = "#" + this.confirmModal.elementId;
        UIkit.modal(_elementId).$destroy(true);
        this.router.navigate(['user', 'list', this.dealerId]);
    };
    UserEditComponent.prototype.onClickConfirmModal = function (event) {
        var _this = this;
        var _elementId = "#" + this.confirmModal.elementId;
        if (event) {
            this.loading = true;
            this.userService.edit(this.user).then(function (res) {
                _this.loading = false;
                UIkit.util.on(_elementId, 'hidden', function () {
                    UIkit.modal(_elementId).$destroy(true);
                });
                UIkit.modal(_elementId).hide();
                _this.router.navigate(['user', 'list', _this.dealerId]);
            }).catch(function (err) {
                UIkit.modal(_elementId).hide();
                _this.loading = false;
                UIkit.notification({
                    message: err,
                    status: 'warning',
                    timeout: 1000
                });
            });
        }
        else {
            UIkit.modal(_elementId).hide();
        }
    };
    UserEditComponent.prototype.onHeaderClick = function (event) {
        if (event == 'back') {
            this.router.navigate(['menu']);
        }
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/pages/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/pages/user/user-edit/user-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [backPath]=\"true\" (onClickButton)=\"onHeaderClick($event)\"></app-header>\r\n<div class=\"uk-container\">\r\n  <nav class=\"uk-navbar-container uk-margin\" uk-navbar>\r\n    <div class=\"uk-navbar-left\">\r\n\r\n      <a class=\"uk-navbar-item uk-logo\" >{{'user'|translate}} {{'list'|translate}}</a>\r\n    </div>\r\n    <div class=\"uk-navbar-right\">\r\n      <div class=\"uk-navbar-item\">\r\n        <button class=\"uk-button uk-button-default uk-border-rounded\" (click)=\"createUser()\">{{'create'|translate}} {{'user'|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"uk-card uk-card-default uk-margin\" style=\"border:1px solid #ddd;\"  *ngFor=\"let user of users; let i = index\">\r\n    <div class=\"uk-card-header uk-background-muted\">\r\n\t\t<div class=\"uk-width-expand\">\r\n\t\t  <table class=\"uk-table uk-table-striped\">\r\n\t\t\t  <tr>\r\n\t\t\t\t<!-- <td class=\"uk-text-nowrap\">{{'id'|translate}}</td>\r\n\t\t\t\t<td>{{user.id}}</td> -->\r\n\t\t\t  </tr>\r\n\t\t\t  <tr>\r\n\t\t\t\t<td class=\"uk-text-nowrap\">{{'username'|translate}}</td>\r\n\t\t\t\t<td>{{user.username}}</td>\r\n\t\t\t  </tr>\r\n\t\t\t  <tr>\r\n\t\t\t\t<!-- <td class=\"uk-text-nowrap\">{{'fullname'|translate}}</td>\r\n\t\t\t\t<td>{{user.fullname}}</td> -->\r\n\t\t\t  </tr>\r\n\t\t\t  <tr>\r\n\t\t\t\t<td class=\"uk-text-nowrap\">{{'position'|translate}}</td>\r\n\t\t\t\t<td>{{user.user_role_id}}</td>\r\n\t\t\t  </tr>\r\n\t\t  </table>\r\n\t\t</div>\r\n    </div>\r\n    <div class=\"uk-card-footer\">\r\n          <button class=\"uk-button uk-button-mute uk-button-small uk-border-rounded\" (click)=\"editUser(user.id)\">{{'edit'|translate}}</button>\r\n\t</div>\r\n  </div> \r\n\r\n\r\n<div class=\"uk-margin\">\r\n  <ul class=\"uk-pagination uk-flex-center\" uk-margin>\r\n    <li *ngIf=\"pageController.pageIndex != 1\">\r\n      <a (click)=\"changePageonClick(false,-1)\">\r\n        <span uk-pagination-previous></span>\r\n      </a>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex > 4\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngFor=\"let index of pageController.pageArray\" [class.uk-active]=\"index==pageController.pageIndex\">\r\n      <a (click)=\"changePageonClick(true,index)\">{{index}}</a>\r\n    </li>\r\n    <!-- <li class=\"uk-active\"><span>4</span></li> -->\r\n    <li *ngIf=\"pageController.pageNumber - pageController.pageIndex > 3\" class=\"uk-disabled\">\r\n      <span>...</span>\r\n    </li>\r\n    <li *ngIf=\"pageController.pageIndex != pageController.pageNumber\">\r\n      <a (click)=\"changePageonClick(false,1)\">\r\n        <span uk-pagination-next></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</div>\r\n<div class=\"loading\" *ngIf=\"loading\"><span class=\"uk-margin-small-right\" uk-spinner=\"ratio: 3\"></span></div>"

/***/ }),

/***/ "./src/app/pages/user/user-list/user-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/user-list/user-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/pages/user/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(router, activeRoute, userService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.dealerId = '';
        this.loading = false;
        this.users = [];
        this.pageController = {
            itemPerPage: 10,
            itemNumber: 0,
            pageNumber: 0,
            pageIndex: 1,
            pageArray: [],
        };
        this.dealerId = activeRoute.snapshot.params['dealerId'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    UserListComponent.prototype.loadUser = function () {
        var _this = this;
        this.loading = true;
        this.userService.list(this.dealerId, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then(function (res) {
            _this.pageController.itemNumber = res.data.count;
            _this.pageController.pageNumber = Math.ceil(_this.pageController.itemNumber / _this.pageController.itemPerPage);
            _this.pageController.pageArray = [];
            ///make pagination
            _this.pageController.pageArray.push(_this.pageController.pageIndex);
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex - count - 1 > 0) {
                    _this.pageController.pageArray.unshift(_this.pageController.pageIndex - count - 1);
                }
            }
            for (var count = 0; count < 3; count++) {
                if (_this.pageController.pageIndex + count < _this.pageController.pageNumber) {
                    _this.pageController.pageArray.push(_this.pageController.pageIndex + count + 1);
                }
            }
            _this.users = res.data.user;
            _this.loading = false;
        }).catch(function (err) {
            UIkit.notification({
                message: err,
                status: 'warning',
                timeout: 1000
            });
            _this.loading = false;
        });
    };
    UserListComponent.prototype.createUser = function () {
        this.router.navigate(['user', 'create', this.dealerId]);
    };
    UserListComponent.prototype.editUser = function (userId) {
        this.router.navigate(['user', 'edit', this.dealerId, userId]);
    };
    UserListComponent.prototype.onHeaderClick = function (event) {
        if (event == 'back') {
            this.router.navigate(['menu']);
        }
    };
    UserListComponent.prototype.changePageonClick = function (option, index) {
        if (option) {
            this.pageController.pageIndex = index;
        }
        else {
            this.pageController.pageIndex += index;
        }
        this.loadUser();
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/pages/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/pages/user/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/services/authen/authen.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/authen/authen.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenService", function() { return AuthenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuration */ "./src/app/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenService = /** @class */ (function () {
    function AuthenService(http) {
        this.http = http;
    }
    AuthenService.prototype.userLogin = function (username, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/auth/login";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {
                username: username,
                password: password,
            };
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                localStorage.setItem('authToken', res.auth.token);
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    AuthenService.prototype.userGetInfo = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/auth/get";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    AuthenService.prototype.userLogout = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].server_url + "/auth/logout";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': "application/json; charset=UTF-8",
                })
            };
            var params = {};
            _this.http.post(apiURL, params, httpOptions)
                .toPromise()
                .then(function (res) {
                _this.clear();
                resolve(res);
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    AuthenService.prototype.clear = function () {
        localStorage.removeItem('userType');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        localStorage.removeItem('authToken');
        localStorage.removeItem('dealerId');
    };
    AuthenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenService);
    return AuthenService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\源码\宝马项目\bmw\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map