webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/+todd-writes-code/todd-writes-code-routing.module": [
		"../../../../../src/app/features/+todd-writes-code/todd-writes-code-routing.module.ts",
		"todd-writes-code-routing.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', loadChildren: './features/+todd-writes-code/todd-writes-code-routing.module#ToddWritesCodeRoutingModule' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <app-nav-bar></app-nav-bar>\r\n</header>\r\n\r\n<div style=\"margin-top: 100px;\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/shared/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared_components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: 'header-font';\r\n    src: url(/assets/todd-writes-code/ChakraPetch-Bold.ttf) format('truetype');\r\n}\r\n\r\n/* navbar */\r\n\r\nnav {\r\n    width: 100%;\r\n    height: 100px;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    background-color: white;\r\n    color: #333;\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    line-height: 45px;\r\n}\r\n\r\n.header-row {\r\n    height: 50px;\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: calc(100vw - 270px) 270px;\r\n        grid-template-columns: calc(100vw - 270px) 270px;\r\n    border-bottom: 2px double rgba(0,0,0,0.01);\r\n}\r\n\r\n.nav-row {\r\n    height: 50px;\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[5];\r\n        grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n/* title */\r\n\r\n.title > h1 {\r\n    font-family: 'header-font', sans-serif;\r\n    font-size: 20px;\r\n    padding: 0;\r\n    margin: 5px 0 0 25px;\r\n}\r\n\r\n/* social */\r\n\r\n.social {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (1fr)[5];\r\n        grid-template-columns: repeat(5, 1fr);\r\n    margin-right: 25px;\r\n}\r\n\r\n/* tooltip */\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    cursor: pointer;\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.tooltip > img { /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(0%);\r\n    transition: all 1s ease;\r\n}\r\n\r\n.tooltip:hover > img { /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 80px;\r\n    height: 20px;\r\n    background-color: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-size: 13px;\r\n    border-radius: 6px;\r\n    padding: 0 0;\r\n    \r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 60%;\r\n    left: 50%;\r\n    margin-left: -40px;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n\r\n.nav-item {\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 1s ease;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.nav-item:hover {\r\n    background-color: #90CAFC;\r\n    border-radius: 25px;\r\n}\r\n\r\n.nav-item > h1 {\r\n    font-family: 'header-font', sans-serif;\r\n    font-size: 20px;\r\n    padding: 0;\r\n    margin: 0;\r\n    transition: all 1s ease;\r\n}\r\n\r\n.nav-item:hover h1 {\r\n    font-size: 25px;\r\n}\r\n\r\n@media screen and (max-width: 350px){\r\n    .title > h1 {\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .tooltip > img {\r\n        height: 40px;\r\n        margin: 5px;\r\n    }\r\n\r\n    .social {\r\n        margin: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"header-row\">\r\n    <div class=\"title\">\r\n      <h1>{{title}}</h1>\r\n    </div>\r\n    <div class=\"social\">\r\n      <div class=\"tooltip\"> <img src=\"assets/todd-writes-code/instagram-icon.png\" alt=\"Instagram\" onclick=\"window.open('https://bit.ly/2zranFW', '_blank');\">\r\n        <span class=\"tooltiptext\">Instagram</span></div>\r\n      <div class=\"tooltip\"> <img src=\"assets/todd-writes-code//email-icon.png\" alt=\"Email\" onclick=\"window.open('mailto:toddwritescode@gmail.com?Subject=Hey%20Todd', '_blank');\">\r\n        <span class=\"tooltiptext\">Email</span></div>\r\n      <div class=\"tooltip\"> <img src=\"assets/todd-writes-code//blog-icon.png\" alt=\"Blog\" onclick=\"window.open('http://www.toddwritesblogs.com', '_blank');\">\r\n        <span class=\"tooltiptext\">Blog</span></div>\r\n      <div class=\"tooltip\"> <img src=\"assets/todd-writes-code//facebook-icon.png\" alt=\"Facebook\" onclick=\"window.open('https://bit.ly/2PH1wpf', '_blank');\">\r\n        <span class=\"tooltiptext\">Facebook</span></div>\r\n      <div class=\"tooltip\"> <img src=\"assets/todd-writes-code//youtube-icon.png\" alt=\"YouTube\" onclick=\"window.open('https://bit.ly/2pWO0Tf', '_blank');\">\r\n        <span class=\"tooltiptext\">YouTube</span></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"nav-row\">\r\n    <div class=\"nav-item\" routerLink=\"/\">\r\n      <h1>Home</h1>\r\n    </div>\r\n    <div class=\"nav-item\">\r\n      <h1>Coming</h1>\r\n    </div>\r\n    <div class=\"nav-item\">\r\n      <h1>Soon</h1>\r\n    </div>\r\n    <div class=\"nav-item\">\r\n      <h1>More</h1>\r\n    </div>\r\n    <div class=\"nav-item\">\r\n      <h1>Nav</h1>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__ = __webpack_require__("../../../../ngx-auto-unsubscribe/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(router) {
        this.router = router;
        this._minScreenWidth = 488;
        this.updateTitle();
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this._routerSub = this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    NavBarComponent.prototype.ngOnDestroy = function () { };
    NavBarComponent.prototype.onResize = function (event) {
        this.updateTitle();
    };
    NavBarComponent.prototype.updateTitle = function () {
        if (window.innerWidth > this._minScreenWidth) {
            this.title = 'Todd Writes Code';
        }
        else {
            this.title = 'T.W.C';
        }
    };
    return NavBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavBarComponent.prototype, "onResize", null);
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ngx_auto_unsubscribe__["a" /* AutoUnsubscribe */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/shared/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map