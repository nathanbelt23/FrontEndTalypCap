(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/skeleton', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.skeleton = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 'use strict';

    var Skeleton = /** @class */ (function () {
        function Skeleton() {
            this.shape = "rectangle";
            this.animation = "wave";
            this.borderRadius = null;
            this.size = null;
            this.width = "100%";
            this.height = "1rem";
        }
        Skeleton.prototype.containerClass = function () {
            return {
                'p-skeleton p-component': true,
                'p-skeleton-circle': this.shape === 'circle',
                'p-skeleton-none': this.animation === 'none'
            };
        };
        Skeleton.prototype.containerStyle = function () {
            if (this.size)
                return Object.assign(Object.assign({}, this.style), { width: this.size, height: this.size, borderRadius: this.borderRadius });
            else
                return Object.assign(Object.assign({}, this.style), { width: this.width, height: this.height, borderRadius: this.borderRadius });
        };
Skeleton.ɵfac = function Skeleton_Factory(t) { return new (t || Skeleton)(); };
Skeleton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Skeleton, selectors: [["p-skeleton"]], inputs: { shape: "shape", animation: "animation", borderRadius: "borderRadius", size: "size", width: "width", height: "height", styleClass: "styleClass", style: "style" }, decls: 1, vars: 4, consts: [[3, "ngClass", "ngStyle"]], template: function Skeleton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle());
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Skeleton, [{
        type: core.Component,
        args: [{
                selector: 'p-skeleton',
                template: "\n        <div [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"containerStyle()\">\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-skeleton{overflow:hidden;position:relative}.p-skeleton:after{animation:p-skeleton-animation 1.2s infinite;content:\"\";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}"]
            }]
    }], function () { return []; }, { shape: [{
            type: core.Input
        }], animation: [{
            type: core.Input
        }], borderRadius: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], width: [{
            type: core.Input
        }], height: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }] }); })();
        return Skeleton;
    }());
    Skeleton.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }],
        shape: [{ type: core.Input }],
        animation: [{ type: core.Input }],
        borderRadius: [{ type: core.Input }],
        size: [{ type: core.Input }],
        width: [{ type: core.Input }],
        height: [{ type: core.Input }]
    };
    var SkeletonModule = /** @class */ (function () {
        function SkeletonModule() {
        }
SkeletonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SkeletonModule });
SkeletonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SkeletonModule_Factory(t) { return new (t || SkeletonModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SkeletonModule, { declarations: [Skeleton], imports: [ɵngcc1.CommonModule], exports: [Skeleton] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SkeletonModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Skeleton],
                declarations: [Skeleton]
            }]
    }], function () { return []; }, null); })();
        return SkeletonModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Skeleton = Skeleton;
    exports.SkeletonModule = SkeletonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-skeleton.umd.js.map