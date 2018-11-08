webpackJsonp(["home-routing.module"],{

/***/ "../../../../../src/app/features/+home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_module__ = __webpack_require__("../../../../../src/app/features/+home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__("../../../../../src/app/features/+home/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__pages__["a" /* HomePageComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_2__home_module__["a" /* HomeModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("../../../../../src/app/features/+home/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__pages__["b" /* homePages */].slice()
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+home/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.background {\r\n    margin-top: 50px;\r\n    height: calc(50vh);\r\n    width: 100vw;\r\n    background: url('/assets/home.jpg');\r\n    background-position: right;\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    text-align: center;\r\n    height: auto;\r\n    width: calc(100% - 50px);\r\n    padding: 0 25px 25px 25px;\r\n    background-color: rgba(256, 256, 256, 0.85);\r\n    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23);\r\n    border-radius: 25px;\r\n}\r\n\r\n.card > h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 45px;\r\n    padding: 10px 50px 0 50px;\r\n    margin-bottom: -10px;\r\n}\r\n\r\n.card > p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .card {\r\n        width: calc(100% - 70px);\r\n        padding: 25px;\r\n    }\r\n\r\n    .card > h1 {\r\n        padding: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/+home/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n</div>\r\n<div class=\"home\">\r\n  <div class=\"card\">\r\n    <h1>How Can I Help?</h1>\r\n    <hr>\r\n    <p>With <b>over 7 years of experience</b> working with job titles such as <b>Software Engineer, Web </b>and <b>Full\r\n        Stack\r\n        Developer</b> I have experienced very many things over my career to this date. This allows me to provide\r\n      excellent advice, but even more than that, advice in such a way that someone with very little to no technical\r\n      background can understand.</p>\r\n    <p>This coupled with extensive experience in technologies such as <b>Angular2+, AngularJs, HTML, CSS, JavaScript,\r\n        SQL, RESTful API, Java</b> (just to name a few) I can not only give excellent advice but can also provide\r\n      software to\r\n      a\r\n      high standard whether it be a single page website to serve tens of people, to a content management system\r\n      destined for world wide usage across thousands of users.</p>\r\n    <p><b>No problem is to big or to small.</b></p>\r\n  </div>\r\n  <div class=\"card\">\r\n    <h1>Services Available</h1>\r\n    <hr>\r\n    <p>\r\n        <i class=\"fas fa-code\"></i> Website and Software Development\r\n        \r\n    </p>\r\n    <p>\r\n        <i class=\"fas fa-users\"></i> Consulting\r\n    </p>\r\n    <p>\r\n        <i class=\"fab fa-blogger\"></i> Blogging\r\n    </p>\r\n    <p>\r\n        <i class=\"fas fa-wrench\"></i> Application Tune Up\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/+home/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
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

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/features/+home/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/+home/pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/+home/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return homePages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/features/+home/pages/home-page/home-page.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_page_home_page_component__["a"]; });


var homePages = [__WEBPACK_IMPORTED_MODULE_0__home_page_home_page_component__["a" /* HomePageComponent */]];
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=home-routing.module.chunk.js.map