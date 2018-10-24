webpackJsonp(["todd-writes-code-routing.module"],{

/***/ "../../../../../src/app/features/+todd-writes-code/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detailComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todd_writes_code_details_todd_writes_code_details_component__ = __webpack_require__("../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todd_writes_code_details_todd_writes_code_details_component__["a"]; });


var detailComponents = [__WEBPACK_IMPORTED_MODULE_0__todd_writes_code_details_todd_writes_code_details_component__["a" /* ToddWritesCodeDetailsComponent */]];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* global */\r\n.screen {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    color: #333;\r\n    margin: 0 25px 0 25px;\r\n}\r\n\r\n.column-2 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.button {\r\n    font-family: 'Comfortaa', sans-serif;\r\n    margin-top: 25px;\r\n    padding: 15px 25px;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: black;\r\n    background-color: #90CAFC;\r\n    border: none;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px #999;\r\n    margin: 10px;\r\n    color: white;\r\n}\r\n\r\n.button:hover {background-color: rgb(0, 134, 252); color: white;}\r\n\r\n.button:active {\r\n    background-color: rgb(0, 134, 252);\r\n    box-shadow: 0 5px #666;\r\n    transform: translateY(4px);\r\n}\r\n\r\n/* sydney */\r\n\r\n.sydney {\r\n    background: url(/assets/todd-writes-code/sydney.jpeg) no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 75vh;\r\n    width: 100%;\r\n    text-align: center;\r\n    border-bottom: 1px #333 solid;\r\n}\r\n\r\n/* intro */\r\n\r\n.intro {\r\n    height: 75vh;\r\n    width: 100%;\r\n}\r\n\r\n.intro > .intro-text {\r\n    padding: 25px 10px 25px 10px;\r\n    text-align: center;\r\n}\r\n\r\n.intro-text > p {\r\n    padding: 25px 25px 0 25px;\r\n    font-size: 18px;\r\n}\r\n\r\n.intro > .intro-pic {\r\n    background: url(/assets/todd-writes-code/todd.png) no-repeat;\r\n    background-size: cover;\r\n    background-position: top;\r\n    margin: 10px;\r\n}\r\n\r\n/* Scroll To Top */\r\n.scroll-to-top {\r\n    /* display: none; */\r\n    cursor: pointer;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    z-index: 999;\r\n    bottom: 15px;\r\n    left: calc(100% - 5px);\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .intro {\r\n        height: auto;\r\n    }\r\n    \r\n    .column-2 {\r\n        display: block;\r\n    }\r\n\r\n    .intro > .intro-pic {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"screen\">\r\n  <section class=\"sydney\" id=\"home\"> </section>\r\n  <section class=\"intro column-2\" id=\"about\">\r\n    <div class=\"intro-text\">\r\n      <h1>A Dev Down Under</h1>\r\n      <hr>\r\n      <p><b>Hello World</b>, thanks for swinging by really appreciate it. Hopefully I can be of some\r\n        help.</p>\r\n      <p>With <b>over 7 years of experience</b> working with job titles such as <b>Software Engineer, Web\r\n          and Full Stack Developer</b> I have experienced very many things over my career to this\r\n        date. This allows me to provide excellent advice, but even more than that, advice in such a way\r\n        that someone with very little to no technical background can understand.</p>\r\n      <p>This coupled with extensive experience in technologies such as <b>Angular2+, AngularJs, HTML,\r\n          CSS, JavaScript, SQL, RESTful API, Java</b> to name a few I can not only give excellent\r\n        advice but can also provide software to a high standard whether it be a single page website to\r\n        serve tens of people, to a content management system destined for world wide usage across\r\n        thousands of users. <b>No problem is to big or to small.</b></p>\r\n      <p>Sound like I can help you? Why not <b>shoot me a message</b>?</p><button class=\"button\" onclick=\"window.open('mailto:toddwritescode@gmail.com?Subject=Hey%20Todd', '_blank');\">EMAIL</button>\r\n    </div>\r\n    <div>\r\n      <iframe id=\"JotFormIFrame-82937363973875\" onload=\"window.parent.scrollTo(0,0)\" allowtransparency=\"true\" allowfullscreen=\"true\"\r\n        allow=\"geolocation; microphone; camera\" src=\"https://form.jotform.co/82937363973875\" frameborder=\"0\" style=\"width: 1px;\r\n            min-width: 100%;\r\n            height: 75vh;\r\n            border:none;\"\r\n        scrolling=\"no\">\r\n      </iframe>\r\n      <script type=\"text/javascript\">\r\n        var ifr = document.getElementById(\"JotFormIFrame-82937363973875\");\r\n        if (window.location.href && window.location.href.indexOf(\"?\") > -1) {\r\n          var get = window.location.href.substr(window.location.href.indexOf(\"?\") + 1);\r\n          if (ifr && get.length > 0) {\r\n            var src = ifr.src;\r\n            src = src.indexOf(\"?\") > -1 ? src + \"&\" + get : src + \"?\" + get;\r\n            ifr.src = src;\r\n          }\r\n        }\r\n        window.handleIFrameMessage = function (e) {\r\n          if (typeof e.data === 'object') { return; }\r\n          var args = e.data.split(\":\");\r\n          if (args.length > 2) { iframe = document.getElementById(\"JotFormIFrame-\" + args[(args.length - 1)]); } else { iframe = document.getElementById(\"JotFormIFrame\"); }\r\n          if (!iframe) { return; }\r\n          switch (args[0]) {\r\n            case \"scrollIntoView\":\r\n              iframe.scrollIntoView();\r\n              break;\r\n            case \"setHeight\":\r\n              iframe.style.height = args[1] + \"px\";\r\n              break;\r\n            case \"collapseErrorPage\":\r\n              if (iframe.clientHeight > window.innerHeight) {\r\n                iframe.style.height = window.innerHeight + \"px\";\r\n              }\r\n              break;\r\n            case \"reloadPage\":\r\n              window.location.reload();\r\n              break;\r\n            case \"loadScript\":\r\n              var src = args[1];\r\n              if (args.length > 3) {\r\n                src = args[1] + ':' + args[2];\r\n              }\r\n              var script = document.createElement('script');\r\n              script.src = src;\r\n              script.type = 'text/javascript';\r\n              document.body.appendChild(script);\r\n              break;\r\n            case \"exitFullscreen\":\r\n              if (window.document.exitFullscreen) window.document.exitFullscreen();\r\n              else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();\r\n              else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();\r\n              else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();\r\n              else if (window.document.msExitFullscreen) window.document.msExitFullscreen();\r\n              break;\r\n          }\r\n          var isJotForm = (e.origin.indexOf(\"jotform\") > -1) ? true : false;\r\n          if (isJotForm && \"contentWindow\" in iframe && \"postMessage\" in iframe.contentWindow) {\r\n            var urls = { \"docurl\": encodeURIComponent(document.URL), \"referrer\": encodeURIComponent(document.referrer) };\r\n            iframe.contentWindow.postMessage(JSON.stringify({ \"type\": \"urls\", \"value\": urls }), \"*\");\r\n          }\r\n        };\r\n        if (window.addEventListener) {\r\n          window.addEventListener(\"message\", handleIFrameMessage, false);\r\n        } else if (window.attachEvent) {\r\n          window.attachEvent(\"onmessage\", handleIFrameMessage);\r\n        }\r\n      </script>\r\n    </div>\r\n  </section>\r\n</div>\r\n<div class=\"scroll-to-top\" id=\"scroll-to-top\"> <img src=\"assets/todd-writes-code/up-icon.png\" alt=\"Scroll Up\" (click)=\"scrollToTop()\"></div>"

/***/ }),

