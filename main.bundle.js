webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/+contact/contact-routing.module": [
		"../../../../../src/app/features/+contact/contact-routing.module.ts",
		"contact-routing.module"
	],
	"./features/+home/home-routing.module": [
		"../../../../../src/app/features/+home/home-routing.module.ts",
		"home-routing.module"
	],
	"./features/+landing/landing-routing.module": [
		"../../../../../src/app/features/+landing/landing-routing.module.ts",
		"landing-routing.module"
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
    { path: '', loadChildren: './features/+landing/landing-routing.module#LandingRoutingModule' },
    { path: 'home', loadChildren: './features/+home/home-routing.module#HomeRoutingModule' },
    { path: 'contact', loadChildren: './features/+contact/contact-routing.module#ContactRoutingModule' },
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
exports.push([module.i, "/* loading indicator */\r\n.loader {\r\n    padding: 25px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    height: calc(100vh - 50px);\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.lds-css {\r\n    position: absolute;\r\n    top: calc((100vh / 2) - 100px);\r\n    left: calc((100vw / 2) - 100px);\r\n}\r\n\r\n@keyframes lds-wedges {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.lds-wedges {\r\n  position: relative;\r\n}\r\n.lds-wedges > div > div {\r\n  transform-origin: 100px 100px;\r\n  animation: lds-wedges 3s linear infinite;\r\n  opacity: 0.8;\r\n}\r\n.lds-wedges > div > div > div {\r\n  position: absolute;\r\n  left: 30px;\r\n  top: 30px;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 70px 0 0 0;\r\n  transform-origin: 100px 100px;\r\n}\r\n.lds-wedges > div div:nth-child(1) > div {\r\n  background: #0099e5;\r\n  transform: rotate(0deg);\r\n}\r\n.lds-wedges > div div:nth-child(1) {\r\n  animation-duration: 0.75s;\r\n}\r\n.lds-wedges > div div:nth-child(2) > div {\r\n  background: #ff4c4c;\r\n  transform: rotate(0deg);\r\n}\r\n.lds-wedges > div div:nth-child(2) {\r\n  animation-duration: 1s;\r\n}\r\n.lds-wedges > div div:nth-child(3) > div {\r\n  background: #34bf49;\r\n  transform: rotate(0deg);\r\n}\r\n.lds-wedges > div div:nth-child(3) {\r\n  animation-duration: 1.5s;\r\n}\r\n.lds-wedges > div div:nth-child(4) > div {\r\n  background: #0099e5;\r\n  transform: rotate(0deg);\r\n}\r\n.lds-wedges > div div:nth-child(4) {\r\n  animation-duration: 3s;\r\n}\r\n.lds-wedges {\r\n  width: 200px !important;\r\n  height: 200px !important;\r\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <app-nav-bar></app-nav-bar>\r\n</header>\r\n\r\n<div style=\"margin-top: 50px;\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- loading indicator -->\r\n<!-- <div>\r\n    <div id=\"loader\" class=\"loader\">\r\n        <div class=\"lds-css ng-scope\" style=\"width: 200px; height: 200px;\">\r\n            <div style=\"width:100%;height:100%\" class=\"lds-wedges\">\r\n                <div>\r\n                    <div>\r\n                        <div></div>\r\n                    </div>\r\n                    <div>\r\n                        <div></div>\r\n                    </div>\r\n                    <div>\r\n                        <div></div>\r\n                    </div>\r\n                    <div>\r\n                        <div></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

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
exports.push([module.i, "/* navbar */\r\n\r\nnav {\r\n    width: 100%;\r\n    height: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 998;\r\n    background-color: white;\r\n    color: #333;\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    line-height: 45px;\r\n}\r\n\r\n.header-row {\r\n    height: 50px;\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 50px auto;\r\n        grid-template-columns: 50px auto;\r\n    border-bottom: 2px double rgba(0,0,0,0.01);\r\n}\r\n\r\n/* title */\r\n.title {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 60px;\r\n    line-height: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.title > h1 {\r\n    display: inline;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n}\r\n\r\n/* sidebar */\r\n.sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -300px;\r\n    width: 300px;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    background-color: #333;\r\n    border-top-right-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    color: white;\r\n    text-align: center;\r\n    font-family: 'Montserrat', sans-serif;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\nnav #menu-toggle {\r\n    opacity: 0;\r\n}\r\n\r\nnav #menu-toggle:checked ~ .sidebar{\r\n    left: 0;\r\n}\r\n\r\n.header-row label .open-menu {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.header-row label .open-menu:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar label .close-menu {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n    font-size: 30px;\r\n}\r\n\r\n.sidebar label .close-menu:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar .header {\r\n    font-size: 35px;\r\n    margin: 20px 0 25px 0;\r\n}\r\n\r\n.sidebar .menu {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n}\r\n\r\n.menu .menu-item {\r\n    font-size: 30px;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.menu .menu-item:hover {\r\n    background-color: white;\r\n    color: #333;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu .menu-item p {\r\n    padding-left: 15px;\r\n    display: inline;\r\n}\r\n\r\n.menu .menu-hr {\r\n    margin-top: 25px;\r\n    padding-bottom: 25px;\r\n    border: 2px #333 solid;\r\n    border-top-color: white;\r\n    height: 2px;\r\n    width: 80%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@media screen and (max-height: 660px){\r\n    .sidebar .header {\r\n        font-size: 27px;\r\n        margin: 15px 0 12px 0;\r\n    }\r\n\r\n    .menu .menu-item {\r\n        font-size: 22px;\r\n        padding: 5px 0 5px 0;\r\n    }\r\n\r\n    .menu .menu-hr {\r\n        margin-top: 15px;\r\n        padding-bottom: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-height: 530px){\r\n    .sidebar .header {\r\n        font-size: 20px;\r\n        margin: 10px 0 7px 0;\r\n    }\r\n\r\n    .menu .menu-item {\r\n        font-size: 18px;\r\n        padding: 5px 0 5px 0;\r\n    }\r\n\r\n    .menu .menu-hr {\r\n        margin-top: 8px;\r\n        padding-bottom: 8px;\r\n    }\r\n}\r\n\r\n@media screen and (max-height: 490px){\r\n    .social-menu {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\">\r\n  <input type=\"checkbox\" name=\"menu-toggle\" id=\"menu-toggle\" [checked]=\"menuToggle\" (change)=\"menuToggle = !menuToggle\">\r\n  <div class=\"sidebar\">\r\n    <label for=\"menu-toggle\"><i class=\"far fa-times-circle close-menu\"></i></label>\r\n    <div class=\"header\"><u>Menu</u></div>\r\n    <div class=\"menu\">\r\n      <div class=\"menu-item\" (click)=\"onNavigate('/contact')\">\r\n        <i class=\"far fa-envelope\"></i>\r\n        <p>Contact</p>\r\n      </div>\r\n      <div class=\"menu-hr\"></div>\r\n      <div class=\"menu-item\" (click)=\"onNavigate('/home')\">\r\n        <i class=\"fas fa-home\"></i>\r\n        <p>Home</p>\r\n      </div>\r\n      <div class=\"menu-item\" (click)=\"onNavigate('/about')\">\r\n        <i class=\"fas fa-user-tie\"></i>\r\n        <p>About</p>\r\n      </div>\r\n      <div class=\"menu-item\" (click)=\"onNavigate('/portfolio')\">\r\n        <i class=\"fas fa-book-open\"></i>\r\n        <p>Portfolio</p>\r\n      </div>\r\n      <div class=\"menu-hr\"></div>\r\n      <div class=\"menu-item\" (click)=\"onNavigate('https://bit.ly/2zranFW', true)\">\r\n        <i class=\"fab fa-instagram\"></i>\r\n        <p>Instagram</p>\r\n      </div>\r\n      <div class=\"menu-item\" (click)=\"onNavigate('http://www.toddwritesblogs.com', true)\">\r\n        <i class=\"fab fa-blogger\"></i>\r\n        <p>Blog</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"header-row\">\r\n    <label for=\"menu-toggle\"><i class=\"fas fa-bars open-menu\"></i></label>\r\n    <div class=\"title\" (click)=\"onNavigate('/')\">\r\n      <h1>{{title}}</h1>\r\n    </div>\r\n  </div>\r\n</nav>"

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
        this.title = 'Todd Writes Code';
        this.menuToggle = false;
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
    NavBarComponent.prototype.onClick = function (event) {
        var navbarElement = document.getElementById('navbar');
        var eventElement = event.target;
        do {
            if (navbarElement === eventElement) {
                return;
            }
            eventElement = eventElement.parentNode;
        } while (eventElement);
        this.menuToggle = false;
    };
    NavBarComponent.prototype.updateTitle = function () {
        if (window.innerWidth > this._minScreenWidth) {
            this.title = 'Todd Writes Code';
        }
        else {
            this.title = 'T.W.C';
        }
    };
    NavBarComponent.prototype.onNavigate = function (url, external) {
        if (external === void 0) { external = false; }
        if (external) {
            window.open(url, '_blank');
        }
        else {
            window.location.href = url;
        }
        this.menuToggle = false;
    };
    return NavBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavBarComponent.prototype, "onResize", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavBarComponent.prototype, "onClick", null);
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
exports.push([module.i, ".not-found {\r\n    height: calc(100vh - 50px);\r\n    width: 100vw;\r\n    background: url('/assets/404.jpeg');\r\n    background-position: right;\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n\r\n.not-found-heading {\r\n    position: absolute;\r\n    top: calc((100vh - 50px) / 6);\r\n    left: calc(100vw / 8);\r\n    height: auto;\r\n    width: calc((100vw / 8) * 6);\r\n    padding: 0 25px 25px 25px;\r\n    background-color: rgba(256, 256, 256, 0.35);\r\n    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23);\r\n    border-radius: 25px;\r\n}\r\n\r\n.not-found-heading > h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 60px;\r\n    padding: 0 50px 0 50px;;\r\n}\r\n\r\n.not-found-heading > h2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 45px;\r\n    padding: 0 50px 0 50px;\r\n}\r\n\r\n.not-found-heading > h4 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    padding: 0 50px 0 50px;\r\n}\r\n\r\n.not-found-button {\r\n\tbox-shadow: 0px 0px 25px 0px #43941e;\r\n\tbackground-color:#6dcc3d;\r\n\tborder-radius:28px;\r\n\tborder:1px solid #55ad29;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:black;\r\n\tfont-family:Trebuchet MS;\r\n\tfont-size:28px;\r\n\tfont-weight:bold;\r\n\tpadding:16px 31px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 23px #5fab2c;\r\n}\r\n.not-found-button:hover {\r\n\tbackground-color:#6ec443;\r\n}\r\n.not-found-button:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n@media screen and (max-width: 1024px){\r\n    .not-found-heading {\r\n        top: 50px;\r\n        left: 0;\r\n        height: 100vh;\r\n        width: 100vw;\r\n        padding: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\r\n    <div class=\"not-found-heading\">\r\n        <h1>Lost?</h1>\r\n        <h2>This probably isn't where you thought you would be.</h2>\r\n        <h4>Must have taken a wrong turn.<br>Let's go home and start again.</h4>\r\n        <a href=\"#\" class=\"not-found-button\">Take Me Home</a>\r\n    </div>\r\n</div>"

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