(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/checkbox', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.checkbox = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, forms) { 
var _c0 = ["cb"];
var _c1 = function (a1, a2, a3) { return { "p-checkbox-label": true, "p-checkbox-label-active": a1, "p-disabled": a2, "p-checkbox-label-focus": a3 }; };
function Checkbox_label_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 7);
    ɵngcc0.ɵɵlistener("click", function Checkbox_label_6_Template_label_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); var _r0 = ɵngcc0.ɵɵreference(3); return ctx_r2.onClick($event, _r0, true); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.labelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c1, ctx_r1.checked, ctx_r1.disabled, ctx_r1.focused));
    ɵngcc0.ɵɵattribute("for", ctx_r1.inputId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
var _c2 = function (a1, a2, a3) { return { "p-checkbox p-component": true, "p-checkbox-checked": a1, "p-checkbox-disabled": a2, "p-checkbox-focused": a3 }; };
var _c3 = function (a0, a1, a2) { return { "p-highlight": a0, "p-disabled": a1, "p-focus": a2 }; };
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

    var CHECKBOX_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Checkbox; }),
        multi: true
    };
    var Checkbox = /** @class */ (function () {
        function Checkbox(cd) {
            this.cd = cd;
            this.checkboxIcon = 'pi pi-check';
            this.onChange = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
            this.focused = false;
            this.checked = false;
        }
        Checkbox.prototype.onClick = function (event, checkbox, focus) {
            event.preventDefault();
            if (this.disabled || this.readonly) {
                return;
            }
            this.checked = !this.checked;
            this.updateModel(event);
            if (focus) {
                checkbox.focus();
            }
        };
        Checkbox.prototype.updateModel = function (event) {
            if (!this.binary) {
                if (this.checked)
                    this.addValue();
                else
                    this.removeValue();
                this.onModelChange(this.model);
                if (this.formControl) {
                    this.formControl.setValue(this.model);
                }
            }
            else {
                this.onModelChange(this.checked);
            }
            this.onChange.emit({ checked: this.checked, originalEvent: event });
        };
        Checkbox.prototype.handleChange = function (event) {
            if (!this.readonly) {
                this.checked = event.target.checked;
                this.updateModel(event);
            }
        };
        Checkbox.prototype.isChecked = function () {
            if (this.binary)
                return this.model;
            else
                return this.model && this.model.indexOf(this.value) > -1;
        };
        Checkbox.prototype.removeValue = function () {
            var _this = this;
            this.model = this.model.filter(function (val) { return val !== _this.value; });
        };
        Checkbox.prototype.addValue = function () {
            if (this.model)
                this.model = __spread(this.model, [this.value]);
            else
                this.model = [this.value];
        };
        Checkbox.prototype.onFocus = function () {
            this.focused = true;
        };
        Checkbox.prototype.onBlur = function () {
            this.focused = false;
            this.onModelTouched();
        };
        Checkbox.prototype.focus = function () {
            this.inputViewChild.nativeElement.focus();
        };
        Checkbox.prototype.writeValue = function (model) {
            this.model = model;
            this.checked = this.isChecked();
            this.cd.markForCheck();
        };
        Checkbox.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Checkbox.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Checkbox.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
Checkbox.ɵfac = function Checkbox_Factory(t) { return new (t || Checkbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Checkbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Checkbox, selectors: [["p-checkbox"]], viewQuery: function Checkbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    } }, inputs: { checkboxIcon: "checkboxIcon", disabled: "disabled", value: "value", name: "name", binary: "binary", label: "label", ariaLabelledBy: "ariaLabelledBy", ariaLabel: "ariaLabel", tabindex: "tabindex", inputId: "inputId", style: "style", styleClass: "styleClass", labelStyleClass: "labelStyleClass", formControl: "formControl", readonly: "readonly", required: "required" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR])], decls: 7, vars: 26, consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "readonly", "value", "checked", "disabled", "focus", "blur", "change"], ["cb", ""], [1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"]], template: function Checkbox_Template(rf, ctx) { if (rf & 1) {
        var _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("focus", function Checkbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function Checkbox_Template_input_blur_2_listener() { return ctx.onBlur(); })("change", function Checkbox_Template_input_change_2_listener($event) { return ctx.handleChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵlistener("click", function Checkbox_Template_div_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0, true); });
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, Checkbox_label_6_Template, 2, 9, "label", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction3(18, _c2, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("readonly", ctx.readonly)("value", ctx.value)("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked)("required", ctx.required);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(22, _c3, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.checked ? ctx.checkboxIcon : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-checkbox{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;user-select:none;vertical-align:bottom}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{align-items:center;display:flex;justify-content:center}p-checkbox{align-items:center;display:inline-flex;vertical-align:bottom}.p-checkbox-label{line-height:1}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Checkbox, [{
        type: core.Component,
        args: [{
                selector: 'p-checkbox',
                template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'p-checkbox p-component': true, 'p-checkbox-checked': checked, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused}\" [class]=\"styleClass\">\n            <div class=\"p-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [readonly]=\"readonly\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-label]=\"ariaLabel\" [attr.aria-checked]=\"checked\" [attr.required]=\"required\">\n            </div>\n            <div class=\"p-checkbox-box\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}\">\n                <span class=\"p-checkbox-icon\" [ngClass]=\"checked ? checkboxIcon : null\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'p-checkbox-label': true, 'p-checkbox-label-active':checked, 'p-disabled':disabled, 'p-checkbox-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
                providers: [CHECKBOX_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-checkbox{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;user-select:none;vertical-align:bottom}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{align-items:center;display:flex;justify-content:center}p-checkbox{align-items:center;display:inline-flex;vertical-align:bottom}.p-checkbox-label{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { checkboxIcon: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], binary: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], labelStyleClass: [{
            type: core.Input
        }], formControl: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], inputViewChild: [{
            type: core.ViewChild,
            args: ['cb']
        }] }); })();
        return Checkbox;
    }());
    Checkbox.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    Checkbox.propDecorators = {
        value: [{ type: core.Input }],
        name: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        binary: [{ type: core.Input }],
        label: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        labelStyleClass: [{ type: core.Input }],
        formControl: [{ type: core.Input }],
        checkboxIcon: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        required: [{ type: core.Input }],
        inputViewChild: [{ type: core.ViewChild, args: ['cb',] }],
        onChange: [{ type: core.Output }]
    };
    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
CheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CheckboxModule });
CheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: [Checkbox], imports: [ɵngcc1.CommonModule], exports: [Checkbox] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckboxModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Checkbox],
                declarations: [Checkbox]
            }]
    }], function () { return []; }, null); })();
        return CheckboxModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CHECKBOX_VALUE_ACCESSOR = CHECKBOX_VALUE_ACCESSOR;
    exports.Checkbox = Checkbox;
    exports.CheckboxModule = CheckboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-checkbox.umd.js.map