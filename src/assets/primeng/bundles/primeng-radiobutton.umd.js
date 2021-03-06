(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/radiobutton', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.radiobutton = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, i0, common, forms) { 
var _c0 = ["rb"];
var _c1 = function (a1, a2, a3) { return { "p-radiobutton-label": true, "p-radiobutton-label-active": a1, "p-disabled": a2, "p-radiobutton-label-focus": a3 }; };
function RadioButton_label_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵlistener("click", function RadioButton_label_6_Template_label_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.select($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵclassMap(ctx_r1.labelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c1, _r0.checked, ctx_r1.disabled, ctx_r1.focused));
    ɵngcc0.ɵɵattribute("for", ctx_r1.inputId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
var _c2 = function (a1, a2, a3) { return { "p-radiobutton p-component": true, "p-radiobutton-checked": a1, "p-radiobutton-disabled": a2, "p-radiobutton-focused": a3 }; };
var _c3 = function (a1, a2, a3) { return { "p-radiobutton-box": true, "p-highlight": a1, "p-disabled": a2, "p-focus": a3 }; };
'use strict';

    var RADIO_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return RadioButton; }),
        multi: true
    };
    var RadioControlRegistry = /** @class */ (function () {
        function RadioControlRegistry() {
            this.accessors = [];
        }
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this.accessors.push([control, accessor]);
        };
        RadioControlRegistry.prototype.remove = function (accessor) {
            this.accessors = this.accessors.filter(function (c) {
                return c[1] !== accessor;
            });
        };
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this.accessors.forEach(function (c) {
                if (_this.isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].writeValue(accessor.value);
                }
            });
        };
        RadioControlRegistry.prototype.isSameGroup = function (controlPair, accessor) {
            if (!controlPair[0].control) {
                return false;
            }
            return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
        };
RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) { return new (t || RadioControlRegistry)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioControlRegistry, [{
        type: i0.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return RadioControlRegistry;
    }());
    RadioControlRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function RadioControlRegistry_Factory() { return new RadioControlRegistry(); }, token: RadioControlRegistry, providedIn: "root" });
    var RadioButton = /** @class */ (function () {
        function RadioButton(cd, injector, registry) {
            this.cd = cd;
            this.injector = injector;
            this.registry = registry;
            this.onClick = new i0.EventEmitter();
            this.onFocus = new i0.EventEmitter();
            this.onBlur = new i0.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        RadioButton.prototype.ngOnInit = function () {
            if (this.formControlName) {
                this.control = this.injector.get(forms.NgControl);
                this.checkName();
                this.registry.add(this.control, this);
            }
        };
        RadioButton.prototype.handleClick = function (event, radioButton, focus) {
            event.preventDefault();
            if (this.disabled) {
                return;
            }
            this.select(event);
            if (focus) {
                radioButton.focus();
            }
        };
        RadioButton.prototype.select = function (event) {
            if (!this.disabled) {
                this.inputViewChild.nativeElement.checked = true;
                this.checked = true;
                this.onModelChange(this.value);
                if (this.formControlName) {
                    this.registry.select(this);
                }
                this.onClick.emit(event);
            }
        };
        RadioButton.prototype.writeValue = function (value) {
            this.checked = (value == this.value);
            if (this.inputViewChild && this.inputViewChild.nativeElement) {
                this.inputViewChild.nativeElement.checked = this.checked;
            }
            this.cd.markForCheck();
        };
        RadioButton.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        RadioButton.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        RadioButton.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        RadioButton.prototype.onInputFocus = function (event) {
            this.focused = true;
            this.onFocus.emit(event);
        };
        RadioButton.prototype.onInputBlur = function (event) {
            this.focused = false;
            this.onModelTouched();
            this.onBlur.emit(event);
        };
        RadioButton.prototype.onChange = function (event) {
            this.select(event);
        };
        RadioButton.prototype.focus = function () {
            this.inputViewChild.nativeElement.focus();
        };
        RadioButton.prototype.ngOnDestroy = function () {
            if (this.formControlName) {
                this.registry.remove(this);
            }
        };
        RadioButton.prototype.checkName = function () {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this.throwNameError();
            }
            if (!this.name && this.formControlName) {
                this.name = this.formControlName;
            }
        };
        RadioButton.prototype.throwNameError = function () {
            throw new Error("\n          If you define both a name and a formControlName attribute on your radio button, their values\n          must match. Ex: <p-radioButton formControlName=\"food\" name=\"food\"></p-radioButton>\n        ");
        };
RadioButton.ɵfac = function RadioButton_Factory(t) { return new (t || RadioButton)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(RadioControlRegistry)); };
RadioButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RadioButton, selectors: [["p-radioButton"]], viewQuery: function RadioButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    } }, inputs: { disabled: "disabled", name: "name", value: "value", formControlName: "formControlName", label: "label", tabindex: "tabindex", inputId: "inputId", ariaLabelledBy: "ariaLabelledBy", ariaLabel: "ariaLabel", style: "style", styleClass: "styleClass", labelStyleClass: "labelStyleClass" }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, features: [ɵngcc0.ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR])], decls: 7, vars: 23, consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "change", "focus", "blur"], ["rb", ""], [3, "ngClass", "click"], [1, "p-radiobutton-icon"], [3, "class", "ngClass", "click", 4, "ngIf"]], template: function RadioButton_Template(rf, ctx) { if (rf & 1) {
        var _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("change", function RadioButton_Template_input_change_2_listener($event) { return ctx.onChange($event); })("focus", function RadioButton_Template_input_focus_2_listener($event) { return ctx.onInputFocus($event); })("blur", function RadioButton_Template_input_blur_2_listener($event) { return ctx.onInputBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵlistener("click", function RadioButton_Template_div_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var _r0 = ɵngcc0.ɵɵreference(3); return ctx.handleClick($event, _r0, true); });
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, RadioButton_label_6_Template, 2, 9, "label", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction3(15, _c2, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("value", ctx.value)("tabindex", ctx.tabindex)("aria-checked", ctx.checked)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(19, _c3, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioButton, [{
        type: i0.Component,
        args: [{
                selector: 'p-radioButton',
                template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'p-radiobutton p-component':true,'p-radiobutton-checked': checked, 'p-radiobutton-disabled': disabled, 'p-radiobutton-focused': focused}\" [class]=\"styleClass\">\n            <div class=\"p-hidden-accessible\">\n                <input #rb type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.value]=\"value\" [attr.tabindex]=\"tabindex\" [attr.aria-checked]=\"checked\" [attr.aria-label]=\"ariaLabel\"\n                    [attr.aria-labelledby]=\"ariaLabelledBy\" [checked]=\"checked\" (change)=\"onChange($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\">\n            </div>\n            <div (click)=\"handleClick($event, rb, true)\" [ngClass]=\"{'p-radiobutton-box':true, 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}\">\n                <span class=\"p-radiobutton-icon\"></span>\n            </div>\n        </div>\n        <label (click)=\"select($event)\" [class]=\"labelStyleClass\"\n            [ngClass]=\"{'p-radiobutton-label':true, 'p-radiobutton-label-active':rb.checked, 'p-disabled':disabled, 'p-radiobutton-label-focus':focused}\"\n            *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
                providers: [RADIO_VALUE_ACCESSOR],
                changeDetection: i0.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Injector }, { type: RadioControlRegistry }]; }, { onClick: [{
            type: i0.Output
        }], onFocus: [{
            type: i0.Output
        }], onBlur: [{
            type: i0.Output
        }], disabled: [{
            type: i0.Input
        }], name: [{
            type: i0.Input
        }], value: [{
            type: i0.Input
        }], formControlName: [{
            type: i0.Input
        }], label: [{
            type: i0.Input
        }], tabindex: [{
            type: i0.Input
        }], inputId: [{
            type: i0.Input
        }], ariaLabelledBy: [{
            type: i0.Input
        }], ariaLabel: [{
            type: i0.Input
        }], style: [{
            type: i0.Input
        }], styleClass: [{
            type: i0.Input
        }], labelStyleClass: [{
            type: i0.Input
        }], inputViewChild: [{
            type: i0.ViewChild,
            args: ['rb']
        }] }); })();
        return RadioButton;
    }());
    RadioButton.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: i0.Injector },
        { type: RadioControlRegistry }
    ]; };
    RadioButton.propDecorators = {
        value: [{ type: i0.Input }],
        formControlName: [{ type: i0.Input }],
        name: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        label: [{ type: i0.Input }],
        tabindex: [{ type: i0.Input }],
        inputId: [{ type: i0.Input }],
        ariaLabelledBy: [{ type: i0.Input }],
        ariaLabel: [{ type: i0.Input }],
        style: [{ type: i0.Input }],
        styleClass: [{ type: i0.Input }],
        labelStyleClass: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }],
        onFocus: [{ type: i0.Output }],
        onBlur: [{ type: i0.Output }],
        inputViewChild: [{ type: i0.ViewChild, args: ['rb',] }]
    };
    var RadioButtonModule = /** @class */ (function () {
        function RadioButtonModule() {
        }
RadioButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RadioButtonModule });
RadioButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RadioButtonModule_Factory(t) { return new (t || RadioButtonModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RadioButtonModule, { declarations: [RadioButton], imports: [ɵngcc1.CommonModule], exports: [RadioButton] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RadioButtonModule, [{
        type: i0.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [RadioButton],
                declarations: [RadioButton]
            }]
    }], function () { return []; }, null); })();
        return RadioButtonModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RADIO_VALUE_ACCESSOR = RADIO_VALUE_ACCESSOR;
    exports.RadioButton = RadioButton;
    exports.RadioButtonModule = RadioButtonModule;
    exports.RadioControlRegistry = RadioControlRegistry;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-radiobutton.umd.js.map