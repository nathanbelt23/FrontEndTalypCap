(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/divider', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.divider = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
var _c0 = ["*"];
'use strict';

    var Divider = /** @class */ (function () {
        function Divider() {
            this.layout = "horizontal";
            this.type = "solid";
        }
        Divider.prototype.containerClass = function () {
            return {
                'p-divider p-component': true,
                'p-divider-horizontal': this.layout === "horizontal",
                'p-divider-vertical': this.layout === "vertical",
                'p-divider-solid': this.type === "solid",
                'p-divider-dashed': this.type === "dashed",
                'p-divider-dotted': this.type === "dotted",
                'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left'),
                'p-divider-center': (this.layout === 'horizontal' && this.align === 'center') || (this.layout === 'vertical' && (!this.align || this.align === 'center')),
                'p-divider-right': this.layout === 'horizontal' && this.align === 'right',
                'p-divider-top': this.layout === 'vertical' && (this.align === 'top'),
                'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
            };
        };
Divider.ɵfac = function Divider_Factory(t) { return new (t || Divider)(); };
Divider.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Divider, selectors: [["p-divider"]], inputs: { layout: "layout", type: "type", styleClass: "styleClass", style: "style", align: "align" }, ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]], template: function Divider_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:\"\";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:\"\";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Divider, [{
        type: core.Component,
        args: [{
                selector: 'p-divider',
                template: "\n        <div [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"style\" role=\"separator\">\n            <div class=\"p-divider-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:\"\";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:\"\";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}"]
            }]
    }], function () { return []; }, { layout: [{
            type: core.Input
        }], type: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], align: [{
            type: core.Input
        }] }); })();
        return Divider;
    }());
    Divider.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }],
        layout: [{ type: core.Input }],
        type: [{ type: core.Input }],
        align: [{ type: core.Input }]
    };
    var DividerModule = /** @class */ (function () {
        function DividerModule() {
        }
DividerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DividerModule });
DividerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DividerModule_Factory(t) { return new (t || DividerModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DividerModule, { declarations: [Divider], imports: [ɵngcc1.CommonModule], exports: [Divider] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DividerModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Divider],
                declarations: [Divider]
            }]
    }], function () { return []; }, null); })();
        return DividerModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Divider = Divider;
    exports.DividerModule = DividerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-divider.umd.js.map