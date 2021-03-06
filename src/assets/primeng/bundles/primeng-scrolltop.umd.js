(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/animations'), require('primeng/dom')) :
    typeof define === 'function' && define.amd ? define('primeng/scrolltop', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/animations', 'primeng/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.scrolltop = {}), global.ng.core, global.ng.common, global.ng.animations, global.primeng.dom));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, animations, dom) { 
var _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c1 = function (a1) { return { value: "open", params: a1 }; };
function ScrollTop_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("@animation.start", function ScrollTop_button_0_Template_button_animation_animation_start_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onEnter(); })("click", function ScrollTop_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClick(); });
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("@animation", ɵngcc0.ɵɵpureFunction1(11, _c1, ɵngcc0.ɵɵpureFunction2(8, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-scrolltop-icon");
} }
'use strict';

    var ScrollTop = /** @class */ (function () {
        function ScrollTop(el, cd) {
            this.el = el;
            this.cd = cd;
            this.target = "window";
            this.threshold = 400;
            this.icon = "pi pi-chevron-up";
            this.behavior = "smooth";
            this.showTransitionOptions = '.15s';
            this.hideTransitionOptions = '.15s';
            this.visible = false;
        }
        ScrollTop.prototype.ngOnInit = function () {
            if (this.target === 'window')
                this.bindDocumentScrollListener();
            else if (this.target === 'parent')
                this.bindParentScrollListener();
        };
        ScrollTop.prototype.onClick = function () {
            var scrollElement = this.target === 'window' ? window : this.el.nativeElement.parentElement;
            scrollElement.scroll({
                top: 0,
                behavior: this.behavior
            });
        };
        ScrollTop.prototype.onEnter = function () {
            this.el.nativeElement.children[0].style.zIndex = dom.DomHandler.generateZIndex();
        };
        ScrollTop.prototype.checkVisibility = function (scrollY) {
            if (scrollY > this.threshold)
                this.visible = true;
            else
                this.visible = false;
            this.cd.markForCheck();
        };
        ScrollTop.prototype.bindParentScrollListener = function () {
            var _this = this;
            this.scrollListener = function () {
                _this.checkVisibility(_this.el.nativeElement.parentElement.scrollTop);
            };
            this.el.nativeElement.parentElement.addEventListener('scroll', this.scrollListener);
        };
        ScrollTop.prototype.bindDocumentScrollListener = function () {
            var _this = this;
            this.scrollListener = function () {
                _this.checkVisibility(dom.DomHandler.getWindowScrollTop());
            };
            window.addEventListener('scroll', this.scrollListener);
        };
        ScrollTop.prototype.unbindParentScrollListener = function () {
            if (this.scrollListener) {
                this.el.nativeElement.parentElement.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        };
        ScrollTop.prototype.unbindDocumentScrollListener = function () {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        };
        ScrollTop.prototype.containerClass = function () {
            return {
                'p-scrolltop p-link p-component': true,
                'p-scrolltop-sticky': this.target !== 'window'
            };
        };
        ScrollTop.prototype.ngOnDestroy = function () {
            if (this.target === 'window')
                this.unbindDocumentScrollListener();
            else if (this.target === 'parent')
                this.unbindParentScrollListener();
        };
ScrollTop.ɵfac = function ScrollTop_Factory(t) { return new (t || ScrollTop)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ScrollTop.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollTop, selectors: [["p-scrollTop"]], inputs: { target: "target", threshold: "threshold", icon: "icon", behavior: "behavior", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", styleClass: "styleClass", style: "style" }, decls: 1, vars: 1, consts: [["type", "button", 3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [3, "ngClass"]], template: function ScrollTop_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ScrollTop_button_0_Template, 2, 13, "button", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-scrolltop{align-items:center;bottom:20px;display:flex;justify-content:center;position:fixed;right:20px}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}"], encapsulation: 2, data: { animation: [
            animations.trigger('animation', [
                animations.state('void', animations.style({
                    opacity: 0
                })),
                animations.state('open', animations.style({
                    opacity: 1
                })),
                animations.transition('void => open', animations.animate('{{showTransitionParams}}')),
                animations.transition('open => void', animations.animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollTop, [{
        type: core.Component,
        args: [{
                selector: 'p-scrollTop',
                template: "\n        <button  *ngIf=\"visible\" [@animation]=\"{value: 'open', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@animation.start)=\"onEnter()\"\n            [ngClass]=\"containerClass()\" (click)=\"onClick()\" [class]=\"styleClass\" [ngStyle]=\"style\" type=\"button\">\n            <span [class]=\"icon\" [ngClass]=\"'p-scrolltop-icon'\"></span>\n        </button>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                animations: [
                    animations.trigger('animation', [
                        animations.state('void', animations.style({
                            opacity: 0
                        })),
                        animations.state('open', animations.style({
                            opacity: 1
                        })),
                        animations.transition('void => open', animations.animate('{{showTransitionParams}}')),
                        animations.transition('open => void', animations.animate('{{hideTransitionParams}}')),
                    ])
                ],
                styles: [".p-scrolltop{align-items:center;bottom:20px;display:flex;justify-content:center;position:fixed;right:20px}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { target: [{
            type: core.Input
        }], threshold: [{
            type: core.Input
        }], icon: [{
            type: core.Input
        }], behavior: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }] }); })();
        return ScrollTop;
    }());
    ScrollTop.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    ScrollTop.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }],
        target: [{ type: core.Input }],
        threshold: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        behavior: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }]
    };
    var ScrollTopModule = /** @class */ (function () {
        function ScrollTopModule() {
        }
ScrollTopModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ScrollTopModule });
ScrollTopModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ScrollTopModule_Factory(t) { return new (t || ScrollTopModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ScrollTopModule, { declarations: [ScrollTop], imports: [ɵngcc1.CommonModule], exports: [ScrollTop] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollTopModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [ScrollTop],
                declarations: [ScrollTop]
            }]
    }], function () { return []; }, null); })();
        return ScrollTopModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ScrollTop = ScrollTop;
    exports.ScrollTopModule = ScrollTopModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-scrolltop.umd.js.map