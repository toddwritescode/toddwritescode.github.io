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
exports.push([module.i, "/* global */\n.screen {\n    padding: 0;\n    margin: 0;\n}\n\nhr {\n    color: #333;\n    margin: 0 25px 0 25px;\n}\n\ni {\n    font-size: 50px;\n}\n\nsection {\n    width: 100%;\n    height: auto;\n    min-height: 500px;\n}\n\n.pic {\n    width: 100%;\n    max-width: 500px;\n    height: 500px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.column-2.pic-left {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 500px auto;\n        grid-template-columns: 500px auto;\n}\n\n.column-2.pic-right {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: auto 500px;\n        grid-template-columns: auto 500px;\n}\n\n@media screen and (max-width: 900px){\n    .column-2.pic-left {\n        display: block;\n    }\n    \n    .column-2.pic-right {\n        display: block;\n    }\n}\n\n.button {\n    font-family: 'Comfortaa', sans-serif;\n    margin-top: 25px;\n    padding: 15px 25px;\n    font-size: 24px;\n    font-weight: 500;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    background-color: rgb(0, 134, 252);\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n    margin: 10px;\n    color: white;\n}\n\n.button:hover {background-color: rgb(0, 134, 252); color: white;}\n\n.button:active {\n    background-color: rgb(0, 134, 252);\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n}\n\n/* text-divs */\n.text-div{\n    padding: 25px 10px 25px 10px;\n    text-align: center;\n    width: auto;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.text-div > h1 {\n    font-size: 30px;\n}\n\n.text-div > p {\n    font-size: 18px;\n    padding: 25px 25px 0 25px;\n}\n\n/* home */\n.home-pic {\n    background: url(/assets/todd-writes-code/head-square.jpg) no-repeat;\n    background-size: cover;\n    background-position: center;\n    border-radius: 25px;\n}\n\n/* proficiencies */\n.proficiencies {\n    height: auto;\n    background-color: rgba(0, 119, 255, 0.1);\n    border-radius: 25px;\n}\n\n.prof-list {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n}\n\n.prof-list > div {\n    padding: 0 10px 0 10px;\n}\n\n@media screen and (max-width: 1000px){\n    .prof-list {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr 1fr;\n            grid-template-columns: 1fr 1fr;\n    }\n}\n\n@media screen and (max-width: 550px) {\n    .prof-list {\n        display: block;\n    }\n}\n\n/* projects */\n.projects-pic {\n    background: url(/assets/todd-writes-code/phone-cards-square.jpg) no-repeat;\n    background-size: cover;\n    background-position: center;\n    border-radius: 25px;\n}\n\n.proj-list {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n}\n\n#wander-icon {\n    padding: 5px;\n    border-radius: 25px;\n    height: 100px;\n    width: auto;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 1000px){\n    .proj-list {\n        display: block;\n    }\n}\n\n/* contact */\n.contact {\n    background-color: rgba(0, 119, 255, 0.1);\n    border-radius: 25px;\n}\n\n.contact-pic {\n    background: url(/assets/todd-writes-code/time-square.jpg) no-repeat;\n    background-size: cover;\n    background-position: center;\n    border-radius: 25px;\n}\n\n/* creativity */\n.creativity-pic {\n    background: url(/assets/todd-writes-code/creative-square.jpg) no-repeat;\n    background-size: cover;\n    background-position: center;\n    border-radius: 25px;\n}\n\n/* Scroll To Top */\n.scroll-to-top {\n    display: none;\n    cursor: pointer;\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 999;\n    bottom: 15px;\n    left: calc(100% - 5px);\n    height: 50px;\n    width: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/+todd-writes-code/components/todd-writes-code-details/todd-writes-code-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"screen\">\n  <section class=\"home column-2 pic-left\" id=\"home\">\n    <div class=\"home-pic pic\"></div>\n    <div class=\"text-div\">\n      <h1>Welcome to Todd Writes Code</h1>\n      <hr>\n      <p><b>Hello World</b>, thanks for swinging by really appreciate it. Hopefully I can be of some\n        help.</p>\n      <p>With <b>over 7 years of experience</b> working with job titles such as <b>Software Engineer, Web\n          and Full Stack Developer</b> I have experienced very many things over my career to this\n        date. This allows me to provide excellent advice, but even more than that, advice in such a way\n        that someone with very little to no technical background can understand.</p>\n      <p>This coupled with extensive experience in technologies such as <b>Angular2+, AngularJs, HTML,\n          CSS, JavaScript, SQL, RESTful API, Java</b> to name a few I can not only give excellent\n        advice but can also provide software to a high standard whether it be a single page website to\n        serve tens of people, to a content management system destined for world wide usage across\n        thousands of users. <b>No problem is to big or to small.</b></p>\n    </div>\n  </section>\n  <section class=\"proficiencies\" id=\"proficiencies\">\n    <div class=\"text-div\">\n      <h1>So what can I do for you?</h1>\n      <hr>\n      <div class=\"prof-list\">\n        <div>\n          <h1>HTML <i class=\"fab fa-html5\"></i> </h1>\n          <p>This is the foundational building blocks of any website. This I am extremely proficient with and have been\n            building websites for what seems like forever.</p>\n        </div>\n        <div>\n          <h1>CSS <i class=\"fab fa-css3-alt\"></i> </h1>\n          <p>This is what makes everything look so pretty. Any design idea you can explain I can make for you. Or will\n            do my absolute best to get as close as possible.</p>\n        </div>\n        <div>\n          <h1>JavaScript <i class=\"fab fa-js-square\"></i> </h1>\n          <p>Want something to happen when you click a button? Display a message on the screen? This makes all the\n            magic happen. This is something I am also extremely experienced with and can do some very cool and exciting\n            things with.</p>\n        </div>\n        <div>\n          <h1> AngularJs, Angular2+ <i class=\"fab fa-angular\"></i> </h1>\n          <p>This is a development framework. It bundles all sorts of HTML, CSS and JavaScript together and boosts\n            performance and capabilities to places regular websites only wish they could go.</p>\n        </div>\n        <div>\n          <h1>Databases <i class=\"fas fa-database\"></i> </h1>\n          <p>Want to store information that clients give or you wish to provide? Databases make that happen. This is an\n            integral part to many websites and Content Management Systems and something I can also provide for you from\n            inital conception to real world usage.</p>\n        </div>\n        <div>\n          <h1>Responsive Design <i class=\"fas fa-mobile-alt\"></i> </h1>\n          <p>Over 78% of websites are now being accessed via mobile phones or tablets. Therefore a responsive design to\n            handle all sorts of devices and screen types is required. And you guessed it! I can help you with that too.</p>\n        </div>\n        <div>\n          <h1>Upgrade <i class=\"fas fa-level-up-alt\"></i></h1>\n          <p>Perhaps you have a website already but its either not up to date, or not performing like you want it to?\n            Let me help you sort that out.</p>\n        </div>\n        <div>\n          <h1>Consultation <i class=\"fas fa-phone\"></i></h1>\n          <p>Not quite sure what you want? Let's have a talk about it. Together we can workout what is going to work\n            best for you and your situation and then go from there. No pressure for commitment.</p>\n        </div>\n        <div>\n          <h1>Photography <i class=\"fas fa-camera\"></i></h1>\n          <p>The goal of any website it to help identify you or your product/ service. So lets get personal and get\n            some photos that best represent it all. I'll bring my camera along and we can get shooting.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"projects column-2 pic-right\" id=\"projects\">\n    <div class=\"text-div\">\n      <h1>Wanna see some of my work?</h1>\n      <hr>\n      <div class=\"proj-list\">\n        <div>\n          <div class=\"proj-item\">\n            <img id=\"wander-icon\" src=\"../../../../../../assets/todd-writes-code/wander.jpg\" alt=\"Wander the Podcast Logo\"\n              align=\"middle\" (click)=\"onNavigate('https://www.wanderthepodcast.website/')\">\n            <p>An Australian True Crime Comedy Podcast. This is one site that I've produced. Click the icon to check it\n              out or click <a (click)=\"onNavigate('https://www.wanderthepodcast.website/')\">here</a>.\n            </p>\n          </div>\n          <div>\n            <h1>Instagram <i class=\"fab fa-instagram\"></i></h1>\n            <p>Part of the reason I am on this exciting journey is thanks to a something I discovered on the internet\n              known as the #100daysofcode challenge. You can follow my journey on this challenge and even see some code\n              snippets I've been working on via my instagram <a (click)=\"onNavigate('https://www.instagram.com/toddwritescode/')\">@toddwritescode</a>.</p>\n          </div>\n        </div>\n        <div>\n          <h1>GitHub <i class=\"fab fa-github\"></i></h1>\n          <p>Know what this is? Great! Please come on over and follow me <a (click)=\"onNavigate('https://github.com/toddwritescode')\">@toddwritescode</a>.</p>\n          <p>For those that don't know, this is a place you can include code samples for people to view and try out\n            themselves. So I would encourage you to take a look.</p>\n          <p>Got all sorts of fun little projects over there. With many more on the way soon.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"projects-pic pic\"></div>\n  </section>\n  <section class=\"contact column-2 pic-left\" id=\"contact\">\n    <div class=\"contact-pic pic\"></div>\n    <div class=\"text-div\">\n      <h1>Don't wait any longer! Let's work together to make something a little different.</h1>\n      <hr>\n      <p>There's no time like the present. So how about it? If you've made it this far there must be something that\n        appeals to you. So let's start a dialog and see if we are the right fit for each other.</p>\n      <p>Sound like I can help you? Why not <b>shoot me a message</b>?</p><button class=\"button\" (click)=\"onNavigate('mailto:toddwritescode@gmail.com?Subject=Hey%20Todd', '_blank')\">EMAIL</button>\n    </div>\n  </section>\n  <section class=\"creativity column-2 pic-right\" id=\"creativity\">\n    <div class=\"text-div\">\n      <h1>Something more creative?<br>Want to learn something?</h1>\n      <hr>\n      <p>Are you new to the computer development scene? Enjoy a bit of reading and want to learn something? Of course!\n        Who doesn't want to learn something? Why not go over and checkout my blog <a (click)=\"onNavigate('http://www.toddwritesblogs.com/')\">www.toddwritesblogs.com</a>\n        where in my spare time I enjoy sharing knowledge about things I've learnt over my career that might help.</p>\n    </div>\n    <div class=\"creativity-pic pic\"></div>\n  </section>\n</div>\n<div class=\"scroll-to-top\" id=\"scroll-to-top\"> <img src=\"assets/todd-writes-code/up-icon.png\" alt=\"Scroll Up\" (click)=\"scrollToTop()\"></div>"

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
    ToddWritesCodeDetailsComponent.prototype.onNavigate = function (url) {
        window.open(url, "_blank");
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