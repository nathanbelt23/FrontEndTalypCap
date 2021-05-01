(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/api'),require('@angular/common'),require('primeng/ripple'),exports, require('@angular/core'), require('@angular/common'), require('@angular/animations'), require('primeng/api'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/messages', ['@angular/core','primeng/api','@angular/common','primeng/ripple','exports', '@angular/core', '@angular/common', '@angular/animations', 'primeng/api', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.api,global.ng.common,global.primeng.ripple,(global.primeng = global.primeng || {}, global.primeng.messages = {}), global.ng.core, global.ng.common, global.ng.animations, global.primeng.api, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, animations, api, ripple) { 
function Messages_ng_container_1_div_1_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    var msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", msg_r4.summary, ɵngcc0.ɵɵsanitizeHtml);
} }
function Messages_ng_container_1_div_1_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    var msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", msg_r4.detail, ɵngcc0.ɵɵsanitizeHtml);
} }
function Messages_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_div_1_ng_container_3_span_1_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(2, Messages_ng_container_1_div_1_ng_container_3_span_2_Template, 1, 1, "span", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var msg_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.summary);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.detail);
} }
function Messages_ng_container_1_div_1_ng_template_4_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(msg_r4.summary);
} }
function Messages_ng_container_1_div_1_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(msg_r4.detail);
} }
function Messages_ng_container_1_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Messages_ng_container_1_div_1_ng_template_4_span_0_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_div_1_ng_template_4_span_1_Template, 2, 1, "span", 14);
} if (rf & 2) {
    var msg_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.summary);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.detail);
} }
function Messages_ng_container_1_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Messages_ng_container_1_div_1_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); var i_r5 = ɵngcc0.ɵɵnextContext().index; var ctx_r20 = ɵngcc0.ɵɵnextContext(2); return ctx_r20.removeMessage(i_r5); });
    ɵngcc0.ɵɵelement(1, "i", 18);
    ɵngcc0.ɵɵelementEnd();
} }
var _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c1 = function (a1) { return { value: "visible", params: a1 }; };
var _c2 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-check": a1, "pi-exclamation-triangle": a2, "pi-times-circle": a3 }; };
function Messages_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵelement(2, "span", 6);
    ɵngcc0.ɵɵtemplate(3, Messages_ng_container_1_div_1_ng_container_3_Template, 3, 2, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(4, Messages_ng_container_1_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, Messages_ng_container_1_div_1_button_6_Template, 2, 0, "button", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var msg_r4 = ctx.$implicit;
    var _r7 = ɵngcc0.ɵɵreference(5);
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", "p-message p-message-" + msg_r4.severity)("@messageAnimation", ɵngcc0.ɵɵpureFunction1(11, _c1, ɵngcc0.ɵɵpureFunction2(8, _c0, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap("p-message-icon pi" + (msg_r4.icon ? " " + msg_r4.icon : ""));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(13, _c2, msg_r4.severity === "info", msg_r4.severity === "success", msg_r4.severity === "warn", msg_r4.severity === "error"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.escape)("ngIfElse", _r7);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.closable);
} }
function Messages_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_div_1_Template, 7, 18, "div", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.value);
} }
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Messages_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", "p-message p-message-" + ctx_r2.severity);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contentTemplate);
} }
'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var Messages = /** @class */ (function () {
        function Messages(messageService, el, cd) {
            this.messageService = messageService;
            this.el = el;
            this.cd = cd;
            this.closable = true;
            this.enableService = true;
            this.escape = true;
            this.showTransitionOptions = '300ms ease-out';
            this.hideTransitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
            this.valueChange = new core.EventEmitter();
        }
        Messages.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
            if (this.messageService && this.enableService && !this.contentTemplate) {
                this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
                    if (messages) {
                        if (messages instanceof Array) {
                            var filteredMessages = messages.filter(function (m) { return _this.key === m.key; });
                            _this.value = _this.value ? __spread(_this.value, filteredMessages) : __spread(filteredMessages);
                        }
                        else if (_this.key === messages.key) {
                            _this.value = _this.value ? __spread(_this.value, [messages]) : [messages];
                        }
                        _this.cd.markForCheck();
                    }
                });
                this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
                    if (key) {
                        if (_this.key === key) {
                            _this.value = null;
                        }
                    }
                    else {
                        _this.value = null;
                    }
                    _this.cd.markForCheck();
                });
            }
        };
        Messages.prototype.hasMessages = function () {
            var parentEl = this.el.nativeElement.parentElement;
            if (parentEl && parentEl.offsetParent) {
                return this.contentTemplate != null || this.value && this.value.length > 0;
            }
            return false;
        };
        Messages.prototype.clear = function () {
            this.value = [];
            this.valueChange.emit(this.value);
        };
        Messages.prototype.removeMessage = function (i) {
            this.value = this.value.filter(function (msg, index) { return index !== i; });
            this.valueChange.emit(this.value);
        };
        Object.defineProperty(Messages.prototype, "icon", {
            get: function () {
                var severity = this.severity || (this.hasMessages() ? this.value[0].severity : null);
                if (this.hasMessages()) {
                    switch (severity) {
                        case 'success':
                            return 'pi-check';
                            break;
                        case 'info':
                            return 'pi-info-circle';
                            break;
                        case 'error':
                            return 'pi-times';
                            break;
                        case 'warn':
                            return 'pi-exclamation-triangle';
                            break;
                        default:
                            return 'pi-info-circle';
                            break;
                    }
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Messages.prototype.ngOnDestroy = function () {
            if (this.messageSubscription) {
                this.messageSubscription.unsubscribe();
            }
            if (this.clearSubscription) {
                this.clearSubscription.unsubscribe();
            }
        };
Messages.ɵfac = function Messages_Factory(t) { return new (t || Messages)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MessageService, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Messages.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Messages, selectors: [["p-messages"]], contentQueries: function Messages_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { closable: "closable", enableService: "enableService", escape: "escape", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", value: "value", style: "style", styleClass: "styleClass", key: "key", severity: "severity" }, outputs: { valueChange: "valueChange" }, decls: 4, vars: 5, consts: [["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["staticMessage", ""], ["role", "alert", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "ngClass"], [1, "p-message-wrapper"], [3, "ngClass"], ["escapeOut", ""], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [1, "p-message-close-icon", "pi", "pi-times"], [4, "ngTemplateOutlet"]], template: function Messages_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate)("ngIfElse", _r1);
    } }, directives: [ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc3.Ripple, ɵngcc2.NgTemplateOutlet], styles: [".p-message-close,.p-message-wrapper{align-items:center;display:flex}.p-message-close{justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"], encapsulation: 2, data: { animation: [
            animations.trigger('messageAnimation', [
                animations.transition(':enter', [
                    animations.style({ opacity: 0, transform: 'translateY(-25%)' }),
                    animations.animate('{{showTransitionParams}}')
                ]),
                animations.transition(':leave', [
                    animations.animate('{{hideTransitionParams}}', animations.style({ height: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden', opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Messages, [{
        type: core.Component,
        args: [{
                selector: 'p-messages',
                template: "\n        <div class=\"p-messages p-component\" role=\"alert\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-container *ngIf=\"!contentTemplate; else staticMessage\">\n                <div *ngFor=\"let msg of value; let i=index\" [ngClass]=\"'p-message p-message-' + msg.severity\" role=\"alert\" \n                    [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n                    <div class=\"p-message-wrapper\">\n                       <span [class]=\"'p-message-icon pi' + (msg.icon ? ' ' + msg.icon : '')\" [ngClass]=\"{'pi-info-circle': msg.severity === 'info', \n                            'pi-check': msg.severity === 'success',\n                            'pi-exclamation-triangle': msg.severity === 'warn',\n                            'pi-times-circle': msg.severity === 'error'}\"></span>\n                        <ng-container *ngIf=\"!escape; else escapeOut\">\n                            <span *ngIf=\"msg.summary\" class=\"p-message-summary\" [innerHTML]=\"msg.summary\"></span>\n                            <span *ngIf=\"msg.detail\" class=\"p-message-detail\" [innerHTML]=\"msg.detail\"></span>\n                        </ng-container>\n                        <ng-template #escapeOut>\n                            <span *ngIf=\"msg.summary\" class=\"p-message-summary\">{{msg.summary}}</span>\n                            <span *ngIf=\"msg.detail\" class=\"p-message-detail\">{{msg.detail}}</span>\n                        </ng-template>\n                        <button class=\"p-message-close p-link\" (click)=\"removeMessage(i)\" *ngIf=\"closable\" type=\"button\" pRipple>\n                            <i class=\"p-message-close-icon pi pi-times\"></i>\n                        </button>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-template #staticMessage>\n                <div [ngClass]=\"'p-message p-message-' + severity\" role=\"alert\">\n                    <div class=\"p-message-wrapper\">\n                        <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                    </div>\n                </div>\n            </ng-template>\n            </div>\n    ",
                animations: [
                    animations.trigger('messageAnimation', [
                        animations.transition(':enter', [
                            animations.style({ opacity: 0, transform: 'translateY(-25%)' }),
                            animations.animate('{{showTransitionParams}}')
                        ]),
                        animations.transition(':leave', [
                            animations.animate('{{hideTransitionParams}}', animations.style({ height: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden', opacity: 0 }))
                        ])
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-message-close,.p-message-wrapper{align-items:center;display:flex}.p-message-close{justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"]
            }]
    }], function () { return [{ type: ɵngcc1.MessageService, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { closable: [{
            type: core.Input
        }], enableService: [{
            type: core.Input
        }], escape: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], valueChange: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], key: [{
            type: core.Input
        }], severity: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Messages;
    }());
    Messages.ctorParameters = function () { return [
        { type: api.MessageService, decorators: [{ type: core.Optional }] },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    Messages.propDecorators = {
        value: [{ type: core.Input }],
        closable: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        enableService: [{ type: core.Input }],
        key: [{ type: core.Input }],
        escape: [{ type: core.Input }],
        severity: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        valueChange: [{ type: core.Output }]
    };
    var MessagesModule = /** @class */ (function () {
        function MessagesModule() {
        }
MessagesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MessagesModule });
MessagesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MessagesModule_Factory(t) { return new (t || MessagesModule)(); }, imports: [[common.CommonModule, ripple.RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MessagesModule, { declarations: [Messages], imports: [ɵngcc2.CommonModule, ɵngcc3.RippleModule], exports: [Messages] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MessagesModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, ripple.RippleModule],
                exports: [Messages],
                declarations: [Messages]
            }]
    }], function () { return []; }, null); })();
        return MessagesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Messages = Messages;
    exports.MessagesModule = MessagesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-messages.umd.js.map