/***/ "../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToddWritesCodeDetailsComponent; });
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

var ToddWritesCodeDetailsComponent = (function () {
    function ToddWritesCodeDetailsComponent() {
    }
    ToddWritesCodeDetailsComponent.prototype.ngOnInit = function () {
    };
    ToddWritesCodeDetailsComponent.prototype.scrollToTop = function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    return ToddWritesCodeDetailsComponent;
}());
ToddWritesCodeDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todd-writes-code-details',
        template: __webpack_require__("../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ToddWritesCodeDetailsComponent);

//# sourceMappingURL=todd-writes-code-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/+todd-writes-code/todd-writes-code-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToddWritesCodeRoutingModule", function() { return ToddWritesCodeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todd_writes_code_module__ = __webpack_require__("../../../../../src/app/features/+todd-writes-code/todd-writes-code.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/features/+todd-writes-code/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components__["a" /* ToddWritesCodeDetailsComponent */]
    }
];
var ToddWritesCodeRoutingModule = (function () {
    function ToddWritesCodeRoutingModule() {
    }
    return ToddWritesCodeRoutingModule;
}());
ToddWritesCodeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_2__todd_writes_code_module__["a" /* ToddWritesCodeModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ToddWritesCodeRoutingModule);

//# sourceMappingURL=todd-writes-code-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/+todd-writes-code/todd-writes-code.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToddWritesCodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/features/+todd-writes-code/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToddWritesCodeModule = (function () {
    function ToddWritesCodeModule() {
    }
    return ToddWritesCodeModule;
}());
ToddWritesCodeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__components__["b" /* detailComponents */].slice()
    })
], ToddWritesCodeModule);

//# sourceMappingURL=todd-writes-code.module.js.map

/***/ })

});
//# sourceMappingURL=todd-writes-code-routing.module.chunk.js.map