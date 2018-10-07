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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * firebase module
 * get environment for firebaseConfinguration
 */











var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-flat-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin-left: 10px\n}\n\n.mat-table {\n    width: 100%;\n    text-align: center;\n}\n\n.mat-header-cell {\n    text-align: center;\n    background: rgb(147, 209, 183);\n    font-size: 16px;\n    font-weight: bold\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n\n            <div class=\"col-md-12\" style=\"margin-top:20px\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4> Add note </h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <!-- <form (click)=\"addNewNote()\" (click)=\"updateNote(note, note_object_id)\"> -->\n                        <!-- <form (submit)=\"is_edit_mode ? updateNote( note, note_id ) : addNewNote()\"> -->\n                        <form (submit)=addNewNote()>\n\n                            <div class=\"form-group note-form\">\n                                <label class=\"note-form\">Note:</label>\n                                <input class=\"note-form\" type=\"text\" [(ngModel)]=\"note\" name=\"note\" class=\"form-control\" required>\n                                <label class=\"note-form\">Author:</label>\n                                <input class=\"note-form\" style=\"display:inline\" type=\"text\" [(ngModel)]=\"author\" name=\"author\" class=\"form-control\" required>\n                            </div>\n\n\n                            <button mat-flat-button type=\"submit\" class=\"btn btn-md btn-success\">{{button_title}}</button>\n                            <!-- Edit Note button -->\n                            <!-- <button type=\"click\" class=\"btn btn-md btn-success\" *ngIf=\"is_edit_mode\">Update</button> -->\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>Notes List:</h4>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <div class=\"col-md-8\">\n                            <div class=\"mat-elevation-z8\">\n                                <table mat-table [dataSource]=\"dataSource\">\n\n                                    <ng-container matColumnDef=\"note\">\n                                        <th mat-header-cell *matHeaderCellDef> Note</th>\n                                        <td mat-cell *matCellDef=\"let note\"> {{note.note}} </td>\n                                    </ng-container>\n\n                                    <!-- Name Column -->\n                                    <ng-container matColumnDef=\"author\">\n                                        <th mat-header-cell *matHeaderCellDef> Author </th>\n                                        <td mat-cell *matCellDef=\"let note\"> {{note.author}} </td>\n                                    </ng-container>\n\n                                    <!-- Symbol Column -->\n                                    <ng-container matColumnDef=\"action\">\n                                        <th mat-header-cell *matHeaderCellDef> Action </th>\n                                        <td mat-cell *matCellDef=\"let note\">\n\n\n                                            <!-- <button class=\"btn btn-default icons\" title=\"update note\" (click)=\"onClickEditNote(note,note._id)\">\n                                                <i class=\"fa fa-edit big-icon\" aria-hidden=\"true\"></i>\n                                            </button> -->\n\n                                            <button mat-flat-button title=\"Delete Note\" (click)=\"onClickDeleteNote(note.id)\">Delete</button>\n                                            <button mat-flat-button title=\"Edit Note\" (click)=\"onClickEditNote( note, note.id)\">Edit</button>\n                                        </td>\n                                    </ng-container>\n\n                                    <tr mat-header-row *matHeaderRowDef=\"note_array_label\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: note_array_label;\"></tr>\n                                </table>\n\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, validateService, router, activatedRoute) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.button_title = 'Add';
        this.note_array_label = ['note', 'author', 'action'];
        this.message = 'Are you sure to delete this note ?';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // getting all notes
        this.getAllNotes();
    };
    // delete species function
    DashboardComponent.prototype.onClickDeleteNote = function (note_id) {
        var _this = this;
        if (confirm(this.message)) {
            this.authService.deleteNote(note_id).subscribe(function (data) {
                if (data) {
                    _this.getAllNotes();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Note deleted successfully.');
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(data.message);
                }
            }, function (err) {
                return false;
            });
        }
    };
    // add note function
    DashboardComponent.prototype.addNewNote = function () {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        if (this.button_title === 'Update') {
            this.onClickEditNote({ note: this.note, author: this.author });
        }
        else {
            var NoteNew = {
                note: this.note,
                author: this.author
            };
            // check validation
            if (!this.validateService.validateNote(NoteNew)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('please enter note and author name.');
                return false;
            }
            this.authService.addNote(NoteNew).subscribe(function (data) {
                if (data.success) {
                    _this.note = ''; // black the field after input
                    _this.author = '';
                    _this.getAllNotes(); // get all species list
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('New Note added.');
                    _this.button_title = 'Add';
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(data.message);
                }
            }, function (err) {
                return false;
            });
        }
    };
    // edit note
    DashboardComponent.prototype.onClickEditNote = function (noteold) {
        var _this = this;
        if (this.button_title === 'Add') {
            this.button_title = 'Update';
            this.note = noteold.note;
            this.author = noteold.author;
            this.id = noteold.id;
        }
        else {
            var notenew = noteold;
            notenew.id = this.id;
            this.authService.updateNote(notenew, notenew.id).subscribe(function (data) {
                if (data.success) {
                    _this.getAllNotes();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Note updated successfully.');
                    _this.button_title = 'Add';
                    _this.note = ''; // black the field after input
                    _this.author = '';
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(data.message);
                }
            }, function (err) {
                return false;
            });
        }
    };
    // update species function
    DashboardComponent.prototype.updateNote = function (note, id) {
        var _this = this;
        this.authService.updateNote(note, id).subscribe(function (data) {
            if (data.success) {
                _this.getAllNotes();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Note updated successfully.');
                _this.button_title = 'Add';
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(data.message);
            }
        }, function (err) {
            return false;
        });
    };
    // get all the notes
    DashboardComponent.prototype.getAllNotes = function () {
        var _this = this;
        this.authService.getAllNotes().subscribe(function (data) {
            if (data.length !== 0) {
                _this.notes = data;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.notes);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // handle else condition
            }
        }, function (err) {
            return false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    align-items: center;\n    align-content: center\n}\n\n.login {\n    align-items: center\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"angularFireAuth.user | async as user; else showLogin\">\n    <h1>Hello {{ user.displayName }}!</h1>\n    <button mat-flat-button (click)=\"logout()\">Logout</button>\n</div>\n\n<ng-template #showLogin>\n    <p>Please login.</p>\n    <button mat-flat-button (click)=\"login()\">Login with Google</button>\n\n</ng-template>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(angularFireAuth, router) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.angularFireAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function (user) {
            _this.router.navigate(['dashboard']);
        });
    };
    LoginComponent.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, firebaseAuth, router) {
        var _this = this;
        this.http = http;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.userDetails = null;
        /**
        * URL List
        */
        this.ADD_NOTE = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/note/add';
        this.DELETE_NOTE = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/note/';
        this.EDIT_NOTE = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/note/';
        this.GET_ALL_NOTE = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/note/all';
        this.user = firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    /***
     * gmail login
     */
    AuthService.prototype.signInWithGoogle = function () {
        return this.firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            this.router.navigate(['/dashboard']);
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    /**
   * all note
   */
    AuthService.prototype.getAllNotes = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.GET_ALL_NOTE, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // add note
    AuthService.prototype.addNote = function (note) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.ADD_NOTE, note, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // update note
    AuthService.prototype.updateNote = function (note, note_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.EDIT_NOTE + note_id, note, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // delete note
    AuthService.prototype.deleteNote = function (note_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.DELETE_NOTE + note_id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateNote = function (note) {
        if (note.note === undefined || note.author === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    serverUrl: 'https://angular-firebase-storage-b50a7.firebaseapp.com',
    firebaseConfig: {
        apiKey: 'AIzaSyBvj5vyeHiIZYmrwk0a6Z0MrGPdaE8w1mE',
        authDomain: 'angular-firebase-storage-b50a7.firebaseapp.com',
        databaseURL: 'https://angular-firebase-storage-b50a7.firebaseio.com',
        projectId: 'angular-firebase-storage-b50a7',
        storageBucket: 'angular-firebase-storage-b50a7.appspot.com',
        messagingSenderId: '447656612162'
    }
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

module.exports = __webpack_require__(/*! /home/dell/projectDevelopment/webDev/WebSSP/mnote-node-ng-firebase-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map