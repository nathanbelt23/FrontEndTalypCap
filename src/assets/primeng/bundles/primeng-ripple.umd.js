(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/api'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/ripple', ['@angular/core','primeng/api','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.api,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.ripple = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, dom, api) { 'use strict';

    var Ripple = /** @class */ (function () {
        function Ripple(el, zone, config) {
            this.el = el;
            this.zone = zone;
            this.config = config;
        }
        Ripple.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.config && this.config.ripple) {
                this.zone.runOutsideAngular(function () {
                    _this.create();
                    _this.mouseDownListener = _this.onMouseDown.bind(_this);
                    _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                });
            }
        };
        Ripple.prototype.onMouseDown = function (event) {
            var ink = this.getInk();
            if (!ink || getComputedStyle(ink, null).display === 'none') {
                return;
            }
            dom.DomHandler.removeClass(ink, 'p-ink-active');
            if (!dom.DomHandler.getHeight(ink) && !dom.DomHandler.getWidth(ink)) {
                var d = Math.max(dom.DomHandler.getOuterWidth(this.el.nativeElement), dom.DomHandler.getOuterHeight(this.el.nativeElement));
                ink.style.height = d + 'px';
                ink.style.width = d + 'px';
            }
            var offset = dom.DomHandler.getOffset(this.el.nativeElement);
            var x = event.pageX - offset.left + document.body.scrollTop - dom.DomHandler.getWidth(ink) / 2;
            var y = event.pageY - offset.top + document.body.scrollLeft - dom.DomHandler.getHeight(ink) / 2;
            ink.style.top = y + 'px';
            ink.style.left = x + 'px';
            dom.DomHandler.addClass(ink, 'p-ink-active');
        };
        Ripple.prototype.getInk = function () {
            for (var i = 0; i < this.el.nativeElement.children.length; i++) {
                if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
                    return this.el.nativeElement.children[i];
                }
            }
            return null;
        };
        Ripple.prototype.resetInk = function () {
            var ink = this.getInk();
            if (ink) {
                dom.DomHandler.removeClass(ink, 'p-ink-active');
            }
        };
        Ripple.prototype.onAnimationEnd = function (event) {
            dom.DomHandler.removeClass(event.currentTarget, 'p-ink-active');
        };
        Ripple.prototype.create = function () {
            var ink = document.createElement('span');
            ink.className = 'p-ink';
            this.el.nativeElement.appendChild(ink);
            this.animationListener = this.onAnimationEnd.bind(this);
            ink.addEventListener('animationend', this.animationListener);
        };
        Ripple.prototype.remove = function () {
            var ink = this.getInk();
            if (ink) {
                this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
                ink.removeEventListener('animationend', this.animationListener);
                dom.DomHandler.removeElement(ink);
            }
        };
        Ripple.prototype.ngOnDestroy = function () {
            if (this.config && this.config.ripple) {
                this.remove();
            }
        };
Ripple.ɵfac = function Ripple_Factory(t) { return new (t || Ripple)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PrimeNGConfig, 8)); };
Ripple.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Ripple, selectors: [["", "pRipple", ""]], hostVars: 2, hostBindings: function Ripple_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-ripple", true);
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ripple, [{
        type: core.Directive,
        args: [{
                selector: '[pRipple]',
                host: {
                    '[class.p-ripple]': 'true'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.PrimeNGConfig, decorators: [{
                type: core.Optional
            }] }]; }, null); })();
        return Ripple;
    }());
    Ripple.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: api.PrimeNGConfig, decorators: [{ type: core.Optional }] }
    ]; };
    var RippleModule = /** @class */ (function () {
        function RippleModule() {
        }
RippleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RippleModule });
RippleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RippleModule_Factory(t) { return new (t || RippleModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RippleModule, { declarations: [Ripple], imports: [ɵngcc2.CommonModule], exports: [Ripple] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RippleModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Ripple],
                declarations: [Ripple]
            }]
    }], function () { return []; }, null); })();
        return RippleModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Ripple = Ripple;
    exports.RippleModule = RippleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-ripple.umd.js.map