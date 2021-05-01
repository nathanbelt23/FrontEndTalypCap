(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/chip', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.chip = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
function Chip_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 6);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", ctx_r1.image, ɵngcc0.ɵɵsanitizeUrl);
} }
function Chip_div_0_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r6.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-chip-icon");
} }
function Chip_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Chip_div_0_ng_template_3_span_0_Template, 1, 3, "span", 7);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.icon);
} }
function Chip_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.label);
} }
function Chip_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵlistener("click", function Chip_div_0_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.close($event); })("keydown.enter", function Chip_div_0_span_6_Template_span_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.close($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r5.removeIcon);
    ɵngcc0.ɵɵproperty("ngClass", "pi-chip-remove-icon");
} }
function Chip_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Chip_div_0_img_2_Template, 1, 1, "img", 2);
    ɵngcc0.ɵɵtemplate(3, Chip_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, Chip_div_0_div_5_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(6, Chip_div_0_span_6_Template, 1, 3, "span", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r2 = ɵngcc0.ɵɵreference(4);
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.image)("ngIfElse", _r2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.removable);
} }
var _c0 = ["*"];
'use strict';

    var Chip = /** @class */ (function () {
        function Chip() {
            this.removeIcon = "pi pi-times-circle";
            this.onRemove = new core.EventEmitter();
            this.visible = true;
        }
        Chip.prototype.containerClass = function () {
            return {
                'p-chip p-component': true,
                'p-chip-image': this.image != null
            };
        };
        Chip.prototype.close = function (event) {
            this.visible = false;
            this.onRemove.emit(event);
        };
Chip.ɵfac = function Chip_Factory(t) { return new (t || Chip)(); };
Chip.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Chip, selectors: [["p-chip"]], inputs: { removeIcon: "removeIcon", label: "label", icon: "icon", image: "image", style: "style", styleClass: "styleClass", removable: "removable" }, outputs: { onRemove: "onRemove" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "src", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["class", "p-chip-text", 4, "ngIf"], ["tabindex", "0", 3, "class", "ngClass", "click", "keydown.enter", 4, "ngIf"], [3, "src"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-chip-text"], ["tabindex", "0", 3, "ngClass", "click", "keydown.enter"]], template: function Chip_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, Chip_div_0_Template, 7, 8, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-chip{align-items:center;display:inline-flex}.p-chip-icon.pi,.p-chip-text{line-height:1.5}.pi-chip-remove-icon{cursor:pointer;line-height:1.5}.p-chip img{border-radius:50%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Chip, [{
        type: core.Component,
        args: [{
                selector: 'p-chip',
                template: "\n        <div [ngClass]=\"containerClass()\" [class]=\"styleClass\" [ngStyle]=\"style\" *ngIf=\"visible\">\n            <ng-content></ng-content>\n            <img [src]=\"image\" *ngIf=\"image;else iconTemplate\">\n            <ng-template #iconTemplate><span *ngIf=\"icon\" [class]=\"icon\" [ngClass]=\"'p-chip-icon'\"></span></ng-template>\n            <div class=\"p-chip-text\" *ngIf=\"label\">{{label}}</div>\n            <span *ngIf=\"removable\" tabindex=\"0\" [class]=\"removeIcon\" [ngClass]=\"'pi-chip-remove-icon'\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\"></span>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-chip{align-items:center;display:inline-flex}.p-chip-icon.pi,.p-chip-text{line-height:1.5}.pi-chip-remove-icon{cursor:pointer;line-height:1.5}.p-chip img{border-radius:50%}"]
            }]
    }], function () { return []; }, { removeIcon: [{
            type: core.Input
        }], onRemove: [{
            type: core.Output
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
        }], removable: [{
            type: core.Input
        }] }); })();
        return Chip;
    }());
    Chip.propDecorators = {
        label: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        image: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        removable: [{ type: core.Input }],
        removeIcon: [{ type: core.Input }],
        onRemove: [{ type: core.Output }]
    };
    var ChipModule = /** @class */ (function () {
        function ChipModule() {
        }
ChipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ChipModule });
ChipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ChipModule_Factory(t) { return new (t || ChipModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChipModule, { declarations: [Chip], imports: [ɵngcc1.CommonModule], exports: [Chip] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ChipModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Chip],
                declarations: [Chip]
            }]
    }], function () { return []; }, null); })();
        return ChipModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Chip = Chip;
    exports.ChipModule = ChipModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-chip.umd.js.map