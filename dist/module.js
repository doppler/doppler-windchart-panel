define(["@grafana/data","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./Windchart.tsx":
/*!***********************!*\
  !*** ./Windchart.tsx ***!
  \***********************/
/*! exports provided: Windchart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Windchart", function() { return Windchart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);





var hueForSpeed = function hueForSpeed(mph) {
  if (mph >= 25) {
    return -82.5;
  }

  return 230 - Number(mph) * 12.5;
};

var Windchart = function Windchart(_a) {
  var _b, _c;

  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var styles = getStyles(theme);
  var dir = (_b = data.series.map(function (s) {
    return s.fields.find(function (f) {
      return f.name === "dir";
    });
  })[0]) === null || _b === void 0 ? void 0 : _b.values.toArray();
  var mph = (_c = data.series.map(function (s) {
    return s.fields.find(function (f) {
      return f.name === "mps";
    });
  })[0]) === null || _c === void 0 ? void 0 : _c.values.toArray().map(function (v) {
    return Number((v * 2.237).toFixed(1));
  });
  var currentMph = mph && mph[0] || 0;
  var currentDir = dir && dir[0] || 0;
  var maxMph = Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(mph));
  var ringRadii = Array.from({
    length: Math.floor(maxMph)
  }).map(function (_, i) {
    if (i % 5 === 0) {
      return i;
    }

    return undefined;
  }).filter(function (v) {
    return v !== undefined;
  }).slice(1);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    height: height,
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "hashmark",
    d: "M 250 3 L 256 29 L 262 3 Z",
    className: styles.hashmark
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    id: "line",
    x1: "256",
    y1: "32",
    x2: "256",
    y2: "480",
    className: styles.line
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: styles.text
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: "243",
    y: "30"
  }, "N"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: "483",
    y: "269"
  }, "E"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: "243",
    y: "509"
  }, "S"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: "4",
    y: "269"
  }, "W")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(22.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(45, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(67.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(112.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(135, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(157.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(202.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(225, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(247.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(292.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(315, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#hashmark",
    transform: "rotate(337.5, 256, 256)"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#line",
    transform: "rotate(22.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#line",
    transform: "rotate(67.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#line",
    transform: "rotate(112.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
    href: "#line",
    transform: "rotate(157.5, 256, 256)"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: 256,
    cy: 256,
    r: 220,
    style: {
      fill: "transparent",
      stroke: "grey",
      strokeWidth: 1
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, ringRadii.map(function (i) {
    return (//@ts-ignore
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
        cx: 256,
        cy: 256,
        //@ts-ignore
        r: 220 / maxMph * i,
        style: {
          fill: "transparent",
          //@ts-ignore
          stroke: "hsl(" + hueForSpeed(i) + ", 100%, 50%)",
          strokeWidth: 1
        }
      })
    );
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, dir && mph && dir.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
      cx: 256 + 220 / maxMph * mph[i] * Math.cos((d - 90) * (Math.PI / 180)) || 256,
      cy: 256 + 220 / maxMph * mph[i] * Math.sin((d - 90) * (Math.PI / 180)) || 256,
      r: 3,
      style: {
        fill: "hsl(" + hueForSpeed(mph[i]) + ", 100%, 50%)",
        fillOpacity: 1 - 1 / dir.length * i
      }
    });
  })), currentMph > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: styles.directionIndicator,
    id: "directionIndicator",
    d: "M 258 35 L 260 256 L 314 314 L 256 480 L 197 314 L 252 256 L 254 35 Z",
    style: {
      transform: "rotate(" + currentDir + "deg)"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.centerCircle, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              opacity: 0.85;\n            "], ["\n              opacity: 0.85;\n            "])))),
    id: "centerCircle",
    cx: "256",
    cy: "256",
    r: "82.9"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    className: styles.velocityText,
    style: {
      stroke: "hsl(" + hueForSpeed(currentMph) + ", 100%, 50%)",
      fill: "hsla(" + hueForSpeed(currentMph) + ", 100%, 50%, 0.25)"
    },
    id: "velocityText",
    x: "256",
    y: "266"
  }, Math.round(currentMph)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    className: styles.velocityLegend,
    x: "256",
    y: "325"
  }, currentDir, "\xB0"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.speedLegend
  }, [0, 5, 10, 15, 20, 25].map(function (i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        color: "hsl(" + hueForSpeed(i) + ", 100%, 50%)",
        flexGrow: 1,
        textAlign: "center"
      }
    }, i);
  })));
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function (theme) {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    hashmark: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: grey;\n    "], ["\n      fill: grey;\n    "]))),
    face: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      stroke: ", ";\n      stroke-width: 32px;\n    "], ["\n      fill: none;\n      stroke: ", ";\n      stroke-width: 32px;\n    "])), theme.palette.yellow),
    centerCircle: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: ", ";\n      fill-opacity: 0.5;\n    "], ["\n      fill: ", ";\n      fill-opacity: 0.5;\n    "])), theme.colors.bg1),
    velocityText: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      stroke-width: 3;\n      font-size: 9rem;\n      font-weight: bold;\n      text-anchor: middle;\n      dominant-baseline: middle;\n    "], ["\n      stroke-width: 3;\n      font-size: 9rem;\n      font-weight: bold;\n      text-anchor: middle;\n      dominant-baseline: middle;\n    "]))),
    velocityLegend: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: ", ";\n      font-size: 1.5em;\n      font-weight: bold;\n      text-anchor: middle;\n    "], ["\n      fill: ", ";\n      font-size: 1.5em;\n      font-weight: bold;\n      text-anchor: middle;\n    "])), theme.palette.orange),
    text: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: grey;\n      font-weight: bold;\n      font-family: 'Courier New', Courier, monospace;\n      font-size: 3rem;\n    "], ["\n      fill: grey;\n      font-weight: bold;\n      font-family: 'Courier New', Courier, monospace;\n      font-size: 3rem;\n    "]))),
    line: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      stroke: grey;\n      stroke-width: 1px;\n    "], ["\n      stroke: grey;\n      stroke-width: 1px;\n    "]))),
    ring: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: transparent;\n      stroke: ", ";\n      stroke-width: 1;\n    "], ["\n      fill: transparent;\n      stroke: ", ";\n      stroke-width: 1;\n    "])), theme.palette.yellow),
    speedLegend: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      display: flex;\n    "], ["\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      display: flex;\n    "]))),
    directionIndicator: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: transparent;\n      stroke: ", ";\n      stroke-width: 3px;\n      transform-origin: 256px 256px;\n      transform: rotate(0deg);\n    "], ["\n      fill: transparent;\n      stroke: ", ";\n      stroke-width: 3px;\n      transform-origin: 256px 256px;\n      transform: rotate(0deg);\n    "])), theme.palette.orange)
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Windchart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Windchart */ "./Windchart.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_Windchart__WEBPACK_IMPORTED_MODULE_1__["Windchart"]).setPanelOptions(function (builder) {
  return builder;
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map