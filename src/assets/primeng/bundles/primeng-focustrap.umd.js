(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom')) :
    typeof define === 'function' && define.amd ? define('primeng/focustrap', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.focustrap = {}), global.ng.core, global.ng.common, global.primeng.dom));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, dom) { 'use strict';

    var FocusTrap = /** @class */ (function () {
        function FocusTrap(el) {
            this.el = el;
        }
        FocusTrap.prototype.onkeydown = function (e) {
            if (this.pFocusTrapDisabled !== true) {
                e.preventDefault();
                var focusableElements = dom.DomHandler.getFocusableElements(this.el.nativeElement);
                if (focusableElements && focusableElements.length > 0) {
                    if (!focusableElements[0].ownerDocument.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
                        if (e.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        };
FocusTrap.ɵfac = function FocusTrap_Factory(t) { return new (t || FocusTrap)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FocusTrap.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FocusTrap, selectors: [["", "pFocusTrap", ""]], hostBindings: function FocusTrap_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) { return ctx.onkeydown($event); })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) { return ctx.onkeydown($event); });
    } }, inputs: { pFocusTrapDisabled: "pFocusTrapDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FocusTrap, [{
        type: core.Directive,
        args: [{
                selector: '[pFocusTrap]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onkeydown: [{
            type: core.HostListener,
            args: ['keydown.tab', ['$event']]
        }, {
            type: core.HostListener,
            args: ['keydown.shift.tab', ['$event']]
        }], pFocusTrapDisabled: [{
            type: core.Input
        }] }); })();
        return FocusTrap;
    }());
    FocusTrap.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FocusTrap.propDecorators = {
        pFocusTrapDisabled: [{ type: core.Input }],
        onkeydown: [{ type: core.HostListener, args: ['keydown.tab', ['$event'],] }, { type: core.HostListener, args: ['keydown.shift.tab', ['$event'],] }]
    };
    var FocusTrapModule = /** @class */ (function () {
        function FocusTrapModule() {
        }
FocusTrapModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FocusTrapModule });
FocusTrapModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FocusTrapModule_Factory(t) { return new (t || FocusTrapModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FocusTrapModule, { declarations: [FocusTrap], imports: [ɵngcc1.CommonModule], exports: [FocusTrap] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FocusTrapModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [FocusTrap],
                declarations: [FocusTrap]
            }]
    }], function () { return []; }, null); })();
        return FocusTrapModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FocusTrap = FocusTrap;
    exports.FocusTrapModule = FocusTrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-focustrap.umd.js.map