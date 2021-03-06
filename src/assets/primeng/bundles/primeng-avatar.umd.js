(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/avatar', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.avatar = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
function Avatar_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function Avatar_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r5.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-avatar-icon");
} }
function Avatar_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Avatar_ng_template_3_span_0_Template, 1, 3, "span", 5);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    var _r3 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.icon)("ngIfElse", _r3);
} }
function Avatar_ng_template_5_img_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 8);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", ctx_r6.image, ɵngcc0.ɵɵsanitizeUrl);
} }
function Avatar_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Avatar_ng_template_5_img_0_Template, 1, 1, "img", 7);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.image);
} }
var _c0 = ["*"];
'use strict';

    var Avatar = /** @class */ (function () {
        function Avatar() {
            this.size = "normal";
            this.shape = "square";
        }
        Avatar.prototype.containerClass = function () {
            return {
                'p-avatar p-component': true,
                'p-avatar-image': this.image != null,
                'p-avatar-circle': this.shape === 'circle',
                'p-avatar-lg': this.size === 'large',
                'p-avatar-xl': this.size === 'xlarge'
            };
        };
Avatar.ɵfac = function Avatar_Factory(t) { return new (t || Avatar)(); };
Avatar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Avatar, selectors: [["p-avatar"]], inputs: { size: "size", shape: "shape", label: "label", icon: "icon", image: "image", style: "style", styleClass: "styleClass" }, ngContentSelectors: _c0, decls: 7, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["class", "p-avatar-text", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["imageTemplate", ""], [1, "p-avatar-text"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", 4, "ngIf"], [3, "src"]], template: function Avatar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Avatar_span_2_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵtemplate(3, Avatar_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, Avatar_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label)("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: [".p-avatar{align-items:center;display:inline-flex;font-size:1rem;height:2rem;justify-content:center;width:2rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{height:100%;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Avatar, [{
        type: core.Component,
        args: [{
                selector: 'p-avatar',
                template: "\n        <div [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"style\">\n            <ng-content></ng-content>\n            <span class=\"p-avatar-text\" *ngIf=\"label; else iconTemplate\">{{label}}</span>\n            <ng-template #iconTemplate><span [class]=\"icon\" [ngClass]=\"'p-avatar-icon'\" *ngIf=\"icon; else imageTemplate\"></span></ng-template>\n            <ng-template #imageTemplate><img [src]=\"image\" *ngIf=\"image\"></ng-template>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-avatar{align-items:center;display:inline-flex;font-size:1rem;height:2rem;justify-content:center;width:2rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{height:100%;width:100%}"]
            }]
    }], function () { return []; }, { size: [{
            type: core.Input
        }], shape: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], icon: [{
            type: core.Input
        }], image: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return Avatar;
    }());
    Avatar.propDecorators = {
        label: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        image: [{ type: core.Input }],
        size: [{ type: core.Input }],
        shape: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }]
    };
    var AvatarModule = /** @class */ (function () {
        function AvatarModule() {
        }
AvatarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AvatarModule });
AvatarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AvatarModule_Factory(t) { return new (t || AvatarModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AvatarModule, { declarations: [Avatar], imports: [ɵngcc1.CommonModule], exports: [Avatar] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Avatar],
                declarations: [Avatar]
            }]
    }], function () { return []; }, null); })();
        return AvatarModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Avatar = Avatar;
    exports.AvatarModule = AvatarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-avatar.umd.js.map