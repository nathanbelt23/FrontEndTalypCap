(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('primeng/dom'), require('primeng/utils')) :
    typeof define === 'function' && define.amd ? define('primeng/badge', ['@angular/core','@angular/common','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/api', 'primeng/dom', 'primeng/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.badge = {}), global.ng.core, global.ng.common, global.primeng.api, global.primeng.dom, global.primeng.utils));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, api, dom, utils) { 'use strict';

    var BadgeDirective = /** @class */ (function () {
        function BadgeDirective(el) {
            this.el = el;
            this.iconPos = 'left';
        }
        BadgeDirective.prototype.ngAfterViewInit = function () {
            this.id = utils.UniqueComponentId() + '_badge';
            var el = this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
            var badge = document.createElement('span');
            badge.id = this.id;
            badge.className = 'p-badge p-component';
            if (this.severity) {
                dom.DomHandler.addClass(badge, 'p-badge-' + this.severity);
            }
            if (this.value != null) {
                badge.appendChild(document.createTextNode(this.value));
                if (String(this.value).length === 1) {
                    dom.DomHandler.addClass(badge, 'p-badge-no-gutter');
                }
            }
            else {
                dom.DomHandler.addClass(badge, 'p-badge-dot');
            }
            dom.DomHandler.addClass(el, 'p-overlay-badge');
            el.appendChild(badge);
            this.initialized = true;
        };
        Object.defineProperty(BadgeDirective.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (val) {
                if (val !== this._value) {
                    this._value = val;
                    if (this.initialized) {
                        var badge = document.getElementById(this.id);
                        if (this._value) {
                            if (dom.DomHandler.hasClass(badge, 'p-badge-dot'))
                                dom.DomHandler.removeClass(badge, 'p-badge-dot');
                            if (String(this._value).length === 1) {
                                dom.DomHandler.addClass(badge, 'p-badge-no-gutter');
                            }
                            else {
                                dom.DomHandler.removeClass(badge, 'p-badge-no-gutter');
                            }
                        }
                        else if (!this._value && !dom.DomHandler.hasClass(badge, 'p-badge-dot')) {
                            dom.DomHandler.addClass(badge, 'p-badge-dot');
                        }
                        badge.innerHTML = '';
                        badge.appendChild(document.createTextNode(this._value));
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        BadgeDirective.prototype.ngOnDestroy = function () {
            this.initialized = false;
        };
BadgeDirective.ɵfac = function BadgeDirective_Factory(t) { return new (t || BadgeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BadgeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BadgeDirective, selectors: [["", "pBadge", ""]], inputs: { iconPos: "iconPos", value: "value", severity: "severity" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeDirective, [{
        type: core.Directive,
        args: [{
                selector: '[pBadge]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { iconPos: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], severity: [{
            type: core.Input
        }] }); })();
        return BadgeDirective;
    }());
    BadgeDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    BadgeDirective.propDecorators = {
        iconPos: [{ type: core.Input }],
        value: [{ type: core.Input }],
        severity: [{ type: core.Input }]
    };
    var Badge = /** @class */ (function () {
        function Badge() {
        }
        Badge.prototype.containerClass = function () {
            return {
                'p-badge p-component': true,
                'p-badge-no-gutter': this.value && String(this.value).length === 1,
                'p-badge-lg': this.size === 'large',
                'p-badge-xl': this.size === 'xlarge',
                'p-badge-info': this.severity === 'info',
                'p-badge-success': this.severity === 'success',
                'p-badge-warning': this.severity === 'warning',
                'p-badge-danger': this.severity === 'danger'
            };
        };
Badge.ɵfac = function Badge_Factory(t) { return new (t || Badge)(); };
Badge.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Badge, selectors: [["p-badge"]], inputs: { styleClass: "styleClass", style: "style", size: "size", severity: "severity", value: "value" }, decls: 2, vars: 5, consts: [[3, "ngClass", "ngStyle"]], template: function Badge_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-badge{border-radius:10px;display:inline-block;padding:0 .5rem;text-align:center}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{margin:0;position:absolute;right:0;top:0;transform:translate(50%,-50%);transform-origin:100% 0}.p-badge-dot{height:.5rem;min-width:.5rem;width:.5rem}.p-badge-dot,.p-badge-no-gutter{border-radius:50%;padding:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Badge, [{
        type: core.Component,
        args: [{
                selector: 'p-badge',
                template: "\n        <span [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"style\">\n                {{value}}\n        </span>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-badge{border-radius:10px;display:inline-block;padding:0 .5rem;text-align:center}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{margin:0;position:absolute;right:0;top:0;transform:translate(50%,-50%);transform-origin:100% 0}.p-badge-dot{height:.5rem;min-width:.5rem;width:.5rem}.p-badge-dot,.p-badge-no-gutter{border-radius:50%;padding:0}"]
            }]
    }], function () { return []; }, { styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], severity: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }] }); })();
        return Badge;
    }());
    Badge.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }],
        size: [{ type: core.Input }],
        severity: [{ type: core.Input }],
        value: [{ type: core.Input }]
    };
    var BadgeModule = /** @class */ (function () {
        function BadgeModule() {
        }
BadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BadgeModule });
BadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BadgeModule_Factory(t) { return new (t || BadgeModule)(); }, imports: [[common.CommonModule], ɵngcc2.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BadgeModule, { declarations: [Badge, BadgeDirective], imports: [ɵngcc1.CommonModule], exports: [Badge, BadgeDirective, ɵngcc2.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BadgeModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Badge, BadgeDirective, api.SharedModule],
                declarations: [Badge, BadgeDirective]
            }]
    }], function () { return []; }, null); })();
        return BadgeModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Badge = Badge;
    exports.BadgeDirective = BadgeDirective;
    exports.BadgeModule = BadgeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-badge.umd.js.map