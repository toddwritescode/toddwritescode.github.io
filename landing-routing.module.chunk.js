webpackJsonp(["landing-routing.module"],{

/***/ "../../../../../src/app/features/+landing/landing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_module__ = __webpack_require__("../../../../../src/app/features/+landing/landing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_landing_page_landing_page_component__["a" /* LandingPageComponent */]
    }
];
var LandingRoutingModule = (function () {
    function LandingRoutingModule() {
    }
    return LandingRoutingModule;
}());
LandingRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_3__landing_module__["a" /* LandingModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], LandingRoutingModule);

//# sourceMappingURL=landing-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+landing/landing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("../../../../../src/app/features/+landing/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingModule = (function () {
    function LandingModule() {
    }
    return LandingModule;
}());
LandingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* landingPages */].slice()
    })
], LandingModule);

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+landing/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return landingPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.ts");
/* unused harmony namespace reexport */


var landingPages = [__WEBPACK_IMPORTED_MODULE_0__landing_page_landing_page_component__["a" /* LandingPageComponent */]];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing {\r\n    height: calc(100vh - 50px);\r\n    width: 100vw;\r\n    background: url('/assets/sydney.jpg');\r\n    background-position: right;\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n\r\n.landing-heading {\r\n    position: absolute;\r\n    top: calc((100vh - 50px) / 6);\r\n    left: calc(100vw / 8);\r\n    height: auto;\r\n    width: calc((100vw / 8) * 6);\r\n    padding: 0 25px 25px 25px;\r\n    background-color: rgba(256, 256, 256, 0.35);\r\n    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23);\r\n    border-radius: 25px;\r\n}\r\n\r\n.landing-heading > h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 60px;\r\n    padding: 0 50px 0 50px;\r\n}\r\n\r\n.landing-heading > h2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 45px;\r\n    padding: 0 50px 0 50px;\r\n}\r\n\r\n.landing-heading > h4 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    padding: 0 50px 0 50px;\r\n}\r\n\r\n.landing-button {\r\n\tbox-shadow: 0px 0px 25px 0px #43941e;\r\n\tbackground-color:#6dcc3d;\r\n\tborder-radius:28px;\r\n\tborder:1px solid #55ad29;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:black;\r\n\tfont-family:Trebuchet MS;\r\n\tfont-size:28px;\r\n\tfont-weight:bold;\r\n\tpadding:16px 31px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 23px #5fab2c;\r\n}\r\n.landing-button:hover {\r\n\tbackground-color:#6ec443;\r\n}\r\n.landing-button:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n@media screen and (max-width: 1024px){\r\n    .landing-heading {\r\n        top: 50px;\r\n        left: 0;\r\n        height: 100vh;\r\n        width: 100vw;\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .landing-heading {\r\n        padding-top: 50px;\r\n        height: calc(100vh - 100px);\r\n    }\r\n\r\n    .landing-heading > h1 {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .landing-heading > h2 {\r\n        font-size: 35px;\r\n    }\r\n\r\n    .landing-heading > h4 {\r\n        font-size: 27px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 545px){\r\n    .landing-heading {\r\n        padding: 0;\r\n        height: calc(100vh - 50px);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n    .landing-heading {\r\n        padding-top: 50px;\r\n        height: calc(100vh - 100px);\r\n    }\r\n\r\n    .landing-heading > h1 {\r\n        font-size: 35px;\r\n    }\r\n\r\n    .landing-heading > h2 {\r\n        font-size: 27px;\r\n    }\r\n\r\n    .landing-heading > h4 {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landing\">\r\n  <div class=\"landing-heading\">\r\n    <h1>Welcome To Todd Writes Code</h1>\r\n    <h2>Todd's the name, Web Development is the game.</h2>\r\n    <h4>Working on anything Web related for over 7 years.<br>Find out what I can do for you.</h4>\r\n    <a href=\"home\" class=\"landing-button\">How Can I Help?</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
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

var LandingPageComponent = (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/+landing/pages/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingPageComponent);

//# sourceMappingURL=landing-page.component.js.map

/***/ })

});
//# sourceMappingURL=landing-routing.module.chunk.js.map