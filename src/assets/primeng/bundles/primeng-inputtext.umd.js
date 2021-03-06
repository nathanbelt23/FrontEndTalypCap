(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/forms'),require('@angular/common'),exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/inputtext', ['@angular/core','@angular/forms','@angular/common','exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.forms,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.inputtext = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, forms, common) { 'use strict';

    var InputText = /** @class */ (function () {
        function InputText(el, ngModel) {
            this.el = el;
            this.ngModel = ngModel;
        }
        InputText.prototype.ngDoCheck = function () {
            this.updateFilledState();
        };
        InputText.prototype.onInput = function (e) {
            this.updateFilledState();
        };
        InputText.prototype.updateFilledState = function () {
            this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
                (this.ngModel && this.ngModel.model);
        };
InputText.ɵfac = function InputText_Factory(t) { return new (t || InputText)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8)); };
InputText.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputText, selectors: [["", "pInputText", ""]], hostVars: 6, hostBindings: function InputText_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function InputText_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtext", true)("p-component", true)("p-filled", ctx.filled);
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputText, [{
        type: core.Directive,
        args: [{
                selector: '[pInputText]',
                host: {
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: core.Optional
            }] }]; }, { onInput: [{
            type: core.HostListener,
            args: ['input', ['$event']]
        }] }); })();
        return InputText;
    }());
    InputText.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: forms.NgModel, decorators: [{ type: core.Optional }] }
    ]; };
    InputText.propDecorators = {
        onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }]
    };
    var InputTextModule = /** @class */ (function () {
        function InputTextModule() {
        }
InputTextModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextModule });
InputTextModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTextModule_Factory(t) { return new (t || InputTextModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextModule, { declarations: [InputText], imports: [ɵngcc2.CommonModule], exports: [InputText] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [InputText],
                declarations: [InputText]
            }]
    }], function () { return []; }, null); })();
        return InputTextModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputText = InputText;
    exports.InputTextModule = InputTextModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-inputtext.umd.js.map