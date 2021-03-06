(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/avatargroup', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.avatargroup = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
var _c0 = ["*"];
'use strict';

    var AvatarGroup = /** @class */ (function () {
        function AvatarGroup() {
        }
AvatarGroup.ɵfac = function AvatarGroup_Factory(t) { return new (t || AvatarGroup)(); };
AvatarGroup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AvatarGroup, selectors: [["p-avatarGroup"]], inputs: { styleClass: "styleClass", style: "style" }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[3, "ngClass", "ngStyle"]], template: function AvatarGroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-avatar-group p-component")("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{align-items:center;display:flex}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarGroup, [{
        type: core.Component,
        args: [{
                selector: 'p-avatarGroup',
                template: "\n        <div [ngClass]=\"'p-avatar-group p-component'\" [class]=\"styleClass\" [ngStyle]=\"style\">\n            <ng-content></ng-content>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{align-items:center;display:flex}"]
            }]
    }], function () { return []; }, { styleClass: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }] }); })();
        return AvatarGroup;
    }());
    AvatarGroup.propDecorators = {
        styleClass: [{ type: core.Input }],
        style: [{ type: core.Input }]
    };
    var AvatarGroupModule = /** @class */ (function () {
        function AvatarGroupModule() {
        }
AvatarGroupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AvatarGroupModule });
AvatarGroupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AvatarGroupModule_Factory(t) { return new (t || AvatarGroupModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AvatarGroupModule, { declarations: [AvatarGroup], imports: [ɵngcc1.CommonModule], exports: [AvatarGroup] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarGroupModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [AvatarGroup],
                declarations: [AvatarGroup]
            }]
    }], function () { return []; }, null); })();
        return AvatarGroupModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AvatarGroup = AvatarGroup;
    exports.AvatarGroupModule = AvatarGroupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-avatargroup.umd.js.map