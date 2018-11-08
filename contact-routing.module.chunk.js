webpackJsonp(["contact-routing.module"],{

/***/ "../../../../../src/app/features/+contact/contact-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_module__ = __webpack_require__("../../../../../src/app/features/+contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__("../../../../../src/app/features/+contact/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__pages__["a" /* ContactPageComponent */]
    }
];
var ContactRoutingModule = (function () {
    function ContactRoutingModule() {
    }
    return ContactRoutingModule;
}());
ContactRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_2__contact_module__["a" /* ContactModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ContactRoutingModule);

//# sourceMappingURL=contact-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("../../../../../src/app/features/+contact/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__pages__["b" /* contactPages */].slice()
    })
], ContactModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+contact/pages/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\r\n    margin-top: 50px;\r\n    height: calc(50vh);\r\n    width: 100vw;\r\n    background: url('/assets/contact.jpg');\r\n    background-position: right;\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n\r\n.contact {\r\n    height: auto;\r\n    width: 100vw;\r\n    text-align: center;\r\n}\r\n\r\n.contact > h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    font-size: 45px;\r\n    padding: 10px 50px 0 50px;\r\n    margin-bottom: -10px;\r\n}\r\n\r\n.contact > hr {\r\n    width: 90vw;    \r\n}\r\n\r\n.contact-options {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.contact-option {\r\n    text-align: center;\r\n    height: auto;\r\n    width: calc(100% - 50px);\r\n    padding: 0 25px 25px 25px;\r\n    background-color: rgba(256, 256, 256, 0.85);\r\n    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23);\r\n    border-radius: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/+contact/pages/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n</div>\n<div class=\"contact\">\n  <h1>Contact Me</h1>\n  <hr>\n  <div class=\"contact-options\">\n    <div class=\"contact-option\">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error, eaque ad veritatis, suscipit illo illum dolores harum ipsam itaque expedita quas, aliquam voluptatum vel. Commodi quis provident quo sit?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias odit officiis vitae, velit eligendi ex eos, sapiente magnam, illo voluptatum veritatis non voluptatibus. Vitae possimus repudiandae hic officia recusandae.\n    </div>\n    <div class=\"contact-option\">\n      <blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/p/Bpt2AzchbCR/?utm_source=ig_embed&amp;utm_medium=loading\"\n        data-instgrm-version=\"12\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\">\n        <div style=\"padding:16px;\"> <a href=\"https://www.instagram.com/p/Bpt2AzchbCR/?utm_source=ig_embed&amp;utm_medium=loading\"\n            style=\" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;\"\n            target=\"_blank\">\n            <div style=\" display: flex; flex-direction: row; align-items: center;\">\n              <div style=\"background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;\"></div>\n              <div style=\"display: flex; flex-direction: column; flex-grow: 1; justify-content: center;\">\n                <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;\"></div>\n                <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;\"></div>\n              </div>\n            </div>\n            <div style=\"padding: 19% 0;\"></div>\n            <div style=\"display:block; height:50px; margin:0 auto 12px; width:50px;\"><svg width=\"50px\" height=\"50px\"\n                viewBox=\"0 0 60 60\" version=\"1.1\" xmlns=\"https://www.w3.org/2000/svg\" xmlns:xlink=\"https://www.w3.org/1999/xlink\">\n                <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                  <g transform=\"translate(-511.000000, -20.000000)\" fill=\"#000000\">\n                    <g>\n                      <path d=\"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631\"></path>\n                    </g>\n                  </g>\n                </g>\n              </svg></div>\n            <div style=\"padding-top: 8px;\">\n              <div style=\" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;\">\n                View this post on Instagram</div>\n            </div>\n            <div style=\"padding: 12.5% 0;\"></div>\n            <div style=\"display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;\">\n              <div>\n                <div style=\"background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);\"></div>\n                <div style=\"background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;\"></div>\n                <div style=\"background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);\"></div>\n              </div>\n              <div style=\"margin-left: 8px;\">\n                <div style=\" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;\"></div>\n                <div style=\" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)\"></div>\n              </div>\n              <div style=\"margin-left: auto;\">\n                <div style=\" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);\"></div>\n                <div style=\" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);\"></div>\n                <div style=\" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);\"></div>\n              </div>\n            </div>\n          </a>\n          <p style=\" margin:8px 0 0 0; padding:0 4px;\"> <a href=\"https://www.instagram.com/p/Bpt2AzchbCR/?utm_source=ig_embed&amp;utm_medium=loading\"\n              style=\" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;\"\n              target=\"_blank\">Hey I&#39;m Todd and I Write Code. #toddcodes100 [63/100] --- For all that don&#39;t know\n              I&#39;m a developer from Sydney, Australia who a little over 63 days ago took up the #robs100daysofcode\n              and\n              #100daysofcode challenges. In this such short amount of time these have changed my life in so many ways.\n              I now\n              own my own business and have begun work on freelancing projects which has been a dream of mine for a long\n              time.\n              --- Would definitely recommend these challenges if you haven&#39;t see or begun them yourself 👍🏻 ---\n              What\n              dreams do you wish to achieve?</a></p>\n          <p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\">A\n            post shared by <a href=\"https://www.instagram.com/toddwritescode/?utm_source=ig_embed&amp;utm_medium=loading\"\n              style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;\"\n              target=\"_blank\"> Todd Writes Code 👨🏻‍💻</a> (@toddwritescode) on <time style=\" font-family:Arial,sans-serif; font-size:14px; line-height:17px;\"\n              datetime=\"2018-11-03T11:21:12+00:00\">Nov 3, 2018 at 4:21am PDT</time></p>\n        </div>\n      </blockquote>\n      <script async src=\"//www.instagram.com/embed.js\"></script>\n    </div>\n    <div class=\"contact-option\">\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam assumenda minima ratione veritatis aspernatur accusantium officiis dicta placeat quis, temporibus, ipsum omnis dolore? Repellat, totam! Deserunt odio rem molestias a!\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/+contact/pages/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
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

var ContactPageComponent = (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    return ContactPageComponent;
}());
ContactPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-page',
        template: __webpack_require__("../../../../../src/app/features/+contact/pages/contact-page/contact-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/+contact/pages/contact-page/contact-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactPageComponent);

//# sourceMappingURL=contact-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/+contact/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contactPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/features/+contact/pages/contact-page/contact-page.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_page_contact_page_component__["a"]; });


var contactPages = [__WEBPACK_IMPORTED_MODULE_0__contact_page_contact_page_component__["a" /* ContactPageComponent */]];
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=contact-routing.module.chunk.js.map