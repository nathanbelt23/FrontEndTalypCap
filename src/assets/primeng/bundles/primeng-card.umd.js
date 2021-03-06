(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/card', ['@angular/core','@angular/common','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.card = {}), global.ng.core, global.ng.common, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, api) { 
function Card_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Card_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function Card_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Card_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.header, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.titleTemplate);
} }
function Card_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Card_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.subheader, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.subtitleTemplate);
} }
function Card_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Card_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Card_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵtemplate(2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.footerTemplate);
} }
var _c0 = ["*", [["p-header"]], [["p-footer"]]];
var _c1 = ["*", "p-header", "p-footer"];
'use strict';

    var Card = /** @class */ (function () {
        function Card(el) {
            this.el = el;
        }
        Card.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'title':
                        _this.titleTemplate = item.template;
                        break;
                    case 'subtitle':
                        _this.subtitleTemplate = item.template;
                        break;
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        Card.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
Card.ɵfac = function Card_Factory(t) { return new (t || Card)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Card.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Card, selectors: [["p-card"]], contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { header: "header", subheader: "subheader", style: "style", styleClass: "styleClass" }, ngContentSelectors: _c1, decls: 9, vars: 9, consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [1, "p-card-subtitle"], [1, "p-card-footer"]], template: function Card_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Card_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Card_div_3_Template, 3, 2, "div", 3);
        ɵngcc0.ɵɵtemplate(4, Card_div_4_Template, 3, 2, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵtemplate(7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, Card_div_8_Template, 3, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-card p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header || ctx.titleTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.subheader || ctx.subtitleTemplate);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".p-card-header img{width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Card, [{
        type: core.Component,
        args: [{
                selector: 'p-card',
                template: "\n        <div [ngClass]=\"'p-card p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-card-header\" *ngIf=\"headerFacet || headerTemplate\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n            </div>\n            <div class=\"p-card-body\">\n                <div class=\"p-card-title\" *ngIf=\"header || titleTemplate\">\n                    {{header}}\n                    <ng-container *ngTemplateOutlet=\"titleTemplate\"></ng-container>\n                </div>\n                <div class=\"p-card-subtitle\" *ngIf=\"subheader || subtitleTemplate\">\n                    {{subheader}}\n                    <ng-container *ngTemplateOutlet=\"subtitleTemplate\"></ng-container>\n                </div>\n                <div class=\"p-card-content\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n                <div class=\"p-card-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-card-header img{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { header: [{
            type: core.Input
        }], subheader: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], headerFacet: [{
            type: core.ContentChild,
            args: [api.Header]
        }], footerFacet: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Card;
    }());
    Card.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    Card.propDecorators = {
        header: [{ type: core.Input }],
        subheader: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        headerFacet: [{ type: core.ContentChild, args: [api.Header,] }],
        footerFacet: [{ type: core.ContentChild, args: [api.Footer,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
CardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[common.CommonModule], ɵngcc2.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CardModule, { declarations: [Card], imports: [ɵngcc1.CommonModule], exports: [Card, ɵngcc2.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Card, api.SharedModule],
                declarations: [Card]
            }]
    }], function () { return []; }, null); })();
        return CardModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Card = Card;
    exports.CardModule = CardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-card.umd.js.map